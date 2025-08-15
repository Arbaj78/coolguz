"use client"

import { useState, useEffect } from "react"
import { Zap, Target, Globe, BarChart3, Sparkles, Users, Clock, TrendingUp } from "lucide-react"
import contentimg from "../assets/contentflow-hero.png"

export default function ContentFlowPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 9)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const workflowSteps = [
    {
      id: 1,
      title: "Dashboard & Setup",
      description: "User-friendly interface for topic selection and brand customization",
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Automated Research",
      description: "AI agents scan web using Perplexity, Gemini, Tavily for trending content",
      icon: <Globe className="w-6 h-6" />,
      color: "from-cyan-500 to-teal-500",
    },
    {
      id: 3,
      title: "Keyword Strategy",
      description: "Generate 100+ targeted keywords using Google & YouTube search data",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-teal-500 to-green-500",
    },
    {
      id: 4,
      title: "Blog Content Generation",
      description: "AI crafts SEO-optimized, engaging blog posts with proper structure",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-green-500 to-lime-500",
    },
    {
      id: 5,
      title: "Image Strategy",
      description: "Custom AI-generated images strategically placed for engagement",
      icon: <Zap className="w-6 h-6" />,
      color: "from-lime-500 to-yellow-500",
    },
    {
      id: 6,
      title: "HTML Formatting",
      description: "Convert to structured HTML with headings, spacing, and visual appeal",
      icon: <Users className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 7,
      title: "Blog Elements",
      description: "Generate summaries, SEO slugs, and featured images automatically",
      icon: <Clock className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 8,
      title: "Automated Publishing",
      description: "Publish directly to company website without manual intervention",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
    },
    {
      id: 9,
      title: "Social Media Distribution",
      description: "Create platform-optimized posts and distribute across all channels",
      icon: <Globe className="w-6 h-6" />,
      color: "from-pink-500 to-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
              priority
            />
          </div>

          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
           
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              ContentFlow
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Fully automated blog and social media management platform. From research to publishing, our AI agents
              handle your entire content lifecycle while you focus on strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">The Problem</h2>
            <p className="text-gray-600 leading-relaxed">
              Marketing teams spend countless hours on repetitive content tasks - researching topics, identifying
              keywords, drafting content, sourcing visuals, and distributing across channels. This manual process is
              time-consuming, inconsistent, and leads to missed opportunities.
            </p>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
              <p className="text-red-700 font-medium">
                High-value strategic work gets sidelined for routine content tasks
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Solution</h2>
            <p className="text-gray-600 leading-relaxed">
              Complete automation of your content pipeline. From topic research and SEO optimization to publishing and
              social media distribution - all handled by specialized AI agents. Your team focuses on strategy while
              content runs seamlessly in the background.
            </p>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
              <p className="text-green-700 font-medium">
                Faster publishing, broader reach, consistent presence, reduced costs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Workflow Tree */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Automated Workflow</h2>
            <p className="text-xl text-gray-600">Watch how our AI agents transform your content strategy</p>
          </div>

          {/* Tree Structure */}
          <div className="relative">
            {/* Central Trunk */}
            <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 transform -translate-x-1/2 rounded-full" />

            {/* Workflow Steps */}
            <div className="space-y-16">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  {/* Branch Line */}
                  <div
                    className={`absolute top-1/2 w-20 h-0.5 bg-gradient-to-r ${step.color} ${
                      index % 2 === 0 ? "left-1/2 ml-2" : "right-1/2 mr-2"
                    }`}
                  />

                  {/* Step Card */}
                  <div
                    className={`w-80 transition-all duration-700 ${
                      activeStep === index ? "scale-105 shadow-xl" : "scale-100 shadow-lg hover:shadow-xl"
                    } ${index % 2 === 0 ? "ml-24" : "mr-24"}`}
                  >
                    <div className="bg-white rounded-2xl p-6 border border-gray-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}
                        >
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-500 font-medium">Step {step.id}</div>
                          <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>

                      {/* Progress Indicator */}
                      <div className="mt-4 flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${step.color} transition-all duration-1000 ${
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

                  {/* Central Node */}
                  <div
                    className={`absolute left-1/2 top-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                      activeStep >= index ? `bg-gradient-to-r ${step.color} scale-125` : "bg-gray-300 scale-100"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Benefits</h2>
          <p className="text-xl text-gray-600">Transform your content strategy with intelligent automation</p>
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
              title: "Timely & Relevant",
              description: "Real-time trends keep your brand at the forefront",
              icon: <TrendingUp className="w-8 h-8" />,
              color: "from-purple-500 to-pink-500",
            },
            {
              title: "Consistent Branding",
              description: "Uniform tone and style across all channels",
              icon: <Target className="w-8 h-8" />,
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
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white mb-6`}
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      
    </div>
  )
}