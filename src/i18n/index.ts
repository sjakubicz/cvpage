import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { DEFAULT_LANGUAGE, LANGUAGES } from '../const'
import { enContent } from './content/en'
import { plContent } from './content/pl'
import { en } from './locales/en'
import { pl } from './locales/pl'

i18n.on('languageChanged', (language) => {
    document.documentElement.lang = language
})

void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            pl: { translation: { ...pl, content: plContent } },
            en: { translation: { ...en, content: enContent } },
        },
        fallbackLng: DEFAULT_LANGUAGE,
        supportedLngs: [...LANGUAGES],
        interpolation: { escapeValue: false },
        detection: {
            order: ['localStorage', 'htmlTag'],
            caches: ['localStorage'],
        },
    })

export default i18n
