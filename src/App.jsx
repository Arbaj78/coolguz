import { Routes, Route } from 'react-router-dom';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Collaboration from "./components/Collaboration";
import CompanyLogos from "./components/CompanyLogos";
import ContactPage from "./components/ContactPage";
import Faq from "./components/faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
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

const App = () => {
  return (
    <div>
      <div className="pt-[3.75rem] lg:pt-[4.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Collaboration />
              <CompanyLogos/>
              <Roadmap/>
              <Testimonil/>
              <Faq/>
            </>
          } />

          <Route path="/subscribe" element={<SubscribePage />} />
          
           <Route path="/blog" element={<BlogPosts />} /> 
           <Route path="/blog/:slug" element={<SinglePost />} />
           <Route path="/industry" element={<Industry />} />

           <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/linkedin-agent" element={<LinkedinAgent />} />
          <Route path="/content-flow" element={<ContentFlow />} />
          <Route path="/linkbuddy" element={<Linkbuddy />} />
          <Route path="/realtor" element={<Realtor />} />
          <Route path="/HrAgent" element={<HrAgent />} />
          <Route path="/OutReachAi" element={<OutReach />} />
          <Route path="/BFS" element={<Banking_financial_services />} />
          <Route path="/CME" element={<Communication_media_entertainment />} />
          <Route path="/HealthCare" element={<HealthCare />} />
          <Route path="/Manufacturing" element={<Manufacturing />} />
          <Route path="/Oil_and_gas" element={<OilGas />} />
          <Route path="/PUE" element={<Power_utilities_engergies />} />
          <Route path="/Renuable_energy" element={<Renuable />} />
          <Route path="/RetailConsumer" element={<Retail_consumer />} />

        </Routes>
        <Footer />
      </div>
      <ButtonGradient />
    </div>
  );
};

export default App;
