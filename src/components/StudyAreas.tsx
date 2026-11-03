import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import type { StudyArea } from '../data/types'

interface StudyAreasProps {
    areas: StudyArea[]
}

export const StudyAreas: FC<StudyAreasProps> = ({ areas }) => {
    const { t } = useTranslation()

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
            {areas.map((area) => (
                <Box key={area.name}>
                    <Text fontSize="sm" fontWeight="semibold">
                        {t(area.name)}
                    </Text>
                    <Text fontSize="sm" color="fg.muted">
                        {t(area.description)}
                    </Text>
                </Box>
            ))}
        </SimpleGrid>
    )
}
