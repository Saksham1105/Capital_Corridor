import { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

function CountUp({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let animFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        animFrame = requestAnimationFrame(animate);
      }
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function CredibilityTicker() {
  const stats = [
    { label: 'Years of Financial Advisory', number: 30, suffix: '+', highlight: 'Leadership & Expertise' },
    { label: 'Clients & Mandates', number: 500, suffix: '+', highlight: 'Transaction Volume' },
    { label: 'Specialised Advisory Domains', number: 15, suffix: '+', highlight: 'Full Spectrum Solutions' },
    { label: 'Key Industry Sectors Served', number: 10, suffix: '+', highlight: 'Manufacturing to Realty' },
  ];

  return (
    <section className="bg-[#F8F6F0] border-y border-[#E2DCD0] py-14 lg:py-16 text-[#070E1C] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divider-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative group pr-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C5A059] mb-2 flex items-center gap-2">
                <span className="w-2 h-px bg-[#C5A059]" />
                {stat.highlight}
              </p>
              <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#070E1C] tracking-tight mb-2 group-hover:text-[#C5A059] transition-colors duration-300">
                <CountUp end={stat.number} suffix={stat.suffix} />
              </p>
              <p className="text-xs sm:text-sm font-light text-slate-600 leading-snug">
                {stat.label}
              </p>
              {idx < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#E2DCD0]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
