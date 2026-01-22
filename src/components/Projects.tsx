'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-64 bg-gray-50 relative overflow-hidden flex items-center justify-center p-8">
                {project.image ? (
                   <div className="relative w-full h-full">
                     <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                   </div>
                ) : (
                  <div className="text-4xl font-bold text-gray-200 uppercase tracking-widest italic">
                    {project.title.split(' ')[0]}
                  </div>
                )}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors" />
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mt-1">{project.role}</p>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                    >
                      {project.title.includes('Contributor') ? 'View Code' : 'View Project'}
                      <ExternalLink size={18} />
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
