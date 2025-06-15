'use client';

import React from 'react';
import { FaXTwitter, FaInstagram, FaFacebook, FaDribbble } from 'react-icons/fa6';
import { StylishBadge } from './ui/Badge';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 text-lg font-medium">
            {/* <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-gray-500 to-white animate-caret-blink" />
            Harziiz */}
                <StylishBadge className='border border-gray-700 '>Harziiz</StylishBadge>

          </div>
          <div className="mt-6 flex gap-6 text-sm text-gray-400">
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#" className="relative">
              Profile
            </a>
            <a href="#">Reviews</a>
            <a href="#">Contact</a>
          </div>
          <p className="mt-6 text-xs text-gray-500">© 2025 HarziizCodes</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end gap-4 text-sm text-gray-400">
          <div className="flex gap-4 text-xl">
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaDribbble /></a>
          </div>
          <div className="flex gap-6 mt-4">
            <p>Made with 💻 by Harziiz</p>
            <p>Built with Passion ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
