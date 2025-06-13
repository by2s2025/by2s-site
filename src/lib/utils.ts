import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NavItem } from '@/types/navigation';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isActiveRoute(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === '/';
  }
  return pathname.startsWith(href);
}

export function getBreadcrumbs(pathname: string, navigation: NavItem[]): { title: string; href: string }[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: { title: string; href: string }[] = [];
  let currentPath = '';

  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    const navItem = findNavItemByPath(navigation, currentPath);
    if (navItem) {
      breadcrumbs.push({
        title: navItem.title,
        href: currentPath,
      });
    }
  });

  return breadcrumbs;
}

function findNavItemByPath(items: NavItem[], path: string): NavItem | undefined {
  for (const item of items) {
    if (item.href === path) {
      return item;
    }
    if ('children' in item) {
      const found = findNavItemByPath(item.children as NavItem[], path);
      if (found) return found;
    }
  }
  return undefined;
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
} 