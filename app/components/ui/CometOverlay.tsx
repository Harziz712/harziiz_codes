'use client';

import { motion } from 'framer-motion';
import React from 'react';

const Comet = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-5 h-5 bg-gradient-to-b from-white/80 to-transparent blur-sm"
      initial={{ x: -100, y: -100, opacity: 0 }}
      animate={{ x: '50vw', y: '50vh', opacity: [0, 1, 0] }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

const CometOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <Comet delay={0} />
      <Comet delay={2} />
    </div>
  );
};

export default CometOverlay;
