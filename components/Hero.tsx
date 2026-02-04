"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Calendar, Ticket } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, settings } = useTranslation();
  
  const targetDate = useMemo(() => {
    return settings?.event_start_date ? new Date(settings.event_start_date) : new Date('2026-06-20T09:00:00');
  }, [settings]);

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  
  const registrationLink = settings?.url_registration_attendee || 'https://forms.office.com/r/UCMe9tdkty';

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-12">
      <div className="absolute inset-0 z-0 bg-hero-grid"></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-white/30 to-white dark:via-black/50 dark:to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <span className="inline-flex items-center px-6 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-[10px] font-black mb-8 tracking-[0.4em] uppercase backdrop-blur-md">
            <Calendar size={12} className="mr-2" /> {t('hero.date_label')}
          </span>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 dark:text-white leading-[0.9] mb-8 tracking-tighter">
            {t('hero.title_main').split(' ').slice(0, 2).join(' ')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400 font-black">{t('hero.title_main').split(' ').slice(2).join(' ')}</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed font-medium">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center justify-center w-20 h-20 sm:w-28 sm:h-28 bg-white/90 dark:bg-white/5 backdrop-blur-2xl border border-gray-100 dark:border-white/10 rounded-3xl shadow-2xl transition-all duration-500 hover:border-brand-green hover:-translate-y-2">
                <span className="text-2xl sm:text-4xl font-black text-brand-green tracking-tighter">
                  {String(value).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-1">
                  {unit}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href={registrationLink} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden bg-brand-green text-white px-12 py-5 rounded-full font-black shadow-2xl shadow-brand-green/30 hover:scale-105 active:scale-95 transition-all duration-500 uppercase tracking-widest text-[11px] inline-flex items-center">
              <Ticket size={16} className="mr-2 group-hover:rotate-12 transition-transform" /> {t('hero.cta_register')}
            </a>
            <a href="#about" className="px-12 py-5 rounded-full border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white font-black hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-500 uppercase tracking-widest text-[11px]">
              {t('hero.cta_discover')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;