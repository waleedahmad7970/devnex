export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initial: string;
  accent: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'DevNex rebuilt our customer portal in three months — what our previous vendor failed to deliver in a year. The team is sharp, communicative and obsessed with quality.',
    name: 'Sarah Whitmore',
    role: 'CTO',
    company: 'Northbridge Financial',
    initial: 'SW',
    accent: 'from-brand-600 to-brand-400'
  },
  {
    quote:
      'Their AI team helped us launch a customer-support copilot that now handles 62% of tickets end-to-end. ROI was clear within the first quarter.',
    name: 'James Ashford',
    role: 'VP of Operations',
    company: 'Latimer Logistics',
    initial: 'JA',
    accent: 'from-canvas to-brand-500'
  },
  {
    quote:
      'We engaged DevNex for staff augmentation and ended up partnering with them on our whole platform. They feel like an extension of our in-house team.',
    name: 'Priya Raman',
    role: 'Head of Engineering',
    company: 'Helio Health',
    initial: 'PR',
    accent: 'from-brand-500 to-brand-300'
  },
  {
    quote:
      'A genuinely modern security review. Clear, prioritised findings — and they helped us reach SOC 2 readiness in record time.',
    name: 'Mark Olusoga',
    role: 'CISO',
    company: 'Verdant Cloud',
    initial: 'MO',
    accent: 'from-brand-700 to-canvas'
  },
  {
    quote:
      'Their DevOps team migrated us to Kubernetes with zero downtime and shaved 30% off our AWS bill in the process. Could not recommend more highly.',
    name: 'Eleanor Hart',
    role: 'Director of Platform',
    company: 'Quintilus Media',
    initial: 'EH',
    accent: 'from-brand-400 to-brand-600'
  },
  {
    quote:
      'DevNex helped us go from prototype to a live SaaS product with paying customers in under six months. The collaboration was exceptional.',
    name: 'Daniel Choudhury',
    role: 'Founder',
    company: 'Strata Insights',
    initial: 'DC',
    accent: 'from-canvas to-brand-700'
  }
];
