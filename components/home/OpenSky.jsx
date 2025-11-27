'use client';

import { Star, Droplets, ThermometerSun } from 'lucide-react';
import styles from './OpenSky.module.css';

// Pre-defined star positions to avoid hydration mismatch
const starPositions = [
  { left: 5, top: 12 }, { left: 15, top: 8 }, { left: 25, top: 22 },
  { left: 35, top: 5 }, { left: 45, top: 18 }, { left: 55, top: 3 },
  { left: 65, top: 25 }, { left: 75, top: 10 }, { left: 85, top: 20 },
  { left: 95, top: 7 }, { left: 10, top: 35 }, { left: 20, top: 42 },
  { left: 30, top: 30 }, { left: 40, top: 48 }, { left: 50, top: 38 },
  { left: 60, top: 45 }, { left: 70, top: 32 }, { left: 80, top: 50 },
  { left: 90, top: 40 }, { left: 3, top: 55 }, { left: 12, top: 62 },
  { left: 22, top: 58 }, { left: 32, top: 68 }, { left: 42, top: 52 },
  { left: 52, top: 72 }, { left: 62, top: 60 }, { left: 72, top: 78 },
  { left: 82, top: 65 }, { left: 92, top: 70 }, { left: 8, top: 82 },
  { left: 18, top: 88 }, { left: 28, top: 75 }, { left: 38, top: 92 },
  { left: 48, top: 85 }, { left: 58, top: 95 }, { left: 68, top: 80 },
  { left: 78, top: 90 }, { left: 88, top: 77 }, { left: 98, top: 88 },
  { left: 2, top: 15 }, { left: 97, top: 28 }, { left: 7, top: 47 },
  { left: 93, top: 55 }, { left: 17, top: 73 }, { left: 87, top: 33 },
  { left: 27, top: 95 }, { left: 77, top: 4 }, { left: 47, top: 67 },
  { left: 67, top: 15 },
];

export default function OpenSky() {
  return (
    <section className={styles.openSky}>
      {/* Parallax Background */}
      <div className={styles.parallaxBg}>
        {/* Stars */}
        <div className={styles.starsLayer}>
          {starPositions.map((pos, i) => (
            <span
              key={i}
              className={styles.star}
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${(i * 0.06).toFixed(2)}s`,
              }}
            />
          ))}
        </div>
        {/* Shooting star */}
        <div className={styles.shootingStar} />
      </div>

      {/* Content Card */}
      <div className={styles.container}>
        <div className={styles.contentCard}>
          {/* Decorative top border */}
          <div className={styles.topBorder} />

          {/* Section Label */}
          <div className={styles.sectionLabel}>
            <Star className="w-4 h-4 text-[var(--brushed-copper)]" />
            <span>Signature Experience</span>
          </div>

          {/* Heading */}
          <h2 className={styles.heading}>
            Sleep Under
            <br />
            <span className={styles.headingAccent}>the Stars</span>
          </h2>

          {/* Description */}
          <p className={styles.description}>
            Our Triple-Glazed Heated Glass Domes ensure a clear view of the 
            Milky Way, with instant hot water rainfall showers. Experience 
            the cosmos in absolute comfort.
          </p>

          {/* Features */}
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <ThermometerSun className="w-5 h-5" />
              </div>
              <div className={styles.featureText}>
                <span className={styles.featureTitle}>Climate Controlled</span>
                <span className={styles.featureDesc}>-20°C to 25°C comfort</span>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Droplets className="w-5 h-5" />
              </div>
              <div className={styles.featureText}>
                <span className={styles.featureTitle}>Rainfall Showers</span>
                <span className={styles.featureDesc}>Instant hot water</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button className={styles.ctaButton}>
            Book a Dome Experience
          </button>
        </div>
      </div>
    </section>
  );
}
