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
  applicationName: PROFILE.name,
  authors: [{ name: PROFILE.name, url: 'https://aryayama.netlify.app' }],
  generator: 'Next.js',
  keywords: ["portfolio", "full stack", "developer", "AI", "engineer", "creative", "minimalist", "web design", "react", "nextjs"],
  referrer: 'origin-when-cross-origin',
  creator: PROFILE.name,
  publisher: PROFILE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: {
      default: PROFILE.name,
      template: `%s | ${PROFILE.name}`,
    },
    description: PROFILE.description,
    url: 'https://aryayama.netlify.app',
    siteName: PROFILE.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: PROFILE.name,
      template: `%s | ${PROFILE.name}`,
    },
    description: PROFILE.description,
    creator: '@M4Y4VI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
