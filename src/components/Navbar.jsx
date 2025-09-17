import { FaHome, FaUser, FaCode, FaFolderOpen, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 shadow-lg fixed w-full top-0 z-50">
      
      {/* Logo / Name */}
      <h1 className="text-2xl font-bold text-green-400">
        Aditya Kumawat
      </h1>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 items-center text-gray-200">
        <a href="#home" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
          <FaHome /> <span>Home</span>
        </a>

        <a href="#skills" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
          <FaCode /> <span>Skills</span>
        </a>
        <a href="#projects" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
          <FaFolderOpen /> <span>Projects</span>
        </a>
        <a href="#education" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
          <FaBriefcase /> <span>Education</span>
        </a>
        <a href="#contact" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
          <FaEnvelope /> <span>Contact</span>
        </a>
        <a href="#about" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
          <FaUser /> <span>About</span>
        </a>

        {/* Social Icons */}
        <a href="https://github.com/admarothiya" target="_blank" className="hover:text-blue-400 transition-colors">
          <FaGithub size={20} />
        </a>
        <a href="https://linkedin.com/in/aditya-kumawat-5-903166250/" target="_blank" className="hover:text-blue-400 transition-colors">
          <FaLinkedin size={20} />
        </a>
      </div>
    </nav>
  );
}
