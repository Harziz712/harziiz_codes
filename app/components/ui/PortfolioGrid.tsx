'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Reusable Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`relative overflow-hidden rounded-2xl bg-gray-900 group cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {children}
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Arrow Button */}
      <motion.button
        className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUpRight className="h-4 w-4 text-black" />
      </motion.button>
    </motion.div>
  );
};

// Main Portfolio Grid Component
const PortfolioGrid: React.FC = () => {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Grid Container */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          
          {/* Large Website Template 1 */}
          <Card className="md:col-span-2 lg:col-span-2 xl:col-span-2" delay={0.1}>
            <div className="relative h-80 md:h-96">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format"
                alt="Dashboard Template"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>

          {/* Website Template 2 */}
          <Card className="h-80" delay={0.2}>
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop&crop=entropy&auto=format"
              alt="Mobile App Template"
              className="w-full h-full object-cover"
            />
          </Card>

          {/* Website Template 3 */}
          <Card className="h-80" delay={0.3}>
            <img 
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=600&fit=crop&crop=entropy&auto=format"
              alt="Portfolio Template"
              className="w-full h-full object-cover"
            />
          </Card>

          {/* Large Website Template 4 */}
          <Card className="md:col-span-2 lg:col-span-2 xl:col-span-2 h-80" delay={0.4}>
            <img 
              src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=400&fit=crop&crop=entropy&auto=format"
              alt="Landing Page Template"
              className="w-full h-full object-cover"
            />
          </Card>

    

          {/* Large Website Template 7 */}
          <Card className="md:col-span-2 lg:col-span-2 xl:col-span-2 h-80" delay={0.7}>
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop&crop=entropy&auto=format"
              alt="Creative Agency Template"
              className="w-full h-full object-cover"
            />
          </Card>


        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;