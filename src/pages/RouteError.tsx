import type { FC } from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router'
import { ErrorCard } from '../components/ErrorCard'

export const RouteError: FC = () => {
    const error = useRouteError()
    console.error(error)

    return <ErrorCard status={isRouteErrorResponse(error) ? error.status : 500} />
}
