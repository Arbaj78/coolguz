// components/ProductMegaDropdown.jsx
import { Link } from "react-router-dom";
import contentimg from "../assets/contentflow-hero.png";

const products = [
  {
    id: 1,
    name: "ContentFlow AI",
    description: "Fully automated blog and social media management platform",
    logo: contentimg, // Using the imported image
    link: "/content-flow",
  },
  // Add other products here if needed
];

export default function ProductMegaDropdown({ onClose }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[85%] max-w-6xl bg-white shadow-lg border border-gray-200 rounded-lg p-6 z-50">
      <h3 className="text-lg font-semibold uppercase text-gray-800 mb-4">
        PRODUCTS
      </h3>

      {/* Scrollable container */}
      <div className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={product.link}
              onClick={onClose} // Close dropdown when clicked
              className="flex flex-col items-start gap-3 p-4 border border-gray-200 rounded-md hover:shadow-md transition bg-white"
            >
              <img
                src={product.logo}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <div className="px-2">
                <h4 className="font-medium text-gray-900">{product.name}</h4>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}