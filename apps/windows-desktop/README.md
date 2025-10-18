# Windows Desktop Simulator

A modern web-based Windows desktop environment simulator built with React, TypeScript, and Vite.

🔗 **Live Demo**: [https://vibe-coding-windows-desktop.netlify.app/](https://vibe-coding-windows-desktop.netlify.app/)

![Windows Desktop Simulator](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite)

## Monorepo Context

This application is part of the [vibe-coding](https://github.com/susam-projects/vibe-coding) monorepo.

**Location**: `apps/windows-desktop/`

## Features

- **Desktop Environment**: Authentic Windows-style desktop with landscape background
- **Window Management**: Draggable windows with minimize and close functionality
- **Taskbar**: Bottom taskbar with active window indicators and live clock
- **Start Menu**: Launch applications from a Windows-style start menu
- **Desktop Icons**: Double-click folder icons to open File Explorer
- **File Explorer**: Navigate through nested folders with breadcrumb navigation
- **Built-in Apps**:
  - 📁 File Explorer - Browse the file system
  - 📝 Notepad - Simple text display
  - ℹ️ About - Application information

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **CSS3** - Component-specific styling with modular CSS

## Project Structure

```
apps/windows-desktop/
├── src/
│   ├── apps/              # Application components
│   │   ├── AboutApp.tsx
│   │   ├── NotepadApp.tsx
│   │   ├── FileExplorer.tsx
│   │   ├── appRegistry.tsx
│   │   └── apps.css
│   ├── components/        # UI components
│   │   ├── Desktop.tsx
│   │   ├── Window.tsx
│   │   ├── Taskbar.tsx
│   │   ├── StartMenu.tsx
│   │   └── DesktopIcon.tsx
│   ├── hooks/            # Custom React hooks
│   │   └── useWindowManager.tsx
│   ├── fileSystem.ts     # File system data and utilities
│   ├── types.ts          # TypeScript type definitions
│   ├── App.tsx
│   ├── main.tsx
│   └── style.css
├── public/
├── index.html
├── project.json          # Nx configuration
├── vite.config.ts
└── README.md             # This file
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
# Clone the monorepo
git clone git@github.com:susam-projects/vibe-coding.git
cd vibe-coding

# Install dependencies (from monorepo root)
pnpm install

# Start development server
pnpm nx serve windows-desktop

# Build for production
pnpm nx build windows-desktop

# Preview production build
pnpm nx preview windows-desktop
```

### Other Commands

```bash
# Run tests
pnpm nx test windows-desktop

# Type checking
pnpm nx typecheck windows-desktop
```

## Development

The application uses a modular architecture with:

- **Custom Hooks**: `useWindowManager` encapsulates all window management logic
- **App Registry**: Centralized system for registering and launching applications
- **Component-Specific CSS**: Each component has its own CSS file for better maintainability

### Adding a New Application

1. Create your app component in `src/apps/YourApp.tsx`
2. Register it in `src/apps/appRegistry.tsx`:

```typescript
import YourApp from './YourApp'

export const apps: Record<string, AppDefinition> = {
  yourapp: {
    id: 'yourapp',
    title: 'Your App',
    icon: '🚀',
    defaultWidth: 600,
    defaultHeight: 400,
    content: <YourApp />,
  },
  // ... other apps
}
```

## Architecture Highlights

- **Window Management**: Z-index based layering with automatic focus management
- **Window Deduplication**: Clicking an app icon focuses existing window instead of creating duplicates
- **Drag and Drop**: Mouse event-based drag system with boundary constraints
- **State Management**: React hooks (useState, useRef) for efficient state handling

## License

MIT

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
