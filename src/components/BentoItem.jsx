import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for cleaner tailwind classes
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const BentoItem = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      // REMOVED whileHover (No Shake, No Zoom)
      // REMOVED whileTap
      className={cn(
        // Base classes: Rounded, Border, Dark Background
        "relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f0f0f] p-6 transition-all duration-500",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default BentoItem;