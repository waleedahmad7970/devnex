export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: 'shipping-llm-apps-to-production',
    title: 'Shipping LLM apps to production: the checklist nobody gave you',
    excerpt:
      'From evaluations and observability to fallbacks and cost control — the practical patterns that turn AI prototypes into reliable products.',
    category: 'AI Solutions',
    date: '2026-05-12',
    readTime: '8 min read',
    author: 'DevNex AI Team',
    content: [
      'Building an LLM prototype is easy. Running one in production is not. The gap between a working demo and a reliable product is where most AI initiatives stall.',
      'In this article we share the production checklist we use on every client engagement — covering evaluations, observability, fallbacks, prompt management, and cost control.',
      'The single highest-leverage habit you can adopt is treating evaluations as first-class artefacts. Without them, every prompt change is a leap of faith and every regression is a customer-reported bug.',
      'We will also dig into cost: most teams overspend on tokens by 2–4× simply because nobody owns the dashboards. A small amount of telemetry pays for itself within weeks.'
    ]
  },
  {
    slug: 'cloud-cost-optimisation-aws',
    title: 'Cloud cost optimisation on AWS: where the easy wins really are',
    excerpt:
      'A pragmatic guide to reducing your AWS bill by 20–35% without compromising performance or reliability.',
    category: 'Cloud & DevOps',
    date: '2026-04-28',
    readTime: '6 min read',
    author: 'DevNex Platform Team',
    content: [
      'Most AWS bills have 20–35% of fat in them. Not because teams are careless — but because cost is rarely a first-class signal in day-to-day engineering.',
      'In this guide we share the high-leverage actions our FinOps audits surface most often: right-sizing, savings plans, storage tier shifts, idle environment cleanup, and architectural changes.',
      'We will also explain the cultural piece: tagging, dashboards and incentives that keep your bill optimised after the consultants leave.'
    ]
  },
  {
    slug: 'b2b-saas-pricing-playbook',
    title: 'A B2B SaaS pricing playbook for UK founders',
    excerpt:
      'Tiering, packaging, expansion and discount discipline — what we have learned helping UK B2B SaaS startups price for growth.',
    category: 'SaaS',
    date: '2026-04-10',
    readTime: '7 min read',
    author: 'DevNex Product Team',
    content: [
      'Pricing is the single most under-invested lever in most SaaS companies. A 10% improvement in monetisation is worth more than a 10% lift in either acquisition or retention.',
      'This playbook walks through how we help UK founders think about packaging, tiering, and expansion revenue — without copying SF-style playbooks that do not fit the local buyer.'
    ]
  },
  {
    slug: 'cyber-essentials-for-uk-startups',
    title: 'Cyber Essentials for UK startups: a 4-week roadmap',
    excerpt:
      'A practical 4-week plan to achieve NCSC Cyber Essentials certification and turn it into a sales asset.',
    category: 'Cyber Security',
    date: '2026-03-25',
    readTime: '5 min read',
    author: 'DevNex Security Team',
    content: [
      'Cyber Essentials is the lowest-friction way for a UK startup to prove a baseline security posture — and increasingly required by public sector and enterprise buyers.',
      'In this article we share a 4-week roadmap we have used with dozens of startups to go from zero to certified without slowing engineering down.'
    ]
  },
  {
    slug: 'staff-augmentation-vs-agency',
    title: 'Staff augmentation vs. agency: which model fits your roadmap?',
    excerpt:
      'A clear-eyed comparison of staff augmentation, fixed-scope agency, and full product engineering pods.',
    category: 'Engineering',
    date: '2026-03-08',
    readTime: '4 min read',
    author: 'DevNex Delivery Team',
    content: [
      'The right delivery model depends on how well-defined your work is, how much in-house engineering capacity you have, and how much risk you want to transfer.',
      'We break down the three most common models — staff augmentation, fixed-scope projects, and outcome-driven product pods — and offer a simple decision framework.'
    ]
  },
  {
    slug: 'building-modern-customer-support-bot',
    title: 'Building a modern customer support bot that actually helps',
    excerpt:
      'Beyond FAQ matching: how to design a support bot that resolves tickets, integrates with your stack, and gets smarter over time.',
    category: 'Chatbots',
    date: '2026-02-19',
    readTime: '6 min read',
    author: 'DevNex AI Team',
    content: [
      'The era of FAQ-matching chatbots is over. Modern customers expect support bots to actually solve their problems — and to know when to hand off.',
      'This article walks through the architecture, integrations and guardrails behind a customer support bot that resolves real tickets and keeps customers happy.'
    ]
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
