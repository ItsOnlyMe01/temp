"use client";
import React from 'react';
import { ArrowRight, Home, ShieldCheck } from 'lucide-react';

export default function Hero({ data, onOpenLeadForm }) {
  if (!data) return null;

  const securityText = data.securityText || 'Secure waitlist registry allocation • Zero spam guarantee';

  return (
    <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-white w-full flex flex-col items-center justify-center">

      {/* Decorative gradient glow in brand color */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[620px] h-[320px] sm:h-[620px] bg-gradient-to-tr from-brand-primary/5 to-brand-primary/1 rounded-full blur-[80px] sm:blur-[130px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">

        {/* Institutional Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primaryBg border border-brand-primaryBorder/10 mb-6 transition-premium mx-auto">
          <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-brand-primary uppercase font-sans">
            {data.badge}
          </span>
        </div>

        {/* Smart Headline (Centered, Static, Calm, and Premium) */}
        <h1 className="text-[32px] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-navy leading-[1.12] mb-6 font-sans max-w-3xl mx-auto px-2 sm:px-0">
          {data.title}
        </h1>

        {/* Subheadline (Centered) */}
        <p className="max-w-2xl mx-auto text-xs sm:text-base lg:text-lg text-brand-slate font-normal leading-relaxed mb-8 text-center px-4 sm:px-0">
          {data.subtitle}
        </p>

        {/* CTA Button Block (Centered) */}
        <div className="w-full max-w-xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center w-full mb-5 px-4">
            {/* Primary CTA: Request Early Access */}
            <button
              onClick={onOpenLeadForm}
              className="w-full sm:w-auto max-w-xs sm:max-w-none px-5.5 py-2.5 sm:px-7 sm:py-3 rounded-full font-bold text-xs tracking-widest uppercase bg-white text-brand-navy border border-brand-navy/80 hover:bg-brand-navy hover:text-white hover:border-brand-navy shadow-sm hover:-translate-y-0.5 active:translate-y-0 hover:scale-[1.012] active:scale-[0.988] transition-premium flex items-center justify-center gap-2 cursor-pointer font-sans shrink-0 group/btn"
            >
              <Home className="w-4 h-4 text-brand-navy group-hover/btn:text-white transition-colors" />
              {data.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Secondary Link: Consultative Advisory Desk Link */}
          <div className="flex justify-center">
            <a
              href="/iwant"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-brand-slate hover:text-brand-navy transition-premium cursor-pointer no-underline group"
            >
              <span>Looking for property guidance?</span>
              <span className="text-brand-primary font-semibold border-b border-brand-primary/20 group-hover:border-brand-primary/80 transition-premium pb-0.5">
                Speak with our real-estate team
              </span>
              <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300 font-semibold text-brand-primary">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Security Guarantee Seal (Centered) */}
        <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-brand-slateLight tracking-wide font-sans mt-12 mx-auto">
          <ShieldCheck className="w-4 h-4 text-brand-primary" />
          {securityText}
        </div>

      </div>
    </section>
  );
}
