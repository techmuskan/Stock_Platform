const { model } = require("mongoose");
const { PasswordResetSchema } = require("../schemas/PasswordResetSchema");

const PasswordResetModel = new model("password_reset", PasswordResetSchema);

module.exports = { PasswordResetModel };
