import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const scrollRef = useRef(null);

  const certificationsData = [
    {
      title: 'Exploratory Data Analysis for Machine Learning',
      issuer: 'IBM',
      date: 'May 2026',
      category: 'Machine Learning & Data Science',
      description: 'Advanced exploratory analysis, statistical modeling, data visualization, and feature engineering for machine learning pipelines.',
    },
    {
      title: 'Introduction to HTML, CSS & JavaScript',
      issuer: 'IBM',
      date: 'December 2025',
      category: 'Web Development',
      description: 'Foundational front-end web development, responsive web design, DOM manipulation, and modern JavaScript ES6+ standards.',
    },
    {
      title: 'Inheritance and Data Structures in Java',
      issuer: 'Penn University',
      date: 'July 2025',
      category: 'Software Engineering',
      description: 'Object-oriented programming, class hierarchies, inheritance, polymorphism, recursive algorithms, and data structure performance.',
    },
    {
      title: 'Introduction to Java',
      issuer: 'LearnQuest',
      date: 'December 2024',
      category: 'Programming Fundamentals',
      description: 'Core Java syntax, control flow logic, methods, memory management, array manipulation, and object-oriented fundamentals.',
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="certifications"
      className="w-full bg-white font-sans py-20 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-7xl mx-auto relative w-full">
        {/* Top Header & Slider Controls */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 relative w-full z-20"
        >
          <div className="relative max-w-xl">
            <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-bold text-gray-600 mb-4 shadow-sm bg-white">
              My Certifications
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight relative inline-block">
              Verified Credentials & Degrees
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
          </div>

          {/* Prev / Next Slider Navigation Buttons */}
          <div className="flex gap-3 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              className="p-3.5 sm:p-4 rounded-full border border-gray-300 text-gray-800 bg-white hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white hover:scale-105 active:scale-95 shadow-sm transition-all duration-300 flex items-center justify-center cursor-pointer"
              aria-label="Previous Certifications"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3.5 sm:p-4 rounded-full border border-gray-300 text-gray-800 bg-white hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white hover:scale-105 active:scale-95 shadow-sm transition-all duration-300 flex items-center justify-center cursor-pointer"
              aria-label="Next Certifications"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Carousel Cards Track with Responsive Scale & Lift Effects */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-4 pl-1 pr-4 select-none scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group w-[260px] sm:w-[310px] md:w-[340px] bg-white border border-gray-200 rounded-[2rem] p-1.5 sm:p-2 relative flex flex-col items-center hover:scale-[1.03] hover:-translate-y-2 hover:border-red-400 hover:shadow-[0_25px_50px_rgba(255,42,42,0.18)] active:scale-[0.98] transition-all duration-500 shrink-0"
            >
              {/* Lanyard Hole Punch */}
              <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] absolute top-3 border border-gray-300 z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-full opacity-10"></div>
              </div>

              {/* Inner Card Content */}
              <div className="w-full h-full rounded-[1.4rem] mt-6 p-5 sm:p-6 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] bg-[#f4f4f4] group-hover:bg-red-50/40 transition-colors duration-500">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-[#ff2a2a]/90">
                      {cert.category}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold font-mono text-gray-400">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base md:text-lg font-black text-gray-900 tracking-tight mb-2 group-hover:text-[#ff2a2a] group-hover:translate-x-0.5 transition-all duration-300 leading-snug">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-bold text-gray-700 mb-3">
                    Issued by <span className="text-[#ff2a2a] font-extrabold">{cert.issuer}</span>
                  </div>

                  <p className="text-gray-500 text-xs leading-relaxed font-medium">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 mt-4 flex items-center justify-between text-[11px] font-extrabold text-gray-400 uppercase tracking-wide">
                  <span>Credential Status</span>
                  <span className="text-emerald-600 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Caveat subtitle note */}
        <div className="mt-8 text-center">
          <span className="font-['Caveat',cursive] text-2xl text-gray-400 inline-block transform rotate-1">
            Total of {certificationsData.length} verified credentials.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
