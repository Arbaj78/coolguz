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
           <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/linkedin-agent" element={<LinkedinAgent />} />
        </Routes>
        <Footer />
      </div>
      <ButtonGradient />
    </div>
  );
};

export default App;
