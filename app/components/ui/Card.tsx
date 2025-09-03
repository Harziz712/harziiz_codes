'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';8
import { ArrowUpRight, Laptop, PaletteIcon, Puzzle, } from 'lucide-react';
import Link from 'next/link';
import { BiBullseye } from 'react-icons/bi';
import { Github, Globe } from 'lucide-react';


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
            <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-center gap-2">
              <span>
                {title.includes("UI/UX") && <Laptop/>}
                {title.includes("Development") && <PaletteIcon/>}
                {title.includes("Website") && <BiBullseye/>}
                {title.includes("Automation") && <Puzzle/>}
              </span>
              {title}
            </h3>
            <p className="text-gray-300 mb-4 text-xs md:text-sm leading-relaxed">
              {description}
            </p>
          </motion.div>
      </div>
    </section>
  );
}


import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  link?: string;
  github?: string;
  description?: string;
}

const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
};

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  delay = 0,
  link,
  github,
  description = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* 📱 Mobile: Use Dialog */}
      <div className="md:hidden ">
        <Dialog>
          <DialogTrigger asChild className='text-white' >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay }}
              className={`relative overflow-hidden rounded-2xl  cursor-pointer text-white`}
            >
              <div className="w-full h-full">{children}</div>
            </motion.div>
          </DialogTrigger>

          <DialogContent className="max-w-sm rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 border-gray-800">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold text-gray-300 ">Project Details</DialogTitle>
            </DialogHeader>

            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-4">
              {children}
            </div>

            {/* Description */}
            {description && (
              <p className="text-sm text-gray-300 mb-4">
                {description}
              </p>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              {github && (
                <Link href={github} target="_blank">
                  <button className="px-4 py-2 bg-white/90 text-black rounded-lg text-sm font-medium flex items-center gap-2 shadow">
                    <Github size={16} /> GitHub
                  </button>
                </Link>
              )}
              {link && (
                <Link href={link} target="_blank">
                  <button className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium flex items-center gap-2 shadow">
                    <Globe size={16} /> View Site
                  </button>
                </Link>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* 💻 Desktop: Hover Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className={`hidden md:block relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 group cursor-pointer h-auto ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <motion.div
          className={`w-full h-full ${className}`}
          initial={{ scale: 1 }}
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                key="overlay-content"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center p-4"
              >
                {description && (
                  <p className="text-white text-sm md:text-base mb-4">
                    {description}
                  </p>
                )}
                <div className="flex gap-3 mt-2">
                  {github && (
                    <Link href={github} target="_blank">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white/90 text-black rounded-lg text-sm font-medium flex items-center gap-2 shadow"
                      >
                        <Github size={16} /> GitHub
                      </motion.button>
                    </Link>
                  )}
                  {link && (
                    <Link href={link} target="_blank">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm font-medium flex items-center gap-2 shadow"
                      >
                        <Globe size={16} /> View Site
                      </motion.button>
                    </Link>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
