'use client';
import * as React from 'react';
import { motion } from 'framer-motion';

const Hero = () =>  {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-white px-6 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/70 z-10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">I'm Harziiz</h1>
        <p className="text-lg text-gray-600 mb-6">
          I design and build web experiences.
        </p>
        <a
          href="#work"
          className="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition-all rounded-full text-sm font-medium"
        >
          View Work
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
