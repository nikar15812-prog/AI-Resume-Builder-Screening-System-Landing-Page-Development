import React from "react";
import "./ResumeScreening.css";
import {
  FaSearch,
  FaCheckCircle,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

const ResumeScreening = () => {
  const screeningFeatures = [
    {
      id: 1,
      icon: <FaSearch />,
      title: "ATS Compatibility",
      description:
        "Analyze your resume to ensure it is ATS-friendly and recruiter-ready.",
    },
    {
      id: 2,
      icon: <FaCheckCircle />,
      title: "Keyword Matching",
      description:
        "Compare your resume with job descriptions and improve keyword relevance.",
    },
    {
      id: 3,
      icon: <FaChartLine />,
      title: "Resume Score",
      description:
        "Receive an AI-generated score based on formatting, skills, and content quality.",
    },
    {
      id: 4,
      icon: <FaLightbulb />,
      title: "Improvement Suggestions",
      description:
        "Get smart recommendations to improve your resume and increase interview chances.",
    },
  ];

  return (
    <section className="resume-screening" id="resume-screening">
      <div className="screening-left">

        <div className="screening-card">
          <div className="score-circle">
            <h2>92%</h2>
            <p>ATS Score</p>
          </div>

          <div className="score-list">
            <div>
              <span>Formatting</span>
              <strong>Excellent</strong>
            </div>

            <div>
              <span>Keywords</span>
              <strong>Matched</strong>
            </div>

            <div>
              <span>Skills</span>
              <strong>Strong</strong>
            </div>

            <div>
              <span>Experience</span>
              <strong>Verified</strong>
            </div>
          </div>
        </div>

      </div>

      <div className="screening-right">

        <span className="screening-tag">
          AI Resume Screening
        </span>

        <h2>
          Analyze Your Resume With
          <span> AI Intelligence</span>
        </h2>

        <p>
          Our AI Resume Screening tool evaluates your resume, checks ATS
          compatibility, identifies missing keywords, and provides actionable
          suggestions to improve your chances of getting shortlisted.
        </p>

        <div className="screening-features">
          {screeningFeatures.map((feature) => (
            <div className="screening-item" key={feature.id}>
              <div className="screening-icon">
                {feature.icon}
              </div>

              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="screening-btn">
          Analyze Resume
        </button>

      </div>
    </section>
  );
};

export default ResumeScreening;