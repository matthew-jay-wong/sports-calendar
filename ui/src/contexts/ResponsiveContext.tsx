import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

interface ResponsiveContextType {
    isMobile: boolean
}

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined)

export function useResponsive() {
    const context = useContext(ResponsiveContext)
    if (context === undefined) {
        throw new Error('useResponsive must be used within a ResponsiveProvider')
    }
    return context
}

interface ResponsiveProviderProps {
    children: ReactNode
}

export function ResponsiveProvider({ children }: ResponsiveProviderProps) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        // Set initial value
        checkMobile()
        
        // Add event listener for window resize
        window.addEventListener('resize', checkMobile)
        
        // Cleanup
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <ResponsiveContext.Provider value={{ isMobile }}>
            {children}
        </ResponsiveContext.Provider>
    )
}