"use client";

import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    const { t, settings } = useTranslation();
    const whatsappLink = settings?.whatsapp_community_url || "#"; 

    return (
        <div className="fixed bottom-8 right-8 z-[999] group">
            {/* Tooltip directionnel cohérent pour le coin droit */}
            <div className="absolute bottom-full right-0 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-white/10 whitespace-nowrap font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#25D366] rounded-full animate-ping"></div>
                    {t('contact.whatsapp_tooltip') || 'REJOIGNEZ LA COMMUNAUTÉ !'}
                    {/* Flèche du Tooltip */}
                    <div className="absolute top-full right-6 w-4 h-4 bg-white dark:bg-gray-900 rotate-45 border-r border-b border-gray-100 dark:border-white/10 -mt-2"></div>
                </div>
            </div>

            {/* Halo d'appel à l'action */}
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25"></div>
            
            <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.5)] flex items-center justify-center text-3xl hover:scale-115 hover:-rotate-12 active:scale-90 transition-all duration-500"
            >
                <MessageCircle />
            </a>
        </div>
    );
};

export default WhatsAppButton;