import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const siteUrl = "https://orangekite.in";
// Absolute, not relative: WhatsApp and other chat crawlers will not resolve a
// path-only og:image against the page URL.
const ogImage = `${siteUrl}/og-image.jpg`;
const ogDescription =
  "OrangeKite designs and builds fast, modern websites — from corporate sites to direct-to-consumer storefronts. Crafted, not templated.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "OrangeKite",
  description:
    "OrangeKite designs and builds fast, modern websites that help teams launch faster and convert better.",
  keywords: [
    "OrangeKite",
    "website design and development",
    "web design studio",
    "custom websites",
  ],
  openGraph: {
    title: "OrangeKite — Websites crafted, not templated",
    description: ogDescription,
    url: `${siteUrl}/`,
    siteName: "OrangeKite",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "OrangeKite — websites crafted, not templated",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrangeKite — Websites crafted, not templated",
    description: ogDescription,
    images: [ogImage],
  },
  icons: {
    icon: "/assets/orangekite-icon_updated.svg.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
