'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed">
            I'm currently based in Atlanta, Georgia. Feel free to reach out for collaborations, 
            opportunities, or just to say hi!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={`mailto:${portfolioData.contact.email}`}
              className="flex items-center gap-3 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-2xl font-bold border border-gray-100 hover:border-blue-100 transition-all transform hover:-translate-y-1"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href={portfolioData.contact.linkedin}
              target="_blank"
              className="flex items-center gap-3 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-2xl font-bold border border-gray-100 hover:border-blue-100 transition-all transform hover:-translate-y-1"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href={portfolioData.contact.github}
              target="_blank"
              className="flex items-center gap-3 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-2xl font-bold border border-gray-100 hover:border-blue-100 transition-all transform hover:-translate-y-1"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Aaditya Joshi. Built with precision.</p>
          <div className="flex gap-8">
            <a href="#hero" className="hover:text-blue-600 transition-colors font-medium">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
