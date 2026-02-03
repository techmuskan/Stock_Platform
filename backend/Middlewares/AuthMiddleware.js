const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token; // Read token from cookies
    if (!token) {
      return res.status(401).json({ status: false, message: "No token found" });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ status: false, message: "Invalid token" });
      }

      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(401).json({ status: false, message: "User not found" });
      }

      return res.json({
        status: true,
        user: user.username,
      });
    });
  } catch (error) {
    console.error("Verification error:", error);
    return res.status(500).json({ status: false, message: "Internal server error" });
  }
};

module.exports.requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "No token found" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
