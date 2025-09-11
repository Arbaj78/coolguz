import React, { useState, useEffect } from 'react';
import { Play, BarChart3, MessageSquare, Calendar, Zap, TrendingUp, Users, Clock, CheckCircle, ArrowRight, Bot, Target, Globe } from 'lucide-react';

const SocialMediaPage = () => {
  const [activeTab, setActiveTab] = useState('posting');
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    setAnimateStats(true);
  }, []);

  const services = [
    {
      id: 'posting',
      title: 'Automated Posting',
      icon: <Calendar className="w-6 h-6" />,
      description: 'Schedule and publish content across multiple platforms automatically',
      features: ['Multi-platform scheduling', 'Content optimization', 'Best time posting', 'Bulk uploads']
    },
    {
      id: 'engagement',
      title: 'Smart Engagement',
      icon: <MessageSquare className="w-6 h-6" />,
      description: 'AI-powered responses and community management',
      features: ['Auto-replies', 'Sentiment analysis', 'Comment moderation', 'DM management']
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Comprehensive insights and performance tracking',
      features: ['Real-time metrics', 'Competitor analysis', 'ROI tracking', 'Custom reports']
    }
  ];

  const stats = [
    { label: 'Posts Automated', value: '50K+', delay: '0ms' },
    { label: 'Engagement Rate', value: '85%', delay: '200ms' },
    { label: 'Time Saved', value: '40hrs', delay: '400ms' },
    { label: 'Platforms', value: '12+', delay: '600ms' }
  ];

  const platforms = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube', 'TikTok'];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-500/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full mb-8 animate-pulse">
            <Bot className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-400 text-sm font-medium">AI-Powered Automation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent animate-fade-in">
            Social Media
            <span className="block text-orange-400">Automation</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto opacity-0 animate-slide-up">
            Transform your social media presence with intelligent automation. Post, engage, and analyze - all on autopilot.
          </p>
          
        
        </div>

         <div className="px-6 py-16 bg-gradient-to-r from-orange-500/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center transform hover:scale-105 transition-all duration-300"
                style={{ 
                  animationDelay: stat.delay,
                  animation: animateStats ? 'slideUp 0.8s ease-out forwards' : 'none',
                  opacity: animateStats ? 1 : 0
                }}
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>

      {/* Stats Section */}
     

      {/* Services Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Social Media Solution</h2>
            <p className="text-gray-400 text-lg">Everything you need to dominate social media, powered by AI</p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === service.id
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {service.icon}
                <span className="ml-2 font-medium">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {services.filter(s => s.id === activeTab).map((service) => (
                <div key={service.id} className="animate-fade-in">
                  <h3 className="text-3xl font-bold text-orange-400 mb-4">{service.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center animate-slide-right" style={{animationDelay: `${index * 100}ms`}}>
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
                {activeTab === 'posting' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-orange-400 font-semibold">Schedule Queue</span>
                      <span className="text-gray-400 text-sm">Next: 2:30 PM</span>
                    </div>
                    {platforms.slice(0, 3).map((platform, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                        <span className="text-white">{platform}</span>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'engagement' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="text-orange-400 font-semibold mb-4">Live Engagement</div>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-gray-800 rounded-lg animate-slide-left">
                        <MessageSquare className="w-5 h-5 text-orange-400 mr-3" />
                        <span className="text-white">Auto-replied to 12 comments</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-800 rounded-lg animate-slide-left" style={{animationDelay: '100ms'}}>
                        <Users className="w-5 h-5 text-orange-400 mr-3" />
                        <span className="text-white">Engaged with 45 followers</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-800 rounded-lg animate-slide-left" style={{animationDelay: '200ms'}}>
                        <Target className="w-5 h-5 text-orange-400 mr-3" />
                        <span className="text-white">Sentiment: 92% Positive</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'analytics' && (
                  <div className="animate-fade-in">
                    <div className="text-orange-400 font-semibold mb-4">Performance Dashboard</div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center animate-slide-up">
                        <span className="text-gray-300">Reach</span>
                        <span className="text-orange-400 font-bold">+127%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-orange-400 h-2 rounded-full animate-width-expand" style={{width: '78%'}}></div>
                      </div>
                      <div className="flex justify-between items-center animate-slide-up" style={{animationDelay: '100ms'}}>
                        <span className="text-gray-300">Engagement</span>
                        <span className="text-orange-400 font-bold">+95%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-orange-400 h-2 rounded-full animate-width-expand" style={{width: '85%', animationDelay: '100ms'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Connect All Your Platforms</h2>
          <p className="text-gray-400 text-lg mb-12">Manage everything from one powerful dashboard</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div 
                key={index} 
                className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10 animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <Globe className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <span className="text-white font-medium">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Ready to Automate Your Success?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already saving time and boosting engagement with our AI automation.
          </p>
        
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideRight {
          from { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slideLeft {
          from { 
            opacity: 0; 
            transform: translateX(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes widthExpand {
          from { width: 0; }
          to { width: var(--target-width, 100%); }
        }
        
        .animate-fade-in { animation: fadeIn 0.6s ease-out; }
        .animate-slide-up { animation: slideUp 0.6s ease-out; }
        .animate-slide-right { animation: slideRight 0.6s ease-out; }
        .animate-slide-left { animation: slideLeft 0.6s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
        .animate-width-expand { animation: widthExpand 1.5s ease-out; }
      `}</style>
    </div>
  );
};

export default SocialMediaPage;