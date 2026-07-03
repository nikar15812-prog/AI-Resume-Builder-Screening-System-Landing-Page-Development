import React from "react";
import "./Hero.css";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">

        <div className="update-badge">
          <span>✨ Update</span>
          <p> Browse New Templates <FaArrowRight /> </p>
        </div>

        <h1>Build Your <span>Professional Resume</span> <br />  with AI Resume Builder</h1>

        <p className="hero-description">
          Create ATS-friendly resumes, receive AI-powered suggestions,
          and improve your chances of landing your dream job.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Contact Us</button>
        </div>

        <div className="hero-features">
          <span> <FaCheck /> 30 Days Free Trial  </span>

          <span>  <FaCheck /> 3000+ Resume Templates </span>

          <span><FaCheck /> ATS Friendly </span>
        </div>

      </div>

      <div className="hero-image">

        <div className="resume-card card-left">
          <h3>Professional</h3>
          <p>Modern Resume Template</p>
        </div>

        <div className="resume-card card-center">
          <h2>mounika R</h2>

          <div className="resume-section">
            <h4>Education</h4>
            <p>M.E- VLSI </p>
          </div>

          <div className="resume-section">
            <h4>Experience</h4>
            <p>Frontend Developer</p>
          </div>

          <div className="resume-section">
            <h4>Skills</h4>
            <p>React • JavaScript • HTML • CSS</p>
          </div>
        </div>

        <div className="resume-card card-right">
          <h3>ATS Score</h3>
          <h1>96%</h1>
          <p>Excellent Resume</p>
        </div>

      </div>
    </section>
  );
};

export default Hero;