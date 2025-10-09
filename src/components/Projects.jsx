import { useState } from "react";

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projectList = [
    {
      title: "Rock Paper Scissors Game",
      description:
        "A fun and interactive Rock Paper Scissors game built with JavaScript and python Flask. Play against the computer and test your luck with smooth animations and instant results.",
      image: "/rps.png",
      liveLink: "https://python-2r54.onrender.com",
      codeLink: "https://github.com/admarothiya/Python",
      badge: "Production-Level Skills Demo",
      featured: true,
      tech: ["Python","Flask", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Fake Headlines Generator",
      description:
        "Generate fake news headlines using Python and NLP. This project showcases text generation and natural language processing techniques in action.",
      image: "/fake-headlines-generator.jpg",
      liveLink: "https://fake-headline-generator.onrender.com",
      codeLink: "https://github.com/admarothiya/ff",
      badge: "In Development",
      featured: false,
      tech: ["Python", "NLP", "Flask"],
      color: "from-purple-500 to-pink-500"
    },
  //   {
  //     title: "Dosedefence",
  //     description:
  //       "A comprehensive healthcare management system designed to streamline patient care, appointment scheduling, and medical record keeping for clinics and hospitals.",
  //     image: "/download.jpg",
  //     liveLink: "https://dosedefence.com/",
  //     codeLink: "#",
  //     badge: "Featured Project",
  //     featured: true,
  //     tech: ["React", "Node.js", "MongoDB"],
  //     color: "from-green-500 to-emerald-500"
  //   },
  ];

  return (
    <section className="relative py-20 px-6 md:px-10 lg:px-16 bg-slate-950 min-h-screen text-gray-100 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold tracking-wider">
              💼 MY WORK
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black">
            <span className="block text-white mb-2">Real</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Business Impact
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Live applications serving real users with{" "}
            <span className="text-blue-400 font-semibold">production-grade architecture</span> and modern technologies
          </p>

          {/* Stats Bar */}
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-black text-white">{projectList.length}+</div>
              <div className="text-sm text-gray-500">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white">100%</div>
              <div className="text-sm text-gray-500">Live & Working</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white">24/7</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 ${
                hoveredIndex === index ? 'scale-[1.02] shadow-2xl' : ''
              }`}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="relative flex flex-col lg:flex-row">
                
                {/* Image Section */}
                <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Featured Badge on Image */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-yellow-500 text-black px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Featured
                    </div>
                  )}

                  {/* Status Badge on Image */}
                  <div className={`absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border ${
                    project.badge.includes("Production")
                      ? "bg-green-500/90 border-green-400"
                      : project.badge.includes("Development")
                      ? "bg-yellow-500/90 border-yellow-400 text-black"
                      : "bg-blue-500/90 border-blue-400"
                  }`}>
                    {project.badge}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
                  
                  {/* Title & Description */}
                  <div className="space-y-4 mb-6">
                    <h3 className="text-3xl lg:text-4xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/btn relative px-6 py-3 bg-gradient-to-r ${project.color} rounded-xl font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl flex items-center gap-2`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    </a>

                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn px-6 py-3 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-xl font-bold hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`h-1 bg-gradient-to-r ${project.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center space-y-6 p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl">
          <h3 className="text-3xl font-bold text-white">Have a project in mind?</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate and build something amazing together. I'm always excited to work on new and challenging projects.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold hover:scale-105 transition-all hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span>Start a Project</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

export default Projects;