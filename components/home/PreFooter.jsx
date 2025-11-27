'use client';

import { Phone, Mail, Sparkles } from 'lucide-react';
import styles from './PreFooter.module.css';

export default function PreFooter() {
  return (
    <section className={styles.preFooter}>
      {/* Ambient background glow */}
      <div className={styles.ambientGlow} />
      
      <div className={styles.container}>
        {/* Decorative element */}
        <div className={styles.decorTop}>
          <div className={styles.decorLine} />
          <Sparkles className={styles.decorIcon} />
          <div className={styles.decorLine} />
        </div>

        {/* Main Heading - Sanctuary */}
        <h2 className={styles.heading}>
          Your Sanctuary Awaits
        </h2>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          The mountains are calling. Let our concierge curate your escape.
        </p>

        {/* Contact Card - Bordered Box */}
        <div className={styles.contactBox}>
          <div className={styles.contactRow}>
            <div className={styles.contactItem}>
              <Phone className={styles.contactItemIcon} />
              <div className={styles.contactItemContent}>
                <span className={styles.contactItemLabel}>Reservations</span>
                <a href="tel:+923001234567" className={styles.contactItemValue}>
                  +92 300 123 4567
                </a>
              </div>
            </div>
            
            <div className={styles.contactDivider} />
            
            <div className={styles.contactItem}>
              <Mail className={styles.contactItemIcon} />
              <div className={styles.contactItemContent}>
                <span className={styles.contactItemLabel}>Email</span>
                <a href="mailto:guest@lavita.com" className={styles.contactItemValue}>
                  guest@lavita.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - Glowing */}
        <button className={styles.ctaButton}>
          <span className={styles.ctaText}>Book Your Stay</span>
          <span className={styles.ctaGlow} />
        </button>

        {/* Bottom decoration */}
        <div className={styles.decorBottom}>
          <span className={styles.brandName}>LAVITA</span>
          <span className={styles.tagline}>Malam Jabba</span>
        </div>
      </div>
    </section>
  );
}
