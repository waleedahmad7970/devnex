export type FAQ = {
  question: string;
  answer: string;
};

export const generalFaqs: FAQ[] = [
  {
    question: 'Where is DevNex based, and where do you deliver?',
    answer:
      'We are headquartered in London, UK, with delivery teams aligned to UK, EU, US (East and Central) and Middle East working hours. We currently serve clients in 24 countries.'
  },
  {
    question: 'How quickly can you start a new engagement?',
    answer:
      'For staff augmentation and well-scoped projects we typically start within 1–2 weeks. For larger product builds we run a short discovery (1–2 weeks) before kicking off delivery.'
  },
  {
    question: 'What engagement models do you offer?',
    answer:
      'Three: (1) fixed-price projects with a clear scope and timeline, (2) time-and-materials with a dedicated pod, and (3) outcome-based contracts tied to agreed KPIs. We can also blend models across phases.'
  },
  {
    question: 'How do you handle data protection across regions?',
    answer:
      'We are aligned with UK GDPR, EU GDPR, US frameworks (SOC 2, HIPAA-ready where required) and Middle East PDPL. We sign appropriate DPAs and SCCs, and can keep data residency in your preferred region.'
  },
  {
    question: 'What does pricing look like?',
    answer:
      'Most product engagements range from £25k for a focused MVP up to £500k+ for multi-team builds. Staff augmentation is priced per engineer per month. We always provide transparent, written estimates before any work starts.'
  },
  {
    question: 'Do you sign NDAs and IP-assignment agreements?',
    answer:
      'Yes — by default. We sign mutual NDAs before any commercial discussion and transfer all IP to you on delivery. We are happy to use your paper or ours.'
  },
  {
    question: 'Can you work with our in-house team?',
    answer:
      'Absolutely. Most of our engagements involve embedding alongside an in-house team. We adopt your tools, rituals and definition of done, and run weekly syncs with your engineering leadership.'
  },
  {
    question: 'What happens after launch?',
    answer:
      'We offer optional managed support and SLAs after go-live. Many clients keep a smaller retained pod for ongoing iteration, while others bring everything in-house — we make sure either path is clean.'
  }
];
