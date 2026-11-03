import { Container, Flex } from '@chakra-ui/react'
import type { FC } from 'react'
import { Outlet } from 'react-router'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout: FC = () => (
    <Flex direction="column" minH="100dvh">
        <Header />
        <Container as="main" maxW="5xl" py="10" flex="1">
            <Outlet />
        </Container>
        <Footer />
    </Flex>
)
