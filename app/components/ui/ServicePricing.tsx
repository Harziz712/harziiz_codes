'use client';

import React from 'react';

type ServiceItem = {
  title: string;
  price: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    title: 'Web Development',
    price: 'Starting from $1,999',
    description: 'Creating responsive, high-performance websites that engage users and drive results.',
  },
  {
    title: 'Mobile App Development',
    price: 'Starting from $4,999',
    description:
      'Building visually stunning, user-focused mobile applications that drive engagement and growth.',
  },
];

const ServicePricing = () => {
  return (
    <div className="max-w-3xl mx-auto divide-y divide-[#2a2a2a] text-white px-4">
      {services.map((service, idx) => (
        <div key={idx} className="py-6">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <span className="bg-[#1f1f1f] text-sm px-3 py-1 rounded-full font-medium">
              {service.price}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-400 text-left" >{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicePricing;
