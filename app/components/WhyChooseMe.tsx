import { motion } from 'framer-motion'
import React from 'react'
import {  StylishBadge } from './ui/Badge'
import ScrollStack from './ui/ScrollStack'

const WhyChooseMe = () => {

  return (
    <section className="bg-black text-white px-4 py-16 md:px-8 lg:px-20 border-b-2 pb-24 border-b-neutral-600 ">


         <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
              <div className={`flex items-center justify-center my-5 object-cover `}>
       <StylishBadge className='border border-gray-700 '>Why Choose me</StylishBadge>
       </div>
           <h2 className="text-4xl md:text-5xl ">
            <span className="text-white mr-2">Why me as </span>
            <span className="text-gray-400">Design Partner</span>
          </h2>
          <p className="text-gray-400 mt-2">
           Why Partner with me for design excellence
          </p>
        </motion.div>
      </div>

 <ScrollStack/>
          </section>
  )
}

export default WhyChooseMe