import { useEffect, useState, useRef } from 'react';
import { BackgroundCircles } from './design/Header';
import Section from './Section';

const Roadmap = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [activeStep, setActiveStep] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const timelineStepsRef = useRef([]);
  const observersRef = useRef([]);

  const steps = [
    {
      id: 0,
      number: "STEP 1",
      duration: "1-2 Days",
      title: "Initial Consultation",
      description: "We understand your business needs and AI requirements through detailed discussions with stakeholders",
      details: [
        "Requirement gathering",
        "Stakeholder interviews",
        "Goal definition",
        "Budget planning"
      ],
      color: "purple-pink",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      position: "left"
    },
    {
      id: 1,
      number: "STEP 2",
      duration: "3-5 Days",
      title: "Research & Analysis",
      description: "Deep dive into your industry, competitors, and identify the best AI solutions for your use case",
      details: [
        "Market research",
        "Competitor analysis",
        "Technology assessment",
        "Feasibility study"
      ],
      color: "blue-cyan",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      ),
      position: "right"
    },
    {
      id: 2,
      number: "STEP 3",
      duration: "2-3 Days",
      title: "Strategy & Planning",
      description: "Create a comprehensive AI implementation roadmap tailored to your specific business goals",
      details: [
        "Solution architecture",
        "Timeline planning",
        "Resource allocation",
        "Risk assessment"
      ],
      color: "amber-orange",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
        </svg>
      ),
      position: "left"
    },
    {
      id: 3,
      number: "STEP 4",
      duration: "1-4 Weeks",
      title: "Development & Integration",
      description: "Build and integrate cutting-edge AI solutions using the latest technologies and frameworks",
      details: [
        "AI model development",
        "System integration",
        "API development",
        "Database setup"
      ],
      color: "green-emerald",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16,18 22,12 16,6"/>
          <polyline points="8,6 2,12 8,18"/>
        </svg>
      ),
      position: "right"
    },
    {
      id: 4,
      number: "STEP 5",
      duration: "3-7 Days",
      title: "Testing & Optimization",
      description: "Rigorous testing and fine-tuning to ensure optimal performance and accuracy",
      details: [
        "Performance testing",
        "Accuracy validation",
        "Load testing",
        "Security audit"
      ],
      color: "red-rose",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
          <polyline points="14,2 14,8 20,8"/>
          <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4 5.4-5.4z"/>
        </svg>
      ),
      position: "left"
    },
    {
      id: 5,
      number: "STEP 6",
      duration: "Ongoing",
      title: "Launch & Support",
      description: "Deploy your AI solution and provide ongoing support, maintenance, and improvements",
      details: [
        "Production deployment",
        "User training",
        "24/7 monitoring",
        "Continuous updates"
      ],
      color: "violet-purple",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
      ),
      position: "right"
    }
  ];

  // Color gradient classes mapping
  const colorClasses = {
    "purple-pink": "from-purple-600 to-pink-500",
    "blue-cyan": "from-blue-600 to-cyan-500",
    "amber-orange": "from-amber-500 to-orange-500",
    "green-emerald": "from-green-500 to-emerald-600",
    "red-rose": "from-red-500 to-rose-500",
    "violet-purple": "from-violet-600 to-purple-500"
  };

  // Initialize the application
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setupIntersectionObservers();
    }, 1000);

    return () => {
      clearTimeout(timer);
      cleanupObservers();
    };
  }, []);

  // Setup intersection observers for scroll animations
  const setupIntersectionObservers = () => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-100px 0px -100px 0px",
    };

    const newObservers = [];

    timelineStepsRef.current.forEach((step, index) => {
      if (!step) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleStepVisible(index);
          }
        });
      }, observerOptions);

      observer.observe(step);
      newObservers.push(observer);
    });

    observersRef.current = newObservers;
  };

  // Cleanup observers
  const cleanupObservers = () => {
    observersRef.current.forEach(observer => {
      if (observer) observer.disconnect();
    });
  };

  // Handle when a step becomes visible
  const handleStepVisible = (stepIndex) => {
    setVisibleSteps(prev => {
      if (!prev.includes(stepIndex)) {
        const newVisibleSteps = [...prev, stepIndex].sort((a, b) => a - b);
        return newVisibleSteps;
      }
      return prev;
    });

    setActiveStep(stepIndex);
  };

  const progressPercentage = (visibleSteps.length / steps.length) * 100;

  return (
    <Section id="roadmap" crosses>
    <div className="bg-n-8 text-gray-100 overflow-x-hidden relative">
      {isLoading && (
        <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
          <div className="relative w-16 h-16">
            <div className="absolute w-16 h-16 border-4 border-transparent rounded-full border-t-purple-600 animate-spin"></div>
            <div className="absolute w-16 h-16 border-4 border-transparent rounded-full border-t-cyan-500 animate-spin-reverse"></div>
          </div>
        </div>
      )}

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <BackgroundCircles />
      </div>

      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} relative z-10`}>
        <section className="py-0 px-4 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <header className="text-center mb-20">
              <div className="flex items-center justify-center gap-2 mb-4">
                <svg className="w-8 h-8 text-purple-400" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
                  <path d="M6 18a4 4 0 0 1-1.967-.516"/>
                  <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
                </svg>
                <span className="inline-flex items-center rounded-full border border-purple-600/30 bg-purple-600/10 px-2.5 py-0.5 text-xs font-medium text-purple-300">
                  AI-Powered Solutions
                </span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">Workflow</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                From concept to deployment, follow our proven process as you scroll through each step
              </p>
            </header>

            {/* Timeline */}
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-600 via-blue-600 to-cyan-500 rounded opacity-30"></div>
              
              {/* Animated Progress Line */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-cyan-500 rounded z-10"
                style={{ height: `${progressPercentage}%`, transition: 'height 1s ease-out' }}
              ></div>

              {/* Timeline Steps */}
              <div className="flex flex-col gap-24">
                {steps.map((step, index) => (
                  <div 
                    key={step.id}
                    ref={el => timelineStepsRef.current[index] = el}
                    className="relative flex items-center"
                  >
                    {/* Timeline Point */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 ${visibleSteps.includes(index) ? 
                      `border-white shadow-lg scale-110 bg-gradient-to-r ${colorClasses[step.color]}` : 
                      'border-gray-600 bg-gray-700 scale-75'} transition-all duration-700 z-20`}>
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${colorClasses[step.color]} opacity-0 ${visibleSteps.includes(index) ? 'opacity-20 animate-ping' : ''}`}></div>
                    </div>

                    {/* Step Content */}
                    <div className={`w-full max-w-xl transition-all duration-700 ${step.position === 'left' ? 'pr-16' : 'pl-16 ml-auto'} ${
                      visibleSteps.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 scale-95'
                    }`}>
                      <div className={`rounded-lg border border-gray-700/50 bg-gray-900/70 shadow-sm transition-all duration-500 hover:border-gray-600/50 ${
                        activeStep === index ? 'bg-gray-800/90 border-purple-600/50 shadow-xl scale-105 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-purple-600 before:to-cyan-500 before:rounded-t-lg' : ''
                      }`}>
                        <div className="p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              visibleSteps.includes(index) ? `shadow-lg bg-gradient-to-r ${colorClasses[step.color]}` : 'bg-gray-800'
                            }`}>
                              <div className={`${visibleSteps.includes(index) ? 'text-white' : 'text-gray-400'}`}>
                                {step.icon}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-sm font-bold text-purple-400">{step.number}</span>
                                <span className="inline-flex items-center rounded-full border border-gray-600 bg-gray-800/50 px-2 py-0.5 text-xs font-medium text-gray-300">
                                  {step.duration}
                                </span>
                              </div>
                              <h2 className={`text-2xl font-bold text-white transition-colors duration-300 ${activeStep === index ? 'group-hover:text-purple-300' : ''}`}>
                                {step.title}
                              </h2>
                            </div>
                          </div>
                          <p className="text-gray-400 mb-6 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {step.details.map((detail, i) => (
                              <div 
                                key={i}
                                className={`flex items-center gap-2 text-sm transition-all duration-500 ${
                                  visibleSteps.includes(index) ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                }`}
                                style={{ transitionDelay: `${index * 100 + i * 50}ms` }}
                              >
                                <svg className="w-4 h-4 text-green-400 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                  <polyline points="22,4 12,14.01 9,11.01"/>
                                </svg>
                                <span className="text-gray-300">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Connection Line */}
                    <div className={`absolute top-1/2 w-8 h-0.5 bg-gray-600/30 transition-all duration-700 ${
                      step.position === 'left' ? 'right-1/2 mr-3' : 'left-1/2 ml-3'
                    } ${visibleSteps.includes(index) ? 'opacity-100' : 'opacity-30'}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </Section>
  );
};

export default Roadmap;
