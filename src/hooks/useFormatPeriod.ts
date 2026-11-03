import { useTranslation } from 'react-i18next'
import { useLanguage } from './useLanguage'

export const useFormatPeriod = () => {
    const { t } = useTranslation()
    const { language } = useLanguage()
    const formatter = new Intl.DateTimeFormat(language, { month: 'short', year: 'numeric' })

    const formatDate = (date: string) => {
        const [year, month] = date.split('-').map(Number)
        return month ? formatter.format(new Date(year, month - 1)) : String(year)
    }

    return (start: string, end?: string) =>
        `${formatDate(start)} - ${end ? formatDate(end) : t('common.present')}`
}
