import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const editorial = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-editorial",
  display: "swap",
});

const siteUrl = "https://orangekite.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "OrangeKite — Websites, AI automation & data analytics",
  description:
    "OrangeKite builds fast websites, custom AI automation, and data analytics that help modern teams launch faster and make better decisions.",
  keywords: [
    "OrangeKite",
    "website design and development",
    "AI automation",
    "data analytics",
    "software studio",
  ],
  openGraph: {
    title: "OrangeKite — Websites, AI automation & data analytics",
    description:
      "OrangeKite builds fast websites, custom AI automation, and data analytics that help modern teams launch faster and make better decisions.",
    url: siteUrl,
    siteName: "OrangeKite",
    images: [
      {
        url: "/assets/orangekite-logo_svg.png",
        width: 1200,
        height: 630,
        alt: "OrangeKite",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrangeKite — Websites, AI automation & data analytics",
    description:
      "OrangeKite builds fast websites, custom AI automation, and data analytics that help modern teams launch faster and make better decisions.",
    images: ["/assets/orangekite-logo_svg.png"],
  },
  icons: {
    icon: "/assets/orangekite-icon_svg.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${editorial.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
