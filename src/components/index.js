import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, Send, Globe } from 'lucide-react';
import backgroundimage from '../assets/backgroundimage.avif';
import profilepic from '../assets/myprofilepic_enhanced-Photoroom.png';
import ecommercewebimage from '../assets/ecommerceweb.png';
import admindashboardimage from '../assets/admindashboard.png'

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };
  
  const fullText = "A dedicated full-stack engineer with a passion for creating dynamic and efficient web applications. With expertise in frontend technologies like React and Tailwind CSS, coupled with backend skills in Node.js and database management, I bring ideas to life through clean, scalable code.";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [index]);

  // Scroll handling
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 64; // Height of the fixed navbar
      const sectionPosition = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }
  };

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px'
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);


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

  const projects = [
  {
    name: 'E-Commerce Website',
    description: 'This project is a responsive e-commerce website designed and developed to practice and enhance web development skills. The website features a modern, user-friendly interface, ensuring an optimal shopping experience across various devices, including desktops, tablets, and mobile phones.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/jedidahnzila/E-Commerce-website',
    liveLink: 'https://rainbow-queijadas-623d5a.netlify.app',
    image: ecommercewebimage,
    bgColor: 'from-blue-400 to-purple-500',
  },
  {
    name: 'Admin Dashboard',
    description: 'This project is a prototype admin dashboard created to practice building structured and functional interfaces for administrative tasks. It features a clean design and foundational functionality, ideal for monitoring and managing data.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/jedidahnzila/Admin-DashBoard',
    liveLink: 'https://imaginative-peony-13979f.netlify.app',
    image: admindashboardimage,
    bgColor: 'from-purple-400 to-pink-500',
  },
];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  // const scrollToSection = (sectionId) => {
  //   setActiveSection(sectionId);
  //   const element = document.getElementById(sectionId);
  //   element?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background */}
        <div 
  className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${backgroundimage})`,
    backgroundBlendMode: "overlay"
  }}
>
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-blue-900/70"></div>
</div>

      {/* Navigation */}
       <nav className="bg-slate-900/95 text-white py-4 px-6 fixed w-full z-50">
        <div className="max-w-9xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Portfolio</div>
          <div className="space-x-6">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`hover:text-blue-400 transition-colors capitalize ${
                  activeSection === section ? 'text-blue-400' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow pt-16 relative z-10" id='home'>
         {/* Hero Section */}
      <div className="flex-grow pt-20 relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
                      <Download/>
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
      </div>
         <hr className="border-white-700 max-w-6xl mx-auto shadow-md shadow-white-800" />
         {/* Main Content */}
      <div className="flex-grow relative z-1" id="about">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Animated About Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-white animate-gradient">
              About Me
            </h1>
            <p className="text-xl text-gray-200 max-w-6xl mx-auto leading-relaxed animate-text-slide">
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
<hr className="border-white-700 max-w-9xl mx-auto shadow-md shadow-white-800" />
        {/* Projects Section */}
    <div className="flex-grow" id='projects'>
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-bounce">
            My Projects
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/80 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {project.name}
                  </h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-200 mb-2">Tech Stack:</h3>
                    <ul className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <li
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-gray-200 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 border border-gray-700"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
                    >
                      <Github size={20} />
                      GitHub
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
                    >
                      <Globe size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
<hr className="border-white-700 max-w-6xl mx-auto shadow-md shadow-white-800" />
        {/* Contact Page Content */}
      <div className="flex-grow relative z-1 pt-20" id='contact'>
        <div className="max-w-7xl mx-auto px-6 py-0">
          <div className="text-center mb-12 opacity-0 animate-fade-up">
            <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you're interested in collaboration opportunities, have questions about my work, or just want to connect, I'm always eager to engage in meaningful conversations. As a full-stack developer, I'm particularly excited to discuss innovative web solutions, potential projects, or share insights about technology. You can reach out through this form or connect with me directly on LinkedIn. I strive to respond to all messages within 24-48 hours and look forward to hearing your ideas, questions, or opportunities to create something amazing together.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="relative group opacity-0 animate-slide-up"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-gray-200 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-gray-200 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-gray-200 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/95 text-white py-8 relative z-10">
        <div className="max-w-9xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">© 2025 Jedidah Nzila. All rights reserved.</div>
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
      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 1s ease-out forwards;
          animation-delay: 200ms;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;