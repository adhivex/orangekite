# OrangeKite marketing site

Single-page marketing site for OrangeKite, built with Next.js (App Router),
TypeScript, and Tailwind CSS. No backend — all copy and case studies are
static placeholders meant to be edited before launch.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you launch

1. **Wire up the contact form.** [`components/Contact.tsx`](components/Contact.tsx)
   currently logs submissions to the browser console (see the `TODO` in
   `handleSubmit`). This is a static export (see [Deploying](#deploying)
   below), so there's no built-in server to handle the submission — replace
   it with a third-party form endpoint such as [Formspree](https://formspree.io)
   or [Getform](https://getform.io), which work by just changing the `fetch`
   target, no backend of your own required.
2. **Swap in real content.** `lib/data.ts` holds the services list, stats,
   placeholder work/case-study items, and the "trusted by" logo row.
   `components/About.tsx` and `components/Testimonial.tsx` hold placeholder
   copy and a placeholder testimonial/attribution.
3. **Add real social links.** `components/Footer.tsx` has a `TODO` next to
   the social icon URLs (currently `#`).

## Project structure

```
app/
  layout.tsx      — root layout, fonts, <head> metadata (title/OG/Twitter)
  page.tsx         — assembles all sections in order
  globals.css      — Tailwind entry + small global rules
components/
  Nav.tsx          — sticky nav, anchor links, mobile menu
  Hero.tsx         — hero with services pill, headline, CTAs, trusted-by row
  Services.tsx     — 3-column services grid
  Stats.tsx        — 4-metric stats band
  Work.tsx         — placeholder project/case-study cards
  About.tsx        — short company blurb
  Testimonial.tsx  — serif pull-quote
  CTA.tsx          — final call-to-action band
  Contact.tsx       — contact form (client component) + contact info
  Footer.tsx       — logo, nav links, social icons, copyright
lib/
  data.ts          — services, stats, work items, nav links, trusted-by list
public/assets/     — logo images, served as-is (deployed as static files)
.assets-backup/    — original uncropped icon PNG, kept for reference only
                     (not deployed — lives outside public/)
```

## Design decisions worth knowing

- The provided full logo lockup (`orangekite-logo_svg.png`) has dark navy
  "Kite" text designed for a light background, which would have poor
  contrast against this site's dark theme. The nav and footer therefore use
  the hawk icon image directly (as instructed) paired with a coded text
  wordmark — orange "Orange" + off-white "Kite" — so it stays legible and
  accessible on dark backgrounds. The full lockup image is still used as-is
  for the Open Graph / social share preview, where it renders on its own
  (light) background context.
- Flat design throughout: no gradients or drop shadows. Section separation
  comes from hairline borders (`border-border` / `border-border-strong`)
  and background bands (`bg-bg-elevated`), per the brand direction.

## Deploying

This project is configured for **static export** (`output: 'export'` in
[`next.config.js`](next.config.js)) — `npm run build` produces plain
HTML/CSS/JS in `out/` with no Node.js process required to serve it. This is
what makes it deployable to Hostinger shared/business hosting.

### Hostinger (shared / business hosting)

1. Build the static site locally:

   ```bash
   npm install
   npm run build
   ```

2. This creates an `out/` folder containing `index.html`, `404.html`, and
   the `_next/` and `assets/` subfolders. That folder's *contents* (not the
   `out` folder itself) are what get uploaded.
3. In hPanel, go to **Files → File Manager**, open `public_html/` for your
   domain (or the relevant subdomain folder), clear out any default/placeholder
   files (e.g. `default.php`), and upload everything from inside `out/` there
   — either by dragging the files in through File Manager, or by zipping the
   contents of `out/` (not the folder itself), uploading the zip, and using
   File Manager's "Extract" option.
4. Alternatively, use an FTP client (FileZilla, etc.) with the credentials
   from hPanel → **Files → FTP Accounts**, and upload the contents of `out/`
   to `public_html/`.
5. Point `orangekite.in` at the hosting account's nameservers/DNS in
   hPanel → **Domains**, if you haven't already.
6. Re-run `npm run build` and re-upload the `out/` contents any time you
   change the site — there's no CI/CD wired up, so this is a manual step
   for now.

### Vercel (alternative)

The static export also deploys cleanly to Vercel with zero config, if you
ever want CI/CD-on-push instead of manual uploads:

```bash
npm i -g vercel
vercel
```

Or connect the repo at [vercel.com/new](https://vercel.com/new).
