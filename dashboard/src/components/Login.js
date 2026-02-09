// src/components/Login.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/client";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { loading, isAuth, refreshAuth } = useAuth();

  useEffect(() => {
    if (!loading && isAuth) {
      navigate("/");
    }
  }, [loading, isAuth, navigate]);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/auth/login", data);
      await refreshAuth();
      alert("Login successful!");
      navigate("/"); // Redirect to dashboard
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  if (loading) {
    return <div>Checking session...</div>;
  }

  return (
    <div className="auth-page">
      <div className="auth-shell">
        <div className="auth-brand">
          <div className="auth-badge">Stock Platform</div>
          <h1>Welcome back</h1>
          <p>Login to access your dashboard, orders, and insights.</p>
          <ul>
            <li>Fast, secure access</li>
            <li>Unified account view</li>
            <li>Real-time portfolio insights</li>
          </ul>
        </div>

        <form className="auth-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <p>Use the email you registered with.</p>
          <label className="auth-label" htmlFor="login-email">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            name="email"
            placeholder="name@example.com"
            value={data.email}
            onChange={handleChange}
            required
          />
          <label className="auth-label" htmlFor="login-password">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange}
            required
          />
          <div className="auth-footer">
            <button
              type="button"
              className="auth-link"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </button>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
