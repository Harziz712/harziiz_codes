'use client';

import { motion } from 'framer-motion';
import {
  MousePointerClick,
  ListOrdered,
  Code2,
  Rocket,
} from 'lucide-react';
import { StylishBadge } from './ui/Badge';

const steps = [
  {
    icon: <MousePointerClick size={24} />,
    title: "Let's Get In Touch",
    description:
      'Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas.',
    step: 'Step 1',
  },
  {
    icon: <ListOrdered size={24} />,
    title: 'Grab Your Designs',
    description:
      'Tell me your unique vision, and I’ll create stunning, functional designs that perfectly align with your goals.',
    step: 'Step 2',
  },
  {
    icon: <Code2 size={24} />,
    title: 'Kickstart Development',
    description:
      'I expertly transform your designs into a powerful, scalable solution, fully ready to launch.',
    step: 'Step 3',
  },
  {
    icon: <Rocket size={24} />,
    title: 'And Hand Over',
    description:
      'Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support.',
    step: 'Step 4',
  },
];

const HowItWorks =() =>{
  return (
    <section className="bg-black text-white px-4 py-16 md:px-8 lg:px-20 border-b-2 pb-24 border-b-neutral-600">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
              <div className={`flex items-center justify-center my-5 object-cover `}>
       <StylishBadge className='border border-gray-700 '>How it works</StylishBadge>
       </div>
          <h2 className="text-4xl font-bold">
            <span className="text-white">Process </span>
            <span className="text-gray-400">Is Everything</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Simple, streamlined process is what gets you results
          </p>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative bg-neutral-900 rounded-xl p-6 border border-neutral-800 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <div className="mb-4 text-white">{step.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm mb-6">{step.description}</p>
            
            <div className="absolute bottom-4 left-4 bg-neutral-800 text-sm px-3 py-1 rounded-full">
              {step.step}
            </div>
            <div className="absolute top-4 right-4 w-6 h-6 bg-neutral-800 rounded-full flex items-center justify-center text-xs font-bold">
              {index + 1}
            </div>
          </motion.div>
        ))}
      </div>

    <motion.div
      className="mt-12 rounded-2xl bg-neutral-900 border w-full max-w-3xl mx-auto border-neutral-800 p-4 flex flex-col md:flex-row items-center justify-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="flex flex-col items-center md:items-start flex-1">
        <p className="text-white text-center md:text-left font-medium text-base">
        🤝 I am with you in every step
        </p>
        <p className="text-gray-400 text-xs text-center md:text-left mt-1">
        Alongside you at each step for a seamless experience
        </p>
      </div>
      <div className="flex gap-2 mt-2 md:mt-0">
        <button className="bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium">
        Contact Now
        </button>
        <button className="bg-neutral-800 px-3 py-1.5 rounded-full text-xs font-medium text-white">
        See All Projects
        </button>
      </div>
    </motion.div>
    </section>
  );
}

export default HowItWorks
