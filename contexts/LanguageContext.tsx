"use client";

import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations as localTranslations } from '../locales/translations';
import { apiFetch } from '../utils/api';

type Language = 'fr' | 'en';

interface Settings {
  [key: string]: string;
}

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  loading: boolean;
  settings: Settings | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language | null;
    if (storedLang) setLanguage(storedLang);

    const loadSettings = async () => {
      try {
        // Timeout de sécurité pour ne pas bloquer le splash screen
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('TIMEOUT')), 3000)
        );
        // FIX: The fallback data must match the expected generic type { data: Settings }.
        const fetchPromise = apiFetch<{data: Settings}>('power_api/settings.php', {}, { data: {} });
        const res = await Promise.race([fetchPromise, timeoutPromise]);
        
        // Assurer que le résultat est du type attendu avant de l'utiliser
        if (res && typeof res === 'object' && 'data' in res && res.data !== undefined) {
          setSettings(res.data as Settings);
        }
      } catch (err) {
        console.warn("Could not load remote settings, some features might use default values.", err);
      } finally {
        setLoading(false);
      }
    };

    loadSettings();
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (key: string): string => {
    // La fonction de traduction utilise uniquement les fichiers locaux
    const keys = key.split('.');
    let result: any = localTranslations[language];
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key; 
      }
    }
    return result as string;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, loading, settings }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
