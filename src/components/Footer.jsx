import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section: Profile */}
        <div>
          <h2 className="text-xl font-bold text-white">
            Aditya Kumawat
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Full-Stack Developer passionate about creating innovative
            solutions and building scalable applications.
          </p>
          <div className="flex gap-4 mt-4 text-lg">
            <a
              href="https://github.com/admarothiya"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-kumawat-5-903166250/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:admarothiya@gmail.com"
              className="hover:text-white transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Middle Section: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#experience" className="hover:text-white">Experience</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Right Section: Legal & Policies */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Legal & Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Payment Policy</a></li>
            <li><a href="#" className="hover:text-white">Return Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>Made with ❤️ by Aditya Kumawat</p>
        <p className="mt-2">© 2025 All rights reserved. <a href="#" className="hover:text-white">Legal Information</a></p>
      </div>
    </footer>
  );
}

export default Footer;
