import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// <<< Component Imports >>>
import ScrollToTop from './components/ScrollToTop'; 
import Preloader from './components/Preloader';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from './components/HomePage'; 
import ContactPage from "./components/ContactPage";
import Faq from "./components/faq";
import Roadmap from "./components/Roadmap";
import Testimonil from "./components/Testimonil";
import LinkedinAgent from './components/LinkedinAgent';
import BlogPosts from './components/BlogPosts';
import SinglePost from './components/SinglePost';
import AboutPage from './components/AboutPage';
import SubscribePage from './components/SubscribePage';
import Industry from './components/Industry';
import ContentFlow from './components/ContentFlow';
import Linkbuddy from  './components/Linkbuddy';
import Realtor from './components/Realtor';
import HrAgent from './components/HrAgent';
import OutReach from './components/OutReach';
import Banking_financial_services from "./components/industries_content/Banking_financial_services"; 
import Communication_media_entertainment from "./components/industries_content/Communication_media_entertainment";
import HealthCare from "./components/industries_content/HealthCare";
import Manufacturing from "./components/industries_content/Manufacturing";
import OilGas from "./components/industries_content/OilGas";
import Power_utilities_engergies from "./components/industries_content/Power_utilities_engergies";
import Renuable from "./components/industries_content/Renuable";
import Retail_consumer from "./components/industries_content/Retail_consumer";
import SocialMediaService from "./components/services/SocialMediaService";
import ChatBotsService from "./components/services/ChetBotsService";
import VoiceAssitent from "./components/services/VoiceAssitent";
import EmailManagement from './components/services/EmailService';
import CRMAutomation from './components/services/CRMService';
import NotionService from './components/services/NotionService';
import DomainsSection from './components/Domain';

const App = () => {
  // Preloader state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user has visited before in this session
    const hasVisitedBefore = sessionStorage.getItem('hasVisitedBefore');
    
    // 5 seconds delay for the first visit, otherwise 2 seconds
    const delay = hasVisitedBefore ? 2000 : 5000;

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Set in session storage so the delay is shorter on next refresh
      sessionStorage.setItem('hasVisitedBefore', 'true');
    }, delay);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures this effect runs only once.

  return (
    <div>
      {/* Preloader Component */}
      <Preloader isVisible={isLoading} />
      
      {/* Main content of your website (will be visible after preloader) */}
      <div className="pt-[3.75rem] lg:pt-[4.25rem] overflow-hidden">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/testimonials" element={<Testimonil />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/blog" element={<BlogPosts />} /> 
          <Route path="/blog/:slug" element={<SinglePost />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/linkedin-agent" element={<LinkedinAgent />} />
          <Route path="/content-flow" element={<ContentFlow />} />
          <Route path="/linkbuddy" element={<Linkbuddy />} />
          <Route path="/Retail-Consumer" element={<Realtor />} />
          <Route path="/HrAgent" element={<HrAgent />} />
          <Route path="/Out-Reach-Ai" element={<OutReach />} />
          <Route path="/BFS" element={<Banking_financial_services />} />
          <Route path="/CME" element={<Communication_media_entertainment />} />
          <Route path="/HealthCare" element={<HealthCare />} />
          <Route path="/Manufacturing" element={<Manufacturing />} />
          <Route path="/Oil_and_gas" element={<OilGas />} />
          <Route path="/PUE" element={<Power_utilities_engergies />} />
          <Route path="/Renuable_energy" element={<Renuable />} />
          <Route path="/RetailConsumer" element={<Retail_consumer />} />
          <Route path="/Social-Media-Service" element={<SocialMediaService />} />
          <Route path="/Chat-Bots-Service" element={<ChatBotsService />} />
          <Route path="/Voice-Assitent-Service" element={<VoiceAssitent />} />
          <Route path="/Email-Management-Service" element={<EmailManagement />} />
          <Route path="/CRM-Automation-Service" element={<CRMAutomation />} />
          <Route path="/Notion-Integaration-Service" element={<NotionService />} />
          <Route path="/Domain" element={<DomainsSection />} />
        </Routes>
        <Footer />
      </div>
      <ButtonGradient />
    </div>
  );
};

export default App;