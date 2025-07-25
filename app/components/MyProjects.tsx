import React from 'react'
import { motion } from 'framer-motion';
import { StylishBadge } from './ui/Badge';
import { Arrow} from './ui/Badge'
import {PortfolioGrid} from './ui/PortfolioGrid';

const MyProjects = () => {
  return (
    <section id='projects' className="bg-black text-white px-4 py-16 md:px-8 lg:px-20 border-b-2 pb-24 border-b-neutral-600 ">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}    
          transition={{ duration: 0.6 }}
        >
              <div className={`flex items-center justify-center my-5 object-cover `}>
       <StylishBadge className='border border-gray-700 '>My Projects</StylishBadge>
       </div>
       <div className='md:grid grid-cols-4 justify-between md:px-10 px-2 md:space-y-0 space-y-10 items-center'>
       <div className='items-left justify-end text-left col-span-3 '>
       <h2 className="text-4xl md:text-5xl font-bold flex items-center ">
            <span className="text-white mr-2">Recent </span>
            <span className="text-gray-400"> Projects</span>
            <Arrow/>
          </h2>
          <p className="text-gray-400 mt-2 sm:text-xs text-md">
          Showcase of my recent Sleek Works: websites , web applications <br/>mobile applications and many more
          </p>
          </div>
            <div className="grid md:grid-cols-2 grid-cols-1 w-full col-span-1 gap-4">
            <a   href='https://harziiz-me.vercel.app/projects' target="_blank" rel="noopener noreferrer"
        title="View Project" className="px-6 py-3 sm:text-xs md:text-md rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition">
              See All Projects
            </a>
                 <a
          href="https://wa.me/2348146447551"
          target="_blank"
          rel="noopener noreferrer" className="px-6 py-3 sm:text-xs md:text-md rounded-full bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition">
              Contact Now
            </a>
          </div>
        </div>
        </motion.div>
      </div>
      

           <PortfolioGrid />

      </section>
  )
}

export default MyProjects