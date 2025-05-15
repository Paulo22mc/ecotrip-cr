// src/contexts/LanguageContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { getTranslations, getCurrentLanguage, setCurrentLanguage } from '../services/languageService';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getCurrentLanguage());
  const [translations, setTranslations] = useState(getTranslations(language));

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    setLanguage(lang);
  };

  useEffect(() => {
    const handleLanguageChange = () => {
      const lang = getCurrentLanguage();
      setLanguage(lang);
      setTranslations(getTranslations(lang));
    };

    document.addEventListener('languageChanged', handleLanguageChange);
    return () => {
      document.removeEventListener('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};