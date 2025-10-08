import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Assets
import ButtonGradient from "./assets/svg/ButtonGradient";
import InstagramAgent from './components/InstaAgent';

// Fallback component for Suspense
const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <p>Loading...</p>
  </div>
);

// <<< Lazy Loaded Component Imports (The Optimized Way) >>>
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const Preloader = lazy(() => import('./components/Preloader'));
const Footer = lazy(() => import('./components/Footer'));
const Header = lazy(() => import('./components/Header'));
const HomePage = lazy(() => import('./components/HomePage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const Faq = lazy(() => import('./components/faq'));
const Roadmap = lazy(() => import('./components/Roadmap'));
const Testimonil = lazy(() => import('./components/Testimonil'));
const LinkedinAgent = lazy(() => import('./components/LinkedinAgent'));
const InstaAgent = lazy(() => import('./components/InstaAgent'));

const BlogPosts = lazy(() => import('./components/BlogPosts'));
const SinglePost = lazy(() => import('./components/SinglePost'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const SubscribePage = lazy(() => import('./components/SubscribePage'));
const Industry = lazy(() => import('./components/Industry'));
const ContentFlow = lazy(() => import('./components/ContentFlow'));
const Linkbuddy = lazy(() => import('./components/Linkbuddy'));
const Realtor = lazy(() => import('./components/Realtor'));
const HrAgent = lazy(() => import('./components/HrAgent'));
const OutReach = lazy(() => import('./components/OutReach'));
const Banking_financial_services = lazy(() => import("./components/industries_content/Banking_financial_services"));
const Communication_media_entertainment = lazy(() => import("./components/industries_content/Communication_media_entertainment"));
const HealthCare = lazy(() => import("./components/industries_content/HealthCare"));
const Manufacturing = lazy(() => import("./components/industries_content/Manufacturing"));
const OilGas = lazy(() => import("./components/industries_content/OilGas"));
const Power_utilities_engergies = lazy(() => import("./components/industries_content/Power_utilities_engergies"));
const Renuable = lazy(() => import("./components/industries_content/Renuable"));
const Retail_consumer = lazy(() => import("./components/industries_content/Retail_consumer"));
const SocialMediaService = lazy(() => import("./components/services/SocialMediaService"));
const ChatBotsService = lazy(() => import("./components/services/ChetBotsService"));
const VoiceAssitent = lazy(() => import("./components/services/VoiceAssitent"));
const EmailManagement = lazy(() => import('./components/services/EmailService'));
const CRMAutomation = lazy(() => import('./components/services/CRMService'));
const NotionService = lazy(() => import('./components/services/NotionService'));
const DomainsSection = lazy(() => import('./components/Domain'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // FIX: Removed the artificial 5-second delay.
  // The preloader now shows for a minimal time (300ms) to handle fast connections
  // without a jarring flash of content.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Drastically reduced from 5000ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Suspense fallback={<div />}> {/* Suspense for Preloader itself */}
        {isLoading && <Preloader isVisible={isLoading} />}
      </Suspense>
      
      {!isLoading && (
        <div className="pt-[3.75rem] lg:pt-[4.25rem] overflow-hidden">
          <Suspense fallback={<LoadingSpinner />}> {/* Main content Suspense */}
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
              <Route path="/instagram-agent" element={<InstaAgent />} />
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
          </Suspense>
        </div>
      )}
      <ButtonGradient />
    </div>
  );
};

export default App;