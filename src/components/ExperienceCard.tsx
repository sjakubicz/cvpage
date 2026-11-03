import {
    Card,
    Center,
    Heading,
    HStack,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LuBriefcase, LuFolderGit2, LuListChecks } from 'react-icons/lu'
import { HIGHLIGHT_ICONS } from '../const'
import type { Experience } from '../data/types'
import { useFormatPeriod } from '../hooks/useFormatPeriod'
import { ExpandableSection } from './ExpandableSection'
import { InfoCard } from './InfoCard'
import { ProjectList } from './ProjectList'

interface ExperienceCardProps {
    experience: Experience
}

export const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
    const { t } = useTranslation()
    const formatPeriod = useFormatPeriod()
    const hasDetails = experience.highlights || experience.projects

    return (
        <Card.Root variant="outline" overflow="hidden">
            <Card.Body gap="4">
                <HStack gap="4" align="flex-start">
                    {experience.logo ? (
                        <Image
                            src={experience.logo}
                            alt={experience.company}
                            boxSize="16"
                            objectFit="contain"
                            bg="white"
                            borderWidth="1px"
                            borderRadius="lg"
                            p="1"
                            flexShrink="0"
                        />
                    ) : (
                        <Center
                            boxSize="11"
                            borderRadius="lg"
                            bg="blue.subtle"
                            color="blue.fg"
                            flexShrink="0"
                            fontSize="xl"
                        >
                            <LuBriefcase />
                        </Center>
                    )}
                    <Stack gap="1">
                        <Heading as="h2" size="lg" lineHeight="short">
                            {t(experience.role)} ·{' '}
                            {experience.companyUrl ? (
                                <Link href={experience.companyUrl} target="_blank" rel="noreferrer">
                                    {experience.company}
                                </Link>
                            ) : (
                                experience.company
                            )}
                        </Heading>
                        <Text fontSize="sm" color="fg.muted">
                            {formatPeriod(experience.start, experience.end)}
                            {experience.location && ` · ${t(experience.location)}`}
                        </Text>
                        {experience.description && <Text pt="1">{t(experience.description)}</Text>}
                    </Stack>
                </HStack>

                {hasDetails && (
                    <Stack gap="0" borderBottomWidth="1px">
                        {experience.projects && (
                            <ExpandableSection
                                title={t('common.projects')}
                                count={experience.projects.length}
                                icon={<LuFolderGit2 />}
                                defaultOpen
                            >
                                <ProjectList projects={experience.projects} />
                            </ExpandableSection>
                        )}
                        {experience.highlights && (
                            <ExpandableSection
                                title={t('experience.highlights')}
                                count={experience.highlights.length}
                                icon={<LuListChecks />}
                            >
                                <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
                                    {experience.highlights.map((highlight) => {
                                        const Icon = HIGHLIGHT_ICONS[highlight.icon]
                                        return (
                                            <InfoCard
                                                key={highlight.icon}
                                                icon={<Icon />}
                                                title={t(highlight.title)}
                                                description={t(highlight.description)}
                                            />
                                        )
                                    })}
                                </SimpleGrid>
                            </ExpandableSection>
                        )}
                    </Stack>
                )}
            </Card.Body>
        </Card.Root>
    )
}
