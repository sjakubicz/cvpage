import { Box, IconButton } from '@chakra-ui/react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGE_FLAGS } from '../const'
import { useLanguage } from '../hooks/useLanguage'

export const LanguageSwitcher: FC = () => {
    const { t } = useTranslation()
    const { language, setLanguage } = useLanguage()
    const Flag = LANGUAGE_FLAGS[language]

    return (
        <IconButton
            aria-label={t('common.changeLanguage')}
            title={t('common.changeLanguage')}
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'pl' ? 'en' : 'pl')}
        >
            <Box
                as={Flag}
                w="5"
                h="auto"
                borderRadius="2px"
                boxShadow="0 0 0 1px rgba(0, 0, 0, 0.12)"
            />
        </IconButton>
    )
}
