# Queviures Múrria — Website Redesign

A modern React redesign of [Colmado Múrria](https://www.murria.cat), a Modernista
grocery store, delicatessen, and restaurant in Barcelona's Eixample, established
in 1898. Built as a fast, multi-page, trilingual site with an interactive shop
experience layered on top of the original site's structure and visual identity.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool and dev server
- **React Router (react-router-dom)** — client-side routing across 6 pages
- **Zustand** — lightweight global state for product catalog filtering
- **React Context** — trilingual (Catalan / Spanish / English) language switching

## Features

### Multi-page site architecture
Six routed pages matching the original site's structure: **Home** (with in-page
Us and Gallery sections), **Menu**, **Reservations**, **Contact**, and **Shop**.
Shared `Navbar` and `Footer` components persist across every route.

### Trilingual support (CA / ES / EN)
A global `LanguageContext` drives content across the entire site — navigation,
footer, menu, reservations, contact form, and shop all switch language instantly
via a `CA / EN / ES` toggle in the navbar. Menu content was sourced directly from
the restaurant's actual tri-lingual PDF menu.

### Interactive delicatessen catalog
Client-side filtering by **Category**, **Origin**, and **Dietary** tags using
Zustand for state management, with a collapsible filter panel matching the site's
pill-button design language.

### Gift Basket Customizer
A step-by-step guided builder (Pick 2 Cheeses → 1 Wine → 1 Cured Meat) with a
live running total, built with local component state (`useState`/`useMemo`).

### Gift Vouchers
Replicates the original site's €50 / €70 / €90 voucher cards, combined with the
catalog and basket builder into a single tabbed **Shop** page.

### Reservations system
A fully interactive month calendar (past dates disabled, month navigation) with
party-size, time, and dining-area selection. Area and time availability are
computed dynamically from real business rules (e.g. party-of-6 time restrictions,
per-area seating limits and hours).

### Contact form
Client-validated contact form (name, email, phone, message, privacy consent) with
an embedded Google Maps location, matching the original site's layout.

### Performance-optimized images
Product images lazy-load via `IntersectionObserver` + native `loading="lazy"`,
with explicit `width`/`height` (or `aspect-ratio`) reserved to prevent layout
shift — aimed at high mobile Lighthouse scores.

## Project Structure
src/
components/ Shared UI: Navbar, Footer, PageHero, LanguageSwitcher,
ProductCatalog, GiftBasketBuilder, GiftVouchers, etc.
context/ LanguageContext (Catalan/Spanish/English)
hooks/ useLanguage
data/ Static content: products, menu, reservations rules,
translations, shop content
pages/ Route-level pages: Home, Menu, Reservations, Contact, Shop
store/ Zustand store for catalog filtering
public/
images/ Site imagery (hero photos, gallery, product photos)
## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) 18+ (LTS recommended)
- npm (bundled with Node.js)

### Installation

```bash
git clone https://github.com/<your-username>/Queviures_Murria.git
cd Queviures_Murria
npm install
```

### Development

```bash
npm run dev
```

Runs the app locally with hot-reload, typically at `http://localhost:5173`.

### Production build

```bash
npm run build
```

Outputs an optimized build to `dist/`.

### Preview the production build locally

```bash
npm run preview
```

Serves the `dist/` folder locally (e.g. `http://localhost:4173`) — use this to
test the real production build or run a Lighthouse audit before deploying.

### Linting

```bash
npm run lint
```

## Deployment

This is a static single-page application (`dist/` output from `npm run build`),
so it can be deployed to any static host. Two common, free options:

### Option A — Vercel (recommended, zero-config for Vite)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and import the
   repository.
3. Vercel auto-detects the Vite framework preset — no configuration needed.
4. Click **Deploy**. Every future push to your main branch auto-deploys.

### Option B — Netlify

1. Push this repo to GitHub.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an
   existing project** → connect your GitHub repo.
3. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**.

### Option C — GitHub Pages

GitHub Pages needs a couple of extra steps since it serves from a subpath by
default:

1. Install the deploy helper:
```bash
   npm install gh-pages -D
```
2. In `vite.config.ts`, add your repo name as the `base`:
```ts
   export default defineConfig({
     base: "/Queviures_Murria/",
     plugins: [react()],
   });
```
3. Add these scripts to `package.json`:
```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
```
4. Deploy:
```bash
   npm run deploy
```
5. In your GitHub repo settings → **Pages**, set the source to the `gh-pages`
   branch.

> **Note on routing:** since this project uses `react-router-dom` with
> client-side routing, direct links to sub-pages (e.g. `/menu`) on a static
> host may 404 on refresh unless the host is configured to redirect all
> paths to `index.html`. Vercel and Netlify handle this automatically for
> Vite/React projects; GitHub Pages requires a small workaround (a
> `404.html` that redirects to `index.html`) if you need deep-link support.

## Known Limitations / Future Improvements

- Reservations and Contact forms are front-end only (no backend/booking API
  connected yet) — actions show confirmation messages but don't persist data.
- The Gift Basket Builder and Product Catalog are not yet wired into the
  trilingual system (currently English-only); other pages are fully translated.
- Product and gallery images are placeholders — swap in real photography before
  going live.
- No shopping cart/checkout flow yet — "Buy" and "Add to cart" actions are
  currently simulated.

## Credits

Redesigned as a front-end learning/portfolio project based on the real
[Queviures Múrria](https://www.murria.cat), a historic 1898 Modernista
establishment in Barcelona.