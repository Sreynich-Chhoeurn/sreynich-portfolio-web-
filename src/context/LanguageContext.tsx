import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Language, translate } from './translations';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem('portfolio-language') === 'km' ? 'km' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'km' ? 'ឈឿន ស្រីនិច - ស្នាដៃ និងប្រវត្តិរូប' : 'Sreynich Chhoeurn - Portfolio';
    try {
      localStorage.setItem('portfolio-language', language);
    } catch {
      // Language switching still works when browser storage is unavailable.
    }
  }, [language]);

  const t = useCallback((text: string) => translate(text, language), [language]);
  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
