import React, { useState } from "react";
import "./FAQ.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      question: "What is AI Resume Builder?",
      answer:
        "AI Resume Builder helps you create professional, ATS-friendly resumes using artificial intelligence in just a few minutes.",
    },
    {
      question: "Is the resume ATS-friendly?",
      answer:
        "Yes. All templates are optimized to pass Applicant Tracking Systems (ATS) used by recruiters.",
    },
    {
      question: "Can I download my resume as a PDF?",
      answer:
        "Yes. You can download your resume instantly in high-quality PDF format.",
    },
    {
      question: "Does AI provide resume suggestions?",
      answer:
        "Yes. AI analyzes your information and provides smart content suggestions to improve your resume.",
    },
    {
      question: "Can I edit my resume later?",
      answer:
        "Absolutely! You can log in anytime and update your resume whenever you need.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-header">
        <span className="section-tag">FAQ</span>

        <h2>
          Frequently Asked <span>Questions</span>
        </h2>

        <p>
          Find answers to the most common questions about our AI Resume Builder
          & Screening System.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            }`}
            key={index}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{item.question}</h3>

              {activeIndex === index ? (
                <FaMinus />
              ) : (
                <FaPlus />
              )}
            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;