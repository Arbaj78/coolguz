import React from 'react';

// Company logos data - matching the style from the image
const companyLogos = [
  { name: 'TARANDIP', style: 'border', type: 'bordered' },
  { name: 'IMPACT', subtitle: 'B2B', style: 'stacked', type: 'text' },
  { name: 'lambda', style: 'script', type: 'script' },
  { name: 'W', style: 'circle', type: 'circle' },
  { name: 'S', style: 'geometric', type: 'geometric' },
  { name: 'EXPLORE', subtitle: 'MORENO', style: 'global', type: 'global' },
  { name: 'NEXUS', style: 'tech', type: 'tech' },
  { name: 'zenith', style: 'minimal', type: 'minimal' }
];

const CompanyLogos = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h5 className="text-center text-2xl font-bold mb-16 tracking-widest uppercase text-gray-400">
        100+ Companies Worldwide Trust Us
        </h5>
        
        {/* Static logos grid */}
        <div className="flex items-center justify-center gap-12 lg:gap-16 flex-wrap max-w-6xl mx-auto">
          {companyLogos.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center group cursor-pointer transition-all duration-500 hover:scale-110 hover:-translate-y-1 relative"
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              {/* Bordered logo */}
              {company.type === 'bordered' && (
                <div className="border-2 border-gray-400 group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/20 px-4 py-2 transition-all duration-500 relative overflow-hidden">
                  <span className="text-gray-400 group-hover:text-white text-sm font-medium tracking-wider transition-colors duration-500 relative z-10">
                    {company.name}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )}
              
              {/* Stacked text logo */}
              {company.type === 'text' && (
                <div className="text-center relative">
                  <div className="text-gray-400 group-hover:text-white text-lg font-bold tracking-wide transition-all duration-500 group-hover:tracking-widest">
                    {company.name}
                  </div>
                  <div className="text-gray-500 group-hover:text-gray-200 text-sm font-medium tracking-wider transition-all duration-500 group-hover:tracking-widest">
                    {company.subtitle}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              )}
              
              {/* Script/handwritten style */}
              {company.type === 'script' && (
                <div className="text-gray-400 group-hover:text-white text-2xl font-light italic tracking-wide transition-all duration-500 group-hover:text-shadow-glow relative" style={{ fontFamily: 'cursive' }}>
                  {company.name}
                  <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                </div>
              )}
              
              {/* Circle logo */}
              {company.type === 'circle' && (
                <div className="w-12 h-12 bg-gray-600 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:shadow-xl group-hover:shadow-white/30 relative overflow-hidden">
                  <span className="text-white group-hover:text-black text-lg font-bold transition-colors duration-500 relative z-10">
                    {company.name}
                  </span>
                  <div className="absolute inset-0 w-12 h-12 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                    <svg className="w-full h-full text-white group-hover:text-gray-400 transition-colors duration-500" viewBox="0 0 48 48" fill="none">
                      <path d="M24 8C24 8 16 12 16 24C16 36 24 40 24 40C24 40 32 36 32 24C32 12 24 8 24 8Z" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )}
              
              {/* Geometric S */}
              {company.type === 'geometric' && (
                <div className="relative w-12 h-12 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <div className="text-gray-400 group-hover:text-white text-2xl font-bold transition-colors duration-500 relative z-10">
                    {company.name}
                  </div>
                  <div className="absolute inset-0 border-2 border-gray-600 group-hover:border-orange-400 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-orange-400/30" 
                       style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }}>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                       style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }}>
                  </div>
                </div>
              )}
              
              {/* Tech logo with connecting lines */}
              {company.type === 'tech' && (
                <div className="relative">
                  <div className="text-gray-400 group-hover:text-cyan-400 text-lg font-mono tracking-wider transition-all duration-500 relative z-10">
                    {company.name}
                  </div>
                  <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-cyan-400"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-cyan-400"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-cyan-400"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-cyan-400"></div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              )}
              
              {/* Minimal logo */}
              {company.type === 'minimal' && (
                <div className="relative">
                  <div className="text-gray-400 group-hover:text-white text-xl font-extralight tracking-[0.2em] transition-all duration-500 group-hover:tracking-[0.3em]">
                    {company.name}
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-700"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </div>
              )}
              
              {/* Global/world logo */}
              {company.type === 'global' && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-600 group-hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-500 relative overflow-hidden group-hover:shadow-lg group-hover:shadow-green-500/30 group-hover:rotate-180">
                    <svg className="w-6 h-6 text-white transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 group-hover:text-white text-sm font-bold tracking-wider transition-all duration-500 group-hover:tracking-widest">
                      {company.name}
                    </div>
                    <div className="text-gray-500 group-hover:text-gray-200 text-xs font-medium tracking-wider transition-all duration-500 group-hover:tracking-widest">
                      {company.subtitle}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;