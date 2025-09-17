import React from "react";

const EducationPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-blue-900 min-h-screen py-12 px-4 text-gray-100 font-sans">
      {/* ===== Header ===== */}
      <div className="text-center mb-12">
        <div className="inline-block bg-blue-700 text-white px-3 py-1 rounded-full text-sm mb-2">
          📁 Professional Journey
        </div>
        <h1 className="text-3xl font-bold">
          Experience & <span className="text-green-400">Education</span>
        </h1>
        <p className="text-blue-300 mt-2 font-medium">
          Fresh graduate with{" "}
          <span className="text-green-400 font-semibold">
            production internship experience
          </span>
        </p>
      </div>

      {/* ===== Work Experience ===== */}
      <div className="max-w-3xl mx-auto mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white">Work Experience</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4 bg-gray-800 p-6 rounded-xl shadow-md 
                          hover:scale-105 hover:bg-gray-700/80 hover:shadow-2xl 
                          transition-all duration-300 cursor-pointer">
            <div className="bg-blue-700 text-white p-2 rounded-full text-xl">💼</div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-white">MERN Stack Developer Intern</h3>
                  <p className="text-blue-300 text-sm">
                    8bit System Private Limited · Jaipur, Rajasthan · Jul 2025 - Present
                  </p>
                </div>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs mt-1">
                  Internship
                </span>
              </div>
              <ul className="list-disc list-inside mt-3 text-sm text-gray-300 space-y-1">
                <li>Learning MERN stack development in production environment</li>
                <li>Gaining experience with modern development workflows and best practices</li>
                <li>Working with senior developers on live business applications</li>
                <li>Understanding e-commerce platform architecture and development processes</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3 text-xs">
                {["React", "Node.js", "MongoDB", "Express", "Git"].map((tech) => (
                  <span key={tech} className="bg-gray-700 text-white px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Education ===== */}
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-4 text-white">Education</h2>
        {[
          {
            icon: "🎓",
            title: "Bachelor of Computer Applications (BCA)",
            school: "University of Rajasthan · 2022 – 2025",
            score: "64.8%",
            extra: "Graduated with Distinction"
          },
          {
            icon: "🏫",
            title: "Higher Secondary (12th)",
            school: "PN Public School, Rajasthan · 2021",
            score: "88%"
          },
          {
            icon: "🏫",
            title: "Secondary (10th)",
            school: "PN Public School, Rajasthan · 2019",
            score: "62%"
          }
        ].map((edu, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 bg-gray-800 p-6 rounded-xl shadow-md 
                       hover:scale-105 hover:bg-gray-700/80 hover:shadow-2xl 
                       transition-all duration-300 cursor-pointer mb-6"
          >
            <div className="bg-purple-700 text-white p-2 rounded-full text-xl">{edu.icon}</div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-white">{edu.title}</h3>
              <p className="text-blue-300 text-sm">{edu.school}</p>
            </div>
            <div className="text-right">
              <p className="text-green-400 font-semibold text-sm">{edu.score}</p>
              {edu.extra && <p className="text-green-300 text-xs">{edu.extra}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* ===== Certificates Section ===== */}
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-6 text-white">📜 Certificates</h2>
        {[
          { icon: "🐍", title: "Python Development Certificate", org: "HackerRank · 2025" },
          { icon: "💬", title: "Effective Communication Certificate", org: "Coursera · 2025" }
        ].map((cert, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 bg-gray-800 p-6 rounded-xl shadow-md 
                       hover:scale-105 hover:bg-gray-700/80 hover:shadow-2xl 
                       transition-all duration-300 cursor-pointer mb-6"
          >
            <div className="bg-yellow-600 text-white p-2 rounded-full text-xl">{cert.icon}</div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-white">{cert.title}</h3>
              <p className="text-blue-300 text-sm">{cert.org}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Ready to Contribute Section ===== */}
      <div className="max-w-3xl mx-auto bg-gray-800 text-white hover:scale-105 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-2">
          Ready to <span className="text-blue-300">Contribute</span>
        </h2>
        <p className="text-sm mb-6">
          Fresh graduate with internship experience, ready to bring enthusiasm and modern skills to your team.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition inline-block"
          >
            Let's Connect
          </a>
          <a
            href="/resume.pdf"
            download
            className="bg-white text-blue-900 hover:bg-gray-100 px-4 py-2 rounded transition inline-block"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
