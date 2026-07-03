import React from "react";
import "./Testimonials.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Engineer",
      review:
        "AI Resume Builder helped me create an ATS-friendly resume within minutes. I received interview calls within a week!",
    },
    {
      id: 2,
      name: "Priya Nair",
      role: "UI/UX Designer",
      review:
        "The resume templates are modern and professional. The AI suggestions made my resume much stronger.",
    },
    {
      id: 3,
      name: "Arun Kumar",
      role: "Data Analyst",
      review:
        "The resume screening feature identified missing keywords and significantly improved my ATS score.",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonial-header">
        <span className="section-tag">Testimonials</span>

        <h2>
          What Our <span>Users Say</span>
        </h2>

        <p>
          Thousands of professionals trust our AI Resume Builder to create
          impressive resumes and improve their hiring success.
        </p>
      </div>

      <div className="testimonial-container">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <FaQuoteLeft className="quote-icon" />

            <p className="review">{item.review}</p>

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="user-info">
              <div className="avatar">
                {item.name.charAt(0)}
              </div>

              <div>
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;