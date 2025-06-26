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
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Seamless Integrations
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our AI works with the tools you already use to automate and enhance your workflows
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-gray-900/80 border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${service.color} bg-gray-800 rounded-lg flex items-center justify-center p-2 mr-4 group-hover:bg-gradient-to-r group-hover:from-orange-500/10 group-hover:to-amber-500/10 transition-all`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm ml-16 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all group">
            <span>See All Integrations</span>
            <Sparkles className="w-4 h-4 ml-2 group-hover:animate-pulse" />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;