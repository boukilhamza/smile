'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'fr' | 'en')}
        className="bg-transparent border border-white/20 rounded-md px-3 py-1 text-sm focus:outline-none focus:border-white/40 transition-colors"
        aria-label="Language selector"
      >
        <option value="fr" className="bg-gray-900">Français</option>
        <option value="en" className="bg-gray-900">English</option>
      </select>
    </div>
  );
}