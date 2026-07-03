import React from "react";
import "./CTA.css";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="cta" id="contact">
      <div className="cta-container">
        <div className="cta-content">
          <span className="cta-tag">Get Started Today</span>

          <h2>
            Ready to Build Your <span>Dream Resume?</span>
          </h2>

          <p>
            Create ATS-friendly resumes, receive AI-powered suggestions,
            and increase your chances of getting hired with our AI Resume
            Builder & Screening System.
          </p>

          <div className="cta-buttons">
            <button className="cta-primary-btn">
              Get Started <FaArrowRight />
            </button>

            <button className="cta-secondary-btn">
              Contact Us
            </button>
          </div>
        </div>

        <div className="cta-card">
          <h3>Why Choose Us?</h3>

          <ul>
            <li>✔ AI Resume Builder</li>
            <li>✔ ATS Resume Checker</li>
            <li>✔ Smart Content Suggestions</li>
            <li>✔ Professional Templates</li>
            <li>✔ Instant PDF Download</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CTA;