import React, { useState } from "react";

function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      title: "Production Experience",
      description: "Building live e-commerce platforms at 8bit System with real business impact",
      badge: "🏆 Live Revenue Platform",
      icon: "💼",
      gradient: "from-blue-500 to-cyan-600",
      glowColor: "blue"
    },
    {
      title: "Academic Excellence",
      description: "64.8% BCA graduate with consistent improvement and technical specialization",
      badge: "🏆 Top 10% Performance",
      icon: "🎓",
      gradient: "from-purple-500 to-pink-600",
      glowColor: "purple"
    },
    {
      title: "Industry Certifications",
      description: "2+ verified certifications including HackerRank React and CSS expertise",
      badge: "🏅 HackerRank Verified",
      icon: "📜",
      gradient: "from-orange-500 to-red-600",
      glowColor: "orange"
    },
    {
      title: "Rapid Learning",
      description: "Mastered full-stack development in 8 months with production-ready skills",
      badge: "🚀 8 Months to Production",
      icon: "⚡",
      gradient: "from-green-500 to-emerald-600",
      glowColor: "green"
    }
  ];

  const metrics = [
    { value: "0", label: "Training Days", icon: "🎯" },
    { value: "1", label: "Live Platform", icon: "🚀" },
    { value: "100%", label: "Commitment", icon: "💪" }
  ];

  return (
    <section className="min-h-screen w-full bg-slate-950 text-white py-20 px-4 md:px-10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Top Text Section with Glassmorphism */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-xl border border-blue-400/20 text-white px-6 py-3 rounded-full text-sm mb-6 shadow-xl">
            <span className="text-xl">💡</span>
            <span className="font-semibold">Why Choose Me</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-green-300 bg-clip-text text-transparent leading-tight">
            Immediate Business Value
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="text-green-400 font-bold">64.8% BCA graduate</span> currently building{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              production e-commerce platforms
            </span>
          </p>
        </div>

        {/* Grid Boxes with Premium Design */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-opacity-80"
              style={{
                borderColor: hoveredCard === idx ? 'rgba(59, 130, 246, 0.5)' : undefined
              }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow Effect */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10
                  ${feature.glowColor === 'blue' ? 'from-blue-500/20 to-cyan-500/20' : ''}
                  ${feature.glowColor === 'purple' ? 'from-purple-500/20 to-pink-500/20' : ''}
                  ${feature.glowColor === 'orange' ? 'from-orange-500/20 to-red-500/20' : ''}
                  ${feature.glowColor === 'green' ? 'from-green-500/20 to-emerald-500/20' : ''}
                `}
              ></div>

              {/* Icon Badge */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h2>
              
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Badge */}
              <div className={`inline-flex items-center bg-gradient-to-r ${feature.gradient} bg-opacity-20 backdrop-blur-sm border border-green-400/30 text-green-300 text-sm font-semibold px-4 py-2 rounded-full shadow-lg`}>
                {feature.badge}
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Contribution Section */}
        <div className="max-w-7xl h-200 mx-auto relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-2xl rounded-3xl py-16 px-8 md:px-12 text-center border border-green-400/30 shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Ready to Contribute{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                From Day One
              </span>
            </h2>

            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              No training required. Jump straight into your team and start delivering value immediately.
            </p>

            {/* Metrics with Premium Cards */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-12">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="group flex-1 max-w-xs bg-gradient-to-br from-gray-700/40 to-gray-800/40 backdrop-blur-xl border border-gray-600/50 rounded-2xl p-8 transition-all duration-300 hover:scale-110 hover:border-green-400/50 hover:shadow-2xl"
                >
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {metric.icon}
                  </div>
                  <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-300 text-lg font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button with Animation */}
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-10 py-5 rounded-full transition-all duration-300 shadow-2xl hover:shadow-green-500/50 hover:scale-110 text-lg"
            >
              <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🤝</span>
              <span>Let's Work Together</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>

            {/* Bottom Stats Bar */}
            <div className="mt-12 pt-8 border-t border-gray-600/30 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Production Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Modern Tech Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Quick Onboarding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;