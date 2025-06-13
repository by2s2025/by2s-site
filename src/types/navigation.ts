export interface BaseNavItem {
  readonly title: string;
  readonly href: string;
  readonly description: string;
  readonly isHighlighted?: boolean;
}

export interface NavItemWithChildren extends BaseNavItem {
  readonly children: readonly BaseNavItem[];
}

export type NavItem = BaseNavItem | NavItemWithChildren;

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface Breadcrumb {
  title: string;
  href: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  ogImage?: string;
  noIndex?: boolean;
}

export interface NavigationConfig {
  readonly main: readonly NavItem[];
  readonly footer: readonly {
    readonly title: string;
    readonly items: readonly {
      readonly title: string;
      readonly href: string;
    }[];
  }[];
} 