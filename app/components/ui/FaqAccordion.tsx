'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  PlusIcon, X as XIcon } from 'lucide-react';


type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'What services do you offer?',
    answer:
      'I specialize in web design, branding, UI/UX, and Framer development, creating modern, user-friendly experiences tailored to your needs',
  },
  {
    question: 'How do I start working with you?',
    answer:
      'Just send me a message through the contact form or my social handles and we’ll take it from there.',
  },
  {
    question: 'What design tools do you use?',
    answer:
      'I mainly use Figma, Adobe Illustrator, and Framer depending on the project needs.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Timelines vary based on scope, but most projects take 1–4 weeks from kickoff to launch.',
  },
  {
    question: 'Do you provide revisions?',
    answer: 'Yes! I offer 2–3 rounds of revisions depending on the package.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'I work with startups, tech companies, educators, and creators.',
  },
  {
    question: 'Do you offer development services?',
    answer: 'Yes — I develop in Framer and Webflow, and can collaborate with devs on custom stacks.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Pricing depends on project size. I offer fixed packages and custom quotes.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely — I love giving brands a modern refresh that aligns with their vision.',
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
 <div className="relative bg-black text-white overflow-x-hidden overflow-y-auto min-h-screen py-20">
    <div className="max-w-xl mx-auto space-y-4 px-4">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-[#121212] text-white rounded-xl shadow-md overflow-hidden transition-all"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left"
            onClick={() => toggleIndex(index)}
          >
            <span className="text-base font-medium">{item.question}</span>
            {activeIndex === index ? (
              <XIcon className="w-4 h-4 text-white" />
            ) : (
              <PlusIcon className="w-4 h-4 text-white" />
            )}
          </button>

          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-4 text-sm text-gray-300">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  </div>
  )
};

export default FAQAccordion;
