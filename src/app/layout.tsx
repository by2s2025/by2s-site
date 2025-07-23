import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { socialLinks } from "@/content/socialLinks";
import { Instagram, Youtube } from "lucide-react";
import AppInstallHandler from "./components/AppInstallHandler";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BY2S - Bridge of Youth to Seniors",
  description: "Bridging young hearts with elderly souls through meaningful connections. Join our intergenerational programs in music, arts, and community service across the US and Thailand.",
  keywords: ["intergenerational", "youth", "seniors", "community service", "music therapy", "arts", "volunteer", "BY2S", "Bridge of Youth to Seniors"],
  authors: [{ name: "BY2S Global" }],
  creator: "BY2S Global",
  publisher: "BY2S Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://by2s.global'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://by2s.global',
    title: 'BY2S - Bridge of Youth to Seniors',
    description: 'Bridging young hearts with elderly souls through meaningful connections. Join our intergenerational programs in music, arts, and community service.',
    siteName: 'BY2S Global',
    images: [
      {
        url: '/images/by2s-logo.png',
        width: 1200,
        height: 630,
        alt: 'BY2S - Bridge of Youth to Seniors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BY2S - Bridge of Youth to Seniors',
    description: 'Bridging young hearts with elderly souls through meaningful connections',
    images: ['/images/by2s-logo.png'],
    creator: '@by2s',
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

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }, 
      { url: '/icons/favicon-v2.ico', sizes: 'any' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/icons/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased ${playfair.className}`}>
      <body className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 min-h-screen flex flex-col">
        <AppInstallHandler />
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-100 border-t border-gray-200 py-8 text-center text-gray-600 text-sm">
          <div className="mb-3">
            <span className="block mb-2 font-medium">Have questions?{' '}
              <a href="/contact" className="text-rose-600 hover:text-rose-700 underline">Reach out to us</a>
            </span>
            <div className="flex justify-center space-x-5">
              {socialLinks.filter(link => link.icon !== 'contact').map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-rose-600 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon === 'instagram' && <Instagram className="w-5 h-5" />}
                  {link.icon === 'youtube' && <Youtube className="w-5 h-5" />}
                  {link.icon === 'tiktok' && (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="text-gray-400 mt-4">© {new Date().getFullYear()} BY2S. All rights reserved.</div>
          <div className="mt-2 space-x-4">
            <a href="/privacy" className="text-gray-500 hover:text-rose-600 underline transition-colors">Privacy Policy</a>
            <span className="text-gray-300">|</span>
            <a href="/terms" className="text-gray-500 hover:text-rose-600 underline transition-colors">Terms of Service</a>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
