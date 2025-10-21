// src/components/HomePage.jsx
import React from "react";

import Hero from "./Hero";
import Collaboration from "./Collaboration";
import CompanyLogos from "./CompanyLogos";
import Roadmap from "./Roadmap";
import Testimonil from "./Testimonil";
import Review from "./Review";
import Faq from "./faq";

import Domain from "./Domain";



const HomePage = () => {
  return (
    <>
    
      <Hero />

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-500 bg-clip-text text-transparent">Expert AI Solutions</span>
              <span className="text-gray-800"> in the USA</span>
            </h2>
            <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed mb-12">
              At FatCamel, we specialize in delivering top-tier AI business automation solutions across the USA. From AI chatbots to workflow automation, we design custom AI solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      <Collaboration />
      <CompanyLogos />
      <Domain/>
      <Roadmap />
      <Testimonil />
      <Review />
      <Faq />
    </>
  );
};

export default HomePage;
