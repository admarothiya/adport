import { useState } from "react";

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillsData = {
    frontend: [
      { name: "React.js", level: 90, certified: true, icon: "⚛️", color: "from-cyan-500 to-blue-500" },
      { name: "JavaScript", level: 85, certified: false, icon: "🟨", color: "from-yellow-500 to-orange-500" },
      { name: "HTML5", level: 95, certified: false, icon: "🔶", color: "from-orange-500 to-red-500" },
      { name: "CSS3", level: 90, certified: true, icon: "🎨", color: "from-blue-500 to-indigo-500" },
      { name: "Bootstrap", level: 80, certified: false, icon: "💜", color: "from-purple-500 to-pink-500" },
    ],
    backend: [
      { name: "Node.js", level: 85, certified: false, icon: "🟢", color: "from-green-500 to-emerald-500" },
      { name: "Express.js", level: 80, certified: false, icon: "⚡", color: "from-gray-500 to-slate-500" },
      { name: "MongoDB", level: 85, certified: false, icon: "🍃", color: "from-green-600 to-teal-600" },
      { name: "Django", level: 75, certified: false, icon: "🐍", color: "from-green-700 to-emerald-700" },
      { name: "Python", level: 80, certified: false, icon: "🐍", color: "from-blue-600 to-cyan-600" },
    ],
    tools: [
      { name: "Git", level: 85, certified: false, icon: "🔀", color: "from-orange-600 to-red-600" },
      { name: "VS Code", level: 90, certified: false, icon: "💻", color: "from-blue-500 to-cyan-500" },
      { name: "Postman", level: 85, certified: false, icon: "📮", color: "from-orange-500 to-red-500" },
      { name: "npm", level: 85, certified: false, icon: "📦", color: "from-red-600 to-pink-600" },
    ],
  };

  const categories = [
    { id: "all", name: "All Skills", icon: "🚀" },
    { id: "frontend", name: "Frontend", icon: "💻" },
    { id: "backend", name: "Backend", icon: "⚙️" },
    { id: "tools", name: "Tools", icon: "🛠️" },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return [...skillsData.frontend, ...skillsData.backend, ...skillsData.tools];
    }
    return skillsData[activeCategory] || [];
  };

  return (
    <section className="relative min-h-screen px-6 py-20 lg:px-16 bg-slate-950 text-white overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full text-green-400 text-sm font-semibold tracking-wider">
              🟢 PRODUCTION-READY SKILLS
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
            <span className="block text-white mb-2">Technical</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <span className="text-green-400 font-semibold">HackerRank certified</span> skills with{" "}
            <span className="text-blue-400 font-semibold">production experience</span> and proven track record
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {[
            { value: "14+", label: "Technologies", icon: "🚀", color: "from-blue-500 to-cyan-500" },
            { value: "2", label: "Certifications", icon: "🏆", color: "from-purple-500 to-pink-500" },
            { value: "85%+", label: "Avg Proficiency", icon: "📊", color: "from-green-500 to-emerald-500" },
            { value: "100%", label: "Production Ready", icon: "✅", color: "from-orange-500 to-red-500" },
          ].map((stat, i) => (
            <div
              key={i}
              className="relative group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
              <div className="relative z-10 text-center space-y-2">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-purple-500/30 scale-105"
                  : "bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 cursor-pointer"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
              
              <div className="relative z-10 space-y-4">
                {/* Skill Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{skill.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                      {skill.certified && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-400 mt-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Certified
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-2xl font-black text-white">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>

                {/* Skill Level Label */}
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                  <span>{skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}</span>
                  <span className="text-white">{skill.level >= 85 ? "Production Ready ✅" : "Learning 📚"}</span>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} scale-x-0 group-hover:scale-x-100 transition-transform rounded-b-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Technology Stack Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Frontend Development", icon: "💻", skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"], color: "from-blue-500 to-cyan-500" },
            { title: "Backend Development", icon: "⚙️", skills: ["Node.js", "Express.js", "MongoDB", "Django", "Python"], color: "from-purple-500 to-pink-500" },
            { title: "Development Tools", icon: "🛠️", skills: ["Git", "VS Code", "Postman", "npm"], color: "from-green-500 to-emerald-500" },
          ].map((stack, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stack.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{stack.icon}</div>
                  <h3 className="text-xl font-bold">{stack.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {stack.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 bg-gradient-to-r ${stack.color} bg-opacity-20 backdrop-blur-sm rounded-lg text-sm font-medium border border-white/10 hover:border-white/30 transition-all`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-md border border-white/10 rounded-3xl p-10 text-center space-y-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project. I bring production-ready skills and a passion for creating exceptional digital experiences.
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/#contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2"
              >
                <span>Hire Me Now</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a
                href="/ad.pdf"
                download
                className="group px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl font-bold hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll-down"></div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default SkillsPage;