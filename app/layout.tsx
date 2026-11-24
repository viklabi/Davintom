import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta-family",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-family",
});

export const metadata: Metadata = {
    title: {
    default: "Davintom | Livestock & Meat Distribution, Reimagined",
    template: "%s | Davintom", 
  },
  description:
    "Connecting farmers, abattoirs, vendors, and everyday consumers through a reliable digital marketplace in Ile-Ife and beyond.",
  openGraph: {
    title: "Davintom | Livestock & Meat Distribution, Reimagined",
    description:
      "Order fresh beef, packaged cuts, and connect with verified vendors and abattoirs.",
    siteName: "Davintom",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Davintom — Connecting Livestock and Meat Producers with the Market", 
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davintom | Livestock & Meat Distribution, Reimagined",
    description:
      "Connecting farmers, abattoirs, vendors, and everyday consumers.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="">
        {children}
      </body>
    </html>
  );
}
