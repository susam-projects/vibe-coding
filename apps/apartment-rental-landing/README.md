# LuxeHomes - Apartment Rental Landing Page

A modern, responsive landing page for an apartment rental company built with Vite and React.

## Monorepo Context

This application is part of the [vibe-coding](https://github.com/susam-projects/vibe-coding) monorepo.

**Location**: `apps/apartment-rental-landing/`

## Features

- **Modern Design**: Clean and professional layout with gradient accents
- **Fully Responsive**: Optimized for all screen sizes (desktop, tablet, mobile)
- **Smooth Animations**: Hover effects and smooth scrolling for better UX
- **Key Sections**:
  - Hero section with compelling call-to-action
  - Features showcase (6 key benefits)
  - About section with company stats
  - Customer testimonials
  - Contact form with business information
  - Professional footer with links and social media

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **CSS3** - Modern styling with gradients, flexbox, and grid

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

1. Clone the monorepo:
```bash
git clone git@github.com:susam-projects/vibe-coding.git
cd vibe-coding
```

2. Install dependencies (from monorepo root):
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm nx serve apartment-rental-landing
```

The app will be available at a port assigned by Nx (typically `http://localhost:4200`).

### Build for Production

```bash
pnpm nx build apartment-rental-landing
```

The built files will be in the `dist/apartment-rental-landing` directory.

### Other Commands

```bash
# Run tests
pnpm nx test apartment-rental-landing

# Type checking
pnpm nx typecheck apartment-rental-landing

# Preview production build
pnpm nx preview apartment-rental-landing
```

## Project Structure

```
apps/apartment-rental-landing/
├── src/
│   ├── components/
│   │   ├── Header.jsx & Header.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── Features.jsx & Features.css
│   │   ├── About.jsx & About.css
│   │   ├── Testimonials.jsx & Testimonials.css
│   │   ├── Contact.jsx & Contact.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── project.json          # Nx configuration
├── vite.config.ts
└── README.md             # This file
```

## Customization

### Branding

- **Company Name**: Change "LuxeHomes" in Header, Hero, and Footer components
- **Colors**: Update gradient colors in CSS files (currently using purple/blue theme)
- **Logo**: Replace emoji logo with actual logo image in Header and Footer

### Content

- Update text content in each component file
- Modify features, testimonials, and contact information
- Add or remove sections as needed

## License

This project is open source and available for educational and commercial use.
