"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { MobileMenu } from "./ui/MobileMenu";
import { NavLink } from "./ui/Navlink";

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl px-6 py-3 rounded-full bg-black/70 backdrop-blur-md border-2 border-gray-800 flex justify-between items-center overflow-none">
        <a href="#home" className="text-white font-semibold text-2xl flex items-center gap-2">
          Harziiz
        </a>

        <nav className="hidden md:flex  items-center gap-6">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <div className="hidden md:flex">
          <button className="rounded-full border border-white text-white px-5 py-2 text-sm flex items-center gap-2 hover:bg-white hover:text-black transition">
           <span className="animate-pulse"> ✨ </span>Hire me Now!!! 
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileOpen(true)}>
          <Menu className="text-white w-6 h-6" />
        </button>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
};
