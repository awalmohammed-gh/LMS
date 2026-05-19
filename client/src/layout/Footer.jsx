import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { socialMedia } from "../assets/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SkillForge
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Empowering learners worldwide with quality education and practical
              skills for the digital age.
            </p>
            <div className="flex space-x-3">
              {socialMedia.map((social, index) => (
                <Link
                  key={index}
                  to={social.path}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-md"
                >
                  <img
                    src={social.image || social}
                    alt={social.name || "social"}
                    className="w-5 h-5 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-gray-800 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/featured"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  Featured Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-gray-800 relative inline-block">
              Support
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-gray-800 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <MapPin size={16} className="text-blue-600" />
                </div>
                <span className="text-sm leading-relaxed">
                  Spintex Road Flower pot, Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Mail size={16} className="text-blue-600" />
                </div>
                <Link
                  to="mailto:info@skillforge.com"
                  className="hover:text-blue-600 transition-colors text-sm"
                >
                  info@skillforge.com
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-600 group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Phone size={16} className="text-blue-600" />
                </div>
                <Link
                  to="tel:+233123456789"
                  className="hover:text-blue-600 transition-colors text-sm"
                >
                  +233 241 5299 04
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-600 group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Clock size={16} className="text-blue-600" />
                </div>
                <span className="text-sm">Always Open</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} SkillForge. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
              >
                Terms
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
              >
                Sitemap
              </Link>
              <Link
                to="/cookies"
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
