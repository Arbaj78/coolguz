import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// lucide-react से आवश्यक आइकॉन्स इम्पोर्ट करें
import {
  Truck, HeartPulse, Landmark, ShoppingCart, Film, Cpu, Construction,
  GraduationCap, Factory, Plane, Shield, Gamepad2, Zap, Store, Container, Coins
} from 'lucide-react';

const DomainsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mobileVisibleCount, setMobileVisibleCount] = useState(6);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // डोमेन डेटा को lucide-react आइकॉन कंपोनेंट्स के साथ अपडेट किया गया है
  const domains = [
    { id: 'd1', title: 'Transportation', subtitle: 'Logistics & Fleet', Icon: Truck, color: 'from-blue-500 to-cyan-500', link: '/domains/transportation' },
    { id: 'd2', title: 'Healthcare', subtitle: 'Medical Systems', Icon: HeartPulse, color: 'from-red-500 to-pink-500', link: '/domains/healthcare' },
    { id: 'd3', title: 'Banking', subtitle: 'Financial Services', Icon: Landmark, color: 'from-green-500 to-emerald-500', link: '/domains/banking' },
    { id: 'd4', title: 'E-commerce', subtitle: 'Retail Platforms', Icon: ShoppingCart, color: 'from-orange-500 to-red-500', link: '/domains/ecommerce' },
    { id: 'd5', title: 'Media', subtitle: 'Content & Streaming', Icon: Film, color: 'from-purple-500 to-violet-500', link: '/domains/media' },
    { id: 'd6', title: 'Technology', subtitle: 'Software & SaaS', Icon: Cpu, color: 'from-blue-500 to-violet-500', link: '/domains/technology' },
    { id: 'd7', title: 'Construction', subtitle: 'Infrastructure', Icon: Construction, color: 'from-yellow-500 to-orange-500', link: '/domains/construction' },
    { id: 'd8', title: 'Education', subtitle: 'Learning Platforms', Icon: GraduationCap, color: 'from-indigo-500 to-blue-500', link: '/domains/education' },
    { id: 'd9', title: 'Manufacturing', subtitle: 'Industrial IoT', Icon: Factory, color: 'from-gray-500 to-slate-500', link: '/domains/manufacturing' },
    { id: 'd10', title: 'Aviation', subtitle: 'Aerospace Systems', Icon: Plane, color: 'from-sky-500 to-blue-500', link: '/domains/aviation' },
    { id: 'd11', title: 'Security', subtitle: 'Cybersecurity', Icon: Shield, color: 'from-red-500 to-orange-500', link: '/domains/security' },
    { id: 'd12', title: 'Gaming', subtitle: 'Interactive Media', Icon: Gamepad2, color: 'from-pink-500 to-purple-500', link: '/domains/gaming' },
    { id: 'd13', title: 'Energy', subtitle: 'Smart Grid', Icon: Zap, color: 'from-yellow-500 to-green-500', link: '/domains/energy' },
    { id: 'd14', title: 'Retail', subtitle: 'Point of Sale', Icon: Store, color: 'from-teal-500 to-cyan-500', link: '/domains/retail' },
    { id: 'd15', title: 'Logistics', subtitle: 'Supply Chain', Icon: Container, color: 'from-blue-500 to-indigo-500', link: '/domains/logistics' },
    { id: 'd16', title: 'Fintech', subtitle: 'Digital Finance', Icon: Coins, color: 'from-emerald-500 to-teal-500', link: '/domains/fintech' },
  ];

  const columnLayout = [1, 2, 3, 4, 3, 2, 1];
  
  const getColumnItems = (columnIndex) => {
    let startIndex = 0;
    for (let i = 0; i < columnIndex; i++) {
      startIndex += columnLayout[i];
    }
    return domains.slice(startIndex, startIndex + columnLayout[columnIndex]);
  };

  const handleCardClick = (domain) => {
    if (domain.link) {
      window.location.href = domain.link;
    }
  };
  
  const handleLoadMore = () => {
    setMobileVisibleCount(domains.length); 
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,198,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(123,97,255,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Domains We</span>
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent ml-3">Serve</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming industries through technology, expertise and innovation.
          </p>
        </motion.div>

        {/* Octagon Layout */}
        <div className="octagon-container relative max-w-6xl mx-auto">
          {/* Desktop Octagon Grid */}
          <div className="hidden lg:flex justify-center items-center space-x-4">
            {columnLayout.map((count, columnIndex) => (
              <div
                key={columnIndex}
                className={`flex flex-col space-y-4 ${columnIndex % 2 === 1 ? 'mt-16' : ''}`}
              >
                {getColumnItems(columnIndex).map((domain, itemIndex) => {
                  const Icon = domain.Icon; // आइकॉन कंपोनेंट को एक वेरिएबल में रखें
                  return (
                    <motion.div
                      key={domain.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                      transition={{ duration: 0.2, delay: columnIndex * 0.1 + itemIndex * 0.05 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredCard(domain.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => handleCardClick(domain)}
                      className="group relative w-32 h-32 cursor-pointer"
                      style={{
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Domain: ${domain.title} — ${domain.subtitle}`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-20 group-hover:opacity-30 transition-opacity duration-200`} />
                      <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm group-hover:bg-slate-700/50 transition-colors duration-200" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-200`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                        {/* lucide-react आइकॉन कंपोनेंट का उपयोग करें */}
                        <Icon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-200" />
                        <h3 className="text-xs font-bold leading-tight">{domain.title}</h3>
                        {domain.subtitle && (
                          <p className="text-gray-300 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {domain.subtitle}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-4">
              {domains.slice(0, mobileVisibleCount).map((domain, index) => {
                const Icon = domain.Icon; // आइकॉन कंपोनेंट को एक वेरिएबल में रखें
                return (
                  <motion.div
                    key={domain.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    onClick={() => handleCardClick(domain)}
                    className="group relative h-24 cursor-pointer rounded-2xl overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-20 group-active:opacity-30 transition-opacity duration-200`} />
                    <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm group-active:bg-slate-700/50 transition-colors duration-200" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center text-white">
                       {/* lucide-react आइकॉन कंपोनेंट का उपयोग करें */}
                      <Icon className="w-6 h-6 mb-1" />
                      <h3 className="text-white text-xs font-bold leading-tight">{domain.title}</h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {mobileVisibleCount < domains.length && (
              <div className="mt-8 text-center">
                <motion.button
                  onClick={handleLoadMore}
                  className="bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Load More....
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;