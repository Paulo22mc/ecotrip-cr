// src/services/languageService.js
const translations = {
  ES: {
    home: "Inicio",
    transport: "Transporte",
    tours: "Tours",
    about: "Nosotros",
    bookNow: "Reservar Ahora"
  },
  EN: {
    home: "Home",
    transport: "Transport",
    tours: "Tours",
    about: "About",
    bookNow: "Book Now"
  },
  FR: {
    home: "Accueil",
    transport: "Transport",
    tours: "Circuits",
    about: "À propos",
    bookNow: "Réserver"
  }
};

const getTranslations = (lang) => translations[lang] || translations['ES'];

const getCurrentLanguage = () => {
  return localStorage.getItem('selectedLanguage') || 'EN';
};

const setCurrentLanguage = (lang) => {
  localStorage.setItem('selectedLanguage', lang);
  document.dispatchEvent(new Event('languageChanged'));
};

export { getTranslations, getCurrentLanguage, setCurrentLanguage };