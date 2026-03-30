const User = require("../models/UserModel");
const { createSecretToken } = require("../util/secretToken.js");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { PasswordResetModel } = require("../models/PasswordResetModel");
const { sendPasswordResetOtp } = require("../util/mailer");
const {
  getLoginThrottleStatus,
  registerLoginFailure,
  clearLoginFailures,
  getRecoveryThrottleStatus,
  registerRecoveryFailure,
  clearRecoveryFailures,
} = require("../util/authGuards");

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const STRONG_PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

const getClientIp = (req) =>
  req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.ip || req.socket?.remoteAddress;

const buildPasswordMessage = () =>
  "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";

module.exports.Signup = async (req, res) => {
  try {
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password?.trim();
    const username = req.body.username?.trim();

    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ message: "Enter a valid email address" });
    }

    if (username.length < 2) {
      return res.status(400).json({ message: "Username must be at least 2 characters" });
    }

    if (!STRONG_PASSWORD_REGEX.test(password)) {
      return res.status(400).json({ message: buildPasswordMessage() });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // create user (password is hashed in pre-save)
    const user = await User.create({ email, password, username });

    // create JWT token
    const token = createSecretToken(user._id);

    const isProd = process.env.NODE_ENV === "production";
    const cookieOptions = {
      httpOnly: true,
      sameSite: isProd ? "none" : "lax",
      secure: isProd,
      path: "/",
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    };

    // send token in cookie
    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      success: true,
      message: "User signed up successfully",
      nextStep: "Use your email and password to log in from the dashboard.",
    });

  } catch (error) {
    console.error("Signup error:", error);
    if (error.code === 11000) {
      return res.status(409).json({ message: "An account with this email already exists" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports.Login = async (req, res) => {
  try {
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password?.trim();
    const ip = getClientIp(req);

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ message: "Enter a valid email address" });
    }

    const throttleStatus = getLoginThrottleStatus(email, ip);
    if (throttleStatus.blocked) {
      return res.status(429).json({
        message: `Too many login attempts. Try again in about ${throttleStatus.retryAfterSeconds} seconds.`,
      });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      const failure = registerLoginFailure(email, ip);
      return res.status(401).json({
        message:
          failure.attemptsRemaining > 0
            ? `Incorrect email or password. ${failure.attemptsRemaining} attempt(s) remaining before temporary lockout.`
            : `Too many login attempts. Try again in about ${failure.retryAfterSeconds} seconds.`,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const failure = registerLoginFailure(email, ip);
      return res.status(401).json({
        message:
          failure.attemptsRemaining > 0
            ? `Incorrect email or password. ${failure.attemptsRemaining} attempt(s) remaining before temporary lockout.`
            : `Too many login attempts. Try again in about ${failure.retryAfterSeconds} seconds.`,
      });
    }

    clearLoginFailures(email, ip);

    const token = createSecretToken(user._id);
    const isProd = process.env.NODE_ENV === "production";
    const cookieOptions = {
      httpOnly: true,
      sameSite: isProd ? "none" : "lax",
      secure: isProd,
      path: "/",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    };
    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        username: user.username,
        email: user.email,
      },
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.Logout = async (_req, res) => {
  try {
    const isProd = process.env.NODE_ENV === "production";
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: isProd ? "none" : "lax",
      secure: isProd,
      path: "/",
    });
    return res.status(200).json({ success: true, message: "Logged out" });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.ForgotPassword = async (req, res) => {
  try {
    const email = req.body.email?.trim().toLowerCase();
    const ip = getClientIp(req);
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ message: "Enter a valid email address" });
    }

    const throttleStatus = getRecoveryThrottleStatus(email, ip);
    if (throttleStatus.blocked) {
      return res.status(429).json({
        message: `Too many reset requests. Try again in about ${throttleStatus.retryAfterSeconds} seconds.`,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({
        success: true,
        message: "If the account exists, an OTP has been sent.",
      });
    }

    // Invalidate any active OTPs for this email
    await PasswordResetModel.updateMany(
      { email, used: false, expiresAt: { $gt: new Date() } },
      { $set: { used: true } }
    );

    const otp = String(crypto.randomInt(0, 1000000)).padStart(6, "0");
    const otpHash = await bcrypt.hash(otp, 10);
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await PasswordResetModel.create({ email, otpHash, expiresAt });
    await sendPasswordResetOtp({ to: email, otp });
    clearRecoveryFailures(email, ip);

    return res.status(200).json({
      success: true,
      message: "If the account exists, an OTP has been sent.",
      expiresInMinutes: 10,
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    const email = req.body.email?.trim().toLowerCase();
    registerRecoveryFailure(email, getClientIp(req));
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.ResetPassword = async (req, res) => {
  try {
    const email = req.body.email?.trim().toLowerCase();
    const otp = req.body.otp?.trim();
    const password = req.body.password?.trim();
    const confirmPassword = req.body.confirmPassword?.trim();

    if (!email || !otp || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    if (!STRONG_PASSWORD_REGEX.test(password)) {
      return res.status(400).json({ message: buildPasswordMessage() });
    }

    const reset = await PasswordResetModel.findOne({
      email,
      used: false,
      expiresAt: { $gt: new Date() },
    }).sort({ createdAt: -1 });

    if (!reset) {
      return res.status(400).json({ message: "OTP expired or invalid" });
    }

    const otpMatch = await bcrypt.compare(otp, reset.otpHash);
    if (!otpMatch) {
      return res.status(400).json({ message: "OTP expired or invalid" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.password = password;
    await user.save();

    reset.used = true;
    await reset.save();
    clearRecoveryFailures(email, getClientIp(req));

    return res.status(200).json({ success: true, message: "Password updated" });
  } catch (error) {
    console.error("Reset password error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
