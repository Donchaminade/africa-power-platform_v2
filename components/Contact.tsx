"use client";

import React, { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus('loading');
        // Simulating API call for mockup
        setTimeout(() => {
            if (email.includes('@')) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        }, 1000);
    };

    return (
        <section id="contact" className="relative py-24 overflow-hidden section-animate flex flex-col justify-center bg-gray-50 dark:bg-gray-950">
            <div className="absolute inset-0 bg-hero-grid opacity-25 z-0"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <span className="text-brand-green font-black text-[10px] tracking-[0.4em] uppercase mb-6 px-4 py-1.5 rounded-full bg-brand-green/10 inline-block">
                    {t('contact.pre_title')}
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-2 mb-6 tracking-tighter leading-none">
                    {t('contact.title')}
                </h2>
                <p className="max-w-xl mx-auto text-gray-500 dark:text-gray-400 font-medium mb-10">{t('contact.subtitle')}</p>
                
                {status === 'success' ? (
                  <div className="p-8 bg-brand-green/10 border border-brand-green rounded-[2.5rem] animate-scale-in max-w-lg mx-auto">
                    <CheckCircle className="text-3xl text-brand-green mb-3 mx-auto" />
                    <p className="text-xl font-black">{t('contact.success_title')}</p>
                    <p className="font-medium text-gray-500 mt-2 text-sm">{t('contact.success_message')}</p>
                  </div>
                ) : (
                  <div className="max-w-xl mx-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t('contact.placeholder')}
                            className="flex-1 px-6 py-4 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 focus:border-brand-green outline-none transition-all text-base font-bold shadow-lg"
                        />
                        <button 
                            disabled={status === 'loading'}
                            type="submit" 
                            className="bg-brand-green text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg disabled:opacity-50"
                        >
                            {status === 'loading' ? t('contact.button_loading') : t('contact.button')}
                        </button>
                    </form>
                    {status === 'error' && (
                        <p className="mt-4 text-xs font-mono text-red-500">{t('contact.error_message')}</p>
                    )}
                  </div>
                )}
            </div>
        </section>
    );
};

export default Contact;