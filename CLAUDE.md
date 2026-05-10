# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

BF Fence website — a React/TypeScript SPA for a Southeast Michigan wood fencing contractor. Built with React 19, Vite 6, Tailwind CSS 4, and React Router v7. Deployed to GitHub Pages with a custom domain (bffence.com).

## Commands

```bash
npm run dev       # Start dev server (port 3000, --host)
npm run build     # Sync blog posts + production build
npm run preview   # Preview production build
npm run lint      # tsc --noEmit (type checking only, no linter)
npm run clean     # Remove dist/
```

The `dev` and `build` scripts both run `tsx scripts/sync-blog.ts` first, which scans `public/blog/` for markdown files and generates `src/data/blog-posts.json`.

## Architecture

### Stack
- **React 19** with TypeScript and `react-jsx` transform
- **Vite 6** with `@vitejs/plugin-react` and `@tailwindcss/vite`
- **Tailwind CSS 4** with CSS-first config (no `tailwind.config.js` — all theme variables are in `src/index.css` via `@theme inline`)
- **React Router v7** (`react-router-dom`) with BrowserRouter
- **Framer Motion** via the `motion` package for animations
- **Lucide React** for icons
- Path alias `@/` mapped to project root

### Routing (App.tsx)
```
/                 -> Home (Hero, FenceGrid, Sections)
/service-area     -> ServiceArea
/our-team         -> OurTeam
/reviews          -> Reviews
/about            -> AboutUs
/blog             -> BlogPosts (listing)
/blog/:id         -> BlogPost (markdown renderer)
/updates          -> BlogPosts (same component)
/free-estimate    -> FreeEstimate (lead capture form)
/privacy-policy   -> PrivacyPolicy
/terms-of-service -> TermsOfService
```

### Design System
- **Dark theme**: background `#1A1C1E`, section-bg `#2D3134`, accent `#E2B05E` (gold), foreground `#F4F4F4`
- All colors defined as CSS custom properties in `src/index.css`, usable via Tailwind `bg-accent`, `text-foreground`, etc.
- Recurring visual patterns: rounded-3xl/2xl containers, shadow-2xl, gold accent dividers (`w-24 h-1 bg-accent mx-auto`), hover scale transitions, glassmorphism via backdrop-blur

### SPA Routing on GitHub Pages
- **`public/404.html`** contains the SPA redirect hack: converts the current URL path into a query parameter (`/?/path`), then 404.html catches it and redirects
- **`src/components/RedirectHandler.tsx`** runs on app mount in the browser: detects `?/path` in the query string and calls `navigate()` to restore the clean path
- **`src/components/ScrollToTop.tsx`** resets scroll position on route change

### Blog System
- Markdown files live in `public/blog/<YYYY-MM-DD>/final.md` with YAML frontmatter (title, date, description, author, category, tags)
- `scripts/sync-blog.ts` (run via `tsx` at dev/build) parses frontmatter with `js-yaml`, discovers schema files, sorts by date descending, and writes `src/data/blog-posts.json`
- `BlogPost.tsx` fetches `final.md` at runtime, strips YAML frontmatter, and renders markdown with a custom parser (headings, bold, links, blockquotes, lists)
- Supports two schema filenames: `schema.json` (primary) or `sdira_compliance_schema.json` (fallback)
- `index.html` and `public/404.html` both embed JSON-LD LocalBusiness schema

### Lead Capture (FreeEstimate.tsx)
- Form collects name, email, phone, address, project details
- Includes SMS consent checkbox with A2P 10DLC compliance language (TCPA, HELP/STOP, Privacy/Terms links)
- **Backend**: Uses Formspree (`mzdobkpz`) for lead capture and email notifications.

### Key Compliance Files
- `sms_compliance_samples.md` — A2P 10DLC registration samples
- `src/pages/PrivacyPolicy.tsx` — Privacy policy with SMS data collection details
- `src/pages/TermsOfService.tsx` — Terms with required five SMS compliance items

### Key Dependencies
- `@google/genai` — Google Gemini AI SDK
- `express` — could be used for server-side rendering or API
- `dotenv` — loads `.env` (example: `APP_URL`)
- `@types/js-yaml`, `tsx` — dev tools for blog sync script

### Project Structure
```
src/
├── App.tsx              # Router + layout (Header, Routes, Footer)
├── main.tsx             # React entry point
├── index.css            # Tailwind + theme variables
├── components/          # Reusable UI components
│   ├── Header.tsx       # Sticky nav (Service Area, Our Team, Reviews, Updates)
│   ├── Hero.tsx         # Full-bleed hero with background image
│   ├── FenceGrid.tsx    # 8 fence style cards with horizontal scroll on mobile
│   ├── Sections.tsx     # EducationSection, InstallationSection, RecentBlogs
│   ├── CTA_Footer.tsx   # HeightGuide, CTA (call-to-action), Footer
│   ├── Logo.tsx         # SVG logo
│   ├── RedirectHandler.tsx  # SPA route restoration
│   └── ScrollToTop.tsx  # Route change scroll reset
├── pages/               # Route-level page components
│   ├── Home.tsx         # Composite of Hero + FenceGrid + Sections + CTA
│   ├── ServiceArea.tsx  # Coverage: Oakland, Wayne, Genesee counties
│   ├── BlogPosts.tsx    # Blog listing grid (4-column responsive)
│   ├── BlogPost.tsx     # Markdown renderer with JSON-LD schema injection
│   └── FreeEstimate.tsx # Lead capture form with SMS consent
├── data/
│   └── blog-posts.json  # Auto-generated by sync-blog.ts (git-committed)
public/
├── images/              # ~30 images (hero, fence styles, install diagrams, icons)
├── blog/<date>/         # Blog markdown + images + schema per post
├── 404.html             # SPA redirect hack for GitHub Pages
├── CNAME                # Custom domain: bffence.com
├── robots.txt           # SEO
scripts/
└── sync-blog.ts         # Blog sync script (tsx runtime)
```
