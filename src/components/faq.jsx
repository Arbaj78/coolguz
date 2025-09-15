import React, { useState } from 'react';
import { 
  ChevronDown,
  Brain,
  Sparkles,
  Rocket,
  Settings,
  Link,
  DollarSign,
  Shield,
  Workflow,
  Headphones,
  BarChart2,
  Lock,
  Mail
} from 'lucide-react';
import Section from './Section';
import { Helmet } from "react-helmet-async";

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  // Function to determine icon based on question content
  const getIconForQuestion = (question) => {
    const lower = question.toLowerCase();
    if (lower.includes('why') || lower.includes('fatcamel')) return Rocket;
    if (lower.includes('charge') || lower.includes('price')) return DollarSign;
    if (lower.includes('process') || lower.includes('work')) return Workflow;
    if (lower.includes('tool') || lower.includes('integrat')) return Link;
    if (lower.includes('support') || lower.includes('help')) return Headphones;
    if (lower.includes('different') || lower.includes('unique')) return Sparkles;
    if (lower.includes('secure') || lower.includes('safe')) return Shield;
    if (lower.includes('result') || lower.includes('outcome')) return BarChart2;
    if (lower.includes('technology') || lower.includes('ai')) return Brain;
    if (lower.includes('data') || lower.includes('privacy')) return Lock;
    return Settings;
  };

  const faqs = [
    {
      id: 1,
      question: "Why fatcamel for AI?",
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
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section customPaddings="py-0">

       <Helmet>
        <title>FAQ | FatCamel</title>
        <link rel="canonical" href="https://www.fatcamel.ai/faq" />
        <meta
          name="description"
          content="Find answers to frequently asked questions about FatCamel’s AI automation services, integrations, and digital solutions."
        />
      </Helmet>
      <div className="bg-black relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="py-10 text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent mb-4 tracking-tight">
              Frequently Asked
              <span className="block">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Get instant answers about our AI solutions and how we drive business results
            </p>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-5">
            {faqs.map((faq) => {
              const IconComponent = faq.icon;
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden ${
                    isOpen 
                      ? "border-orange-500/50 bg-gradient-to-br from-gray-900/90 to-black shadow-lg shadow-orange-500/10" 
                      : "border-gray-800 bg-gray-900/50"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg transition-all duration-500 ${
                        isOpen ? "bg-orange-500/10 scale-110" : "bg-gray-800"
                      }`}>
                        <IconComponent className={`w-6 h-6 transition-colors duration-500 ${
                          isOpen ? "text-orange-400" : "text-gray-400"
                        }`} />
                      </div>
                      <h3 className="text-lg md:text-xl font-medium text-white text-left">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-orange-400" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-6 pb-6">
                      <div className="pl-14">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
         
        </div>
      </div>
    </Section>
  );
};

export default Faq;
