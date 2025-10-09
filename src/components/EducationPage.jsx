import React, { useState } from "react";

const EducationPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bg-slate-950  min-h-screen py-16 px-4 text-gray-100 font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with Glassmorphism */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-xl border border-blue-400/20 text-white px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
            <span className="text-lg">📁</span>
            <span className="font-medium">Professional Journey</span>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-green-300 bg-clip-text text-transparent">
            Experience & Education
          </h1>
          <p className="text-xl text-blue-200 mt-4 font-light max-w-2xl mx-auto">
            Fresh graduate with{" "}
            <span className="text-green-400 font-semibold bg-green-400/10 px-3 py-1 rounded-lg">
              production internship experience
            </span>
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">Work Experience</h2>
          </div>
          
          <div 
            className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 p-8 rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/50"
            onMouseEnter={() => setHoveredCard('work')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative flex items-start gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                💼
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-2xl text-white mb-2 group-hover:text-blue-300 transition-colors">
                      MERN Stack Developer Intern
                    </h3>
                    <p className="text-blue-300 text-base font-medium">
                      8bit System Private Limited
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      📍 Jaipur, Rajasthan · 📅 Jul 2025 - Present
                    </p>
                  </div>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Active
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    "Learning MERN stack development in production environment",
                    "Gaining experience with modern development workflows and best practices",
                    "Working with senior developers on live business applications",
                    "Understanding e-commerce platform architecture and development processes"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-green-400 mt-1">▹</span>
                      <span className="text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {["React", "Node.js", "MongoDB", "Express", "Git"].map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gradient-to-r from-gray-700/80 to-gray-800/80 backdrop-blur-sm border border-gray-600/50 text-white px-4 py-2 rounded-xl text-sm font-medium hover:border-blue-400/50 hover:shadow-lg transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>
          
          <div className="grid gap-6">
            {[
              {
                icon: "🎓",
                title: "Bachelor of Computer Applications (BCA)",
                school: "University of Rajasthan",
                year: "2022 – 2025",
                score: "64.8%",
                extra: "Graduated with Distinction",
                color: "from-purple-600 to-purple-800"
              },
              {
                icon: "🏫",
                title: "Higher Secondary (12th)",
                school: "PN Public School, Rajasthan",
                year: "2021",
                score: "88%",
                color: "from-indigo-600 to-indigo-800"
              },
              {
                icon: "🏫",
                title: "Secondary (10th)",
                school: "PN Public School, Rajasthan",
                year: "2019",
                score: "62%",
                color: "from-blue-600 to-blue-800"
              }
            ].map((edu, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 p-8 rounded-3xl shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/50"
                onMouseEnter={() => setHoveredCard(`edu-${idx}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative flex items-start gap-6">
                  <div className={`bg-gradient-to-br ${edu.color} p-4 rounded-2xl text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {edu.title}
                    </h3>
                    <p className="text-blue-300 text-base font-medium mb-1">{edu.school}</p>
                    <p className="text-gray-400 text-sm">{edu.year}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 px-5 py-2 rounded-xl mb-2">
                      <p className="text-green-400 font-bold text-xl">{edu.score}</p>
                    </div>
                    {edu.extra && (
                      <p className="text-green-300 text-sm font-medium">{edu.extra}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">Certificates</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                icon: "🐍", 
                title: "Python Development Certificate", 
                org: "HackerRank", 
                year: "2025",
                color: "from-yellow-600 to-orange-600"
              },
              { 
                icon: "💬", 
                title: "Effective Communication Certificate", 
                org: "Coursera", 
                year: "2025",
                color: "from-orange-600 to-red-600"
              }
            ].map((cert, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 p-8 rounded-3xl shadow-xl hover:shadow-yellow-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-yellow-500/50"
                onMouseEnter={() => setHoveredCard(`cert-${idx}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative flex items-start gap-6">
                  <div className={`bg-gradient-to-br ${cert.color} p-4 rounded-2xl text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-white mb-2 group-hover:text-yellow-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-blue-300 text-base font-medium">{cert.org}</p>
                    <p className="text-gray-400 text-sm mt-1">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-blue-400/30 p-12 rounded-3xl text-center shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Contribute
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Fresh graduate with internship experience, ready to bring enthusiasm and modern skills to your team.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="#contact"
                className="group/btn relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 font-semibold text-lg shadow-lg hover:shadow-green-500/50 hover:scale-105"
              >
                <span>Let's Connect</span>
                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                href="/ad.pdf"
                download
                className="group/btn relative bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 font-semibold text-lg shadow-lg hover:shadow-white/50 hover:scale-105"
              >
                <span>📄</span>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;