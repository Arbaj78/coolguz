import { useLocation, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";
import logo from "../assets/logocool.png"; // ✅ imported logo correctly

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const filteredNavigation = navigation.filter(item => 
    ['home', 'About', 'blog', 'contact'].includes(item.id)
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 rounded-b-2xl ${
        scrolled 
          ? 'bg-white/95 shadow-md border-b border-orange-100' 
          : 'bg-gradient-to-b from-white to-white/90'
      }`}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="flex items-center w-fit hover:animate-pulse" href="#hero">
          <img 
            src={logo} 
            alt="CoolGuyz Logo" 
            className="w-[120px] h-[40px] object-contain rounded-lg"
          />
        </a>

        {/* Hamburger Menu Only - No Header Navigation */}
        <div className="relative">
          <Button
            className="bg-black hover:bg-gray-800 text-white rounded-xl"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} color="white" />
          </Button>

          {/* Compact Dropdown Menu */}
          <div
            className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-orange-100 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
              openNavigation 
                ? "opacity-100 translate-y-0 visible" 
                : "opacity-0 -translate-y-2 invisible"
            }`}
          >
            <div className="py-1">
              {filteredNavigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  onClick={() => {
                    if (item.url.startsWith('#')) {
                      handleClick();
                    } else {
                      setOpenNavigation(false);
                      enablePageScroll();
                    }
                  }}
                  className={`block px-4 py-2 text-sm uppercase font-medium ${
                    item.url === pathname.pathname || (item.url === '/' && pathname.pathname === '/')
                      ? "bg-orange-200 text-black font-bold"
                      : "text-gray-700 hover:bg-orange-50"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;