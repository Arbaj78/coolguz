import React, { useState, useEffect } from 'react';
import { Mail, Send, Phone, Twitter, Facebook, Instagram, Linkedin, ArrowUp, Zap, Star, Globe, HelpCircle, Shield, FileText, Code, Settings, BookOpen, Heart, Briefcase, PenTool } from 'lucide-react';
import logo from "../assets/logo-white.svg";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
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

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Product",
      icon: <Settings className="w-5 h-5" />,
      links: [
        { name: "Features", icon: <Heart className="w-4 h-4" /> },
        { name: "Pricing", icon: <Heart className="w-4 h-4" /> },
        { name: "API", icon: <Code className="w-4 h-4" /> },
        { name: "Integrations", icon: <Settings className="w-4 h-4" /> }
      ]
    },
    {
      title: "Company",
      icon: <Briefcase className="w-5 h-5" />,
      links: [
        { name: "About", icon: <Briefcase className="w-4 h-4" /> },
        { name: "Blog", icon: <PenTool className="w-4 h-4" /> },
        { name: "Careers", icon: <Briefcase className="w-4 h-4" /> },
        { name: "Contact", icon: <Mail className="w-4 h-4" /> }
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
    { 
      Icon: Twitter, 
      color: "hover:bg-blue-400", 
      name: "Twitter",
      link: "https://x.com/vasantaddy"
    },
    { 
      Icon: Instagram, 
      color: "hover:bg-pink-500", 
      name: "Instagram",
      link: "https://www.instagram.com/the_boring_ai_guy/"
    },
    { 
      Icon: Linkedin, 
      color: "hover:bg-blue-700", 
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/basant-choudhary/"
    }
  ];

  return (
    <footer 
      className="relative bg-gray-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,165,0,0.3) 0%, transparent 50%)`,
            transition: 'background-image 0.3s ease'
          }}></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 container mx-auto px-6 py-4 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
               <a className="flex items-center w-fit xl:mr-8 hover:animate-pulse">
                        <img 
                           src={logo} 
                          alt="Logo"  
                          className="w-[100px] h-[50px] object-contain rounded-lg" // Adjusted logo size
                        />
                      </a>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Empowering your digital experience with cutting-edge solutions and seamless connectivity.
            </p>
            
             {/* Contact Info */}
            <div className="space-y-4 pt-4">
              <a 
                href="mailto:Basant.choudharynz@gmail.com" 
                className="flex items-center space-x-3 group"
              >
                <Mail className="w-5 h-5 text-orange-400 transform transition-all duration-300 group-hover:scale-110" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Basant.choudharynz@gmail.com
                </span>
              </a>
              
              <a 
                href="https://fatcamel.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 group"
              >
                <Globe className="w-5 h-5 text-orange-400 transform transition-all duration-300 group-hover:scale-110" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  fatcamel.ai
                </span>
              </a>
            </div>

            {/* Social Media - Fixed Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-orange-400 mb-4">Connect With Us</h4>
              <div className="flex space-x-3">
                {socialIcons.map(({ Icon, color, name, link }) => (
                  <a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${color} group border border-gray-700 hover:border-transparent`}
                  >
                    <Icon className="w-5 h-5 text-gray-300 transform transition-all duration-300 group-hover:text-white group-hover:rotate-12" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div 
              key={sectionIndex}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="text-orange-400">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {section.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group p-2 rounded-lg hover:bg-gray-800/30"
                    >
                      <span className="text-orange-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        {link.icon}
                      </span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-3">
                Stay Updated
              </h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest news and updates.
              </p>
            </div>
            
            <div className="flex-1 flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 text-white placeholder-gray-400 transition-all duration-300"
                />
              </div>
              
              <button
                onClick={handleSubscribe}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg transform transition-all duration-300 hover:from-orange-600 hover:to-red-500 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {isSubscribed && (
            <div className="mt-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-lg p-4 text-green-400 text-center">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4 animate-spin" />
                Thank you for subscribing!
                <Star className="w-4 h-4 animate-spin" />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} fatcamel. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-orange-500/30 z-50 flex items-center justify-center group"
      >
        <ArrowUp className="w-5 h-5 transform transition-all duration-300 group-hover:-translate-y-1" />
      </button>
    </footer>
  );
};

export default Footer;