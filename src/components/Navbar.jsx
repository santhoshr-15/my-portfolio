import React from 'react';
import { motion } from 'framer-motion';

// UPDATED LINKS
const links = [
  { name: 'Home', href: '/', icon: '🏠' },
  { name: 'Projects', href: '/projects', icon: '🚀' },
  { name: 'About', href: '/about', icon: '⚡' },
  { name: 'Contact', href: '/contact', icon: 'nw' }, // Changed icon to "nw" (Network/Contact)
];

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center gap-4 px-6 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-2xl z-50"
    >
      {links.map((link) => (
        <a 
          key={link.name} 
          href={link.href}
          className="relative p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all group"
        >
          <span className="text-xl">{link.icon === 'nw' ? '📬' : link.icon}</span>
          
          {/* Tooltip Label */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 whitespace-nowrap pointer-events-none">
            {link.name}
          </span>
        </a>
      ))}
    </motion.nav>
  );
};

export default Navbar;