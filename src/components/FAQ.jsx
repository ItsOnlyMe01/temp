"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import contentData from '../data/content.js';

export default function FAQ({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = data || contentData.faq || {};
  const faqItems = faqData.items || [];
  const badgeText = faqData.badge || 'KNOWLEDGE BASE';
  const titleText = faqData.title || 'Frequently Asked Questions';
  const subtitleText = faqData.subtitle || 'Everything you need to know about the FollowProperty real estate network.';

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 md:py-28 overflow-hidden bg-white border-t border-brand-borderMid/10">
      
      {/* Modern structural dot mesh background */}
      <div className="absolute inset-0 bg-dot-mesh pointer-events-none z-0"></div>

      {/* Background glow in brand electric blue */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[620px] h-[620px] bg-gradient-to-tr from-brand-primary/4 to-brand-teal/2 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-primaryBorder/20 text-[10px] sm:text-xs font-semibold tracking-widest text-brand-primary uppercase mb-5 transition-premium font-sans mx-auto">
            <HelpCircle className="w-4 h-4 text-brand-primary shrink-0" />
            {badgeText}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-4 font-sans leading-tight text-center">
            {titleText}
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-brand-slate font-normal leading-relaxed">
            {subtitleText}
          </p>
        </div>

        {/* Accordions (Clean Separator Stack) */}
        <div className="space-y-0 border-t border-brand-border/30">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-brand-border/30 transition-premium overflow-hidden"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none transition-premium cursor-pointer group"
                >
                  <span className={`font-semibold text-base sm:text-lg pr-4 transition-premium font-sans ${
                    isOpen ? 'text-brand-primary' : 'text-brand-navy group-hover:text-brand-primary'
                  }`}>
                    {item.question}
                  </span>
                  <div className="shrink-0 ml-4">
                    <ChevronDown className={`w-5 h-5 text-brand-slateLight transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-brand-primary' : 'group-hover:text-brand-navy'
                    }`} />
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="pb-6 pr-10 text-xs sm:text-sm md:text-base text-brand-slate font-normal leading-relaxed font-sans">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
