"use client";

import React from 'react';
import { Users, Sparkles, Globe } from 'lucide-react';
import contentData from '../data/content.js';

export default function Team({ data }) {
  const teamData = data || contentData.team || {};
  const badgeText = teamData.badge || 'TEAM & VISION';
  const titleText = teamData.title || 'Built by a Dedicated Team';
  const subtitleText = teamData.subtitle || "A focused 10-member team working across engineering, analytics, product design, and real estate research.";
  const stats = teamData.stats || [
    "10+ Team Members",
    "Analytics Driven",
    "India Real Estate Focused"
  ];

  // Parse generic strings into premium high-impact metric values and labels
  const parseStat = (stat) => {
    const match = stat.match(/^([0-9\+\%]+)\s*(.*)$/);
    if (match) {
      return { value: match[1], label: match[2] };
    }
    if (stat.toLowerCase().includes("analytics")) {
      return { value: "100%", label: "Analytics Driven" };
    }
    if (stat.toLowerCase().includes("india")) {
      return { value: "India", label: "Real Estate Focused" };
    }
    return { value: "★", label: stat };
  };

  // Helper to map stat indices to corresponding beautiful premium icons and theme colors
  const getStatIconAndTheme = (index) => {
    switch (index) {
      case 0:
        return {
          icon: <Users className="w-4 h-4" />,
          bgClass: "bg-brand-primaryBg border-brand-primaryBorder/30 text-brand-primary",
          dotColor: "bg-brand-primary shadow-[0_0_6px_#325FEC]"
        };
      case 1:
        return {
          icon: <Sparkles className="w-4 h-4" />,
          bgClass: "bg-brand-tealBg border-brand-tealBorder/30 text-brand-teal",
          dotColor: "bg-brand-teal shadow-[0_0_6px_#0EA5E9]"
        };
      case 2:
      default:
        return {
          icon: <Globe className="w-4 h-4" />,
          bgClass: "bg-brand-primaryBg border-brand-primaryBorder/30 text-brand-primary",
          dotColor: "bg-brand-primary shadow-[0_0_6px_#325FEC]"
        };
    }
  };

  return (
    <section id="team" className="relative py-20 md:py-28 overflow-hidden bg-white border-b border-brand-borderMid/10">
      
      {/* Modern structural dot mesh background */}
      <div className="absolute inset-0 bg-dot-mesh pointer-events-none z-0"></div>

      {/* Background ambient lighting */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/2 rounded-full blur-[130px] pointer-events-none z-0"></div>
      <div className="absolute right-1/4 bottom-0 w-[400px] h-[400px] bg-brand-primary/2 rounded-full blur-[110px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          {/* Tag / Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-brand-primaryBorder/20 text-[10px] sm:text-xs font-semibold tracking-widest text-brand-primary uppercase mb-4 transition-premium font-sans mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block mr-2 animate-pulse"></span>
            {badgeText}
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-4 font-sans leading-tight">
            {titleText}
          </h2>
          
          {/* Supporting Sentence */}
          <p className="max-w-xl mx-auto text-sm sm:text-base text-brand-slate font-normal leading-relaxed font-sans">
            {subtitleText}
          </p>
        </div>

        {/* 3 Metric Columns (De-carded & Floating) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 mt-16 max-w-4xl mx-auto w-full text-center">
          {stats.map((stat, index) => {
            const { value, label } = parseStat(stat);
            return (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 transition-premium hover:-translate-y-0.5"
              >
                {/* Large Premium Metric Value */}
                <span className="text-4xl sm:text-5xl font-black text-brand-navy font-sans tracking-tight mb-3">
                  {value}
                </span>
                {/* Metric Label */}
                <span className="text-xs sm:text-[13px] font-semibold text-brand-slate tracking-wider uppercase font-sans">
                  {label}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
