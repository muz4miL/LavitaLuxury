'use client';

import { Cloud, Snowflake, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen min-h-dvh flex flex-col justify-center items-center overflow-hidden bg-[var(--midnight-pine)]">
      {/* Layered background for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061512] via-[var(--midnight-pine)] via-30% via-[#0a1f1c] via-70% to-[#071714] z-[1]" />
      <div className="absolute inset-0 z-[2]" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(200, 155, 123, 0.08) 0%, transparent 50%)' }} />
      <div className="absolute inset-0 z-[3]" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(200, 155, 123, 0.03) 0%, transparent 30%), radial-gradient(circle at 80% 70%, rgba(200, 155, 123, 0.03) 0%, transparent 30%)' }} />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,21,18,0.4)] via-transparent via-30% via-transparent via-70% to-[rgba(6,21,18,0.6)] z-[4]" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none z-[5]" style={{ background: 'radial-gradient(ellipse at center, rgba(200, 155, 123, 0.04) 0%, transparent 50%)' }} />

      {/* Main Content */}
      <div className="relative z-50 text-center px-6 max-w-[900px] mx-auto">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-[fadeIn_1s_ease-out_0.8s_both]">
          <span className="w-10 h-px opacity-60" style={{ background: 'linear-gradient(90deg, transparent 0%, var(--brushed-copper) 100%)' }} />
          <Cloud className="w-[18px] h-[18px] text-[var(--brushed-copper)] opacity-70" />
          <span className="w-10 h-px opacity-60" style={{ background: 'linear-gradient(90deg, var(--brushed-copper) 0%, transparent 100%)' }} />
        </div>

        {/* Eyebrow text */}
        <p className="font-[family-name:var(--font-manrope)] text-[0.6875rem] md:text-xs font-medium tracking-[0.3em] uppercase text-[var(--brushed-copper)] mb-6 md:mb-8 animate-[fadeSlideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_1s_both]">Ultra-Luxury Mountain Resort</p>

        {/* Main Headline */}
        <h1 className="mb-6 animate-[fadeSlideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_1.1s_both]">
          <span className="block font-[family-name:var(--font-playfair)] text-[1.75rem] md:text-[2.5rem] lg:text-5xl font-normal text-[var(--text-light)] leading-[1.3] mb-1">The Sanctuary in the</span>
          <span className="block font-[family-name:var(--font-playfair)] text-5xl md:text-[4.5rem] lg:text-[5.5rem] font-semibold text-[var(--brushed-copper)] leading-[1.1] bg-gradient-to-br from-[var(--brushed-copper)] via-[#e0b89a] to-[var(--brushed-copper)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Hindu Kush</span>
        </h1>

        {/* Subheadline */}
        <p className="font-[family-name:var(--font-manrope)] text-base md:text-lg font-light text-[rgba(245,245,245,0.7)] leading-[1.8] max-w-[600px] mx-auto mb-12 animate-[fadeSlideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_1.2s_both]">
          <span className="text-[var(--brushed-copper)] font-medium">2804 Meters</span> Above Ordinary
          <span className="inline-block mx-3 text-[rgba(200,155,123,0.4)]">•</span>
          The only Glass-Dome Resort in Swat Valley
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 animate-[fadeSlideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_1.4s_both]">
          <button className="relative inline-flex items-center justify-center px-10 py-[1.125rem] bg-gradient-to-br from-[var(--brushed-copper)] to-[#b8896b] border-none text-[var(--midnight-pine)] font-[family-name:var(--font-manrope)] text-[0.8125rem] font-semibold tracking-[0.15em] uppercase cursor-pointer overflow-hidden transition-all duration-[400ms] cubic-bezier(0.16,1,0.3,1) hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(200,155,123,0.25),0_0_0_1px_rgba(200,155,123,0.3)]">
            <span className="relative z-[2]">Explore the Resort</span>
            <span className="absolute top-0 left-[-100%] w-full h-full transition-[left] duration-[600ms] ease-out" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)' }} />
          </button>
          <a href="#intro" className="font-[family-name:var(--font-manrope)] text-[0.8125rem] font-medium tracking-[0.1em] uppercase text-[rgba(245,245,245,0.7)] no-underline pb-1 border-b border-[rgba(245,245,245,0.3)] transition-all duration-300 hover:text-[var(--brushed-copper)] hover:border-[var(--brushed-copper)]">
            View Experiences
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-50 animate-[fadeIn_1s_ease-out_2s_both]">
        <div className="w-[22px] h-9 border-2 border-[rgba(200,155,123,0.4)] rounded-[11px] flex justify-center pt-[6px]">
          <div className="w-[3px] h-[6px] bg-[var(--brushed-copper)] rounded-sm animate-[scrollBounce_2s_ease-in-out_infinite]" />
        </div>
        <ChevronDown className="w-4 h-4 text-[rgba(200,155,123,0.5)] animate-[scrollChevronBounce_2s_ease-in-out_infinite]" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-[var(--midnight-pine)] to-transparent z-40 pointer-events-none" />
    </section>
  );
}
