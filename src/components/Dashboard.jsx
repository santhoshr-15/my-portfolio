import React from 'react';
import BentoItem from './BentoItem';
import { StaggerContainer, StaggerItem } from './AnimatedSection'; 

const Dashboard = () => {

  // CONFIG: Colorful Tech Stack Data
  const techStack = [
      { name: "Rust", color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10", icon: "🦀" },
      { name: "Python", color: "text-yellow-300", border: "border-yellow-400/30", bg: "bg-yellow-400/10", icon: "🐍" },
      { name: "React", color: "text-cyan-300", border: "border-cyan-400/30", bg: "bg-cyan-400/10", icon: "⚛️" },
      { name: "Astro", color: "text-purple-300", border: "border-purple-400/30", bg: "bg-purple-400/10", icon: "🚀" },
      { name: "Kali", color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10", icon: "🐉" },
      { name: "AWS", color: "text-orange-600", border: "border-orange-600/30", bg: "bg-orange-600/10", icon: "☁️" },
      { name: "Burp", color: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10", icon: "🐞" },
      { name: "Rust", color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10", icon: "🦀" },
      { name: "Python", color: "text-yellow-300", border: "border-yellow-400/30", bg: "bg-yellow-400/10", icon: "🐍" },
      { name: "React", color: "text-cyan-300", border: "border-cyan-400/30", bg: "bg-cyan-400/10", icon: "⚛️" },
  ];

  return (
    <StaggerContainer className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 pb-12">
      
      {/* 1. HERO PROFILE (Indigo Glow) */}
      <StaggerItem className="md:col-span-4 md:row-span-2"> 
          <BentoItem className="h-full min-h-[300px] bg-[#0f0f0f] border-white/10 relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-500 p-8 flex flex-col justify-between shadow-2xl">
             
             {/* GLOW EFFECT (Like About Page) */}
             <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition duration-500 pointer-events-none"></div>
             
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-bold text-green-400 mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> OPEN TO WORK
                </div>
                
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                    Cyber<br /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                        Architect.
                    </span>
                </h1>
                
                <p className="mt-4 text-indigo-200 text-base max-w-md leading-relaxed font-light">
                    Merging offensive security with high-end design.
                </p>
             </div>

             <div className="flex flex-wrap gap-3 relative z-10 mt-6">
                <a href="/contact" className="px-6 py-2.5 rounded-xl bg-white text-indigo-950 font-bold hover:bg-gray-200 transition-colors shadow-lg flex items-center gap-2 text-sm">
                    Let's Talk <span className="text-lg">→</span>
                </a>
                <a href="/projects" className="px-6 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition backdrop-blur-sm text-sm">
                    View Work
                </a>
             </div>
          </BentoItem>
      </StaggerItem>

      {/* 2. GITHUB ACTIVITY (Green Glow) */}
      <StaggerItem className="md:col-span-2 md:row-span-1">
          <a href="https://github.com/YOUR_NEW_USERNAME" target="_blank" rel="noopener noreferrer" className="block h-full w-full">
            <BentoItem className="h-full bg-[#0f0f0f] border-white/10 relative overflow-hidden group hover:border-green-500/50 transition-colors duration-500 p-5 flex flex-col justify-between cursor-pointer">
               
               {/* GLOW EFFECT */}
               <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-[50px] group-hover:bg-green-500/20 transition duration-500 pointer-events-none"></div>

               <div className="relative z-10 flex justify-between items-center mb-2">
                   <div className="flex items-center gap-2">
                       <svg className="w-5 h-5 text-white group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                       <span className="font-bold text-gray-300 text-sm group-hover:text-white">GitHub</span>
                   </div>
                   <span className="text-[10px] text-green-400 font-mono bg-green-500/10 px-1.5 py-0.5 rounded">Active</span>
               </div>
               
               <div className="relative z-10 grid grid-cols-8 gap-1 opacity-60">
                   {[...Array(32)].map((_, i) => (
                       <div key={i} className={`w-full aspect-square rounded-[2px] ${Math.random() > 0.6 ? 'bg-green-500' : 'bg-[#1f1f1f]'}`}></div>
                   ))}
               </div>
            </BentoItem>
          </a>
      </StaggerItem>

      {/* 3. TECH STACK (Cyan Glow) */}
      <StaggerItem className="md:col-span-2 md:row-span-1">
          <BentoItem className="h-full bg-[#0f0f0f] border-white/10 relative overflow-hidden group hover:border-cyan-500/50 transition-colors duration-500 flex items-center">
             
             {/* GLOW EFFECT */}
             <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-[50px] group-hover:bg-cyan-500/20 transition duration-500 pointer-events-none"></div>
             
             {/* Fade edges */}
             <div className="absolute left-0 w-8 h-full bg-gradient-to-r from-[#0f0f0f] to-transparent z-10"></div>
             <div className="absolute right-0 w-8 h-full bg-gradient-to-l from-[#0f0f0f] to-transparent z-10"></div>
             
             <div className="flex gap-4 animate-infinite-scroll whitespace-nowrap px-4 relative z-10">
                {techStack.map((tech, i) => (
                    <div 
                        key={i} 
                        className={`px-3 py-1.5 rounded-lg border ${tech.border} ${tech.bg} flex items-center gap-2 shadow-lg backdrop-blur-sm`}
                    >
                        <span className="text-sm">{tech.icon}</span>
                        <span className={`font-bold text-sm uppercase tracking-wide ${tech.color}`}>
                            {tech.name}
                        </span>
                    </div>
                ))}
             </div>
          </BentoItem>
      </StaggerItem>

      {/* 4. CURRENT FOCUS (Orange Glow) */}
      <StaggerItem className="md:col-span-3 md:row-span-1">
          <BentoItem className="h-full bg-[#0f0f0f] border-white/10 relative overflow-hidden group hover:border-orange-500/50 transition-colors duration-500 p-5 flex items-center justify-between">
             
             {/* GLOW EFFECT */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[60px] group-hover:bg-orange-500/20 transition duration-500 pointer-events-none"></div>

             <div className="relative z-10">
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider mb-1 block">Current Focus</span>
                <h3 className="text-lg font-bold text-white">Zero Trust Auth</h3>
             </div>
             <div className="relative z-10 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-xl">
                🔒
             </div>
          </BentoItem>
      </StaggerItem>

      {/* 5. VIBE / MUSIC (Rose/Pink Glow) */}
      <StaggerItem className="md:col-span-3 md:row-span-1">
          <BentoItem className="h-full bg-[#0f0f0f] border-white/10 relative overflow-hidden group hover:border-rose-500/50 transition-colors duration-500 p-5 flex items-center gap-5">
              
              {/* GLOW EFFECT */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[60px] group-hover:bg-rose-500/20 transition duration-500 pointer-events-none"></div>

              <div className="relative z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center animate-spin-slow shadow-xl border border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
              </div>
              <div className="relative z-10">
                  <div className="flex gap-0.5 h-2.5 items-end mb-1">
                      <span className="w-0.5 bg-rose-400 h-1.5 animate-pulse"></span>
                      <span className="w-0.5 bg-rose-400 h-2.5 animate-pulse delay-75"></span>
                      <span className="w-0.5 bg-rose-400 h-2 animate-pulse delay-100"></span>
                  </div>
                  <h3 className="font-bold text-white text-base">Coding Mode</h3>
                  <p className="text-[10px] text-rose-200/80">Spotify • Deep Focus</p>
              </div>
          </BentoItem>
      </StaggerItem>

    </StaggerContainer>
  );
};

export default Dashboard;