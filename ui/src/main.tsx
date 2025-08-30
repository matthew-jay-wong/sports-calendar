import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ResponsiveProvider } from '@/contexts/ResponsiveContext'
import { CalendarProvider } from '@/contexts/CalendarContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ResponsiveProvider>
        <CalendarProvider>
          <App />
        </CalendarProvider>
      </ResponsiveProvider>
    </ThemeProvider>
  </StrictMode>,
)
