// src/components/DomainsSection.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Truck,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Film,
  Cpu,
  Construction,
  GraduationCap,
  Factory,
  Plane,
  Shield,
  Gamepad2,
  Zap,
  Store,
  Container,
  Coins,
} from "lucide-react";

const DomainsSection = () => {
  // **बदलाव: 'hoveredCard' state हटा दिया गया है क्योंकि यह रेंडर कर रहा था**
  // const [hoveredCard, setHoveredCard] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mobileVisibleCount, setMobileVisibleCount] = useState(6);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", handler);
    const t = setTimeout(() => window.dispatchEvent(new Event("prerender-ready")), 80);
    return () => {
      mq.removeEventListener?.("change", handler);
      clearTimeout(t);
    };
  }, []);

  // **बदलाव: टाइटल्स और सबटाइटल्स को मॉडर्न नाम दिए गए हैं**
  const domains = [
    { id: "d1", title: "Mobility", subtitle: "Fleet & Transit", Icon: Truck, color: "from-blue-500 to-cyan-500", link: "/domains/transportation" },
    { id: "d2", title: "MedTech", subtitle: "Digital Health", Icon: HeartPulse, color: "from-red-500 to-pink-500", link: "/domains/healthcare" },
    { id: "d3", title: "Digital Banking", subtitle: "Neo-Banking", Icon: Landmark, color: "from-green-500 to-emerald-500", link: "/domains/banking" },
    { id: "d4", title: "E-commerce", subtitle: "Omnichannel Retail", Icon: ShoppingCart, color: "from-orange-500 to-red-500", link: "/domains/ecommerce" },
    { id: "d5", title: "Media & Ent.", subtitle: "Creator Economy", Icon: Film, color: "from-purple-500 to-violet-500", link: "/domains/media" },
    { id: "d6", title: "SaaS", subtitle: "Cloud Solutions", Icon: Cpu, color: "from-blue-500 to-violet-500", link: "/domains/technology" },
    { id: "d7", title: "ConTech", subtitle: "Smart Infrastructure", Icon: Construction, color: "from-yellow-500 to-orange-500", link: "/domains/construction" },
    { id: "d8", title: "EdTech", subtitle: "E-Learning", Icon: GraduationCap, color: "from-indigo-500 to-blue-500", link: "/domains/education" },
    { id: "d9", title: "Industry 4.0", subtitle: "Smart Factories", Icon: Factory, color: "from-gray-500 to-slate-500", link: "/domains/manufacturing" },
    { id: "d10", title: "Aerospace", subtitle: "Avionics & Drones", Icon: Plane, color: "from-sky-500 to-blue-500", link: "/domains/aviation" },
    { id: "d11", title: "Cybersecurity", subtitle: "Zero-Trust Security", Icon: Shield, color: "from-red-500 to-orange-500", link: "/domains/security" },
    { id: "d12", title: "Gaming & XR", subtitle: "Metaverse", Icon: Gamepad2, color: "from-pink-500 to-purple-500", link: "/domains/gaming" },
    { id: "d13", title: "CleanTech", subtitle: "Renewable Energy", Icon: Zap, color: "from-yellow-500 to-green-500", link: "/domains/energy" },
    { id: "d14", title: "RetailTech", subtitle: "Smart POS", Icon: Store, color: "from-teal-500 to-cyan-500", link: "/domains/retail" },
    { id: "d15", title: "Supply Chain", subtitle: "Global Logistics", Icon: Container, color: "from-blue-500 to-indigo-500", link: "/domains/logistics" },
    { id: "d16", title: "Fintech", subtitle: "DeFi & Payments", Icon: Coins, color: "from-emerald-500 to-teal-500", link: "/domains/fintech" },
  ];

  // डोमेन को अल्फाबेटिकल ऑर्डर में सॉर्ट करना (यह अभी भी काम कर रहा है)
  domains.sort((a, b) => a.title.localeCompare(b.title));

  // Layout groups
  const columnLayout = [1, 2, 3, 4, 3, 2, 1];
  const getColumnItems = (columnIndex) => {
    let startIndex = 0;
    for (let i = 0; i < columnIndex; i++) startIndex += columnLayout[i];
    return domains.slice(startIndex, startIndex + columnLayout[columnIndex]);
  };

  // **बदलाव: 'handleCardClick' फंक्शन हटा दिया गया है**
  // const handleCardClick = (domain) => { ... };

  const handleLoadMore = () => setMobileVisibleCount(domains.length);

  return (
    // बैकग्राउंड 'bg-black' है
    <section className="py-24 bg-black relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
       <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-white">Industries We</span>
          <span className="bg-gradient-to-r from-orange-400 to-violet-300 bg-clip-text text-transparent ml-3">
            Empower
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We collaborate with diverse sectors to drive growth, innovation, and digital transformation shaping the future, one industry at a time.
        </p>
      </motion.div>

        {/* Desktop octagon grid */}
        <div className="hidden lg:flex justify-center items-center space-x-4">
          {columnLayout.map((_, columnIndex) => (
            <div key={columnIndex} className={`flex flex-col space-y-4 ${columnIndex % 2 === 1 ? "mt-16" : ""}`}>
              {getColumnItems(columnIndex).map((domain, itemIndex) => {
                const Icon = domain.Icon;
                return (
                  <motion.div
                    key={domain.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    // **बदलाव: होवर एनीमेशन रखा है**
                    whileHover={!reducedMotion ? { scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" } : {}}
                    transition={{ duration: 0.25, delay: columnIndex * 0.05 + itemIndex * 0.03 }}
                    viewport={{ once: true }}
                    // **बदलाव: onClick, onMouseEnter, onMouseLeave हटा दिए गए हैं**
                    // className="group relative w-32 h-32 cursor-pointer"
                    // **बदलाव: cursor-pointer, role, और tabIndex हटा दिए गए हैं**
                    className="group relative w-32 h-32"
                    style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
                    aria-label={`${domain.title} — ${domain.subtitle}`}
                  >
                    {/* रंगीन ग्रेडिएंट अभी भी हटा हुआ है */}
                    
                    {/* ऑक्टागन का बैकग्राउंड 'bg-white' है */}
                    <div className="absolute inset-0 bg-white backdrop-blur-sm group-hover:bg-gray-100 transition-colors duration-200" />
                    
                    {/* टेक्स्ट और आइकन का कलर 'text-black' है */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-black">
                      <Icon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-200" />
                      <h3 className="text-xs font-bold leading-tight">{domain.title}</h3>
                      {/* सबटाइटल होवर पर अभी भी दिखेगा (group-hover) */}
                      {domain.subtitle && <p className="text-gray-700 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">{domain.subtitle}</p>}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Mobile grid */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {domains.slice(0, mobileVisibleCount).map((domain, index) => {
              const Icon = domain.Icon;
              return (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  // **बदलाव: whileTap और onClick हटा दिए गए हैं**
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  // **बदलाव: 'cursor-pointer' हटा दिया गया है**
                  className="group relative h-24 rounded-2xl overflow-hidden"
                >
                  {/* बैकग्राउंड 'bg-white' है */}
                  <div className="absolute inset-0 bg-white backdrop-blur-sm transition-colors duration-200" />
                  
                  {/* टेक्स्ट और आइकन का कलर 'text-black' है */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center text-black">
                    <Icon className="w-6 h-6 mb-1" />
                    <h3 className="text-black text-xs font-bold leading-tight">{domain.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {mobileVisibleCount < domains.length && (
            <div className="mt-8 text-center">
              <motion.button onClick={handleLoadMore} className="bg-gradient-to-r from-orange-500 to-violet-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" whileHover={{ scale: 1.03 }}>
                Load More...
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;