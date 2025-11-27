'use client';

import { Cloud, Snowflake, ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Layered background for depth */}
      <div className={styles.bgLayer1} />
      <div className={styles.bgLayer2} />
      <div className={styles.bgLayer3} />
      
      {/* Subtle gradient overlay */}
      <div className={styles.overlay} />
      
      {/* Ambient glow */}
      <div className={styles.ambientGlow} />

      {/* Weather Widget - Top Right */}
      <div className={styles.weatherContainer}>
        <div className={styles.weatherWidget}>
          <Snowflake className={styles.weatherIcon} />
          <div className={styles.weatherInfo}>
            <span className={styles.weatherTemp}>-2°C</span>
            <span className={styles.weatherCondition}>Light Snow</span>
          </div>
        </div>
      </div>

      {/* Logo/Brand - Top Left */}
      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <span className={styles.logoLine} />
          <h2 className={styles.logo}>LAVITA</h2>
          <span className={styles.logoLine} />
        </div>
        <span className={styles.logoTagline}>Malam Jabba</span>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Decorative element */}
        <div className={styles.decorElement}>
          <span className={styles.decorLine} />
          <Cloud className={styles.decorIcon} />
          <span className={styles.decorLine} />
        </div>

        {/* Eyebrow text */}
        <p className={styles.eyebrow}>Ultra-Luxury Mountain Resort</p>

        {/* Main Headline */}
        <h1 className={styles.headline}>
          <span className={styles.headlineSmall}>The Sanctuary in the</span>
          <span className={styles.headlineMain}>Hindu Kush</span>
        </h1>

        {/* Subheadline */}
        <p className={styles.subheadline}>
          <span className={styles.subheadlineHighlight}>2804 Meters</span> Above Ordinary
          <span className={styles.subheadlineDivider}>•</span>
          The only Glass-Dome Resort in Swat Valley
        </p>

        {/* CTA Button */}
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>
            <span className={styles.ctaText}>Explore the Resort</span>
            <span className={styles.ctaShine} />
          </button>
          <a href="#intro" className={styles.ctaSecondary}>
            View Experiences
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollContainer}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <ChevronDown className={styles.scrollChevron} />
      </div>
      
      {/* Bottom gradient fade */}
      <div className={styles.bottomFade} />
    </section>
  );
}
