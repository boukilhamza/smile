'use client';

import { useLanguage } from '@/contexts/LanguageContext';

// Hook personnalisé qui retourne soit les traductions, soit les textes par défaut
export function useTranslation() {
  try {
    const { t, language, setLanguage } = useLanguage();
    return { t, language, setLanguage, isTranslationEnabled: true };
  } catch (error) {
    // Si le contexte n'est pas disponible, retourner null
    return { t: null, language: 'fr', setLanguage: () => {}, isTranslationEnabled: false };
  }
}