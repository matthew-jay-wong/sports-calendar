import { createContext, useContext, useState, useRef, type ReactNode } from 'react'
import type FullCalendar from "@fullcalendar/react"
import type { DatesSetArg } from '@fullcalendar/core'

export type CalendarView = 'dayGridMonth' | 'dayGridWeek' | 'dayGridDay'

interface CalendarContextType {
    // Calendar state
    currentView: CalendarView
    currentTitle: string
    calendarRef: React.RefObject<FullCalendar | null>
    
    // Settings modal state
    isSettingsModalOpen: boolean
    openSettingsModal: () => void
    closeSettingsModal: () => void
    
    // Calendar actions
    changeView: (view: CalendarView) => void
    goToToday: () => void
    goToNext: () => void
    goToPrev: () => void
    
    // Internal handlers
    handleDatesSet: (dateInfo: DatesSetArg) => void
    
    // Touch swipe
    touchStart: number | null
    touchEnd: number | null
    onTouchStart: (e: React.TouchEvent) => void
    onTouchMove: (e: React.TouchEvent) => void
    onTouchEnd: () => void
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined)

export function useCalendar() {
    const context = useContext(CalendarContext)
    if (context === undefined) {
        throw new Error('useCalendar must be used within a CalendarProvider')
    }
    return context
}

interface CalendarProviderProps {
    children: ReactNode
}

export function CalendarProvider({ children }: CalendarProviderProps) {
    const [currentView, setCurrentView] = useState<CalendarView>('dayGridMonth')
    const [currentTitle, setCurrentTitle] = useState('')
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)
    
    // Touch swipe handling
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)
    
    const calendarRef = useRef<FullCalendar>(null)
    
    // Settings modal actions
    const openSettingsModal = () => setIsSettingsModalOpen(true)
    const closeSettingsModal = () => setIsSettingsModalOpen(false)
    
    // Calendar actions
    const changeView = (view: CalendarView) => {
        calendarRef.current?.getApi().changeView(view)
        setCurrentView(view)
    }
    
    const goToToday = () => {
        calendarRef.current?.getApi().today()
    }
    
    const goToNext = () => {
        calendarRef.current?.getApi().next()
    }
    
    const goToPrev = () => {
        calendarRef.current?.getApi().prev()
    }
    
    // Handle FullCalendar date changes
    const handleDatesSet = (dateInfo: DatesSetArg) => {
        setCurrentTitle(dateInfo.view.title)
        setCurrentView(dateInfo.view.type as CalendarView)
    }
    
    // Touch swipe functions
    const minSwipeDistance = 50

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            goToNext()
        } else if (isRightSwipe) {
            goToPrev()
        }
    }

    return (
        <CalendarContext.Provider value={{
            // Calendar state
            currentView,
            currentTitle,
            calendarRef,
            
            // Settings modal state
            isSettingsModalOpen,
            openSettingsModal,
            closeSettingsModal,
            
            // Calendar actions
            changeView,
            goToToday,
            goToNext,
            goToPrev,
            
            // Internal handlers
            handleDatesSet,
            
            // Touch swipe
            touchStart,
            touchEnd,
            onTouchStart,
            onTouchMove,
            onTouchEnd
        }}>
            {children}
        </CalendarContext.Provider>
    )
}