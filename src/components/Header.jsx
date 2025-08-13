import { useLocation, Link } from "react-router-dom";
import { navigation } from "../constants";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo-dark.svg";

const Header = () => {
  const pathname = useLocation();

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



  const filteredNavigation = navigation.filter((item) =>
    ["About", "blog", "contact","industry"].includes(item.id)
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
        <Link to="/" className="flex items-center w-fit hover:animate-pulse">
          <img
            src={logo}
            alt="fatcamel Logo"
            className="w-[100px] h-[50px] object-contain rounded-lg"
          />
        </Link>

        <nav className="hidden md:flex flex-grow justify-center space-x-4">
          {filteredNavigation.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className={`relative px-3 py-2 text-sm font-medium uppercase text-gray-700 transition-all duration-300
                ${item.url === pathname.pathname || (item.url === "/" && pathname.pathname === "/")
                  ? "text-black font-bold after:scale-x-100" // Active state
                  : "hover:text-black after:scale-x-0 hover:after:scale-x-100"}
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 after:origin-bottom-left after:shadow-md
              `}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
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
