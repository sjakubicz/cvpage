import { Box, Center, Spinner, Stack, Text } from '@chakra-ui/react'
import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Document, Page } from 'react-pdf'
import { useElementWidth } from '../hooks/useElementWidth'
import '../lib/pdf'

interface PdfViewerProps {
    url: string
}

export const PdfViewer: FC<PdfViewerProps> = ({ url }) => {
    const { t } = useTranslation()
    const { ref, width } = useElementWidth<HTMLDivElement>()
    const [numPages, setNumPages] = useState(0)

    return (
        <Box ref={ref}>
            <Document
                file={url}
                suspense={false}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                loading={
                    <Center py="20" gap="3">
                        <Spinner />
                        <Text>{t('pdf.loading')}</Text>
                    </Center>
                }
                error={
                    <Center py="20">
                        <Text color="fg.error">{t('pdf.error')}</Text>
                    </Center>
                }
            >
                {width > 0 && (
                    <Stack gap="4" css={{ '& .react-pdf__Page': { boxShadow: 'lg' } }}>
                        {Array.from({ length: numPages }, (_, i) => (
                            <Page key={i} pageNumber={i + 1} width={width} />
                        ))}
                    </Stack>
                )}
            </Document>
        </Box>
    )
}
