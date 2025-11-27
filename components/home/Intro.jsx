'use client';

import { ArrowRight } from 'lucide-react';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        {/* Image Side */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            {/* Placeholder for actual image - using gradient for demo */}
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageOverlay} />
              <span className={styles.imageLabel}>Resort View</span>
            </div>
          </div>
          {/* Decorative frame */}
          <div className={styles.decorFrame} />
        </div>

        {/* Content Side */}
        <div className={styles.content}>
          <div className={styles.contentInner}>
            {/* Section Label */}
            <div className={styles.sectionLabel}>
              <span className={styles.labelLine} />
              <span className={styles.labelText}>Welcome</span>
            </div>

            {/* Heading */}
            <h2 className={styles.heading}>
              A Gateway to the
              <br />
              <span className={styles.headingAccent}>Extraordinary</span>
            </h2>

            {/* Description */}
            <p className={styles.description}>
              Nestled in the majestic Hindu Kush mountains, Lavita is a gateway 
              to the extraordinary. From climate-controlled glass domes to 
              world-class ski slopes, every moment here transcends the ordinary 
              and embraces the sublime.
            </p>

            {/* Features List */}
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.featureDot} />
                Climate-Controlled Glass Domes
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureDot} />
                World-Class Ski Slopes
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureDot} />
                Panoramic Mountain Views
              </li>
            </ul>

            {/* CTA Link */}
            <a href="#" className={styles.ctaLink}>
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
