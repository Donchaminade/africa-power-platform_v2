
"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import CollaborationCTA from './CollaborationCTA';
import { apiFetch } from '../utils/api';
import { X, Linkedin, Twitter } from 'lucide-react';

interface Speaker {
  id: number;
  name: string;
  title_fr: string;
  title_en: string;
  category_fr: string;
  category_en: string;
  image_url: string;
  bio_fr?: string;
}

const MOCK_SPEAKERS: Speaker[] = [
  { 
    id: 1, 
    name: 'Adama Traoré', 
    title_fr: 'Microsoft MVP, Expert Power BI', 
    title_en: 'Microsoft MVP, Power BI Expert', 
    category_fr: 'DATA & ANALYTICS', 
    category_en: 'DATA & ANALYTICS', 
    image_url: 'https://picsum.photos/400/500?random=10', 
    bio_fr: "Expert Power BI reconnu mondialement, Adama accompagne les gouvernements dans leur pilotage par la donnée." 
  },
  { 
    id: 2, 
    name: 'Sarah Kouamé', 
    title_fr: 'Solution Architect, Dynamics 365', 
    title_en: 'Solution Architect, Dynamics 365', 
    category_fr: 'BUSINESS APPS', 
    category_en: 'BUSINESS APPS', 
    image_url: 'https://picsum.photos/400/500?random=11', 
    bio_fr: "Spécialiste de la transformation digitale des banques via les solutions Microsoft Cloud." 
  },
  { 
    id: 3, 
    name: 'David Okoro', 
    title_fr: 'Founder, Low-Code Africa', 
    title_en: 'Founder, Low-Code Africa', 
    category_fr: 'ENTREPRENEURIAT', 
    category_en: 'ENTREPRENEURSHIP', 
    image_url: 'https://picsum.photos/400/500?random=12', 
    bio_fr: "Pionnier du mouvement Low-Code au Nigeria, David a formé plus de 2000 talents." 
  },
  { 
    id: 4, 
    name: 'Aisha Bello', 
    title_fr: 'Women In Tech Lead', 
    title_en: 'Women In Tech Lead', 
    category_fr: 'IMPACT SOCIAL', 
    category_en: 'SOCIAL IMPACT', 
    image_url: 'https://picsum.photos/400/500?random=13', 
    bio_fr: "Passionnée par l'inclusion, Aisha utilise Copilot Studio pour simplifier l'accès à l'éducation." 
  }
];

const Speakers: React.FC = () => {
  const { t, language } = useTranslation();
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  useEffect(() => {
    apiFetch<{data: Speaker[]}>('power_api/speakers.php', {}, { data: MOCK_SPEAKERS })
      .then(json => {
        setSpeakers(json.data || MOCK_SPEAKERS);
        setLoading(false);
      })
      .catch(() => {
        setSpeakers(MOCK_SPEAKERS);
        setLoading(false);
      });
  }, []);

  return (
    <section id="speakers" className="relative py-24 overflow-hidden section-animate flex flex-col justify-center">
      <div className="absolute inset-0 bg-hero-grid opacity-40 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-black via-transparent to-white dark:to-black z-[1]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-green font-black text-[11px] tracking-[0.4em] uppercase mb-4 px-6 py-2 rounded-full bg-brand-green/10">
            {t('nav.speakers')}
          </span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 tracking-tighter" dangerouslySetInnerHTML={{ __html: t('speakers.title') || "Les <span class='text-brand-green'>Speakers</span> 2026" }}>
          </h2>
        </div>

        {loading ? (
          <div className="text-center py-20 font-black animate-pulse uppercase tracking-widest text-base">Synchronisation des talents...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker) => (
              <div 
                key={speaker.id}
                onClick={() => setSelectedSpeaker(speaker)}
                className="group relative rounded-[2.5rem] overflow-hidden cursor-pointer border border-gray-100 dark:border-white/5 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-green/20"
              >
                <img src={speaker.image_url} alt={speaker.name} className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-brand-green text-[9px] font-black uppercase tracking-widest mb-2">
                    {language === 'fr' ? speaker.category_fr : speaker.category_en}
                  </span>
                  <h3 className="text-2xl font-black text-white leading-tight mb-2">{speaker.name}</h3>
                  <p className="text-gray-300 text-xs font-bold opacity-90 leading-relaxed">
                    {language === 'fr' ? speaker.title_fr : speaker.title_en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-16">
          <CollaborationCTA />
        </div>
      </div>

      {selectedSpeaker && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-3xl animate-fade-in" onClick={() => setSelectedSpeaker(null)}>
          <div className="relative bg-white dark:bg-gray-950 w-full max-w-4xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row border border-white/10 animate-scale-in" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedSpeaker(null)} className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-black/10 hover:bg-brand-green text-white transition-all flex items-center justify-center text-xl"><X /></button>
            <div className="w-full md:w-5/12 h-80 md:h-auto"><img src={selectedSpeaker.image_url} className="w-full h-full object-cover" /></div>
            <div className="flex-1 p-10 md:p-14">
               <h2 className="text-4xl font-black mb-2">{selectedSpeaker.name}</h2>
               <p className="text-xl font-bold text-brand-green mb-8">{language === 'fr' ? selectedSpeaker.title_fr : selectedSpeaker.title_en}</p>
               <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">
                 {language === 'fr' ? (selectedSpeaker.bio_fr || "Expert passionné de l'écosystème Power Platform, accompagnant la transformation digitale à travers le continent.") : "Passionate Power Platform expert, driving digital transformation across the continent."}
               </p>
               <div className="mt-10 flex gap-4">
                  <button className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all"><Linkedin /></button>
                  <button className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all"><Twitter /></button>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Speakers;
