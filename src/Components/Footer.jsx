 

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* ======= Brand Section ======= */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
            <FaHome className="text-blue-500 text-3xl" />
            <h2 className="text-2xl font-bold text-white">HomeNest</h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-gray">
            Your trusted real estate partner. Find, rent, or buy your dream
            property with ease.
          </p>
        </div>

        {/* ======= Contact Section ======= */}
        <div className="text-center">
          <h3 className="text-white font-semibold text-lg sm:text-xl mb-4">
            Contact Us
          </h3>
          <p className="text-sm sm:text-gray">📍 Dhaka, Bangladesh</p>
          <p className="text-sm sm:text-gray">📞 +880 1234 567 890</p>
          <p className="text-sm sm:text-gray">📧 info@homenest.com</p>
        </div>

        {/* ======= Links Section ======= */}
        <div className="text-center sm:text-right">
          <h3 className="text-white font-semibold text-lg sm:text-xl mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm sm:text-gray">
            <li>
              <a
                href="/terms"
                className="hover:text-blue-400 transition duration-200"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-blue-400 transition duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition duration-200"
              >
                Contact Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ======= Divider ======= */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-5">
          <a
            href="#"
            className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-600 transition transform hover:scale-110"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm sm:text-gray">
          © {new Date().getFullYear()} HomeNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;





