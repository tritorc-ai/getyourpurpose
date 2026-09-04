# Get Your Purpose

Free career counselling, engineering-college admission help, and direct financial support for Class 12 students in India — funded and run by [Tritorc](https://www.tritorc.com/).

A React + Vite single-page app with four routes: Home, About Us, Apply, and Contact.

## Tech stack

- [React 18](https://react.dev/) with [React Router](https://reactrouter.com/) for client-side routing
- [Vite](https://vitejs.dev/) for the dev server and build
- [Tailwind CSS](https://tailwindcss.com/) (with `@tailwindcss/forms` and `@tailwindcss/container-queries`)

## Project structure

```
src-app/
  index.html          Vite entry HTML
  src/
    main.jsx           App bootstrap
    App.jsx            Router setup
    index.css          Tailwind entry + shared component styles
    components/
      Header.jsx        Shared site navigation
      Footer.jsx         Shared footer
    pages/
      Home.jsx
      About.jsx
      Apply.jsx
      Contact.jsx
tailwind.config.js      Shared design tokens (colors, spacing, type scale)
postcss.config.js
vite.config.js
```

The original static HTML mockups (`home.html`, `about.html`, `apply.html`, `contact.html`) are kept at the project root for reference and are not part of the built app.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

### Build

```bash
npm run build
```

Output is written to `dist/`.

## Known follow-ups

- The Contact page form and the Apply page flow are front-end only — no backend is wired up yet (see the `TODO` in `Contact.jsx`). Hook up a form service (e.g. Formspree, Netlify Forms) or a custom API endpoint before launch.
- The Apply page only implements step 1 of 5 (Eligibility) of the intended multi-step application flow.
- Several images (founders, industry photos, IEI Pune classroom) are hotlinked from Unsplash/Google/Tritorc's own site rather than hosted locally.
