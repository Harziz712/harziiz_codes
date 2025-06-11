
import React from 'react'
import { motion } from 'framer-motion'




export const ExperienceItem = ({ 
  role, 
  company, 
  year, 
  delay = 0 
}: { 
  role: string; 
  company: string; 
  year: string; 
  delay?: number 
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-neutral-800 last:border-b-0 hover:bg-neutral-800/50 px-4 -mx-4 rounded-lg transition-colors duration-300"
  >
    <div className="flex flex-col">
      <span className="text-neutral-300 font-medium text-base">{role}</span>
      <span className="text-neutral-500 text-xs mt-1">{company}</span>
    </div>
    <span className="text-neutral-400 text-xs mt-2 sm:mt-0">{year}</span>
  </motion.div>
)
