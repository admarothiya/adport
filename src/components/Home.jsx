import { useState, useEffect } from 'react';

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profilePic = "/we.jpg";

  return (            
    <section className="relative flex flex-col items-center justify-center min-h-screen px-8 lg:px-12 bg-slate-950 text-white overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div 
        className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-purple-600/10 to-transparent"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* "Available for Hiring" Tag */}
      <div className="absolute top-18 right-5 flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold px-5 py-2 rounded-full shadow-2xl z-50">
        <span className="relative flex h-3 w-3 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        Available for Hiring
      </div>

      <div className="container mx-auto max-w-full px-6 lg:px-12 relative z-10">
        
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-2xl">👨‍💻</span>
              <span className="text-sm font-medium text-gray-300">Full Stack Developer</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6 py-10 px-15">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                <span className="block text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Aditya
                </span>
                <span className="block text-white">Kumawat</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                Building <span className="text-blue-400 font-semibold">production-ready</span> applications with modern tech stack. Ready to bring your ideas to life.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex px-15 flex-wrap gap-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Let's Talk</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              
              <a
                href="/ad.pdf"
                download
                className="group px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl font-bold hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Resume</span>
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center px-15 gap-4 pt-6">
              <span className="text-sm text-gray-500">Connect with me</span>
              <div className="flex gap-3">
                {['Github', 'LinkedIn', 'Twitter'].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:scale-110"
                  >
                    <span className="text-xs font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Profile */}
          <div className={`relative transform transition-all py-10 duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative mx-auto w-fit">
              
              {/* Decorative Elements */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 animate-pulse-slow"></div>
              
              {/* Main Image Container */}
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900">
                  <img
                    src={profilePic}
                    alt="Aditya Kumawat"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-2xl animate-float border-4 border-slate-950">
                  <div className="text-center">
                    <div className="text-2xl font-black">1+</div>
                    <div className="text-xs opacity-90">Years Exp</div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl shadow-2xl animate-float animation-delay-2000 border-4 border-slate-950">
                  <div className="text-center">
                    <div className="text-2xl font-black">100%</div>
                    <div className="text-xs opacity-90">Dedication</div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl shadow-2xl animate-bounce-slow border-4 border-slate-950">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 15H6l7-14v8h5l-7 14v-8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { value: '64.8%', label: 'BCA Score', icon: '🎓', color: 'from-blue-500 to-cyan-500' },
            { value: '2+', label: 'Certifications', icon: '🏆', color: 'from-purple-500 to-pink-500' },
            { value: '1+', label: 'Live Projects', icon: '🚀', color: 'from-green-500 to-emerald-500' },
            { value: '100%', label: 'Client Satisfaction', icon: '⭐', color: 'from-orange-500 to-red-500' }
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 hover:-translate-y-2 cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
              
              <div className="relative z-10 text-center space-y-2">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} scale-x-0 group-hover:scale-x-100 transition-transform rounded-b-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <div className="mt-20 py-1 overflow-hidden">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-400">Tech Stack</h3>
          </div>
          <div className="flex gap-8 animate-scroll-left">
            {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind',  'python', 'PostgreSQL', 'React', ].map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 font-semibold whitespace-nowrap hover:bg-white/10 hover:scale-110 transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll-down"></div>
        </div>
        <span className="text-xs text-gray-500 font-semibold tracking-widest">SCROLL</span>
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

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-bounce-slow {
          animation: bounce 3s infinite;
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
}

export default Home;