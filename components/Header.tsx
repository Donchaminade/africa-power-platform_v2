
"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from '../contexts/LanguageContext';
import { Moon, Sun, Menu, X, Info, Calendar, Users, Award } from 'lucide-react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavLinks = [
    { href: '#about', label: t('nav.about'), icon: <Info size={20} /> },
    { href: '#program', label: t('nav.program'), icon: <Calendar size={20} /> },
    { href: '#speakers', label: t('nav.speakers'), icon: <Users size={20} /> },
    { href: '#sponsors', label: t('nav.sponsors'), icon: <Award size={20} /> },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
        <nav className="mx-auto max-w-[95%] 2xl:max-w-[1440px] px-2 sm:px-4">
          <div className={`flex items-center justify-between bg-white/90 dark:bg-black/95 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 rounded-full px-6 sm:px-10 py-3 shadow-2xl transition-all duration-500 ${isScrolled ? 'shadow-brand-green/20 scale-[0.98]' : ''}`}>
            
            <a href="/" className="flex items-center gap-4 group flex-shrink-0">
              <Image
                src="/assets/images/logo.png"
                alt="Africa Power Platform Logo"
                width={40}
                height={40}
                className="group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out"
              />
              <div className="flex flex-col group-hover:translate-x-1 transition-transform">
                <span className="hidden sm:block font-black text-xl lg:text-2xl tracking-tighter leading-none">Africa Power</span>
                <span className="hidden sm:block text-brand-green font-black text-[10px] tracking-[0.4em] uppercase">Platform</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-end flex-1 ml-10 gap-4 xl:gap-8">
              <div className="flex items-center gap-4 xl:gap-8">
                {primaryNavLinks.map(link => (
                  <a key={link.href} href={link.href} className="text-[11px] font-black hover:text-brand-green transition-all relative group uppercase tracking-[0.2em] whitespace-nowrap">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-500 group-hover:w-full"></span>
                  </a>
                ))}
              </div>

              <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 hidden xl:block" />
              
              <div className="flex items-center gap-3">
                <button onClick={toggleLanguage} className="text-[10px] font-black w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-brand-green hover:text-white transition-all uppercase flex items-center justify-center border border-transparent hover:border-brand-green/30">
                  {language === 'fr' ? 'en' : 'fr'}
                </button>
                <button onClick={toggleTheme} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all text-sm border border-transparent hover:border-brand-green/30">
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </button>
                <a href="#register" className="bg-brand-green text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-green-700 hover:shadow-2xl hover:shadow-brand-green/40 hover:-translate-y-1 transition-all duration-300 ml-2 whitespace-nowrap">
                  {t('nav.register') || 'Participer'}
                </a>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden w-12 h-12 flex items-center justify-center text-2xl text-brand-green hover:scale-110 transition-transform">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navbar - Always visible on mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[90] bg-white/90 dark:bg-black/95 backdrop-blur-2xl border-t border-gray-200/50 dark:border-white/10 p-4 flex justify-around items-center">
        {primaryNavLinks.map(link => (
          <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-green transition-colors">
            {link.icon}
            <span className="text-[10px] font-bold mt-1">{link.label}</span>
          </a>
        ))}
      </div>

      {/* Mobile Full-Screen Overlay Menu (for secondary actions) */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl z-[120] p-10 flex flex-col items-center justify-center gap-8 animate-fade-in">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 text-3xl text-brand-green"><X /></button>
          <div className="flex flex-col items-center justify-center gap-6">
            <button onClick={toggleLanguage} className="text-xl font-black uppercase text-brand-green">{language === 'fr' ? 'English' : 'Français'}</button>
            <button onClick={toggleTheme} className="text-xl flex items-center gap-2">
                {theme === 'light' ? <Moon /> : <Sun />} {theme === 'light' ? 'Mode sombre' : 'Mode clair'}
            </button>
            <a href="#register" onClick={() => setIsMenuOpen(false)} className="bg-brand-green text-white px-8 py-3.5 rounded-full text-lg font-black uppercase tracking-widest hover:bg-green-700 hover:shadow-2xl hover:shadow-brand-green/40 hover:-translate-y-1 transition-all duration-300 ml-2 whitespace-nowrap">
                {t('nav.register') || 'Participer'}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
