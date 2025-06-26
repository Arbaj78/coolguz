import React from 'react';
import { Bot, Zap, Users, Brain, Cpu, MessageSquare, BarChart3, Settings, Sparkles, Rocket, Shield, Target, CircuitBoard, Database, Network, Smartphone } from 'lucide-react';

// Enhanced AI company content
const collabContent = [
  {
    id: "1",
    title: "Intelligent AI Agents",
    text: "Deploy smart AI agents that work 24/7 to handle customer queries, process data, and automate complex workflows with human-like intelligence and learning capabilities."
  },
  {
    id: "2", 
    title: "Advanced Automation",
    text: "Integrate cutting-edge AI automation into your systems to eliminate repetitive tasks and boost productivity by up to 300% with intelligent decision-making."
  },
  {
    id: "3",
    title: "Custom AI Employees",
    text: "Build specialized AI workforce tailored to your business - from virtual assistants to data scientists, customer service reps, and business analysts."
  },
  {
    id: "4",
    title: "Neural Network Integration",
    text: "Leverage advanced machine learning models and neural networks to create intelligent systems that adapt and evolve with your business needs."
  }
];

// Updated AI service icons with orange-purple color scheme (removed sky blue)
const collabApps = [
  { id: "1", title: "AI Assistant", icon: Bot, color: "from-purple-400 to-blue-500" },
  { id: "2", title: "Automation", icon: Zap, color: "from-yellow-400 to-orange-500" },
  { id: "3", title: "Team Collaboration", icon: Users, color: "from-green-400 to-emerald-500" },
  { id: "4", title: "Neural Network", icon: Brain, color: "from-orange-400 to-red-500" },
  { id: "5", title: "Processing", icon: Cpu, color: "from-red-400 to-rose-500" },
  { id: "6", title: "Communication", icon: MessageSquare, color: "from-indigo-400 to-blue-500" },
  { id: "7", title: "Analytics", icon: BarChart3, color: "from-purple-400 to-teal-500" },
  { id: "8", title: "Configuration", icon: Settings, color: "from-gray-400 to-slate-500" },
  { id: "9", title: "AI Magic", icon: Sparkles, color: "from-yellow-300 to-amber-400" },
  { id: "10", title: "Innovation", icon: Rocket, color: "from-blue-400 to-purple-500" },
  { id: "11", title: "Security", icon: Shield, color: "from-green-500 to-teal-500" },
  { id: "12", title: "Precision", icon: Target, color: "from-orange-500 to-red-500" }
];

// Additional floating AI elements with orange accents (removed sky blue)
const floatingElements = [
  { id: "1", icon: CircuitBoard, delay: "0s", color: "text-purple-400" },
  { id: "2", icon: Database, delay: "2s", color: "text-orange-400" },
  { id: "3", icon: Network, delay: "4s", color: "text-green-400" },
  { id: "4", icon: Smartphone, delay: "6s", color: "text-orange-400" }
];

const collabText = "Experience the future of business automation with our intelligent AI agents. Our cutting-edge technology seamlessly integrates with your workflow, creating a digital workforce that never sleeps, never stops learning, and continuously optimizes your operations.";

const Section = ({ children, crosses }) => (
  <section className={`py-12 bg-black relative overflow-hidden ${crosses ? 'relative' : ''}`}>
    {/* Animated background grid with orange accents */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
    
    {/* Enhanced floating particles with orange animation */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 rounded-full animate-float opacity-20 ${
            i % 3 === 0 ? 'bg-purple-400' : i % 3 === 1 ? 'bg-orange-400' : 'bg-blue-400'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        ></div>
      ))}
    </div>
    
    {/* Animated light beams */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-light-beam"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/30 to-transparent animate-light-beam-reverse"></div>
    </div>
    
    {children}
    {crosses && (
      <>
        <div className="absolute top-0 left-5 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-pulse-glow"></div>
        <div className="absolute top-0 right-5 w-px h-full bg-gradient-to-b from-transparent via-orange-500/30 to-transparent animate-pulse-glow-reverse"></div>
      </>
    )}
  </section>
);

const Button = ({ children, className = "" }) => (
  <button className={`group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-700 to-orange-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 animate-button-glow ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 animate-shimmer-fast"></div>
    <span className="relative z-10 flex items-center gap-2">
      {children}
      <Rocket className="w-4 h-4 group-hover:translate-x-1 group-hover:rotate-12 transition-transform animate-rocket-bounce" />
    </span>
  </button>
);

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:gap-20 relative z-10">
        <div className="max-w-[32rem]">
          <div className="mb-4">
            
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 md:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white  to-orange-400 bg-clip-text text-transparent animate-gradient-shift">
              Smart AI Agents
            </span>
            <br />
            <span className="text-white animate-text-reveal">& Seamless</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-white bg-clip-text text-transparent animate-gradient-shift-reverse">
              Integration
            </span>
          </h2>
          
          <ul className="max-w-[30rem] mb-8 md:mb-12 space-y-6">
            {collabContent.map((item, index) => (
              <li 
                className="group py-5 border-l-2 border-transparent hover:border-orange-400 pl-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500/5 hover:to-transparent rounded-r-lg animate-list-slide-in" 
                key={item.id}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-3">
                  <div className="relative w-10 h-10 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-110 animate-icon-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity animate-glow-pulse"></div>
                    <span className="relative z-10 text-black text-sm font-bold animate-checkmark">✓</span>
                  </div>
                  <h6 className="text-xl font-bold ml-4 text-white group-hover:text-orange-300 transition-colors animate-title-glow">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="text-gray-400 leading-relaxed ml-14 group-hover:text-gray-300 transition-colors animate-text-fade-in">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

         
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-8 lg:mt-0 relative">
          {/* Enhanced floating background elements */}
          {floatingElements.map((element, index) => (
            <element.icon
              key={element.id}
              className={`absolute w-8 h-8 ${element.color} opacity-10 animate-float-complex`}
              style={{
                left: `${20 + index * 20}%`,
                top: `${10 + index * 15}%`,
                animationDelay: element.delay
              }}
            />
          ))}
          
          <p className="text-gray-400 mb-8 text-center md:mb-10 lg:mb-16 lg:w-[28rem] lg:mx-auto leading-relaxed text-lg animate-text-fade-up">
            {collabText}
          </p>

          {/* Advanced 360° AI Ecosystem with smaller size */}
          <div className="relative left-1/2 flex w-[24rem] aspect-square -translate-x-1/2 scale-75 md:scale-90">
            
            {/* Multiple outer glowing rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-orange-500/20 to-blue-500/20 animate-pulse-complex"></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 animate-pulse-complex-reverse"></div>
            
            {/* Main rotating ring with enhanced effects */}
            <div className="absolute inset-2 rounded-full border-2 border-gradient-to-r from-purple-400/40 via-orange-400/40 to-blue-400/40 animate-spin-complex shadow-2xl shadow-orange-500/20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/5 via-orange-500/5 to-blue-500/5 animate-inner-glow"></div>
            </div>
            
            {/* Middle ring with enhanced pulsing */}
            <div className="absolute inset-6 rounded-full border border-gray-700/60 bg-gradient-to-r from-gray-900/50 to-black/50 animate-pulse-ring-enhanced">
              
              {/* Inner AI core with complex animations */}
              <div className="absolute inset-10 bg-gradient-to-r from-purple-600 via-orange-600 to-blue-600 rounded-full p-1 shadow-2xl animate-core-glow">
                <div className="flex items-center justify-center w-full h-full bg-black rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-orange-500/20 to-blue-500/20 animate-spin-fast"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 animate-spin-reverse"></div>
                  <div className="relative z-10 flex items-center justify-center">
                    <Brain className="w-12 h-12 text-purple-400 animate-brain-complex" />
                    <div className="absolute inset-0 bg-orange-400/30 rounded-full blur-xl animate-brain-aura"></div>
                    <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-lg animate-brain-aura-reverse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced orbiting AI service icons */}
            <div className="absolute inset-0">
              {collabApps.map((app, index) => {
                const rotation = index * 30;
                const radius = index < 6 ? 0 : index < 9 ? 15 : 30;
                return (
                  <div
                    key={app.id}
                    className="absolute w-full h-full animate-orbit-enhanced"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      animationDelay: `${index * 0.5}s`,
                      animationDuration: `${20 + (index % 3) * 5}s`
                    }}
                  >
                    <div
                      className={`absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${app.color} rounded-2xl flex items-center justify-center shadow-2xl hover:scale-125 transition-all duration-300 group cursor-pointer border border-white/10 animate-icon-float-complex`}
                      style={{
                        transform: `rotate(-${rotation}deg) translateY(-${radius}px)`,
                        animationDelay: `${index * 0.3}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl animate-inner-shine"></div>
                      <app.icon className="w-6 h-6 text-white drop-shadow-lg group-hover:rotate-12 transition-transform relative z-10 animate-icon-bounce" />
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer-ultra"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced decorative elements with complex animations */}
            <div className="absolute -left-6 top-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse-line-complex"></div>
            <div className="absolute -right-6 top-1/2 w-12 h-1 bg-gradient-to-l from-transparent via-orange-500 to-transparent animate-pulse-line-complex-reverse"></div>
            <div className="absolute left-1/2 -top-6 h-12 w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse-line-vertical"></div>
            <div className="absolute left-1/2 -bottom-6 h-12 w-1 bg-gradient-to-t from-transparent via-orange-500 to-transparent animate-pulse-line-vertical-reverse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-complex {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(90deg) scale(1.02); }
          50% { transform: rotate(180deg) scale(1); }
          75% { transform: rotate(270deg) scale(1.02); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes orbit-enhanced {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-90deg) scale(1.05); }
          50% { transform: rotate(-180deg); }
          75% { transform: rotate(-270deg) scale(1.05); }
          100% { transform: rotate(-360deg); }
        }
        
        @keyframes float-complex {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-15px) translateX(8px) rotate(90deg); }
          50% { transform: translateY(-8px) translateX(-8px) rotate(180deg); }
          75% { transform: translateY(-20px) translateX(5px) rotate(270deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(360deg); }
        }
        
        @keyframes pulse-complex {
          0% { opacity: 0.2; transform: scale(1); }
          25% { opacity: 0.6; transform: scale(1.05); }
          50% { opacity: 0.8; transform: scale(1.1); }
          75% { opacity: 0.6; transform: scale(1.05); }
          100% { opacity: 0.2; transform: scale(1); }
        }
        
        @keyframes pulse-complex-reverse {
          0% { opacity: 0.8; transform: scale(1.1); }
          25% { opacity: 0.6; transform: scale(1.05); }
          50% { opacity: 0.2; transform: scale(1); }
          75% { opacity: 0.6; transform: scale(1.05); }
          100% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes brain-complex {
          0% { transform: scale(1) rotate(0deg); color: rgb(196, 181, 253); }
          25% { transform: scale(1.1) rotate(5deg); color: rgb(251, 146, 60); }
          50% { transform: scale(1.05) rotate(0deg); color: rgb(196, 181, 253); }
          75% { transform: scale(1.15) rotate(-5deg); color: rgb(251, 146, 60); }
          100% { transform: scale(1) rotate(0deg); color: rgb(196, 181, 253); }
        }
        
        @keyframes brain-aura {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @keyframes brain-aura-reverse {
          0%, 100% { opacity: 0.8; transform: scale(1.2); }
          50% { opacity: 0.3; transform: scale(1); }
        }
        
        @keyframes core-glow {
          0% { box-shadow: 0 0 20px rgba(196, 181, 253, 0.3); }
          25% { box-shadow: 0 0 40px rgba(251, 146, 60, 0.6), 0 0 60px rgba(196, 181, 253, 0.4); }
          50% { box-shadow: 0 0 60px rgba(196, 181, 253, 0.8), 0 0 80px rgba(251, 146, 60, 0.5); }
          75% { box-shadow: 0 0 40px rgba(251, 146, 60, 0.6), 0 0 60px rgba(196, 181, 253, 0.4); }
          100% { box-shadow: 0 0 20px rgba(196, 181, 253, 0.3); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          25% { background-position: 50% 0%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 100%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes gradient-shift-reverse {
          0% { background-position: 100% 50%; }
          25% { background-position: 50% 100%; }
          50% { background-position: 0% 50%; }
          75% { background-position: 50% 0%; }
          100% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer-ultra {
          0% { transform: translateX(-100%) rotate(0deg); }
          100% { transform: translateX(100%) rotate(360deg); }
        }
        
        @keyframes light-beam {
          0%, 100% { opacity: 0.2; height: 100%; }
          50% { opacity: 0.8; height: 120%; }
        }
        
        @keyframes light-beam-reverse {
          0%, 100% { opacity: 0.8; height: 120%; }
          50% { opacity: 0.2; height: 100%; }
        }
        
        @keyframes icon-float-complex {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(90deg); }
          50% { transform: translateY(-5px) rotate(180deg); }
          75% { transform: translateY(-12px) rotate(270deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
        
        @keyframes button-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 146, 60, 0.3); }
          50% { box-shadow: 0 0 40px rgba(251, 146, 60, 0.6), 0 0 60px rgba(196, 181, 253, 0.4); }
        }
        
        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(196, 181, 253, 0.5); }
          50% { text-shadow: 0 0 20px rgba(251, 146, 60, 0.8); }
        }
        
        @keyframes list-slide-in {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes text-fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes rocket-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes spin-fast {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-spin-complex {
          animation: spin-complex 20s ease-in-out infinite;
        }
        
        .animate-orbit-enhanced {
          animation: orbit-enhanced 25s ease-in-out infinite;
        }
        
        .animate-float-complex {
          animation: float-complex 8s ease-in-out infinite;
        }
        
        .animate-pulse-complex {
          animation: pulse-complex 3s ease-in-out infinite;
        }
        
        .animate-pulse-complex-reverse {
          animation: pulse-complex-reverse 3s ease-in-out infinite;
        }
        
        .animate-brain-complex {
          animation: brain-complex 2s ease-in-out infinite;
        }
        
        .animate-brain-aura {
          animation: brain-aura 2s ease-in-out infinite;
        }
        
        .animate-brain-aura-reverse {
          animation: brain-aura-reverse 2s ease-in-out infinite;
        }
        
        .animate-core-glow {
          animation: core-glow 3s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          background-size: 300% 300%;
          animation: gradient-shift 4s ease infinite;
        }
        
        .animate-gradient-shift-reverse {
          background-size: 300% 300%;
          animation: gradient-shift-reverse 4s ease infinite;
        }
        
        .animate-shimmer-ultra {
          animation: shimmer-ultra 1.5s linear infinite;
        }
        
        .animate-light-beam {
          animation: light-beam 4s ease-in-out infinite;
        }
        
        .animate-light-beam-reverse {
          animation: light-beam-reverse 4s ease-in-out infinite;
        }
        
        .animate-icon-float-complex {
          animation: icon-float-complex 4s ease-in-out infinite;
        }
        
        .animate-button-glow {
          animation: button-glow 2s ease-in-out infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        
        .animate-list-slide-in {
          animation: list-slide-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-text-fade-up {
          animation: text-fade-up 1s ease-out;
        }
        
        .animate-rocket-bounce {
          animation: rocket-bounce 1s ease-in-out infinite;
        }
        
        .animate-spin-fast {
          animation: spin-fast 15s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-complex 2s ease-in-out infinite;
        }
        
        .animate-pulse-glow-reverse {
          animation: pulse-complex-reverse 2s ease-in-out infinite;
        }
        
        .animate-shimmer-fast {
          animation: shimmer-ultra 1s linear infinite;
        }
        
        .animate-badge-glow {
          animation: core-glow 3s ease-in-out infinite;
        }
        
        .animate-text-reveal {
          animation: text-fade-up 1.2s ease-out;
        }
        
        .animate-icon-pulse {
          animation: pulse-complex 2s ease-in-out infinite;
        }
        
        .animate-glow-pulse {
          animation: brain-aura 2s ease-in-out infinite;
        }
        
        .animate-checkmark {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-title-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        
        .animate-text-fade-in {
          animation: text-fade-up 1.5s ease-out;
        }
        
        .animate-pulse-ring-enhanced {
          animation: pulse-complex 3s ease-in-out infinite;
        }
        
        .animate-inner-glow {
          animation: brain-aura 2s ease-in-out infinite;
        }
        
        .animate-inner-shine {
          animation: shimmer-ultra 2s ease-in-out infinite;
        }
        
        .animate-icon-bounce {
          animation: rocket-bounce 1s ease-in-out infinite;
        }
        
        .animate-pulse-line-complex {
          animation: pulse-complex 2s ease-in-out infinite;
        }
        
        .animate-pulse-line-complex-reverse {
          animation: pulse-complex-reverse 2s ease-in-out infinite;
        }
        
        .animate-pulse-line-vertical {
          animation: light-beam 3s ease-in-out infinite;
        }
        
        .animate-pulse-line-vertical-reverse {
          animation: light-beam-reverse 3s ease-in-out infinite;
        }
        
        .container {
          max-width: 1400px;
        }
      `}</style>
    </Section>
  );
};

export default Collaboration;