import { useState, useEffect } from 'react';
import { ChevronRight, Play, Users, Zap, Target, Award, ArrowRight } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import SEO from "../SEO"
import { seo, SITE } from "./../../seo/seoData";

const CMEPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = [
    { title: "SAP STARGenAI CoPilot", icon: "🤖" },
    { title: "Unity Catalog", icon: "📊" },
    { title: "GenAI Based Chatbot", icon: "💬" },
    { title: "Video Analytics", icon: "🎥" },
    { title: "Social Media Monitoring & Analysis", icon: "📱" },
    { title: "Revenue Prediction", icon: "💰" },
    { title: "New Content Generation", icon: "✨" },
    { title: "TV Ratings Data Analysis", icon: "📺" }
  ];

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customized Solutions",
      description: "Tailored to meet the needs of each client."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agile Methodology", 
      description: "Rapid development and deployment."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Focus on ROI",
      description: "Delivering measurable results and maximizing value."
    }
  ];

  const successStories = [
    {
      title: "Transforming Data Management for a Leading Media Company",
      description: "Collaborating with Databricks, we helped a media giant overcome challenges posed by an outdated platform, obsolete technologies, and disconnected data silos that hindered access and governance, despite managing over 100M monthly web visits.",
      results: "2000 ML models in production, 2M daily recommendations, and $6M in IT cost savings",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Elevating OTT Platform Performance",
      description: "A leading OTT platform faced performance issues with Hive queries and struggled to meet SLAs on costly on-premises clusters. Collaborating with Databricks, the transition to a new platform was initiated.",
      results: "10x speed increase in DAGs and a 50% boost in data processing and performance enhancements",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Overcoming Operational Inefficiencies in the Fast-Paced Media Landscape",
      description: "One of the leading media enterprises faced challenges with transparency, compliance, digital disruption, and profitability. Partnering with fatcamel Technologies, they implemented solutions to optimize their framework.",
      results: "26% increase in operational efficiency",
      gradient: "from-cyan-600 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">

        <SEO {...seo['/CME']} url={`${SITE.domain}/CME`} />

      {/* Navigation Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center text-gray-400 text-sm">
          <span>Industries</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-blue-400">CME</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-orange-700 to-orange-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="max-w-4xl">
              <div className="inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <span className="text-orange-300 font-semibold">CME</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Redefining Media Success with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Advanced AI, Data, and Automation
                </span>
                <span className="block text-white-300">Solutions</span>
              </h1>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-300"></div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              The Communication, Media, and Entertainment Evolution
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              The Communication, Media, and Entertainment (CME) industry is experiencing a significant shift. Traditional and new media are converging, creating a dynamic landscape where consumers demand personalized, immersive, and engaging experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From streaming services and social media to Metaverse, Web 3.0, online gaming, and on-demand services, the options are endless. This evolution has disrupted traditional media models, compelling Communication Service Providers (CSPs) to adapt at an unprecedented rate.
            </p>
          </div>
        </div>
      </section>

      {/* Empowering Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Empowering Enterprises
              </span>
              <span className="block text-white">to Shine in the Digital World</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As the Media and Entertainment industry evolves, the demand for innovation and engagement intensifies. Join us on this exciting journey as we redefine the boundaries of what's possible in a digital world.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-white font-semibold text-lg leading-tight">
                  {solution.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-6">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-300 font-semibold">What Sets Us Apart?</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl hover:border-blue-400/50 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
     

     
    </div>
  );
};

export default CMEPage;