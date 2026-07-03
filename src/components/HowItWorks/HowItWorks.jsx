import React from "react";
import "./HowItWorks.css";
import {
  FaUserPlus,
  FaRegEdit,
  FaRobot,
  FaDownload,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus />,
      title: "Create Account",
      description:
        "Sign up in just a few seconds and access the AI Resume Builder platform.",
    },
    {
      id: 2,
      icon: <FaRegEdit />,
      title: "Enter Your Details",
      description:
        "Fill in your personal information, education, work experience, and skills.",
    },
    {
      id: 3,
      icon: <FaRobot />,
      title: "AI Builds Your Resume",
      description:
        "Our AI generates an ATS-friendly professional resume with smart content suggestions.",
    },
    {
      id: 4,
      icon: <FaDownload />,
      title: "Download & Apply",
      description:
        "Download your resume as a PDF and confidently apply for your dream job.",
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-title">
        <span className="section-tag">How It Works</span>

        <h2>Build Your Resume in <span>4 Easy Steps</span> </h2>

        <p> Our AI-powered platform makes resume creation simple, fast, and effective for job seekers. </p>
      </div>

      <div className="steps-container">
        {steps.map((step) => (
          <div className="step-card" key={step.id}>
            <div className="step-number">{step.id}</div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;