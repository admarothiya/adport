import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaDatabase, FaPython, FaGitAlt, FaCode, FaNpm } from "react-icons/fa";
import { SiExpress, SiPostman, SiDjango } from "react-icons/si";
import { FaDesktop, FaServer, FaTools } from "react-icons/fa";

const SkillsPage = () => {
  const frontend = [
    { name: "React.js", icon: <FaReact className="inline mr-1 text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="inline mr-1 text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="inline mr-1 text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="inline mr-1 text-blue-600" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="inline mr-1 text-purple-600" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs className="inline mr-1 text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="inline mr-1 text-gray-700" /> },
    { name: "MongoDB", icon: <FaDatabase className="inline mr-1 text-green-500" /> },
    { name: "Django", icon: <SiDjango className="inline mr-1 text-green-800" /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt className="inline mr-1 text-red-500" /> },
    { name: "VS Code", icon: <FaCode className="inline mr-1 text-blue-500" /> },
    { name: "Postman", icon: <SiPostman className="inline mr-1 text-orange-400" /> },
    { name: "npm", icon: <FaNpm className="inline mr-1 text-red-600" /> },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-32 md:pt-26 px-6 py-16 bg-gradient-to-b from-gray-800 to-blue-900 text-gray-100 overflow-hidden">
      
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-green-400 font-semibold mb-2">🟢 Production-Ready Skills</p>
        <h1 className="text-5xl font-bold mb-2">
          Technical <span className="text-blue-300">Expertise</span>
        </h1>
        <p className="text-lg text-gray-300">
          <span className="text-green-400 font-semibold">HackerRank certified</span> skills with{" "}
          <span className="text-blue-300 font-semibold">production experience</span>
        </p>
      </div>

      {/* Core Technologies */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Core Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            "React.js ✅ Certified",
            "JavaScript",
            "Python",
            "Django",
            "Node.js",
            "MongoDB",
            "CSS3 ✅ Certified",
            "Express.js",
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center font-semibold transform transition hover:scale-105 hover:bg-blue-700 cursor-pointer"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-16 max-w-6xl p-7 mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Technology Stack</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaDesktop className="text-blue-400" /> Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {frontend.map((item) => (
                <span
                  key={item.name}
                  className="bg-blue-700 px-3 py-1 rounded-full text-sm transform transition hover:scale-110 cursor-pointer"
                >
                  {item.icon} {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaServer className="text-purple-400" /> Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {backend.map((item) => (
                <span
                  key={item.name}
                  className="bg-purple-700 px-3 py-1 rounded-full text-sm transform transition hover:scale-110 cursor-pointer"
                >
                  {item.icon} {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaTools className="text-green-400" /> Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((item) => (
                <span
                  key={item.name}
                  className="bg-green-700 px-3 py-1 rounded-full text-sm transform transition hover:scale-110 cursor-pointer"
                >
                  {item.icon} {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Summary */}
      <div className="grid md:grid-cols-5 gap-8 p-8 max-w-6xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow transform transition hover:scale-105 cursor-pointer">
          <h1 className="text-3xl font-bold text-white">5+</h1>
          <p>Core Technologies</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow transform transition hover:scale-105 cursor-pointer">
          <h1 className="text-3xl font-bold text-white">2</h1>
          <p>HackerRank Certified</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow transform transition hover:scale-105 cursor-pointer">
          <h1 className="text-3xl font-bold text-white">85%+</h1>
          <p>Average Proficiency</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow transform transition hover:scale-105 cursor-pointer">
          <h1 className="text-3xl font-bold text-green-400">100%</h1>
          <p>Production Ready</p>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="/#contact"
            className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Hire Me Now
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 animate-bounce text-white text-3xl">
        &#x2193;
      </div>
    </section>
  );
};

export default SkillsPage;












