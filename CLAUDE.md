# Vibe Coding - Nx Monorepo

## Project Overview

This is an Nx monorepo containing experimental web applications built using AI-assisted development methods. The repository showcases projects created through heavy AI usage throughout the development cycle.

**Philosophy**: "Vibe coding" refers to modern software development with heavy AI assistance. All projects here are built with AI as a primary development partner.

## Repository Information

- **Repository**: git@github.com:susam-projects/vibe-coding.git
- **Branch**: main
- **Package Manager**: pnpm
- **Nx Version**: 21.6.5
- **Node.js**: 18+

## Project Structure

```
vibe-coding/
├── apps/
│   ├── apartment-rental-landing/     # LuxeHomes landing page
│   ├── windows-desktop/              # Windows desktop simulator
│   ├── icy-notes/                    # Glacial - ice-themed notes app
│   ├── bare-metal/                   # Industrial metal-themed notes app
│   └── glass-percents/               # Glassmorphic percentage calculator
├── libs/                             # Shared libraries (future)
├── nx.json                           # Nx workspace configuration
├── tsconfig.base.json                # Base TypeScript config
├── package.json                      # Root package.json
├── README.md                         # Main documentation
└── CLAUDE.md                         # This file - AI assistant reference
```

## Applications

### apartment-rental-landing (apps/apartment-rental-landing)
**LuxeHomes - Modern rental landing page**

Responsive landing page with smooth animations and modern design.

- **Tech Stack**: React 19 + Vite 7.1 + CSS3
- **Features**: Hero section, features showcase, testimonials, contact form
- **Styling**: CSS3 gradients, flexbox, grid

**Commands:**
```bash
pnpm nx serve apartment-rental-landing
pnpm nx build apartment-rental-landing
pnpm nx test apartment-rental-landing
```

### windows-desktop (apps/windows-desktop)
**Web-based Windows desktop environment**

Authentic Windows-style desktop with draggable windows, taskbar, and applications.

- **Live Demo**: https://vibe-coding-windows-desktop.netlify.app/
- **Tech Stack**: React 19 + TypeScript 5.9 + Vite 7.1
- **Features**: Window management, File Explorer, Notepad, Start Menu
- **Architecture**: Custom hooks (useWindowManager), app registry system

**Commands:**
```bash
pnpm nx serve windows-desktop
pnpm nx build windows-desktop
pnpm nx test windows-desktop
```

### icy-notes (apps/icy-notes)
**Glacial - Notes that age like ice**

Minimalist note-taking exploring preservation aesthetics with ice crack effects.

- **Tech Stack**: React 19 + Vite 7.1 + hand-crafted SVG
- **Features**: Age-based visual progression, hover melt effect, localStorage
- **Design**: Glassmorphic with custom ice-themed SVG patterns

**Commands:**
```bash
pnpm nx serve icy-notes
pnpm nx build icy-notes
pnpm nx test icy-notes
```

### bare-metal (apps/bare-metal)
**Industrial note-taking with metal textures**

A note-taking application featuring brushed metal plates, realistic screws, and rust effects.

- **Live Demo**: https://vibe-coding-bm-notes.netlify.app/
- **Tech Stack**: React 19 + TypeScript 5.9 + Vite 7.1 + CSS Modules
- **Features**: Create/delete notes, dual texture variants (CSS/SVG), modal interface
- **Routing**: React Router 6.29

**Commands:**
```bash
pnpm nx serve bare-metal       # Dev server
pnpm nx build bare-metal       # Production build
pnpm nx test bare-metal        # Run tests
pnpm nx typecheck bare-metal   # Type checking
```

### glass-percents (apps/glass-percents)
**Glassmorphic percentage calculator**

Beautifully designed percentage calculator with frosted glass effects and animated gradients.

- **Tech Stack**: React 19 + TypeScript 5.9 + Vite 7.1 + CSS3
- **Features**: 5 calculator types, backdrop blur, copy-to-clipboard, auto-calculation
- **Design**: Pure CSS glassmorphism with animated gradient background

**Commands:**
```bash
pnpm nx serve glass-percents
pnpm nx build glass-percents
pnpm nx test glass-percents
pnpm nx typecheck glass-percents
```


## Common Commands

### Development
```bash
# Install dependencies (from root)
pnpm install

# Serve any app
pnpm nx serve <app-name>

# Build any app
pnpm nx build <app-name>

# Run tests
pnpm nx test <app-name>

# Type check
pnpm nx typecheck <app-name>
```

### Nx Utilities
```bash
# Show workspace dependency graph
pnpm nx graph

# Show project details
pnpm nx show project <app-name>

# List all projects
pnpm nx show projects

# Run affected builds (only changed apps)
pnpm nx affected -t build

# Run affected tests
pnpm nx affected -t test

# Build all apps
pnpm nx run-many -t build

# Clear Nx cache
pnpm nx reset
```

## Tech Stack (Shared)

All applications use:
- **React 19** - Latest React with improved performance
- **TypeScript 5.9+** - Type safety
- **Vite 7** - Lightning-fast build tool
- **Vitest 3** - Unit testing framework
- **Nx 21** - Monorepo tooling and task orchestration
- **pnpm** - Fast, disk-efficient package manager

## Development Workflow

1. Create feature branches from `main`
2. Make changes and test locally with `pnpm nx serve <app>`
3. Run type checking: `pnpm nx typecheck <app>`
4. Run tests: `pnpm nx test <app>`
5. Commit with descriptive messages
6. Push and create pull requests

## Important Notes

### Nx Configuration
- **E2E tests**: Disabled by default (see `nx.json`)
- **Linting**: Disabled (no ESLint configured)
- **Nx Cloud**: Disabled for this workspace
- **Plugin**: Only `@nx/vite/plugin` is active

### Project-Specific Notes

**apartment-rental-landing**:
- Component-based architecture with scoped CSS
- No routing (single page)

**windows-desktop**:
- Complex state management with custom hooks
- Window z-index layering system
- File system simulation

**icy-notes**:
- Custom SVG ice crack patterns (3 levels: light, medium, heavy)
- Age-based visual effects using timestamps
- No external UI libraries

**bare-metal**:
- Uses React Router for navigation
- Has two texture implementations (CSS vs SVG) for comparison

## File Locations

- **Main README**: `/README.md` - User-facing documentation
- **This file**: `/CLAUDE.md` - AI assistant reference
- **App READMEs**: `/apps/*/README.md` - Individual app documentation
- **Nx config**: `/nx.json` - Workspace configuration
- **TypeScript**: `/tsconfig.base.json` - Shared TS config

## AI Development Context

This repository is built using AI-assisted development methods. When working on this codebase:

1. **All projects are AI-assisted** - Heavy AI usage is the norm, not the exception
2. **No thematic restrictions** - Can add any type of application
3. **Maintain monorepo structure** - Keep new apps in `apps/` directory
4. **Follow existing patterns** - Use Vite + React + TypeScript + Vitest
5. **Update documentation** - Keep README files synchronized

## Adding New Applications

When generating new apps, use these settings to match existing structure:

```bash
pnpm nx generate @nx/react:app <app-name> \
  --directory=apps/<app-name> \
  --bundler=vite \
  --routing=false \
  --style=css \
  --unitTestRunner=vitest \
  --e2eTestRunner=none
```

Then:
1. Add entry to main `README.md`
2. Update this `CLAUDE.md` file
3. Create app-specific `README.md` in `apps/<app-name>/`
4. Include monorepo context in app README