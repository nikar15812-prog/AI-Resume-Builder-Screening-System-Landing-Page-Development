import React from "react";
import "./App.css";

import Navbar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import ResumeBuilder from "./components/ResumeBuilder/ResumeBuilder";
import ResumeScreening from "./components/ResumeScreening/ResumeScreening";
import Benefits from "./components/Benefits/Benefits";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ResumeBuilder />
        <ResumeScreening />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;