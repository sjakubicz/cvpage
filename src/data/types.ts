import type { HighlightIcon, Language, SkillIcon, SocialIcon } from '../const'
import type { ContentKey } from '../i18n/types'

export interface Link {
    label: string
    url: string
    icon: SocialIcon
}

export interface SkillGroup {
    icon: SkillIcon
    category: ContentKey
    items: ContentKey
}

export interface SpokenLanguage {
    flag: Language
    name: ContentKey
    level: ContentKey
}

export interface Contact {
    encodedEmail: string
    encodedPhone: string
}

export interface Profile {
    name: string
    headline: ContentKey
    about: ContentKey
    contact: Contact
    links: Link[]
    skills: SkillGroup[]
    languages: SpokenLanguage[]
}

export interface Project {
    name: ContentKey
    description: ContentKey
    tags: string[]
    url?: string
    repo?: string
}

export interface Highlight {
    icon: HighlightIcon
    title: ContentKey
    description: ContentKey
}

export interface Experience {
    role: ContentKey
    company: string
    companyUrl?: string
    logo?: string
    location?: ContentKey
    start: string
    end?: string
    description?: ContentKey
    highlights?: Highlight[]
    projects?: Project[]
}

export interface Coursework {
    name: ContentKey
    description: ContentKey
    tags: string[]
}

export interface StudyArea {
    name: ContentKey
    description: ContentKey
}

export interface Education {
    degree: ContentKey
    school: ContentKey
    url?: ContentKey
    start: string
    end?: string
    thesis?: ContentKey
    description?: ContentKey
    eqfLevel?: number
    areas?: StudyArea[]
    projects?: Project[]
    coursework?: Coursework[]
}

export interface Publication {
    title: string
    authors: string
    venue: string
    year: number
    url?: string
    pdfUrl?: string
    doi?: string
    description?: ContentKey
}
