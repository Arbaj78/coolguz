import React, { useState } from 'react';
import { 
  ChevronDown,
  Brain,
  Zap,
  Sparkles,
  MessageCircle,
  Rocket,
  Settings,
  Link,
  DollarSign,
  Shield,
  Workflow,
  Headphones,
  BarChart2,
  Lock
} from 'lucide-react';
import Section from './Section';

const Faq = () => {
  const [openItems, setOpenItems] = useState(new Set());

  // Function to determine icon based on question content
  const getIconForQuestion = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('why') || lowerQuestion.includes('coolguyz')) return Rocket;
    if (lowerQuestion.includes('charge') || lowerQuestion.includes('price')) return DollarSign;
    if (lowerQuestion.includes('process') || lowerQuestion.includes('work')) return Workflow;
    if (lowerQuestion.includes('tool') || lowerQuestion.includes('integrat')) return Link;
    if (lowerQuestion.includes('support') || lowerQuestion.includes('help')) return Headphones;
    if (lowerQuestion.includes('different') || lowerQuestion.includes('unique')) return Sparkles;
    if (lowerQuestion.includes('secure') || lowerQuestion.includes('safe')) return Shield;
    if (lowerQuestion.includes('result') || lowerQuestion.includes('outcome')) return BarChart2;
    if (lowerQuestion.includes('technology') || lowerQuestion.includes('ai')) return Brain;
    if (lowerQuestion.includes('data') || lowerQuestion.includes('privacy')) return Lock;
    
    return Settings; // Default icon
  };

  const faqs = [
    {
      id: 1,
      question: "Why Coolguyz for AI?",
      answer: "We don't just build agents. We deliver real business outcomes, fast."
    },
    {
      id: 2,
      question: "How do you charge?",
      answer: "We charge based on results, not the number of AI tools you use."
    },
    {
      id: 3,
      question: "What's your process like?",
      answer: "We audit your business, find high-impact areas, and plug in AI where it matters."
    },
    {
      id: 4,
      question: "Can it work with our current tools?",
      answer: "Yes. Our AI integrates with your existing tools like email, CRMs, and chats."
    },
    {
      id: 5,
      question: "What support do you offer?",
      answer: "We stay with you, monitoring, improving, and scaling your AI systems."
    }
  ].map(faq => ({
    ...faq,
    icon: getIconForQuestion(faq.question)
  }));

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <Section crosses id="faq">
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Glow background bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid background lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent mb-4 tracking-tight">
              Frequently Asked
              <span className="block bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Get instant answers about our AI solutions and how we drive business results
            </p>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq) => {
              const IconComponent = faq.icon;
              const isOpen = openItems.has(faq.id);

              return (
                <div
                  key={faq.id}
                  className="group relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${isOpen ? 'bg-orange-500/10' : 'bg-gray-800'}`}>
                          <IconComponent className={`w-5 h-5 ${isOpen ? 'text-orange-400' : 'text-gray-400'}`} />
                        </div>
                        <h3 className="text-lg font-medium text-white">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-400' : ''}`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-14">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Prompt */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600/20 to-amber-600/20 border border-orange-500/30 rounded-full text-orange-200 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
              <Sparkles className="w-5 h-5 mr-2" />
              <span className="font-medium">Still have questions? Contact our AI experts</span>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Faq;