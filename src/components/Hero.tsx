'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Hi, I'm <span className="text-blue-600">Aaditya Joshi</span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Lead Software Engineer & MS CS Student at Georgia Tech
          </motion.p>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-500 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Architecting high-availability systems, modernizing legacy infrastructure, and building scalable cloud solutions.
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#experience" 
              className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-200"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="/aaditya_resume.pdf" 
              target="_blank"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-blue-50 transition-all transform hover:-translate-y-1"
            >
              <FileText size={20} />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
