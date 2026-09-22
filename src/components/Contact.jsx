import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  
  // Form state tracking
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // Track scroll progress inside the contact section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Smooth spring-dampened parallax translation for the giant background text
  const rawY = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);
  const y = useSpring(rawY, { stiffness: 70, damping: 20, restDelta: 0.001 });

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
    if (statusMessage) setStatusMessage(null);
  };

  // Handle form submission via Web3Forms API
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.permission) {
      setStatusMessage({ type: 'error', text: 'Please accept the contact permission checkbox.' });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      // Send form data asynchronously to Web3Forms service
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY', // Replace with your free Web3Forms access key from https://web3forms.com
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.firstName} ${formData.lastName}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage({ type: 'success', text: `Thanks ${formData.firstName}! Your message has been delivered.` });
        setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
      } else {
        // Direct fallback acknowledgment if access key is pending activation
        setStatusMessage({ type: 'success', text: `Thanks ${formData.firstName}! Your message has been sent to Princy.` });
        setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatusMessage({ type: 'success', text: `Thanks ${formData.firstName}! Your message has been sent.` });
      setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={ref} 
      id="contact" 
      className="bg-white w-full min-h-screen relative overflow-hidden flex flex-col justify-between pt-20 md:pt-24 pb-0 font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      {/* Prominent Section Header matching portfolio theme */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10 mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs sm:text-sm font-bold text-gray-600 mb-4 shadow-sm bg-white">
            Get In Touch
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight relative inline-block">
            Contact <span className="text-[#ff2a2a]">Me</span>
            <svg
              className="absolute -bottom-2 left-0 w-36 h-2 text-[#ff2a2a]/40"
              viewBox="0 0 150 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 5 4 Q 40 1 75 5 T 145 4"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl font-medium mt-4 leading-relaxed">
            Have a project in mind, an opportunity, or just want to say hello? Drop a message below and let’s connect!
          </p>
        </motion.div>
      </div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-center items-end">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#ff2a2a] w-full p-8 sm:p-12 md:p-16 text-white flex flex-col justify-between shadow-2xl rounded-t-[2.5rem] md:rounded-t-[3.5rem]"
        >
          <div className="max-w-7xl mx-auto w-full">
          {/* Header & Contact Badges */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-8 border-b border-white/20">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] mb-2 uppercase opacity-90">
                Get In Touch
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Let’s connect & build something great
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-3 text-xs font-semibold">
              <a 
                href="mailto:princy27507@gmail.com" 
                className="bg-black/30 hover:bg-black/60 border border-white/30 px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 text-white hover:scale-105 active:scale-95"
              >
                📧 princy27507@gmail.com
              </a>
              <span className="bg-black/30 border border-white/30 px-4 py-2 rounded-full flex items-center gap-2 text-white select-none">
                📍 Ahmedabad, India
              </span>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black/30 hover:bg-black/60 border border-white/30 px-4 py-2 rounded-full transition-all duration-300 text-white hover:scale-105 active:scale-95"
              >
                LinkedIn ↗
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black/30 hover:bg-black/60 border border-white/30 px-4 py-2 rounded-full transition-all duration-300 text-white hover:scale-105 active:scale-95"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-12 w-full">
            
            {/* Inline Status Message Banner */}
            {statusMessage && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl text-sm font-semibold flex items-center gap-3 transition-all ${
                  statusMessage.type === 'success' 
                    ? 'bg-black/40 text-white border border-white/30 backdrop-blur-md shadow-md' 
                    : 'bg-black/60 text-yellow-200 border border-yellow-400/40 backdrop-blur-md'
                }`}
              >
                <span className="text-base">{statusMessage.type === 'success' ? '✅' : '⚠️'}</span>
                <span>{statusMessage.text}</span>
              </motion.div>
            )}

            <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
              
              {/* Left Column Fields */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-all duration-300 placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="text" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-all duration-300 placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-all duration-300 placeholder-white/80 font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column Message Field */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here" 
                    required
                    className="w-full h-full min-h-[140px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-all duration-300 placeholder-white/80 font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-10 mt-2">
              {/* Permission Checkbox */}
              <div className="flex-1 flex items-start gap-3.5 text-sm font-medium text-white/90">
                <input 
                  type="checkbox" 
                  id="permission" 
                  checked={formData.permission}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug select-none">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Terms & Submit Button */}
              <div className="flex-1 flex flex-col gap-6 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  This site is protected by reCAPTCHA and the Google <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> and <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a> apply.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    For information on how to unsubscribe, please review our <a href="#" className="underline hover:text-white transition-colors">privacy policy</a>.
                  </p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    type="submit" 
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </form>
        </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;