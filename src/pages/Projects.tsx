import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ProjectList } from '../components/ProjectList'
import { Section } from '../components/Section'
import { otherProjects } from '../data/profile'

export const Projects: FC = () => {
    const { t } = useTranslation()

    return (
        <Section title={t('pages.projects')}>
            <ProjectList projects={otherProjects} />
        </Section>
    )
}
