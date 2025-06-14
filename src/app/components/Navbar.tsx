'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn, isActiveRoute } from '@/lib/utils';
import { NavItem, NavItemWithChildren } from '@/types/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const hasChildren = (item: NavItem): item is NavItemWithChildren => {
    return 'children' in item;
  };

  const handleMouseEnter = (href: string) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setActiveDropdown(href);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
    setDropdownTimeout(timeout);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/by2s-logo.png"
              alt={siteConfig.name}
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <div className="hidden sm:block">
              <span className="text-xl font-playfair font-medium text-gray-900">
                Bridge of Youth to Seniors
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {siteConfig.navigation.main.map((item) => (
              hasChildren(item) ? (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.href)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-gray-700 hover:text-gray-900 flex items-center",
                      isActiveRoute(pathname, item.href) && "text-amber-600 font-medium"
                    )}
                  >
                    {item.title}
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
                  </Link>
                  {/* Dropdown Menu */}
                  {activeDropdown === item.href && (
                    <div className="absolute left-0 mt-2 w-64 rounded-lg bg-white shadow-lg border border-gray-100 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50",
                            isActiveRoute(pathname, child.href) && "bg-amber-50 text-amber-600"
                          )}
                        >
                          <div className="font-medium">{child.title}</div>
                          <div className="text-gray-500 text-xs">{child.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-gray-700 hover:text-gray-900 flex items-center",
                      isActiveRoute(pathname, item.href) && "text-amber-600 font-medium"
                    )}
                  >
                    {item.title}
                  </Link>
                </div>
              )
            ))}
            <Link 
              href="/contact" 
              className={cn(
                "bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors",
                isActiveRoute(pathname, '/contact') && "bg-blue-700"
              )}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="px-2 py-3 mb-2">
              <span className="text-lg font-playfair font-medium text-gray-900">
                Bridge of Youth to Seniors
              </span>
            </div>
            {siteConfig.navigation.main.map((item) => (
              <div key={item.href} className="px-2 py-3">
                <Link
                  href={item.href}
                  className={cn(
                    "block text-gray-700 hover:text-gray-900 font-medium",
                    isActiveRoute(pathname, item.href) && "text-amber-600"
                  )}
                  onClick={() => {
                    if (!hasChildren(item)) {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  {item.title}
                </Link>
                {hasChildren(item) && (
                  <div className="mt-2 pl-4 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block text-sm text-gray-600 hover:text-gray-900",
                          isActiveRoute(pathname, child.href) && "text-amber-600 font-medium"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-2 py-3">
              <Link 
                href="/contact" 
                className={cn(
                  "block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors",
                  isActiveRoute(pathname, '/contact') && "bg-blue-700"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 