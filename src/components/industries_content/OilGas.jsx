import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, CheckCircle, TrendingUp, Shield, Database, Users, Globe, Zap, BarChart3, Target, Leaf, FileText, AlertTriangle } from 'lucide-react';

const OilGasIndustryPage = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);

  const challenges = [
    {
      icon: <TrendingUp className="w-12 h-12 text-orange-500" />,
      title: "Price Volatility",
      description: "The oil and gas industry is subject to significant price fluctuations, impacting profitability and investment decisions."
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-500" />,
      title: "Environmental Concerns",
      description: "Balancing energy production with environmental responsibility is a growing challenge, with increasing pressure to reduce emissions and minimize environmental impact."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
      title: "Operational Efficiency",
      description: "Optimizing production, reducing costs, and improving efficiency are crucial for success in a competitive market."
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Safety & Security",
      description: "Ensuring the safety of workers and the security of assets and infrastructure is paramount."
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: "Data Management",
      description: "Effectively managing and analyzing large volumes of data is essential for informed decision-making."
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-500" />,
      title: "Workforce & Skills Gap",
      description: "Attracting and retaining a skilled workforce is crucial for innovation and growth."
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: "Geopolitical Risks",
      description: "Political instability and regulatory changes in oil-producing regions can impact operations and investments."
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Technological Advancements",
      description: "Keeping pace with rapid technological advancements and adopting new solutions is essential for staying competitive."
    }
  ];

  const solutions = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Well Suite",
      features: [
        "Reservoir Characterization: We use AI to accurately characterize reservoirs and predict production potential.",
        "Well Log Prediction: We use AI to predict well logs, reducing the need for costly physical measurements.",
        "Optimized Drilling: We optimize drilling operations with AI, reducing risks and improving efficiency.",
        "Well Abandonment Prediction: We predict well abandonment needs in advance for proactive planning."
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Supply Chain Control Tower",
      features: [
        "Real-time Tracking: We monitor shipments and inventory, enabling proactive issue management.",
        "Demand Forecasting: We use AI to accurately predict demand, ensuring optimal inventory.",
        "Risk Management: We identify and assess supply chain risks for proactive mitigation.",
        "Performance Optimization: We analyze performance to identify bottlenecks and drive improvements."
      ]
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "AI-Powered ESG Closing the Loop",
      features: [
        "Emissions Monitoring: We monitor emissions data for proactive environmental impact reduction.",
        "Resource Optimization: We optimize energy use and resource utilization for cost savings.",
        "ESG Reporting: We automate ESG reporting for transparency and accuracy.",
        "Stakeholder Engagement: We help you engage with stakeholders on ESG initiatives."
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Pre-bidding AI",
      features: [
        "Risk Assessment: We assess risks and opportunities associated with bids.",
        "Cost Estimation: We develop accurate cost estimates for informed bidding.",
        "Bid Optimization: We optimize bids to increase success and ensure project viability.",
        "Decision Support: We provide data-driven insights for informed bid selection."
      ]
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      title: "Environment, Health and Safety Assistant",
      features: [
        "Incident Prediction: We use AI to predict potential incidents, enabling proactive mitigation.",
        "Risk Management: We analyze real-time data to identify and assess EHS risks.",
        "Compliance Monitoring: We ensure adherence to environmental regulations and safety protocols.",
        "Custom EHS Training: Our AI-driven platform provides tools for improved safety awareness and proactive risk mitigation.",
        "Sustainability Reporting: We automate sustainability reporting for transparency and compliance."
      ]
    }
  ];

  const nextChallenge = () => {
    setCurrentChallenge((prev) => (prev + 1) % challenges.length);
  };

  const prevChallenge = () => {
    setCurrentChallenge((prev) => (prev - 1 + challenges.length) % challenges.length);
  };

  return (
    <div className="min-h-screen bg-white">
    




      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <nav className="text-sm text-gray-600">
            <span>Industries</span> <span className="mx-2">/</span> <span className="text-blue-600 font-semibold">Oil & Gas</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Oil & Gas
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              Optimizing the Oil and Gas Value Chain with AI and Innovation
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              The oil and gas industry faces a critical challenge: meeting global energy demands while minimizing environmental impact and maximizing efficiency. Companies in this sector are actively seeking innovative ways to optimize their operations, improve decision-making, and ensure long-term sustainability.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              At fatcamel Technologies, we apply the power of AI and data analytics to address these complex issues. Our solutions are designed to improve efficiency across the entire oil and gas value chain, from exploration and production to refining and distribution. We help oil and gas companies gain valuable insights from their data, optimize resource allocation, and achieve operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Challenges of the Oil & Gas Industry
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="flex items-center justify-center mb-8">
                {challenges[currentChallenge].icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-gray-900">
                {challenges[currentChallenge].title}
              </h3>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                {challenges[currentChallenge].description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevChallenge}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextChallenge}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {challenges.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentChallenge(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentChallenge ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solving Challenges Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Solving Oil & Gas Challenges with Data & AI
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Database className="w-8 h-8 text-blue-300 mr-4" />
                  <h3 className="text-2xl font-bold">Data Collection & Management</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  The oil and gas industry generates a constant flow of data from diverse sources, including seismic surveys, sensor readings, and pipeline monitoring systems. At fatcamel Technologies, we help you effectively manage this data deluge, combining historical records with real-time insights for comprehensive operational views.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-8 h-8 text-green-300 mr-4" />
                  <h3 className="text-2xl font-bold">Data Refinement & Analysis</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Raw data is like crude oil – valuable but requiring refinement to unlock its full potential. We apply advanced analytics to extract meaningful insights, identifying trends, predicting challenges, and uncovering hidden opportunities for data-driven decisions.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Zap className="w-8 h-8 text-yellow-300 mr-4" />
                  <h3 className="text-2xl font-bold">Big Data Utilization</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  We empower you to fully utilize your data assets, providing tools and expertise to recognize, aggregate, store, analyze, and optimize data for practical use, maximizing value across the entire value chain.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white/20 backdrop-blur rounded-3xl p-12 text-center">
                <Play className="w-24 h-24 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">From Data to Value</h3>
                <p className="text-blue-100">Big Data Analytics in the Oil & Gas Industry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="flex items-center justify-center mb-8">
              <CheckCircle className="w-16 h-16 text-emerald-500" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-gray-900">
              Success Story
            </h3>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              fatcamel collaborated with a leading UAE Islamic Bank to streamline sustainability data management, integrating various sources into Microsoft Sustainability Manager. This enabled accurate carbon emissions calculations, improved data security, and ensured regulatory compliance. The solution enhanced visibility, tracking, and decision-making, offering automated, transparent sustainability reporting.
            </p>
          </div>
        </div>
      </section>

      {/* AI Framework Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Frameworks: Driving Innovation Across the Industry Value Chain
            </h2>
            <h3 className="text-xl text-blue-600 font-semibold">Decision Support Framework</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Actionable Insights</h3>
              <p className="text-gray-700 leading-relaxed">
                We leverage AI-driven Root Cause Analysis (RCA) and decision engines to gain a deeper understanding of operational challenges and identify opportunities for improvement.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Predictive Power</h3>
              <p className="text-gray-700 leading-relaxed">
                We utilize industry-specific models and prescriptive/prognostic engineering to anticipate future trends, optimize resource allocation, and make proactive decisions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Sustainable Solutions</h3>
              <p className="text-gray-700 leading-relaxed">
                We integrate sustainability considerations into decision-making processes, enabling environmentally responsible and economically sound practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our AI-Powered Solutions for the Oil & Gas Industry
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="flex items-center mb-6">
                  {solution.icon}
                  <h3 className="text-xl font-bold ml-4 text-gray-900">{solution.title}</h3>
                </div>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-700 text-sm leading-relaxed">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
};

export default OilGasIndustryPage;