import { Box } from '@chakra-ui/react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../const'
import type { TranslationKey } from '../i18n/types'
import { useLanguage } from '../hooks/useLanguage'

interface StableTextProps {
    textKey: TranslationKey
}

export const StableText: FC<StableTextProps> = ({ textKey }) => {
    const { i18n } = useTranslation()
    const { language } = useLanguage()

    return (
        <Box as="span" display="inline-grid" justifyItems="center">
            {LANGUAGES.map((lng) => (
                <Box
                    as="span"
                    key={lng}
                    gridArea="1 / 1"
                    visibility={lng === language ? 'visible' : 'hidden'}
                    aria-hidden={lng !== language}
                >
                    {i18n.getFixedT(lng)(textKey)}
                </Box>
            ))}
        </Box>
    )
}
