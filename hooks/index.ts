import { useEffect } from 'react'

export const useFullScreenHeight = (): void => {
  useEffect(() => {
    const handleResize = (): void => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })
}
