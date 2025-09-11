import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Database, Bot, Clock, Shield, Target, Users, Workflow, Star, RefreshCw } from 'lucide-react';

const NotionIntegrationPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Real-time Sync",
      description: "Keep your Notion workspace perfectly synced with AI automation workflows in real-time."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Processing",
      description: "Leverage advanced AI to automatically categorize, tag, and organize your Notion content."
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Custom Workflows",
      description: "Build personalized automation workflows that adapt to your unique Notion structure."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Smart Data Management",
      description: "Intelligently manage and structure your data across multiple Notion databases."
    }
  ];

  const benefits = [
    { text: "Reduce manual data entry by up to 90%" },
    { text: "Automate content categorization and tagging" },
    { text: "Sync with 500+ external applications" },
    { text: "Real-time collaboration enhancements" },
    { text: "Advanced analytics and insights" },
    { text: "Custom AI agents for your workspace" }
  ];

  const useCases = [
    {
      title: "Project Management",
      description: "Automatically create tasks, assign team members, and track progress across projects.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Content Creation",
      description: "Generate content ideas, outlines, and drafts directly in your Notion workspace.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Team Collaboration",
      description: "Streamline team workflows with intelligent task distribution and updates.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechStart Inc.",
      content: "This integration transformed how our team manages projects. We save 15+ hours weekly on manual tasks.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Content Director",
      company: "Creative Labs",
      content: "The AI-powered content organization is incredible. Our Notion workspace has never been more organized.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center w-full">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <RefreshCw className="w-5 h-5 text-orange-500 mr-2 animate-spin" />
              <span className="text-orange-500 text-sm font-medium">AI-Powered Integration</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent leading-tight">
              Notion Integration
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Sync your Notion workspace with AI-powered automation and transform how you manage content, projects, and collaboration.
            </p>
            
          
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" data-animate className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to supercharge your Notion workspace with AI automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 rounded-2xl hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" data-animate className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/30 to-black transition-all duration-1000 ${isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
                Why Choose Our Integration?
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-orange-500/5 transition-all duration-300 group"
                  >
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50 rounded-3xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-500 mb-2 animate-pulse">90%</div>
                  <p className="text-gray-400 mb-6">Reduction in manual work</p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">500+</div>
                      <p className="text-gray-400 text-sm">Integrations</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">24/7</div>
                      <p className="text-gray-400 text-sm">Support</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="usecases" data-animate className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible.usecases ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
              Perfect For Every Use Case
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your workflow with intelligent automation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-900/50 to-black border border-gray-800/50 rounded-2xl hover:border-orange-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" data-animate className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/30 to-black transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
              Trusted by Teams Worldwide
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See what our customers say about our Notion integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800/50 rounded-2xl hover:border-orange-500/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-600/5 to-black"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
            Ready to Transform Your Notion Workspace?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of teams who have supercharged their productivity with our AI-powered Notion integration.
          </p>
          
        

       
        </div>
      </section>
    </div>
  );
};

export default NotionIntegrationPage;