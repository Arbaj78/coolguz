import { curve, heroBackground, robot } from "../assets";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import CompanyLogos from "./CompanyLogos";
import React, { useState, useEffect, useRef } from 'react';
import {
  Bot, Users, UserCheck, Lightbulb, Sparkles, Zap, Brain, Cpu, Network, Target,
} from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef(null);
  const containerRef = useRef(null);

  const [currentText, setCurrentText] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const rotatingTexts = [
    { text: 'Agents', color: 'text-orange-400' },
    { text: 'Teams', color: 'text-orange-400' },
    { text: 'Employees', color: 'text-orange-400' },
    { text: 'Solutions', color: 'text-orange-400' }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x: x * 20, y: y * 20 });
    }
  };

  const FloatingShape = ({ shape, size, color, position, delay, duration }) => (
    <div
      className={`absolute ${position} ${color} opacity-30`}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`,
      }}
    >
      {shape === 'circle' && <div className={`${size} rounded-full bg-current`} />}
      {shape === 'square' && <div className={`${size} bg-current transform rotate-45`} />}
      {shape === 'triangle' && (
        <div className={`${size} bg-current`} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      )}
    </div>
  );

  const NetworkNode = ({ position, size = 'w-3 h-3', delay = 0 }) => (
    <div className={`absolute ${position} ${size} bg-blue-400 rounded-full opacity-60 animate-pulse`}
      style={{ animationDelay: `${delay}s` }}>
      <div className={`absolute inset-0 bg-blue-400 rounded-full blur-sm`} />
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <g stroke="url(#gradient)" strokeWidth="1" fill="none">
            <path d="M100,100 Q300,200 500,100 T900,150" className="animate-pulse">
              <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="8s" repeatCount="indefinite" />
            </path>
            <path d="M200,300 Q400,100 700,300 T1000,250" className="animate-pulse" style={{ animationDelay: '2s' }}>
              <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="8s" repeatCount="indefinite" />
            </path>
            <path d="M50,500 Q350,600 650,400 T1100,500" className="animate-pulse" style={{ animationDelay: '4s' }}>
              <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="8s" repeatCount="indefinite" />
            </path>
          </g>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Shapes */}
      <FloatingShape shape="circle" size="w-16 h-16" color="text-purple-400" position="top-20 left-20" delay={0} duration={6} />
      <FloatingShape shape="square" size="w-12 h-12" color="text-blue-400" position="top-40 right-32" delay={2} duration={8} />
      <FloatingShape shape="triangle" size="w-20 h-20" color="text-pink-400" position="bottom-40 left-40" delay={4} duration={7} />
      <FloatingShape shape="circle" size="w-8 h-8" color="text-cyan-400" position="bottom-20 right-20" delay={1} duration={5} />
      <FloatingShape shape="square" size="w-6 h-6" color="text-orange-400" position="top-60 left-1/2" delay={3} duration={9} />

      {/* Network Nodes */}
      <NetworkNode position="top-32 left-32" delay={0} />
      <NetworkNode position="top-48 right-40" delay={1} />
      <NetworkNode position="bottom-32 left-48" delay={2} />
      <NetworkNode position="bottom-48 right-32" delay={0.5} />
      <NetworkNode position="top-1/2 left-20" size="w-4 h-4" delay={1.5} />
      <NetworkNode position="top-1/2 right-20" size="w-2 h-2" delay={2.5} />

      {/* Golden Circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="w-80 h-80 border-4 border-orange-500 rounded-full opacity-40 animate-spin"
          style={{
            animationDuration: '20s',
            transform: `translate(-50%, -50%) rotate(${mousePos.x * 0.1}deg) scale(${1 + mousePos.y * 0.001})`
          }}
        >
          <div className="absolute inset-4 border-2 border-orange-400 rounded-full opacity-60 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          <div className="absolute inset-8 border border-orange-300 rounded-full opacity-80 animate-spin" style={{ animationDuration: '10s' }} />
        </div>
      </div>

      {/* Main Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Heading */}
        <div className={`mb-6 transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            We Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-gradient">
              AI
            </span>
          </h1>

          {/* Rotating Text */}
          <div className="relative h-24 overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-1000 ease-out"
              style={{
                transform: `translateY(-${currentText * 100}%) translateX(${mousePos.x * 0.1}px)`
              }}
            >
              {rotatingTexts.map((item) => (
                <div
                  key={item.text}
                  className="h-24 flex items-center justify-center text-4xl md:text-6xl font-semibold"
                >
                  <span className={`${item.color} transform transition-all duration-500 hover:scale-110`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={`max-w-5xl mx-auto mb-12 transition-all duration-2000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light hover:text-white">
            We deliver working systems, not prototypes — 200 hours and $150K saved, year after year.
          </p>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2">
            {rotatingTexts.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentText ? 'bg-orange-400 w-6' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-10px) rotate(5deg) scale(1.05); }
          66% { transform: translateY(-5px) rotate(-3deg) scale(0.95); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;