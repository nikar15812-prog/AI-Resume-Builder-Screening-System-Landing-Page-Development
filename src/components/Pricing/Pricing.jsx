import React from "react";
import "./Pricing.css";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Free",
      price: "₹0",
      duration: "/month",
      button: "Get Started",
      active: false,
      features: [
        "1 Resume Template",
        "Basic AI Suggestions",
        "PDF Download",
        "Email Support",
      ],
    },
    {
      id: 2,
      name: "Professional",
      price: "₹499",
      duration: "/month",
      button: "Choose Plan",
      active: true,
      features: [
        "Unlimited Templates",
        "Advanced AI Suggestions",
        "ATS Resume Checker",
        "Resume Screening",
        "Priority Support",
      ],
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Custom",
      duration: "",
      button: "Contact Us",
      active: false,
      features: [
        "Everything in Pro",
        "Team Management",
        "Admin Dashboard",
        "Analytics",
        "24/7 Dedicated Support",
      ],
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-header">
        <span className="section-tag">Pricing</span>

        <h2> Choose Your <span>Perfect Plan</span></h2>

        <p> Flexible pricing plans for students, professionals, and organizations. </p>
      </div>

      <div className="pricing-container">{plans.map((plan) => (
          <div
            className={`pricing-card ${  plan.active ? "popular" : "" }`} key={plan.id}>
            {plan.active && (
              <div className="popular-badge"> Most Popular</div>)}

            <h3>{plan.name}</h3>

            <h1> {plan.price} <span>{plan.duration}</span>  </h1>


            <ul>
              {plan.features.map((item, index) => (  <li key={index}> <FaCheck className="check" /> {item} </li>
              ))}
            </ul>

            <button>{plan.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;