import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Users, 
  Clock, 
  Target, 
  TrendingUp,
  FileText,
  Phone,
  Database,
  BarChart3,
  Mail,
  Award,
  Zap,
  Shield,
  DollarSign
} from 'lucide-react';
import { Helmet } from "react-helmet-async";

const HRVoiceAIPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 7);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const problems = [
    "Hours wasted on resume screening",
    "Delayed or inconsistent candidate evaluations", 
    "Missed follow-ups and poor candidate experience",
    "High recruitment costs and inefficiencies"
  ];

  const solutions = [
    "Screens resumes automatically against job descriptions",
    "Conducts AI voice interviews with candidates",
    "Captures and saves detailed notes in Google Sheets",
    "Provides instant evaluation reports with recommendations",
    "Sends automated interview invites or rejections",
    "Ensures a consistent, bias-free, and faster hiring process"
  ];

  const workflowSteps = [
    { 
      title: "Resume & Job Description Matching", 
      description: "AI scans resumes against job descriptions to filter strong vs weak fits.",
      icon: <FileText className="w-6 h-6" />
    },
    { 
      title: "Candidate Filtering", 
      description: "Automatically identifies good fit, partial fit, or poor fit candidates.",
      icon: <Target className="w-6 h-6" />
    },
    { 
      title: "AI Voice Interview", 
      description: "Conducts structured phone interviews, asking qualifying questions and capturing responses.",
      icon: <Phone className="w-6 h-6" />
    },
    { 
      title: "Data Capture", 
      description: "Saves key candidate details (name, email, job, company, skills, gaps, strengths) in Google Sheets.",
      icon: <Database className="w-6 h-6" />
    },
    { 
      title: "Detailed Evaluation Report", 
      description: "Generates interview transcription, call summary, and AI recommendations.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    { 
      title: "Automated Communication", 
      description: "Sends interview invitations (with Google Meet/Calendar link) or rejection emails instantly.",
      icon: <Mail className="w-6 h-6" />
    },
    { 
      title: "Final Summary & Recommendation", 
      description: "Provides a consolidated report with candidate evaluation, strengths, gaps, and hiring recommendation.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const benefits = [
    { title: "Faster Hiring", description: "Automates resume screening and interviews", icon: <Zap className="w-6 h-6" /> },
    { title: "Consistency & Fairness", description: "Removes bias with standardized evaluation", icon: <Shield className="w-6 h-6" /> },
    { title: "Time Savings", description: "Cuts down manual effort for HR teams", icon: <Clock className="w-6 h-6" /> },
    { title: "Better Candidate Experience", description: "Instant communication and follow-ups", icon: <Users className="w-6 h-6" /> },
    { title: "Data-Driven Reports", description: "Structured evaluations stored in Google Sheets", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Scalable Recruitment", description: "Handle hundreds of applications without extra staff", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Cost Reduction", description: "Replace expensive recruiters and save on screening hours", icon: <DollarSign className="w-6 h-6" /> },
    { title: "Smarter Decisions", description: "AI-backed recommendations to hire the best fit", icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">

        <Helmet>
        <title>HR Agent | FatCamel</title>
        <link rel="canonical" href="https://www.fatcamel.ai/hragent" />
        <meta
          name="description"
          content="Automate HR processes with FatCamel’s AI-powered HR Agent. Streamline recruitment, employee management, and communication efficiently."
        />
      </Helmet>
      {/* Hero Section */}
      <div className={`relative px-6 py-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-orange-600 bg-blue-100 rounded-full animate-pulse">
            HR Agent
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            HR Voice AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your end-to-end hiring assistant. From resume screening to AI-powered candidate interviews, 
            our HR AI agent streamlines recruitment while you focus on finding the best talent.
          </p>
         
        </div>
      </div>

      {/* Problem Section */}
      <div className="px-6 py-16 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">The Problem</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Hiring teams spend countless hours reviewing resumes, screening unqualified candidates, and coordinating interviews. 
            The process is slow, inconsistent, and often biased — leading to missed top talent and wasted resources.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className={`flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <XCircle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="px-6 py-16 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Solution</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            An AI-powered HR agent that automates candidate evaluation from resume to interview, 
            delivering structured reports and recommendations in real time.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className={`flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700">{solution}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Automated Workflow Section */}
      <div className="px-6 py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Automated Workflow</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Watch how our HR AI agent transforms recruitment:
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            {workflowSteps.map((step, index) => (
              <div 
                key={index} 
                className={`relative p-6 bg-white rounded-lg shadow-md transition-all duration-500 transform hover:scale-105 ${
                  currentStep === index ? 'ring-2 ring-blue-500 shadow-xl' : ''
                } ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg transition-colors duration-300 ${
                    currentStep === index ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                {currentStep === index && (
                  <div className="absolute inset-0 bg-blue-500 opacity-5 rounded-lg animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      </div>
    
  );
};

export default HRVoiceAIPage;