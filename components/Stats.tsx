
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

interface StatItem {
  value: string;
  labelKey: string;
}

const StatCounter: React.FC<{ value: string }> = ({ value }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace('+', ''), 10);
  const suffix = value.includes('+') ? '+' : '';
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(easedProgress * target);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(target);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-5xl md:text-7xl font-black tracking-tighter">
      {count}{suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  const { t } = useTranslation();

  const statsData: StatItem[] = [
    { value: '25+', labelKey: 'stats.label_speakers' },
    { value: '250+', labelKey: 'stats.label_participants' },
    { value: '2', labelKey: 'stats.label_days' },
    { value: '10+', labelKey: 'stats.label_workshops' },
  ];

  return (
    <section className="bg-brand-primary py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
          {statsData.map((stat, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <StatCounter value={stat.value} />
              <p className="text-[11px] font-black uppercase tracking-[0.4em] mt-5 opacity-80">
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
