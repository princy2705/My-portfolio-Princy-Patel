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
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-black flex items-center"
    >
      {/* Full Screen Background Image */}
      <img
        src={heroImage}
        alt="Princy Patel - Full Screen Home"
        className="
          absolute inset-0 w-full h-full z-0
          object-cover
          object-[70%_top]        
          sm:object-[60%_top]     
          md:object-[55%_center]  
          lg:object-center        
        "
      />

      {/* 
        Mobile: stronger left-heavy gradient so text is readable 
        and person is visible on the right side of screen.
        Desktop: original subtle gradient 
      */}
      <div
        className="
          absolute inset-0 z-10 pointer-events-none
          bg-gradient-to-r
          from-black/95 via-black/80 to-black/20
          sm:from-black/90 sm:via-black/70 sm:to-black/25
          md:from-black/90 md:via-black/65 md:to-black/30
        "
      />

      {/* Hero Content Container */}
      <div
        className="
          relative z-20 w-full max-w-7xl mx-auto
          px-5 sm:px-8 md:px-12
          pt-28 pb-20
          sm:pt-24 sm:pb-16
          md:pt-20 md:pb-12
          flex flex-col justify-center items-start text-left
        "
      >
        {/* Left Side: Headline & Bio — constrained width so person shows on right */}
        <div
          className="
            flex flex-col items-start text-left
            w-full
            max-w-[85%]     
            xs:max-w-[80%]  
            sm:max-w-lg     
            md:max-w-xl     
            lg:max-w-2xl    
          "
        >
          {/* Status Badge */}
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="
              inline-flex items-center gap-2 
              px-3 py-1.5 sm:px-4 sm:py-1.5
              rounded-full bg-white/10 border border-white/20
              text-[10px] sm:text-xs
              text-gray-200 font-semibold mb-5 sm:mb-6
              backdrop-blur-md shadow-lg
            "
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span>Available for Full-Stack & AI/ML Opportunities</span>
          </div>

          {/* Main Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="
              text-white font-black mb-5 sm:mb-6
              tracking-tight leading-[1.1]
              drop-shadow-md
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Hi, I'm{' '}
            <span className="text-[#ff2a2a]">Princy Patel</span>,{' '}
            <br className="hidden xs:block" />
            <span
              className="
                relative text-transparent bg-clip-text
                bg-gradient-to-r from-white via-white to-white/90
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]
              "
            >
              Full Stack Developer &amp; AI/ML Engineer
            </span>
          </h1>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="
              text-white/90 font-medium mb-7 sm:mb-8
              leading-relaxed drop-shadow-md
              text-sm
              sm:text-base
              lg:text-xl
              max-w-xs sm:max-w-sm md:max-w-xl
            "
          >
            Full stack meets machine learning. I build responsive interfaces,
            secure APIs, and the AI behind them — so your product works
            smoothly from end to end.
          </p>

          {/* Call to Action Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap items-center gap-3 sm:gap-4 w-full"
          >
            {/* Primary Button */}
            <a
              href="#projects"
              className="
                px-5 py-3 sm:px-7 sm:py-3.5
                text-xs sm:text-sm
                rounded-full bg-white text-black font-extrabold
                hover:bg-[#ff2a2a] hover:text-white
                transition-all duration-300 transform hover:-translate-y-0.5
                shadow-xl inline-flex items-center gap-2
              "
            >
              <span>View Projects</span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              className="
                px-5 py-3 sm:px-7 sm:py-3.5
                text-xs sm:text-sm
                rounded-full bg-black/30 border border-white/40 text-white font-extrabold
                hover:bg-white hover:text-black
                transition-all duration-300 backdrop-blur-md
                transform hover:-translate-y-0.5
                inline-flex items-center gap-2
              "
            >
              <span>Contact Me</span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden lg:block absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
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
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;