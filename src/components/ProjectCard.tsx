import { Badge, Box, Button, Card, Center, HStack, Wrap } from '@chakra-ui/react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub } from 'react-icons/fa6'
import { LuExternalLink, LuFolderGit2 } from 'react-icons/lu'
import type { Project } from '../data/types'

interface ProjectCardProps {
    project: Project
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const { t } = useTranslation()

    return (
        <Card.Root
            variant="outline"
            size="sm"
            overflow="hidden"
            transition="all 0.2s"
            _hover={{
                shadow: 'md',
                borderColor: 'border.emphasized',
                transform: 'translateY(-2px)',
            }}
        >
            <Box h="1" bgGradient="to-r" gradientFrom="teal.400" gradientTo="blue.500" />
            <Card.Body gap="3">
                <HStack gap="3" align="flex-start">
                    <Center
                        boxSize="9"
                        borderRadius="md"
                        bg="teal.subtle"
                        color="teal.fg"
                        flexShrink="0"
                    >
                        <LuFolderGit2 />
                    </Center>
                    <Card.Title lineHeight="short" pt="1.5">
                        {t(project.name)}
                    </Card.Title>
                </HStack>
                <Card.Description lineHeight="tall">{t(project.description)}</Card.Description>
                <Wrap gap="1.5" mt="auto">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="subtle" colorPalette="teal" size="sm">
                            {tag}
                        </Badge>
                    ))}
                </Wrap>
            </Card.Body>
            {(project.url || project.repo) && (
                <Card.Footer gap="2" pt="0">
                    {project.repo && (
                        <Button asChild size="xs" variant="outline">
                            <a href={project.repo} target="_blank" rel="noreferrer">
                                <FaGithub />
                                {t('projects.code')}
                            </a>
                        </Button>
                    )}
                    {project.url && (
                        <Button asChild size="xs" variant="outline">
                            <a href={project.url} target="_blank" rel="noreferrer">
                                <LuExternalLink />
                                {t('projects.website')}
                            </a>
                        </Button>
                    )}
                </Card.Footer>
            )}
        </Card.Root>
    )
}
