'use client';

import React from 'react';

const stats = [
  {
    value: '100+',
    label: 'Happy clients',
  },
  {
    value: '$250m',
    label: 'revenue added',
  },
  {
    value: '4.8',
    label: 'Average Rating',
  },
];

const StatsCards = () => {
  return (
    <div className="flex flex-wrap gap-4 bg-black py-5">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[#111] rounded-xl px-6 py-8 text-white w-[180px] text-center shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="text-3xl font-semibold">{stat.value}</div>
          <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
