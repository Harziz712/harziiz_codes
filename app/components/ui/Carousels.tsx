"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { BadgeSlide } from "./Badge";

const images = [
  "/slideimg1.png",
  "/slideimg2.png",
  "/slideimg3.png",
];

export default function InfiniteCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-hidden w-full h-full row-span-2">
      {/* Edge Shadows */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Smooth Scrolling Content */}
      <motion.div
        className="flex w-max h-full gap-2"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Adjust speed here
        }}
        ref={containerRef}
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="min-w-[250px] md:min-w-[300px] h-full rounded-xl overflow-hidden"
          >
            <img
              src={src}
              alt={`carousel-${index}`}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}



// ✅ Top & Bottom Badge Arrays
const topRow = [
  "Website Design",
  "Mobile App development",
  "UI/UX Design",
  "Framer Migration",
  "Webflow Design",
  "Wix Design",
  "n8n",
  "Automation",
  "Ai Agents",
  "Software Engineering",
  "Web development",
];

const bottomRow = [
  "Optimization",
  "Custom Code",
  "SEO",
  "Brand Management",
  "Social Media Management",
  "Landing Pages",
  "Websites",
  "3D Models",
  "3D Animated Website",
  "Workflows",
  "AI",
  "API Integration",
];

// ✅ Animation Factory
const animationProps = (direction: "left" | "right") => ({
  animate: {
    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
  },
  transition: {
    repeat: Infinity,
    ease: "linear",
    duration: 25,
  },
});

export function CarouselBadgeGroup() {
  return (
    <div className="relative space-y-3 overflow-hidden ">
      {/* ✅ Shared Edge Shadows */}
      <div className="pointer-events-none absolute inset-y-0 h-full left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 h-full right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      {/* ✅ Top Carousel */}
      <div className="overflow-hidden w-full">
        <motion.div className="flex gap-4 w-max" {...animationProps("left")}>
          {[...topRow, ...topRow].map((text, index) => (
            <BadgeSlide key={`top-${index}`}>{text}</BadgeSlide>
          ))}
        </motion.div>
      </div>

      {/* ✅ Bottom Carousel */}
      <div className="overflow-hidden w-full">
        <motion.div className="flex gap-4 w-max" {...animationProps("right")}>
          {[...bottomRow, ...bottomRow].map((text, index) => (
            <BadgeSlide key={`bottom-${index}`}>{text}</BadgeSlide>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
