import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/client";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState("request");
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await api.post("/api/auth/forgot-password", { email });
      alert("If the account exists, an OTP has been sent.");
      setStep("reset");
    } catch (err) {
      console.error(err);
      alert("Could not send OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await api.post("/api/auth/reset-password", {
        email,
        otp: form.otp,
        password: form.password,
        confirmPassword: form.confirmPassword,
      });
      alert("Password updated. Please login.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-page">
      <div className="auth-shell">
        <div className="auth-brand">
          <div className="auth-badge">Stock Platform</div>
          <h1>Reset your password</h1>
          <p>We'll send a one-time code to your email to verify the reset.</p>
          <ul>
            <li>6-digit OTP, expires in 10 minutes</li>
            <li>Secure, single-use verification</li>
            <li>Instant access once updated</li>
          </ul>
        </div>

        {step === "request" ? (
          <form className="auth-form" onSubmit={handleRequest}>
            <h2>Request OTP</h2>
            <p>Enter your account email to receive the OTP.</p>
            <label className="auth-label" htmlFor="forgot-email">
              Email
            </label>
            <input
              id="forgot-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send OTP"}
            </button>
            <div className="auth-footer">
              <button
                type="button"
                className="auth-link"
                onClick={() => navigate("/login")}
              >
                Back to login
              </button>
            </div>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleReset}>
            <h2>Verify & reset</h2>
            <p>Enter the OTP and choose a new password.</p>
            <label className="auth-label" htmlFor="reset-otp">
              OTP
            </label>
            <input
              id="reset-otp"
              name="otp"
              type="text"
              value={form.otp}
              onChange={handleFormChange}
              placeholder="6-digit code"
              required
            />
            <label className="auth-label" htmlFor="reset-password">
              New password
            </label>
            <input
              id="reset-password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleFormChange}
              placeholder="Create a strong password"
              required
            />
            <label className="auth-label" htmlFor="reset-confirm">
              Confirm password
            </label>
            <input
              id="reset-confirm"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleFormChange}
              placeholder="Re-enter password"
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Reset password"}
            </button>
            <div className="auth-footer">
              <button
                type="button"
                className="auth-link"
                onClick={handleRequest}
                disabled={loading}
              >
                Resend OTP
              </button>
              <button
                type="button"
                className="auth-link"
                onClick={() => navigate("/login")}
              >
                Back to login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
