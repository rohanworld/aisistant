import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const BelowFooter = () => {
  const controls = useAnimation();
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 100) {
      setHasScrolled(true);
      controls.start(i => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.2, duration: 0.6 },
      }));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const letters = ['A', 'I', 'S', 'I', 'S', 'T', 'A', 'N', 'T'];

  return (
    <div className="relative bg-gradient-to-r from-blue-200 to-blue-400 flex flex-col justify-center items-center py-32">
      {/* Letters */}
      <div className="flex flex-wrap justify-center items-center">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            initial={{ y: '-100vh', opacity: 0 }}
            animate={controls}
            className="text-white font-bold"
            style={{ fontSize: '15vw', lineHeight: '1' }} // Reduced the size for better fit
          >
            {letter}
          </motion.span>
        ))}
      </div>
      {/* Copyright */}
      <div className="absolute bottom-8 text-white text-sm">
        &copy; 2024 AIsistant
      </div>
    </div>
  );
};

export default BelowFooter;
