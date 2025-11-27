'use client';

import { Cloud, Snowflake } from 'lucide-react';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={`${styles.hero} relative min-h-screen flex items-center justify-center overflow-hidden`}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--midnight-pine)] via-[var(--midnight-pine)]/90 to-[var(--midnight-pine)]" />
      
      {/* Animated background elements */}
      <div className={styles.mountainsBg} />
      
      {/* Weather Widget - Top Right */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--brushed-copper)]/30 bg-[var(--midnight-pine)]/60 backdrop-blur-sm">
          <Snowflake className="w-4 h-4 text-[var(--brushed-copper)]" />
          <span className="text-sm font-medium text-[var(--text-light)]">-2°C</span>
          <span className="text-xs text-[var(--text-light)]/70">• Light Snow</span>
        </div>
      </div>

      {/* Logo/Brand - Top Left */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
        <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl tracking-wider text-[var(--brushed-copper)]">
          LAVITA
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-[var(--brushed-copper)]" />
          <Cloud className="w-5 h-5 text-[var(--brushed-copper)]" />
          <div className="h-px w-12 bg-[var(--brushed-copper)]" />
        </div>

        {/* Main Headline */}
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-semibold text-[var(--text-light)] mb-6 leading-tight">
          The Sanctuary in the
          <br />
          <span className="text-[var(--brushed-copper)]">Hindu Kush</span>
        </h1>

        {/* Subheadline */}
        <p className="font-[family-name:var(--font-manrope)] text-lg md:text-xl text-[var(--text-light)]/80 mb-10 max-w-2xl mx-auto font-light">
          2804 Meters Above Ordinary. The only Glass-Dome Resort in Swat Valley.
        </p>

        {/* CTA Button */}
        <button className="group relative px-8 py-4 border-2 border-[var(--brushed-copper)] bg-transparent text-[var(--brushed-copper)] font-[family-name:var(--font-manrope)] font-medium tracking-wide transition-all duration-300 hover:bg-[var(--brushed-copper)] hover:text-[var(--midnight-pine)]">
          <span className="relative z-10">Explore the Resort</span>
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className={styles.scrollIndicator}>
            <div className={styles.scrollDot} />
          </div>
        </div>
      </div>
    </section>
  );
}
