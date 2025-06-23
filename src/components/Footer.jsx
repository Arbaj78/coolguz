import Section from "./Section";
import { brainwave } from "../assets";

const Footer = () => {
  return (
    <Section
      crosses
      className="!px-0 !py-14 bg-n-8 text-n-2 font-code lg:text-n-1/50 font-semibold"
    >
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src="./src/assets/brainwave-symbol.svg" alt=" Logo" className="w-[100%] h-[100%]" />
            </div>
            <span className="text-lg font-semibold text-white">coolguyz</span>
          </div>
          <p className="text-sm text-n-4">Transforming businesses with AI intelligence.</p>
        </div>

        <div>
          <h4 className="text-white mb-3 text-base">Product</h4>
          <ul className="space-y-2 text-sm text-n-4">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3 text-base">Company</h4>
          <ul className="space-y-2 text-sm text-n-4">
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3 text-base">Support</h4>
          <ul className="space-y-2 text-sm text-n-4">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3 text-base">Subscribe to our newsletter</h4>
         
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded bg-n-7 text-n-2 placeholder:text-n-4 outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="bg-white text-n-8 px-4 py-2 rounded hover:bg-gray-200 font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mt-10 border-t border-n-6 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-n-4">
        <p>© {new Date().getFullYear()} coolguyz. All rights reserved.</p>
      </div>
    </Section>
  );
};

export default Footer;