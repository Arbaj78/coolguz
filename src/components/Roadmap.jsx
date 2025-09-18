import { useEffect, useState, useRef } from 'react';

const BackgroundCircles = () => (
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl"></div>
    <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
  </div>
);

const Section = ({ children, id, crosses }) => (
  <section id={id} className={crosses ? "relative" : ""}>{children}</section>
);

const Roadmap = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [activeStep, setActiveStep] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const timelineStepsRef = useRef([]);
  const observersRef = useRef([]);

  const steps = [
    {
      id: 0,
      number: "STEP 1",
      title: "Audit & Strategy",
      description: "We analyze your ops, map out inefficiencies, and define a high-ROI automation strategy.",
      result: "You get a clear AI roadmap.",
      color: "amber-orange",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      position: "left"
    },
    {
      id: 1,
      number: "STEP 2",
      title: "Build & Deploy",
      description: "We build your first automation and deploy fast, so you can start seeing value in days, not months.",
      result: "Immediate time savings.",
      color: "amber-orange",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      ),
      position: "right"
    },
    {
      id: 2,
      number: "STEP 3",
      title: "Continuous Optimization",
      description: "Each week, we review, improve, and adapt your stack based on new opportunities and usage data.",
      result: "Stay future-proof.",
      color: "amber-orange",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      title: "Strategic Partnership",
      description: "You don't just get tech — you get an embedded AI strategist. We meet weekly to align, adapt, and scale.",
      result: "AI becomes part of how you think.",
      color: "amber-orange",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16,18 22,12 16,6"/>
          <polyline points="8,6 2,12 8,18"/>
        </svg>
      ),
      position: "right"
    }
  ];

  const colorClasses = {
    "amber-orange": "from-amber-500 to-orange-500"
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const setupIntersectionObservers = () => {
    const observerOptions = { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" };
    const newObservers = [];
    timelineStepsRef.current.forEach((step, index) => {
      if (!step) return;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) handleStepVisible(index);
        });
      }, observerOptions);
      observer.observe(step);
      newObservers.push(observer);
    });
    observersRef.current = newObservers;
  };

  const cleanupObservers = () => {
    observersRef.current.forEach(observer => observer?.disconnect());
  };

  const handleStepVisible = (stepIndex) => {
    setVisibleSteps(prev => !prev.includes(stepIndex) ? [...prev, stepIndex].sort((a, b) => a - b) : prev);
    setActiveStep(stepIndex);
  };

  const progressPercentage = (visibleSteps.length / steps.length) * 100;
  const showTimeline = windowWidth >= 800;

  return (
    <Section id="roadmap" crosses>
      <div className="bg-black text-gray-100 overflow-x-hidden relative min-h-screen">
        {isLoading && (
          <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <div className="relative w-16 h-16">
              <div className="absolute w-16 h-16 border-4 border-transparent rounded-full border-t-orange-500 animate-spin"></div>
              <div className="absolute w-16 h-16 border-4 border-transparent rounded-full border-t-amber-500 animate-spin" style={{ animationDirection: 'reverse' }}></div>
            </div>
          </div>
        )}

        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <BackgroundCircles />
        </div>

        <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} relative z-10`}>
          <section className="py-0 px-4 relative">
            <div className="max-w-5xl mx-auto relative z-10">
              <header className="text-center mb-12 pt-12">
                
                <h3 className="text-3xl font-bold text-white mb-4">How It Works</h3>
                <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Our signature process is designed to deliver maximum value, fast.
                </p>
              </header>

              <div className="relative">
                {showTimeline && (
                  <>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-amber-500 to-orange-500 rounded opacity-30"></div>
                    <div 
                      className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-500 to-orange-500 rounded z-10"
                      style={{ height: `${progressPercentage}%`, transition: 'height 1s ease-out' }}
                    ></div>
                  </>
                )}

                <div className="space-y-16 pb-12">
                  {steps.map((step, index) => (
                    <div key={step.id} className="relative">
                      <div 
                        ref={el => timelineStepsRef.current[step.id] = el}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                          step.position === 'right' ? 'md:grid-flow-col-dense' : ''
                        }`}
                      >
                        {/* Timeline dot */}
                        {showTimeline && (
                          <div className={`absolute left-1/2 transform -translate-x-1/2 top-6 w-5 h-5 rounded-full border-4 ${
                            visibleSteps.includes(step.id) ? 
                              `border-white shadow-lg scale-110 bg-gradient-to-r ${colorClasses[step.color]}` : 
                              'border-gray-600 bg-gray-700 scale-75'
                          } transition-all duration-700 z-20 hidden md:block`}>
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${colorClasses[step.color]} opacity-0 ${
                              visibleSteps.includes(step.id) ? 'opacity-20 animate-ping' : ''
                            }`}></div>
                          </div>
                        )}

                        {/* Step content */}
                        <div className={`${
                          step.position === 'right' ? 'md:col-start-2' : 'md:col-start-1'
                        } transition-all duration-700 ${
                          visibleSteps.includes(step.id) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 scale-95'
                        }`}>
                          <div className={`rounded-lg border border-gray-700/50 bg-black/70 shadow-sm transition-all duration-500 hover:border-gray-600/50 ${
                            activeStep === step.id ? 'bg-gray-900/90 border-orange-600/50 shadow-lg' : ''
                          }`}>
                            <div className="p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                  visibleSteps.includes(step.id) ? `shadow-lg bg-gradient-to-r ${colorClasses[step.color]}` : 'bg-gray-800'
                                }`}>
                                  <div className={`${visibleSteps.includes(step.id) ? 'text-white' : 'text-gray-400'}`}>
                                    {step.icon}
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-bold text-orange-400">{step.number}</span>
                                  </div>
                                  <h2 className={`text-lg font-bold text-white transition-colors duration-300 ${
                                    activeStep === step.id ? 'group-hover:text-orange-300' : ''
                                  }`}>
                                    {step.title}
                                  </h2>
                                </div>
                              </div>
                              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                                {step.description}
                              </p>
                              <div className="flex items-center gap-2 text-sm text-orange-300">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                                <span>{step.result}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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