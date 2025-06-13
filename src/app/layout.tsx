import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  description: "Bridging young hearts with elderly souls through meaningful connections",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased ${playfair.className}`}>
      <body>{children}</body>
    </html>
  );
}
