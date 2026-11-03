import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'
import type { FC, ReactNode } from 'react'

interface ProviderProps {
    children: ReactNode
}

export const Provider: FC<ProviderProps> = ({ children }) => (
    <ChakraProvider value={defaultSystem}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
            {children}
        </ThemeProvider>
    </ChakraProvider>
)
