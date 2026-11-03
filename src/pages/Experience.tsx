import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ExperienceCard } from '../components/ExperienceCard'
import { Section } from '../components/Section'
import { experience } from '../data/profile'

export const Experience: FC = () => {
    const { t } = useTranslation()

    return (
        <Section title={t('pages.experience')}>
            {experience.map((job) => (
                <ExperienceCard key={`${job.company}-${job.start}`} experience={job} />
            ))}
        </Section>
    )
}
