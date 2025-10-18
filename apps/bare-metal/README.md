# Bare Metal Notes

A note-taking application with an industrial metal aesthetic. Each note is rendered as a brushed metal plate secured with screws, featuring realistic textures and rust effects.

## Monorepo Context

This application is part of the [vibe-coding](https://github.com/susam-projects/vibe-coding) monorepo.

**Location**: `apps/bare-metal/`

## Features

- **Create & Delete Notes** - Simple CRUD operations for managing notes
- **Industrial Design** - Metal-themed UI with brushed textures and rust effects
- **Modal Interface** - Clean modal dialog for adding new notes
- **Dual Texture Variants** - Compare CSS-based vs SVG-based metal textures
- **Responsive Layout** - Adapts to different screen sizes

## Design Philosophy

The application embraces an industrial aesthetic with:
- Warm metallic tones (#8b7355, #c0b5a8)
- Brushed metal textures using CSS gradients and SVG filters
- Realistic screws in card corners
- Subtle rust spots for authenticity
- Deep shadows for dimensional depth

## Tech Stack

- **React 19.0.0** - UI framework
- **TypeScript 5.9.3** - Type safety
- **Vite 7.1.10** - Build tool & dev server
- **CSS Modules** - Component-scoped styling
- **React Router 6.29.0** - Routing

## Project Structure

```
apps/bare-metal/
├── src/
│   ├── app/                    # Main application
│   │   ├── app.tsx
│   │   └── app.module.css
│   ├── components/             # Reusable components
│   │   ├── NoteItem/          # Note card (CSS textures)
│   │   ├── NoteItemV2/        # Note card (SVG textures)
│   │   ├── NoteList/          # Notes list container
│   │   ├── NoteForm/          # Add note form
│   │   ├── Modal/             # Modal dialog
│   │   ├── Screw/             # SVG screw component
│   │   └── MetalTexture/      # SVG metal texture
│   ├── shared/                # Shared utilities
│   │   ├── types.ts           # TypeScript types
│   │   └── initialNotes.ts    # Sample data
│   ├── main.tsx               # Entry point
│   └── styles.css             # Global styles
├── public/
│   └── icon.svg               # App icon
├── index.html                 # HTML template
├── project.json               # Nx configuration
├── vite.config.ts
└── README.md                  # This file
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
pnpm nx serve bare-metal

# Build for production
pnpm nx build bare-metal
```

### Other Commands

```bash
# Run tests
pnpm nx test bare-metal

# Type checking
pnpm nx typecheck bare-metal

# Preview production build
pnpm nx preview bare-metal
```

The dev server typically runs on `http://localhost:4203` (or next available port)

## Future Ideas

- Drag and drop to reorder notes
- Color coding with different metal finishes
- Export notes as JSON
- Local storage persistence
- Dark/light mode variants
- Edit existing notes
- Tags and categories

## License

MIT
