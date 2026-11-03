import { Center, HStack, Stack, Text } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'

interface ContactItemProps {
    icon: ReactNode
    label: string
    children: ReactNode
}

export const ContactItem: FC<ContactItemProps> = ({ icon, label, children }) => (
    <HStack gap="4" align="center">
        <Center boxSize="10" borderRadius="full" bg="bg.muted" color="fg.muted" flexShrink="0">
            {icon}
        </Center>
        <Stack gap="0">
            <Text fontSize="xs" color="fg.muted" textTransform="uppercase" letterSpacing="wide">
                {label}
            </Text>
            {children}
        </Stack>
    </HStack>
)
