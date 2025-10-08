import React from 'react';
import { ShoppingCart, TrendingUp, Users, Database, Zap, Target, BarChart3, Package, Eye, CheckCircle, ArrowRight, Globe, Shield, Cpu, Clock } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import SEO from "../SEO"
import { seo, SITE } from "./../../seo/seoData";


const RetailCPGPage = () => {
  return (
    <div className="min-h-screen bg-white">

        
 <SEO {...seo['/RetailConsumer']} url={`${SITE.domain}/RetailConsumer`} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            Industries / <span className="text-blue-600 font-medium">Retail & CPG</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Retail & CPG
              </h1>
              <h2 className="text-2xl mb-8 text-blue-200 font-light">
                Personalized Retail Experiences and Optimized Supply Chains Through AI Automation
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                The retail and CPG world is in constant flux. E-commerce, sustainability concerns, and global events disrupt supply chains and shift consumer expectations. We help you navigate change with AI solutions that personalize customer journeys, optimize supply chains, and drive data-driven growth.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-64 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-2xl transform rotate-3"></div>
                <div className="absolute -top-4 -left-4 w-96 h-64 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl border border-white border-opacity-20 flex items-center justify-center">
                  <ShoppingCart size={80} className="text-white opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Navigating Change in Retail & CPG:
            </h2>
            <p className="text-xl text-gray-600">The Biggest Challenges</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Changing Consumer Behavior</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• E-Commerce Growth</li>
                <li>• Sustainability Concerns</li>
                <li>• Shifting Preferences</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Package className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Supply Chain Disruptions</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Geopolitical Tensions</li>
                <li>• Unforeseen Events</li>
                <li>• Complexity and Costs</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Competitive Dynamics</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Intense Competition</li>
                <li>• E-commerce Disruption</li>
                <li>• Need for Innovation</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Database className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Data & Technology</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Data Explosion</li>
                <li>• Technology Adoption</li>
                <li>• Digital Transformation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              End-to-End Retail & CPG Solutions:
            </h2>
            <p className="text-xl text-gray-600">Addressing Key Challenges with AI</p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Plug-and-Play AI:
            </h3>
            <p className="text-xl text-center text-gray-600 mb-12">
              Optimize Your Retail & CPG Operations
            </p>
            <p className="text-center text-gray-600 max-w-3xl mx-auto">
              Effortlessly integrate AI-powered solutions to enhance customer experiences, streamline operations, and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Marketing */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Marketing</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Product Stories:</h4>
                  <p className="text-gray-600">Generate compelling product descriptions automatically.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Image Generation:</h4>
                  <p className="text-gray-600">Create high-quality product visuals effortlessly.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Campaign Optimization:</h4>
                  <p className="text-gray-600">Fine-tune campaigns with AI-driven insights for maximum impact.</p>
                </div>
              </div>
            </div>

            {/* Supply Chain */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Package className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Supply Chain</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Demand Forecasting:</h4>
                  <p className="text-gray-600">Accurately predict demand to optimize inventory.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">SKU Replenishment:</h4>
                  <p className="text-gray-600">Automate stock management for optimal levels.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Assortment Planning:</h4>
                  <p className="text-gray-600">Optimize product mix and placement for maximum sales.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Trade Promotion Optimization:</h4>
                  <p className="text-gray-600">Maximize the effectiveness of promotions.</p>
                </div>
              </div>
            </div>

            {/* Customer 360 */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Customer 360</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Personalization:</h4>
                  <p className="text-gray-600">Deliver tailored product recommendations and offers.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Contact Center Analytics:</h4>
                  <p className="text-gray-600">Gain insights from customer interactions to improve service.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">SVOC:</h4>
                  <p className="text-gray-600">Create a unified view of customer data for better understanding.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Divide Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bridging the Data Divide:
            </h2>
            <p className="text-xl text-gray-600">From Silos to a Unified Retail & CPG System</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div className="space-y-12">
              {/* The Challenge */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
                    <p className="text-gray-600">
                      Data silos hinder a complete view of your customers, operations, and market trends, limiting your ability to extract meaningful insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Vision */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-gray-600">
                      Reimagine the retail and CPG landscape by creating a more sustainable and innovative future for your enterprise.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {/* Our Approach */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Approach</h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• Establish a robust Data Ops Pipeline to Ingest, Transform, and Contextualize data</li>
                      <li>• Utilize a Best Fit Tech Stack with Databricks and Common Metadata Tooling</li>
                      <li>• Create a One Data Estate unified platform to overcome data silos</li>
                      <li>• Offer an AI Copilot for Orchestration, Prompt Engineering, and Multi-modal Generation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Use Cases & Capabilities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="text-orange-600" size={20} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">Use Cases</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Supply Chain Optimization</li>
                    <li>• ERP Integration</li>
                    <li>• Asset & Process Automation</li>
                    <li>• Quality Management</li>
                    <li>• Early Defects Detection</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <Cpu className="text-indigo-600" size={20} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">Capabilities</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Digital Collaboration</li>
                    <li>• Metaverse</li>
                    <li>• Digital Twin</li>
                    <li>• Low Code/Pro Dev</li>
                    <li>• Enterprise Analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Gain a 360-degree view of your customers',
                'Optimize your supply chain',
                'Personalize customer experiences',
                'Make data-driven decisions',
                'Accelerate innovation',
                'Deliver tangible results'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-300 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories:
            </h2>
            <p className="text-xl text-gray-600">Optimizing the Retail & CPG Industry with AI</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4">Challenge</h3>
                  <p className="text-gray-600">
                    A global beverage manufacturing company faced challenges with fragmented data sources across various regions. They sought to streamline data management and migrate to Azure framework to create a unified analytics platform and improve operational efficiency.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Solution</h3>
                  <p className="text-gray-600">
                    A solution leveraging Industry Data Models (IDM) on Azure Synapse Analytics was implemented. Azure Databricks was utilized for efficient data transformations with pre-built accelerators to map standard IDM models on Azure to their SAP systems.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-4">Outcome</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Improved access to data source for reporting and analysis</li>
                    <li>• Consolidation of multiple data sources</li>
                    <li>• Fully customizable platform for enterprise needs</li>
                    <li>• Simpler, customizable, and collaborative interfaces</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Globe size={64} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Global Beverage Company</h4>
                  <p className="text-lg">Unified Analytics Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      
    </div>
  );
};

export default RetailCPGPage;