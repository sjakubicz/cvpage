import { Box, Container, Flex, HStack, Link } from '@chakra-ui/react'
import type { FC } from 'react'
import { NavLink } from 'react-router'
import { NAV_ITEMS } from '../const'
import { profile } from '../data/profile'
import { ColorModeButton } from './ColorModeButton'
import { LanguageSwitcher } from './LanguageSwitcher'
import { StableText } from './StableText'

export const Header: FC = () => {
    return (
        <Box as="header" borderBottomWidth="1px" position="sticky" top="0" bg="bg" zIndex="sticky">
            <Container maxW="5xl" py="3">
                <Flex align="center" justify="space-between" gap="4" wrap="wrap">
                    <Link asChild fontWeight="bold" _hover={{ textDecoration: 'none' }}>
                        <NavLink to="/">{profile.name}</NavLink>
                    </Link>
                    <HStack gap="4" wrap="wrap">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.to}
                                asChild
                                fontSize="sm"
                                color="fg.muted"
                                _currentPage={{ color: 'fg', fontWeight: 'semibold' }}
                            >
                                <NavLink to={item.to} end>
                                    <StableText textKey={item.labelKey} />
                                </NavLink>
                            </Link>
                        ))}
                        <HStack gap="0">
                            <LanguageSwitcher />
                            <ColorModeButton />
                        </HStack>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}
