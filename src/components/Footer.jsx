import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8 mt-16 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-sm md:text-base">
          © 2025 <span className="font-semibold">Aditya Kumawat</span>. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/admarothiya"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-kumawat-5-903166250/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your_twitter" // replace with your Twitter
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Small tagline */}
      <p className="text-xs mt-4 text-gray-500 dark:text-gray-400">
        Crafted with ❤️ by Aditya Kumawat
      </p>
    </footer>
  );
}

export default Footer;
