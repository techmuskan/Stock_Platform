// src/SignUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/api/auth/signup", formData, {
        withCredentials: true, // optional for signup
      });
      alert("Signup successful! Please login in the dashboard.");
      window.location.href = "http://localhost:3000/login"; // redirect to dashboard login
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
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
            <a href="http://localhost:3000/login">Login</a>
          </div>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create your account</h2>
          <p>Use your email to get started. We’ll guide you step by step.</p>

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

          <button type="submit">Create account</button>
          <div className="signup-footnote">
            By continuing, you agree to our Terms and Privacy Policy.
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
