import React, { useState, useEffect } from 'react';
import { Mic, MessageCircle, Phone, Zap, Shield, Clock, Users, Volume2, Play, Pause } from 'lucide-react';
import { Helmet } from "react-helmet-async";

const VoiceAssistantsPage = () => {
  const [isListening, setIsListening] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [audioWaves, setAudioWaves] = useState([1, 0.5, 0.8, 0.3, 0.9, 0.6, 0.4, 0.7]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAudioWaves(prev => prev.map(() => Math.random()));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Natural Conversations",
      description: "AI-powered voice interactions that understand context and provide human-like responses"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "24/7 Customer Support",
      description: "Round-the-clock availability for customer queries and support assistance"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Responses",
      description: "Real-time processing and immediate answers to customer inquiries"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Enterprise-grade security with end-to-end encryption for all voice data"
    }
  ];

  const benefits = [
    { metric: "90%", label: "Faster Resolution" },
    { metric: "24/7", label: "Availability" },
    { metric: "65%", label: "Cost Reduction" },
    { metric: "98%", label: "Accuracy Rate" }
  ];

  return (
    <div className="min-h-screen bg-white">

       <Helmet>
        <title>Voice Assistant Service | FatCamel</title>
        <link rel="canonical" href="https://www.fatcamel.ai/voice-assistant-service" />
        <meta
          name="description"
          content="Automate conversations with our advanced voice assistant services. Enhance customer experience with AI-powered voice solutions."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Voice <span className="text-orange-500">Assistants</span>
                </h1>
                <p className="text-xl text-gray-300">
                  Transform customer support with natural voice interactions powered by advanced AI
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              
              </div>
            </div>

            {/* Voice Visualization */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 flex items-center justify-center animate-pulse">
                  <div className="w-60 h-60 rounded-full bg-gradient-to-r from-orange-500/30 to-orange-600/30 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-orange-500 flex items-center justify-center relative">
                      <button 
                        onClick={() => setIsListening(!isListening)}
                        className="transform transition-transform duration-300 hover:scale-110"
                      >
                        <Mic className="w-16 h-16 text-white" />
                      </button>
                      
                      {/* Animated rings */}
                      {isListening && (
                        <div className="absolute inset-0 rounded-full animate-ping bg-orange-500 opacity-20"></div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Audio waves */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 flex gap-1">
                  {audioWaves.map((height, i) => (
                    <div 
                      key={i}
                      className="w-2 bg-orange-500 rounded-full transition-all duration-200"
                      style={{ height: `${20 + height * 30}px` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Powerful Voice <span className="text-orange-500">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our voice assistants deliver exceptional customer experiences through advanced AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500"
                onMouseEnter={() => setCurrentFeature(index)}
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                Experience Voice <span className="text-orange-500">Intelligence</span>
              </h2>
              <p className="text-xl text-gray-300">
                See how our voice assistants handle real customer interactions with natural language processing and contextual understanding.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="text-orange-500 font-semibold">Customer:</p>
                  <p>"I need help with my order status"</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-blue-500 font-semibold">AI Assistant:</p>
                  <p>"I'd be happy to help you check your order status. Could you please provide your order number?"</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                
                <button className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition-colors">
                  {isListening ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center animate-pulse">
                    <Volume2 className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className="text-center">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Proven <span className="text-orange-500">Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="text-4xl font-bold mb-2">{benefit.metric}</div>
                  <div className="text-lg">{benefit.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              How It <span className="text-orange-500">Works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Voice Input", desc: "Customer speaks naturally to the AI assistant" },
              { step: "02", title: "AI Processing", desc: "Advanced NLP analyzes and understands the query" },
              { step: "03", title: "Smart Response", desc: "Contextual and helpful response delivered instantly" }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-orange-200 transform translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-orange-500">Customer Support?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses already using our voice assistants to deliver exceptional customer experiences
            </p>
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceAssistantsPage;