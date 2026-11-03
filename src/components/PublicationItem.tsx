import {
    Box,
    Button,
    Center,
    Collapsible,
    Heading,
    Link,
    Spinner,
    Stack,
    Text,
} from '@chakra-ui/react'
import { Suspense, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LuChevronDown, LuFileText } from 'react-icons/lu'
import type { Publication } from '../data/types'
import { LazyPdfViewer } from './LazyPdfViewer'

interface PublicationItemProps {
    publication: Publication
}

export const PublicationItem: FC<PublicationItemProps> = ({ publication }) => {
    const { t } = useTranslation()
    const href = publication.url ?? (publication.doi && `https://doi.org/${publication.doi}`)

    return (
        <Box borderWidth="1px" borderRadius="l3" p="5">
            <Stack gap="1">
                <Heading as="h3" size="md">
                    {href ? (
                        <Link href={href} target="_blank" rel="noreferrer">
                            {publication.title}
                        </Link>
                    ) : (
                        publication.title
                    )}
                </Heading>
                <Text fontSize="sm">{publication.authors}</Text>
                <Text fontSize="sm" color="fg.muted">
                    {publication.venue}, {publication.year}
                    {publication.doi && ` · DOI: ${publication.doi}`}
                </Text>
                {publication.description && <Text>{t(publication.description)}</Text>}
                {publication.pdfUrl && (
                    <Collapsible.Root lazyMount>
                        <Collapsible.Trigger asChild>
                            <Button variant="ghost" size="xs" px="0" color="fg.muted">
                                <LuFileText />
                                {t('publication.readPdf')}
                                <Collapsible.Indicator
                                    transition="transform 0.2s"
                                    _open={{ transform: 'rotate(180deg)' }}
                                >
                                    <LuChevronDown />
                                </Collapsible.Indicator>
                            </Button>
                        </Collapsible.Trigger>
                        <Collapsible.Content pt="3">
                            <Suspense
                                fallback={
                                    <Center py="20">
                                        <Spinner />
                                    </Center>
                                }
                            >
                                <LazyPdfViewer url={publication.pdfUrl} />
                            </Suspense>
                        </Collapsible.Content>
                    </Collapsible.Root>
                )}
            </Stack>
        </Box>
    )
}
