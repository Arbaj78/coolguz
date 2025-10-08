import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // STEP 1: Link ko import karein
import { ChevronRight, Users, MessageCircle, Target, Zap, Brain, CheckCircle, ArrowRight, Linkedin, Bot, Eye, Edit3, Send, TrendingUp } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import SEO from "./SEO"
import { seo, SITE } from "../seo/seoData";

// ... (AnimatedCounter, WorkflowTree, FeatureCard, ProblemSolutionCard components ka code waisa hi rahega) ...

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return <span>{count}{suffix}</span>;
};

const WorkflowTree = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [screenSize, setScreenSize] = useState('desktop');
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setScreenSize('mobile');
      } else if (width < 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  // Enhanced responsive node positions
  const nodes = [
    { 
      id: 0, 
      title: "AI Training", 
      icon: Brain, 
      desktop: { x: 50, y: 15 },
      tablet: { x: 50, y: 12 },
      mobile: { x: 50, y: 8 },
      color: "from-purple-500 to-pink-500" 
    },
    { 
      id: 1, 
      title: "Comment Monitoring", 
      icon: Eye, 
      desktop: { x: 25, y: 35 },
      tablet: { x: 20, y: 32 },
      mobile: { x: 15, y: 28 },
      color: "from-blue-500 to-cyan-500" 
    },
    { 
      id: 2, 
      title: "Reply Generation", 
      icon: Bot, 
      desktop: { x: 75, y: 35 },
      tablet: { x: 80, y: 32 },
      mobile: { x: 85, y: 28 },
      color: "from-green-500 to-emerald-500" 
    },
    { 
      id: 3, 
      title: "Review & Edit", 
      icon: Edit3, 
      desktop: { x: 25, y: 65 },
      tablet: { x: 20, y: 62 },
      mobile: { x: 15, y: 58 },
      color: "from-orange-500 to-red-500" 
    },
    { 
      id: 4, 
      title: "Send Messages", 
      icon: Send, 
      desktop: { x: 75, y: 65 },
      tablet: { x: 80, y: 62 },
      mobile: { x: 85, y: 58 },
      color: "from-indigo-500 to-purple-500" 
    },
    { 
      id: 5, 
      title: "Network Growth", 
      icon: TrendingUp, 
      desktop: { x: 50, y: 88 },
      tablet: { x: 50, y: 88 },
      mobile: { x: 50, y: 88 },
      color: "from-teal-500 to-blue-500" 
    }
  ];
  
  const connections = [
    [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5]
  ];
  
  // Get dimensions based on screen size
  const getDimensions = () => {
    switch (screenSize) {
      case 'mobile':
        return { width: 'w-full', height: 'h-80', containerHeight: 'min-h-80', maxWidth: 'max-w-lg' };
      case 'tablet':
        return { width: 'w-full', height: 'h-96', containerHeight: 'min-h-96', maxWidth: 'max-w-3xl' };
      default:
        return { width: 'w-full', height: 'h-[28rem] lg:h-[32rem] xl:h-[36rem]', containerHeight: 'min-h-[28rem] lg:min-h-[32rem] xl:min-h-[36rem]', maxWidth: 'max-w-6xl' };
    }
  };
  
  const { width, height, containerHeight, maxWidth } = getDimensions();
  
  return (
    <div className={`relative ${width} ${height} ${containerHeight} bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl lg:rounded-3xl overflow-hidden mx-auto ${maxWidth} shadow-lg hover:shadow-xl transition-all duration-500`}>

     

 <SEO {...seo['/linkbuddy']} url={`${SITE.domain}/linkbuddy`} />

      
      <svg className="absolute inset-0 w-full h-full">
        {connections.map(([from, to], index) => {
          const fromNode = nodes[from];
          const toNode = nodes[to];
          const fromPos = fromNode[screenSize];
          const toPos = toNode[screenSize];
          
          return (
            <line
              key={index}
              x1={`${fromPos.x}%`}
              y1={`${fromPos.y}%`}
              x2={`${toPos.x}%`}
              y2={`${toPos.y}%`}
              stroke="url(#gradient)"
              strokeWidth={screenSize === 'mobile' ? "2" : screenSize === 'tablet' ? "2.5" : "3.5"}
              className={`transition-all duration-1000 ${
                activeNode === from || activeNode === to ? 'opacity-100' : 'opacity-40'
              }`}
              strokeDasharray={screenSize === 'mobile' ? "4,4" : screenSize === 'tablet' ? "6,6" : "8,8"}
            />
          );
        })}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
      
      {nodes.map((node) => {
        const Icon = node.icon;
        const isActive = activeNode === node.id;
        const position = node[screenSize];
        
        // Dynamic sizing based on screen
        const getNodeSize = () => {
          switch (screenSize) {
            case 'mobile':
              return 'w-12 h-12';
            case 'tablet':
              return 'w-16 h-16';
            default:
              return 'w-18 h-18 lg:w-22 lg:h-22 xl:w-24 xl:h-24';
          }
        };
        
        const getIconSize = () => {
          switch (screenSize) {
            case 'mobile':
              return 'w-5 h-5';
            case 'tablet':
              return 'w-7 h-7';
            default:
              return 'w-8 h-8 lg:w-10 lg:h-10 xl:w-11 xl:h-11';
          }
        };
        
        const getTextSize = () => {
          switch (screenSize) {
            case 'mobile':
              return 'text-[10px]';
            case 'tablet':
              return 'text-xs';
            default:
              return 'text-sm lg:text-base xl:text-lg';
          }
        };
        
        return (
          <div
            key={node.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
              isActive ? 'scale-110 z-20' : 'scale-100 z-10'
            }`}
            style={{ 
              left: `${position.x}%`, 
              top: `${position.y}%` 
            }}
          >
            <div className={`relative ${getNodeSize()} rounded-full bg-gradient-to-r ${node.color} flex items-center justify-center shadow-lg ${
              isActive ? 'shadow-xl animate-pulse' : ''
            }`}>
              <Icon className={`${getIconSize()} text-white`} />
              {isActive && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-spin" />
              )}
            </div>
            <div className={`mt-2 lg:mt-3 xl:mt-4 text-center transition-all duration-500 ${
              isActive ? 'opacity-100 transform translate-y-0' : 'opacity-70 transform translate-y-1'
            }`}>
              <p className={`${getTextSize()} font-semibold text-gray-700 leading-tight px-1 max-w-24 lg:max-w-28 xl:max-w-32`}>
                {node.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={`group relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    } hover:-translate-y-2`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
};

const ProblemSolutionCard = ({ type, items, icon: Icon }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 sm:p-8 ${
      type === 'problem' 
        ? 'bg-gradient-to-br from-red-50 to-orange-50 border border-red-100' 
        : 'bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100'
    }`}>
      <div className="absolute top-4 right-4">
        <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${type === 'problem' ? 'text-red-400' : 'text-green-400'}`} />
      </div>
      <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${
        type === 'problem' ? 'text-red-700' : 'text-green-700'
      }`}>
        {type === 'problem' ? 'The Problem' : 'The Solution'}
      </h3>
      <div className="space-y-3 sm:space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-2 sm:space-x-3 group">
            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 ${
              type === 'problem' ? 'bg-red-400' : 'bg-green-400'
            } group-hover:scale-150 transition-transform duration-300`} />
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function LinkBuddyProductPage() {
  // ... (state and constants for the page) ...
  const [currentModule, setCurrentModule] = useState(0);
  
  const problems = [
    "Your team spends countless hours manually replying to comments, crafting direct messages, and trying to connect with the right people on LinkedIn.",
    "Responses often get delayed or missed, hurting engagement.",
    "Generic replies make your brand sound robotic or impersonal.",
    "High-value connections can slip through the cracks because outreach is time-consuming."
  ];
  
  const solutions = [
    "Learns your tone, values, and goals from your past posts.",
    "Crafts hyper-personalized replies and messages that sound like you.",
    "Surfaces the highest-value opportunities for connection.",
    "Gives you full approval control before anything is posted."
  ];
  
  const modules = [
    {
      title: "Module 1: Engage with Comments & DMs",
      description: "Smart comment replies and personalized direct messages",
      features: ["AI-powered comment analysis", "Hyper-personalized responses", "Profile insights dashboard", "Full approval control"]
    },
    {
      title: "Module 2: Build New Connections", 
      description: "Proactive outreach to target profiles",
      features: ["Target profile upload", "Recent post analysis", "Smart engagement suggestions", "Connection tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ... (Hero Section, Workflow, Problem/Solution, Agent Training, Modules, Key Features sections) ... */}
      
      
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 animate-bounce">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-sm sm:text-base text-blue-600 font-semibold">LinkedIn Engagement Agent</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Meet <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">LinkBuddy</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
              A smart AI-powered agent designed to help you engage meaningfully with your audience and grow your LinkedIn network. The agent learns your personal style and ensures all interactions reflect your tone, values, and goals.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-center mb-8 sm:mb-12">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                  <AnimatedCounter end={95} suffix="%" />
                </div>
                <p className="text-sm sm:text-base text-gray-600">Time Saved</p>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
                  <AnimatedCounter end={300} suffix="%" />
                </div>
                <p className="text-sm sm:text-base text-gray-600">Engagement Boost</p>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <p className="text-sm sm:text-base text-gray-600">New Connections</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
              How LinkBuddy Works
            </h2>
            <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
              <WorkflowTree />
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-12">
            <ProblemSolutionCard 
              type="problem" 
              items={problems}
              icon={Target}
            />
            <ProblemSolutionCard 
              type="solution" 
              items={solutions}
              icon={CheckCircle}
            />
          </div>
        </div>
      </div>
      
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Agent Training</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Before the agent starts, it is trained specifically for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <FeatureCard
              icon={Brain}
              title="Personalization"
              description="Trained on your previous LinkedIn posts, so it understands your writing style, tone, and messaging preferences. Learns your goals and can adapt as your style evolves."
              delay={0}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Continuous Refinement"
              description="You can review and fine-tune replies or messages, giving feedback to make it even smarter over time. The agent learns from every interaction."
              delay={200}
            />
          </div>
        </div>
      </div>
      
      <div className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Powerful Modules</h2>
            <p className="text-lg sm:text-xl text-gray-600">Two comprehensive modules to supercharge your LinkedIn presence</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
                onMouseEnter={() => setCurrentModule(index)}
              >
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {module.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all duration-300" />
                </div>
                
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">{module.description}</p>
                
                <div className="space-y-2 sm:space-y-3">
                  {module.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${fIndex * 100}ms`}}>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Key Features</h2>
            <p className="text-lg sm:text-xl text-gray-600">Everything you need to dominate LinkedIn engagement</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <FeatureCard
              icon={Eye}
              title="Smart Monitoring"
              description="Automatically tracks all new comments and interactions across your posts"
              delay={0}
            />
            <FeatureCard
              icon={Bot}
              title="AI-Powered Replies"
              description="Generates personalized responses that match your unique voice and style"
              delay={200}
            />
            <FeatureCard
              icon={Users}
              title="Profile Insights"
              description="Deep analysis of commenter profiles to craft meaningful connections"
              delay={400}
            />
            <FeatureCard
              icon={CheckCircle}
              title="Full Control"
              description="Review, edit, and approve everything before it goes live on LinkedIn"
              delay={600}
            />
          </div>
        </div>
      </div>

      {/* STEP 2: Yahan CTA section paste karein */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-5xl mx-auto text-center py-16 sm:py-20 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Put Your LinkedIn Growth on Autopilot
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Focus on what matters most—building genuine relationships—while LinkBuddy handles the rest. Schedule a demo today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center w-full sm:w-auto bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Free Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}