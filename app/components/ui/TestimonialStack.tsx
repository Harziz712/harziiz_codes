'use client';

import { motion } from 'framer-motion';
import React from 'react';
import TestimonialCard from './TestimonialCards';

const TestimonialCards = () => {
  return (
    <div className="relative bg-black text-white overflow-x-hidden overflow-y-auto min-h-screen py-20">
      <div className="flex flex-col items-center justify-center space-y-20 max-w-4xl mx-auto">

        <motion.div
          className="w-full px-4 flex justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <TestimonialCard
            name="Will Smith"
            company="Harper education"
            rating={5}
            message="The designs exceeded our expectations! Every element felt purposeful, creating a seamless and visually stunning brand identity."
            imageUrl="/profileimg.png"
          />
        </motion.div>

        <motion.div
          className="w-full px-4 flex justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <TestimonialCard
            name="Ada Lovelace"
            company="TechVerse Inc."
            rating={4.9}
            message="Highly collaborative and deeply creative. Our brand is now memorable thanks to the new visuals."
            imageUrl="/profileimg.png"
          />
        </motion.div>

        <motion.div
          className="w-full px-4 flex justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.1 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <TestimonialCard
            name="Elon Ray"
            company="FutureFounders"
            rating={5}
            message="Fantastic execution and intuitive design. Exceeded all performance goals we set."
            imageUrl="/profileimg.png"
          />
        </motion.div>

        <motion.div
          className="w-full px-4 flex justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.4 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <TestimonialCard
            name="Tina Zhao"
            company="EduSpark"
            rating={4.8}
            message="Loved the attention to detail and the storytelling in the visuals. Highly recommended!"
            imageUrl="/profileimg.png"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default TestimonialCards;
