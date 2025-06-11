import { motion } from 'framer-motion';

export const testimonials = [
  {
    text: '" Working with him was a game changer! "',
    author: '- dd3vahmad',
  },
  {
    text: '" We Increased our conversions by 200%"',
    author: '- Zeezdevps',
  },
];

import type { AnimationControls, TargetAndTransition, VariantLabels } from 'framer-motion';

export const TestimonialCard = ({
  text,
  author,
  className,
  animate,
}: {
  text: string;
  author: string;
  className?: string;
  animate?: boolean | AnimationControls | TargetAndTransition | VariantLabels;
}) => (
  <motion.div
    animate={animate}
    transition={{ duration: 3, repeat: Infinity }}
    className={`bg-gradient-to-br from-neutral-800 to-neutral-900 text-white p-6 rounded-xl shadow-lg w-[200px] h-[140px] text-sm flex flex-col border-2 border-gray-500 justify-center items-center text-center ${className}`}
  >
    <p>{text}</p>
    <p className="text-right mt-4 text-neutral-400">{author}</p>
  </motion.div>
);
