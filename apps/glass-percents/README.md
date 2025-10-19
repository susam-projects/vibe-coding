# Glass Percents

A glassmorphic percentage calculator with beautiful frosted glass aesthetics and smooth animations.

## Overview

Glass Percents is a practical utility tool wrapped in stunning visual design. It combines the mundane functionality of percentage calculations with modern glassmorphism design trends, featuring backdrop blur effects, gradient backgrounds, and smooth animations.

## Features

**Five Calculator Types:**

1. **What is X% of Y?** - Basic percentage calculation
   - Example: What is 15% of 200? = 30

2. **X is what % of Y?** - Reverse percentage
   - Example: 50 is what % of 200? = 25%

3. **Increase/Decrease by X%** - Percentage change
   - Example: 100 increased by 20% = 120

4. **X is Y% of what?** - Find original value
   - Example: 50 is 25% of what? = 200

5. **% Change from X to Y** - Percentage difference
   - Example: Change from 100 to 150 = +50%

**Design Features:**

- Glassmorphic cards with backdrop blur
- Animated gradient background
- Smooth hover and focus effects
- Copy-to-clipboard functionality
- Fully responsive design
- Staggered card animations on load

## Tech Stack

- **React 19** - Latest React with hooks
- **TypeScript 5.9** - Type-safe development
- **Vite 7** - Lightning-fast build tool
- **CSS3** - Pure CSS glassmorphism (no libraries)
- **Vitest 3** - Unit testing

## Design Philosophy

**Boring + Beautiful**

This project explores the intersection of utility and aesthetics. Percentage calculators are objectively boring - they're pure math utilities that have existed forever. But wrapped in glassmorphic design with smooth animations and thoughtful UX, even the most mundane tool becomes engaging.

**Glassmorphism Elements:**

- `backdrop-filter: blur(10px)` - Core glass effect
- Semi-transparent backgrounds with low opacity
- Subtle white borders for depth
- Layered shadows for elevation
- Animated gradient background for visual interest

## Commands

```bash
# Development server
pnpm nx serve glass-percents

# Production build
pnpm nx build glass-percents

# Run tests
pnpm nx test glass-percents

# Type checking
pnpm nx typecheck glass-percents
```

## Project Structure

```
glass-percents/
├── src/
│   ├── app/
│   │   ├── app.tsx           # Main app with 5 calculator cards
│   │   ├── app.css           # Glassmorphic styling
│   │   └── app.spec.tsx      # Tests
│   ├── main.tsx              # Entry point
│   └── styles.css            # Global styles
├── public/
│   └── favicon.ico
└── README.md
```

## Implementation Details

**Auto-calculation:** All calculators update in real-time as you type - no submit button needed.

**State Management:** Simple React hooks (`useState`) for each calculator's inputs and computed results.

**Responsive Grid:** CSS Grid with `auto-fit` and `minmax` for flexible card layout that adapts to screen size.

**Animations:**
- `fadeInDown` for header entrance
- `fadeInUp` with staggered delays for cards
- Hover lift effect on cards
- Gradient background animation (15s loop)

## Browser Support

Works best in modern browsers with `backdrop-filter` support:
- Chrome/Edge 76+
- Safari 9+
- Firefox 103+

Fallback: On unsupported browsers, cards will show solid backgrounds instead of blur effect.

## Part of Vibe Coding Monorepo

This app is part of the [vibe-coding](../../README.md) monorepo - a collection of experimental web applications built using AI-assisted development methods.

**Related Apps:**
- [bare-metal](../bare-metal/) - Industrial metal-themed notes
- [icy-notes](../icy-notes/) - Ice-themed note-taking
- [windows-desktop](../windows-desktop/) - Desktop environment simulator

## Credits

Built with React + Vite in an Nx monorepo.
Design: Pure CSS glassmorphism, no UI libraries.
Calculations: Vanilla JavaScript, instant results.
