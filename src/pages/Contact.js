import React, { useState } from 'react';
import backgroundimage from '../assets/backgroundimage.avif';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

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
      <nav className="bg-slate-900/95 text-white py-4 px-6 fixed w-full z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold animate-fade-in">Portfolio</div>
          <div className="space-x-6">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="/About" className="hover:text-blue-400 transition-colors">About</a>
            <a href="/Project" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Contact Page Content */}
      <main className="flex-grow relative z-1 pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
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
      </main>

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

export default Contact;