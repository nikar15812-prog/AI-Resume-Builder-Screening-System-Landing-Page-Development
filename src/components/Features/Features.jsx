import React from "react";
import "./Features.css";
import {
  FaRobot,
  FaFileAlt,
  FaSearch,
  FaDownload,
} from "react-icons/fa";

const Features = () => {
  const featureData = [
    {
      id: 1,
      icon: <FaRobot />,
      title: "AI Resume Builder",
      description:
        "Generate professional and ATS-friendly resumes with AI-powered content suggestions.",
    },
    {
      id: 2,
      icon: <FaFileAlt />,
      title: "Multiple Templates",
      description:
        "Choose from modern, creative, and professional resume templates for every career.",
    },
    {
      id: 3,
      icon: <FaSearch />,
      title: "AI Resume Screening",
      description:
        "Analyze your resume with ATS scoring, keyword matching, and skill-gap insights.",
    },
    {
      id: 4,
      icon: <FaDownload />,
      title: "One-Click Download",
      description:
        "Download your resume instantly in PDF format and start applying for jobs.",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="features-header">
        <span className="section-tag">Our Features</span>

        <h2>
          Everything You Need to Build the
          <span> Perfect Resume</span>
        </h2>

        <p>
          Our AI-powered platform helps you create, optimize, and
          screen resumes that stand out and improve your chances of
          getting shortlisted.
        </p>
      </div>

      <div className="features-container">
        {featureData.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <div className="feature-icon">{feature.icon} </div>
             <h3>{feature.title}</h3>
             <p>{feature.description}</p>
             
         <button>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;