import { Link } from "react-router-dom";
import contentimg from "../assets/contentflow-hero.png";
import linkbuddy from "../assets/linkbuddy.jpg";
import realtor from "../assets/RealState.jpg";
import hragent from "../assets/HrAgent.jpg";
import outreach from "../assets/outreach.png";

const ProductMegaDropdown = ({ onClose, mobileVersion }) => {
  const products = [
    {
      id: 1,
      name: "ContentFlow AI",
      description: "Fully automated blog and social media management platform",
      logo: contentimg,
      link: "/content-flow",
    },
    {
      id: 2,
      name: "LinkBuddy",
      description: "AI agent that grows your LinkedIn network",
      logo: linkbuddy,
      link: "/linkbuddy",
    },
    {
      id: 3,
      name: "Realtor Voice AI",
      description:
        "AI voice assistant for real estate handling client calls so you can close more deals.",
      logo: realtor,
      link: "/realtor",
    },
    {
      id: 4,
      name: "HR Voice AI",
      description:
        "AI hiring assistant—from screening to interviews, we simplify recruitment.",
      logo: hragent,
      link: "/hragent",
    },
    {
      id: 5,
      name: "Outreach Voice AI",
      description:
        "Your AI sales agent that pitches, books, and follows up — keeping your pipeline always warm.",
      logo: outreach,
      link: "/Out-Reach-Ai",
    },
  ];

  const handleProductClick = () => {
    onClose?.();
  };

  return (
    <div
      className={`
        bg-white shadow-lg border border-gray-200 rounded-lg
        ${mobileVersion ? "w-full mt-1 max-h-[60vh] overflow-y-auto" : "mt-2 w-screen max-w-6xl max-h-[70vh] overflow-y-auto"}
        overflow-hidden
      `}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-100 sticky top-0 bg-white z-10">
        <h3 className="text-lg font-semibold uppercase text-gray-800">
          PRODUCTS
        </h3>
      </div>

      {/* Product Grid */}
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <Link
              key={product.id}
              to={product.link}
              onClick={handleProductClick}
              className="group flex items-start space-x-4 p-3 border border-gray-200 rounded-lg hover:shadow-md transition-all hover:border-orange-300"
            >
              <img
                src={product.logo}
                alt={product.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md"
              />
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-orange-600">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-gray-100 flex justify-end space-x-3">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductMegaDropdown;
