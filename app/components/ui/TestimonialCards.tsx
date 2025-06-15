'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  message: string;
  imageUrl: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  company,
  message,
  imageUrl,
  rating,
  
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-[#111] border border-zinc-800 text-white rounded-2xl p-6 w-full max-w-xl  shadow-lg"

    >
      <div className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt={name}
          width={60}
          height={60}
          className="rounded-md object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-400">{company}</p>
        </div>
      </div>

      <div className="my-4 border-t border-zinc-700" />

      <div className="flex items-center gap-1 text-yellow-400 text-sm mb-2">
        <span>{rating.toFixed(1)}</span>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" stroke="none" />
        ))}
      </div>

      <p className="text-sm text-gray-300">{message}</p>
    </motion.div>
  );
}
