export const siteConfig = {
  name: 'BY2S',
  description: 'Bridging young hearts with elderly souls through meaningful connections',
  url: 'https://by2s.org',
  ogImage: 'https://by2s.org/og.jpg',
  links: {
    twitter: 'https://twitter.com/by2s',
    github: 'https://github.com/by2s',
    instagram: 'https://instagram.com/by2s',
    youtube: 'https://youtube.com/@by2s',
  },
  contact: {
    email: 'by2s.global+webinquiry@gmail.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, City, State 12345',
  },
  social: {
    instagram: 'by2s',
    tiktok: '@by2s',
    youtube: '@by2s',
  },
  navigation: {
    main: [
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
            title: 'Senior Smiles Survey',
            href: '/programs/senior-smiles',
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
        isHighlighted: true,
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