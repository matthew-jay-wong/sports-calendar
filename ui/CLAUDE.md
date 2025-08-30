# Sports Calendar UI - Project Documentation

## Project Overview

A modern React-based sports calendar application built with TypeScript, Vite, and FullCalendar. Features responsive design, dark/light theme switching, and mobile-first navigation.

## Tech Stack

### Core Framework
- **React 19.1.1** - Latest React with modern features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.1.2** - Fast build tool and dev server

### Calendar & UI
- **FullCalendar 6.1.19** - Comprehensive calendar component
  - `@fullcalendar/core` - Core calendar functionality
  - `@fullcalendar/daygrid` - Month/week/day grid views
  - `@fullcalendar/react` - React integration
- **react-modal 3.16.3** - Accessible modal components

### Development Tools
- **ESLint 9.33.0** - Code linting with TypeScript support
- **Vite React Plugin** - Hot reload and React support

## Project Structure

```
ui/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Calendar/        # Main calendar component
│   │   ├── MobileHeader/    # Mobile navigation header
│   │   └── SettingsModal/   # Settings configuration modal
│   ├── contexts/           # React context providers
│   │   ├── CalendarContext.tsx  # Calendar state management
│   │   ├── ResponsiveContext.tsx # Mobile/desktop detection
│   │   └── ThemeContext.tsx     # Dark/light theme switching
│   ├── assets/            # Static assets
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Global styles
│   └── vite-env.d.ts     # Vite type definitions
├── public/               # Static public assets
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── eslint.config.js      # ESLint configuration
├── tsconfig.json         # TypeScript configuration
└── index.html           # HTML entry point
```

## Key Features

### 🗓️ Calendar Functionality
- Multiple view types: Month, Week, Day
- Navigation controls (today, next, previous)
- Touch swipe navigation for mobile devices
- Proper TypeScript integration with FullCalendar

### 🎨 Theme System
- Dark/light mode toggle
- System preference detection
- Persistent theme storage in localStorage
- CSS custom properties for theming

### 📱 Responsive Design
- Mobile-first approach
- Responsive context for device-specific features
- Touch-friendly navigation
- Adaptive UI components

### ⚙️ Settings & Configuration
- Modal-based settings interface
- Accessible with react-modal
- Context-based state management

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Configuration

### Vite Configuration
- Path aliases configured for cleaner imports:
  - `@/` → `./src/`
  - `@/components` → `./src/components/`
  - `@/contexts` → `./src/contexts/`

### ESLint Configuration
- TypeScript-aware linting
- React hooks validation
- React refresh support
- Special rule override for context files to allow hook exports alongside components

### TypeScript Configuration
- Strict type checking enabled
- Modern ES2020 target
- React JSX support
- Path mapping for aliases

## Context Architecture

### CalendarContext
- Manages calendar view state and navigation
- Handles FullCalendar API interactions
- Touch swipe gesture support
- Settings modal state management

### ResponsiveContext
- Detects mobile vs desktop viewports
- Responsive breakpoint: 768px
- Window resize event handling

### ThemeContext
- Theme switching (light/dark)
- System preference detection
- localStorage persistence
- CSS custom property updates

## Component Structure

### Calendar Component
- Main FullCalendar integration
- View switching capabilities
- Event handling and display
- Responsive behavior

### MobileHeader Component
- Mobile-specific navigation
- Theme toggle integration
- Settings access
- Touch-optimized controls

### SettingsModal Component
- Modal-based configuration
- Accessible design
- Calendar customization options
- Theme and view preferences

## Type Safety

The project uses comprehensive TypeScript typing:
- Custom types for calendar views: `CalendarView = 'dayGridMonth' | 'dayGridWeek' | 'dayGridDay'`
- Theme types: `Theme = 'light' | 'dark'`
- Proper FullCalendar type integration with `DatesSetArg`
- React event typing for touch interactions

## Build & Deployment

- Production builds are optimized and minified
- CSS is extracted and optimized
- TypeScript compilation with strict checking
- Asset optimization through Vite

## Future Considerations

- Event data integration (currently uses scaffold structure)
- User authentication system
- Event CRUD operations
- Calendar synchronization
- Advanced filtering and search
- Multi-language support
- Performance optimizations for large datasets

## Development Notes

- ESLint rules customized for React context pattern
- Touch gesture handling optimized for mobile
- Theme system uses CSS custom properties for performance
- Component architecture follows React best practices
- Accessibility considerations built into modal system