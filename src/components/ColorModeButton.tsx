import { IconButton } from '@chakra-ui/react'
import { useTheme } from 'next-themes'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LuMoon, LuSun } from 'react-icons/lu'

export const ColorModeButton: FC = () => {
    const { t } = useTranslation()
    const { resolvedTheme, setTheme } = useTheme()
    const dark = resolvedTheme === 'dark'

    return (
        <IconButton
            aria-label={t('common.toggleTheme')}
            variant="ghost"
            size="sm"
            onClick={() => setTheme(dark ? 'light' : 'dark')}
        >
            {dark ? <LuSun /> : <LuMoon />}
        </IconButton>
    )
}
