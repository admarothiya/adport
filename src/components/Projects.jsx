import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Rock Paper Scissors Game",
      description:
        "A fun and interactive Rock Paper Scissors game built with JavaScript. Play against the computer and test your luck with smooth animations and instant results.",
      image: "/rps.png",
      liveLink: "https://python-2r54.onrender.com",
      codeLink: "#",
      badge: "Production-Level Skills Demo",
      featured: true,
    },
    {
      title: "Fake Headlines Generator",
      description:
        "Generate fake news headlines using Python and NLP. This project showcases text generation and natural language processing techniques in action.",
      image: "/fake-headlines-generator.jpg",
      liveLink: "https://fake-headline-generator.onrender.com",
      codeLink: "#",
      badge: "In Development",
      featured: false,
    },
    {
      title: "StarWay Collections",
      description:
        "College capstone project - Complete e-commerce solution with payment gateway, user authentication, and admin dashboard. Demonstrates production-level development skills.",
      image: "/assets/ecommerce-platform.png",
      liveLink: "#",
      codeLink: "#",
      badge: "Featured Project",
      featured: true,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen text-gray-100">
      <h3 className="text-4xl font-bold text-center mb-4 text-white">
        Real <span className="text-blue-400">Business Impact</span>
      </h3>
      <p className="text-center text-lg text-gray-300 mb-12">
        Live applications serving real users with production-grade architecture and modern technologies
      </p>

      <div className="flex flex-col gap-12 items-center">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl w-full hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            {/* Left: Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/3 h-52 md:h-auto object-cover"
            />

            {/* Right: Project Details */}
            <div className="p-6 flex flex-col justify-between">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.badge.includes("Production")
                      ? "bg-green-500"
                      : project.badge.includes("Development")
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                >
                  {project.badge}
                </span>
                {project.featured && (
                  <span className="bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    Featured Project
                  </span>
                )}
              </div>

              {/* Title + Description */}
              <h4 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h4>
              <p className="text-gray-300 mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition"
                >
                  View Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-medium transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;