import type { Metadata } from "next";
import { Fira_Sans, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { homeMetaData, metaKeywords } from "@/constants";

const firasans = Fira_Sans({ weight: "200", subsets: ["latin"] });

export const metadata: Metadata = {
  title: homeMetaData.title,
  description: homeMetaData.description,
  generator: "Next.js",
  applicationName: homeMetaData.title,
  referrer: "origin-when-cross-origin",
  authors: {
    name: homeMetaData.creatorName,
    url: process.env.URL,
  },
  creator: homeMetaData.creatorName,
  keywords: metaKeywords,
  metadataBase: new URL(process.env.URL as string),
  alternates: {
    canonical: "/*",
  },
  openGraph: {
    title: homeMetaData.title,
    description: homeMetaData.description,
    url: process.env.URL,
    siteName: homeMetaData.creatorName,
    countryName: "India",
    images: [
      {
        url: "https://iili.io/d9LjC3N.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  category: "technology",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firasans.className}>{children}</body>
    </html>
  );
}
