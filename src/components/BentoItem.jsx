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
      whileHover={{ scale: 1.02, rotate: 0.5 }} // The "Interactive" pop effect
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:bg-white/10 hover:border-white/20 shadow-2xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default BentoItem;