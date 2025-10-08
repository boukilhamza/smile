'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { fr } from '@/locales/fr';
// import { enImproved as en } from '@/locales/en-improved';
import { en } from '@/locales/en';

type Language = 'fr' | 'en';
type Translations = typeof fr;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  fr,
  en
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      setMounted(true);
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
          setLanguage(savedLanguage);
        }
      }
    } catch (error) {
      console.error('Error in LanguageProvider useEffect:', error);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    try {
      setLanguage(lang);
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('language', lang);
      }
    } catch (error) {
      console.error('Error setting language:', error);
    }
  };

  // Always use French translations as fallback
  const currentTranslations = translations[language] || translations['fr'];

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: handleSetLanguage,
      t: currentTranslations
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return default French translations if context is not available
    console.warn('useLanguage called outside of LanguageProvider, returning default French translations');
    return {
      language: 'fr' as Language,
      setLanguage: () => {},
      t: fr
    };
  }
  return context;
}