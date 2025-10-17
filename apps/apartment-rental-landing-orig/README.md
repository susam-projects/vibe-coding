# LuxeHomes - Apartment Rental Landing Page

A modern, responsive landing page for an apartment rental company built with Vite and React.

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

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd apartment-rental-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
apartment-rental-landing/
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
└── package.json
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
