import React from "react";
import "./Benefits.css";
import {
  FaClock,
  FaRobot,
  FaFileAlt,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <FaClock />,
      title: "Save Time",
      description:
        "Create a professional resume in just a few minutes using AI-powered automation.",
    },
    {
      id: 2,
      icon: <FaRobot />,
      title: "AI Assistance",
      description:
        "Receive smart writing suggestions and improve your resume effortlessly.",
    },
    {
      id: 3,
      icon: <FaFileAlt />,
      title: "ATS Friendly",
      description:
        "Ensure your resume passes Applicant Tracking Systems with optimized formatting.",
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: "Higher Success Rate",
      description:
        "Improve your chances of getting shortlisted with AI resume analysis.",
    },
    {
      id: 5,
      icon: <FaUsers />,
      title: "Professional Templates",
      description:
        "Choose from modern resume templates designed by industry experts.",
    },
    {
      id: 6,
      icon: <FaShieldAlt />,
      title: "Secure & Reliable",
      description:
        "Your resume data is securely stored and protected with advanced security.",
    },
  ];

  return (
    <section className="benefits" id="benefits">
      <div className="benefits-header">
        <span className="section-tag">Benefits</span>
         <h2> Why Choose Our <span>AI Resume Builder?</span></h2>
         <p> Build professional resumes, improve ATS scores, and get hired  faster with our
           intelligent resume builder and screening system. </p>
      </div>

      <div className="benefits-container">
        {benefits.map((benefit) => (
          <div className="benefit-card" key={benefit.id}>
            <div className="benefit-icon">  {benefit.icon} </div>
                 <h3>{benefit.title}</h3>
                 <p>{benefit.description}</p>
             </div>
        ))
        }
      </div>
    </section>
  );
};

export default Benefits;