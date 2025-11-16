
import React, { useState } from 'react';
import { FAQItem } from '../../types';
import { ChevronDown } from '../icons/Icons';

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-slate-700 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg hover:bg-slate-800/50 transition-colors"
          >
            <span>{item.question}</span>
            <ChevronDown
              className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`transition-all duration-500 ease-in-out grid ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
          >
            <div className="overflow-hidden">
              <p className="p-6 pt-0 text-slate-300">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
