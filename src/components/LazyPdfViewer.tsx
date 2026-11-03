import { lazy } from 'react'

export const LazyPdfViewer = lazy(async () => ({
    default: (await import('./PdfViewer')).PdfViewer,
}))
