// src/components/HRVoiceAIPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Users, Clock, Target, TrendingUp, FileText, Phone, Database, BarChart3, Mail, Award, Zap, Shield, DollarSign } from "lucide-react";


const HRVoiceAIPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => setCurrentStep((prev) => (prev + 1) % 7), 3000);
    const t = setTimeout(() => window.dispatchEvent(new Event("prerender-ready")), 120);
    return () => {
      clearInterval(interval);
      clearTimeout(t);
    };
  }, []);

  const problems = [
    "Hours wasted on resume screening",
    "Delayed or inconsistent candidate evaluations",
    "Missed follow-ups and poor candidate experience",
    "High recruitment costs and inefficiencies",
  ];

  const solutions = [
    "Screens resumes automatically against job descriptions",
    "Conducts AI voice interviews with candidates",
    "Captures and saves detailed notes in Google Sheets",
    "Provides instant evaluation reports with recommendations",
    "Sends automated interview invites or rejections",
  ];

  const workflowSteps = [
    { title: "Resume & Job Description Matching", description: "AI scans resumes against job descriptions to filter strong vs weak fits.", icon: <FileText className="w-6 h-6" /> },
    { title: "Candidate Filtering", description: "Automatically identifies good fit, partial fit, or poor fit candidates.", icon: <Target className="w-6 h-6" /> },
    { title: "AI Voice Interview", description: "Conducts structured phone interviews, asking qualifying questions and capturing responses.", icon: <Phone className="w-6 h-6" /> },
    { title: "Data Capture", description: "Saves key candidate details in Google Sheets.", icon: <Database className="w-6 h-6" /> },
    { title: "Detailed Evaluation Report", description: "Generates transcription, summary, and AI recommendations.", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Automated Communication", description: "Sends interview invites (with calendar link) or rejection emails instantly.", icon: <Mail className="w-6 h-6" /> },
    { title: "Final Summary & Recommendation", description: "Provides a consolidated report with candidate evaluation and hiring recommendation.", icon: <Award className="w-6 h-6" /> },
  ];

  const benefits = [
    { title: "Faster Hiring", description: "Automates resume screening and interviews", icon: <Zap className="w-6 h-6" /> },
    { title: "Consistency & Fairness", description: "Removes bias with standardized evaluation", icon: <Shield className="w-6 h-6" /> },
    { title: "Time Savings", description: "Cuts down manual effort for HR teams", icon: <Clock className="w-6 h-6" /> },
    { title: "Better Candidate Experience", description: "Instant communication and follow-ups", icon: <Users className="w-6 h-6" /> },
    { title: "Data-Driven Reports", description: "Structured evaluations stored in Google Sheets", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Scalable Recruitment", description: "Handle hundreds of applications without extra staff", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Cost Reduction", description: "Replace expensive recruiters and save on screening hours", icon: <DollarSign className="w-6 h-6" /> },
    { title: "Smarter Decisions", description: "AI-backed recommendations to hire the best fit", icon: <Target className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
    
      <div className={`relative px-6 py-20 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-orange-600 bg-blue-100 rounded-full animate-pulse">HR Agent</div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">HR Voice AI</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your end-to-end hiring assistant. From resume screening to AI-powered candidate interviews, our HR AI agent streamlines recruitment while you focus on finding the best talent.
          </p>
        </div>
      </div>

      <div className="px-6 py-16 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">The Problem</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">Hiring teams spend countless hours reviewing resumes, screening unqualified candidates, and coordinating interviews.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, idx) => (
              <div key={idx} className={`flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                <XCircle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-16 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Solution</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">An AI-powered HR agent that automates candidate evaluation from resume to interview, delivering structured reports and recommendations in real time.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Automated Workflow</h2>
          <p className="text-lg text-gray-600 text-center mb-12">Watch how our HR AI agent transforms recruitment:</p>
          <div className="grid lg:grid-cols-2 gap-8">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className={`relative p-6 bg-white rounded-lg shadow-md transition-all duration-500 transform hover:scale-105 ${currentStep === idx ? "ring-2 ring-blue-500 shadow-xl" : ""}`}>
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg ${currentStep === idx ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Step {idx + 1}: {step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                {currentStep === idx && <div className="absolute inset-0 bg-blue-500 opacity-5 rounded-lg animate-pulse" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Next Top Talent, Faster.</h2>
          <p className="text-lg text-orange-100 max-w-3xl mx-auto mb-10">Let our AI agent handle the repetitive tasks of screening, interviewing, and scheduling.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="group inline-flex items-center justify-center w-full sm:w-auto bg-white text-orange-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              <Zap className="w-5 h-5 mr-3" /> Book a Free Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRVoiceAIPage;
