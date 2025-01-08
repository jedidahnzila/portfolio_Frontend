import React from 'react';
import backgroundimage from '../assets/backgroundimage.avif'

const AboutPage = () => {
  const skills = {
    frontend: [
      { name: 'React', level: 'Advanced', icon: '⚛️', color: 'from-sky-400/60 to-blue-400/60' },
      { name: 'Tailwind CSS', level: 'Advanced', icon: '🎨', color: 'from-teal-400/60 to-emerald-400/60' },
      { name: 'JavaScript', level: 'Advanced', icon: '📜', color: 'from-amber-400/60 to-yellow-400/60' },
      { name: 'HTML', level: 'Advanced', icon: '🌐', color: 'from-rose-400/60 to-pink-400/60' }
    ],
    backend: [
      { name: 'Node.js', level: 'Advanced', icon: '🟢', color: 'from-emerald-400/60 to-green-400/60' },
      { name: 'MySQL', level: 'Advanced', icon: '🗄️', color: 'from-indigo-400/60 to-violet-400/60' }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0" 
        style={{
      backgroundImage: `url(${backgroundimage})`,
      backgroundBlendMode: "overlay"
    }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-blue-900/70"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-slate-900/95 text-white py-4 px-6 fixed w-full z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Portfolio</div>
          <div className="space-x-6">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-400 transition-colors">About</a>
            <a href="/Project" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow relative z-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Animated About Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-white animate-gradient">
              About Me
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-text-slide">
              I'm a passionate Full Stack Developer with expertise in both frontend and backend technologies.
              My journey in web development has equipped me with a strong foundation in creating responsive,
              user-friendly applications with robust backend systems.
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-16">
            {/* Frontend Skills */}
            <div className="opacity-0 animate-slide-in">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">
                Frontend Development
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.frontend.map((skill, index) => (
                  <div
                    key={index}
                    className="relative group opacity-0 animate-pop-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-slate-800/50 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="text-4xl mb-4 animate-bounce-in">{skill.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                      <p className="text-gray-300">{skill.level}</p>
                      <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${skill.color} w-0 rounded-full animate-fill-bar`}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="opacity-0 animate-slide-in" style={{ animationDelay: '400ms' }}>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">
                Backend Development
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.backend.map((skill, index) => (
                  <div
                    key={index}
                    className="relative group opacity-0 animate-pop-in"
                    style={{ animationDelay: `${(index + 4) * 150}ms` }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-slate-800/50 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="text-4xl mb-4 animate-bounce-in">{skill.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                      <p className="text-gray-300">{skill.level}</p>
                      <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${skill.color} w-0 rounded-full animate-fill-bar`}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* My Approach */}
            <div className="opacity-0 animate-slide-in" style={{ animationDelay: '600ms' }}>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-slate-800/50 rounded-lg p-8 shadow-xl">
                  <h2 className="text-2xl font-bold mb-4 text-white">My Approach</h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    I believe in writing clean, maintainable code and following best practices in software development.
                    My experience with both frontend and backend technologies allows me to understand and implement
                    full-stack solutions effectively.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I'm passionate about creating seamless user experiences while ensuring robust backend functionality.
                    Continuously learning and adapting to new technologies helps me stay current with industry trends
                    and deliver modern solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Skills or Tools */}
          <div className="mt-12 relative group opacity-0 animate-slide-in" style={{ animationDelay: '800ms' }}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-800/50 rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Additional Tools & Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {['Git', 'VS Code', 'npm', 'REST APIs', 'Responsive Design'].map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-gray-200 hover:bg-white/20 transition-colors opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 100 + 1000}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/95 backdrop-blur-sm text-white py-8 relative z-1">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © 2025 Jedidah Nzila. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-blue-300 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes textSlide {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-text-slide {
            opacity: 0;
            animation: textSlide 1.5s ease-out forwards;
            animation-delay: 0.5s;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes popIn {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes fillBar {
            from { width: 0; }
            to { width: 80%; }
          }

          @keyframes bounceIn {
            0% {
              transform: scale(0);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 8s ease infinite;
          }

          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
          }

          .animate-slide-in {
            animation: slideIn 1s ease-out forwards;
          }

          .animate-pop-in {
            animation: popIn 0.6s ease-out forwards;
          }

          .animate-fill-bar {
            animation: fillBar 1s ease-out forwards;
          }

          .animate-bounce-in {
            animation: bounceIn 0.6s ease-out forwards;
          }

          .animate-fade-in {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default AboutPage;