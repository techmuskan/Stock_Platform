import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleNavClick = () => setIsOpen(false);

  return (
    <div
      className="container-fluid border-bottom sticky-top"
      style={{ backgroundColor: "#ffffff" }}
    >
      <nav className="navbar navbar-expand-lg landing-navbar">
        <Link className="navbar-brand" to="/">
          <img src="media/logo.svg" alt="logo" className="landing-logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup" onClick={handleNavClick}>
                Signup
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={handleNavClick}>
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/product" onClick={handleNavClick}>
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing" onClick={handleNavClick}>
                Pricing
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/support" onClick={handleNavClick}>
                Support
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/lab" onClick={handleNavClick}>
                Market Lab
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
