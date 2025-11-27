'use client';

import { Star, Droplets, ThermometerSun } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 lg:px-8 lg:py-32 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020508] via-[#050d18] via-20% via-[#0a1628] via-40% via-[#0d1f24] via-70% to-[var(--midnight-pine)] z-0">
        {/* Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {starPositions.map((pos, i) => (
            <span
              key={i}
              className={`absolute w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-[twinkle_4s_ease-in-out_infinite] shadow-[0_0_6px_1px_rgba(255,255,255,0.3)] ${i % 2 === 1 ? 'w-[3px] h-[3px] opacity-70 shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]' : ''
                } ${i % 3 === 0 ? 'bg-[var(--brushed-copper)] opacity-60 shadow-[0_0_10px_2px_rgba(200,155,123,0.4)]' : ''
                } ${i % 5 === 0 ? 'w-1 h-1 [animation-duration:5s]' : ''
                }`}
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${(i * 0.06).toFixed(2)}s`,
              }}
            />
          ))}
        </div>
        {/* Shooting star */}
        <div className="absolute top-[20%] left-0 w-[100px] h-0.5 rounded-full opacity-0 animate-[shoot_8s_ease-in-out_infinite]" style={{ background: 'linear-gradient(90deg, var(--brushed-copper), transparent)' }} />
      </div>

      {/* Content Card */}
      <div className="relative z-10 w-full max-w-[600px] mx-auto">
        <div className="relative bg-[rgba(255,255,255,0.05)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] rounded-[2rem] px-8 py-12 md:px-12 md:py-16 text-center overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)_inset,0_0_80px_rgba(200,155,123,0.08)] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[150%] before:h-[150%] before:z-[-1] before:pointer-events-none" style={{ '::before': { background: 'radial-gradient(ellipse at center, rgba(200, 155, 123, 0.1) 0%, transparent 60%)' } }}>
          {/* Decorative top border */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[3px]" style={{ background: 'linear-gradient(90deg, transparent 0%, var(--brushed-copper) 50%, transparent 100%)' }} />

          {/* Section Label */}
          <div className="inline-flex items-center gap-2 font-[family-name:var(--font-manrope)] text-xs tracking-[0.15em] uppercase text-[var(--brushed-copper)] mb-6">
            <Star className="w-4 h-4 text-[var(--brushed-copper)]" />
            <span>Signature Experience</span>
          </div>

          {/* Heading */}
          <h2 className="font-[family-name:var(--font-playfair)] text-[2.25rem] md:text-5xl font-semibold text-[var(--text-light)] leading-[1.2] mb-6">
            Sleep Under
            <br />
            <span className="text-[var(--brushed-copper)] inline-block">the Stars</span>
          </h2>

          {/* Description */}
          <p className="font-[family-name:var(--font-manrope)] text-base leading-[1.8] text-[rgba(245,245,245,0.8)] mb-8 max-w-[450px] mx-auto">
            Our Triple-Glazed Heated Glass Domes ensure a clear view of the
            Milky Way, with instant hot water rainfall showers. Experience
            the cosmos in absolute comfort.
          </p>

          {/* Features */}
          <div className="flex flex-col min-[480px]:flex-row justify-center gap-4 min-[480px]:gap-8 mb-8">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-full bg-[rgba(200,155,123,0.15)] flex items-center justify-center text-[var(--brushed-copper)] shrink-0">
                <Droplets className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-[family-name:var(--font-manrope)] text-sm font-semibold text-[var(--text-light)]">Rainfall Showers</span>
                <span className="font-[family-name:var(--font-manrope)] text-xs text-[rgba(245,245,245,0.6)]">Instant hot water</span>
              </div>
            </div>
          </div >

          {/* CTA */}
          < button className="inline-block px-8 py-4 bg-[var(--brushed-copper)] text-[var(--midnight-pine)] font-[family-name:var(--font-manrope)] text-sm font-semibold tracking-[0.05em] uppercase border-none rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#d4a98a] hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(200,155,123,0.3)]" >
            Book a Dome Experience
          </button >
        </div >
      </div >
    </section >
  );
}
