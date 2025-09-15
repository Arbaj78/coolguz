import React, { useState, useEffect } from 'react';
import { Mail, Zap, Brain, Clock, CheckCircle, ArrowRight, Star, Users, TrendingUp } from 'lucide-react';
import { Helmet } from "react-helmet-async";
const EmailManagementPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Sorting",
      description: "Smart categorization of emails based on priority, sender, and content analysis"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Responses",
      description: "Generate contextual replies using advanced AI to maintain professional communication"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Smart Follow-ups",
      description: "Never miss important conversations with intelligent reminder and follow-up systems"
    }
  ];

  const benefits = [
    { text: "99% Email Processing Accuracy", icon: <CheckCircle className="w-5 h-5" /> },
    { text: "75% Time Reduction", icon: <Clock className="w-5 h-5" /> },
    { text: "24/7 Automated Support", icon: <Zap className="w-5 h-5" /> },
    { text: "Advanced AI Integration", icon: <Brain className="w-5 h-5" /> }
  ];

  const stats = [
    { number: "10M+", label: "Emails Processed", icon: <Mail className="w-6 h-6" /> },
    { number: "500+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
        <Helmet>
        <title>Email Management Service | FatCamel</title>
        <link rel="canonical" href="https://www.fatcamel.ai/email-management-service" />
        <meta
          name="description"
          content="Automate your email workflows with FatCamel’s Email Management Service. Streamline communication, save time, and boost engagement."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Zap className="w-4 h-4" />
                AI-Powered Email Automation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Email Management
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Redefined
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your inbox into a productivity powerhouse with AI-driven email sorting, 
                intelligent responses, and automated follow-ups that work 24/7.
              </p>
             
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-400/10 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-orange-600/10 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of email management with cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 ${activeFeature === index ? 'border-orange-500 shadow-orange-500/20' : 'border-transparent'}`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${activeFeature === index ? 'bg-orange-500 text-white scale-110' : 'bg-orange-100 text-orange-500 group-hover:bg-orange-500 group-hover:text-white'}`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-300">
              Our AI-powered email management delivers exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <div className="text-orange-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">
                Why Choose Our Email Management?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-orange-50 transition-colors duration-300 group"
                  >
                    <div className="text-orange-500 group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                    <Mail className="w-6 h-6 text-orange-400" />
                    <span className="font-semibold">Inbox: 847 emails</span>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-green-400 mb-2">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">AI Processing Complete</span>
                    </div>
                    <div className="text-white text-sm">
                      ✅ 234 emails sorted<br/>
                      ✅ 89 auto-responses sent<br/>
                      ✅ 45 follow-ups scheduled
                    </div>
                  </div>
                </div>
                
                {/* Floating animation elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Email Experience?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of businesses already using our AI-powered email management solution
          </p>
       
          
        </div>
      </div>
    </div>
  );
};

export default EmailManagementPage;