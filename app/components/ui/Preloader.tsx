'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), 3000); // duration before doors open
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          {/* Doors */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-neutral-900 origin-left"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-neutral-900 origin-right"
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
          />

          {/* Message */}
          <motion.h1
            className="z-10 text-2xl md:text-4xl font-bold text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            Crafting digital experiences just for you...
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
