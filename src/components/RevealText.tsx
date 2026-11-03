import { Button, Text } from '@chakra-ui/react'
import { useState, type FC } from 'react'
import { reveal } from '../lib/obfuscate'

interface RevealTextProps {
    encoded: string
    label: string
}

export const RevealText: FC<RevealTextProps> = ({ encoded, label }) => {
    const [visible, setVisible] = useState(false)

    return visible ? (
        <Text>{reveal(encoded)}</Text>
    ) : (
        <Button
            variant="plain"
            size="sm"
            p="0"
            h="auto"
            color="fg.muted"
            textDecoration="underline"
            onClick={() => setVisible(true)}
        >
            {label}
        </Button>
    )
}
