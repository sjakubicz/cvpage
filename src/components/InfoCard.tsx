import { Box, Card, Center, HStack } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'

interface InfoCardProps {
    icon: ReactNode
    title: string
    description: string
}

export const InfoCard: FC<InfoCardProps> = ({ icon, title, description }) => (
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
        <Box h="1" bgGradient="to-r" gradientFrom="blue.500" gradientTo="purple.500" />
        <Card.Body gap="3">
            <HStack gap="3" align="flex-start">
                <Center
                    boxSize="9"
                    borderRadius="md"
                    bg="blue.subtle"
                    color="blue.fg"
                    flexShrink="0"
                >
                    {icon}
                </Center>
                <Card.Title lineHeight="short" pt="1.5">
                    {title}
                </Card.Title>
            </HStack>
            <Card.Description lineHeight="tall">{description}</Card.Description>
        </Card.Body>
    </Card.Root>
)
