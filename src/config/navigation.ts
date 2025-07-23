export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    title: 'About',
    href: '/about',
    description: 'Learn about our mission and impact',
  },
  {
    title: 'Programs',
    href: '/programs',
    description: 'Explore our initiatives and activities',
    children: [
      {
        title: 'Healing Harmonies',
        href: '/programs/healing-harmonies',
        description: 'Music therapy and performances',
      },
      {
        title: 'Crafts of Kindness',
        href: '/programs/crafts-of-kindness',
        description: 'Creative workshops and art exchanges',
      },
      {
        title: 'SeniorScope',
        href: '/programs/senior-scope',
        description: 'Youth-led research and awareness',
      },
      {
        title: 'International Outreach',
        href: '/programs/international',
        description: 'Global connections and cultural exchange',
      },
    ],
  },
  {
    title: 'News',
    href: '/news',
    description: 'Latest updates and stories',
  },
  {
    title: 'Get Involved',
    href: '/get-involved',
    description: 'Join our mission',
    children: [
      {
        title: 'Student Sign-Up',
        href: '/get-involved/student',
        description: 'Join as a student volunteer',
      },
      {
        title: 'Music/Craft Leader',
        href: '/get-involved/leader',
        description: 'Lead creative workshops',
      },
      {
        title: 'Nursing Home Partner',
        href: '/get-involved/partner',
        description: 'Partner with us',
      },
      {
        title: 'Global Partner',
        href: '/get-involved/global',
        description: 'International collaboration',
      },
    ],
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Get in touch with us',
  },
]; 