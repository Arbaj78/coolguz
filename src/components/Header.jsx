import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 rounded-b-2xl ${
        scrolled 
          ? 'bg-white/95 shadow-md border-b border-orange-100' 
          : 'bg-gradient-to-b from-white to-white/90'
      } ${
        openNavigation ? "bg-white rounded-b-none" : ""
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="flex items-center w-fit xl:mr-8 hover:animate-pulse" href="#hero">
          <img 
            src="dist/assets/newCompanylogo.jpeg" 
            alt="CoolGuyz Logo" 
            className="w-[120px] h-[40px] object-contain rounded-lg" // Adjusted logo size
          />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-white lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-medium text-lg uppercase transition-colors hover:text-orange-500 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm ${
                  item.url === pathname.hash
                    ? "text-orange-500 font-bold"
                    : "text-gray-700"
                } lg:hover:text-orange-500 xl:px-12 animate-fade-in`}
              >
                {item.title}
                {item.url === pathname.hash && (
                  <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-orange-500 rounded-full lg:bottom-2"></span>
                )}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {/* Animated Work With Us Button */}
        <a
          href="#contact"
          className="hidden lg:flex items-center justify-center relative overflow-hidden group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative z-10 px-6 py-3 bg-white border-2 border-black rounded-full font-medium text-black group-hover:text-white transition-all duration-300">
            Work with us
            <div className={`absolute inset-0 bg-orange-500 rounded-full z-0 transform origin-bottom ${
              isHovering ? 'scale-y-100' : 'scale-y-0'
            } transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]`}></div>
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-black rounded-full overflow-hidden">
            <div className={`h-full bg-orange-500 rounded-full ${
              isHovering ? 'animate-progress' : ''
            }`}></div>
          </div>
        </a>

        <Button
          className="ml-auto lg:hidden bg-black hover:bg-gray-800 text-white rounded-xl"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} color="white" />
        </Button>
      </div>

      {/* Mobile menu bottom rounded corners when open */}
      {openNavigation && (
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-white">
          <div className="absolute bottom-0 left-0 right-0 h-full bg-white rounded-b-2xl"></div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-progress {
          animation: progress 1.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;