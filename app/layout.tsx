import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const siteUrl = "https://orangekite.in";

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
    title: "OrangeKite — Website design & development",
    description:
      "OrangeKite designs and builds fast, modern websites that help teams launch faster and convert better.",
    url: siteUrl,
    siteName: "OrangeKite",
    images: [
      {
        url: "/assets/orangekite-logo_updated.svg.png",
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
    title: "OrangeKite — Website design & development",
    description:
      "OrangeKite designs and builds fast, modern websites that help teams launch faster and convert better.",
    images: ["/assets/orangekite-logo_updated.svg.png"],
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
