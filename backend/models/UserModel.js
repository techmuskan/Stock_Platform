const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Enter a valid email address"],
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
    trim: true,
    minlength: [2, "Username must be at least 2 characters"],
    maxlength: [40, "Username must be under 40 characters"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
    minlength: [8, "Password must be at least 8 characters"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
});


module.exports = mongoose.model("User", userSchema);
