"use client";

import React from 'react';
import { ShieldCheck, Compass, Sparkles } from 'lucide-react';

export default function About() {
  const corePillars = [
    {
      title: "Technology & Analytics",
      desc: "Deploying proprietary tracking systems and circle-rate indices to provide objective, data-backed guidance.",
      icon: Compass
    },
    {
      title: "Advisory Assistance",
      desc: "Delivering institutional-grade consultation tailormade for individual buyers, family offices, and developers.",
      icon: Sparkles
    },
    {
      title: "Compliance & Transparency",
      desc: "Auditing municipal RERA filings and transaction titles to secure acquisitions and minimize transaction risk.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="relative py-20 md:py-28 bg-white border-b border-brand-borderMid/10 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Modern structural dot mesh background */}
      <div className="absolute inset-0 bg-dot-mesh pointer-events-none z-0"></div>

      {/* Background decorative glows */}
      <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] bg-brand-primary/3 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] bg-brand-teal/2 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Small subtle badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-primaryBorder/20 text-[10px] sm:text-xs font-semibold tracking-widest text-brand-primary uppercase mb-6 transition-premium font-sans mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block animate-pulse"></span>
          ABOUT US
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-sans max-w-3xl leading-tight mx-auto mb-6">
          Smarter decisions, built with complete trust.
        </h2>

        {/* Short Text */}
        <p className="text-sm sm:text-base lg:text-lg text-brand-slate font-normal leading-relaxed max-w-2xl mx-auto font-sans">
          Follow Property is a modern real-estate solutions company focused on simplifying property discovery, real-estate decisions, and consultative guidance through technology and personalized support.
        </p>

        {/* 3 Pillar Columns (Borderless & Shadowless) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-16 w-full max-w-5xl">
          {corePillars.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx} 
                className="p-6 group text-center flex flex-col items-center transition-premium hover:-translate-y-1"
              >
                {/* Minimal Icon Container */}
                <div className="w-10 h-10 rounded-xl bg-brand-primaryBg border border-brand-primaryBorder/20 flex items-center justify-center text-brand-primary group-hover-gradient transition-premium mb-5 shrink-0 shadow-sm">
                  <Icon className="w-4.5 h-4.5 transition-premium" />
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-brand-navy font-sans leading-tight">
                  {card.title}
                </h3>

                {/* Supporting Line */}
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mt-3 font-sans font-normal max-w-xs">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
