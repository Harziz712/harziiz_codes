import { motion } from 'framer-motion'
import React from 'react'
import {  StylishBadge } from './ui/Badge'
import ComparisonCards from './ui/ComparisonCards'

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
          <h2 className="text-4xl ">
            <span className="text-white">Why me as </span>
            <span className="text-gray-400">Design Partner</span>
          </h2>
          <p className="text-gray-400 mt-2">
           Why Partner with me for design excellence
          </p>
        </motion.div>
      </div>

 <div  className="relative h-[400vh] bg-black text-white overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-full">

          <ComparisonCards
            leftTitle="Skilled Professional"
            leftDescription="Gain access to top-tier talent with years of experience, ensuring flawless execution."
            rightTitle="Amateur Designer"
            rightDescription="Lack of experience may result in design inconsistencies and overlooked details."
          />

          <ComparisonCards
            leftTitle="Future-Ready Designs"
            leftDescription="Crafting modern, scalable designs that grow with your business and stay ahead of trends."
            rightTitle="Outdated Concepts"
            rightDescription="Stale designs that don't reflect current trends or your evolving brand narrative."
          />

          <ComparisonCards
            leftTitle="Client-Centric Collaboration"
            leftDescription="Your vision leads the way — I work closely with you to bring ideas to life with precision and creativity."
            rightTitle="Detached Communication"
            rightDescription="Lack of collaboration and poor feedback loops can result in misaligned outcomes."
          />

          <ComparisonCards
            leftTitle="Timely Project Tracking"
            leftDescription="Stay informed with regular progress updates and timely deliverables."
            rightTitle="Unstructured & Unreliable Work"
            rightDescription="Inconsistent timelines and last-minute changes can compromise quality."
          />

        </div>
      </div>
    </div>
          </section>
  )
}

export default WhyChooseMe