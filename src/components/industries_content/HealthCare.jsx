import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Activity, Brain, Microscope, Stethoscope, Pill, Users, Monitor, Shield, CheckCircle, ArrowRight, Play } from 'lucide-react';
import { Helmet } from "react-helmet-async";
const HealthcarePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sliderData = [
    {
      title: "Digital Healthcare",
      description: "At fatbcamel Technologies, we're transforming patient care through AI-powered applications. Our solutions monitor ICU and cancer patients, manage patient data, enable precision dosing, and automate image analysis, stock management, and report generation.",
      icon: Monitor,
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "Pharmaceuticals & Life Sciences",
      description: "We bring AI-powered solutions to the pharmaceutical industry, accelerating drug discovery and development, predicting sales based on patient insights, ensuring drug safety with pharmacovigilance, and optimizing clinical trials.",
      icon: Pill,
      gradient: "from-purple-600 to-pink-500"
    },
    {
      title: "Omics Research (Genomics, Proteomics, etc.)",
      description: "fatbcamel Technologies is discovering the power of genetic and protein information. We apply AI to drug design, personalized medicine development, and research into genetic and neurological disorders.",
      icon: Brain,
      gradient: "from-green-600 to-teal-500"
    },
    {
      title: "Biotechnology & Bioinformatics",
      description: "We develop AI tools that drive advancements in biological research and data analysis. These tools support drug discovery, enable diagnoses based on genetic and protein analysis, and facilitate bioinformatics research.",
      icon: Microscope,
      gradient: "from-orange-600 to-red-500"
    },
    {
      title: "ML-Based Medical Imaging",
      description: "We leverage AI to automate image analysis, enhance diagnostic accuracy, and personalize treatment planning. Our solutions support various imaging modalities and integrate seamlessly with existing healthcare systems.",
      icon: Activity,
      gradient: "from-indigo-600 to-purple-500"
    },
    {
      title: "Research & Development",
      description: "fatbcamel Technologies recognizes that AI-driven solutions are essential for modern healthcare research. We empower R&D efforts with tools for drug design and discovery, personalized medicine strategies, early diagnosis of disorders and research into genetic and neurological conditions.",
      icon: Users,
      gradient: "from-pink-600 to-rose-500"
    }
  ];

  const applications = [
    {
      title: "Precision Oncology",
      description: "A 360-degree digital healthcare solution for personalized treatment. Genomic platform for secondary and tertiary analysis. Streamlined testing from next-generation sequencing data.",
      icon: Stethoscope
    },
    {
      title: "MIIP: Microsatellite Identification",
      description: "Identifies microsatellite sites and conducts MSI analysis. Customizable for various research needs. Identifies novel microsatellites and instabilities.",
      icon: Microscope
    },
    {
      title: "EHR Integration & Chatbot",
      description: "Maximizes near real-time audio transcription for EHR integration. Develops an interactive chatbot on EHR data for doctor queries.",
      icon: Monitor
    },
    {
      title: "Digital Pathology",
      description: "End-to-end workflow integration with existing LIS systems. Capabilities using Azure OpenAI solutions and voice-based command control such as automated report generation.",
      icon: Brain
    },
    {
      title: "Oncology-Based Chatbot",
      description: "AI-powered drug information and decision support for pharmaceutical industries. Enables informed decisions about drugs production based on market trends and research reports.",
      icon: Pill
    }
  ];

  const platformFeatures = [
    "Canvas Application",
    "Ambulance Module", 
    "Patient-Facing Portal",
    "Online Consultations",
    "Automated Workflows",
    "Real-time Data Access",
    "Integration"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      
    <Helmet>
  <title>AI in Healthcare — Intelligent Automation | FatCamel AI</title>
  <meta name="description" content="Improve patient care, streamline hospital operations, and automate data workflows using FatCamel AI healthcare solutions." />
  <link rel="canonical" href="https://www.fatcamel.ai/HealthCare" />
</Helmet>

      
      {/* Navigation Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Industries</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-600 font-medium">Healthcare & Life Sciences</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Revolutionizing Healthcare
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-4xl mx-auto">
              with AI-Driven Solutions for Better Patient Outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Solutions
              </button>
              
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              At fatbcamel Technologies, we are transforming Health & Life Sciences with cutting-edge AI, cloud, and data-driven solutions. Our expertise in Azure OpenAI, automation, and voice-enabled workflows empowers healthcare professionals with seamless clinical insights, optimized diagnostics, and intelligent reporting. From digital pathology to advanced data accessibility, we drive efficiency, accuracy, and innovation in the healthcare ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* How We're Revolutionizing Healthcare Slider */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We're Revolutionizing Healthcare with AI?
            </h2>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div className="relative h-96 md:h-80">
                {sliderData.map((slide, index) => {
                  const IconComponent = slide.icon;
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ${
                        index === currentSlide
                          ? 'opacity-100 translate-x-0'
                          : index < currentSlide
                          ? 'opacity-0 -translate-x-full'
                          : 'opacity-0 translate-x-full'
                      }`}
                    >
                      <div className={`h-full bg-gradient-to-br ${slide.gradient} p-8 md:p-12 text-white flex items-center`}>
                        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                          <div className="flex-shrink-0">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <IconComponent className="w-12 h-12 md:w-16 md:h-16" />
                            </div>
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h3>
                            <p className="text-lg opacity-90 leading-relaxed">{slide.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
            
            {/* Slider Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {sliderData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Real-World Applications in Health & Life Sciences
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{app.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Spectrum Visual */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">AI Across the Spectrum of Healthcare</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold">Research & Discovery</h3>
                <p className="text-cyan-100">AI-driven drug discovery and genomic research</p>
              </div>
              <div className="space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold">Clinical Care</h3>
                <p className="text-purple-100">Automated diagnostics and patient monitoring</p>
              </div>
              <div className="space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold">Patient Safety</h3>
                <p className="text-green-100">Predictive analytics and risk assessment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features of our AI-Powered Hospital Management Platform
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border-2 border-transparent hover:border-blue-200 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories: Driving Outcomes Across HLS Sectors
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Malignant and Benign Image Classification
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Value Proposition</h4>
                    <p className="text-gray-600">
                      Traditional manual analysis of medical images is time-consuming and prone to errors, leading to potential delays or inaccuracies in diagnoses.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Solution</h4>
                    <p className="text-gray-600">
                      fatbcamel Technologies implemented an advanced image classification solution leveraging state-of-the-art machine learning algorithms.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Impact</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Improved Diagnostic Accuracy: Reduced false positives and negatives</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Expedited Diagnostic Process: Faster analysis allows quicker treatment decisions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Cost Savings: Minimized unnecessary treatments and follow-ups</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                  <Activity className="w-24 h-24 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     
    </div>
  );
};

export default HealthcarePage;