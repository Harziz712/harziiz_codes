'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { TestimonialCard, testimonials } from './ui/TestimonialCard';
import {PortfolioGrid} from './ui/PortfolioGrid';
import { Arrow} from './ui/Badge'


const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-start px-4 md:px-6 pt-40 pb-20 min-h-[300vh] md:min-h-[140vh] lg:min-h-[200vh] overflow-hidden border-b-2 border-b-neutral-600">
      {/* Background Video */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-white w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {/* Left Content */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <span className="inline-flex items-center gap-2 text-sm sm:text-md font-medium bg-neutral-900 border-2 border-gray-800 rounded-full px-4 py-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" /> Web Developer & Designer
          </span>

          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight flex items-center ">
            Akanbi <span className="text-neutral-400 ml-4">AbdulAzeez</span>{' '}
          <Arrow/>
          </h1>

          <p className="text-neutral-300 text-base sm:text-md">
            I’m a versatile designer specializing in graphic, web, and product design to help grow your business. Let’s build something great!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 lg:text-lg rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition">
              See All Projects
            </button>
            <button className="px-6 py-3 lg:text-lg rounded-full bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition">
              Contact Now
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="relative flex flex-col md:pr-20 gap-6 items-center lg:items-end justify-center">
          <TestimonialCard animate={{ y: [0, -10, 0] }} {...testimonials[0]} className="rotate-[-6deg] -translate-x-0 lg:-translate-x-28" />
          <TestimonialCard animate={{ y: [0, 10, 0] }} {...testimonials[1]} className="rotate-[6deg] translate-x-0 lg:translate-x-20 lg:ml-12" />
        </div>
      </motion.div>

      {/* Portfolio Section (Full Width) */}
      <PortfolioGrid />

      {/* Scroll Down Button */}
      <motion.button
        className="absolute bottom-10 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm z-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <ArrowDown className="h-4 w-4 text-white" />
      </motion.button>
    </section>
  );
};

export default Hero;
