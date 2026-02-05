<div align="center">

# عدسة — Adasah

**A modern Arabic photography blog built with React 19, Tailwind CSS 4 & Framer Motion**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev)

</div>

---

## Overview

Adasah (عدسة, "Lens" in Arabic) is a fully RTL, dark-themed photography blog platform designed to deliver an immersive reading experience. The UI pairs a cinematic dark palette with warm orange accents, scroll-triggered animations, and a responsive layout that works seamlessly across all devices.

## Preview

| Home | Blog | Article |
|------|------|---------|
| Hero with animated stats | Filterable grid with search | Full post with sidebar TOC |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| Build Tool | Vite 7 |
| Icons | Font Awesome 6 |
| Language | JavaScript (ES Modules) |

## Features

- **Full RTL support** — native Arabic layout with proper bidirectional text handling
- **Dark photography theme** — cinematic `#0a0a0a` background with orange/amber accent palette
- **Scroll-triggered animations** — viewport-aware fade, slide, and stagger effects via Framer Motion
- **Responsive design** — mobile-first layout with breakpoints at `sm`, `md`, `lg`, and `xl`
- **Blog system** — search, category filtering, grid/list toggle, and pagination
- **Article pages** — table of contents sidebar, share buttons, author bio, and related posts
- **Newsletter signup** — subscription form with success state
- **About page** — team showcase, company values, and stats

## Project Structure

```
src/
├── assets/              # Static images and logos
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── Home/            # Hero, FeaturedPosts, Categories, LatestPosts, Newsletter
│   ├── blog/            # BlogHeader, BlogFilters, BlogGrid, BlogCard
│   ├── post/            # PostHeader, PostContent, PostSidebar, RelatedPosts
│   ├── about/           # AboutHero, AboutValues, TeamSection, AboutCTA
│   └── pages/           # Home, Blog, SinglePostPage, About
├── data/                # posts.json, team.json
├── App.jsx              # Root component with routing
├── main.jsx             # Entry point
└── index.css            # Tailwind imports and custom utilities
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0a0a0a` | Main page background |
| Surface | `#161616` | Cards, dropdowns |
| Border | `#262626` | Dividers, card borders |
| Primary | `orange-500` → `orange-600` | CTAs, active states |
| Accent | `yellow-500` | Gradient endpoints |
| Text Primary | `white` | Headings |
| Text Secondary | `neutral-400` | Body copy |
| Text Muted | `neutral-500` | Metadata |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint checks |

## License

This project is for educational and portfolio purposes.
