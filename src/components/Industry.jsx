import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Share2, 
  MessageSquare, 
  Globe, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles
} from 'lucide-react';


const IndustryShowcase = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: 1,
      title: "Digital Marketing",
      subtitle: "Boost Your Online Presence",
      icon: <TrendingUp className="w-12 h-12 text-orange-500" />,
      description: "Transform your business with data-driven digital marketing strategies that deliver measurable results.",
      features: [
        "SEO Optimization",
        "Google Ads Management", 
        "Content Marketing",
        "Email Campaigns",
        "Performance Analytics"
      ],
      stats: "300% Average ROI Increase",
      color: "from-orange-50 to-orange-100"
    },
    {
      id: 2,
      title: "Social Media Management",
      subtitle: "Connect & Engage Your Audience",
      icon: <Share2 className="w-12 h-12 text-orange-500" />,
      description: "Build meaningful relationships with your customers through strategic social media presence and engagement.",
      features: [
        "Multi-Platform Management",
        "Content Creation", 
        "Community Building",
        "Influencer Partnerships",
        "Social Analytics"
      ],
      stats: "5M+ Social Impressions",
      color: "from-orange-50 to-orange-100"
    },
    
  ];

  const benefits = [
    { icon: <Target className="w-8 h-8 text-orange-500" />, text: "Targeted Growth Strategies" },
    { icon: <Users className="w-8 h-8 text-orange-500" />, text: "Enhanced Customer Engagement" },
    { icon: <BarChart3 className="w-8 h-8 text-orange-500" />, text: "Measurable Results" },
    { icon: <Globe className="w-8 h-8 text-orange-500" />, text: "Global Market Reach" }
  ];

  return (
    <div className="min-h-screen bg-white">

       
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Industry Leading Solutions
            </div>
            <h1 className="text-5xl md:text-5xl font-bold text-black mb-6">
              Transform Your Business with
              <span className="text-orange-500 block">AI Employees</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Fatcamel develops cutting-edge AI agents, automation solutions, and AI employees that revolutionize how businesses operate, grow, and scale in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our <span className="text-orange-500">Products</span>
            </h2>
            <p className="text-gray-600 text-lg">Solutions designed to accelerate your business success</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`
                  transform transition-all duration-700 ease-out
                  ${visibleCards.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                  ${hoveredCard === index ? 'scale-105 -translate-y-2' : ''}
                `}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`
                  relative overflow-hidden rounded-2xl bg-gradient-to-br ${product.color}
                  border border-orange-200 hover:border-orange-300
                  transition-all duration-300 h-full
                  hover:shadow-2xl hover:shadow-orange-500/10
                `}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-300 rounded-full transform -translate-x-12 translate-y-12"></div>
                  </div>

                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`
                      inline-flex items-center justify-center w-16 h-16 
                      bg-white rounded-xl mb-6 shadow-lg
                      transform transition-transform duration-300
                      ${hoveredCard === index ? 'rotate-12 scale-110' : ''}
                    `}>
                      {product.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-black mb-2">{product.title}</h3>
                    <p className="text-orange-600 font-medium mb-4">{product.subtitle}</p>
                    <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="bg-white rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-center">
                        <Star className="w-5 h-5 text-orange-500 mr-2" />
                        <span className="text-orange-600 font-bold">{product.stats}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className={`
                      w-full bg-black text-white py-3 px-6 rounded-lg 
                      font-semibold transition-all duration-300
                      hover:bg-orange-500 hover:shadow-lg
                      flex items-center justify-center group
                      ${hoveredCard === index ? 'bg-orange-500' : ''}
                    `}>
                      Learn More
                      <ArrowRight className={`
                        w-4 h-4 ml-2 transition-transform duration-300
                        ${hoveredCard === index ? 'translate-x-1' : ''}
                      `} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Why Choose <span className="text-orange-500">Our Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-4 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  {benefit.icon}
                </div>
                <p className="font-semibold text-gray-700">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full transform -translate-x-20 -translate-y-20 animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 translate-y-16 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 text-orange-100">
                Join thousands of businesses that have accelerated their growth with our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform">
                  Get Started Today
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default IndustryShowcase;