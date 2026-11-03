import { useTranslation } from 'react-i18next'
import { DEFAULT_LANGUAGE, LANGUAGES, type Language } from '../const'

export const useLanguage = () => {
    const { i18n } = useTranslation()
    const resolved = i18n.resolvedLanguage as Language | undefined
    const language = resolved && LANGUAGES.includes(resolved) ? resolved : DEFAULT_LANGUAGE
    const setLanguage = (next: Language) => i18n.changeLanguage(next)
    return { language, setLanguage }
}
