import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './assets/lang/en.json';
import es from './assets/lang/es.json';

const userLanguage = navigator.language.split('-')[0];

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            },
            es: {
                translation: es,
            },
        },
        lng: userLanguage || 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
