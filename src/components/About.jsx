function About() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-gray-800 to-blue-900 text-white py-20 px-4 md:px-10">
      {/* Top Text Section */}
      <div className="text-center mb-16">
        <button className="bg-blue-700 text-white text-sm px-4 py-1 rounded-full mb-4">
          💡 Why Choose Me
        </button>
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Immediate <span className="text-green-400">Business Value</span>
        </h1>
        <p className="mt-2 text-green-400 font-medium">
          64.8% BCA graduate currently building{' '}
          <span className="text-blue-300">production e-commerce platforms</span>
        </p>
      </div>

      {/* Grid Boxes */}
      <div className="grid md:grid-cols-2 gap-6 mb-20 justify-items-center w-full max-w-6xl mx-auto">
        {/* Box 1 */}
        <div className="w-full h-52 bg-gray-800 bg-opacity-80 border border-white border-opacity-20 rounded-xl p-4 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-xl font-bold mb-2">Production Experience</h2>
          <p className="mb-3 text-gray-300">
            Building live e-commerce platforms at 8bit System with real business impact
          </p>
          <span className="inline-block bg-green-800 text-green-300 text-sm font-medium px-3 py-1 rounded-full">
            🏆 Live Revenue Platform
          </span>
        </div>

        {/* Box 2 */}
        <div className="w-full h-52 bg-gray-800 bg-opacity-40 border border-white border-opacity-20 rounded-xl p-4 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-xl font-bold mb-2">Academic Excellence</h2>
          <p className="mb-3 text-gray-300">
            64.8% BCA graduate with consistent improvement and technical specialization
          </p>
          <span className="inline-block bg-green-800 text-green-300 text-sm font-medium px-3 py-1 rounded-full">
            🏆 Top 10% Performance
          </span>
        </div>

        {/* Box 3 */}
        <div className="w-full h-52 bg-gray-800 bg-opacity-40 border border-white border-opacity-20 rounded-xl p-4 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-xl font-bold mb-2">Industry Certifications</h2>
          <p className="mb-3 text-gray-300">
            2+ verified certifications including HackerRank React and CSS expertise
          </p>
          <span className="inline-block bg-green-800 text-green-300 text-sm font-medium px-3 py-1 rounded-full">
            🏅 HackerRank Verified
          </span>
        </div>

        {/* Box 4 */}
        <div className="w-full h-52 bg-gray-800 bg-opacity-40 border border-white border-opacity-20 rounded-xl p-4 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-xl font-bold mb-2">Rapid Learning</h2>
          <p className="mb-3 text-gray-300">
            Mastered full-stack development in 8 months with production-ready skills
          </p>
          <span className="inline-block bg-green-800 text-green-300 text-sm font-medium px-3 py-1 rounded-full">
            🚀 8 Months to Production
          </span>
        </div>
      </div>

      {/* Bottom Contribution Section */}
      <div className="w-full max-w-6xl mx-auto bg-gradient-to-r from-green-800 to-blue-900 rounded-xl py-10 px-6 text-center border border-green-400 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          <span className="text-green-300">Ready to Contribute</span> From Day One
        </h2>

        {/* Metrics */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-lg font-medium mb-6">
          <div>
            <div className="text-3xl font-extrabold text-white">0</div>
            <div className="text-gray-200">Training Days</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">1</div>
            <div className="text-gray-200">Live Platform</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">100%</div>
            <div className="text-gray-200">Commitment</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full transition duration-300">
          <a href="#contact" className="text-white">
            🤝 Let’s Work Together
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
