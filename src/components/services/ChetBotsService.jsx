import { useState, useEffect } from 'react';
import { MessageCircle, Clock, Zap, Users, BarChart3, Shield, ArrowRight, CheckCircle, Bot, Sparkles } from 'lucide-react';
import { Helmet } from "react-helmet-async";

export default function ChatbotsServicePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry with round-the-clock automated responses"
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Lightning-fast replies that keep your customers engaged and satisfied"
    },
    {
      icon: Users,
      title: "Multi-Language Support",
      description: "Communicate with customers in their preferred language"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Track performance and gain valuable insights from customer interactions"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security ensuring your data remains protected"
    },
    {
      icon: Bot,
      title: "AI-Powered Intelligence",
      description: "Advanced natural language processing for human-like conversations"
    }
  ];

  const benefits = [
    "Reduce customer service costs by up to 80%",
    "Handle unlimited simultaneous conversations",
    "Improve customer satisfaction scores",
    "Generate qualified leads automatically",
    "Integrate seamlessly with existing systems",
    "Scale customer support effortlessly"
  ];

  const chatMessages = [
    { sender: 'user', message: "What are your business hours?", delay: 0 },
    { sender: 'bot', message: "We're available 24/7 to assist you! How can I help you today?", delay: 1000 },
    { sender: 'user', message: "I need pricing information", delay: 2000 },
    { sender: 'bot', message: "I'd be happy to provide pricing details. Let me connect you with our sales team.", delay: 3000 }
  ];

  const [visibleMessages, setVisibleMessages] = useState([]);

  useEffect(() => {
    chatMessages.forEach((msg, index) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, msg]);
      }, msg.delay);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">

       <Helmet>
  <title>Chatbot Development — AI-Powered Bots | FatCamel AI</title>
  <meta name="description" content="Build intelligent chatbots for sales, support, and engagement with FatCamel AI’s chatbot automation service." />
  <link rel="canonical" href="https://www.fatcamel.ai/Chat-Bots-Service" />
</Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/20"></div>
        
        <div className={`max-w-6xl mx-auto relative transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">AI-Powered Solution</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
                Intelligent
              </span>
              <br />
              <span className="text-orange-500">Chatbots</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your customer experience with 24/7 intelligent conversational AI that never sleeps, never takes breaks, and always delivers exceptional service.
            </p>
            
          
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-orange-300 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Chat Demo Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                See It In <span className="text-orange-500">Action</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Watch how our intelligent chatbots handle real customer conversations with human-like understanding and instant responses.
              </p>
              
              <div className="space-y-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <CheckCircle className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Interface Demo */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <span className="ml-auto font-semibold">AI Assistant</span>
                </div>
              </div>
              
              <div className="p-6 h-80 overflow-y-auto">
                {visibleMessages.map((msg, index) => (
                  <div key={index} className={`mb-4 animate-fadeIn ${
                    msg.sender === 'user' ? 'text-right' : 'text-left'
                  }`}>
                    <div className={`inline-block px-4 py-2 rounded-2xl max-w-xs ${
                      msg.sender === 'user' 
                        ? 'bg-gray-100 text-gray-800' 
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                    }`}>
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-500">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">AI is typing...</span>
                  <div className="flex gap-1 ml-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful <span className="text-orange-500">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our chatbots come packed with advanced features designed to revolutionize your customer interactions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} 
                     className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 group transition-all duration-500 hover:transform hover:scale-105"
                     onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Why Choose Our <span className="text-orange-500">Chatbots?</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation that delivers measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group hover:bg-orange-50 p-4 rounded-xl transition-all duration-300">
                    <div className="bg-orange-500 p-2 rounded-full group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg font-medium group-hover:text-orange-700 transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-orange-100 mb-8 text-lg">
                  Join thousands of businesses already using our AI chatbots to enhance their customer experience.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Business Today
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Don't let your competition get ahead. Implement intelligent chatbots and start seeing results within days.
          </p>
          
          
          
          
        </div>
      </section>
    </div>
  );
}