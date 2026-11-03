import { createBrowserRouter } from 'react-router'
import { Layout } from './components/Layout'
import { Education } from './pages/Education'
import { Experience } from './pages/Experience'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Projects } from './pages/Projects'
import { RouteError } from './pages/RouteError'

export const router = createBrowserRouter([
    {
        Component: Layout,
        children: [
            {
                ErrorBoundary: RouteError,
                children: [
                    { path: '/', Component: Home },
                    { path: '/doswiadczenie', Component: Experience },
                    { path: '/edukacja', Component: Education },
                    { path: '/projekty', Component: Projects },
                    {
                        path: '/cv',
                        lazy: async () => ({ Component: (await import('./pages/Cv')).Cv }),
                    },
                    { path: '*', Component: NotFound },
                ],
            },
        ],
    },
])
