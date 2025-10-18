# Glacial

A minimalist note-taking application that captures the feeling of preservation—cold surfaces that warm at your touch, thoughts crystallizing over time.

## Monorepo Context

This application is part of the [vibe-coding](https://github.com/susam-projects/vibe-coding) monorepo.

**Location**: `apps/icy-notes/`

## Concept

**Glacial** explores the intersection of coldness and warmth through interface design. Notes age like ice: fresh thoughts appear clear and pristine, older notes develop subtle frost patterns, and ancient entries become heavily crystallized—preserved but distant. Hover to melt the ice and reveal the warmth beneath.

This is a vibe-coding experiment: building software that feels like something, not just does something.

## Features

- **Age-based visual progression** - Notes visually age over time with ice crack overlays (light → medium → heavy)
- **Hover melt effect** - Ice cracks fade away on hover, revealing warm colors beneath the frozen surface
- **Glassmorphic design** - Frosted glass aesthetic with backdrop blur and ice textures
- **Local persistence** - Notes saved to localStorage
- **Minimalist interface** - Focus on content and atmosphere over features

## Tech Stack

- React 19 with Vite
- CSS with custom ice-themed variables
- Hand-crafted SVG ice crack patterns
- No external UI libraries

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
pnpm nx serve icy-notes

# Build for production
pnpm nx build icy-notes
```

### Other Commands

```bash
# Run tests
pnpm nx test icy-notes

# Type checking
pnpm nx typecheck icy-notes

# Preview production build
pnpm nx preview icy-notes
```

## Project Structure

```
apps/icy-notes/
├── src/
│   ├── components/
│   │   ├── IceCracks.jsx
│   │   └── IceTexture.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
│   ├── favicon.svg
│   ├── ice-crack-light.svg
│   ├── ice-crack-medium.svg
│   ├── ice-crack-heavy.svg
│   └── vite.svg
├── index.html
├── project.json          # Nx configuration
├── vite.config.ts
└── README.md             # This file
```

## Design Philosophy

Notes aren't just data to be stored—they're moments to be preserved. The ice aesthetic represents:
- **Distance**: How thoughts feel remote as time passes
- **Clarity**: Ice makes things visible but unreachable
- **Preservation**: Freezing protects but also isolates
- **Warmth**: The act of attention melts the barrier

Demo data explores the emotional arc of software development: breakthrough moments that crystallize into distant memories, technical decisions whose reasoning fades, the cracks that form in foundations over time.
