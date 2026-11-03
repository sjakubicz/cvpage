import type { FC } from 'react'
import { ErrorCard } from '../components/ErrorCard'

export const NotFound: FC = () => <ErrorCard status={404} />
