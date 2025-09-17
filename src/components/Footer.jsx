import { motion } from "framer-motion";
import {
  Mail,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
  Star,
} from "lucide-react";
import React from "react";
import logo from "../assets/logo-white.svg";
import clutch from "../assets/clutch.jpg";
import google from "../assets/google-review.png";
import trustpilot from "../assets/trustpilot.svg";

// Note: This component uses Tailwind CSS for styling.
// Ensure your project is configured with Tailwind CSS for the classes to apply.

const Footer = () => {
  const footerLinks = {
    Services: [
      { label: "Social Media", href: "/Social-Media-Service" },
      { label: "Chatbots", href: "/Chat-Bots-Service" },
      { label: "Voice Assistants", href: "/Voice-Assitent-Service" },
      { label: "Email Management", href: "/Email-Management-Service" },
      { label: "CRM Automation", href: "/CRM-Automation-Service" },
      { label: "Notion Integration", href: "/Notion-Integaration-Service" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    Contact: [
      {
        icon: Mail,
        label: "Basant.choudharynz@gmail.com",
        href: "mailto:Basant.choudharynz@gmail.com",
      },
      {
        icon: Globe,
        label: "fatcamel.ai",
        href: "https://fatcamel.ai",
      },
    ],
  };

  const socialLinks = [
    {
      icon: Twitter,
      href: "https://x.com/vasantaddy",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/the_boring_ai_guy/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/fatcamelai/",
      label: "LinkedIn",
    },
  ];

  // ReviewCard अब नॉर्मल दिखेगा और होवर भी होगा, लेकिन यह clickable नहीं है
  const ReviewCard = ({ children }) => (
    <div className="block w-full">
      <div className="border border-slate-700 rounded-lg p-3 h-full flex items-center justify-center space-x-3 hover:bg-slate-800/50 transition-colors duration-300">
        {children}
      </div>
    </div>
  );

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
              <img
                src={logo}
                alt="fatcamel AI agent services"
                className="w-[100px] h-[50px] object-contain"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-8 leading-relaxed max-w-sm"
            >
              Empowering your digital experience with cutting-edge solutions
              and seamless connectivity.
            </motion.p>

            {/* रिव्यू कार्ड्स अब नॉर्मल दिख रहे हैं */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch"
            >
              <ReviewCard>
                <img
                  src={clutch}
                  alt="Clutch Logo"
                  width="40"
                  height="40"
                  className="rounded-md flex-shrink-0"
                />
                <div>
                  <div className="flex items-center">
                    <span className="text-white font-bold text-lg mr-2">
                      5.0
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-red-500"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">5 Clutch reviews</p>
                </div>
              </ReviewCard>

              <ReviewCard>
                <img
                  src={trustpilot}
                  alt="Trustpilot Logo"
                  width="100"
                  height="24"
                />
              </ReviewCard>

              <ReviewCard>
                <img
                  src={google}
                  alt="Google Review Logo"
                  width="120"
                  height="30"
                  className="object-contain"
                />
              </ReviewCard>
            </motion.div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <motion.div whileHover={{ x: 5 }}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-start"
                      >
                        {link.icon && (
                          <link.icon className="inline-block w-4 h-4 mr-2 text-orange-400 flex-shrink-0 mt-1" />
                        )}
                        <span>{link.label}</span>
                      </a>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-slate-800/50"
        >
          <div className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} fatcamel. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-slate-800/50 text-gray-400 rounded-full hover:text-orange-400 hover:bg-orange-500/20 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;