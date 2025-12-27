import React from 'react';
import BentoItem from './BentoItem';
import { StaggerContainer, StaggerItem } from './AnimatedSection'; // Import the new engine
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    // 1. WRAPPER
    <StaggerContainer className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 pb-12">
      
      {/* 2. HERO PROFILE */}
      <StaggerItem className="md:col-span-4 md:row-span-2"> 
          <BentoItem className="h-full min-h-[300px] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] border-white/10 relative overflow-hidden flex flex-col justify-between p-8 group shadow-2xl">
            {/* ... KEEP YOUR EXISTING HERO CONTENT HERE ... */}
            {/* (I am shortening the inner content to save space, but KEEP YOUR ORIGINAL CONTENT inside this BentoItem) */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-bold text-green-400 mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> OPEN TO WORK
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                    Cyber<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Architect.</span>
                </h1>
                <p className="mt-4 text-indigo-200 text-base max-w-md leading-relaxed font-light">
                    Merging offensive security with high-end design.
                </p>
             </div>
             <div className="flex flex-wrap gap-3 relative z-10 mt-6">
                <a href="/contact" className="px-6 py-2.5 rounded-xl bg-white text-indigo-950 font-bold hover:bg-gray-200 transition-colors shadow-lg flex items-center gap-2 text-sm">Let's Talk →</a>
                <a href="/projects" className="px-6 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition backdrop-blur-sm text-sm">View Work</a>
             </div>
          </BentoItem>
      </StaggerItem>

      {/* 3. GITHUB ACTIVITY */}
      <StaggerItem className="md:col-span-2 md:row-span-1">
          <BentoItem className="h-full bg-[#0a0a0a] border-white/10 p-5 flex flex-col justify-between group hover:border-white/20 transition-colors">
             {/* ... KEEP YOUR GITHUB CONTENT ... */}
             <div className="flex justify-between items-center mb-2">
                 <span className="font-bold text-gray-300 text-sm">GitHub</span>
                 <span className="text-[10px] text-green-400 font-mono bg-green-500/10 px-1.5 py-0.5 rounded">Active</span>
             </div>
             <div className="grid grid-cols-8 gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                 {[...Array(32)].map((_, i) => (
                     <div key={i} className={`w-full aspect-square rounded-[2px] ${Math.random() > 0.6 ? 'bg-green-500' : 'bg-[#1f1f1f]'}`}></div>
                 ))}
             </div>
          </BentoItem>
      </StaggerItem>

      {/* 4. TECH STACK */}
      <StaggerItem className="md:col-span-2 md:row-span-1">
          <BentoItem className="h-full bg-[#0f0f0f] border-white/10 flex items-center overflow-hidden relative group">
             {/* ... KEEP YOUR TECH SCROLL CONTENT ... */}
             <div className="flex gap-6 animate-infinite-scroll whitespace-nowrap px-4">
                {['Rust', 'Python', 'React', 'Astro', 'Kali', 'AWS'].map((tech, i) => (
                    <span key={i} className="text-gray-500 font-bold text-base group-hover:text-white transition-colors uppercase tracking-wider">{tech}</span>
                ))}
             </div>
          </BentoItem>
      </StaggerItem>

      {/* 5. CURRENT FOCUS */}
      <StaggerItem className="md:col-span-3 md:row-span-1">
          <BentoItem className="h-full bg-[#1a1a1a] border-white/10 p-5 flex items-center justify-between group">
             {/* ... KEEP YOUR FOCUS CONTENT ... */}
             <div>
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider mb-1 block">Current Focus</span>
                <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition">Zero Trust Auth</h3>
             </div>
             <div className="text-2xl">🔒</div>
          </BentoItem>
      </StaggerItem>

      {/* 6. VIBE / MUSIC */}
      <StaggerItem className="md:col-span-3 md:row-span-1">
          <BentoItem className="h-full bg-gradient-to-r from-pink-900/50 to-rose-900/50 border-white/10 p-5 flex items-center gap-5 relative overflow-hidden group">
              {/* ... KEEP YOUR MUSIC CONTENT ... */}
              <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center animate-spin-slow shadow-xl border border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
              </div>
              <div>
                  <h3 className="font-bold text-white text-base">Coding Mode</h3>
                  <p className="text-[10px] text-rose-200/80">Spotify • Deep Focus</p>
              </div>
          </BentoItem>
      </StaggerItem>

    </StaggerContainer>
  );
};

export default Dashboard;