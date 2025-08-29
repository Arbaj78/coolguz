import React from "react";
import { Link } from "react-router-dom";

const IndustryMegaDropdown = ({ onClose, mobileVersion }) => {
  const industries = [
    {
      id: 1,
      name: "Power, Utilities, & Energies",
      url: "/PUE",
      description:
        "AI-driven solutions for smarter energy management, forecasting, and grid optimization",
    },
    {
      id: 2,
      name: "Retail & Consumer Packaged Goods",
      url: "/RetailConsumer",
      description:
        "Transform retail experiences with intelligent inventory management and customer insights",
    },
    {
      id: 3,
      name: "Banking, Financial Services, and Insurance",
      url: "/BFS",
      description:
        "Secure, compliant AI solutions for financial services and risk management",
    },
    {
      id: 4,
      name: "Communications, Media, and Entertainment",
      url: "/CME",
      description:
        "Enhance content creation, distribution, and audience engagement with AI",
    },
    {
      id: 5,
      name: "Oil & Gas",
      url: "/Oil_and_gas",
      description:
        "Optimize exploration, production, and safety with advanced analytics",
    },
    {
      id: 6,
      name: "Manufacturing",
      url: "/Manufacturing",
      description:
        "Smart manufacturing solutions for predictive maintenance and quality control",
    },
    {
      id: 7,
      name: "Healthcare",
      url: "/HealthCare",
      description:
        "AI-powered solutions for patient care, medical diagnostics, and healthcare optimization",
    },
    {
      id: 8,
      name: "Renewable",
      url: "/Renuable_energy",
      description:
        "Sustainable energy solutions with AI-driven efficiency and management systems",
    },
  ];

  if (mobileVersion) {
    return (
      <div className="grid grid-cols-1 gap-4 max-h-[60vh] overflow-y-auto">
        {industries.map((industry) => (
          <Link
            key={industry.id}
            to={industry.url}
            onClick={onClose}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition-all duration-300"
          >
            <span className="text-gray-700 font-medium">{industry.name}</span>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-4xl animate-fadeIn">
      <div className="p-6 max-h-[70vh] overflow-y-auto">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          INDUSTRIES
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              to={industry.url}
              onClick={onClose}
              className="p-4 rounded-lg hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-100"
            >
              <h4 className="font-medium text-gray-900 mb-2">
                {industry.name}
              </h4>
              <p className="text-sm text-gray-600">{industry.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryMegaDropdown;
