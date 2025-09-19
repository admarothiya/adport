import profilePic from "../assets/ws.jpg"; 

function Home() {
  return (            
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-32 md:pt-26 px-6 py-12 bg-gradient-to-br from-[#2a2d6a] via-[#3d3a52] to-[#2b2d42] dark:text-gray-100 overflow-hidden">
      
      {/* "Available for Hiring" Tag */}
      <div className="absolute top-5 right-5 flex items-center bg-green-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg z-10">
        <span className="relative flex h-2.5 w-2.5 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        Available for Hiring
      </div>

      <div className="container mx-auto flex flex-col items-center text-center mt-20 md:mt-0">
        
        {/* Main Content: Text and Image */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 px-4">
          
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Hi, I'm <span className="text-blue-300">Aditya Kumawat</span>
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-200 mb-6">
              Full Stack Developer
            </h2>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-green-400 hover:bg-green-500 text-white font-bold px-7 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                Hire Me Now
              </a>
              <a
                href="/resume.pdf"
                download
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-7 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>

            <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
              Production-ready developer with <span className="text-blue-300">live experience</span>.<br />
            </p>
          </div>

          {/* Right Side: Profile Picture */}
          <div className="relative flex-shrink-0 mt-10 md:mt-0">
            <div className="w-72 h-65 lg:w-80 lg:h-80 rounded-full border-8 border-white shadow-2xl overflow-hidden mx-auto">
              <img
                src={profilePic}
                alt="Aditya Kumawat"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-green-400 p-3 rounded-full shadow-lg flex items-center justify-center border-2 border-white">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 15H6l7-14v8h5l-7 14v-8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats Section with Hover Effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 md:gap-8 mt-20 md:mt-24 max-w-4xl w-full text-center">
          
          {/* BCA Score */}
          <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20
                          transition-transform transform hover:scale-105 hover:bg-white/20 hover:shadow-2xl cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300 group-hover:text-blue-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12v7a2 2 0 002 2h18a2 2 0 002-2v-7" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-white mt-2">64.8%</span>
            <span className="text-sm text-gray-300">BCA Score</span>
          </div>

          {/* Certifications */}
          <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20
                          transition-transform transform hover:scale-105 hover:bg-white/20 hover:shadow-2xl cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-white mt-2">2+</span>
            <span className="text-sm text-gray-300">Certifications</span>
          </div>

          {/* Live Projects */}
          <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20
                          transition-transform transform hover:scale-105 hover:bg-white/20 hover:shadow-2xl cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-white mt-2">1+</span>
            <span className="text-sm text-gray-300">Live Projects</span>
          </div>

          {/* 100% Ready */}
          <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20
                          transition-transform transform hover:scale-105 hover:bg-white/20 hover:shadow-2xl cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-white mt-2">100%</span>
            <span className="text-sm text-gray-300">Ready</span>
          </div>

        </div>

      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 animate-bounce text-white text-3xl">
        &#x2193;
      </div>
    </section>
  );
}

export default Home;
