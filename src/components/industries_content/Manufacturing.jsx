import React, { useState, useEffect } from 'react';
import { 
  Factory, 
  Eye, 
  Network, 
  Activity, 
  Server, 
  Cog, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Settings,
  Globe,
  Target
} from 'lucide-react';
import { Helmet } from "react-helmet-async";

const ManufacturingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Factory,
      title: "Connected Factory Framework",
      description: "Integrate IoT devices and smart sensors across your manufacturing floor for seamless connectivity and data flow."
    },
    {
      icon: Eye,
      title: "Transparent Visibility",
      description: "Gain complete visibility into your operations with real-time monitoring and comprehensive analytics dashboards."
    },
    {
      icon: Network,
      title: "Connected Ecosystem",
      description: "Build an interconnected manufacturing ecosystem that enables seamless communication between all systems."
    },
    {
      icon: Activity,
      title: "Real-Time Insights",
      description: "Make data-driven decisions with instant access to critical manufacturing metrics and performance indicators."
    },
    {
      icon: Server,
      title: "Scalable Infrastructure",
      description: "Future-proof your operations with cloud-based solutions that scale with your business needs."
    }
  ];

  const benefits = [
    { metric: "15-25%", label: "Production Efficiency Increase" },
    { metric: "10-25%", label: "Quality Improvement" },
    { metric: "15-30%", label: "Response Time Improvement" }
  ];

  const offerings = [
    {
      icon: Cog,
      title: "Shop Floor Intelligence",
      subtitle: "Enhancing Shop Floor Operations with AI Insights",
      description: "A comprehensive solution providing a 360-degree view of the shop floor, empowering operators with AI-powered industrial analytics.",
      features: [
        "AI-powered dashboards for optimized resource allocation",
        "Real-time defect detection and quality control",
        "Predictive maintenance capabilities"
      ]
    },
    {
      icon: TrendingUp,
      title: "Supply Chain Visibility",
      subtitle: "End-to-End Supply Chain Optimization",
      description: "Transform your supply chain with real-time visibility, predictive analytics, and intelligent automation.",
      features: [
        "Real-time tracking and monitoring",
        "Predictive demand forecasting",
        "Automated inventory management"
      ]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      subtitle: "AI-Powered Quality Control Systems",
      description: "Implement advanced quality control measures with machine learning and computer vision technologies.",
      features: [
        "Automated defect detection",
        "Quality trend analysis",
        "Compliance monitoring"
      ]
    }
  ];

  const objectives = [
    {
      icon: Target,
      title: "Enhance Innovation and Product Diversification",
      points: [
        "Leverage digital twins and simulations for rapid prototyping",
        "Implement comprehensive Product Lifecycle Management (PLM)",
        "Integrate smart products using IoT for enhanced functionality"
      ]
    },
    {
      icon: Settings,
      title: "Operate Safe and Agile Factories",
      points: [
        "Equip workforce with mobile-enabled tools and AR applications",
        "Monitor and optimize production through real-time data visualization",
        "Elevate maintenance with predictive analytics and automated inspection"
      ]
    },
    {
      icon: Users,
      title: "Deliver Enhanced Customer Experiences",
      points: [
        "Connect customers with field services and remote diagnostics",
        "Engage customers through personalized digital experiences",
        "Improve satisfaction with real-time order tracking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">

    <Helmet>
  <title>AI in Manufacturing — Smart Automation | FatCamel AI</title>
  <meta name="description" content="Increase productivity and reduce costs with FatCamel AI's manufacturing automation and predictive analytics solutions." />
  <link rel="canonical" href="https://www.fatcamel.ai/Manufacturing" />
</Helmet>

      
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-2 text-blue-400 mb-4">
          <span>Industries</span>
          <span>/</span>
          <span>Manufacturing</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`container mx-auto px-6 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Manufacturing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            Building the Future of Manufacturing with AI, IoT, and Analytics
          </p>
          <div className="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
            <Factory className="w-24 h-24 mx-auto mb-4 text-blue-400" />
          </div>
        </div>
      </div>

      {/* Challenge Statement */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
          <p className="text-lg leading-relaxed text-gray-300 max-w-4xl mx-auto">
            Manufacturers face significant challenges: volatile supply chains, evolving consumer demands, 
            stringent regulations, and a shortage of skilled labor. Adopting digital manufacturing solutions 
            in the cloud is essential for scaling operations, achieving real-time supply chain visibility, 
            enhancing collaboration, optimizing costs, and ensuring security.
          </p>
          <div className="mt-8 text-center">
            <p className="text-xl text-blue-400 font-semibold">
              fatcamel Technologies empowers manufacturers to overcome these challenges by integrating IoT, AI, 
              Machine Learning, and data security into a comprehensive suite of solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Industry 5.0 Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Transforming Manufacturing with Industry 5.0
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At fatcamel Technologies, we believe in the power of Industry 5.0 to revolutionize manufacturing. 
            Our solutions enable you to build smart factories & AI-driven innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 cursor-pointer ${
                activeFeature === index ? 'ring-2 ring-blue-500/50' : ''
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4 w-fit mb-4">
                <feature.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Offerings */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Portfolio Offerings: Enhance Manufacturing with{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            fatcamel Technologies delivers shop floor intelligence, supply chain visibility, predictive maintenance, 
            and advanced defect detection to boost productivity, quality, and efficiency across your organization.
          </p>
        </div>

        <div className="space-y-16">
          {offerings.map((offering, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-3">
                      <offering.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{offering.title}</h3>
                      <p className="text-blue-400 font-medium">{offering.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">{offering.description}</p>
                  <div className="space-y-3">
                    {offering.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-12 backdrop-blur-sm border border-blue-500/20">
                  <BarChart3 className="w-32 h-32 mx-auto text-blue-400 mb-6" />
                  <div className="grid grid-cols-3 gap-6">
                    {benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-2">{benefit.metric}</div>
                        <div className="text-sm text-gray-300">{benefit.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modernize Operations Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Modernize Your{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Manufacturing Operations
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            fatcamel Technologies helps you achieve your most critical objectives
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 w-fit mb-6">
                <objective.icon className="w-10 h-10 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{objective.title}</h3>
              <div className="space-y-4">
                {objective.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      

      {/* Footer Decoration */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-center">
          <Globe className="w-24 h-24 text-blue-400/30" />
        </div>
      </div>
    </div>
  );
};

export default ManufacturingPage;