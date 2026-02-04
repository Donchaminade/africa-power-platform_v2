"use client";

import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Ticket, ArrowRight } from 'lucide-react';

const Registration: React.FC = () => {
    const { t, settings } = useTranslation();
    const registrationLink = settings?.url_registration_attendee || 'https://forms.office.com/r/UCMe9tdkty';

    return (
        <section id="register" className="relative py-24 overflow-hidden section-animate bg-gray-50 dark:bg-gray-950">
            <div className="absolute inset-0 bg-hero-grid"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="w-20 h-20 bg-brand-green text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl shadow-2xl shadow-brand-green/30 transform rotate-12">
                  <Ticket />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mt-2 tracking-tighter leading-none mb-6">
                    {t('registration.title')}
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg font-medium mb-12">
                    {t('registration.subtitle')}
                </p>
                <a 
                    href={registrationLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group inline-flex items-center gap-4 px-12 py-6 bg-brand-green text-white rounded-full font-black text-sm uppercase tracking-[0.3em] shadow-2xl shadow-brand-green/40 hover:bg-green-700 hover:-translate-y-2 transition-all duration-500"
                >
                    {t('registration.cta_button')}
                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
                </a>
            </div>
        </section>
    );
};

export default Registration;