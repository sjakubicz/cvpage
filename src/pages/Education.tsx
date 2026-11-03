import { Heading } from '@chakra-ui/react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { EducationCard } from '../components/EducationCard'
import { PublicationItem } from '../components/PublicationItem'
import { Section } from '../components/Section'
import { education, publications } from '../data/profile'

export const Education: FC = () => {
    const { t } = useTranslation()
    const sortedPublications = [...publications].sort((a, b) => b.year - a.year)

    return (
        <Section title={t('pages.education')}>
            {education.map((edu) => (
                <EducationCard key={edu.degree} education={edu} />
            ))}

            <Heading as="h2" size="xl" pt="4">
                {t('education.publications')}
            </Heading>
            {sortedPublications.map((publication) => (
                <PublicationItem key={publication.title} publication={publication} />
            ))}
        </Section>
    )
}
