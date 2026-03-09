'use client';

import { useState } from 'react';
import { FAQData } from '@/data/faq';
import Title from '../Title';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>('1');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(FAQData.map(faq => faq.category).filter(Boolean))) as string[]];

  // Filter FAQs based on selected category
  const filteredData = selectedCategory && selectedCategory !== 'All'
    ? FAQData.filter(faq => faq.category === selectedCategory)
    : FAQData;

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <Title 
          title="Frequently Asked Questions" 
          className="from-amber-500 to-amber-400 mb-12"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                (category === 'All' && selectedCategory === null) ||
                selectedCategory === category
                  ? 'bg-amber-600 border-amber-500 text-white shadow-lg shadow-amber-600/50'
                  : 'border-amber-700/50 text-amber-200 hover:border-amber-600 hover:text-amber-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQs Grid */}
        <div className="space-y-3 sm:space-y-4">
          {filteredData.length > 0 ? (
            filteredData.map((faq) => (
              <div
                key={faq.id}
                className="group border border-amber-700/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-amber-600/60 hover:shadow-lg hover:shadow-amber-900/20 bg-black/30 backdrop-blur-sm"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-amber-900/10 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      {faq.category && (
                        <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-amber-500/70 bg-amber-900/30 px-2 py-1 rounded">
                          {faq.category}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-amber-50 mt-2 group-hover:text-amber-200 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Chevron Icon */}
                  <ChevronDown
                    size={20}
                    className={`ml-4 text-amber-500 flex-shrink-0 transition-transform duration-300 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openId === faq.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 py-4 bg-amber-950/20 border-t border-amber-700/20 text-amber-50/80 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-amber-200/60">No FAQs found for this category.</p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg border border-amber-700/40 bg-gradient-to-r from-amber-950/40 to-black/40 text-center">
          <p className="text-amber-50 mb-4 text-sm sm:text-base">
            Didn&apos;t find your answer?
          </p>
          <a
            href="#contact"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg hover:from-amber-500 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-amber-600/50 hover:shadow-amber-600/70 text-sm sm:text-base"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
