import React from 'react'
import { StaggerContainer, StaggerItem } from './AnimatedSection'

const projects = [
  {
    title: "Quish-Guard AI",
    desc: "A Zero-Click QR Phishing Defense System that leverages Computer Vision to scan live screen content in real-time. It detects and blocks sophisticated phishing attacks using a 4-layer engine powered by algorithmic heuristics and global threat intelligence.",
    tags: ["Python", "Computer Vision", "Phishing Detection"],
    color: "from-red-600 to-orange-500",
    icon: "🔐",
    delay: 0,
    github: "https://github.com/santhoshr-15/quish-guard-ai"
  },
  {
    title: "Zero Trust Auth",
    desc: "Implemented OIDC and secure authentication flows in Rust.",
    tags: ["Rust", "WASM", "Auth0"],
    color: "from-orange-500 to-red-600",
    icon: "🔒",
    delay: 0.2,
    github: "https://github.com/YOUR_USERNAME/zero-trust-auth"
  },
  {
    title: "Phishing Hunter",
    desc: "Real-time browser extension that analyzes URL patterns.",
    tags: ["JavaScript", "Manifest V3"],
    color: "from-emerald-500 to-green-600",
    icon: "🎣",
    delay: 0.3,
    github: "https://github.com/YOUR_USERNAME/phishing-hunter"
  },
  {
    title: "Encrypted Chat",
    desc: "End-to-End encrypted messaging platform using AES-256.",
    tags: ["Node.js", "React", "Socket.io"],
    color: "from-pink-500 to-rose-600",
    icon: "💬",
    delay: 0.1,
    github: "https://github.com/YOUR_USERNAME/encrypted-chat"
  }
]

export default function ProjectGrid() {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {projects.map((p, i) => (
        <StaggerItem key={i} overrideDelay={p.delay}>
          <div className="group relative rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 h-full">

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${p.color} opacity-50 group-hover:opacity-100 transition`}></div>
            <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${p.color} opacity-5 blur-[80px] group-hover:opacity-20 transition pointer-events-none`}></div>

            <div className="p-8 relative z-10 h-full flex flex-col justify-between">

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-3xl shadow-lg border border-white/10`}>
                    {p.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-gray-500 font-bold border border-white/5 uppercase">
                    2025
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-200 transition">
                  {p.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-base">
                  {p.desc}
                </p>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map((tag, t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-white/5 text-gray-300 text-xs font-mono border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all"
                >
                  <span className="text-gray-400 hover:text-white text-lg">↗</span>
                </a>
              </div>

            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}
