import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Music } from 'lucide-react';

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
    <footer className="bg-[#05110e] text-[#f5f5f5] px-6 pt-24 pb-16 border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <section className="flex flex-col lg:flex-row gap-8 lg:justify-between lg:items-center border-b border-[rgba(255,255,255,0.08)] pb-10">
          <div className="flex items-center gap-7">
            <div className="flex items-center shrink-0">
              <Image
                src="/logo/logo.png"
                alt="Lavita"
                width={70}
                height={87}
              />
            </div>
            <div>
              <p className="font-[family-name:var(--font-playfair)] text-[clamp(1.5rem,3vw,2.5rem)] font-medium tracking-[-0.01em]">Prestigious High-End Hotel Suites Delivering Luxury.</p>
              <p className="font-[family-name:var(--font-manrope)] text-[0.85rem] text-[rgba(245,245,245,0.55)] mt-[0.35rem]">Powered by Shelton Group of Hotels</p>
            </div>
          </div>
          <div className="flex gap-4">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <Link key={label} href={href} aria-label={`Visit Lavita on ${label}`} className="w-12 h-12 rounded-full border border-[rgba(200,155,123,0.4)] text-[#c89b7b] flex items-center justify-center transition-all duration-300 hover:bg-[#c89b7b] hover:text-[#05110e]">
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 pt-8 border-b border-[rgba(255,255,255,0.08)] pb-10">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-[#c89b7b] text-base tracking-[0.2em] uppercase">Explore</p>
            <div className="mt-4 flex flex-col gap-2">
              {exploreLinks.map((link) => (
                <Link key={link.label} href={link.href} className="font-[family-name:var(--font-manrope)] text-[rgba(245,245,245,0.85)] no-underline text-[0.95rem] hover:text-[#c89b7b]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-[#c89b7b] text-base tracking-[0.2em] uppercase">Unique Features</p>
            <div className="mt-4 flex flex-col gap-2">
              {featuresLinks.map((link) => (
                <Link key={link.label} href={link.href} className="font-[family-name:var(--font-manrope)] text-[rgba(245,245,245,0.85)] no-underline text-[0.95rem] hover:text-[#c89b7b]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-[#c89b7b] text-base tracking-[0.2em] uppercase">Adventures</p>
            <div className="mt-4 flex flex-col gap-2">
              {adventuresLinks.map((link) => (
                <Link key={link.label} href={link.href} className="font-[family-name:var(--font-manrope)] text-[rgba(245,245,245,0.85)] no-underline text-[0.95rem] hover:text-[#c89b7b]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-b border-[rgba(255,255,255,0.08)] pb-10">
          {offices.map((office) => (
            <div key={office.label} className="p-6 border-l border-[rgba(255,255,255,0.08)] first:border-l-0 max-md:border-l-0 max-md:border-t max-md:first:border-t-0">
              <p className="font-[Space_Mono,Courier_New,monospace] text-[0.78rem] tracking-[0.35em] text-[rgba(245,245,245,0.65)] mb-3">{office.label}</p>
              <p className="font-[family-name:var(--font-manrope)] text-[0.95rem] text-[rgba(245,245,245,0.85)]">{office.address}</p>
            </div>
          ))}
        </section>

        <div className="flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center border-b border-[rgba(255,255,255,0.08)] pb-8">
          <a href="mailto:info@lavitamalamjabba.com" className="font-[family-name:var(--font-manrope)] text-[rgba(245,245,245,0.8)] no-underline">info@lavitamalamjabba.com</a>
          <span className="font-[family-name:var(--font-manrope)] text-[rgba(245,245,245,0.8)]">www.lavitamalamjabba.com</span>
        </div>

        <section className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-[rgba(160,174,192,0.9)] font-[family-name:var(--font-manrope)] text-[0.9rem]">
          <p>© 2025 Lavita Malam Jabba. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[rgba(245,245,245,0.85)] no-underline hover:text-[#c89b7b]">Privacy Policy</Link>
            <Link href="/terms" className="text-[rgba(245,245,245,0.85)] no-underline hover:text-[#c89b7b]">Terms of Service</Link>
          </div>
        </section>
      </div>
    </footer>
  );
}

