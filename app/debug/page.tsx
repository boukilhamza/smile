'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function DebugPage() {
  try {
    const { t, language } = useLanguage();
    
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Debug Page</h1>
        <p className="mb-2">Current language: {language}</p>
        <p className="mb-2">Hero title: {t?.hero?.title || 'NOT FOUND'}</p>
        <p className="mb-2">About title: {t?.about?.title || 'NOT FOUND'}</p>
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-bold">Translation object keys:</h2>
          <pre className="text-xs">{JSON.stringify(Object.keys(t || {}), null, 2)}</pre>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold text-red-600">Error in Debug Page</h1>
        <pre className="mt-4 p-4 bg-red-100 rounded text-sm">
          {error instanceof Error ? error.message : 'Unknown error'}
        </pre>
      </div>
    );
  }
}