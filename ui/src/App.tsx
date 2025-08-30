import './App.css'
import Calendar from '@/components/Calendar'
import SettingsModal from '@/components/SettingsModal'
import MobileHeader from '@/components/MobileHeader'

function App() {

    return (
        <div className="app-container">
            <MobileHeader/>
            <Calendar/>
            <SettingsModal/>
        </div>
    )
}

export default App
