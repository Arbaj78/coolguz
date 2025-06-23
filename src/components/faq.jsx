import React, { useState } from 'react';
import { ChevronDown, Zap, Brain, Sparkles, MessageCircle } from 'lucide-react';
import Section from './Section';

const Faq = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqs = [
    {
      id: 1,
      question: "What makes your AI technology different?",
      answer: "Our AI leverages cutting-edge neural networks and machine learning algorithms to deliver unprecedented accuracy and speed. We combine deep learning with real-time processing to create intelligent solutions that adapt to your specific needs.",
      icon: Brain
    },
    {
      id: 2,
      question: "How secure is your AI platform?",
      answer: "Security is our top priority. We implement end-to-end encryption, advanced threat detection, and comply with international data protection standards. Your data is processed in secure, isolated environments with zero-trust architecture.",
      icon: Zap
    },
    {
      id: 3,
      question: "Can I integrate your AI with existing systems?",
      answer: "Absolutely! Our AI platform offers flexible APIs and SDKs for seamless integration. We support REST APIs, webhooks, and custom connectors to work with your current tech stack without disruption.",
      icon: Sparkles
    },
    {
      id: 4,
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support, comprehensive documentation, video tutorials, and dedicated account managers for enterprise clients. Our AI experts are always ready to help you maximize your investment.",
      icon: MessageCircle
    },
    {
      id: 5,
      question: "How does pricing work for your AI services?",
      answer: "We offer flexible pricing models including pay-per-use, monthly subscriptions, and custom enterprise packages. Start with our free tier to explore capabilities, then scale based on your usage and requirements.",
      icon: Zap
    }
  ];

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
      <div className="min-h-screen bg-n-8 relative overflow-hidden">
        {/* Glow background bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid background lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg shadow-purple-500/25">
              <Brain className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4 tracking-tight">
              Frequently Asked
              <span className="block  bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Get instant answers about our AI technology and discover how we're shaping the future of intelligent solutions
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
                  className="group relative bg-n-8/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="absolute inset-0 bg-n-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 md:p-8 text-left relative z-10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-2xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div
                          className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                            isOpen
                              ? 'bg-n-8 shadow-lg shadow-purple-500/25'
                              : 'bg-n-8 group-hover:bg-gradient-to-r group-hover:from-purple-600/80 group-hover:to-cyan-600/80'
                          }`}
                        >
                          <IconComponent
                            className={`w-6 h-6 transition-colors duration-300 ${
                              isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'
                            }`}
                          />
                        </div>

                        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-purple-200 transition-colors duration-300 pr-4">
                          {faq.question}
                        </h3>
                      </div>

                      <ChevronDown
                        className={`w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-all duration-300 flex-shrink-0 ${
                          isOpen ? 'rotate-180 text-purple-400' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 relative z-10">
                      <div className="ml-16 pt-2 border-l-2 border-gradient-to-b from-purple-500/50 to-cyan-500/50 pl-6">
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`h-0.5 bg-n-8 from-transparent via-purple-500 to-transparent transition-opacity duration-500 ${
                      isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Contact Prompt */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-n-8 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-200 hover:from-purple-600/30 hover:to-cyan-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">Still have questions? Contact our AI experts</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
