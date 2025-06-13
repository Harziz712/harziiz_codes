// app/components/ComparisonCards.tsx
'use client';
import { motion} from 'framer-motion';
import { Check, X } from './Badge';

const comparisons = [
  [ 
    {
      title: 'Skilled Professional',
      description: 'Gain access to top-tier talent with years of experience, ensuring flawless execution.',
      positive: true,
    },
    {
      title: 'Amateur Designer',
      description: 'Lack of experience may result in design inconsistencies and overlooked details.',
      positive: false,
    },
  ],
  [
    {
      title: 'Future-Ready Designs',
      description: 'Crafting modern, scalable designs that grow with your business and stay ahead of trends.',
      positive: true,
    },
    {
      title: 'Outdated Concepts',
      description: "Stale designs that don't reflect current trends or your evolving brand narrative.",
      positive: false,
    },
  ],
  [
    {
      title: 'Client-Centric Collaboration',
      description: 'Your vision leads the way — I work closely with you to bring ideas to life with precision and creativity.',
      positive: true,
    },
    {
      title: 'Detached Communication',
      description: 'Lack of collaboration and poor feedback loops can result in misaligned outcomes.',
      positive: false,
    },
  ],
  [
    {
      title: 'Timely Project Tracking',
      description: 'Stay informed with regular progress updates and timely deliverables.',
      positive: true,
    },
    {
      title: 'Unstructured & Unreliable Work',
      description: 'Inconsistent timelines and last-minute changes can compromise quality.',
      positive: false,
    },
  ]
];

export default function ComparisonCards() {
  return (
    <div className="relative bg-black text-white overflow-hidden py-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto w-full">
          {comparisons.map((pair, index) => {
            return (
              <motion.div
                key={index}
                className="flex justify-center items-center w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 grid grid-cols-1 md:grid-cols-2 gap-4 shadow-lg w-full max-w-4xl h-full">
                  {pair.map((item, subIndex) => (
                    <div
                      key={subIndex}
                      className={`p-4 ${item.positive ? 'border-l-0' : 'border-l '}  ${item.positive ? 'pr-0' : 'pl-8'}`}
                    >
                      <h3 className="text-sm md:text-lg font-semibold flex items-center gap-2" >
                        <span>{item.positive ? <Check/> : <X/>}</span>
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs md:text-sm text-zinc-400">{item.description}</p>
                    </div>
                  ))}   
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}