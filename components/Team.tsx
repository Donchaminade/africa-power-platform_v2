
"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import CollaborationCTA from './CollaborationCTA';
import { apiFetch } from '../utils/api';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role_fr: string;
  role_en: string;
  image_url: string;
  linkedin_url: string;
  twitter_url: string;
}

const Team: React.FC = () => {
  const { t, language } = useTranslation();
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Tentative de récupération API avec fallback statique immédiat si vide
    apiFetch<{data: TeamMember[]}>('power_api/team.php', {}, { data: [] })
        .then(json => {
            if (json.data && json.data.length > 0) {
              setMembers(json.data);
            } else {
              setMembers([
                { id: 1, name: 'Samuel Adebayo', role_fr: 'Coordinateur Général', role_en: 'General Coordinator', image_url: 'https://picsum.photos/400/400?random=20', linkedin_url: '#', twitter_url: '#' },
                { id: 2, name: 'Ngozi Okonjo', role_fr: 'Responsable Programme', role_en: 'Program Lead', image_url: 'https://picsum.photos/400/400?random=21', linkedin_url: '#', twitter_url: '#' },
                { id: 3, name: 'Kwame Appiah', role_fr: 'Responsable Partenariats', role_en: 'Partnerships Lead', image_url: 'https://picsum.photos/400/400?random=22', linkedin_url: '#', twitter_url: '#' }
              ]);
            }
        })
        .catch(() => {
            // Fallback en cas d'erreur réseau
            setMembers([
                { id: 1, name: 'Samuel Adebayo', role_fr: 'Coordinateur Général', role_en: 'General Coordinator', image_url: 'https://picsum.photos/400/400?random=20', linkedin_url: '#', twitter_url: '#' },
                { id: 2, name: 'Ngozi Okonjo', role_fr: 'Responsable Programme', role_en: 'Program Lead', image_url: 'https://picsum.photos/400/400?random=21', linkedin_url: '#', twitter_url: '#' },
                { id: 3, name: 'Kwame Appiah', role_fr: 'Responsable Partenariats', role_en: 'Partnerships Lead', image_url: 'https://picsum.photos/400/400?random=22', linkedin_url: '#', twitter_url: '#' }
            ]);
        })
        .finally(() => setLoading(false));
  }, []);

  return (
    <section id="team" className="relative py-24 overflow-hidden section-animate">
      <div className="absolute inset-0 bg-hero-grid opacity-35 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-20">
          <span className="text-brand-green font-black text-[10px] tracking-[0.4em] uppercase mb-5 px-6 py-2 rounded-full bg-brand-green/10 inline-block border border-brand-green/20">
            {t('team.pre_title') || 'ORGANISATION'}
          </span>
          <h2 
            className="text-5xl md:text-7xl font-black mt-2 tracking-tighter leading-none"
            dangerouslySetInnerHTML={{ __html: t('team.title') || "Propulsé par l'Équipe" }}
          >
          </h2>
        </div>

        {loading ? (
            <div className="py-20 flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-brand-green border-t-transparent rounded-full animate-spin"></div>
                <p className="font-black text-xs uppercase tracking-[0.3em] animate-pulse">Chargement...</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
                {members.map((member) => (
                    <div key={member.id} className="group relative">
                        {/* Image Container */}
                        <div className="relative w-56 h-56 lg:w-72 lg:h-72 mx-auto rounded-[4rem] overflow-hidden shadow-2xl mb-8 border-[6px] border-white dark:border-gray-900 transition-all duration-700 group-hover:scale-105 group-hover:border-brand-green group-hover:shadow-[0_20px_50px_rgba(0,168,89,0.3)] bg-gray-100 dark:bg-gray-800">
                            <img 
                              src={member.image_url} 
                              alt={member.name} 
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110" 
                            />
                            
                            {/* Subtler Gradient Overlay - Face remains clear */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-10">
                                <div className="flex gap-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                    <a href={member.linkedin_url || "#"} className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white text-brand-green hover:bg-brand-green hover:text-white transition-all shadow-xl"><Linkedin size={20} /></a>
                                    <a href={member.twitter_url || "#"} className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white text-brand-green hover:bg-brand-green hover:text-white transition-all shadow-xl"><Twitter size={20} /></a>
                                </div>
                            </div>
                        </div>
                        
                        <h3 className="text-3xl font-black tracking-tighter mb-2 group-hover:text-brand-green transition-colors">{member.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-black text-[10px] uppercase tracking-[0.3em]">
                            {language === 'fr' ? member.role_fr : member.role_en}
                        </p>
                    </div>
                ))}
            </div>
        )}

        <CollaborationCTA />
      </div>
    </section>
  );
};

export default Team;
