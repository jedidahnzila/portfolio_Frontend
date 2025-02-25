import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, XCircle } from 'lucide-react';
const backend_url = process.env.REACT_APP_API_URL;

const ContactForm = () => {
  console.log({backend_url});
  useEffect(() => {
  console.log("Backend URL:", process.env.REACT_APP_API_URL);
}, []);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Clear success message after 5 seconds
  useEffect(() => {
    if (status.type === 'success') {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error messages when user starts typing
    if (status.type === 'error') {
      setStatus({ type: '', message: '' });
    }
  };

  const validateForm = () => {
    // Name validation
    if (!formState.name.trim()) {
      setStatus({ type: 'error', message: 'Name is required' });
      return false;
    }
    if (formState.name.length > 100) {
      setStatus({ type: 'error', message: 'Name must be less than 100 characters' });
      return false;
    }

    // Email validation
    if (!formState.email.trim()) {
      setStatus({ type: 'error', message: 'Email is required' });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email' });
      return false;
    }
    if (formState.email.length > 255) {
      setStatus({ type: 'error', message: 'Email must be less than 255 characters' });
      return false;
    }

    // Message validation
    if (!formState.message.trim()) {
      setStatus({ type: 'error', message: 'Message is required' });
      return false;
    }
    if (formState.message.length > 1000) {
      setStatus({ type: 'error', message: 'Message must be less than 1000 characters' });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) return;

  setIsSubmitting(true);
  setStatus({ type: '', message: '' });

  try {
    // Use the complete URL instead of relying on environment variable
    const response = await fetch(`${backend_url}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formState)
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Server error');
    }
    
    setStatus({
      type: 'success',
      message: data.message
    });
    
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    
  } catch (error) {
    console.error('Error:', error);
    setStatus({
      type: 'error',
      message: 'Unable to send message. Please try again later.'
    });
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div className="flex-grow relative z-1 pt-20" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-0">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're interested in collaboration opportunities, have questions about my work, 
            or just want to connect, I'm always eager to engage in meaningful conversations. 
            As a full-stack developer, I'm particularly excited to discuss innovative web solutions, 
            potential projects, or share insights about technology.
          </p>
        </div>

        <div className="relative">
          {/* Status Message */}
          {status.message && (
            <div 
              className={`absolute -top-16 right-0 z-10 w-full max-w-md transform transition-all duration-500 ease-in-out ${
                status.type ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
            >
              <div className={`px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 ${
                status.type === 'error' 
                  ? 'bg-red-500/90 text-white' 
                  : 'bg-green-500/90 text-white'
              }`}>
                {status.type === 'success' ? (
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 flex-shrink-0" />
                )}
                <p className="font-medium">{status.message}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-gray-200 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full bg-white/10 border border-gray-600 rounded-lg p-3 text-white 
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all 
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="Your Name"
                  maxLength={100}
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-gray-200 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full bg-white/10 border border-gray-600 rounded-lg p-3 text-white 
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all 
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="Your Email"
                  maxLength={255}
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-gray-200 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full bg-white/10 border border-gray-600 rounded-lg p-3 text-white 
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all 
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  rows="6"
                  placeholder="Your Message"
                  maxLength={1000}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                  px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all 
                  duration-300 flex items-center justify-center gap-2 disabled:opacity-50 
                  disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;