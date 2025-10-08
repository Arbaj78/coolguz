import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Wind, Sun, Battery, Shield, DollarSign, TrendingUp } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import SEO from "../SEO"
import { seo, SITE } from "./../../seo/seoData";
const RenewableEnergyPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const challenges = [
    {
      title: "Predicting Resource Availability",
      description: "Accurately forecasting the availability of renewable resources like sunlight, wind, and water flow is crucial for optimizing energy generation and grid stability. This involves complex weather modeling, sensor data analysis, and advanced forecasting techniques.",
      icon: <Sun className="w-16 h-16 text-green-500" />
    },
    {
      title: "Optimizing Asset Performance",
      description: "Maximizing the output and lifespan of renewable energy assets, such as solar panels, wind turbines, and hydropower systems, requires sophisticated monitoring, predictive maintenance, and performance optimization strategies.",
      icon: <Wind className="w-16 h-16 text-blue-500" />
    },
    {
      title: "Balancing Supply and Demand",
      description: "Matching the fluctuating supply of renewable energy with dynamic energy demand requires intelligent grid management, energy storage solutions, and demand-side management programs.",
      icon: <Battery className="w-16 h-16 text-yellow-500" />
    },
    {
      title: "Integrating with Existing Infrastructure",
      description: "Seamlessly integrating renewable energy sources into existing power grids requires careful planning, grid modernization efforts, and advanced control systems to ensure stability and reliability.",
      icon: <Zap className="w-16 h-16 text-purple-500" />
    },
    {
      title: "Managing Distributed Generation",
      description: "The rise of distributed renewable energy generation, such as rooftop solar panels, presents challenges for grid management, voltage regulation, and energy accounting.",
      icon: <TrendingUp className="w-16 h-16 text-red-500" />
    },
    {
      title: "Ensuring Cybersecurity",
      description: "Protecting renewable energy systems from cyberattacks and data breaches is crucial for maintaining operational continuity and preventing disruptions to energy supply.",
      icon: <Shield className="w-16 h-16 text-indigo-500" />
    },
    {
      title: "Financing and Investment",
      description: "Securing adequate financing and investment for renewable energy projects can be challenging, requiring innovative financing models and risk mitigation strategies.",
      icon: <DollarSign className="w-16 h-16 text-green-600" />
    }
  ];

  const solutions = [
    {
      title: "Advanced Time Series Modeling",
      description: "We leverage advanced time series models, including machine learning algorithms like Autoencoder LSTM, SARIMAX, Prophet, and tree-based regression, to capture complex patterns and provide highly accurate forecasts of renewable energy generation.",
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Weather Event Integration",
      description: "Our forecasting models incorporate real-time weather data and predictive weather modeling to account for the impact of weather events on renewable energy generation, improving forecast accuracy and reliability.",
      icon: <Sun className="w-12 h-12 text-yellow-500" />
    },
    {
      title: "Demand Forecasting",
      description: "We analyze historical consumption data, weather patterns, and customer behavior to predict energy demand accurately, enabling efficient energy production and distribution planning.",
      icon: <Battery className="w-12 h-12 text-green-500" />
    },
    {
      title: "Optimized Decision Support",
      description: "Our forecasting solutions provide insights into potential energy surpluses and deficits, enabling informed decision-making regarding energy trading, resource allocation, and grid balancing strategies.",
      icon: <Zap className="w-12 h-12 text-purple-500" />
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % challenges.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + challenges.length) % challenges.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
       
 <SEO {...seo['/Renuable_energy']} url={`${SITE.domain}/Renuable_energy`} />

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm">Industries</span>
              <span className="text-gray-300">/</span>
              <span className="text-green-600 font-medium">Renewable</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Renewable
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            AI-Driven Solutions Powering Renewable Energy for a Cleaner, Sustainable Future
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Sun className="w-12 h-12 mb-3 text-yellow-400" />
              <span className="text-sm">Solar Energy</span>
            </div>
            <div className="flex flex-col items-center">
              <Wind className="w-12 h-12 mb-3 text-blue-400" />
              <span className="text-sm">Wind Power</span>
            </div>
            <div className="flex flex-col items-center">
              <Battery className="w-12 h-12 mb-3 text-green-400" />
              <span className="text-sm">Energy Storage</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-12 h-12 mb-3 text-purple-400" />
              <span className="text-sm">Smart Grid</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            The urgency of climate change demands innovative solutions, and renewable energy sources are crucial to a sustainable future. 
            AI is revolutionizing this sector, optimizing clean energy generation, grid management, and resource allocation. 
            At fatbcamel Technologies, we're developing cutting-edge AI solutions to empower renewable energy providers, 
            accelerate the transition to clean energy, and build a more sustainable world.
          </p>
        </div>
      </section>

      {/* Key Challenges Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Key Challenges in Renewable Energy
          </h2>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center min-h-96">
                <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
                  {challenges[currentSlide].icon}
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {challenges[currentSlide].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {challenges[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
            
            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {challenges.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              How We're Powering the Future of Renewables with AI?
            </h2>
            <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
              Forecasting
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Success Stories: Realizing the Potential of Renewables
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-red-600 mb-4">Challenge</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A major Australian electricity provider faced difficulties in accurately forecasting energy generation and consumption 
                    due to the increasing integration of residential solar systems. This variability in renewable energy sources made 
                    predicting overall supply and demand dynamics crucial for effective energy management. Precise forecasts were essential 
                    to avoid imbalances, optimize resource allocation, and ensure cost-effective electricity services for customers.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">Solution</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Forecasting:</strong> We provided accurate energy forecasting and optimized decision-making for the client's renewable energy operations.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Maintenance:</strong> We implemented AI-powered predictive and preventive maintenance to maximize the performance of the client's assets.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>24x7 Renewables:</strong> We enabled reliable and cost-effective 24/7 renewable energy supply for the client's enterprise.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 text-center">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-800 mb-1">Increased Efficiency</h4>
                    <p className="text-sm text-green-700">Optimized energy systems for maximum efficiency</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-800 mb-1">Improved Reliability</h4>
                    <p className="text-sm text-blue-700">Enhanced reliability of renewable energy systems</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-4 text-center">
                    <DollarSign className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-yellow-800 mb-1">Reduced Costs</h4>
                    <p className="text-sm text-yellow-700">Minimized costs through optimized operations</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 text-center">
                    <Sun className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-purple-800 mb-1">Sustainability</h4>
                    <p className="text-sm text-purple-700">Contributing to a cleaner energy future</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      
    </div>
  );
};

export default RenewableEnergyPage;