import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Instagram, Linkedin, Globe, HelpCircle, Shield, BookOpen, Zap, Briefcase, PenTool, ArrowUp } from 'lucide-react';
import logo from "../assets/logo-white.svg";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Company",
      icon: <Briefcase className="w-5 h-5" />,
      links: [
        { name: "About", icon: <Briefcase className="w-4 h-4" />, href: "/about" },
        { name: "Blog", icon: <PenTool className="w-4 h-4" />, href: "/blog" },
        { name: "Careers", icon: <Briefcase className="w-4 h-4" /> },
        { name: "Contact", icon: <Mail className="w-4 h-4" />, href: "/contact" }
      ]
    },
    {
      title: "Support",
      icon: <HelpCircle className="w-5 h-5" />,
      links: [
        { name: "Help Center", icon: <HelpCircle className="w-4 h-4" /> },
        { name: "Documentation", icon: <BookOpen className="w-4 h-4" /> },
        { name: "Status", icon: <Zap className="w-4 h-4" /> },
        { name: "Privacy", icon: <Shield className="w-4 h-4" /> }
      ]
    }
  ];

  const socialIcons = [
    { Icon: Twitter, color: "hover:bg-blue-400", name: "Twitter", link: "https://x.com/vasantaddy" },
    { Icon: Instagram, color: "hover:bg-pink-500", name: "Instagram", link: "https://www.instagram.com/the_boring_ai_guy/" },
    { Icon: Linkedin, color: "hover:bg-blue-700", name: "LinkedIn", link: "https://www.linkedin.com/in/basant-choudhary/" }
  ];

  return (
    <footer 
      className="relative bg-gray-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,165,0,0.3) 0%, transparent 50%)`,
            transition: 'background-image 0.3s ease'
          }}></div>
        </div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 container mx-auto px-6 py-12 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Logo"  
                className="w-[100px] h-[50px] object-contain rounded-lg"
              />
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Empowering your digital experience with cutting-edge solutions and seamless connectivity.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 pt-4">
              <a href="mailto:Basant.choudharynz@gmail.com" className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-all duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Basant.choudharynz@gmail.com
                </span>
              </a>
              <a href="https://fatcamel.ai" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                <Globe className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-all duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  fatcamel.ai
                </span>
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="text-orange-400">{section.icon}</div>
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href || "#"} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group p-2 rounded-lg hover:bg-gray-800/30"
                    >
                      <span className="text-orange-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        {link.icon}
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Connect With Us</h3>
            <div className="flex space-x-3">
              {socialIcons.map(({ Icon, color, name, link }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${color} group border border-gray-700 hover:border-transparent`}
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} fatcamel. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">Terms</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">Cookies</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-orange-500/30 z-50 flex items-center justify-center group"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;
