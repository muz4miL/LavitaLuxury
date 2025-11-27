import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Music } from 'lucide-react';
import styles from './Footer.module.css';

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Lavita', href: '/#about' },
  { label: 'Investment Opportunities', href: '/#investment' },
  { label: 'Gallery', href: '/#gallery' },
];

const featuresLinks = [
  { label: 'Stargazing Observatory', href: '/#stargazing-observatory' },
  { label: 'Swat Traditional Centre', href: '/#swat-traditional' },
  { label: 'Vertical Garden', href: '/#vertical-garden' },
  { label: 'Wellness Club', href: '/#wellness-club' },
];

const adventuresLinks = [
  { label: 'Jeep Forest Ride', href: '/#jeep-forest-ride' },
  { label: 'Night Skiing', href: '/#night-skiing' },
  { label: 'Snow Tubing', href: '/#snow-tubing' },
  { label: 'Hiking Trails', href: '/#hiking-trails' },
];

const socialIcons = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Music, href: 'https://tiktok.com', label: 'TikTok' },
];

const offices = [
  {
    label: 'ISLAMABAD OFFICE',
    address: 'Office 30, 2nd Floor, Aslam Plaza, E11/2',
  },
  {
    label: 'PESHAWAR OFFICE',
    address: 'Office 333, 3rd Floor, Uhad Tower, Phase 3 Chowk',
  },
  {
    label: 'SWAT SITE OFFICE',
    address: 'Lavita Malam Jabba, Main Malam Chowk',
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.rowBrand}>
          <div className={styles.brandVisual}>
            <div className={styles.logoWrap}>
              <Image src="/lavitaPng.PNG" alt="Lavita brand" fill sizes="240px" />
            </div>
            <div>
              <p className={styles.headline}>Prestigious High-End Hotel Suites Delivering Luxury.</p>
              <p className={styles.trustSignal}>Powered by Shelton Group of Hotels</p>
            </div>
          </div>
          <div className={styles.socialRow}>
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <Link key={label} href={href} aria-label={`Visit Lavita on ${label}`} className={styles.socialIcon}>
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.rowLinks}>
          <div>
            <p className={styles.linksHeading}>Explore</p>
            <div className={styles.linkStack}>
              {exploreLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className={styles.linksHeading}>Unique Features</p>
            <div className={styles.linkStack}>
              {featuresLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className={styles.linksHeading}>Adventures</p>
            <div className={styles.linkStack}>
              {adventuresLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.rowOffices}>
          {offices.map((office) => (
            <div key={office.label} className={styles.officeCard}>
              <p className={styles.officeLabel}>{office.label}</p>
              <p className={styles.officeAddress}>{office.address}</p>
            </div>
          ))}
        </section>

        <div className={styles.contactStrip}>
          <a href="mailto:info@lavitamalamjabba.com">info@lavitamalamjabba.com</a>
          <span>www.lavitamalamjabba.com</span>
        </div>

        <section className={styles.rowLegal}>
          <p>© 2025 Lavita Malam Jabba. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </section>
      </div>
    </footer>
  );
}
