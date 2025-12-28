import React from 'react';
import { motion } from 'framer-motion';

// 1. STAGGER CONTAINER (The Orchestrator)
export const StaggerContainer = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.1, delayChildren: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 2. STAGGER ITEM (The Individual Card)
// UPDATED: Now accepts 'overrideDelay' for custom timing
export const StaggerItem = ({ children, className = "", overrideDelay = null }) => {
  
  const variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        filter: "blur(0px)",
        transition: { 
            type: "spring", 
            bounce: 0.4, 
            duration: 0.8,
            // If overrideDelay is set (like in ProjectGrid), use it. Otherwise, follow the natural stagger.
            delay: overrideDelay !== null ? overrideDelay : undefined 
        }
    }
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

// 3. BLUR TEXT (Helper for titles if needed)
export const BlurText = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1, delayChildren: delay }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, filter: "blur(20px)", y: 20 },
            visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8 } }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};