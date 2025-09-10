import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Bot, BrainCircuit, TrendingUp } from 'lucide-react';


import Hero from "./Hero";
import Collaboration from "./Collaboration";
import CompanyLogos from "./CompanyLogos";
import Roadmap from "./Roadmap";
import Testimonil from "./Testimonil";
import Review from './Review';
import Faq from "./faq";

const HomePage = () => {

 
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeInOut" }
  };

  return (
    <>
   
      <Helmet>
        <title>AI Agent & Automation Services USA | Custom AI Solutions by FatCamel</title>
        <meta 
          name="description" 
          content="Transform your business with FatCamel AI agent & automation services USA. From chatbots to workflow automation, we design custom AI solutions that save time & boost growth. Get your free AI consultation today!" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.fatcamel.ai/" />
      </Helmet>

      <Hero />
      
  
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-500 bg-clip-text text-transparent">
                Expert AI Solutions
              </span>
              <span className="text-gray-800"> in the USA</span>
            </h2>
            <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed mb-12">
              At FatCamel, we specialize in delivering top-tier AI business automation solutions across the USA. Our expertise in custom AI agent development allows us to create powerful tools tailored to your unique needs. We provide comprehensive AI consulting services to identify opportunities for growth and efficiency. From AI chatbot and virtual assistant development to seamless AI integration services, our goal is to revolutionize your operations.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{...fadeInUp.transition, delay: 0.2}}>
             <div className="h-1 w-24 bg-orange-500 mx-auto my-8 rounded"></div>
             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
               Helping Our Clients Transform Their Businesses
             </h2>
             <div className="flex justify-center items-center gap-4 mt-6">
                <BrainCircuit className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">
                  Custom AI Agent & Virtual Assistant Solutions
                </h3>
             </div>
          </motion.div>
          
        </div>
      </section>
      
    
      <Collaboration />
      <CompanyLogos/>
      <Roadmap/>
      <Testimonil/>
      <Review/>
      <Faq/>
    </>
  );
};

export default HomePage;