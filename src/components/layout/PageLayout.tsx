import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import { siteConfig } from '@/config/site';
import { PageMetadata } from '@/types/navigation';

interface PageLayoutProps {
  children: React.ReactNode;
  metadata?: PageMetadata;
}

export function generateMetadata({ metadata }: { metadata?: PageMetadata }): Metadata {
  if (!metadata) return {};

  return {
    title: `${metadata.title} | ${siteConfig.name}`,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: metadata.ogImage ? [metadata.ogImage] : [siteConfig.ogImage],
    },
    robots: metadata.noIndex ? 'noindex' : 'index',
  };
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      {/* Footer will be added here */}
    </div>
  );
} 