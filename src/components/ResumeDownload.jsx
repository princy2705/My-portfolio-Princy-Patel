import React from 'react';
import { motion } from 'framer-motion';

const ResumeDownload = () => {
  return (
    <section
      id="resume"
      className="bg-white py-20 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative"
        >
          <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs sm:text-sm font-bold text-gray-600 mb-4 shadow-sm bg-white">
            Curriculum Vitae
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.15] mb-4">
            Want to learn more? <br className="hidden sm:inline" />
            <span className="relative inline-block text-[#ff2a2a]">
              Download My Full Resume
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-[#ff2a2a]/40"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 5 4 Q 50 1 100 5 T 195 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed mt-4">
            Get a comprehensive overview of my technical experience, full-stack & AI/ML architecture, project metrics, and academic achievements.
          </p>
        </motion.div>

        {/* Portfolio Tag-Card Styled Resume Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="group bg-white border border-gray-200 rounded-[2.5rem] p-2 relative flex flex-col items-center hover:border-red-400 hover:shadow-[0_25px_60px_rgba(255,42,42,0.15)] transition-all duration-500 max-w-3xl mx-auto"
        >
          {/* Lanyard Hole Punch */}
          <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] absolute top-3.5 border border-gray-300 z-10 flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-800 rounded-full opacity-10"></div>
          </div>

          {/* Inner Content Box */}
          <div className="w-full rounded-[1.8rem] mt-7 p-6 sm:p-10 bg-[#f4f4f4] group-hover:bg-red-50/40 transition-colors duration-500 flex flex-col items-center text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 flex items-center justify-center mb-6 text-[#ff2a2a]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
              Princy Patel — Resume
            </h3>

            <p className="text-xs sm:text-sm font-semibold text-[#ff2a2a] uppercase tracking-wider mb-6">
              Full Stack Developer & AI/ML Engineer &bull; LJ University
            </p>

            {/* Highlights Chips */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-xl">
              <span className="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
                ⚡ 3 Production AI & Web Apps
              </span>
              <span className="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
                🎓 B.Tech CS (2024–2028)
              </span>
              <span className="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
                🤖 Python, React, FastAPI, Django & LLMs
              </span>
              <span className="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
                📜 4 Verified Credentials
              </span>
            </div>

            {/* Download Button */}
            <a
              href="/Princcy_Patel_Resume.pdf"
              download="Princcy_Patel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-[#ff2a2a] hover:bg-black text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-red-500/20 hover:shadow-black/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group/btn"
            >
              <span>Download Resume (PDF)</span>
              <svg
                className="w-5 h-5 transform group-hover/btn:translate-y-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ResumeDownload;
