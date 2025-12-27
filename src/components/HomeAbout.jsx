import React from 'react';
import { motion } from 'framer-motion';

const HomeAbout = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 relative z-10">
      
      {/* 1. Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            <h2 className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase">
            Identity Verified
            </h2>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold text-white">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Dual-Stack</span> Engineer.
        </h3>
      </motion.div>

      {/* 2. The Content Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* LEFT CARD: The Developer */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/10 relative overflow-hidden group hover:border-indigo-500/50 transition-colors"
        >
          {/* Blue Glow Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition duration-500"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-3xl mb-6 text-indigo-400">
              🛠️
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">The Architect</h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              I build scalable, high-performance web applications. My focus is on Clean Architecture and User Experience using modern tech.
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs font-bold border border-indigo-500/20">React</span>
                <span className="px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs font-bold border border-indigo-500/20">Astro</span>
                <span className="px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs font-bold border border-indigo-500/20">Tailwind</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CARD: The Security Specialist */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/10 relative overflow-hidden group hover:border-red-500/50 transition-colors"
        >
          {/* Red Glow Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] group-hover:bg-red-500/20 transition duration-500"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center text-3xl mb-6 text-red-400">
              🛡️
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">The Breaker</h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              I don't just build; I test. Using offensive security techniques, I identify vulnerabilities before attackers do.
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md bg-red-500/10 text-red-300 text-xs font-bold border border-red-500/20">Kali Linux</span>
                <span className="px-3 py-1 rounded-md bg-red-500/10 text-red-300 text-xs font-bold border border-red-500/20">Pen-Testing</span>
                <span className="px-3 py-1 rounded-md bg-red-500/10 text-red-300 text-xs font-bold border border-red-500/20">Cryptography</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeAbout;