import { motion } from 'framer-motion'
import React from 'react'
import {  StylishBadge } from './ui/Badge'
import { Card } from './ui/Card'
import ServicePricing from './ui/ServicePricing'

const LetsConnect = () => {

  return (
   <section  id='contact' className="bg-black text-white px-4 py-16 md:px-8 lg:px-20 border-b-2 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-b-neutral-600">
      <div className="text-center mb-12 h-fit row-span-1 ">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}    
          transition={{ duration: 0.6 }}
          className='space-y-6'
        >
              <div className={`flex items-left justify-left col-span-1 my-5 object-cover `}>
       <StylishBadge className='border border-gray-700 '>Let's Connect</StylishBadge>
       </div>
       <div className='flex justify-between  items-center'>
       <div className='items-left justify-end text-left'>
              <h2 className="text-4xl md:text-5xl font-bold flex items-center ">
            <span className="text-white mr-2">Let's Grow</span>
            <span className="text-gray-400">Together</span>
          </h2>
          </div>
        </div>
<ServicePricing/>

         <div className="grid md:grid-cols-2 grid-cols-1 w-full col-span-1  gap-4">
            <a   href='https://harziiz-me.vercel.app/projects' target="_blank" rel="noopener noreferrer"
        title="View Project" className="px-4 py-3 sm:text-xs md:text-md lg:text-lg rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition">
              See All Projects
            </a>
            <a href="https://wa.me/2348146447551"
          target="_blank"
          rel="noopener noreferrer" className="px-4 py-3 sm:text-xs md:text-md lg:text-lg rounded-full bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition">
              Contact Now
            </a>
          </div>
        </motion.div>
      </div>  

          <Card className="row-span-1 p-3" delay={0.7}>
            <img
              src="/back4.png"
              alt="Creative Agency Template"
              className="w-full h-full object-cover rounded-2xl opacity-60 "
            />
          </Card>
          </section>
  )
}

export default LetsConnect