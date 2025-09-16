import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // STEP 1: Link ko import karein
import { Phone, CheckCircle, XCircle, Calendar, MessageCircle, Clock, Users, TrendingUp, Star, ArrowRight, Zap, Shield, Headphones } from 'lucide-react';
import { Helmet } from "react-helmet-async";

const RealtorVoiceAI = () => {
  // ... (Aapka baki ka component code waisa hi rahega)
  const [isVisible, setIsVisible] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

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

    const elements = document.querySelectorAll('[id^="section-"]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 8);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const problems = [
    { icon: XCircle, text: "Missed leads from unanswered calls", color: "text-red-500" },
    { icon: XCircle, text: "Lost time in scheduling and rescheduling", color: "text-red-500" },
    { icon: XCircle, text: "Manual effort sharing property info and brochures", color: "text-red-500" },
    { icon: XCircle, text: "Unqualified inquiries wasting valuable time", color: "text-red-500" }
  ];

  const solutions = [
    { icon: CheckCircle, text: "Answers calls instantly and handles FAQs", color: "text-green-500" },
    { icon: CheckCircle, text: "Books and confirms appointments live on the call", color: "text-green-500" },
    { icon: CheckCircle, text: "Sends property links, brochures, and open house details automatically", color: "text-green-500" },
    { icon: CheckCircle, text: "Qualifies leads by asking key buying questions", color: "text-green-500" },
    { icon: CheckCircle, text: "Shares neighborhood insights instantly (schools, crime rates, amenities)", color: "text-green-500" }
  ];

  const workflowSteps = [
    { title: "AI Voice Receptionist", desc: "Greets callers, answers company and property FAQs, ensures no missed opportunities.", icon: Headphones },
    { title: "Live Appointment Booking", desc: "Books showings or meetings directly into your calendar, confirms via SMS/email.", icon: Calendar },
    { title: "Smart Callback Scheduling", desc: "If you're busy, the AI suggests 2 times and locks in the best option.", icon: Clock },
    { title: "Lead Qualification", desc: "Collects buyer needs (location, property type, budget, bedrooms, etc.) to filter serious leads.", icon: Users },
    { title: "Information Sharing", desc: "Instantly sends property links, brochures, or neighborhood details to caller's email or phone.", icon: MessageCircle },
    { title: "Open House Management", desc: "Handles RSVPs, sends directions/parking info, and logs visitor details.", icon: Star },
    { title: "Post-Call Engagement", desc: "Sends interactive property carousels via SMS/WhatsApp with photos, maps, and contact options.", icon: Phone },
    { title: "Emotional Tone Detection", desc: "Adapts tone to caller's urgency, fast-tracking high-priority requests.", icon: TrendingUp }
  ];

  const benefits = [
    { title: "24/7 Availability", desc: "Never miss a client call again", icon: Clock },
    { title: "Seamless Scheduling", desc: "Real-time appointment booking and confirmations", icon: Calendar },
    { title: "Instant Information Sharing", desc: "Brochures, property links, and local insights on demand", icon: Zap },
    { title: "Smarter Lead Qualification", desc: "Focus only on serious buyers and sellers", icon: Users },
    { title: "Open House Made Easy", desc: "RSVPs, directions, and follow-ups handled automatically", icon: Star },
    { title: "Human-Like Engagement", desc: "Detects caller tone and adjusts response accordingly", icon: MessageCircle },
    { title: "Cost Savings", desc: "Replace expensive call centers or virtual assistants", icon: TrendingUp },
    { title: "Scalable Growth", desc: "Handle unlimited calls without extra staffing", icon: Shield }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Realtor AI | FatCamel</title>
        <link rel="canonical" href="https://www.fatcamel.ai/realtor" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="animate-bounce mb-8">
              <Phone className="h-16 w-16 text-orange-600 mx-auto" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-orange-600 to-indigo-600 bg-clip-text text-transparent">
                Realtor Voice AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Your always-on AI assistant for real estate calls. From answering property questions to booking appointments, 
              our AI voice agents handle client conversations end-to-end — while you focus on closing deals.
            </p>
          </div>
        </div>
      </div>

      {/* ... (Problem, Solution, Workflow, Benefits sections ka code yahan aayega) ... */}
     {/* Problem Section */}
      <div id="section-problem" className={`py-20 bg-gradient-to-b from-red-50 to-white transition-all duration-1000 ${isVisible['section-problem'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">The Problem</h2>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
            Real estate agents miss countless opportunities because they're on showings, juggling calls, or buried in follow-ups. 
            Calls go to voicemail, meetings fall through, and hot leads slip away. Hiring human assistants is costly and still leaves gaps.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div 
                  key={index}
                  className={`flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-left`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Icon className={`h-8 w-8 ${problem.color} mr-4 flex-shrink-0`} />
                  <span className="text-gray-800 text-lg">{problem.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div id="section-solution" className={`py-20 bg-gradient-to-b from-green-50 to-white transition-all duration-1000 ${isVisible['section-solution'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Solution</h2>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
            An AI voice agent that works 24/7, handling conversations just like your in-house receptionist — but faster, smarter, and at a fraction of the cost.
          </p>
          <div className="grid md:grid-cols-1 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div 
                  key={index}
                  className={`flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-right`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Icon className={`h-8 w-8 ${solution.color} mr-4 flex-shrink-0`} />
                  <span className="text-gray-800 text-lg">{solution.text}</span>
                </div>
            	);
            })}
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div id="section-workflow" className={`py-20 bg-gradient-to-b from-blue-50 to-white transition-all duration-1000 ${isVisible['section-workflow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Automated Workflow</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Watch how our AI voice agent transforms your client engagement:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === index;
              return (
                <div 
                  key={index}
                  className={`relative p-6 bg-white rounded-xl shadow-lg transition-all duration-500 transform ${
                    isActive ? 'scale-105 shadow-2xl ring-4 ring-blue-200' : 'hover:shadow-xl hover:-translate-y-2'
                  }`}
                >
                  <div className={`absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    isActive ? 'bg-blue-600 animate-pulse' : 'bg-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <Icon className={`h-12 w-12 mb-4 transition-colors duration-300 ${
                    isActive ? 'text-blue-600' : 'text-gray-600'
                  }`} />
                  <h3 className={`font-bold text-lg mb-3 transition-colors duration-300 ${
                    isActive ? 'text-blue-800' : 'text-gray-800'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
            	);
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="section-benefits" className={`py-20 bg-gradient-to-b from-indigo-50 to-white transition-all duration-1000 ${isVisible['section-benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Key Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className={`p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
            	);
            })}
          </div>
        </div>
      </div>

      {/* <<< CTA SECTION ADDED HERE >>> */}
      <div className="bg-gradient-to-r from-orange-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Close More Deals. Automate Your Calls.
          </h2>
          <p className="text-lg text-orange-100 max-w-3xl mx-auto mb-10">
            Let your AI assistant handle calls, qualify leads, and book appointments 24/7. Free up your time to focus on what you do best—selling properties.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center w-full sm:w-auto bg-white text-orange-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
              Book a Free Demo
            </Link>
           
          </div>
        </div>
      </div>
      {/* <<< END OF CTA SECTION >>> */}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-up { animation: slide-up 1s ease-out 0.3s both; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out both; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out both; }
      `}</style>
    </div>
  );
};

export default RealtorVoiceAI;