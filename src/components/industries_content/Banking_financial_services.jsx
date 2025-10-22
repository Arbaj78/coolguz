import React, { useState, useEffect } from 'react';
import { ChevronRight, TrendingUp, Shield, Cloud, Leaf, Lock, CreditCard, Smartphone, DollarSign, BarChart3, Users, FileCheck, Cog, ArrowUpRight, CheckCircle } from 'lucide-react';
import { Helmet } from "react-helmet-async";

const BFSIPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const expertise = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI/ML Innovation",
      description: "Advanced AI/ML algorithms and LLM integration with predictive models, GenAI bots, multi-lingual NLP, sentiment analysis, and hyper-personalization."
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Low-Code/No-Code",
      description: "Quick custom application development using Microsoft Power Apps and Power Automate, streamlining enterprise solutions with minimal coding."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Data Modernization",
      description: "Migrate from legacy systems to cloud infrastructure ensuring scalability, reduced costs, and enhanced data availability through microservices."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "AI-powered solutions for tracking and reducing carbon footprints, enabling alignment with sustainability goals through effective ESG frameworks."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Grade Security",
      description: "Real-time insights through unified data lakes, governance frameworks, data lineage tracking, and privacy-preserving analytics."
    }
  ];

  const retailSolutions = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Personal Loan Processing",
      description: "Automated platform with advanced credit scoring, boosting approvals by 30% and reducing turnaround time by 60%.",
      metrics: ["30% Higher Approvals", "60% Faster Processing"]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Credit Card Fraud Detection",
      description: "AI-powered real-time transaction monitoring system detecting unusual spending and automatically alerting stakeholders.",
      metrics: ["Real-time Detection", "Auto Alerts"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital Banking Platforms",
      description: "24/7 banking access via mobile apps and online portals for account management, payments, and fund transfers.",
      metrics: ["24/7 Access", "Multi-platform"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "ATM Cash Management",
      description: "Intelligent cash replenishment and management system ensuring ATMs are always adequately stocked.",
      metrics: ["Smart Forecasting", "Optimized Inventory"]
    }
  ];

  const keyOfferings = [
    { title: "Customer Engagement", description: "Enhanced customer experiences through personalized interactions" },
    { title: "Knowledge-based Resolution", description: "AI-powered support systems for faster issue resolution" },
    { title: "Process Automation", description: "Streamlined operations with intelligent automation" },
    { title: "Migration", description: "Seamless transition to modern platforms and architectures" },
    { title: "ESG Reporting", description: "Comprehensive sustainability and governance reporting" },
    { title: "Data Governance & Remediation", description: "Robust data management and quality assurance" }
  ];

  const successStories = [
    {
      title: "UAE Bank Sustainability Transformation",
      description: "Streamlined sustainability data management using Microsoft Sustainability Manager, enabling accurate carbon emissions calculations and regulatory compliance.",
      results: ["Improved Data Security", "Regulatory Compliance", "Automated Reporting"]
    },
    {
      title: "Global FSI Hadoop to Azure Migration",
      description: "Migrated Hadoop workloads to Azure Cloud addressing scalability constraints with Azure Data Factory and Databricks.",
      results: ["30% Cost Savings", "25TB Monthly Processing", "10x Performance Improvement"]
    },
    {
      title: "Anti-Money Laundering Enhancement",
      description: "Enhanced data governance for AML efforts with customer churn and credit card propensity models.",
      results: ["Improved Data Quality", "Reduced Compliance Risks", "Strategic Insights"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
  <title>AI in Banking & Financial Services — FatCamel AI</title>
  <meta name="description" content="Discover how FatCamel AI transforms banking and finance with secure, automated workflows for better efficiency." />
  <link rel="canonical" href="https://www.fatcamel.ai/BFS" />
</Helmet>

     
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Industries</span>
              <ChevronRight className="w-4 h-4" />
              <span className="font-semibold text-blue-600">BFSI</span>
            </div>
          
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              BFSI Solutions
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
              Revolutionizing BFSI
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With AI, Security, and Sustainable Financial Solutions
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The BFSI sector is embracing AI-driven hyper-personalization, cloud computing, and advanced analytics to meet evolving customer expectations and regulatory standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             
            </div>
          </div>
        </div>
      </section>

      {/* Key Drivers Section */}
      <section className="py-20 bg-white/50" id="drivers" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Future of BFSI Industry: Powered by Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging advanced fintech and domain expertise to improve operational efficiency, lower costs, and manage risks while reducing carbon footprint.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-200 group ${
                  isVisible.drivers ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Banking Solutions */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50" id="retail" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Transformation Delivered</h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Retail Banking</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {retailSolutions.map((solution, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group ${
                  isVisible.retail ? 'translate-x-0 opacity-100' : index % 2 === 0 ? 'translate-x-8 opacity-0' : '-translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h4>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {solution.metrics.map((metric, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-20 bg-white" id="offerings" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Key Offerings</h2>
            <p className="text-xl text-gray-600">
              Address critical BFSI challenges with innovative solutions for banking, capital markets, and insurance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyOfferings.map((offering, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer ${
                  isVisible.offerings ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {offering.title}
                  </h4>
                  <ArrowUpRight className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-gray-600 text-sm">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" id="success" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
          </div>

          <div className="space-y-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  isVisible.success ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">{story.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{story.description}</p>
                  </div>
                  <div className="space-y-3">
                    {story.results.map((result, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

     
    </div>
  );
};

export default BFSIPage;