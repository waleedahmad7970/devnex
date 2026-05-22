export const site = {
  name: 'DevNex',
  tagline: 'Global technology partner for ambitious teams',
  description:
    'DevNex is a UK-headquartered technology company delivering custom software, AI, cyber security, cloud and product engineering across the United Kingdom, Europe, the United States and the Middle East.',
  url: 'https://devnex.co.uk',
  email: 'hello@devnex.co.uk',
  phone: '+44 20 1234 5678',
  // Primary HQ (UK) — additional regions listed in `regions`
  address: {
    line1: '1 Canada Square',
    line2: 'Canary Wharf',
    city: 'London',
    postcode: 'E14 5AB',
    country: 'United Kingdom'
  },
  regions: [
    {
      label: 'United Kingdom · HQ',
      city: 'London',
      timezone: 'GMT/BST'
    },
    {
      label: 'European Union',
      city: 'Amsterdam',
      timezone: 'CET/CEST'
    },
    {
      label: 'United States',
      city: 'New York',
      timezone: 'EST/EDT'
    },
    {
      label: 'Middle East',
      city: 'Dubai',
      timezone: 'GST'
    }
  ],
  social: {
    linkedin: 'https://linkedin.com/company/devnex',
    twitter: 'https://twitter.com/devnex',
    github: 'https://github.com/devnex'
  }
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' }
];
