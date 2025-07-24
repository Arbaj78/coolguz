import { useLocation, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo-dark.svg";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(true); // 👈 for show/hide header

  const lastScrollY = useRef(0); // 👈 store last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Header background
      setScrolled(currentScrollY > 10);

      // Show/hide on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false); // scrolling down → hide
      } else {
        setVisible(true); // scrolling up → show
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const filteredNavigation = navigation.filter((item) =>
    ["home", "About", "blog", "contact"].includes(item.id)
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform
        ${scrolled ? "bg-white/95 shadow-md border-b border-orange-100" : "bg-gradient-to-b from-white to-white/90"}
        ${visible ? "translate-y-0" : "-translate-y-full"}
        rounded-b-2xl`}
      style={{ paddingTop: "0", paddingBottom: "0" }}
    >
      <div className="flex items-center justify-between px-2 lg:px-4 xl:px-6 py-0 h-20">
        <a className="flex items-center w-fit hover:animate-pulse" >
          <img
            src={logo}
            alt="fatcamel Logo"
            className="w-[100px] h-[50px] object-contain rounded-lg"
          />
        </a>

        <div className="flex items-center gap-4">
          <Link
            to="/subscribe"
            className={`relative px-4 py-2 rounded-lg font-medium text-white 
              bg-gradient-to-r from-orange-400 to-orange-600
              transition-all duration-300
              ${isHovered ? "shadow-lg scale-105" : "shadow-md"}
              overflow-hidden group
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10">Subscribe</span>
            <span
              className={`absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-700 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg
              ${isHovered ? "animate-pulse" : ""}`}
            />
          </Link>

          <div className="relative">
            <Button
              className="bg-black hover:bg-gray-800 text-white rounded-xl"
              px="px-3"
              onClick={toggleNavigation}
            >
              <MenuSvg openNavigation={openNavigation} color="white" />
            </Button>

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
                      if (item.url.startsWith("#")) {
                        handleClick();
                      } else {
                        setOpenNavigation(false);
                        enablePageScroll();
                      }
                    }}
                    className={`block px-4 py-2 text-sm uppercase font-medium ${
                      item.url === pathname.pathname ||
                      (item.url === "/" && pathname.pathname === "/")
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
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;
