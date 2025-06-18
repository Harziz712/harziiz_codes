'use client';

import React from 'react';
import { FaXTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { StylishBadge } from './ui/Badge';

const Footer = () => {
  return (
   <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex  w-full flex-col gap-6">
          <div className="flex items-center gap-2 text-lg font-medium">
            <StylishBadge className="border border-gray-700">Harziiz</StylishBadge>
          </div>

          <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:flex gap-4 text-sm text-gray-400">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#profile">Profile</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end gap-4 text-sm text-gray-400">
          <div className="flex gap-4 text-xl">
            <a href="https://x.com/harziizdevps" aria-label="Twitter"><FaXTwitter /></a>
            <a href="https://www.instagram.com/harzzie711/" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/akanbiazeez/" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/harziz712" aria-label="GitHub"><FaGithub /></a>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mt-4 text-center justify-start md:justify-end text-xs">
            <p>© 2025 HarziizCodes</p>
            <p>Made with 💻 by Harziiz</p>
            <p>Built with Passion ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
