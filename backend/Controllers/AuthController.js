const User = require("../models/UserModel");
const { createSecretToken } = require("../util/secretToken.js");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      username,
      createdAt,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });

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
    console.log("Login request body:", req.body);

    const { email, password } = req.body;

    if (!email || !password) {
      console.log("Missing email or password in request");
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log(`No user found with email: ${email}`);
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    console.log(`User found: ${user.email}, hashed password: ${user.password}`);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match result:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });

    console.log(`User ${user.username} logged in successfully`);

    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: user.username,
    });

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
