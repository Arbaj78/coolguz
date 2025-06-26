import React from 'react';
import Section from './Section';
import { 
  BookText, 
  Contact2, 
  Mail, 
  Mic2, 
  MessageSquare, 
  Share2,
  Zap,
  Sparkles
} from 'lucide-react';

const Collaboration = () => {
  const services = [
    {
      title: "Notion Integration",
      description: "Sync your Notion workspace with AI-powered automation",
      icon: BookText,
      color: "text-blue-400"
    },
    {
      title: "CRM Automation",
      description: "Enhance your CRM with intelligent workflows and insights",
      icon: Contact2,
      color: "text-purple-400"
    },
    {
      title: "Email Management",
      description: "AI-powered email sorting, responses and follow-ups",
      icon: Mail,
      color: "text-red-400"
    },
    {
      title: "Voice Assistants",
      description: "Natural voice interactions for customer support",
      icon: Mic2,
      color: "text-green-400"
    },
    {
      title: "Chatbots",
      description: "24/7 intelligent conversational AI for your business",
      icon: MessageSquare,
      color: "text-orange-400"
    },
    {
      title: "Social Media",
      description: "Automated posting, engagement and analytics",
      icon: Share2,
      color: "text-pink-400"
    }
  ];

  return (
    <Section crosses>
      <div className="container mx-auto px-4 py-12 bg-black">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Seamless Integrations
            </span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-base md:text-lg">
            Our AI works with the tools you already use to automate and enhance your workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="flex items-center mb-3">
                  <div className={`w-10 h-10 ${service.color} bg-gray-800 rounded-md flex items-center justify-center p-2 mr-3 group-hover:bg-gradient-to-r group-hover:from-orange-500/10 group-hover:to-amber-500/10 transition-all`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-xs md:text-sm ml-13 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all group">
            <span className="text-sm md:text-base">See All Integrations</span>
            <Sparkles className="w-3.5 h-3.5 ml-1.5 group-hover:animate-pulse" />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;