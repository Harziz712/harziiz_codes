import { motion } from 'framer-motion'
import React from 'react'
import  ComparisonCards  from './ComparisonCards'

const ScrollStack = () => {

  return (
 
 <div  className="relative h-[110vh] md:h-[100vh] bg-black text-white overflow-hidden">
      <div className=" h-screen sticky flex items-center justify-center">
        <div className="relative w-full max-w-4xl pt-20 h-full">
                <motion.div
      className="mt-12 rounded-2xl  w-f flex flex-col  items-center justify-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 20 }}
      transition={{ delay: 0.3, duration: 0.6 }}>
          <ComparisonCards  
            leftTitle="Skilled Professional"
            leftDescription="Gain access to top-tier talent with years of experience, ensuring flawless execution."
            rightTitle="Amateur Designer"
            rightDescription="Lack of experience may result in design inconsistencies and overlooked details."
          />
          </motion.div>

    <motion.div
      className="md:mt-12  mt-24 rounded-2xl  w-full    p-4  items-center justify-center gap-3"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6}}>
          <ComparisonCards
            leftTitle="Future-Ready Designs"
            leftDescription="Crafting modern, scalable designs that grow with your business and stay ahead of trends."
            rightTitle="Outdated Concepts"
            rightDescription="Stale designs that don't reflect current trends or your evolving brand narrative."
            />
    </motion.div>
     <motion.div
      className="md:mt-12  mt-30 rounded-2xl  w-full    p-4  items-center justify-center gap-3"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 40 }}
      transition={{ delay: 0.9, duration: 0.6 }}>
          <ComparisonCards
            leftTitle="Client-Centric Collaboration"
            leftDescription="Your vision leads the way — I work closely with you to bring ideas to life with precision and creativity."
            rightTitle="Detached Communication"
            rightDescription="Lack of collaboration and poor feedback loops can result in misaligned outcomes."
          />
    </motion.div>
       <motion.div
      className="md:mt-12  mt-30 rounded-2xl  w-full    p-4  items-center justify-center gap-3"
      initial={{ opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y: 80 }}
      transition={{ delay: 1.2, duration: 0.6 }}>
          <ComparisonCards
            leftTitle="Timely Project Tracking"
            leftDescription="Stay informed with regular progress updates and timely deliverables."
            rightTitle="Unstructured & Unreliable Work"
            rightDescription="Inconsistent timelines and last-minute changes can compromise quality."
          />
</motion.div>
        </div>
      </div>
    </div>
  )
}

export default ScrollStack 


