import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingText = () => {
  const words = ["Cyber Analyst", "Cyber Architect", "Security Engineer", "Full Stack Dev"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150; // Typing speed vs Deleting speed
    const word = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 2000); // Wait 2 seconds before deleting
        }
      } else {
        // Deleting backward
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length); // Loop to next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
      {currentText}
      <motion.span 
        animate={{ opacity: [0, 1] }} 
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 text-white"
      >
        |
      </motion.span>
    </span>
  );
};

export default TypingText;