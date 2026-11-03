import { Heading, Stack } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'

interface SectionProps {
    title: string
    children: ReactNode
}

export const Section: FC<SectionProps> = ({ title, children }) => (
    <Stack gap="6">
        <Heading as="h1" size="2xl">
            {title}
        </Heading>
        {children}
    </Stack>
)
