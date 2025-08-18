import { useLocation, Link } from "react-router-dom";
import { navigation } from "../constants";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo-dark.svg";
import ProductMegaDropdown from "./ProductMegaDropdown";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const pathname = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showProducts, setShowProducts] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleProducts = () => {
    setShowProducts((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        const productsButton = document.querySelector('[data-products-button]');
        if (!productsButton || !productsButton.contains(event.target)) {
          setShowProducts(false);
        }
      }
      
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
        if (!mobileMenuButton || !mobileMenuButton.contains(event.target)) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
        setMobileMenuOpen(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredNavigation = navigation.filter((item) =>
    ["About", "blog", "contact", "products"].includes(item.id)
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform
        ${scrolled ? "bg-white/95 shadow-md border-b border-orange-100" : "bg-gradient-to-b from-white to-white/90"}
        ${visible ? "translate-y-0" : "-translate-y-full"}
        rounded-b-2xl`}
    >
      <div className="flex items-center justify-between px-2 lg:px-4 xl:px-6 py-0 h-20">
        <Link to="/" className="flex items-center w-fit hover:animate-pulse">
          <img src={logo} alt="Logo" className="w-[100px] h-[50px] object-contain rounded-lg" />
        </Link>

        <nav className="hidden md:flex flex-grow justify-center space-x-4">
          {filteredNavigation.map((item) =>
            item.id === "products" ? (
              <div key={item.id} className="relative">
                <button
                  data-products-button
                  onClick={toggleProducts}
                  className={`relative px-3 py-2 text-sm font-medium uppercase transition-all duration-300
                    ${showProducts ? "text-black font-bold" : "text-gray-700 hover:text-black"}
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300
                    ${showProducts ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}
                    after:origin-bottom-left after:shadow-md`}
                >
                  {item.title}
                </button>
              </div>
            ) : (
              <Link
                key={item.id}
                to={item.url}
                className={`relative px-3 py-2 text-sm font-medium uppercase text-gray-700 transition-all duration-300
                  ${item.url === pathname.pathname ? "text-black font-bold after:scale-x-100" : "hover:text-black after:scale-x-0 hover:after:scale-x-100"}
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 after:origin-bottom-left after:shadow-md`}
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            to="/subscribe"
            className={`hidden sm:flex relative px-4 py-2 rounded-lg font-medium text-white 
              bg-gradient-to-r from-orange-400 to-orange-600
              transition-all duration-300
              ${isHovered ? "shadow-lg scale-105" : "shadow-md"}
              overflow-hidden group`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10">Subscribe</span>
            <span className={`absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-700 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg
              ${isHovered ? "animate-pulse" : ""}`}
            />
          </Link>

          <button
            data-mobile-menu-button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {showProducts && (
        <div ref={dropdownRef} className="absolute left-0 right-0 flex justify-center">
          <ProductMegaDropdown onClose={() => setShowProducts(false)} />
        </div>
      )}

      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-white/95 shadow-lg border-t border-gray-200">
          <div className="px-4 py-2 flex flex-col space-y-2">
            {filteredNavigation.map((item) =>
              item.id === "products" ? (
                <button
                  key={item.id}
                  onClick={toggleProducts}
                  className={`px-3 py-3 text-left font-medium uppercase transition-all duration-300
                    ${showProducts ? "text-black font-bold" : "text-gray-700"}
                    border-b border-gray-100`}
                >
                  {item.title}
                </button>
              ) : (
                <Link
                  key={item.id}
                  to={item.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-3 font-medium uppercase text-gray-700 transition-all duration-300
                    ${item.url === pathname.pathname ? "text-black font-bold" : ""}
                    border-b border-gray-100`}
                >
                  {item.title}
                </Link>
              )
            )}
            <Link
              to="/subscribe"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 mt-2 rounded-lg font-medium text-white bg-gradient-to-r from-orange-400 to-orange-600 text-center"
            >
              Subscribe
            </Link>
          </div>
          
          {showProducts && (
            <div className="px-4 py-2 bg-gray-50">
              <ProductMegaDropdown 
                onClose={() => {
                  setShowProducts(false);
                  setMobileMenuOpen(false);
                }} 
                mobileVersion
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;