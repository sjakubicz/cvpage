import { Box, Button, Card, Center, Heading, Text } from '@chakra-ui/react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LuArrowLeft } from 'react-icons/lu'
import { NavLink } from 'react-router'

interface ErrorCardProps {
    status: number
}

export const ErrorCard: FC<ErrorCardProps> = ({ status }) => {
    const { t } = useTranslation()
    const notFound = status === 404

    return (
        <Center py={{ base: '10', md: '20' }}>
            <Card.Root variant="outline" overflow="hidden" w="full" maxW="xl" textAlign="center">
                <Box h="1" bgGradient="to-r" gradientFrom="blue.500" gradientTo="purple.500" />
                <Card.Body gap="4" alignItems="center" py="12">
                    <Text
                        fontSize={{ base: '7xl', md: '9xl' }}
                        fontWeight="extrabold"
                        lineHeight="1"
                        letterSpacing="tight"
                        bgGradient="to-r"
                        gradientFrom="blue.500"
                        gradientTo="purple.500"
                        bgClip="text"
                        color="transparent"
                    >
                        {status}
                    </Text>
                    <Heading as="h1" size="xl">
                        {t(notFound ? 'notFound.title' : 'routeError.title')}
                    </Heading>
                    <Text color="fg.muted">
                        {t(notFound ? 'notFound.message' : 'routeError.message')}
                    </Text>
                    <Button asChild mt="2" size="sm" variant="outline">
                        <NavLink to="/">
                            <LuArrowLeft />
                            {t('notFound.back')}
                        </NavLink>
                    </Button>
                </Card.Body>
            </Card.Root>
        </Center>
    )
}
