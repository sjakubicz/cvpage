import { Card, Center, Heading, HStack, Link, Stack, Text } from '@chakra-ui/react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LuBookOpen, LuFolderGit2, LuGraduationCap, LuListChecks } from 'react-icons/lu'
import type { Education } from '../data/types'
import { useFormatPeriod } from '../hooks/useFormatPeriod'
import { CourseworkList } from './CourseworkList'
import { ExpandableSection } from './ExpandableSection'
import { ProjectList } from './ProjectList'
import { StudyAreas } from './StudyAreas'

interface EducationCardProps {
    education: Education
}

export const EducationCard: FC<EducationCardProps> = ({ education }) => {
    const { t } = useTranslation()
    const formatPeriod = useFormatPeriod()
    const hasDetails = education.areas || education.projects || education.coursework

    return (
        <Card.Root variant="outline" overflow="hidden">
            <Card.Body gap="4">
                <HStack gap="4" align="flex-start">
                    <Center
                        boxSize="11"
                        borderRadius="lg"
                        bg="teal.subtle"
                        color="teal.fg"
                        flexShrink="0"
                        fontSize="xl"
                    >
                        <LuGraduationCap />
                    </Center>
                    <Stack gap="1">
                        <Heading as="h2" size="lg" lineHeight="short">
                            {education.url ? (
                                <Link href={t(education.url)} target="_blank" rel="noreferrer">
                                    {t(education.degree)}
                                </Link>
                            ) : (
                                t(education.degree)
                            )}
                        </Heading>
                        <Text fontSize="sm" color="fg.muted">
                            {t(education.school)} · {formatPeriod(education.start, education.end)}
                            {education.eqfLevel &&
                                ` · ${t('education.eqfLevel', { level: education.eqfLevel })}`}
                        </Text>
                        {education.thesis && (
                            <Text pt="1">
                                {t('education.thesis')}:{' '}
                                <Text as="span" fontWeight="semibold">
                                    {t(education.thesis)}
                                </Text>
                            </Text>
                        )}
                        {education.description && <Text>{t(education.description)}</Text>}
                    </Stack>
                </HStack>

                {hasDetails && (
                    <Stack gap="0" borderBottomWidth="1px">
                        {education.areas && (
                            <ExpandableSection
                                title={t('education.studyAreas')}
                                count={education.areas.length}
                                icon={<LuBookOpen />}
                            >
                                <StudyAreas areas={education.areas} />
                            </ExpandableSection>
                        )}
                        {education.projects && (
                            <ExpandableSection
                                title={t('common.projects')}
                                count={education.projects.length}
                                icon={<LuFolderGit2 />}
                            >
                                <ProjectList projects={education.projects} />
                            </ExpandableSection>
                        )}
                        {education.coursework && (
                            <ExpandableSection
                                title={t('education.coursework')}
                                count={education.coursework.length}
                                icon={<LuListChecks />}
                            >
                                <CourseworkList items={education.coursework} />
                            </ExpandableSection>
                        )}
                    </Stack>
                )}
            </Card.Body>
        </Card.Root>
    )
}
