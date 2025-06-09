"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "./Navlink";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 inset-0 w-full h-[400px] rounded-3xl z-[99] bg-black/70  border-2 border-gray-800  backdrop-blur-sm p-6"

        >
          <div className="flex justify-between items-start mb-10">
            <span className="text-white font-bold text-xl">Harziiz</span>
            <button onClick={onClose}>
              <X className="text-white w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>

            <button className="mt-10 w-full rounded-full border border-white text-white py-3 flex items-center justify-center gap-2 hover:bg-white hover:text-black transition">
              ✨ Get for Free
            </button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
