'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

const Skills = () => {
  const categories = [
    { title: 'Languages', key: 'languages' },
    { title: 'Backend & Frameworks', key: 'backend' },
    { title: 'Cloud & DevOps', key: 'cloud' },
    { title: 'AI & ML', key: 'ai' },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-50">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills[cat.key as keyof typeof portfolioData.skills].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-50/50 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium border border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
