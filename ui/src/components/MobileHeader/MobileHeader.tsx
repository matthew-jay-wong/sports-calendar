import './MobileHeader.css'
import { useTheme } from '@/contexts/ThemeContext'
import { useCalendar } from '@/contexts/CalendarContext'

export default function MobileHeader() {
    const { theme, toggleTheme } = useTheme()
    const { 
        currentView, 
        currentTitle, 
        openSettingsModal, 
        goToToday, 
        changeView 
    } = useCalendar()

    return (
        <>
            <div className="mobile-controls">
                <div className="mobile-left-buttons">
                    <button 
                        onClick={openSettingsModal}
                        className="mobile-action-btn"
                    >
                        ⚙️
                    </button>
                    <button 
                        onClick={goToToday}
                        className="mobile-action-btn"
                    >
                        Today
                    </button>
                </div>
                <div className="mobile-right-buttons">
                    <div className="mobile-view-buttons">
                        <button 
                            onClick={() => changeView('dayGridMonth')}
                            className={`mobile-view-btn ${currentView === 'dayGridMonth' ? 'active' : ''}`}
                        >
                            Month
                        </button>
                        <button 
                            onClick={() => changeView('dayGridWeek')}
                            className={`mobile-view-btn ${currentView === 'dayGridWeek' ? 'active' : ''}`}
                        >
                            Week
                        </button>
                        <button 
                            onClick={() => changeView('dayGridDay')}
                            className={`mobile-view-btn ${currentView === 'dayGridDay' ? 'active' : ''}`}
                        >
                            Day
                        </button>
                    </div>
                    <button 
                        onClick={toggleTheme}
                        className="mobile-action-btn"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
            <div className="mobile-title">
                <h2>{currentTitle}</h2>
            </div>
        </>
    )
}