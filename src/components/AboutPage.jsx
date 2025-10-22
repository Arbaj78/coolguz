// src/components/AboutPage.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Calendar,
  Bot,
  Cog,
  Users,
  Lightbulb,
  Zap,
  UserCheck,
} from "lucide-react";
import trip1 from "../assets/trip1.jpeg";
import trip2 from "../assets/trip2.jpeg";
import trip3 from "../assets/trip3.jpeg";
import ceo from "../assets/basantJi.jpg";
import cfo from "../assets/rahulKrishna.jpeg";
import usp from "../assets/usPartner.jpeg";
import { Helmet } from "react-helmet-async";
const AboutPage = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [currentPosition, setCurrentPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const slideIntervalRef = useRef(null);
  const slideWidth = 300;

  const slides = [
    { id: 1, img: trip1, title: "", desc: "Exploring new horizons" },
    { id: 2, img: trip2, title: "", desc: "Team building in nature" },
    { id: 3, img: trip3, title: "", desc: "Unforgettable experiences" },
  ];

  useEffect(() => {
    const t = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => window.dispatchEvent(new Event("prerender-ready")), 50);
    }, 80);
    return () => clearTimeout(t);
  }, []);

  const handleLearnAboutUs = () => setShowDetails(true);

  const startAutoSlide = () => {
    clearInterval(slideIntervalRef.current);
    slideIntervalRef.current = setInterval(() => {
      setCurrentPosition((prev) => {
        const newPosition = prev - slideWidth;
        return newPosition < -slideWidth * (slides.length - 1)
          ? 0
          : newPosition;
      });
    }, 3000);
  };

  const handleNext = () => {
    if (!isPaused) clearInterval(slideIntervalRef.current);
    setCurrentPosition((prev) => {
      const newPosition = prev - slideWidth;
      return newPosition < -slideWidth * (slides.length - 1) ? 0 : newPosition;
    });
    if (!isPaused) startAutoSlide();
  };

  const handlePrev = () => {
    if (!isPaused) clearInterval(slideIntervalRef.current);
    setCurrentPosition((prev) => {
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
    {
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      value: "2024",
      label: "Founded",
    },
    {
      icon: <Bot className="w-8 h-8 text-orange-500" />,
      value: "50+",
      label: "AI Agents",
    },
    {
      icon: <Cog className="w-8 h-8 text-orange-500" />,
      value: "200+",
      label: "Automations",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      value: "15+",
      label: "AI Employees",
    },
  ];

  const coreValues = [
    {
      icon: <Lightbulb className="w-12 h-12 text-orange-500" />,
      title: "Innovation First",
      description:
        "We push the boundaries of AI technology to create intelligent solutions that transform",
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-500" />,
      title: "Automation Excellence",
      description:
        "Our AI-driven automations eliminate repetitive tasks and amplify human potential.",
    },
    {
      icon: <UserCheck className="w-12 h-12 text-orange-500" />,
      title: "Human-AI Collaboration",
      description:
        "We build AI employees that work seamlessly alongside human teams to achieve extraordinary",
    },
  ];

  const teamCulture = [
    "Remote-first with global talent",
    "Continuous learning and growth",
    "Innovation-driven mindset",
  ];

  // Organization JSON-LD without logo/image

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About FatCamel AI — Building the Future of Automation</title>
        <meta
          name="description"
          content="Learn about FatCamel AI's mission, vision, and team dedicated to creating next-gen automation solutions."
        />
        <link rel="canonical" href="https://www.fatcamel.ai/about" />
      </Helmet>

      {/* sections unchanged visually */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
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
            About{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Our Vision
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 transform hover:scale-105 transition-transform duration-300">
            We're revolutionizing the future of work by building intelligent AI
            agents, seamless automations, and digital employees that amplify
            human potential.
          </p>

          <button
            onClick={handleLearnAboutUs}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50"
            aria-label="Discover our story"
          >
            Discover Our Story
            <ArrowRight className="ml-3 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-orange-200 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:rotate-1 group"
              >
                <div className="flex justify-center mb-4 group-hover:animate-bounce">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-40 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-16">
            Visionary leaders driving the future of AI-powered business
            solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 transform transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-2xl hover:shadow-orange-500/50 perspective-1000">
                <img
                  src={ceo}
                  alt="Basant Singh - Founder & CEO"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Basant Singh
              </h3>
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium mb-4 transform hover:scale-105 transition-transform duration-300">
                Founder & CEO
              </div>
              <p className="text-gray-300">
                Visionary leader with 8+ years of experience in AI and business
                strategy
              </p>
            </div>

            <div className="text-center group">
              <div className="w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-purple-600 transform transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-2xl hover:shadow-purple-500/50 perspective-1000">
                <img
                  src={cfo}
                  alt="Rahul Krishna - Co-Founder & CTO"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Rahul Krishna
              </h3>
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-medium mb-4 transform hover:scale-105 transition-transform duration-300">
                Co-Founder & CTO
              </div>
              <p className="text-gray-300">
                Technology expert specializing in AI infrastructure and scalable
                systems
              </p>
            </div>

            <div className="text-center group">
              <div className="w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 transform transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-2xl hover:shadow-blue-500/50 perspective-1000">
                <img
                  src={usp}
                  alt="William King - US Partner"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                William King
              </h3>
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium mb-4 transform hover:scale-105 transition-transform duration-300">
                US Partner
              </div>
              <p className="text-gray-300">
                Driving North American operations and strategic partnerships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team culture */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-8">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Team Culture
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              We believe in fostering a collaborative environment where
              innovation thrives. Our team combines cutting-edge AI expertise
              with genuine human connection.
            </p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {teamCulture.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-lg text-gray-300 transform hover:translate-x-4 transition-transform duration-300 group"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-40 left-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              Building the Future{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Explore our journey through interactive moments of innovation,
              collaboration, and growth
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
              style={{
                transform: `translateX(${currentPosition}px)`,
                width: `${slideWidth * slides.length * 2}px`,
              }}
            >
              {[...slides, ...slides].map((slide, index) => (
                <div
                  key={`${slide.id}-${index}`}
                  className="w-[300px] h-[250px] flex-shrink-0 relative overflow-hidden rounded-lg m-2 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <img
                    src={slide.img}
                    alt={slide.title || "Team photo"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    width="300"
                    height="250"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-4 opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className="text-lg font-bold mb-1">{slide.title}</h3>
                    <p className="text-sm opacity-80">{slide.desc}</p>
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

      {/* CTA */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to build with us?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Contact FatCamel AI for AI agents, automations and enterprise
            integrations.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
