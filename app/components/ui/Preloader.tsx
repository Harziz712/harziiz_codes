'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { PreloaderIcons } from './SocialIcons';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [showDoors, setShowDoors] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const [playDoorSound] = useSound('/door.mp3', { volume: 0.5 });

  useEffect(() => {
    // Simulate loading bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowDoors(true);
          playDoorSound();
          setTimeout(() => setIsVisible(false), 1600); // wait for door animation
          return 100;
        }
        return prev + 1;
      });
    }, 20); // adjust speed here

    return () => clearInterval(interval);
  }, [playDoorSound]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          {/* Doors */}
          {showDoors && (
            <>
              <motion.div
                className="absolute inset-y-0 left-0 w-1/2 bg-neutral-900 origin-left"
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-y-0 right-0 w-1/2 bg-neutral-900 origin-right"
                initial={{ x: 0 }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </>
          )}


               <motion.h1
            className="z-10 text-2xl md:text-4xl font-bold text-center px-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
         Welcome to <span className="text-neutral-400 font-vibes text-3xl md:text-5xl">Harziiz's Space</span> 
          </motion.h1>

            <motion.div className="flex space-x-3"
                  initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
                  <PreloaderIcons icon={Twitter}   href="https://x.com/harziizdevps"                />
                  <PreloaderIcons icon={Linkedin}  href="https://www.linkedin.com/in/akanbiazeez/" />
                  <PreloaderIcons icon={Github}    href="https://github.com/harziz712"            />
                </motion.div>
          {/* Message
          <motion.h1
            className="z-10 text-2xl md:text-4xl font-bold text-center px-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Crafting digital experiences just for you...
          </motion.h1> */}
          <div className="h-8" /> {/* Spacer */}
        

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden z-10  font-vibes">
            <motion.div
              className="h-full bg-neutral-500"
              style={{ width: `${progress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
