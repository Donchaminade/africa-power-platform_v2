"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { apiFetch } from '../utils/api';
import { Plus } from 'lucide-react';

interface FaqItemData {
  id: number;
  question_fr: string;
  question_en: string;
  answer_fr: string;
  answer_en: string;
  category: string;
}

const MOCK_FAQ: FaqItemData[] = [
  { id: 1, question_fr: "L'événement est-il vraiment gratuit ?", question_en: "Is the event really free?", answer_fr: "Oui, l'accès à la conférence et la candidature au bootcamp sont entièrement gratuits. L'inscription est cependant obligatoire pour réserver votre place.", answer_en: "Yes, access to the conference and application to the bootcamp are completely free. However, registration is mandatory to reserve your spot.", category: "Inscription" },
  { id: 2, question_fr: "Qui peut participer au bootcamp ?", question_en: "Who can participate in the bootcamp?", answer_fr: "Le bootcamp est ouvert aux développeurs, designers, chefs de projet et étudiants passionnés par la technologie et désireux de résoudre des défis concrets. Les places sont limitées et la sélection se fait sur candidature.", answer_en: "The bootcamp is open to developers, designers, project managers, and students passionate about technology and eager to solve real-world challenges. Seats are limited and selection is by application.", category: "Bootcamp" },
  { id: 3, question_fr: "Y aura-t-il des opportunités de networking ?", question_en: "Will there be networking opportunities?", answer_fr: "Absolument. Des pauses café, le déjeuner et des sessions dédiées sont prévues pour favoriser les échanges entre les participants, les speakers et les partenaires.", answer_en: "Absolutely. Coffee breaks, lunch, and dedicated sessions are planned to encourage networking among attendees, speakers, and partners.", category: "Général" },
  { id: 4, question_fr: "Comment se rendre au lieu de l'événement ?", question_en: "How do I get to the event venue?", answer_fr: "L'événement se déroule au Palais des Congrès de Cotonou. Il est facilement accessible en taxi ou via les services de VTC locaux. Un parking est également disponible sur place pour les participants.", answer_en: "The event is held at the Palais des Congrès in Cotonou. It is easily accessible by taxi or local ride-hailing services. On-site parking is also available for attendees.", category: "Logistique" },
  { id: 5, question_fr: "Les sessions seront-elles enregistrées ?", question_en: "Will the sessions be recorded?", answer_fr: "Oui, la plupart des sessions de la conférence principale (Jour 1) seront enregistrées et mises à disposition des participants inscrits après l'événement sur notre chaîne YouTube.", answer_en: "Yes, most of the main conference sessions (Day 1) will be recorded and made available to registered attendees after the event on our YouTube channel.", category: "Contenu" },
  { id: 6, question_fr: "Dois-je apporter mon propre ordinateur pour le bootcamp ?", question_en: "Should I bring my own laptop for the bootcamp?", answer_fr: "Oui, il est indispensable que chaque participant au bootcamp vienne avec son propre ordinateur portable pour pouvoir participer activement aux ateliers de co-création et de développement.", answer_en: "Yes, it is essential for each bootcamp participant to bring their own laptop to actively participate in the co-creation and development workshops.", category: "Bootcamp" }
];

const Faq: React.FC = () => {
  const { t, language } = useTranslation();
  const [items, setItems] = useState<FaqItemData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    apiFetch<{data: FaqItemData[]}>('power_api/faq.php', {}, { data: MOCK_FAQ })
      .then(json => {
        setItems(json.data || MOCK_FAQ);
        setLoading(false);
      })
      .catch(err => {
        console.error("FAQ load error:", err);
        setError(err.message);
        setItems(MOCK_FAQ);
        setLoading(false);
      });
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(items.map(i => i.category));
    return ['All', ...Array.from(cats)];
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      return matchesCategory;
    });
  }, [items, activeCategory]);

  return (
    <section id="faq" className="relative py-24 overflow-hidden section-animate flex flex-col justify-center">
      <div className="absolute inset-0 bg-hero-grid opacity-35 z-0"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <span className="text-brand-green font-black text-xs tracking-[0.4em] uppercase mb-5 px-5 py-2 rounded-full bg-brand-green/10 inline-block">
            {t('faq.pre_title')}
          </span>
          <h2 className="text-5xl font-black mt-2 tracking-tighter leading-none mb-8" dangerouslySetInnerHTML={{ __html: t('faq.title') }}>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-brand-green text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-500'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
            <div className="text-center py-10 animate-pulse font-black">Chargement...</div>
        ) : (
            <div className="space-y-4">
            {error && (
              <p className="text-center text-amber-500 text-xs font-bold mb-6 italic italic">Note : Les données affichées sont statiques car l'API est indisponible.</p>
            )}
            {filteredItems.map((item, index) => (
                <div key={item.id} className={`group mb-4 transition-all rounded-[2rem] border ${openIndex === index ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-white/5'}`}>
                <button className="w-full flex justify-between items-center p-8 outline-none text-left" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                    <h3 className={`text-xl font-black transition-colors ${openIndex === index ? 'text-brand-green' : ''}`}>
                    {language === 'fr' ? item.question_fr : item.question_en}
                    </h3>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all flex-shrink-0 ml-4 ${openIndex === index ? 'bg-brand-green text-white rotate-[135deg]' : 'bg-gray-100 text-brand-green'}`}><Plus /></div>
                </button>
                {openIndex === index && (
                    <div className="px-8 pb-8 pt-2 animate-fade-in">
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-medium border-t border-brand-green/10 pt-6">
                        {language === 'fr' ? item.answer_fr : item.answer_en}
                    </p>
                    </div>
                )}
                </div>
            ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default Faq;