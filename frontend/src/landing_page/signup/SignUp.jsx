// src/SignUp.jsx
import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setStatus({ type: "", message: "" });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const apiBaseUrl =
    import.meta.env.VITE_API_BASE_URL || window.location.origin;
  const dashboardUrl =
    import.meta.env.VITE_DASHBOARD_URL || `${window.location.origin}/dashboard`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (formData.password !== formData.confirmPassword) {
      setStatus({ type: "error", message: "Passwords do not match." });
      return;
    }

    try {
      setSubmitting(true);
      const res = await axios.post(
        `${apiBaseUrl}/api/auth/signup`,
        {
          email: formData.email,
          username: formData.username,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );
      setStatus({
        type: "success",
        message: res.data?.nextStep || "Signup successful. Redirecting to dashboard login...",
      });
      window.location.href = `${dashboardUrl}/login`; // redirect to dashboard login
    } catch (err) {
      setStatus({
        type: "error",
        message: err.response?.data?.message || "Signup failed",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-shell">
        <div className="signup-brand">
          <div className="signup-badge">Stock Platform</div>
          <h1>Open a free account</h1>
          <p>
            Simple, fast onboarding with a clean, distraction-free experience.
            Track your application or login to continue.
          </p>
          <ul>
            <li>Zero account opening charges</li>
            <li>Unified access to dashboard & reports</li>
            <li>Secure, privacy-first signup</li>
          </ul>
          <div className="signup-meta">
            Already have an account?
            <a href={`${dashboardUrl}/login`}>Login</a>
          </div>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create your account</h2>
          <p>Use your email to get started. We’ll guide you step by step.</p>
          {status.message && (
            <div className={`signup-message signup-message-${status.type}`}>
              {status.message}
            </div>
          )}

          <label className="signup-label" htmlFor="signup-email">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            name="email"
            placeholder="name@example.com"
            onChange={handleChange}
            required
          />

          <label className="signup-label" htmlFor="signup-username">
            Username
          </label>
          <input
            id="signup-username"
            type="text"
            name="username"
            placeholder="Your display name"
            onChange={handleChange}
            required
          />

          <label className="signup-label" htmlFor="signup-password">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            name="password"
            placeholder="Create a strong password"
            onChange={handleChange}
            required
          />
          <div className="signup-helper">
            Use at least 8 characters with uppercase, lowercase, number, and special character.
          </div>

          <label className="signup-label" htmlFor="signup-confirm-password">
            Confirm password
          </label>
          <input
            id="signup-confirm-password"
            type="password"
            name="confirmPassword"
            placeholder="Re-enter your password"
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={submitting}>
            {submitting ? "Creating account..." : "Create account"}
          </button>
          <div className="signup-footnote">
            By continuing, you agree to our Terms and Privacy Policy.
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
