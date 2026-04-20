import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esTranslation from './locales/es.json';
import gnTranslation from './locales/gn.json';

const resources = {
  es: { translation: esTranslation },
  gn: { translation: gnTranslation }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('app_lang') || 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false 
    }
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('app_lang', lng);
});

export default i18n;
