export const siteConfig = {
  name: 'BY2S',
  description: 'Bridging young hearts with elderly souls through meaningful connections',
  url: 'https://by2s.org',
  ogImage: 'https://by2s.org/og.jpg',
  links: {
    twitter: 'https://twitter.com/by2s',
    github: 'https://github.com/by2s',
    instagram: 'https://www.instagram.com/by2s.global/',
    youtube: 'https://www.youtube.com/@BY2S.Global',
    tiktok: 'https://www.tiktok.com/@by2s.global',
  },
  contact: {
    email: 'by2s.global+webinquiry@gmail.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, City, State 12345',
  },
  social: {
    instagram: 'by2s.global',
    tiktok: '@by2s.global',
    youtube: '@BY2S.Global',
  },
  navigation: {
    main: [
      {
        title: 'About',
        href: '/#about',
        description: 'Learn about our mission and impact',
      },
      {
        title: 'Programs',
        href: '/#programs',
        description: 'Explore our initiatives and activities',
        children: [
          {
            title: 'Healing Harmonies',
            href: '/#programs',
            //href: '/programs/healing-harmonies',
            description: 'Music therapy and performances',
          },
          {
            title: 'Crafts of Kindness',
            href: '/#programs',
            //href: '/programs/crafts-of-kindness',
            description: 'Creative workshops and art exchanges',
          },
          {
            title: 'Senior Smiles Survey',
            href: '/#programs',
            //href: '/programs/senior-smiles',
            description: 'SeniorScope – A youth-driven initiative where students create educational media to deepen understanding of aging and promote meaningful support for older adults.',
          },
          {
            title: 'Donation Drives',
            href: '/#programs',
            //href: '/programs/donation-drives',
            description: 'Organized drives to support nonprofit organizations serving seniors, providing essential items and care to those in need.',
          },
          {
            title: 'International Outreach',
            href: '/#programs',
            //href: '/programs/international-outreach',
            description: 'Expanding our impact globally through partnerships and initiatives that support seniors worldwide.',
          },
        ],
      },
      {
        title: 'Get Involved',
        href: '/#get-involved',
        description: 'Join our mission',
        children: [
          {
            title: 'Student Sign-Up',
            href: '/contact?type=student',
            description: 'Join as a student volunteer',
          },
          {
            title: 'Music/Craft Leader',
            href: '/contact?type=leader',
            description: 'Lead creative workshops',
          },
          {
            title: 'Nursing Home Partner',
            href: '/contact?type=partner',
            description: 'Partner with us',
          },
          {
            title: 'Global Partner',
            href: '/contact?type=global',
            description: 'International collaboration',
          },
        ],
      },
    ],
    footer: [
      {
        title: 'About',
        items: [
          { title: 'Our Mission', href: '/about#mission' },
          { title: 'Our Team', href: '/about#team' },
          { title: 'Impact', href: '/about#impact' },
        ],
      },
      {
        title: 'Programs',
        items: [
          { title: 'Healing Harmonies', href: '/programs/healing-harmonies' },
          { title: 'Crafts of Kindness', href: '/programs/crafts-of-kindness' },
          { title: 'Senior Smiles', href: '/programs/senior-smiles' },
          { title: 'International', href: '/programs/international' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { title: 'FAQ', href: '/faq' },
          { title: 'Privacy Policy', href: '/privacy' },
          { title: 'Terms of Service', href: '/terms' },
        ],
      },
    ],
  },
} as const; 