'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';

const navConfig = [
  { label: 'Home', href: '/' },
  {
    label: 'The Resort',
    items: [
      { label: 'Our Story', href: '/#our-story' },
      { label: 'Vertical Garden', href: '/#vertical-garden' },
      { label: 'Mini Museum', href: '/#mini-museum' },
      { label: 'Gallery', href: '/#gallery' },
    ],
  },
  { label: 'Suites & Investment', href: '/suites' },
  {
    label: 'Experiences',
    items: [
      { label: 'Stargazing Observatory', href: '/#stargazing-observatory' },
      { label: 'Jeep Forest Ride', href: '/#jeep-forest-ride' },
      { label: 'Night Skiing', href: '/#night-skiing' },
      { label: 'Wildlife Sanctuary', href: '/#wildlife-sanctuary' },
    ],
  },
  {
    label: 'Amenities',
    items: [
      { label: 'Wellness Club', href: '/#wellness-club' },
      { label: 'Panorama Restaurant', href: '/#panorama-restaurant' },
      { label: 'Kids Play Area', href: '/#kids-play-area' },
      { label: 'Swat Traditional Centre', href: '/#swat-traditional' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const closeDrawer = () => setIsDrawerOpen(false);

  const renderDropdown = (items, parentLabel) => (
    <div
      className={`${styles.dropdown} ${
        activeDropdown === parentLabel ? styles.dropdownVisible : ''
      }`}
    >
      {items.map((item) => (
        <Link key={item.label} href={item.href} className={styles.dropdownLink}>
          {item.label}
        </Link>
      ))}
    </div>
  );

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Lavita Malam Jabba">
          <div className={styles.logoWrap}>
            <Image
              src="/lavitaPng.PNG"
              alt="Lavita Malam Jabba"
              fill
              sizes="160px"
              priority
            />
          </div>
          <div className={styles.brandWordmark}>
            <span className={styles.brandPrimary}>Lavita</span>
            <span className={styles.brandSecondary}>Malam Jabba</span>
          </div>
        </Link>

        <nav className={styles.desktopNav}>
          {navConfig.map((item) => {
            if (item.items) {
              return (
                <div
                  key={item.label}
                  className={styles.navItem}
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  onFocus={() => setActiveDropdown(item.label)}
                >
                  <button className={styles.navButton} type="button" aria-haspopup="true">
                    <span>{item.label}</span>
                    <ChevronDown className={styles.chevron} />
                  </button>
                  {renderDropdown(item.items, item.label)}
                </div>
              );
            }

            return (
              <Link key={item.label} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.desktopAction}>
          <Link href="/reserve" className={styles.actionButton}>
            Book Your Stay
          </Link>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={toggleDrawer}
          aria-label="Toggle navigation menu"
        >
          {isDrawerOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`${styles.drawerOverlay} ${
          isDrawerOpen ? styles.drawerOverlayVisible : ''
        }`}
        onClick={closeDrawer}
      />

      <aside className={`${styles.drawer} ${isDrawerOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <p className={styles.drawerTitle}>Lavita Navigation</p>
          <button className={styles.drawerClose} aria-label="Close menu" onClick={closeDrawer}>
            <X size={20} />
          </button>
        </div>
        <div className={styles.drawerNav}>
          {navConfig.map((item) => (
            <div key={item.label} className={styles.drawerBlock}>
              <div className={styles.drawerBlockHeader}>
                <p>{item.label}</p>
                {item.items && <span>Explore</span>}
              </div>
              <div className={styles.drawerLinks}>
                {item.items ? (
                  item.items.map((child) => (
                    <Link key={child.label} href={child.href} onClick={closeDrawer}>
                      {child.label}
                    </Link>
                  ))
                ) : (
                  <Link href={item.href} onClick={closeDrawer}>
                    {item.label}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.drawerCta}>
          <Link href="/reserve" onClick={closeDrawer}>
            Book Your Stay
          </Link>
        </div>
      </aside>
    </header>
  );
}
