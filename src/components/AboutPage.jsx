import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Bot, Cog, Users, Lightbulb, Zap, UserCheck } from 'lucide-react';
import trip1 from '../assets/trip1.jpeg';
import trip2 from '../assets/trip2.jpeg';
import trip3 from '../assets/trip3.jpeg';

const AboutPage = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Slideshow state
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const slideIntervalRef = useRef(null);
  const slideWidth = 300;

  const slides = [
    {
      id: 1,
      img: trip1,
      title: "",
      desc: "Exploring new horizons"
    },
    {
      id: 2,
      img: trip2,
      title: "",
      desc: "Team building in nature"
    },
    {
      id: 3,
      img: trip3,
      title: "",
      desc: "Unforgettable experiences"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLearnAboutUs = () => {
    setShowDetails(true);
  };

  // Slideshow functions
  const startAutoSlide = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentPosition(prev => {
        const newPosition = prev - slideWidth;
        return newPosition < -slideWidth * (slides.length - 1) ? 0 : newPosition;
      });
    }, 3000);
  };

  const handleNext = () => {
    if (!isPaused) {
      clearInterval(slideIntervalRef.current);
    }
    setCurrentPosition(prev => {
      const newPosition = prev - slideWidth;
      return newPosition < -slideWidth * (slides.length - 1) ? 0 : newPosition;
    });
    if (!isPaused) {
      startAutoSlide();
    }
  };

  const handlePrev = () => {
    if (!isPaused) {
      clearInterval(slideIntervalRef.current);
    }
    setCurrentPosition(prev => {
      const newPosition = prev + slideWidth;
      return newPosition > 0 ? -slideWidth * (slides.length - 1) : newPosition;
    });
  };

  useEffect(() => {
    if (showDetails) {
      startAutoSlide();
      return () => clearInterval(slideIntervalRef.current);
    }
  }, [showDetails]);

  const stats = [
    { icon: <Calendar className="w-8 h-8 text-orange-500" />, value: "2024", label: "Founded" },
    { icon: <Bot className="w-8 h-8 text-orange-500" />, value: "50+", label: "AI Agents" },
    { icon: <Cog className="w-8 h-8 text-orange-500" />, value: "200+", label: "Automations" },
    { icon: <Users className="w-8 h-8 text-orange-500" />, value: "15+", label: "AI Employees" }
  ];

  const coreValues = [
    {
      icon: <Lightbulb className="w-12 h-12 text-orange-500" />,
      title: "Innovation First",
      description: "We push the boundaries of AI technology to create intelligent solutions that transform"
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-500" />,
      title: "Automation Excellence",
      description: "Our AI-driven automations eliminate repetitive tasks and amplify human potential."
    },
    {
      icon: <UserCheck className="w-12 h-12 text-orange-500" />,
      title: "Human-AI Collaboration",
      description: "We build AI employees that work seamlessly alongside human teams to achieve extraordinary"
    }
  ];

  const teamCulture = [
    "Remote-first with global talent",
    "Continuous learning and growth",
    "Innovation-driven mindset"
  ];

  if (!showDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className={`text-center max-w-4xl mx-auto relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Logo with 3D effect */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mb-6 transform transition-all duration-300 hover:scale-110 hover:rotate-3 shadow-2xl hover:shadow-orange-500/50 animate-bounce">
              <Bot className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Main Heading with text gradient */}
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6 animate-fade-in-up">
            Welcome to AI Innovations
          </h1>

          {/* Subtitle with staggered animation */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-300">
            Building the future with AI agents, automations, and digital employees
          </p>

          {/* CTA Button with 3D effect */}
          <button
            onClick={handleLearnAboutUs}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 animate-fade-in-up delay-500"
          >
            <Lightbulb className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Learn About Us
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }
          .delay-300 {
            animation-delay: 0.3s;
          }
          .delay-500 {
            animation-delay: 0.5s;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: About Our Vision */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 py-20 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-medium mb-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
            Founded in 2024
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 transform hover:scale-105 transition-transform duration-300">
            About <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Our Vision</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 transform hover:scale-105 transition-transform duration-300">
            We're revolutionizing the future of work by building intelligent AI agents, seamless automations, and digital employees that amplify human potential.
          </p>
          
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
            <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
            Discover Our Story
          </button>
        </div>
      </section>

      {/* Section 2: Stats with counter animation */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:rotate-1 group">
                <div className="flex justify-center mb-4 group-hover:animate-bounce">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Leadership with 3D cards */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-4">
            Meet Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16">
            Visionary leaders driving the future of AI-powered business solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[0, 1].map((index) => (
              <div key={index} className="text-center group">
                <div className="w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 transform transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-2xl hover:shadow-orange-500/50 perspective-1000">
                  <div className="w-full h-full flex items-center justify-center transform transition-transform duration-500 group-hover:rotateY-180">
                    <Users className="w-32 h-32 text-white opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium mb-4 transform hover:scale-105 transition-transform duration-300">
                  {index === 0 ? 'Founder & CEO' : 'Co-Founder & CTO'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Core Values with floating animation */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Team Culture with animated list */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Team Culture</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              We believe in fostering a collaborative environment where innovation thrives. Our team combines cutting-edge AI expertise with genuine human connection, creating solutions that truly make a difference.
            </p>
          </div>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            {teamCulture.map((item, index) => (
              <div key={index} className="flex items-center text-lg text-gray-300 transform hover:translate-x-4 transition-transform duration-300 group">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="group-hover:text-white transition-colors duration-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Interactive Team Slideshow */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
        {/* Background ambient effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 left-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
          
            <h2 className="text-5xl font-bold text-white mb-4">
              Building the Future <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Explore our journey through interactive moments of innovation, collaboration, and growth
            </p>
          </div>

          <div 
            className="w-full max-w-6xl mx-auto overflow-hidden relative rounded-xl shadow-2xl bg-gray-800"
            onMouseEnter={() => {
              clearInterval(slideIntervalRef.current);
              setIsPaused(true);
            }}
            onMouseLeave={() => {
              if (isPaused) {
                startAutoSlide();
                setIsPaused(false);
              }
            }}
          >
            <div 
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${currentPosition}px)`, width: `${slideWidth * slides.length * 2}px` }}
            >
              {[...slides, ...slides].map((slide, index) => (
                <div 
                  key={`${slide.id}-${index}`}
                  className="w-[300px] h-[250px] flex-shrink-0 relative overflow-hidden rounded-lg m-2 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <img 
                    src={slide.img} 
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-4 opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className="text-lg font-bold mb-1">{slide.title}</h3>
                    <p className="text-sm opacity-80">{slide.desc}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-orange-500 bg-opacity-20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button 
              onClick={handlePrev}
              className="bg-gradient-to-r from-gray-700 to-gray-800 text-white border-none py-3 px-6 mx-3 rounded-lg cursor-pointer font-semibold transition-all hover:from-gray-600 hover:to-gray-700 hover:scale-105 transform hover:shadow-lg"
            >
              ← Previous
            </button>
            <button 
              onClick={handleNext}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-none py-3 px-6 mx-3 rounded-lg cursor-pointer font-semibold transition-all hover:from-orange-600 hover:to-orange-700 hover:scale-105 transform hover:shadow-lg"
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      {/* Section 7: CTA with pulsing effect */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 transform hover:scale-105 transition-transform duration-300">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Join us in shaping the future of work with intelligent AI solutions that amplify human potential and drive unprecedented growth.
          </p>
          <button className="group inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-orange-500 font-semibold rounded-lg transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-2xl">
            <Lightbulb className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Start Your AI Journey
          </button>
        </div>
      </section>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;