# Shoes Showcase — Next.js Migration

Migrated from a static HTML/CSS/JS site to Next.js 16 (App Router), TypeScript,
Tailwind CSS v4, and a lightweight Feature-Sliced Design (FSD) layout.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/            Next.js App Router: layout, page, global styles
  widgets/        Page sections (Navbar, Hero, ProductGrid, AboutGallery,
                   ReviewsSection, ServicesSection, LoginForm, Footer)
  entities/       Domain data + the UI that renders one unit of it
                   (product, review) — data lives in model/, not in JSX
  shared/         Reusable UI kit (Button, IconLink, StarRating,
                   SectionHeading, Container), the cn() class helper,
                   and site-wide config (nav links, contact info, etc.)
```

`features/` was deliberately left out — nothing in this showcase has real
business logic (cart, auth, wishlist) yet. Add it if/when that lands; forcing
the layer in earlier would just be empty folders.

## Notable changes from the original site

- **Font Awesome CDN → `lucide-react`**: no external stylesheet request,
  tree-shakeable, and the four social/brand glyphs it doesn't ship
  (Facebook/Twitter/Instagram/LinkedIn) are small local SVGs in
  `shared/ui/icons/SocialIcons.tsx` instead of a second icon dependency.
- **Fixed a dead anchor link**: the original nav linked to `#Services` but
  the section's `id` was misspelled `Servises`, so that link never scrolled
  anywhere.
- **Fixed the login form's password field**: it was `type="text"` in the
  original markup (visible password), now `type="password"`.
- **Star ratings are data-driven**: `StarRating` takes a single `rating`
  number and derives full/half/empty stars, instead of every card
  hand-listing a specific combination of `<i>` icons.
- **Added a mobile nav menu**: the original had no small-screen handling
  for the nav links at all.
- **`next/font/google` was removed for this handoff only** because the
  sandbox this was built in can't reach `fonts.googleapis.com`. It's safe
  to re-add in `src/app/layout.tsx` — see the comment in `globals.css`.

## Verified

`npm run build` and `npx eslint .` both run clean from this state.
