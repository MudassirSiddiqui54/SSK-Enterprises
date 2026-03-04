# SSK Enterprises Website

This repository contains the front‑end source code for the **SSK Enterprises** marketing website. It's a single‑page application built with modern web technologies and focused on a clean,
responsive design that highlights the company's services, data‑center expertise,
and contact information.

---

## 🚀 Project Overview

The site is structured as a scrollable landing page with the following sections:

- **Hero / Home**
- **About**
- **Services**
- **Data Centers**
- **Projects**
- **Safety**
- **Contact**

Each section is implemented as a React component under `src/components/`, and
routing is handled using anchor links for smooth vertical navigation. A
sticky, glass‑morphism header adapts its text color depending on the
background for maximum readability.

## 🧱 Technology Stack

The application leverages the following technologies:

| Category                     | Library / Tool                        |
| ---------------------------- | ------------------------------------- |
| Framework                    | React 19 (with JSX)                   |
| Bundler / Dev Server         | Vite                                  |
| Styling                      | Tailwind CSS (v3) + PostCSS           |
| Icons                        | Lucide React                          |
| Accessibility & UI Utilities | Radix Tooltip                         |
| Routing                      | React Router DOM (anchor-based)       |
| Code Quality                 | ESLint (with React and hooks plugins) |

## 🛠 Development

### Prerequisites

- Node.js 18+ / npm 10+ (or equivalent Yarn/Pnpm)

### Getting Started

```bash
# clone the repo
git clone <repo-url> ssk-website
cd ssk-website

# install dependencies
npm install

# start development server
npm run dev
```

The site will be available at `http://localhost:5173` (or the port printed by
Vite). The dev server supports hot module replacement for rapid iteration.

### Linting

Run `npm run lint` to execute ESLint across the source tree. The pre‑configured
rules enforce consistent style and catch common React pitfalls.

## 🧩 Build & Deployment

```bash
npm run build
```

The production build output appears in the `dist/` directory. The static
assets can be deployed to any hosting provider that serves HTML/CSS/JS
(e.g. Netlify, Vercel, GitHub Pages, S3).

For previewing the build locally:

```bash
npm run preview
```

## 🌐 Project Structure

```
src/
 ├─ assets/            # images, fonts, etc.
 ├─ components/        # individual UI pieces (Header, Hero, Footer, ...)
 ├─ hooks/             # custom React hooks (e.g. use-mobile.jsx)
 ├─ lib/               # utility modules
 └─ pages/             # top-level page components (Index, NotFound)
```

## 📝 Notes & Conventions

- Tailwind utility classes are composed using `clsx` and `tailwind-merge` to
  avoid class-name conflicts.
- The header uses `mix-blend-difference` for adaptive contrast against varying
  section backgrounds.
- All components are functional and use React Hooks exclusively.

## 📞 Contact

For inquiries or help with the source code, please reach out to the project
maintainer or the SSK Enterprises development team.

---
