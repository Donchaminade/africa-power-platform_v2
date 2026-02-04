"use client";

import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Handshake, Mic, Users } from 'lucide-react';

const CollaborationCTA: React.FC = () => {
  const { t, settings } = useTranslation();

  const items = [
    { 
      icon: <Handshake />, 
      label: t('collaboration.sponsor_cta'),
      link: settings?.url_become_sponsor || "https://forms.office.com/r/8NGPjVvrtm",
      hoverColor: "hover:bg-amber-500",
      shadowColor: "group-hover:shadow-[0_20px_40px_rgba(245,158,11,0.4)]",
      accent: "text-amber-500"
    },
    { 
      icon: <Mic />, 
      label: t('collaboration.talk_cta'),
      link: settings?.url_become_speaker || "https://forms.office.com/r/MFLQb3FZej",
      hoverColor: "hover:bg-blue-600",
      shadowColor: "group-hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)]",
      accent: "text-blue-500"
    },
    { 
      icon: <Users />, 
      label: t('collaboration.panel_cta'),
      link: settings?.url_propose_panel || "https://forms.office.com/r/qKqLf9284z",
      hoverColor: "hover:bg-brand-green",
      shadowColor: "group-hover:shadow-[0_20px_40px_rgba(0,168,89,0.4)]",
      accent: "text-brand-green",
    }
  ];

  return (
    <div className="mt-24 text-center">
        <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">{t('collaboration.title')}</h3>
        <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 font-medium mb-12">{t('collaboration.subtitle')}</p>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {items.map((item, idx) => (
            <a 
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-10 py-5 rounded-[2.2rem] border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-gray-950/80 font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-500 hover:text-white hover:border-transparent hover:-translate-y-2 flex items-center gap-5 backdrop-blur-2xl ${item.hoverColor} ${item.shadowColor}`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gray-100 dark:bg-white/5 transition-all duration-500 group-hover:bg-white/20 shadow-inner`}>
                <span className={`${item.accent} group-hover:text-white transition-all duration-500`}>{item.icon}</span>
              </div>
              <span className="text-gray-900 dark:text-white group-hover:text-white transition-colors duration-500">
                {item.label}
              </span>
            </a>
          ))}
        </div>
    </div>
  );
};

export default CollaborationCTA;