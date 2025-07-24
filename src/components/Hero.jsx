import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Brain, Bot } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const rotatingTexts = ['Agents', 'Automation', 'Employees'];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = rotatingTexts[textIndex];
    let typeSpeed = isDeleting ? 100 : 180;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === current.length) {
          setIsDeleting(true);
        }
      } else {
        setDisplayText(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Dot Grid Pattern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-100"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          >
            <div className={`w-1 h-1 rounded-full animate-twinkle-subtle ${
              i % 3 === 0 ? 'bg-orange-500' : 
              i % 3 === 1 ? 'bg-orange-400' : 'bg-orange-600'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl animate-slow-float"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-slow-float" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-teal-300/5 rounded-full blur-3xl animate-slow-float" style={{animationDelay: '6s'}}></div>
          </div>

          {/* Animated Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 opacity-30 animate-float">
              <Sparkles className="w-8 h-8 text-teal-500" />
            </div>
            <div className="absolute top-1/3 right-1/4 opacity-30 animate-float" style={{animationDelay: '2s'}}>
              <Zap className="w-6 h-6 text-cyan-500" />
            </div>
            <div className="absolute bottom-1/3 left-1/3 opacity-30 animate-float" style={{animationDelay: '4s'}}>
              <Brain className="w-7 h-7 text-teal-600" />
            </div>
            <div className="absolute top-1/2 right-1/3 opacity-30 animate-float" style={{animationDelay: '6s'}}>
              <Bot className="w-8 h-8 text-cyan-600" />
            </div>
          </div>

          {/* Badge */}
          <div className={`mb-8 transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-teal-50 backdrop-blur-sm border border-teal-200 shadow-lg animate-badge-glow">
              <Bot className="w-5 h-5 text-teal-600 mr-3 animate-pulse" />
              <span className="text-sm font-medium text-black">AI Agents & Workflow Automation</span>
              <div className="ml-3 w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className={`mb-8 transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-black mb-6 leading-tight tracking-tight">
              We Build{' '}
              <span className="font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-500 bg-clip-text text-transparent animate-gradient-text">
                AI
              </span>
            </h1>

            {/* Typewriter Effect */}
            <div className="relative h-20 md:h-24">
              <div className="text-4xl md:text-6xl lg:text-7xl font-light bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                {displayText}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-orange-500/10 to-orange-600/10 blur-2xl opacity-60 animate-pulse"></div>
            </div>
          </div>

          {/* Description */}
          <div className={`max-w-4xl mx-auto mb-12 transition-all duration-2000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-xl md:text-2xl text-black leading-relaxed font-light mb-4">
              We Don't Sell AI.{' '}
              <span className="font-medium bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                We Sell Results
              </span>
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Transform your business with intelligent AI agents that handle lead generation, automate workflows, and boost employee productivity. Your digital workforce that never sleeps.
            </p>
            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-line-glow"></div>
          </div>

          {/* Floating Tech Elements */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-4 opacity-40">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-orange-600 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes slow-float {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          33% { transform: translateY(-30px) translateX(10px) scale(1.05); }
          66% { transform: translateY(10px) translateX(-10px) scale(0.95); }
        }
        @keyframes twinkle-subtle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @keyframes badge-glow {
          0%, 100% { box-shadow: 0 4px 20px rgba(20, 184, 166, 0.2); }
          50% { box-shadow: 0 6px 25px rgba(20, 184, 166, 0.3); }
        }
        @keyframes line-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes button-glow {
          0%, 100% { box-shadow: 0 8px 25px rgba(249, 115, 22, 0.4); }
          50% { box-shadow: 0 12px 35px rgba(249, 115, 22, 0.5); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes card-hover {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slow-float { animation: slow-float 12s ease-in-out infinite; }
        .animate-twinkle-subtle { animation: twinkle-subtle 3s ease-in-out infinite; }
        .animate-badge-glow { animation: badge-glow 3s ease-in-out infinite; }
        .animate-line-glow { animation: line-glow 2s ease-in-out infinite; }
        .animate-button-glow { animation: button-glow 3s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-gradient-text { animation: gradient-text 3s ease-in-out infinite; background-size: 200% 200%; }
        .animate-card-hover { animation: card-hover 3s ease-in-out infinite; }
        
        .bg-dot-pattern {
          background-image: radial-gradient(circle at 2px 2px, #14b8a6 0.8px, transparent 0);
          background-size: 40px 40px;
          background-position: 0 0;
          opacity: 0.6;
          background: linear-gradient(90deg, 
            radial-gradient(circle at 2px 2px, #0d9488 0.8px, transparent 0) 0% 0% / 40px 40px,
            radial-gradient(circle at 2px 2px, #14b8a6 0.8px, transparent 0) 25% 0% / 40px 40px,
            radial-gradient(circle at 2px 2px, #06b6d4 0.8px, transparent 0) 50% 0% / 40px 40px,
            radial-gradient(circle at 2px 2px, #0891b2 0.6px, transparent 0) 75% 0% / 40px 40px,
            radial-gradient(circle at 2px 2px, transparent 0.4px, transparent 0) 100% 0% / 40px 40px
          );
        }
      `}</style>
    </div>
  );
};

export default Hero;