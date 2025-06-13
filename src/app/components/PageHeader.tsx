'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function PageHeader() {
  return (
    <div className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/images/by2s-logo.png"
              alt={siteConfig.name}
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <div className="hidden sm:block">
              <span className="text-xl font-playfair font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                Bridge of Youth to Seniors
              </span>
            </div>
          </Link>
          <Link 
            href="/"
            className="text-sm text-gray-600 hover:text-blue-600 flex items-center space-x-1 transition-colors"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 