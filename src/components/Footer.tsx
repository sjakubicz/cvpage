import { Box, Container, Text } from '@chakra-ui/react'
import type { FC } from 'react'
import { CURRENT_YEAR } from '../const'
import { profile } from '../data/profile'

export const Footer: FC = () => (
    <Box as="footer" borderTopWidth="1px">
        <Container maxW="5xl" py="4">
            <Text fontSize="sm" color="fg.muted">
                © {CURRENT_YEAR} {profile.name}
            </Text>
        </Container>
    </Box>
)
