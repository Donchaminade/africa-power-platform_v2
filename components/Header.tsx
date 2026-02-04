"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from '../contexts/LanguageContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useTranslation();

  // Handle body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Handle header style on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#program', label: t('nav.program') },
    { href: '#speakers', label: t('nav.speakers') },
    { href: '#sponsors', label: t('nav.sponsors') },
  ];

  return (
    <>
      {/* =================================================================
          HEADER
      ================================================================== */}
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 py-3`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className={`
            flex items-center justify-between
            rounded-full px-6 py-3
            backdrop-blur-xl
            transition-all duration-300
            bg-white/80 dark:bg-black/80
            border border-gray-200/50 dark:border-white/10
            shadow-lg
            ${isScrolled ? 'scale-[0.98] shadow-brand-green/20' : 'scale-100'}
          `}>
            {/* LOGO */}
            <a href="/" className="flex items-center gap-4 flex-shrink-0">
              <Image
                src="/assets/images/logo.png"
                alt="Africa Power Platform Logo"
                width={40}
                height={40}
                className="transition-transform duration-700 hover:rotate-180"
              />
              <div className="hidden sm:block">
                <div className="font-black text-xl leading-none">Africa Power</div>
                <div className="text-brand-green text-[10px] tracking-[0.4em] uppercase font-black">Platform</div>
              </div>
            </a>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-800 dark:text-gray-200 hover:text-brand-green transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-brand-green transition-all group-hover:w-full" />
                </a>
              ))}
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-4" />
              <div className="flex items-center gap-3">
                <button onClick={toggleLanguage} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-[10px] font-black uppercase hover:bg-brand-green hover:text-white transition">
                  {language === 'fr' ? 'EN' : 'FR'}
                </button>
                <button onClick={toggleTheme} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-brand-green hover:text-white transition">
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </button>
                <a href="#register" className="bg-brand-green text-white px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-green-700 hover:shadow-xl hover:-translate-y-0.5 transition">
                  {t('nav.register') || 'Participer'}
                </a>
              </div>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden w-12 h-12 flex items-center justify-center text-brand-green"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* =================================================================
          MOBILE MENU (OVERLAY)
      ================================================================== */}
      <div className={`
        fixed inset-0 z-[1000]
        bg-white/90 dark:bg-black/90 backdrop-blur-xl
        flex flex-col items-center justify-center
        transition-opacity duration-500
        ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}>
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 w-14 h-14 flex items-center justify-center text-brand-green bg-gray-100 dark:bg-gray-800 rounded-full"
        >
          <X size={32} />
        </button>

        {/* Main Links */}
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-black uppercase italic text-gray-900 dark:text-white hover:text-brand-green transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Secondary Actions */}
        <div className="absolute bottom-16 flex flex-col items-center gap-6">
            <a
              href="#register"
              onClick={() => setIsMenuOpen(false)}
              className="bg-brand-green text-white px-10 py-4 rounded-full text-lg font-black uppercase tracking-widest hover:bg-green-700 transition"
            >
              {t('nav.register') || 'Participer'}
            </a>
            <div className="flex items-center gap-6 mt-4">
                <button onClick={toggleLanguage} className="text-xl font-black uppercase text-brand-green">
                {language === 'fr' ? 'English' : 'Français'}
                </button>
                <button onClick={toggleTheme} className="text-2xl flex items-center gap-2 text-gray-800 dark:text-gray-200">
                    {theme === 'light' ? <Moon /> : <Sun />}
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;