# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A one-page marketing site (live at https://madieseldepot.co.za/, deployed to GitHub Pages with `npm run deploy` in `site/`) for **M&A Diesel**, a 24/7 bulk diesel delivery business in Parow Valley, Cape Town. React 19 + TypeScript + Vite, with plain CSS and no UI or motion libraries.

- `DESIGN.md`: the design system (Fleet Livery direction): tokens, layout rules, motion rules, Do's and Don'ts. **It is normative.** Change it first, then mirror token changes in `site/src/index.css` `:root`. Lint it with `npx -y @google/design.md@latest lint DESIGN.md` (keep 0 errors and 0 warnings).
- `docs/design-loop/`: `bar.md` (reference teardown of trybooster.com) and `progress.md` (critic rounds).
- `images/`: original WhatsApp photos (1–2 MB). The site uses converted WebP copies in `site/src/assets/photos/`.
- `site/`: the app.

## Commands (run in `site/`)

- `npm run dev`: dev server
- `npm run build`: type-check (`tsc -b`) and production build to `site/dist`
- `npm run lint`: oxlint
- `npm run preview`: serve the build (port 4173)

There is no test suite. Append `?capture` to the URL to render every scroll-reveal in its final state, for full-page screenshots.

## Architecture

- `src/data.ts` is the single source for business content: phone numbers (from the vehicle livery), address, the five services (wording and order fixed by the brief; 24/7 emergency is always first), and the team (order fixed by the client). Edit content here, not in components.
- Two pages (Vite multi-page, both listed in `vite.config.ts` and `site/public/sitemap.xml`): `index.html` → `src/main.tsx` → `App.tsx`, and `gallery/index.html` → `src/gallery-main.tsx` → `GalleryPage.tsx`. Shared fonts, CSS and the `html.js` flag live in `src/boot.ts`. `Header`/`Footer` take a `page` prop so nav links resolve to `#id` at home and `/#id` elsewhere (`navHref` in `data.ts`).
- `src/gallery.ts` lists every gallery photo (alt, tag, sizes). Photos live in `src/assets/gallery/` as `<slug>-900.webp` and `<slug>-1800.webp`. To add one, convert both sizes, then add a row. The gallery is the only page with parallax: scroll-driven CSS in the Gallery block of `index.css`.
- Client content changes from 13 Oct 2026 (service copy and taglines, About, proof strip, team order and roles, five 24/7 numbers, the call pop-up) were recovered from the `gh-pages` build after being overwritten. Keep them. `contacts` in `data.ts` holds all five numbers; `menuContacts`, `contactSectionContacts` and `footerContacts` set which ones each block shows. Every call button uses `openCallPopup` (`src/callPopup.ts`).
- `src/App.tsx` composes the sections in order: Header → Hero → Proof → Services → Team → About → Contact → Footer, plus the mobile `CallBar`.
- `src/hooks.ts`: `useReveal` sets `data-revealed` once an element is in view and its images have decoded. CSS owns all motion. Also has `useActiveSection` (nav indicator), `useScrolled` and `useInView`.
- `src/index.css`: tokens, layout and all animation. Use the three easing tokens (`--ease-out`, `--ease-in-out`, `--ease-drawer`) only. Gate hover behind `(hover: hover) and (pointer: fine)`. Every animation has a `prefers-reduced-motion` fallback. Reveal styles only apply under `html.js`.
- `src/components/Logo.tsx`: an SVG redraw of the fleet's oval decal (navy oval, white keyline, Noto Serif lettering).
- The contact form has no backend. It composes a WhatsApp message to the depot line (`waHref` in `data.ts`).

## Deploying

Commit and push to `main` **before** `npm run deploy`, and only deploy from a copy that is up to date with `main`. `gh-pages` holds only build output, so anything deployed from uncommitted source is lost on the next deploy.

## Open items

- Team portraits don't exist yet; each card shows the person's initials (the client asked for no camera icon). When photos arrive, add `photo` per person in `data.ts`; the frame is square (head-and-shoulders, shot at the depot).
- Service and About copy was written from the photos and brief. The business should confirm it.
- The root `.gitignore` is GitHub's ActionScript template. `site/.gitignore` covers `node_modules` and `dist`.
