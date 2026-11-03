import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ContactDetails } from '../components/ContactDetails'
import { InfoCard } from '../components/InfoCard'
import { LANGUAGE_FLAGS, PROFILE_PHOTO, SKILL_ICONS, SOCIAL_ICONS } from '../const'
import { profile } from '../data/profile'

export const Home: FC = () => {
    const { t } = useTranslation()

    return (
        <Stack gap="10">
            <Flex
                direction={{ base: 'column', md: 'row' }}
                gap="8"
                align={{ base: 'center', md: 'flex-start' }}
            >
                <Image
                    src={PROFILE_PHOTO}
                    alt={profile.name}
                    w={{ base: '56', md: '64' }}
                    aspectRatio="3 / 4"
                    objectFit="cover"
                    borderRadius="xl"
                    boxShadow="lg"
                    flexShrink="0"
                />
                <Stack gap="6">
                    <Stack gap="1">
                        <Heading as="h1" size="4xl">
                            {profile.name}
                        </Heading>
                        <Text fontSize="lg" color="fg.muted">
                            {t(profile.headline)}
                        </Text>
                    </Stack>
                    <Text fontSize="md" lineHeight="tall">
                        {t(profile.about)}
                    </Text>
                    <HStack gap="3" wrap="wrap">
                        {profile.links.map((link) => {
                            const Icon = SOCIAL_ICONS[link.icon]
                            return (
                                <Button key={link.url} asChild size="sm" variant="outline">
                                    <a href={link.url} target="_blank" rel="noreferrer">
                                        <Icon />
                                        {link.label}
                                    </a>
                                </Button>
                            )
                        })}
                    </HStack>
                </Stack>
            </Flex>

            <Stack gap="4">
                <Heading as="h2" size="xl">
                    {t('home.contact')}
                </Heading>
                <ContactDetails />
            </Stack>

            <Stack gap="4">
                <Heading as="h2" size="xl">
                    {t('home.skills')}
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
                    {profile.skills.map((group) => {
                        const Icon = SKILL_ICONS[group.icon]
                        return (
                            <InfoCard
                                key={group.category}
                                icon={<Icon />}
                                title={t(group.category)}
                                description={t(group.items)}
                            />
                        )
                    })}
                </SimpleGrid>
            </Stack>

            <Stack gap="4">
                <Heading as="h2" size="xl">
                    {t('home.languages')}
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
                    {profile.languages.map((language) => {
                        const Flag = LANGUAGE_FLAGS[language.flag]
                        return (
                            <InfoCard
                                key={language.name}
                                icon={<Box as={Flag} w="5" borderRadius="2px" />}
                                title={t(language.name)}
                                description={t(language.level)}
                            />
                        )
                    })}
                </SimpleGrid>
            </Stack>
        </Stack>
    )
}
