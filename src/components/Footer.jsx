import React, { useState, useEffect } from 'react';
import { Mail, Send, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin, ArrowUp, Zap, Star, Globe } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);
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
      title: "My Account",
      icon: "👤",
      links: ["My Account", "Order History", "Shopping Cart", "Wishlist", "Settings"]
    },
    {
      title: "Helps",
      icon: "🆘",
      links: ["Contact", "FAQs", "Terms & Condition", "Privacy Policy"]
    },
    {
      title: "Proxy",
      icon: "🌐",
      links: ["About", "Shop", "Product", "Products Details", "Track Order"]
    }
  ];

  const socialIcons = [
    { Icon: Twitter, color: "hover:bg-blue-400", name: "Twitter" },
    { Icon: Facebook, color: "hover:bg-blue-600", name: "Facebook" },
    { Icon: Instagram, color: "hover:bg-pink-500", name: "Instagram" },
    { Icon: Linkedin, color: "hover:bg-blue-700", name: "LinkedIn" }
  ];

  return (
    <footer 
      className="relative bg-black text-white overflow-hidden min-h-screen flex flex-col justify-center"
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
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-500 rounded-full opacity-20 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 container mx-auto px-6 py-20 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block group cursor-pointer">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent transform transition-all duration-500 group-hover:scale-110 group-hover:from-orange-300 group-hover:to-red-500">
              coolguyz
            </h1>
            <div className="flex justify-center mt-4">
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform transition-all duration-500 group-hover:w-48 group-hover:h-2 rounded-full"></div>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-300 hover:text-white">
            Join the <span className="text-orange-400 font-semibold">coolguyz community</span> and be flexible in managing your contacts. 
            Connect with us on social media for updates, tips, and more!
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="group">
              <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 animate-pulse" />
                Connect
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800 transform transition-all duration-300 hover:border-orange-500/50 hover:bg-gray-800/50 hover:scale-105 cursor-pointer group">
                  <Mail className="w-5 h-5 text-orange-400 transform transition-all duration-300 group-hover:scale-110" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    teamcoolguyz@gmail.com
                  </span>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800 transform transition-all duration-300 hover:border-orange-500/50 hover:bg-gray-800/50 hover:scale-105 cursor-pointer group">
                  <Globe className="w-5 h-5 text-orange-400 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    coolguyz.ai
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-orange-400 mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialIcons.map(({ Icon, color, name }, index) => (
                    <div 
                      key={name}
                      className={`w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 ${color} group border border-gray-800 hover:border-transparent`}
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <Icon className="w-5 h-5 transform transition-all duration-300 group-hover:text-white group-hover:rotate-12" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div 
              key={sectionIndex}
              className="space-y-6 transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredSection(sectionIndex)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="relative">
                <h3 className="text-xl font-bold text-orange-400 flex items-center gap-3 group cursor-pointer">
                  <span className="text-2xl transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                    {section.icon}
                  </span>
                  {section.title}
                </h3>
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transform transition-all duration-500 ${
                  hoveredSection === sectionIndex ? 'w-full' : 'w-12'
                }`}></div>
              </div>
              
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400  transform transition-all duration-300 hover:translate-x-3 hover:text-orange-300 block relative group p-2 rounded-lg hover:bg-gray-900/30"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transform transition-all duration-300 group-hover:rotate-180" />
                        {link}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left rounded-lg"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
          <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-800 transform transition-all duration-300 hover:border-orange-500/50">
            <div className="text-center space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay in the <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Loop</span>
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Get exclusive updates, insider tips, and special offers delivered straight to your inbox. Join our growing community!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="flex-1 relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-black/50 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 text-white placeholder-gray-400 transition-all duration-300 group-hover:border-gray-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </div>
                
                <button
                  onClick={handleSubscribe}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl transform transition-all duration-300 hover:from-orange-600 hover:to-red-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
                  <span className="relative z-10">Subscribe</span>
                  <Send className="w-5 h-5 transform transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 relative z-10" />
                </button>
              </div>

              {isSubscribed && (
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-2xl p-6 text-green-400 animate-bounce backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-3 text-lg font-semibold">
                    <Star className="w-6 h-6 animate-spin" />
                    🎉 Welcome to the coolguyz family! 
                    <Star className="w-6 h-6 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-lg flex items-center gap-2 group cursor-pointer">
            <span className="transform transition-all duration-300 group-hover:scale-110">©</span>
            <span className="font-semibold">2025 coolguyz.</span>
            <span className="text-orange-400">All Rights Reserved</span>
          </p>
          
          <div className="flex items-center space-x-8 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300 hover:scale-110 text-lg font-medium relative group">
              Terms & Conditions
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <div className="w-1 h-6 bg-gray-700 transform transition-all duration-300 hover:bg-orange-400"></div>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300 hover:scale-110 text-lg font-medium relative group">
              Privacy Policy
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-2xl transform transition-all duration-300 hover:scale-125 hover:shadow-orange-500/50 z-50 flex items-center justify-center group border-4 border-orange-400/30 hover:border-orange-400"
      >
        <ArrowUp className="w-6 h-6 transform transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-full transform rotate-45 group-hover:rotate-90 transition-all duration-500"></div>
      </button>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500  to-orange-500 opacity-80">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full animate-pulse" 
             style={{ animation: 'slide 3s infinite linear' }}></div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;