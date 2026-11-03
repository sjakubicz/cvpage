import { Badge, Box, Button, Collapsible, HStack } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'
import { LuChevronDown } from 'react-icons/lu'

interface ExpandableSectionProps {
    title: string
    count?: number
    icon?: ReactNode
    defaultOpen?: boolean
    children: ReactNode
}

export const ExpandableSection: FC<ExpandableSectionProps> = ({
    title,
    count,
    icon,
    defaultOpen,
    children,
}) => (
    <Collapsible.Root lazyMount defaultOpen={defaultOpen} borderTopWidth="1px">
        <Collapsible.Trigger asChild>
            <Button
                variant="ghost"
                w="full"
                justifyContent="space-between"
                px="2"
                borderRadius="0"
                fontWeight="medium"
            >
                <HStack gap="2">
                    {icon}
                    {title}
                    {count !== undefined && (
                        <Badge variant="subtle" size="sm">
                            {count}
                        </Badge>
                    )}
                </HStack>
                <Collapsible.Indicator
                    transition="transform 0.2s"
                    _open={{ transform: 'rotate(180deg)' }}
                >
                    <LuChevronDown />
                </Collapsible.Indicator>
            </Button>
        </Collapsible.Trigger>
        <Collapsible.Content>
            <Box px="2" pt="2" pb="5">
                {children}
            </Box>
        </Collapsible.Content>
    </Collapsible.Root>
)
