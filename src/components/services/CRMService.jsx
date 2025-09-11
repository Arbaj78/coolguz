import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Zap, 
  BarChart3, 
  Bot, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp,
  Clock,
  Target,
  Database,
  MessageSquare,
  Settings,
  Star,
  ChevronRight
} from 'lucide-react';

const CRMAutomationPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Lead Scoring",
      description: "Automatically prioritize leads with intelligent scoring algorithms"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Automated Follow-ups",
      description: "Never miss a follow-up with smart automated communication workflows"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Get instant insights into your sales pipeline and performance metrics"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Smart Segmentation",
      description: "Automatically categorize customers based on behavior and preferences"
    }
  ];

  const benefits = [
    "Increase conversion rates by 35%",
    "Reduce manual tasks by 60%",
    "Improve response time by 80%",
    "Boost team productivity by 45%"
  ];

  const stats = [
    { number: "500+", label: "Businesses Automated" },
    { number: "35%", label: "Average ROI Increase" },
    { number: "24/7", label: "Continuous Operation" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full mb-8 backdrop-blur-sm border border-orange-500/30">
              <Zap className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-300 text-sm font-medium">Next-Gen CRM Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              CRM <span className="text-orange-500">Automation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enhance your CRM with intelligent workflows and insights that drive growth
            </p>
            
         
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Powerful <span className="text-orange-500">Automation</span> Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your customer relationship management with AI-driven automation that works around the clock
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-orange-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${activeFeature === index ? 'border-orange-500 shadow-xl -translate-y-2' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-orange-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-orange-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                Why Choose Our <span className="text-orange-500">CRM Automation</span>?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 group-hover:text-black transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center group">
                Learn More
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                    <span className="font-medium text-black">Lead Conversion</span>
                    <span className="text-orange-500 font-bold">+35%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="font-medium text-black">Time Saved</span>
                    <span className="text-orange-500 font-bold">60 hrs/week</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                    <span className="font-medium text-black">Response Time</span>
                    <span className="text-orange-500 font-bold">-80%</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It <span className="text-orange-500">Works</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Simple steps to transform your CRM into an intelligent automation powerhouse
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Connect Your CRM", desc: "Seamlessly integrate with your existing CRM platform" },
              { step: "02", title: "Configure Workflows", desc: "Set up intelligent automation rules and triggers" },
              { step: "03", title: "Watch It Work", desc: "Monitor results and optimize performance in real-time" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your CRM?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join hundreds of businesses that have transformed their customer relationships with our AI-powered automation
          </p>
        
        </div>
      </section>
    </div>
  );
};

export default CRMAutomationPage;