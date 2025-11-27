'use client';

import { Gamepad2, Building2, Trees } from 'lucide-react';
import styles from './BentoGrid.module.css';

const bentoItems = [
  {
    id: 'vr',
    title: 'Next-Gen Entertainment',
    subtitle: 'Virtual Reality & Soft Play',
    label: 'IMMERSIVE EXPERIENCE',
    icon: Gamepad2,
    size: 'large',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80',
  },
  {
    id: 'corporate',
    title: 'Elevated Business',
    subtitle: 'Tech-enabled retreats',
    label: 'PREMIUM HOSPITALITY',
    icon: Building2,
    size: 'small',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600&q=80',
  },
  {
    id: 'adventure',
    title: 'Wilderness Calls',
    subtitle: '800m Zipline & Leopard Tracking',
    label: 'ADVENTURE AWAITS',
    icon: Trees,
    size: 'small',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
  },
];

export default function BentoGrid() {
  return (
    <section className={styles.bentoSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>Experiences</span>
            <span className={styles.labelLine} />
          </div>
          <h2 className={styles.sectionTitle}>Resort Lifestyle</h2>
          <p className={styles.sectionSubtitle}>
            Curated experiences that transcend the ordinary
          </p>
        </div>

        {/* Bento Grid */}
        <div className={styles.grid}>
          {bentoItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`${styles.bentoCard} ${styles[item.size]}`}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Gradient overlay on image */}
                <div className={styles.imageOverlay} />
                
                {/* Label badge */}
                <div className={styles.labelBadge}>
                  <span>{item.label}</span>
                </div>
                
                {/* Icon */}
                <div className={styles.iconWrapper}>
                  <IconComponent className={styles.icon} />
                </div>
                
                {/* Content at bottom */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardSubtitle}>{item.subtitle}</p>
                </div>

                {/* Hover overlay */}
                <div className={styles.hoverOverlay} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
