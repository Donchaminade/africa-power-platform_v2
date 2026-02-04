"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { apiFetch } from '../utils/api';
import { ArrowRight } from 'lucide-react';

interface Sponsor {
    id: number;
    name: string;
    logo_url: string;
    tier: string;
}

const Sponsors: React.FC = () => {
    const { t, settings } = useTranslation();
    const [sponsors, setSponsors] = useState<Sponsor[]>([]);
    
    // Hardcoded sponsors for the mockup
    const MOCK_SPONSORS = [
        { id: 1, name: "Microsoft", logo_url: "https://logo.clearbit.com/microsoft.com", tier: "platinum" },
        { id: 2, name: "MTN", logo_url: "https://logo.clearbit.com/mtn.com", tier: "gold" },
        { id: 3, name: "Orange", logo_url: "https://logo.clearbit.com/orange.com", tier: "gold" },
        { id: 4, name: "Cofina", logo_url: "https://logo.clearbit.com/groupcofina.com", tier: "silver" },
        { id: 5, name: "Moov Africa", logo_url: "https://logo.clearbit.com/moov.africa", tier: "silver" },
        { id: 6, name: "ISOCEL", logo_url: "https://logo.clearbit.com/isoceltelecom.com", tier: "community" }
    ];

    useEffect(() => {
        setSponsors(MOCK_SPONSORS);
    }, []);

    // Duplicate for scrolling effect
    const pLogos = [...sponsors, ...sponsors];
    const sponsorLink = settings?.url_become_sponsor || 'https://forms.office.com/r/8NGPjVvrtm';

    return (
        <section className="relative py-20 bg-white dark:bg-black overflow-hidden section-animate">
            <div className="absolute inset-0 bg-hero-grid"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-brand-green font-black text-[9px] tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full bg-brand-green/10 inline-block">
                        {t('sponsors.pre_title')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black mt-2 tracking-tighter">
                        {t('sponsors.title_part1')} <span className="text-brand-green">{t('sponsors.title_part2')}</span>
                    </h2>
                </div>

                <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] mb-12">
                    <div className="carousel-track flex items-center">
                        {pLogos.map((logo, index) => (
                             <div key={`${logo.name}-${index}`} className="h-16 w-48 flex-shrink-0 flex items-center justify-center px-6">
                                <img 
                                    src={logo.logo_url} 
                                    alt={`${logo.name} logo`} 
                                    className="max-h-8 md:max-h-10 w-auto object-contain grayscale hover:grayscale-0 opacity-40 hover:opacity-100 hover:scale-105 transition-all duration-300"
                                />
                             </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a href={sponsorLink} target="_blank" rel="noopener noreferrer" className="border-2 border-brand-green/40 text-brand-green px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-green hover:text-white transition-all duration-300 inline-flex items-center">
                        {t('sponsors.button')} <ArrowRight className="ml-2" size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;