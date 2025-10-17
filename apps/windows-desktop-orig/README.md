# Windows Desktop Simulator

A modern web-based Windows desktop environment simulator built with React, TypeScript, and Vite.

🔗 **Live Demo**: [https://vibe-coding-windows-desktop.vercel.app/](https://vibe-coding-windows-desktop.vercel.app/)

![Windows Desktop Simulator](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite)

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
src/
├── apps/              # Application components
│   ├── AboutApp.tsx
│   ├── NotepadApp.tsx
│   ├── FileExplorer.tsx
│   ├── appRegistry.tsx
│   └── apps.css
├── components/        # UI components
│   ├── Desktop.tsx
│   ├── Window.tsx
│   ├── Taskbar.tsx
│   ├── StartMenu.tsx
│   └── DesktopIcon.tsx
├── hooks/            # Custom React hooks
│   └── useWindowManager.tsx
├── fileSystem.ts     # File system data and utilities
└── types.ts          # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone git@github.com:susam-projects/vibe-coding-windows-desktop.git
cd vibe-coding-windows-desktop

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
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
