'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    text: '" Working with him was a game changer! "',
    author: '- dd3vahmad',
  },
  {
    text: '" We Increased our conversions by 200%"',
    author: '- Zeezdevps',
  },
];

const TestimonialCard = ({ text, author, className }: { text: string; author: string; className?: string }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
    className={`bg-neutral-900 text-white p-6 rounded-xl shadow-lg w-[200px] h-[140px] text-sm flex flex-col justify-center items-center text-center ${className}`}
  >
    <p>{text}</p>
    <p className="text-right mt-4 text-neutral-400">{author}</p>
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
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
      <div className="absolute inset-0 bg-black/80 z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-white max-w-4xl w-full grid md:grid-cols-2 gap-12"
      >
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 text-sm font-medium bg-neutral-900 rounded-full px-4 py-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" /> UI/UX & Graphic Designer
          </span>

          <h1 className="text-4xl font-semibold leading-tight">
            Akanbi <span className="text-neutral-400">AbdulAzeez</span>{' '}
            <ArrowUpRight className="inline-block w-5 h-5 ml-1" />
          </h1>

          <p className="text-neutral-300">
            I’m a versatile designer specializing in graphic, web, and product design to help grow your business. Let’s build something great!
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition">
              See All Projects
            </button>
            <button className="px-6 py-3 rounded-full bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition">
              Contact Now
            </button>
          </div>
        </div>

        {/* Right Testimonial Cards */}
        <div className="relative flex flex-col gap-6 items-end justify-center">
          <TestimonialCard {...testimonials[0]} className="rotate-[-6deg] transform -translate-x-20" />
          <TestimonialCard {...testimonials[1]} className="rotate-[6deg] transform translate-x-20 ml-12" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;