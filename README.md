# Oracle Tattoo

Oracle Tattoo is a Vite-powered React website for a tattoo studio in Ranchi, Jharkhand. The site presents studio services, artists, gallery work, blog content, booking details, and contact information with animated page transitions and Tailwind CSS styling.

## Tech Stack

- React 18
- Vite 6
- React Router
- Tailwind CSS
- Framer Motion
- Lucide React
- React Helmet Async

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/   Shared layout and animation components
  data/         Services, artists, and blog content
  hooks/        Reusable React hooks
  pages/        Route-level pages
  styles/       Global Tailwind and app styles
  App.jsx       Main route configuration
  main.jsx      React entry point
```

## Pages

- Home
- Services
- Gallery
- Artists
- Booking
- Contact
- Blog

## Customizing Content

Most editable site content lives in `src/data`:

- `src/data/services.js` controls service cards and categories.
- `src/data/artists.js` controls artist profiles.
- `src/data/blogPosts.js` controls blog entries.

Page-specific copy, SEO metadata, images, and layout sections are managed in the files under `src/pages`.

## Styling

Tailwind configuration is defined in `tailwind.config.js`, with global styles in `src/styles/globals.css`. The app uses a dark studio-focused visual system with custom colors, serif display typography, animated reveals, and responsive layouts.

## Deployment

Run `npm run build` to generate a production-ready `dist` directory. Deploy the contents of `dist` to any static hosting provider that supports single-page React apps, such as Vercel, Netlify, Cloudflare Pages, or a static web server.
