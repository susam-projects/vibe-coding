# Vibe Coding - Nx Monorepo

## Project Overview

This is an Nx monorepo managed with pnpm, containing the following applications and libraries.

## Repository Information

- **Repository**: git@github.com:susam-projects/vibe-coding.git
- **Branch**: main
- **Package Manager**: pnpm
- **Nx Version**: 21.6.5

## Applications

### bare-metal
React application with the following stack:
- React 19.0.0
- Vite 7.1.10 (bundler)
- Vitest 3.2.4 (unit testing)
- React Router 6.29.0 (routing)
- TypeScript 5.9.3

**Commands:**
```bash
pnpm nx serve bare-metal       # Start dev server
pnpm nx build bare-metal       # Build for production
pnpm nx test bare-metal        # Run tests
pnpm nx lint bare-metal        # Lint code
```

## Common Commands

```bash
# Install dependencies
pnpm install

# Run affected tests
pnpm nx affected:test

# Run affected builds
pnpm nx affected:build

# Show dependency graph
pnpm nx graph

# Show project details
pnpm nx show project <project-name>
```

## Development Workflow

1. Create feature branches from `main`
2. Make changes and test locally
3. Commit with descriptive messages
4. Push and create pull requests

## Notes

- This project uses Nx for monorepo management
- All apps and libraries share the same TypeScript configuration base
- Nx Cloud is disabled for this workspace
