import type { FlagComponent } from 'country-flag-icons/react/3x2'
import { GB, PL } from 'country-flag-icons/react/3x2'
import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import {
    LuBrain,
    LuCode,
    LuCpu,
    LuNetwork,
    LuSigma,
    LuSparkles,
    LuFlaskConical,
    LuGitPullRequest,
    LuShieldCheck,
    LuTrendingUp,
    LuUsers,
} from 'react-icons/lu'
import type { TranslationKey } from './i18n/types'

export const LANGUAGES = ['pl', 'en'] as const
export type Language = (typeof LANGUAGES)[number]
export const DEFAULT_LANGUAGE: Language = 'pl'

export const LANGUAGE_FLAGS: Record<Language, FlagComponent> = {
    pl: PL,
    en: GB,
}

export const SOCIAL_ICONS = {
    github: FaGithub,
    linkedin: FaLinkedin,
} satisfies Record<string, IconType>
export type SocialIcon = keyof typeof SOCIAL_ICONS

export const HIGHLIGHT_ICONS = {
    clients: LuUsers,
    research: LuFlaskConical,
    quality: LuShieldCheck,
    review: LuGitPullRequest,
    growth: LuTrendingUp,
} satisfies Record<string, IconType>
export type HighlightIcon = keyof typeof HIGHLIGHT_ICONS

export const SKILL_ICONS = {
    ml: LuBrain,
    llm: LuSparkles,
    graphs: LuNetwork,
    edge: LuCpu,
    software: LuCode,
    math: LuSigma,
} satisfies Record<string, IconType>
export type SkillIcon = keyof typeof SKILL_ICONS

export const NAV_ITEMS: { to: string; labelKey: TranslationKey }[] = [
    { to: '/', labelKey: 'nav.about' },
    { to: '/doswiadczenie', labelKey: 'nav.experience' },
    { to: '/edukacja', labelKey: 'nav.education' },
    { to: '/projekty', labelKey: 'nav.projects' },
    { to: '/cv', labelKey: 'nav.cv' },
]

export const CURRENT_YEAR = new Date().getFullYear()

export const PROFILE_PHOTO = '/me.webp'

export const CV_FILE = {
    url: '/cv.pdf',
    downloadName: 'Szymon_Jakubicz_CV.pdf',
}
