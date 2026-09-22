import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectsData = [
    {
      title: 'CareerCompass – AI ATS Resume Tracker',
      category: 'Dual-Service AI Platform',
      date: 'June 2026',
      description:
        'Architected a dual-service full-stack platform separating React+Node.js core from Django AI/ML pipeline. Reduced resume screening time from 2 min to 25s. Engineered NLP & ML pipelines (Groq LLaMA 3.1, Random Forest, TF-IDF) validated against 60+ resumes.',
      techStack: ['React.js', 'Node.js', 'Django', 'Groq LLaMA 3.1', 'Scikit-learn', 'TF-IDF'],
      github: 'https://github.com/princy27507',
    },
    {
      title: 'AI PDF-to-MCQ Generator',
      category: 'LLM Assessment Engine',
      date: 'March 2026',
      description:
        'Built a full-stack, LLM-powered assessment system converting large PDFs into adaptive MCQs using streaming extraction. Features JWT authentication, usage analytics, AI tutor, flashcards, leaderboard tracking, and wrong-answer analysis.',
      techStack: ['FastAPI', 'React', 'Llama 3', 'Groq API', 'JWT Auth', 'Analytics'],
      github: 'https://github.com/princy27507',
    },
    {
      title: 'Begin2Code – Coding Platform',
      category: 'Coding Education Platform',
      date: 'January 2026',
      description:
        'Developed a responsive, full-stack coding-education platform for beginner programmers optimized across all devices. Integrated a Supabase-backed database and Flask backend logic to power dynamic user interactions. Live in production.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Flask', 'Supabase'],
      github: 'https://github.com/princy27507',
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white py-20 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 relative max-w-2xl"
        >
          <div className="inline-block border border-gray-300 rounded-full px-4 py-1 sm:px-5 sm:py-1.5 text-xs sm:text-sm text-gray-600 font-bold mb-5 shadow-sm bg-white">
            My Projects
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-5 tracking-tight relative">
            Building Modern Digital Solutions with Code & AI
            <svg
              className="absolute -bottom-3 left-0 w-36 sm:w-48 h-3 text-[#ff2a2a]/40"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 5 6 Q 50 1 100 7 T 195 5"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg font-medium leading-relaxed mt-6">
            A selection of production-grade platforms, full-stack web applications, and AI pipelines shipped across past projects.
          </p>
        </motion.div>

        {/* Projects Grid with Responsive Card Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group bg-white border border-gray-200 rounded-[2rem] p-1.5 sm:p-2 relative flex flex-col items-center hover:scale-[1.03] hover:-translate-y-2 hover:border-red-400 hover:shadow-[0_25px_60px_rgba(255,42,42,0.18)] active:scale-[0.99] transition-all duration-500"
            >
              {/* Lanyard Hole Punch */}
              <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] absolute top-3 border border-gray-300 z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-full opacity-10"></div>
              </div>

              {/* Inner Tag Card Content */}
              <div className="w-full h-full rounded-[1.4rem] mt-6 p-5 sm:p-6 flex flex-col justify-between min-h-[320px] sm:min-h-[340px] bg-[#f4f4f4] group-hover:bg-red-50/40 transition-colors duration-500">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-[#ff2a2a]/90 block">
                      {project.category}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-gray-400 font-mono">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight mb-3 group-hover:text-[#ff2a2a] group-hover:translate-x-0.5 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium mb-5">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills with Dynamic Hover FX */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold text-gray-700 bg-gray-200/70 border border-transparent group-hover:bg-red-500/10 group-hover:text-red-700 group-hover:border-red-300/40 rounded-full transition-all duration-300 select-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Code Button */}
                  <div className="pt-4 border-t border-gray-200/60">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn w-full px-4 py-2.5 rounded-full border border-gray-300 text-xs font-bold text-gray-800 bg-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>View Code</span>
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
