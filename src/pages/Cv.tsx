import { Button, Flex } from '@chakra-ui/react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LuDownload } from 'react-icons/lu'
import { PdfViewer } from '../components/PdfViewer'
import { Section } from '../components/Section'
import { CV_FILE } from '../const'

export const Cv: FC = () => {
    const { t } = useTranslation()

    return (
        <Section title={t('nav.cv')}>
            <Flex justify="flex-end">
                <Button asChild size="sm">
                    <a href={CV_FILE.url} download={CV_FILE.downloadName}>
                        <LuDownload />
                        {t('cv.download')}
                    </a>
                </Button>
            </Flex>
            <PdfViewer url={CV_FILE.url} />
        </Section>
    )
}
