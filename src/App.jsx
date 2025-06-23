import ButtonGradient from "./assets/svg/ButtonGradient";
import Collaboration from "./components/Collaboration";
import CompanyLogos from "./components/CompanyLogos";
import Faq from "./components/faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";

const App = () => {
  return (
    <>
      <div className="pt-[3.75rem] lg:pt-[4.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        <Roadmap/>
        <CompanyLogos/>
        <Faq/>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
