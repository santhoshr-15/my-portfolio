import React from 'react';
import { motion } from 'framer-motion';

// 1. STAGGER CONTAINER (For Grids like Dashboard, Projects)
export const StaggerContainer = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.1, delayChildren: delay }} // This creates the 1..2..3 effect
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 2. STAGGER ITEM (Wrap every single card with this)
export const StaggerItem = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            filter: "blur(0px)",
            transition: { type: "spring", bounce: 0.4, duration: 0.8 }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 3. BLUR TEXT REVEAL (For Main Titles)
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
          className="inline-block mr-2" // mr-2 adds space between words
          variants={{
            hidden: { opacity: 0, filter: "blur(20px)", y: 20 },
            visible: { 
                opacity: 1, 
                filter: "blur(0px)", 
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" }
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};