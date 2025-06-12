import React from 'react'
import { motion } from 'framer-motion';
import { StylishBadge } from './ui/Badge';
import { Arrow} from './ui/Badge'
import PortfolioGrid from './ui/PortfolioGrid';

const MyProjects = () => {
  return (
    <section className="bg-black text-white px-4 py-16 md:px-8 lg:px-20 border-b-2 pb-24 border-b-neutral-600">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}    
          transition={{ duration: 0.6 }}
        >
              <div className={`flex items-center justify-center my-5 object-cover `}>
       <StylishBadge className='border border-gray-700 '>My Projects</StylishBadge>
       </div>
       <div className='flex justify-between px-10 items-center'>
       <div className='items-left justify-end text-left '>
          <h2 className="text-4xl font-bold flex items-center ">
            <span className="text-white mr-2">Design </span>
            <span className="text-gray-400"> Services</span>
            <Arrow/>
          </h2>
          <p className="text-gray-400 mt-2 text-md">
          Showcase of my recent Sleek Works: websites , web applications mobile applications and many more
          </p>
          </div>
                 <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 lg:text-md rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition">
              See All Projects
            </button>
            <button className="px-6 py-3 lg:text-md rounded-full bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition">
              Contact Now
            </button>
          </div>
        </div>
        </motion.div>
      </div>
      

           <PortfolioGrid />

      </section>
  )
}

export default MyProjects