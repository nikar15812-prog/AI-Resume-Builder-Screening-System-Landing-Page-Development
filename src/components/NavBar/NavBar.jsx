import React, { useState } from "react";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <span className="logo-dark">Resume</span>
        <span className="logo-blue">AI</span>
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>  Home </a>
        <a href="#features" onClick={() => setMenuOpen(false)}>  Features  </a>
        <a href="#how-it-works" onClick={() => setMenuOpen(false)}> How It Works </a>
        <a href="#pricing" onClick={() => setMenuOpen(false)}> Pricing </a>
        <a href="#faq" onClick={() => setMenuOpen(false)}> FAQ </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Get Started</button>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Navbar;