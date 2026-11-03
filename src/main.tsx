import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Provider } from './components/Provider'
import './i18n'
import { router } from './router'

const root = document.getElementById('root')

if (root === null) {
    throw new Error('Root element not found')
}

createRoot(root).render(
    <StrictMode>
        <Provider>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>,
)
