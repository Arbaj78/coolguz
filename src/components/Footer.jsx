import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Instagram, Linkedin, Globe, Briefcase, Server, ArrowUp } from 'lucide-react';
import logo from "../assets/logo-white.svg";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesSection = {
    title: "Services",
    links: [
      { name: "Social Media", href: "/SocialMediaService" },
      { name: "Chatbots", href: "/ChatBotsService" },
      { name: "Voice Assistants", href: "/VoiceAssitentService" },
      { name: "Email Management", href: "/EmailManagementService" },
      { name: "CRM Automation", href: "/CRMAutomationService" },
      { name: "Notion Integration", href: "/NotionIntegarationService" }
    ]
  };

  const companySection = {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      // { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ]
  };

  const socialIcons = [
    { Icon: Twitter, color: "hover:bg-blue-400", name: "Twitter", link: "https://x.com/vasantaddy" },
    { Icon: Instagram, color: "hover:bg-pink-500", name: "Instagram", link: "https://www.instagram.com/the_boring_ai_guy/" },
    { Icon: Linkedin, color: "hover:bg-blue-700", name: "LinkedIn", link: "https://www.linkedin.com/company/fatcamelai/" }
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-400 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 container mx-auto px-6 py-12 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Using a 12-column grid for better control */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info (takes 4 columns on md screens) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="fatcamel AI agent services"  
                className="w-[100px] h-[50px] object-contain rounded-lg"
              />
            </div>
            
            <p className="text-gray-300 text-lg max-w-md">
              Empowering your digital experience with cutting-edge solutions and seamless connectivity.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 pt-4">
              <a href="mailto:Basant.choudharynz@gmail.com" className="flex items-center space-x-3 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Basant.choudharynz@gmail.com
                </span>
              </a>
              <a href="https://fatcamel.ai" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                  <Globe className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  fatcamel.ai
                </span>
              </a>
            </div>
          </div>

          {/* Services Links (takes 2 columns on md screens) */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-orange-400" />
              {servicesSection.title}
            </h3>
            {/* Reduced space-y to 2 for tighter packing */}
            <ul className="space-y-2">
              {servicesSection.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group p-1 rounded-lg hover:bg-gray-800/30"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links (takes 2 columns on md screens) */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-orange-400" />
              {companySection.title}
            </h3>
            {/* Kept space-y-3 here or you can change to 2 */}
            <ul className="space-y-3">
              {companySection.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group p-2 rounded-lg hover:bg-gray-800/30"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media (takes 4 columns on md screens to fill the row) */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xl font-bold text-white">Connect With Us</h3>
            <p className="text-gray-300">Follow us on social media for updates and news.</p>
            <div className="flex space-x-3">
              {socialIcons.map(({ Icon, color, name, link }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 ${color} group border border-gray-700 hover:border-transparent`}
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} fatcamel. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">Terms</a>
            <a href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">Privacy</a>
            <a href="/cookies" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">Cookies</a>
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