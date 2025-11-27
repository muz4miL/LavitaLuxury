'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Accommodations', href: '#accommodations' },
    { label: 'Dining', href: '#dining' },
    { label: 'Wellness', href: '#wellness' },
    { label: 'Gallery', href: '#gallery' },
  ];

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <span className={styles.logoMain}>LAVITA</span>
          <span className={styles.logoDivider}></span>
          <span className={styles.logoSub}>MALAM JABBA</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className={styles.navLink}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <a href="#reserve" className={styles.ctaButton}>
            Reserve
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={styles.menuIcon} />
          ) : (
            <Menu className={styles.menuIcon} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#reserve" 
            className={styles.mobileCta}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reserve Your Stay
          </a>
        </nav>
      </div>
    </header>
  );
}
