import React, { useState, useEffect } from 'react';
import clutch from '../assets/clutch.png';
import goodfirms from '../assets/goodfirms-seeklogo.png';
import google from '../assets/google.png';
import trustpilot from '../assets/trustpilot.webp';
import upwork from '../assets/upwork-seeklogo.png';

export default function TrustedPlatforms() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const platforms = [
    {
      name: 'Clutch',
      rating: '4.9★',
      logo: clutch,
    },
    {
      name: 'GoodFirms',
      rating: '4.8★',
      logo: goodfirms,
    },
    {
      name: 'Google',
      rating: '4.9★',
      logo: google,
    },
    {
      name: 'Trustpilot',
      rating: '4.8★',
      logo: trustpilot,
    },
  ];

  useEffect(() => {
    const floatAnimation = () => {
      platforms.forEach((_, index) => {
        setTimeout(() => {
          const element = document.getElementById(`logo-${index}`);
          if (element) {
            element.style.transform = 'translateY(-4px)';
            setTimeout(() => {
              element.style.transform = 'translateY(0)';
            }, 600);
          }
        }, index * 200);
      });
    };

    const timer = setTimeout(floatAnimation, 500);
    const interval = setInterval(floatAnimation, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);



  const handleImageError = (e, fallback) => {
    e.target.src = fallback;
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <section className="bg-white/95 backdrop-blur-lg rounded-3xl p-12 max-w-6xl w-full shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Exceptional Reviews from Our Valued Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our exceptional services have earned us outstanding reviews and recognition across leading IT platforms
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              id={`logo-${index}`}
              className={`
                bg-white p-6 rounded-2xl shadow-lg border border-gray-200 
                min-h-[160px] flex flex-col items-center justify-center relative cursor-pointer
                transition-all duration-300 ease-out
                ${hoveredIndex === index 
                  ? 'transform -translate-y-2 scale-105 shadow-xl' 
                  : 'hover:-translate-y-1 hover:shadow-xl'
                }
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleLogoClick(platform.rating)}
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <img
                  src={platform.logo}
                  alt={`${platform.name} platform logo`}
                  className={`
                    max-w-[100px] h-auto object-contain transition-transform duration-300 mb-3
                    ${hoveredIndex === index ? 'scale-105' : ''}
                  `}
                  onError={(e) => handleImageError(e, platform.fallback)}
                />
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-xl">
                  {platform.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}