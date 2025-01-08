import React from 'react';
import { Github, Globe } from 'lucide-react';
import backgroundimage from '../assets/backgroundimage.avif';
import ecommercewebimage from '../assets/ecommerceweb.png';
import admindashboardimage from '../assets/admindashboard.png';

const ProjectsPage = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background Image with Overlay - Removed blur, adjusted opacity */}
      <div 
  className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${backgroundimage})`,
    backgroundBlendMode: "overlay"
  }}
>
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-blue-900/70"></div>
</div>

      {/* Navbar - Removed backdrop blur */}
   <nav className="bg-slate-900/95 text-white py-4 px-6 fixed w-full z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Portfolio</div>
          <div className="space-x-6">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="/About" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>


      {/* Main Content */}
      <div className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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

      {/* Footer - Removed backdrop blur */}
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
    </div>
  );
};

export default ProjectsPage;