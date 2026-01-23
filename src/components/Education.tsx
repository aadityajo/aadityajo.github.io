'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.institution}</h3>
              <div className="text-blue-600 font-medium mb-4">{edu.degree}</div>
              
              <div className="flex items-center gap-2 text-gray-500 text-sm font-medium bg-white px-3 py-1.5 rounded-lg inline-flex border border-gray-100">
                <Calendar size={14} />
                <span>{edu.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
