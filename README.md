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

1. **Add the logo files.** Drop `orangekite-icon_svg.png` and
   `orangekite-logo_svg.png` into `public/assets/` (see
   `public/assets/README.md`). These are referenced directly by the nav,
   footer, and Open Graph tags.
2. **Wire up the contact form.** [`components/Contact.tsx`](components/Contact.tsx)
   currently logs submissions to the browser console (see the `TODO` in
   `handleSubmit`). Replace it with a real handler — a
   [Formspree](https://formspree.io) endpoint, or a Next.js API route /
   serverless function that emails or forwards the payload.
3. **Swap in real content.** `lib/data.ts` holds the services list, stats,
   placeholder work/case-study items, and the "trusted by" logo row.
   `components/About.tsx` and `components/Testimonial.tsx` hold placeholder
   copy and a placeholder testimonial/attribution.
4. **Add real social links.** `components/Footer.tsx` has a `TODO` next to
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
public/assets/     — logo images (see public/assets/README.md)
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

### Vercel (recommended)

This project builds out of the box on Vercel with zero config:

```bash
npm i -g vercel
vercel
```

Or connect the repo at [vercel.com/new](https://vercel.com/new) and point
your domain (`orangekite.in`) at the resulting deployment in your DNS/Vercel
domain settings.

### Static export (any static host)

If you'd rather deploy to a plain static host (S3, Netlify static, etc.),
uncomment the `output: 'export'` and `images.unoptimized` lines in
[`next.config.js`](next.config.js), then:

```bash
npm run build
```

The static site will be output to `out/`.
