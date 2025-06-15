
import React from 'react'
import { motion } from 'framer-motion'
import {  ArrowUpRight } from 'lucide-react';
import { Check as CheckIcon, X as XIcon } from 'lucide-react';



export const Badge = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-full text-xs text-neutral-300 hover:bg-neutral-700 transition-colors duration-300"
  >
    {children}
  </motion.span>
)





export const BadgeSlide = ({ children}: { children: React.ReactNode}) => (
  <span
    className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-full text-xs text-neutral-300 hover:bg-neutral-700 transition-colors duration-300"
  >
    {children}
  </span>
)

export const StylishBadge = ({ children , className }: { children: React.ReactNode, className: string} )=> {
    return (

        <motion.div
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.8 }}
             className={`flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2  ${className}`}
               >
           <div className="w-2 h-2 relative animate-ping bg-green-400  rounded-full"> </div>
           <div className="w-2 h-2 z-10 absolute animate-pulse  bg-green-400 rounded-full"></div>
             <span className="text-xs text-white"> {children}</span>
         </motion.div>
   
    )
}



export const Arrow = () => {
  return(
    <motion.button
      className="bottom-4 left-4 flex h-10 w-10 items-center md:border-t border-t-neutral-600 justify-center rounded-full ml-5 md:bg-gradient-to-br from-neutral-800 to-neutral-900 animate-bounce md:backdrop-blur-sm
        sm:h-10 sm:w-10 sm:ml-5
      "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowUpRight className="h-4 w-4 text-white/90 sm:h-4 sm:w-4" />
    </motion.button>
  )
}


export const Check = () => {
  return (
           <motion.button
        className=" bottom-4 left-4 flex h-10 w-10 items-center border-t border-t-neutral-600 justify-center rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900  backdrop-blur-sm "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <CheckIcon className="h-4 w-4 text-white/90" />
      </motion.button>
  )
}

export const X = () => {
  return (
           <motion.button
        className=" bottom-4 left-4 flex h-10 w-10 items-center border-t border-t-neutral-600 justify-center rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900  backdrop-blur-sm "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <XIcon className="h-4 w-4 text-white/90" />
      </motion.button>
  )
}

