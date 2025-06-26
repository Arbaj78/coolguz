import React from 'react';

// Company logos data - using text-based logos instead of images
const companyLogos = [
  { name: 'TechTide', isText: true },
  { name: 'Lum○Labs', isText: true },
  { name: 'Craftgram', isText: true },
  { name: 'sparkle', isText: true },
  { name: 'Pulse', isText: true },
  { name: 'techtide', isText: true },
  { name: 'Lumi', isText: true },
  { name: 'DataFlow', isText: true }
];

const CompanyLogos = () => {
  return (
    <section className="py-16 bg-black overflow-hidden relative">
      <div className="container mx-auto px-4">
        <h5 className="text-center  font-semibold mb-12 tracking-wide uppercase text-gray-400 ">
          Trusted by thousands from worldwide
        </h5>
        
        {/* Sliding logos container */}
        <div className="relative">
          <div className="flex animate-slide">
            {/* First set of logos */}
            {companyLogos.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center min-w-[200px] h-20 mx-8"
              >
                <div className="text-gray-400 hover:text-white transition-colors duration-300 font-medium text-lg tracking-wide company-logo">
                  {company.name}
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companyLogos.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center min-w-[200px] h-20 mx-8"
              >
                <div className="text-gray-400 hover:text-white transition-colors duration-300 font-medium text-lg tracking-wide company-logo">
                  {company.name}
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes glow-text {
          0%, 100% {
            color: #f97316;
            text-shadow: 
              0 0 5px rgba(249, 115, 22, 0.5),
              0 0 10px rgba(249, 115, 22, 0.3);
          }
          25% {
            color: #ea580c;
            text-shadow: 
              0 0 10px rgba(249, 115, 22, 0.7),
              0 0 20px rgba(249, 115, 22, 0.5),
              0 0 30px rgba(249, 115, 22, 0.3);
          }
          50% {
            color: #fb923c;
            text-shadow: 
              0 0 15px rgba(249, 115, 22, 0.9),
              0 0 25px rgba(249, 115, 22, 0.7),
              0 0 35px rgba(249, 115, 22, 0.5);
          }
          75% {
            color: #fed7aa;
            text-shadow: 
              0 0 20px rgba(249, 115, 22, 1),
              0 0 30px rgba(249, 115, 22, 0.8),
              0 0 40px rgba(249, 115, 22, 0.6);
          }
        }
        
        .animate-slide {
          animation: slide 15s linear infinite;
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }
        
        .animate-pulse-orange {
          animation: glow-text 3s ease-in-out infinite;
        }
        
        .company-logo {
          position: relative;
        }
        
        .company-logo::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -10px;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #f97316, #fb923c);
          border-radius: 50%;
          opacity: 0.7;
        }
        
        .company-logo:hover::before {
          box-shadow: 0 0 10px rgba(249, 115, 22, 0.8);
        }
      `}</style>
    </section>
  );
};

export default CompanyLogos;