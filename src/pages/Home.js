import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import profilepic from '../assets/myprofilepic_enhanced-Photoroom.png';
import backgroundimage from '../assets/backgroundimage.avif';

const DownloadIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  );
};

const HomePage = () => {
  const fullText = "A dedicated full-stack engineer with a passion for creating dynamic and efficient web applications. With expertise in frontend technologies like React and Tailwind CSS, coupled with backend skills in Node.js and database management, I bring ideas to life through clean, scalable code. My journey is driven by a love for problem-solving, continuous learning, and crafting solutions that make an impact. Dive into my portfolio to discover the projects and innovations that define my path as a developer!";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 30); // Adjust typing speed here (lower number = faster)
      
      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image with Overlay */}
     <div 
  className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${backgroundimage})`,
    backgroundBlendMode: "overlay"
  }}
>
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-blue-900/70"></div>
</div>

      {/* Navigation Bar */}
      <nav className="bg-slate-900/80 backdrop-blur-sm text-white py-4 px-6 fixed w-full z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold animate-fade-in">
            Portfolio
          </div>
          <div className="space-x-6">
            {['Home', 'About', 'Project', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `/${item}`}
                className="hover:text-blue-400 transition-colors animate-slide-down"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow pt-20 relative z-1">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-gray-900 to-transparent">
  <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
  <img
    src={profilepic}
    alt="Profile"
    className="relative w-full h-full object-cover z-20"
  />
</div>


            {/* Hero Content */}
            <div className="flex-grow space-y-6 text-center md:text-left">
              <h1 
                className="text-4xl md:text-3xl font-bold text-white animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                Hi, I'm Jedidah Nzila
              </h1>
              <p 
                className="text-xl text-gray-200 max-w-2xl animate-fade-up min-h-[150px]"
                style={{ animationDelay: "300ms" }}
              >
                {displayText}
                <span className="animate-blink">|</span>
              </p>
              
              {/* CTA Buttons */}
              <div 
                className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-up"
                style={{ animationDelay: "400ms" }}
              >
                <button className="group flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-105">
                  <a 
                    href="/Resume.docx" 
                    download="JedidahNzila.docx"
                    className="flex items-center gap-2"
                  >
                    <span className="group-hover:animate-bounce">
                      <DownloadIcon />
                    </span>
                    Download CV
                  </a>
                </button>
                <div className="flex gap-4">
                  {[
                    { Icon: Github, href: 'https://github.com/',target:"_blank" },
                    { Icon: Linkedin, href: 'https://www.linkedin.com/in/jedidah-nzila-a921a6321/',target:"_blank"  },
                    { Icon: Mail, href:"mailto:nzilajedidah@gmail.com" ,target:"_blank" }
                  ].map(({ Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-all hover:scale-110 active:scale-95"
                    >
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm text-white py-8 relative z-1">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © 2025 Jedidah Nzila. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-scale {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-slide-down {
          opacity: 0;
          animation: slide-down 0.5s ease-out forwards;
        }

        .animate-fade-up {
          opacity: 0;
          animation: fade-up 0.5s ease-out forwards;
        }

        .animate-fade-scale {
          opacity: 0;
          animation: fade-scale 0.5s ease-out forwards;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;