import { useState, useEffect } from 'react';
import { Phone, Clock, Users, CheckCircle, XCircle, ArrowRight, Zap, Target, TrendingUp, Database } from 'lucide-react';

import outreach from "../assets/outreach.png"

import { Helmet } from "react-helmet-async";
export default function OutreachAILanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const problems = [
    "Leads falling through without response",
    "Missed meetings and last-minute cancellations",
    "Time wasted chasing no-shows",
    "Poor CRM data and lack of follow-up tracking"
  ];

  const solutions = [
    "Engages leads within seconds of reply",
    "Handles FAQs and pitches naturally",
    "Schedules meetings in real-time during the call",
    "Confirms attendance with pre-meeting calls",
    "Reschedules automatically if client is unavailable",
    "Updates CRM with every interaction"
  ];

  const workflowSteps = [
    { title: "Lead Capture", desc: "Leads enter from CRM (HubSpot, HighLevel, etc.) in batches.", icon: Database },
    { title: "Instant AI Engagement", desc: "AI initiates a call within 30 seconds of a reply — pitches service, answers FAQs, and attempts to book a meeting.", icon: Zap },
    { title: "Meeting Scheduling", desc: "AI books the meeting on the call, sends details to both parties, and logs into CRM.", icon: Clock },
    { title: "Follow-Up AI", desc: "Calls 30 minutes before the meeting to confirm client availability.", icon: Phone },
    { title: "No-Show Handling", desc: "AI detects no-shows, follows up with reschedule options, or marks as not interested.", icon: Target },
    { title: "CRM Sync", desc: "Every call, note, and meeting outcome is saved directly into your CRM.", icon: TrendingUp }
  ];

  const benefits = [
    "Instant Lead Engagement – Responds within 30 seconds to every inquiry",
    "Real-Time Scheduling – Books meetings on the spot",
    "Smarter Follow-Ups – Confirms before meetings, reducing cancellations",
    "No-Show Recovery – Auto-reschedules missed appointments",
    "CRM Integration – Syncs with HubSpot, HighLevel, and more",
    "Higher Conversions – Keeps leads warm and moving down the funnel",
    "Scalable Outreach – Handles unlimited leads simultaneously",
    "Cost-Effective Growth – Cuts reliance on SDRs and manual follow-ups"
  ];

  return (
    <div className="min-h-screen bg-white">

        <Helmet>
        <title>Outreach AI Service | FatCamel</title>
        <link rel="canonical" href="https://www.fatcamel.ai/outreach-ai" />
        <meta
          name="description"
          content="Boost your outreach with FatCamel’s AI-powered outreach solutions. Automate lead generation, emails, and client engagement effortlessly."
        />
      </Helmet>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
             <div className="text-center mb-12">
                        <img
                          src={outreach}
                          alt="ContentFlow AI Platform"
                          width={800}
                          height={400}
                          className="mx-auto rounded-2xl shadow-2xl"
                          priority
                        />
                      </div>
            
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-8 animate-pulse">
              <Phone className="w-4 h-4 mr-2" />
              AI-Powered Outreach Revolution
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-6 leading-tight">
              Outreach Voice AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Turn every lead into a live conversation. Our AI outreach agent pitches your service, 
              books meetings in real-time, and handles follow-ups automatically — so your pipeline never runs cold.
            </p>
          
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Problem</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Sales teams lose countless opportunities because leads go unanswered, meetings don't get confirmed, 
            and follow-ups slip through the cracks. Manual outreach is slow, expensive, and inconsistent — 
            resulting in wasted ad spend and lost deals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`flex items-center p-6 bg-red-50 rounded-2xl border border-red-100 transform transition-all duration-700 hover:scale-105 hover:shadow-lg ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <XCircle className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" />
              <span className="text-gray-800 font-medium">{problem}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Solution</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              An AI outreach agent that connects with leads instantly, pitches your service, 
              schedules meetings, and even reschedules no-shows — all while syncing to your CRM.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className={`flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                <span className="text-gray-800 font-medium">{solution}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Automated Workflow</h2>
          <p className="text-xl text-gray-600">See how our Outreach AI Agent keeps your pipeline alive:</p>
        </div>
        <div className="relative">
          {workflowSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = currentStep === index;
            return (
              <div 
                key={index}
                className={`flex items-start mb-12 transform transition-all duration-1000 ${isActive ? 'scale-105' : 'scale-100'}`}
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-6 transition-all duration-500 ${
                  isActive ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl' : 'bg-gray-100'
                }`}>
                  <IconComponent className={`w-8 h-8 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <div className={`flex-1 transition-all duration-500 ${isActive ? 'transform translate-x-2' : ''}`}>
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-semibold text-blue-600 mr-2">Step {index + 1}:</span>
                    <h3 className={`text-xl font-bold transition-colors duration-500 ${isActive ? 'text-blue-600' : 'text-gray-900'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-orange-700 via-purple-900 to-orange-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Benefits</h2>
            <p className="text-xl text-blue-100">Transform your sales process with AI-powered automation</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="text-white font-medium leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
}