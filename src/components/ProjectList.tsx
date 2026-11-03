import { SimpleGrid } from '@chakra-ui/react'
import type { FC } from 'react'
import type { Project } from '../data/types'
import { ProjectCard } from './ProjectCard'

interface ProjectListProps {
    projects: Project[]
}

export const ProjectList: FC<ProjectListProps> = ({ projects }) => (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
        {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
        ))}
    </SimpleGrid>
)
