import { Badge, Box, Stack, Text, Wrap } from '@chakra-ui/react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import type { Coursework } from '../data/types'

interface CourseworkListProps {
    items: Coursework[]
}

export const CourseworkList: FC<CourseworkListProps> = ({ items }) => {
    const { t } = useTranslation()

    return (
        <Stack gap="3">
            {items.map((item) => (
                <Box key={item.name} borderLeftWidth="2px" borderColor="border.muted" ps="3">
                    <Text fontSize="sm" fontWeight="semibold">
                        {t(item.name)}
                    </Text>
                    <Text fontSize="sm" color="fg.muted">
                        {t(item.description)}
                    </Text>
                    <Wrap gap="1" mt="1">
                        {item.tags.map((tag) => (
                            <Badge key={tag} variant="outline" size="sm">
                                {tag}
                            </Badge>
                        ))}
                    </Wrap>
                </Box>
            ))}
        </Stack>
    )
}
