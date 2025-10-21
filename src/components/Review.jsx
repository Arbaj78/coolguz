import React from 'react';
// --- Aapke logo imports ---
import clutch from '../assets/clutch.png';
import goodfirms from '../assets/goodfirms-seeklogo.png';
import google from '../assets/google.png';
import trustpilot from '../assets/trustpilot.webp';
import upwork from '../assets/upwork-seeklogo.png';
import G2 from '../assets/gtwo.png';

// Platforms ka data
const platforms = [
  { name: 'Clutch', rating: '4.9★', logo: clutch },
  { name: 'GoodFirms', rating: '4.8★', logo: goodfirms },
  { name: 'Google', rating: '4.9★', logo: google },
  { name: 'Trustpilot', rating: '4.8★', logo: trustpilot },
  { name: 'Upwork', rating: '4.9★', logo: upwork },
  { name: 'G2', rating: '4.8★', logo: G2 },
];

export default function TrustedPlatforms() {
  
  const handleLogoClick = (platformName) => {
    console.log(`${platformName} card clicked!`);
  };

  // === 1. ANIMATION CSS ===
  const animationStyles = `
    .marquee-animation {
      animation: marquee 40s linear infinite;
    }

    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `;

  return (
    // Black background
    <div className="bg-black text-white py-20 sm:py-28 antialiased">
      
      {/* === 2. STYLE TAG === */}
      <style>{animationStyles}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* === Text Content === */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white mb-4">
            Exceptional Reviews from Our Valued Clients
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our exceptional services have earned us outstanding reviews and recognition across leading IT platforms.
          </p>
        </div>

        {/* === Infinite Marquee Animation Container === */}
        <div 
          className="w-full inline-flex flex-nowrap overflow-hidden 
                     [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          {/* === 3. CUSTOM ANIMATION CLASS === */}
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 marquee-animation space-x-8">
            {[...platforms, ...platforms].map((platform, index) => (
              <li
                key={`${platform.name}-${index}`}
                /*
                 * === YAHAN PAR FIX KIYA GAYA HAI ===
                 * Line 80: Duplicate 'border' hata diya gaya.
                 * Line 81 & 84: Duplicate 'shadow' hata diya gaya.
                 * Sirf 'border', 'border-gray-200', aur 'shadow-md' rakha gaya hai.
                 */
                className="
                  group relative flex-shrink-0 
                  h-36 w-44 rounded-2xl 
                  p-5
                  flex flex-col items-center justify-center
                  
                  bg-white 
                  border border-gray-200  /* SIRF YEH EK BORDER */
                  shadow-md                 /* SIRF YEH EK SHADOW */
                  
                  transition-all duration-300 ease-in-out
                  hover:shadow-xl
                  hover:scale-105
                  hover:-translate-y-2
                  cursor-pointer
                "
                onClick={() => handleLogoClick(platform.name)}
              >
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="max-h-10 w-auto object-contain transition-transform duration-300 mb-4 group-hover:scale-110"
                />
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {platform.rating}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}