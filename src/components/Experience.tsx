'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-gray-200 ml-4"
            >
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-sm" />
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mt-1">
                      <Briefcase size={18} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 font-medium bg-gray-50 px-3 py-1 rounded-lg text-sm self-start">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-600 flex gap-3">
                      <span className="text-blue-600 mt-1.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
