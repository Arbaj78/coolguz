import React from 'react';
import clutch from '../assets/clutch.png';
import goodfirms from '../assets/goodfirms-seeklogo.png';
import google from '../assets/google.png';
import trustpilot from '../assets/trustpilot.webp';
import upwork from '../assets/upwork-seeklogo.png';
import G2 from '../assets/gtwo.png';

export default function TrustedPlatforms() {
  const platforms = [
    { name: 'Clutch', rating: '4.9★', logo: clutch },
    { name: 'GoodFirms', rating: '4.8★', logo: goodfirms },
    { name: 'Google', rating: '4.9★', logo: google },
    { name: 'Trustpilot', rating: '4.8★', logo: trustpilot },
    { name: 'Upwork', rating: '4.9★', logo: upwork },
    { name: 'G2', rating: '4.8★', logo: G2 },
  ];

  const handleLogoClick = (platformName) => {
    console.log(`${platformName} card clicked!`);
  };

  return (
    <div className="bg-gray-900 py-16 sm:py-24">
      <section className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 sm:p-12 max-w-7xl mx-auto w-full shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Exceptional Reviews from Our Valued Clients
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Our exceptional services have earned us outstanding reviews and recognition across leading IT platforms.
          </p>
        </div>
        
        {/* === कार्ड्स के बीच का गैप कम किया गया है === */}
        <div className="flex items-center space-x-6 overflow-x-auto pb-4">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="
                group relative bg-white rounded-2xl shadow-md border border-gray-200 
                /* === कार्ड का साइज़ (ऊंचाई और चौड़ाई) यहाँ छोटा किया गया है === */
                h-36 w-44 flex-shrink-0 
                /* === कार्ड की पैडिंग भी एडजस्ट की गई है === */
                p-4 
                flex flex-col items-center justify-center text-center
                transition-all duration-300 ease-out cursor-pointer
                hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl
              "
              onClick={() => handleLogoClick(platform.name)}
            >
              <img
                src={platform.logo}
                alt={`${platform.name} platform logo`}
                className="max-h-10 w-auto object-contain transition-transform duration-300 mb-3 group-hover:scale-110"
              />
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {platform.rating}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}