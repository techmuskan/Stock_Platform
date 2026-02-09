const User = require("../models/UserModel");
const { createSecretToken } = require("../util/secretToken.js");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
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
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    };

    // send token in cookie
    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      success: true,
      message: "User signed up successfully",
    });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports.Login = async (req, res) => {
  try {
    const email = req.body.email?.trim();
    const password = req.body.password?.trim();

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    // ✅ IMPORTANT: set JWT cookie here too
    const token = createSecretToken(user._id);
    const isProd = process.env.NODE_ENV === "production";
    const cookieOptions = {
      httpOnly: true,
      sameSite: isProd ? "none" : "lax",
      secure: isProd,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    };
    res.cookie("token", token, cookieOptions);

    res.status(200).json({ success: true, message: "Login successful" });

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
    });
    return res.status(200).json({ success: true, message: "Logged out" });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
