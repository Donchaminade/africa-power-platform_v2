import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    const { t, settings } = useTranslation();

    const socialLinks = [
      { href: settings?.social_linkedin_url || "#", icon: <Linkedin size={20} />, label: "LinkedIn" },
      { href: settings?.social_facebook_url || "#", icon: <Facebook size={20} />, label: "Facebook" },
      { href: settings?.social_twitter_url || "#", icon: <Twitter size={20} />, label: "Twitter" },
    ];

    return (
        <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900 pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center md:text-left">
                    <div className="md:col-span-2 lg:col-span-1">
                        <a href="#" className="flex items-center justify-center md:justify-start gap-3 mb-4 group">
                           <svg className="h-10 w-10 text-brand-green" viewBox="0 0 52 52" fill="currentColor"><path d="M26 0C11.64 0 0 11.64 0 26s11.64 26 26 26 26-11.64 26-26S40.36 0 26 0zm-2 49.86C12.05 49.37 4 38.65 4 26S12.05 2.63 24 2.14v47.72zm4-47.72c11.95.49 20 11.21 20 23.86s-8.05 23.37-20 23.86V2.14z"/></svg>
                           <span className="text-xl font-black tracking-tighter leading-tight">Africa Power<br/><span className="text-brand-green">Platform</span></span>
                        </a>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {t('footer.tagline')}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-black mb-4 uppercase tracking-widest text-sm">{t('footer.nav_title')}</h4>
                        <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                            <li><a href="#about" className="hover:text-brand-green transition-colors">{t('nav.about')}</a></li>
                            <li><a href="#speakers" className="hover:text-brand-green transition-colors">{t('nav.speakers')}</a></li>
                            <li><a href="#program" className="hover:text-brand-green transition-colors">{t('nav.program')}</a></li>
                            <li><a href="#register" className="hover:text-brand-green transition-colors">{t('nav.register')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-black mb-4 uppercase tracking-widest text-sm">{t('footer.contact_title')}</h4>
                        <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                            <li className="flex items-center justify-center md:justify-start"><Mail size={16} className="mr-2 text-brand-green" />{settings?.contact_email || ''}</li>
                            <li className="flex items-center justify-center md:justify-start"><Phone size={16} className="mr-2 text-brand-green" />{settings?.contact_phone || ''}</li>
                            <li className="flex items-center justify-center md:justify-start"><MapPin size={16} className="mr-2 text-brand-green" />Cotonou, Bénin</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-black mb-4 uppercase tracking-widest text-sm">{t('footer.social_title')}</h4>
                        <div className="flex gap-3 justify-center md:justify-start">
                          {socialLinks.map(link => (
                            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all text-lg">
                              {link.icon}
                            </a>
                          ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-white/10 pt-8 text-center">
                    <p className="text-gray-500 text-sm font-medium">
                        © {new Date().getFullYear()} {t('footer.copyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;