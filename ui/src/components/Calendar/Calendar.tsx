import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import './Calendar.css'
import {useTheme} from '@/contexts/ThemeContext'
import {useResponsive} from '@/contexts/ResponsiveContext'
import {useCalendar} from '@/contexts/CalendarContext'

export default function Calendar() {
    const {theme, toggleTheme} = useTheme()
    const {isMobile} = useResponsive()
    const {
        calendarRef,
        openSettingsModal,
        handleDatesSet,
        onTouchStart,
        onTouchMove,
        onTouchEnd
    } = useCalendar()

    return (
        <div
            className="calendar-container"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                height="100%"
                headerToolbar={!isMobile && {
                    left: 'settingsButton prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay themeToggle'
                }}
                customButtons={{
                    themeToggle: {
                        text: theme === 'light' ? '🌙' : '☀️',
                        click: toggleTheme
                    },
                    settingsButton: {
                        text: '⚙️',
                        click: openSettingsModal
                    }
                }}
                datesSet={handleDatesSet}
            />
        </div>
    )
}