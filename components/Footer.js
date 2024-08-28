'use client'
// components/Footer.js
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">UPOKARI</h2>
            <p className="mt-2 text-gray-400">
              Your one-stop shop for books and more.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 mb-6 md:mb-0">
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-cyan-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/service"
                    className="text-gray-400 hover:text-cyan-400">
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-cyan-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-400 hover:text-cyan-400">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 md:mt-0">
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400">
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400">
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400">
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400">
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400">
                  <SiGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} UPOKARI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
