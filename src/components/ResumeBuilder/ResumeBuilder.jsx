import React from "react";
import "./ResumeBuilder.css";
import {
  FaRobot,
  FaRegFileAlt,
  FaMagic,
  FaCheckCircle,
} from "react-icons/fa";

const ResumeBuilder = () => {
  const features = [
    {
      id: 1,
      icon: <FaRobot />,
      title: "AI Content Suggestions",
      description:
        "Generate professional resume content with intelligent AI recommendations.",
    },
    {
      id: 2,
      icon: <FaRegFileAlt />,
      title: "ATS-Friendly Templates",
      description:
        "Choose from recruiter-approved templates optimized for ATS systems.",
    },
    {
      id: 3,
      icon: <FaMagic />,
      title: "Live Resume Preview",
      description:
        "See every change instantly while building your resume in real time.",
    },
    {
      id: 4,
      icon: <FaCheckCircle />,
      title: "One-Click Export",
      description:
        "Download your resume instantly as a professional PDF document.",
    },
  ];

  return (
    <section className="resume-builder" id="resume-builder">
      <div className="builder-left">
        <span className="builder-tag">AI Resume Builder</span>

        <h2>Create a Professional Resume in <span> Minutes</span> </h2>

        <p>
          Build an ATS-friendly resume with AI assistance. Get smart
          recommendations, beautiful templates, and real-time editing
          to impress recruiters.
        </p>

        <div className="builder-list">
          <div> <FaCheckCircle className="check-icon" />  AI-Powered Resume Writing </div>

          <div> <FaCheckCircle className="check-icon" /> Modern Resume Templates  </div>

          <div> <FaCheckCircle className="check-icon" />  ATS Optimization </div>

          <div>  <FaCheckCircle className="check-icon" />  Instant PDF Download </div>

        </div>

        <button className="builder-btn">Start Building</button>
      </div>

      <div className="builder-right">
        <div className="builder-preview">

          <div className="preview-header"> <h3>Resume Preview</h3>  <span>95% Complete</span> </div>

          {features.map((item) => (
            <div className="preview-card" key={item.id}>
              <div className="preview-icon">   {item.icon} </div>

              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ResumeBuilder;