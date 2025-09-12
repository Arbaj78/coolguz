import React from 'react';
import { Link } from 'react-router-dom'; // स्टेप 1: Link को इम्पोर्ट करें
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

// Mock Section component since it's not available
const Section = ({ children }) => <section>{children}</section>;

const Collaboration = () => {
  // स्टेप 2: हर सर्विस में 'href' प्रॉपर्टी जोड़ें
  const services = [
    {
      title: "Social Media",
      description: "Automated posting, engagement and analytics",
      icon: Share2,
      color: "text-pink-500",
      href: "/Social-Media-Service"
    },
    {
      title: "Chatbots",
      description: "24/7 intelligent conversational AI for your business",
      icon: MessageSquare,
      color: "text-orange-500",
      href: "/Chat-Bots-Service"
    },
    {
      title: "Voice Assistants",
      description: "Natural voice interactions for customer support",
      icon: Mic2,
      color: "text-green-500",
      href: "/Voice-Assitent-Service"
    },
    {
      title: "Email Management",
      description: "AI-powered email sorting, responses and follow-ups",
      icon: Mail,
      color: "text-red-500",
      href: "/Email-Management-Service"
    },
    {
      title: "CRM Automation",
      description: "Enhance your CRM with intelligent workflows and insights",
      icon: Contact2,
      color: "text-purple-500",
      href: "/CRM-Automation-Service"
    },
    {
      title: "Notion Integration",
      description: "Sync your Notion workspace with AI-powered automation",
      icon: BookText,
      color: "text-blue-500",
      href: "/Notion-Integaration-Service"
    },
  ];

  // CSS styles for animations
  const animationStyles = `
    @keyframes dotMove {
      0% { background-position: 0px 0px; }
      100% { background-position: 15px 15px; }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 0.8; }
    }
    
    .animated-dots::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: radial-gradient(circle, rgba(13, 71, 161, 0.3) 0.5px, transparent 0.5px);
      background-size: 12px 12px;
      animation: pulse 3s ease-in-out infinite;
      pointer-events: none;
    }
    
    .dot-container {
      animation: dotMove 8s linear infinite;
    }
  `;

  return (
    <Section>
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      
      <div 
        className="container mx-auto px-4 py-12 relative overflow-hidden dot-container"
        style={{
          background: 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)',
          backgroundImage: 'radial-gradient(circle, rgba(13, 71, 161, 0.4) 0.8px, transparent 0.8px)',
          backgroundSize: '15px 15px'
        }}
      >
        <div className="animated-dots absolute inset-0"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Zap className="w-5 h-5 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </h2>
            <p className="text-gray-700 max-w-md mx-auto text-base md:text-lg">
              Our AI works with the tools you already use to automate and enhance your workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                // स्टेप 3: कार्ड को <Link> से रैप करें
                <Link to={service.href} key={index}>
                  <div 
                    className="group bg-white border border-blue-200 rounded-lg p-5 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 h-full"
                  >
                    <div className="flex items-center mb-3">
                      <div className={`w-10 h-10 ${service.color} bg-blue-50 rounded-md flex items-center justify-center p-2 mr-3 group-hover:bg-gradient-to-r group-hover:from-orange-500/10 group-hover:to-amber-500/10 transition-all`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm ml-13 group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </Link>
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
      </div>
    </Section>
  );
};

export default Collaboration;