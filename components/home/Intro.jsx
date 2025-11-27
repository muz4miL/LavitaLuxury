'use client';

import { ArrowRight } from 'lucide-react';

export default function Intro() {
  return (
    <section className="relative bg-[var(--alabaster-mist)] px-6 py-12 lg:px-8 lg:py-20 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[200px] before:bg-gradient-to-b before:from-[rgba(15,37,34,0.03)] before:to-transparent before:pointer-events-none">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden shadow-[0_25px_50px_-12px_rgba(15,37,34,0.25),0_0_0_1px_rgba(15,37,34,0.05)]">
            {/* Placeholder for actual image - using gradient for demo */}
            <div className="w-full h-full bg-gradient-to-br from-[var(--midnight-pine)] via-[#1a4a42] to-[var(--midnight-pine)] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,37,34,0.7)] to-transparent to-60%" />
              <span className="relative z-[1] font-[family-name:var(--font-manrope)] text-[0.6875rem] tracking-[0.35em] uppercase text-[var(--brushed-copper)] py-3 px-6 border border-[rgba(200,155,123,0.3)]">
                Resort View
              </span>
            </div>
          </div>
          {/* Decorative frame */}
          <div className="absolute top-6 lg:top-10 left-6 lg:left-10 right-[-1.5rem] lg:right-[-2.5rem] bottom-[-1.5rem] lg:bottom-[-2.5rem] border border-[var(--brushed-copper)] opacity-25 -z-[1]" />
        </div>

        {/* Content Side */}
        <div className="py-4 lg:py-8">
          <div className="max-w-[520px]">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-px" style={{ background: 'linear-gradient(90deg, var(--brushed-copper) 0%, transparent 100%)' }} />
              <span className="font-[family-name:var(--font-manrope)] text-[0.6875rem] tracking-[0.25em] uppercase text-[var(--brushed-copper)] font-semibold">Welcome</span>
            </div>

            {/* Heading */}
            <h2 className="font-[family-name:var(--font-playfair)] text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] font-medium text-[var(--text-dark)] leading-[1.15] mb-7">
              A Gateway to the
              <br />
              <span className="text-[var(--brushed-copper)] block italic">Extraordinary</span>
            </h2>

            {/* Description */}
            <p className="font-[family-name:var(--font-manrope)] text-base md:text-[1.0625rem] leading-[1.9] text-[var(--text-dark)] opacity-75 mb-10">
              Nestled in the majestic Hindu Kush mountains, Lavita is a gateway
              to the extraordinary. From climate-controlled glass domes to
              world-class ski slopes, every moment here transcends the ordinary
              and embraces the sublime.
            </p>

            {/* Features List */}
            <ul className="list-none p-0 m-0 mb-10 flex flex-col gap-4">
              <li className="flex items-center gap-4 font-[family-name:var(--font-manrope)] text-[0.9375rem] text-[var(--text-dark)] font-medium">
                <span className="w-2 h-2 bg-[var(--brushed-copper)] rounded-full shrink-0 shadow-[0_0_0_3px_rgba(200,155,123,0.15)]" />
                Climate-Controlled Glass Domes
              </li>
              <li className="flex items-center gap-4 font-[family-name:var(--font-manrope)] text-[0.9375rem] text-[var(--text-dark)] font-medium">
                <span className="w-2 h-2 bg-[var(--brushed-copper)] rounded-full shrink-0 shadow-[0_0_0_3px_rgba(200,155,123,0.15)]" />
                World-Class Ski Slopes
              </li>
              <li className="flex items-center gap-4 font-[family-name:var(--font-manrope)] text-[0.9375rem] text-[var(--text-dark)] font-medium">
                <span className="w-2 h-2 bg-[var(--brushed-copper)] rounded-full shrink-0 shadow-[0_0_0_3px_rgba(200,155,123,0.15)]" />
                Panoramic Mountain Views
              </li>
            </ul>

            {/* CTA Link */}
            <a href="#" className="inline-flex items-center gap-3 font-[family-name:var(--font-manrope)] text-[0.8125rem] font-semibold tracking-[0.1em] uppercase text-[var(--midnight-pine)] no-underline py-4 border-b-2 border-[var(--midnight-pine)] transition-all duration-[400ms] cubic-bezier(0.16,1,0.3,1) hover:gap-5 hover:text-[var(--brushed-copper)] hover:border-[var(--brushed-copper)]">
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
