import type { plContent } from './content/pl'
import type { pl } from './locales/pl'

export type UiTranslations = typeof pl
export type Content = typeof plContent
export type Translations = UiTranslations & { content: Content }

type Leaves<T, Prefix extends string = ''> = {
    [K in keyof T & string]: T[K] extends string ? `${Prefix}${K}` : Leaves<T[K], `${Prefix}${K}.`>
}[keyof T & string]

export type TranslationKey = Leaves<Translations>
export type ContentKey = Extract<TranslationKey, `content.${string}`>

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: { translation: Translations }
    }
}
