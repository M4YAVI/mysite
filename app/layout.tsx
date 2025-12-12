import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PROFILE } from "@/data/profile";


const satoshi = localFont({
  src: './Satoshi-Font/Satoshi-Variable.ttf',
  variable: '--font-satoshi',
  display: 'swap',
  weight: '300 900',
});


export const metadata: Metadata = {
  metadataBase: new URL('https://aryayama.netlify.app'),
  title: {
    default: PROFILE.name,
    template: `%s | ${PROFILE.name}`,
  },
  description: PROFILE.description,
  keywords: ["portfolio", "full stack", "developer", "AI", "engineer", "creative", "minimalist"],
  authors: [{ name: PROFILE.name }],
  creator: PROFILE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryayama.netlify.app",
    title: PROFILE.name,
    description: PROFILE.description,
    siteName: PROFILE.name,
    images: [
      {
        url: "/me.jpeg",
        width: 1200,
        height: 630,
        alt: PROFILE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PROFILE.name,
    description: PROFILE.description,
    creator: "@M4Y4VI",
    images: ["/me.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      <body
        className={`${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
