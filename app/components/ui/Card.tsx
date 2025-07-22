'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Laptop, Palette } from 'lucide-react';
import Link from 'next/link';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  link?:string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', delay = 0, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 group cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {children}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.a
        className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href='https://harziiz-me.vercel.app/projects' target="_blank" rel="noopener noreferrer"
        title="View Project"
      >
       <Link href={`${link}`} target='_blank'> <ArrowUpRight className="h-4 w-4 text-black" /> </Link>

      </motion.a>
    </motion.div>
  );
};

export const AnimateCard: React.FC<CardProps> = ({ children, className }) => {
    return(
        <motion.div     
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }} 
        className={`${className}`}
        >

        {children}

      </motion.div>
    )
}

interface ServiceProps {
  title: string;        
    description: string;
    index?: number;
}
export  function ServicesDetails({ title, description, index }: ServiceProps) {
  return (
    <section className=" row-span-1 p-4">
      <div className="w-full">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index ?? 0) * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <span>
                {title.includes("UI/UX") && <Laptop/>}
                {title.includes("Development") && <Palette/>}
                {title.includes("Framer") && "🎯"}
                {title.includes("Website") && "🧩"}
              </span>
              {title}
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {description}
            </p>
          </motion.div>
      </div>
    </section>
  );
}

