/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Hostinger (or any plain static host) — no Node.js
  // process required. Builds to the `out/` folder as plain HTML/CSS/JS.
  // next/image can't run its optimization server without Node, so images
  // are served unoptimized (still fine — they're small local assets).
  output: 'export',
  images: { unoptimized: true },
};

module.exports = nextConfig;
