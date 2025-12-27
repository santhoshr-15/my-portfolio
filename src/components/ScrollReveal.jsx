import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      // 1. Start state (Invisible & lower down)
      initial={{ opacity: 0, y: 50 }}
      
      // 2. End state (Visible & normal position)
      whileInView={{ opacity: 1, y: 0 }}
      
      // 3. Settings (Run once, wait until 20% is visible)
      viewport={{ once: true, amount: 0.2 }}
      
      // 4. Animation Physics (Smooth spring)
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        type: "spring", 
        bounce: 0.4 
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;