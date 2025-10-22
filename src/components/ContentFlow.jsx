// src/components/ContentFlowPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Target,
  Globe,
  BarChart3,
  Sparkles,
  Users,
  Clock,
  TrendingUp,
  Image as ImageIcon,
  Share2,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import contentimg from "../assets/contentflow-hero.png";

export default function ContentFlowPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 7);
    }, 3000);

    // signal prerenderer after first paint + small delay so animations settle
    const t = setTimeout(
      () => window.dispatchEvent(new Event("prerender-ready")),
      120
    );
    return () => {
      clearInterval(interval);
      clearTimeout(t);
    };
  }, []);

  const workflowSteps = [
    {
      id: 1,
      title: "Dashboard & Setup",
      description:
        "User-friendly interface for topic selection and brand customization",
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Automated Research & SEO",
      description:
        "AI scans the web for trending content and generates 100+ targeted keywords using search data",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-cyan-500 to-teal-500",
    },
    {
      id: 3,
      title: "Content Creation",
      description:
        "AI crafts SEO-optimized blog posts with proper structure and custom AI-generated images",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-teal-500 to-green-500",
    },
    {
      id: 4,
      title: "Formatting & Optimization",
      description:
        "Convert to structured HTML with headings, spacing and generate summaries, SEO slugs automatically",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-yellow-500",
    },
    {
      id: 5,
      title: "Social Media Content Generation",
      description:
        "Create platform-optimized posts tailored for each social media algorithm (Twitter, LinkedIn, Instagram, etc.)",
      icon: <Share2 className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      title: "Infographics Creation",
      description:
        "AI generates engaging infographics optimized for each social platform based on the created content",
      icon: <ImageIcon className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 7,
      title: "Automated Publishing & Distribution",
      description:
        "Publish directly to website and distribute across all social channels with optimal timing",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-red-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO: no images */}
      <Helmet>
        <title>
          Content Flow — AI-Powered Content Management | FatCamel AI
        </title>
        <meta
          name="description"
          content="Streamline content creation, organization, and publishing with FatCamel AI's Content Flow automation tool."
        />
        <link rel="canonical" href="https://www.fatcamel.ai/content-flow" />
      </Helmet>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <img
              src={contentimg}
              alt="ContentFlow AI Platform"
              width={800}
              height={400}
              className="mx-auto rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>

          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              ContentFlow{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Fully automated blog and social media management platform. From
              research to publishing, our AI agents handle your entire content
              lifecycle while you focus on strategy.
            </p>
          </div>
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">The Problem</h2>
            <p className="text-gray-600 leading-relaxed">
              Marketing teams spend countless hours on repetitive content tasks
              — researching topics, identifying keywords, drafting content,
              sourcing visuals and distributing across channels. This manual
              process is time-consuming and inconsistent.
            </p>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
              <p className="text-red-700 font-medium">
                High-value strategic work gets sidelined for routine content
                tasks
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Solution</h2>
            <p className="text-gray-600 leading-relaxed">
              Complete automation of your content pipeline. From topic research
              and SEO optimization to publishing blog posts and distributing
              content across social media — all handled by specialized AI
              agents.
            </p>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
              <p className="text-green-700 font-medium">
                Faster publishing, broader reach, consistent presence, reduced
                costs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Automated Workflow
            </h2>
            <p className="text-xl text-gray-600">
              Watch how our AI agents transform your content strategy
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 transform -translate-x-1/2 rounded-full" />
            <div className="space-y-16">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "justify-start"
                      : "justify-start md:justify-end"
                  }`}
                >
                  <div
                    className={`hidden md:block absolute top-1/2 w-20 h-0.5 bg-gradient-to-r ${
                      step.color
                    } ${index % 2 === 0 ? "left-1/2 ml-2" : "right-1/2 mr-2"}`}
                  />
                  <div
                    className={`w-full md:w-80 transition-all duration-700 ${
                      activeStep === index
                        ? "scale-105 shadow-xl"
                        : "scale-100 shadow-lg hover:shadow-xl"
                    } ${index % 2 === 0 ? "md:ml-24" : "md:mr-24"}`}
                  >
                    <div className="bg-white rounded-2xl p-6 border border-gray-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}
                        >
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-500 font-medium">
                            Step {step.id}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>

                      <div className="mt-4 flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${
                              step.color
                            } transition-all duration-1000 ${
                              activeStep >= index ? "w-full" : "w-0"
                            }`}
                          />
                        </div>
                        {activeStep === index && (
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`hidden md:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                      activeStep >= index
                        ? `bg-gradient-to-r ${step.color} scale-125`
                        : "bg-gray-300 scale-100"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Key Benefits
          </h2>
          <p className="text-xl text-gray-600">
            Transform your content strategy with intelligent automation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "End-to-End Automation",
              description: "Complete workflow without human intervention",
              icon: <Zap className="w-8 h-8" />,
              color: "from-blue-500 to-cyan-500",
            },
            {
              title: "Data-Driven SEO",
              description: "100+ keywords ensure optimal search performance",
              icon: <BarChart3 className="w-8 h-8" />,
              color: "from-green-500 to-teal-500",
            },
            {
              title: "Platform-Optimized Content",
              description: "Tailored posts for each social media algorithm",
              icon: <Share2 className="w-8 h-8" />,
              color: "from-purple-500 to-pink-500",
            },
            {
              title: "Visual Content Creation",
              description: "AI-generated infographics for better engagement",
              icon: <ImageIcon className="w-8 h-8" />,
              color: "from-orange-500 to-red-500",
            },
            {
              title: "Operational Efficiency",
              description: "Significant time and cost savings",
              icon: <Clock className="w-8 h-8" />,
              color: "from-indigo-500 to-blue-500",
            },
            {
              title: "Multi-Platform Reach",
              description: "Automated distribution across all social channels",
              icon: <Globe className="w-8 h-8" />,
              color: "from-teal-500 to-green-500",
            },
          ].map((benefit, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white mb-6`}
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-orange-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center py-20 px-6">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Automate Your Content?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Stop wasting time on manual tasks. Let our AI agents handle your
            entire content lifecycle and start seeing results today.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              Schedule a Demo <Sparkles className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
