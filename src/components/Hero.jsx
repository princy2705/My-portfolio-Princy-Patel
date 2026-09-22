import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from '../assets/hero/F-home-image.jpeg';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black flex items-center">
      {/* Full Screen Background Image */}
      <img 
        src={heroImage} 
        alt="Princy Patel - Full Screen Home" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30 z-10 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-20 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col justify-center items-start text-left pt-24 md:pt-16">
        
        {/* Left Side: Headline & Bio */}
        <div className="flex flex-col items-start text-left max-w-xl lg:max-w-2xl w-full">
          
          {/* Status Badge */}
          <div 
            data-aos="fade-down"
            data-aos-delay="100"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-gray-200 font-semibold mb-6 backdrop-blur-md shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Full-Stack & AI/ML Opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.08] drop-shadow-md"
          >
            Hi, I'm <span className="text-[#ff2a2a]">Princy Patel</span>, <br /> 
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              Full Stack Developer & AI/ML Engineer
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white/90 text-base sm:text-lg lg:text-xl font-medium mb-8 max-w-xl leading-relaxed drop-shadow-md"
          >
            Full stack meets machine learning. I build responsive interfaces, secure APIs, and the AI behind them, so your product works smoothly from end to end.
          </p>

          {/* Call to Action Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap items-center gap-4 w-full"
          >
            {/* Primary Button */}
            <a 
              href="#projects" 
              className="px-7 py-3.5 text-xs sm:text-sm rounded-full bg-white text-black font-extrabold hover:bg-[#ff2a2a] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl inline-flex items-center gap-2"
            >
              <span>View Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#contact" 
              className="px-7 py-3.5 text-xs sm:text-sm rounded-full bg-black/30 border border-white/40 text-white font-extrabold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span>Contact Me</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden lg:block absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-5 h-5 text-white opacity-80" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;