export const reveal = (encoded: string) => [...atob(encoded)].reverse().join('')
