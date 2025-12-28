import React from 'react';
import { StaggerContainer, StaggerItem } from './AnimatedSection';

const certs = [
  {
    title: "Certified Ethical Hacker",
    issuer: "EC-Council",
    date: "2024",
    id: "ECC-8921-XU",
    color: "from-red-500 to-rose-600",
    shadow: "shadow-red-900/20",
    icon: "🛡️"
  },
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2023",
    id: "COMP-7721-AB",
    color: "from-blue-500 to-cyan-600",
    shadow: "shadow-blue-900/20",
    icon: "🔐"
  },
  {
    title: "Google Cybersecurity",
    issuer: "Google",
    date: "2023",
    id: "GOOG-2100-YZ",
    color: "from-yellow-400 to-orange-500",
    shadow: "shadow-yellow-900/20",
    icon: "📜"
  },
  {
    title: "AWS Certified Security",
    issuer: "AWS",
    date: "2025",
    id: "AWS-9900-SS",
    color: "from-orange-500 to-amber-600",
    shadow: "shadow-orange-900/20",
    icon: "☁️"
  }
];

const CertificationGrid = () => {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {certs.map((cert, i) => (
        // Standard Left-to-Right Stagger (No override needed)
        <StaggerItem key={i}>
            <div className={`relative group rounded-3xl bg-[#0a0a0a] border border-white/10 p-1 overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-2xl ${cert.shadow} h-full`}>
                <div className="relative h-full bg-[#0a0a0a] rounded-[20px] p-6 overflow-hidden flex flex-col justify-between z-10">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${cert.color} blur-[60px] opacity-20 group-hover:opacity-40 transition duration-500`}></div>

                    <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shadow-inner">
                            {cert.icon}
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-[10px] font-bold text-green-400 uppercase tracking-wide">Verified</span>
                        </div>
                    </div>

                    <div className="relative z-10 mb-8">
                        <h3 class="text-lg font-bold text-white leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                            {cert.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">
                            {cert.issuer} • <span className="text-gray-400">{cert.date}</span>
                        </p>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-white/5 flex justify-between items-center">
                        <span class="text-[9px] text-gray-600 uppercase tracking-widest font-bold">ID: {cert.id}</span>
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`}></div>
                    </div>
                </div>
            </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
};

export default CertificationGrid;