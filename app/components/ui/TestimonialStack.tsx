'use client';

import { motion } from 'framer-motion';
import React from 'react';
import TestimonialCard from './TestimonialCards';

const TestimonialCards = () => {
  return (
    <div className="relative h-[100vh] bg-black text-white overflow-hidden">
      <div className="h-screen sticky flex items-center justify-center">
        <div className="relative w-full max-w-4xl pt-20 h-full">

          <motion.div
            className="mt-12 w-full px-4 flex justify-center"
            initial={{ opacity: 0, y: 10}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <TestimonialCard
              name="Will Smith"
              company="Harper education"
              rating={5}
              message="The designs exceeded our expectations! Every element felt purposeful, creating a seamless and visually stunning brand identity."
              imageUrl="/profileimg.png"
              delay={0.3}
            />
          </motion.div>

          <motion.div
            className="mt-12 w-full px-4 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: -250 }}
            transition={{ delay: 1, duration: 1}}
          >
            <TestimonialCard
              name="Ada Lovelace"
              company="TechVerse Inc."
              rating={4.9}
              message="Highly collaborative and deeply creative. Our brand is now memorable thanks to the new visuals."
              imageUrl="/profileimg.png"
              delay={0.6}
            />
          </motion.div>

          <motion.div
            className="mt-12 w-full px-4 flex justify-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: -300 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <TestimonialCard
              name="Elon Ray"
              company="FutureFounders"
              rating={5}
              message="Fantastic execution and intuitive design. Exceeded all performance goals we set."
              imageUrl="/profileimg.png"
              delay={0.9}
            />
          </motion.div>

          <motion.div
            className="mt-12 w-full px-4 flex justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 80 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <TestimonialCard
              name="Tina Zhao"
              company="EduSpark"
              rating={4.8}
              message="Loved the attention to detail and the storytelling in the visuals. Highly recommended!"
              imageUrl="/profileimg.png"
              delay={1.2}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
