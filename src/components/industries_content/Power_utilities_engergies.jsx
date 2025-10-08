import React, { useState } from 'react';
import { ChevronRight, Zap, Shield, Settings, Users, Lock, FileCheck, BookOpen, Play, Download } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import SEO from "../SEO"
import { seo, SITE } from "./../../seo/seoData";
const PowerUtilitiesPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const challenges = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Integrating Renewable Energy Sources",
      points: [
        "Balancing intermittent renewable generation with fluctuating demand.",
        "Ensuring grid stability and reliability with increasing renewable penetration."
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-green-500" />,
      title: "Modernizing Aging Infrastructure", 
      points: [
        "Upgrading outdated grid infrastructure to accommodate new technologies and growing demand.",
        "Improving the resilience of power systems to extreme weather events and cyberattacks."
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      title: "Optimizing Operational Efficiency",
      points: [
        "Enhancing asset management, predictive maintenance, and resource allocation.",
        "Reducing costs and improving productivity across the energy value chain."
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Meeting Evolving Customer Expectations",
      points: [
        "Providing personalized energy solutions and flexible pricing options.",
        "Empowering customers with greater control over their energy consumption."
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Ensuring Cybersecurity",
      points: [
        "Protecting critical energy infrastructure from cyber threats and data breaches.",
        "Maintaining the integrity and reliability of energy systems in a digital world."
      ]
    },
    {
      icon: <FileCheck className="w-8 h-8 text-indigo-500" />,
      title: "Managing Regulatory Compliance",
      points: [
        "Navigating complex and evolving regulatory frameworks.",
        "Meeting environmental standards and sustainability goals."
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-teal-500" />,
      title: "Developing a Skilled Workforce",
      points: [
        "Attracting and retaining talent with expertise in new technologies and digital skills.",
        "Preparing the workforce for the changing demands of the energy industry."
      ]
    }
  ];

  const frameworkFeatures = [
    {
      icon: <Settings className="w-6 h-6 text-blue-500" />,
      text: "Provides a structured way to make decisions in power and utilities operations."
    },
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      text: "Uses a layered design (Abstraction, Environment, Optimizer) to model different parts of the energy system and use resources well."
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      text: "Uses various optimization techniques like MILP, Reinforcement Learning, MPC, and Offline RL to solve complex energy management problems."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      text: "Allows for efficient decision-making based on real-time data, forecasts, and operational limits."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      



 <SEO {...seo['/PUE']} url={`${SITE.domain}/PUE`} />

      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Industries</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-600">Power, Utilities, & Energies</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Power, Utilities, & Energies
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                AI-Driven Solutions for Smarter Energy Management, Forecasting, and Grid Optimization
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md h-64 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-2xl">
                <Zap className="w-24 h-24 text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-700">
              The power and utilities sector are undergoing a significant transformation, driven by the need for cleaner, more reliable, and efficient energy solutions. As the world transitions towards renewable energy sources and adopts smart grid technologies, industry faces new challenges and opportunities. AI is playing a crucial role in this evolution, enabling energy providers to optimize grid operations, enhance forecasting accuracy, and improve customer experiences. fatcamel Technologies is committed to empowering the power and utilities sector with innovative AI solutions that address these needs. We help energy providers navigate the complexities of the digital energy transition and achieve a more sustainable and efficient energy future.
            </p>
          </div>
        </div>
      </div>

      {/* Key Challenges Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
            Key Challenges in Power & Utilities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-gray-50 rounded-full">
                    {challenge.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {challenge.title}
                  </h3>
                  <div className="space-y-2">
                    {challenge.points.map((point, pointIndex) => (
                      <p key={pointIndex} className="text-sm text-gray-600 leading-relaxed">
                        • {point}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Analytics Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Advanced Analytics and Optimization for Power & Utilities
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              At fatcamel Technologies, we know the power and utilities sector is complex. Our advanced analytics and optimization solutions help you make informed choices, improve energy operations, and adapt to the changing energy world.
            </p>
          </div>

          {/* Decision Management Framework */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              Decision Management Framework
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {frameworkFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
                  <div className="p-2 bg-gray-50 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CT Vision Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                CT Vision AI-Powered Visual Inspection for Power & Utilities
              </h2>
              <p className="text-lg text-gray-700">
                Advanced AI-powered visual inspection solutions designed specifically for the power and utilities sector, enabling automated monitoring, predictive maintenance, and enhanced operational safety.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Learn More</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <Shield className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold">CT Vision</p>
                  <p className="text-sm opacity-90">AI-Powered Inspection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
            Success Stories: Power & Utilities, Transformed with AI
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-red-600">Challenge</h3>
                <p className="text-gray-700">
                  Our client, a major Australian utility company, faced increasing difficulty in accurately forecasting net operational power due to the growing integration of residential solar systems. This variability in renewable energy sources made it crucial to analyze both gross generation and consumption data to ensure grid stability and reliable energy supply. Traditional forecasting methods struggled to adapt to these dynamic conditions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-blue-600">Solution</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Leveraging gross generation and consumption data to train advanced ML models for accurate operational power forecasting.</li>
                  <li>• Utilizing Databricks and Azure ML for model development, experimentation, and deployment.</li>
                  <li>• Deploying the solution on Azure Kubernetes Services (AKS) for scalability and reliability, with integrated DevOps pipelines for continuous monitoring and improvement.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-green-600">Outcome</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Effectively manage electricity supply and demand, ensuring grid stability despite fluctuating renewable energy generation.</li>
                  <li>• Gain greater flexibility in adjusting forecast granularity and lookahead based on operational needs.</li>
                  <li>• Benefit from on-demand retraining and remodeling to adapt to changing market dynamics and data patterns.</li>
                  <li>• Scale the solution to incorporate demand forecasting and price forecasting in the future.</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full max-w-md h-80 bg-gradient-to-br from-green-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <Zap className="w-20 h-20 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold">Success Story</p>
                  <p className="text-sm opacity-90">Australian Utility Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      
    </div>
  );
};

export default PowerUtilitiesPage;