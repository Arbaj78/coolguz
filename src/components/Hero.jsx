// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { Sparkles, Zap, Brain, Bot } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const rotatingTexts = ["Agents", "Automation", "Employees"];

  useEffect(() => setIsLoaded(true), []);

  useEffect(() => {
    const current = rotatingTexts[textIndex];
    let typeSpeed = isDeleting ? 100 : 180;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === current.length) setIsDeleting(true);
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

  useEffect(() => {
    // slight delay then prerender-ready for pages including Hero
    const t = setTimeout(() => window.dispatchEvent(new Event("prerender-ready")), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="hero" className="min-h-screen relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-100"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/80"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute opacity-20" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8}s` }}>
            <div className={`w-1 h-1 rounded-full ${i % 3 === 0 ? "bg-orange-500" : i % 3 === 1 ? "bg-orange-400" : "bg-orange-600"}`}></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-teal-300/5 rounded-full blur-3xl"></div>
          </div>

          <div className={`mb-8 transition-all duration-1500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-black mb-6 leading-tight tracking-tight">
              We Build <span className="font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-500 bg-clip-text text-transparent">AI</span>
            </h1>

            <div className="relative h-20 md:h-24">
              <div className="text-4xl md:text-6xl lg:text-7xl font-light bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                {displayText}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-orange-500/10 to-orange-600/10 blur-2xl opacity-60 animate-pulse"></div>
            </div>
          </div>

          <div className={`max-w-4xl mx-auto mb-12 transition-all duration-2000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <p className="text-xl md:text-2xl text-black leading-relaxed font-light mb-4">
              We Don't Sell AI. <span className="font-medium bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">We Sell Results</span>
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Transform your business with intelligent AI agents that handle lead generation, automate workflows, and boost employee productivity.
            </p>
            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-line-glow"></div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-4 opacity-40">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: "0.5s" }}></div>
              <div className="w-3 h-3 bg-orange-600 rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slow-float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)} }
        .bg-dot-pattern { background-image: radial-gradient(circle at 2px 2px, #14b8a6 0.8px, transparent 0); background-size: 40px 40px; opacity:0.6; }
        .animate-line-glow { animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { opacity: 0.5 } 50% { opacity: 1 } }
      `}</style>
    </div>
  );
};

export default Hero;
