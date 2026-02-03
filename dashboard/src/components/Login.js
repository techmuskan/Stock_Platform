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
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
