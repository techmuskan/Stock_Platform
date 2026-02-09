const nodemailer = require("nodemailer");

const buildTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = port === 465;

  if (!host || !user || !pass) {
    throw new Error("SMTP configuration missing. Set SMTP_HOST, SMTP_USER, SMTP_PASS.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
};

const sendPasswordResetOtp = async ({ to, otp }) => {
  const transporter = buildTransporter();
  const from = process.env.SMTP_FROM || "Stock Platform <no-reply@stockplatform.local>";

  const subject = "Your password reset OTP";
  const text = `Your OTP for password reset is ${otp}. It expires in 10 minutes.`;

  const html = `
    <div style="font-family: Arial, sans-serif; color: #111827;">
      <h2>Password reset OTP</h2>
      <p>Use the OTP below to reset your password. It expires in 10 minutes.</p>
      <div style="font-size: 24px; font-weight: 700; letter-spacing: 3px; margin: 16px 0;">
        ${otp}
      </div>
      <p>If you didn't request this, you can ignore this email.</p>
    </div>
  `;

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
  });
};

module.exports = { sendPasswordResetOtp };
