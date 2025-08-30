import Modal from 'react-modal'
import './SettingsModal.css'
import { useCalendar } from '@/contexts/CalendarContext'

export default function SettingsModal() {
    const { isSettingsModalOpen, closeSettingsModal } = useCalendar()
    
    const handleSave = () => {
        // Save settings logic here
        closeSettingsModal()
    }

    return (
        <Modal
            isOpen={isSettingsModalOpen}
            onRequestClose={closeSettingsModal}
            contentLabel="Settings Modal"
            className="settings-modal"
            overlayClassName="settings-modal-overlay"
        >
            <div className="settings-modal-header">
                <h2>Settings</h2>
                <button 
                    onClick={closeSettingsModal}
                    className="settings-modal-close"
                >
                    ×
                </button>
            </div>
            
            <div className="settings-modal-content">
                <p>Settings options will go here...</p>
            </div>
            
            <div className="settings-modal-footer">
                <button 
                    onClick={closeSettingsModal}
                    className="settings-modal-button settings-modal-button-cancel"
                >
                    Cancel
                </button>
                <button 
                    onClick={handleSave}
                    className="settings-modal-button settings-modal-button-save"
                >
                    Save
                </button>
            </div>
        </Modal>
    )
}