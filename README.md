# Vibe Coding

A collection of experimental web applications, a "vibe-coding" experiment: building software with the help of AI. The applications are not just plain functionality they explore the intersection of aesthetics, interaction design, and emotional resonance.

## 🎨 Applications

### [LuxeHomes](apps/apartment-rental-landing)
**Modern apartment rental landing page**

A responsive landing page for an apartment rental company with smooth animations and modern design.

- 🛠️ React 19 + Vite + CSS3
- 🎯 Features: Hero section, features showcase, testimonials, contact form, responsive design

### [Windows Desktop Simulator](apps/windows-desktop)
**Web-based Windows environment**

An authentic Windows-style desktop environment with draggable windows, taskbar, start menu, and built-in applications.

- 🔗 [Live Demo](https://vibe-coding-windows-desktop.netlify.app/)
- 🛠️ React 19 + TypeScript + Vite
- 🎯 Features: Window management, File Explorer, Notepad, custom hooks architecture

### [Glacial (Icy Notes)](apps/icy-notes)
**Notes that age like ice**

A minimalist note-taking app exploring preservation aesthetics. Fresh notes appear clear, older notes develop frost patterns, ancient entries become heavily crystallized.

- 🛠️ React 19 + Vite + hand-crafted SVG
- 🎯 Features: Age-based visual progression, hover melt effect, glassmorphic design, localStorage persistence

### [Bare Metal Notes](apps/bare-metal)
**Industrial note-taking with metal textures**

A note-taking application with an industrial metal aesthetic. Notes rendered as brushed metal plates secured with screws, featuring realistic textures and rust effects.

- 🔗 [Live Demo](https://vibe-coding-bm-notes.netlify.app/)
- 🛠️ React 19 + TypeScript + CSS Modules
- 🎯 Features: Create/delete notes, dual texture variants (CSS/SVG), responsive layout

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone git@github.com:susam-projects/vibe-coding.git
cd vibe-coding

# Install dependencies
pnpm install
```

### Development

```bash
# Serve any application
pnpm nx serve <app-name>

# Examples:
pnpm nx serve apartment-rental-landing
pnpm nx serve windows-desktop
pnpm nx serve icy-notes
pnpm nx serve bare-metal

# Build for production
pnpm nx build <app-name>

# Run tests
pnpm nx test <app-name>

# Type checking
pnpm nx typecheck <app-name>
```

### Run All Apps

```bash
# Build all applications
pnpm nx run-many -t build

# Test all applications
pnpm nx run-many -t test

# Type check all applications
pnpm nx run-many -t typecheck
```

## 📁 Project Structure

```
vibe-coding/
├── apps/
│   ├── bare-metal/                   # Metal-themed notes app
│   ├── apartment-rental-landing/     # Landing page
│   ├── windows-desktop/              # Windows desktop simulator
│   └── icy-notes/                    # Ice-themed notes app
├── libs/                             # Shared libraries (future)
├── nx.json                           # Nx workspace configuration
├── tsconfig.base.json                # Base TypeScript config
└── package.json                      # Monorepo dependencies
```

## 🛠️ Tech Stack

All applications share a modern tech stack:

- **React 19** - Latest React with improved performance
- **TypeScript 5.9+** - Type safety
- **Vite 7** - Lightning-fast build tool
- **Vitest 3** - Unit testing
- **Nx 21** - Monorepo tooling and task orchestration
- **pnpm** - Fast, disk space efficient package manager

## 📚 Common Commands

```bash
# Show workspace graph
pnpm nx graph

# Show project details
pnpm nx show project <app-name>

# List all projects
pnpm nx show projects

# Run affected builds (only changed apps)
pnpm nx affected -t build

# Run affected tests
pnpm nx affected -t test

# Clear Nx cache
pnpm nx reset
```

## 🎯 Philosophy

**Vibe Coding** is a modern development approach that embraces heavy AI usage throughout the entire development cycle. This monorepo showcases projects built with AI as a primary development partner.

The only requirement: everything here is created through AI-assisted methods. The diversity of applications—from aesthetic experiments to functional tools—demonstrates the versatility of this approach.

Current experiments include:
- Aesthetic exploration (Glacial, Bare Metal)
- Interface recreation (Windows Desktop)
- Practical applications (LuxeHomes)
- ...and whatever comes next

## 🧪 Development Workflow

1. Create feature branches from `main`
2. Make changes and test locally with `pnpm nx serve <app>`
3. Run type checking and tests
4. Commit with descriptive messages
5. Push and create pull requests

## 📖 Documentation

Each application has its own detailed README:

- [LuxeHomes README](apps/apartment-rental-landing/README.md)
- [Windows Desktop README](apps/windows-desktop/README.md)
- [Glacial README](apps/icy-notes/README.md)
- [Bare Metal Notes README](apps/bare-metal/README.md)

## 🔧 Nx Features

This monorepo uses Nx for:

- **Task Orchestration**: Smart build caching and task distribution
- **Code Generation**: Consistent project scaffolding
- **Dependency Graph**: Visual project relationships
- **Affected Commands**: Build/test only what changed

Learn more about [Nx](https://nx.dev).

## 📝 License

MIT
