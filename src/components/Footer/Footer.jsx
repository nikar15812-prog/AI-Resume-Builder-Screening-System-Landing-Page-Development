import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* Company */}
        <div className="footer-section">
          <h2 className="footer-logo">
            Resume<span>AI</span>
          </h2>

          <p>
            Build ATS-friendly resumes with AI, improve your hiring
            chances, and get noticed by recruiters faster.
          </p>

          <div className="social-icons">
            <a href="/">
              <FaFacebookF />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaLinkedinIn />
            </a>
            <a href="/">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>

          <ul>
            <li>AI Resume Builder</li>
            <li>Resume Screening</li>
            <li>ATS Resume Checker</li>
            <li>Career Guidance</li>
            <li>Resume Templates</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt className="footer-icon" />
            Chennai, Tamil Nadu
          </p>

          <p>
            <FaPhoneAlt className="footer-icon" />
            +91 98765 43210
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
            support@resumeai.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 ResumeAI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;