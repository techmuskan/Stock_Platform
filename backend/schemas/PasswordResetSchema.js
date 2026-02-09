const { Schema } = require("mongoose");

const PasswordResetSchema = new Schema(
  {
    email: { type: String, required: true, index: true },
    otpHash: { type: String, required: true },
    expiresAt: { type: Date, required: true, index: true },
    used: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// TTL index to auto-remove expired records
PasswordResetSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = { PasswordResetSchema };
