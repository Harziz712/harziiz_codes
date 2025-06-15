'use client';
'use client';
import { motion, useTransform } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface CardProps {
  leftTitle: string;
  leftDescription: string;
  rightTitle: string;
  rightDescription: string;
}

export default function ComparisonCards({
  leftTitle,
  leftDescription,
  rightTitle,
  rightDescription,
}: CardProps) {

  return (
    <motion.div  className="absolute left-0 w-full md:px-4">
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 grid grid-cols-2 md:grid-cols-2 gap-4 shadow-lg">
        <div className="md:p-4 border-l-0 pr-0">
          <h3 className="text-sm md:text-lg font-semibold flex items-center gap-2">
            <Check />
            {leftTitle}
          </h3>
          <p className="mt-2 text-xs md:text-sm text-zinc-400">
            {leftDescription}
          </p>
        </div>
        <div className="md:p-4 border-l pl-8 ">
          <h3 className="text-sm md:text-lg font-semibold flex items-center gap-2">
            <X />
            {rightTitle}
          </h3>
          <p className="mt-2 text-xs md:text-sm text-zinc-400">
            {rightDescription}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
