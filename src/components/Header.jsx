import { useLocation, Link } from "react-router-dom";
import { navigation } from "../constants";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo-dark.svg";
import ProductMegaDropdown from "./ProductMegaDropdown";
import IndustryMegaDropdown from "./IndustryMegaDropdown";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

const Header = () => {
  const pathname = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showProducts, setShowProducts] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  const lastScrollY = useRef(0);
  const dropdownRef = useRef(null);
  const industryDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleProducts = () => {
    setShowProducts((prev) => !prev);
    setShowIndustries(false);
  };

  const toggleIndustries = () => {
    setShowIndustries((prev) => !prev);
    setShowProducts(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    if (!mobileMenuOpen) {
      setMobileProductsOpen(false);
      setMobileIndustriesOpen(false);
    }
    setShowProducts(false);
    setShowIndustries(false);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  const toggleMobileProducts = () => {
    setMobileProductsOpen((prev) => !prev);
    setMobileIndustriesOpen(false);
  };

  const toggleMobileIndustries = () => {
    setMobileIndustriesOpen((prev) => !prev);
    setMobileProductsOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileIndustriesOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInsideProducts =
        dropdownRef.current?.contains(event.target) ||
        event.target.closest("[data-products-button]");

      const isClickInsideIndustries =
        industryDropdownRef.current?.contains(event.target) ||
        event.target.closest("[data-industries-button]");

      if (!isClickInsideProducts) {
        setShowProducts(false);
      }

      if (!isClickInsideIndustries) {
        setShowIndustries(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest("[data-mobile-menu-button]")
      ) {
        closeMobileMenu();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setShowProducts(false);
        setShowIndustries(false);
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (
        !showProducts &&
        !showIndustries &&
        !mobileMenuOpen &&
        currentScrollY > lastScrollY.current &&
        currentScrollY > 100
      ) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showProducts, showIndustries, mobileMenuOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const filteredNavigation = navigation.filter((item) =>
    ["About", "blog", "contact", "products"].includes(item.id)
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-gray-100 transition-all duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
          <img
            src={logo}
            alt="fatcamel AI agent services"
            className="w-[100px] h-[50px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {filteredNavigation.map((item) =>
            item.id === "products" ? (
              <button
                key={item.id}
                data-products-button
                onClick={toggleProducts}
                onMouseEnter={() => setHoveredButton("products")}
                onMouseLeave={() => setHoveredButton(null)}
                className={`relative font-medium uppercase text-sm tracking-wide transition-all duration-300 ${
                  showProducts
                    ? "text-black font-semibold"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {item.title}
                <span
                  className={`absolute bottom-[-3px] left-0 h-[2px] bg-black transition-all duration-300 ${
                    showProducts || hoveredButton === "products"
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </button>
            ) : (
              <Link
                key={item.id}
                to={item.url}
                className={`relative font-medium uppercase text-sm tracking-wide transition-all duration-300 ${
                  pathname.pathname === item.url
                    ? "text-black font-semibold"
                    : "text-gray-700 hover:text-black"
                }`}
                onMouseEnter={() => setHoveredButton(item.id)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                {item.title}
                <span
                  className={`absolute bottom-[-3px] left-0 h-[2px] bg-black transition-all duration-300 ${
                    pathname.pathname === item.url ||
                    hoveredButton === item.id
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </Link>
            )
          )}

          <button
            data-industries-button
            onClick={toggleIndustries}
            onMouseEnter={() => setHoveredButton("industries")}
            onMouseLeave={() => setHoveredButton(null)}
            className={`relative font-medium uppercase text-sm tracking-wide transition-all duration-300 ${
              showIndustries
                ? "text-black font-semibold"
                : "text-gray-700 hover:text-black"
            }`}
          >
            Industries
            <span
              className={`absolute bottom-[-3px] left-0 h-[2px] bg-black transition-all duration-300 ${
                showIndustries || hoveredButton === "industries"
                  ? "w-full opacity-100"
                  : "w-0 opacity-0"
              }`}
            />
          </button>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link
            to="/subscribe"
            onClick={closeMobileMenu}
            className="hidden sm:inline-flex relative px-5 py-2 rounded-lg text-white font-medium overflow-hidden
            bg-gradient-to-r from-orange-400 to-orange-600 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Subscribe
          </Link>

          <button
            data-mobile-menu-button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 hover:text-black transition-all duration-300 p-2 rounded-lg hover:bg-gray-100"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Dropdowns */}
      {showProducts && (
        <div
          ref={dropdownRef}
          className="absolute left-0 right-0 flex justify-center animate-fade-slide-down z-40"
        >
          <ProductMegaDropdown onClose={() => setShowProducts(false)} />
        </div>
      )}
      {showIndustries && (
        <div
          ref={industryDropdownRef}
          className="absolute left-0 right-0 flex justify-center animate-fade-slide-down z-40"
        >
          <IndustryMegaDropdown onClose={() => setShowIndustries(false)} />
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMobileMenu}
          />
          
          <div
            ref={mobileMenuRef}
            className="fixed top-0 left-0 w-[85%] max-w-sm h-screen bg-white shadow-2xl z-50 animate-slide-right flex flex-col md:hidden overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <FiX size={24} className="text-gray-700" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto overscroll-contain p-4">
              <ul className="space-y-1">
                {/* About Us */}
                <li>
                  <Link
                    to="/about"
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-lg font-medium uppercase text-sm tracking-wide transition-all ${
                      pathname.pathname === "/about"
                        ? "bg-gray-100 text-black"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    About Us
                  </Link>
                </li>

                {/* Contact */}
                <li>
                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-lg font-medium uppercase text-sm tracking-wide transition-all ${
                      pathname.pathname === "/contact"
                        ? "bg-gray-100 text-black"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Contact
                  </Link>
                </li>

                {/* Blog */}
                <li>
                  <Link
                    to="/blog"
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-lg font-medium uppercase text-sm tracking-wide transition-all ${
                      pathname.pathname === "/blog"
                        ? "bg-gray-100 text-black"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Blog
                  </Link>
                </li>

                {/* Products Dropdown */}
                <li>
                  <button
                    onClick={toggleMobileProducts}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left font-medium uppercase text-sm tracking-wide transition-all ${
                      mobileProductsOpen
                        ? "bg-gray-100 text-black"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Products
                    {mobileProductsOpen ? (
                      <FiChevronUp className="text-gray-500" />
                    ) : (
                      <FiChevronDown className="text-gray-500" />
                    )}
                  </button>
                  {mobileProductsOpen && (
                    <div className="mt-2 pl-4 animate-fade-slide-down">
                      <ProductMegaDropdown
                        onClose={() => {
                          setMobileProductsOpen(false);
                          closeMobileMenu();
                        }}
                        mobileVersion
                      />
                    </div>
                  )}
                </li>

                {/* Industries Dropdown */}
                <li>
                  <button
                    onClick={toggleMobileIndustries}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left font-medium uppercase text-sm tracking-wide transition-all ${
                      mobileIndustriesOpen
                        ? "bg-gray-100 text-black"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Industries
                    {mobileIndustriesOpen ? (
                      <FiChevronUp className="text-gray-500" />
                    ) : (
                      <FiChevronDown className="text-gray-500" />
                    )}
                  </button>
                  {mobileIndustriesOpen && (
                    <div className="mt-2 pl-4 animate-fade-slide-down">
                      <IndustryMegaDropdown
                        onClose={() => {
                          setMobileIndustriesOpen(false);
                          closeMobileMenu();
                        }}
                        mobileVersion
                      />
                    </div>
                  )}
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200 flex-shrink-0">
                <Link
                  to="/subscribe"
                  onClick={closeMobileMenu}
                  className="block w-full px-5 py-3 rounded-lg font-semibold text-white text-center bg-gradient-to-r from-orange-400 to-orange-600 shadow-md hover:shadow-lg transition-all"
                >
                  Subscribe
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;