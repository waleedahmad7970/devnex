import {
  Code,
  Sparkles,
  MessageCircle,
  Workflow,
  Cloud,
  Boxes,
  Layers,
  Shield,
  TrendingUp,
  Users,
  type LucideIcon
} from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  color: string; // tailwind gradient classes
  features: string[];
  benefits: { title: string; description: string }[];
  stack: string[];
  useCases: string[];
};

export const services: Service[] = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    short: 'Bespoke applications engineered for your business workflows.',
    description:
      'We design and build robust, scalable custom software tailored to your operations — from internal tools and APIs to complex enterprise platforms. Our engineering teams partner with you from discovery through delivery and beyond.',
    icon: Code,
    color: 'from-brand-600 to-brand-400',
    features: [
      'Full-stack web and mobile applications',
      'API design, microservices and integrations',
      'Legacy system modernisation',
      'Performance, scalability and reliability engineering',
      'CI/CD pipelines and automated testing'
    ],
    benefits: [
      {
        title: 'Built around your business',
        description:
          'No off-the-shelf compromises — every feature maps to a real workflow in your organisation.'
      },
      {
        title: 'Future-proof architecture',
        description:
          'Cloud-native, modular systems designed to grow with your users and your roadmap.'
      },
      {
        title: 'Transparent delivery',
        description:
          'Agile sprints, weekly demos, and shared dashboards so you always know where things stand.'
      }
    ],
    stack: ['TypeScript', 'Node.js', 'Python', '.NET', 'Go', 'PostgreSQL', 'React', 'Next.js'],
    useCases: [
      'Workflow automation platforms',
      'Customer portals and dashboards',
      'B2B SaaS products',
      'ERP and CRM integrations'
    ]
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    short: 'Production-grade AI that drives real business outcomes.',
    description:
      'From LLM-powered copilots to predictive analytics and computer vision, we deliver AI systems that are accurate, observable and safe. We help you go from proof-of-concept to production with confidence.',
    icon: Sparkles,
    color: 'from-canvas to-brand-500',
    features: [
      'LLM application development (RAG, agents, copilots)',
      'Predictive analytics and forecasting',
      'Computer vision and document intelligence',
      'Model fine-tuning and evaluation',
      'MLOps, monitoring and guardrails'
    ],
    benefits: [
      {
        title: 'From PoC to production',
        description:
          'We focus on what it takes to ship reliable AI — evaluations, observability, fallbacks, and cost control.'
      },
      {
        title: 'Your data, your edge',
        description:
          'Retrieval pipelines and fine-tunes that turn your proprietary data into a competitive advantage.'
      },
      {
        title: 'Responsible by design',
        description:
          'Privacy, safety, and human-in-the-loop patterns baked in from day one.'
      }
    ],
    stack: ['OpenAI', 'Anthropic Claude', 'LangChain', 'LlamaIndex', 'PyTorch', 'Vector DBs'],
    useCases: [
      'Internal AI copilots',
      'Document and contract intelligence',
      'Recommendation engines',
      'Sales and support automation'
    ]
  },
  {
    slug: 'chatbots-development',
    title: 'Chatbots Development',
    short: 'Conversational interfaces that delight customers and cut costs.',
    description:
      'We design and build AI-powered chatbots and voice assistants that handle real customer conversations across web, mobile, WhatsApp, and voice — integrated with your CRM, ticketing and knowledge bases.',
    icon: MessageCircle,
    color: 'from-brand-500 to-brand-300',
    features: [
      'LLM-powered conversational AI',
      'Multi-channel deployment (web, WhatsApp, MS Teams, Slack)',
      'CRM, helpdesk and knowledge-base integrations',
      'Custom personas, tone and guardrails',
      'Analytics, transcripts and continuous improvement'
    ],
    benefits: [
      {
        title: 'Always-on customer support',
        description:
          'Reduce response times to seconds and free your team to focus on higher-value conversations.'
      },
      {
        title: 'Grounded in your knowledge',
        description:
          'RAG pipelines anchor every response in your real documentation — no hallucinations on the brand.'
      },
      {
        title: 'Measurable ROI',
        description:
          'Track deflection rates, CSAT and cost-per-conversation in one dashboard.'
      }
    ],
    stack: ['Claude', 'OpenAI', 'Rasa', 'Voiceflow', 'Twilio', 'Pinecone'],
    useCases: [
      'Customer support automation',
      'Sales qualification bots',
      'Internal HR/IT assistants',
      'Voice IVR replacements'
    ]
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    short: 'Automate repetitive work and orchestrate intelligent workflows.',
    description:
      'We combine AI, RPA and workflow orchestration to remove manual toil from your operations — automating data entry, document processing, approvals, and end-to-end business processes.',
    icon: Workflow,
    color: 'from-brand-700 to-brand-500',
    features: [
      'Intelligent document processing (OCR + LLMs)',
      'Workflow orchestration (n8n, Make, Zapier, Airflow)',
      'RPA with UiPath / Power Automate',
      'AI agents for multi-step tasks',
      'Human-in-the-loop review and approvals'
    ],
    benefits: [
      {
        title: 'Reclaim hours every week',
        description:
          'Most teams see 30–60% reduction in time spent on repetitive tasks within the first quarter.'
      },
      {
        title: 'Fewer errors, more compliance',
        description:
          'Automated audit trails and validation steps cut data errors and keep regulators happy.'
      },
      {
        title: 'Scales with you',
        description:
          'Your workflows handle 10× the volume without proportionally increasing headcount.'
      }
    ],
    stack: ['n8n', 'Zapier', 'Make', 'UiPath', 'Airflow', 'LangGraph'],
    useCases: [
      'Invoice and PO processing',
      'KYC and onboarding flows',
      'Lead routing and enrichment',
      'Report generation and distribution'
    ]
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    short: 'End-to-end SaaS products from idea to scale.',
    description:
      'We help founders and enterprises build multi-tenant SaaS products — covering UX, architecture, billing, auth, analytics and the operational backbone needed to grow sustainably.',
    icon: Boxes,
    color: 'from-brand-600 to-brand-300',
    features: [
      'Multi-tenant architecture and RBAC',
      'Subscription billing (Stripe, Paddle, Chargebee)',
      'Authentication and SSO (Auth0, Clerk, WorkOS)',
      'Admin panels, analytics and reporting',
      'White-labelling and customisation engines'
    ],
    benefits: [
      {
        title: 'Ship faster',
        description:
          'Battle-tested SaaS starters and patterns let us cut months off your time-to-market.'
      },
      {
        title: 'Designed for scale',
        description:
          'Architectures that handle thousands of tenants without rewrites or surprise infra bills.'
      },
      {
        title: 'Investor-ready',
        description:
          'Clean codebases, dashboards and metrics that hold up under due diligence.'
      }
    ],
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Stripe', 'Vercel', 'AWS'],
    useCases: [
      'B2B SaaS MVPs',
      'Vertical SaaS platforms',
      'Marketplace products',
      'Internal platforms productised externally'
    ]
  },
  {
    slug: 'product-engineering',
    title: 'Product Engineering',
    short: 'Cross-functional product teams that ship outcomes, not tickets.',
    description:
      'Embed a high-performing product engineering pod — product manager, designers, engineers, QA — into your roadmap. We co-own outcomes with you, from discovery to launch and iteration.',
    icon: Layers,
    color: 'from-canvas to-brand-600',
    features: [
      'Discovery, user research and prototyping',
      'UX/UI design systems',
      'Frontend, backend and mobile engineering',
      'QA, accessibility and performance testing',
      'Continuous discovery and analytics-led iteration'
    ],
    benefits: [
      {
        title: 'Outcome-driven',
        description:
          'Goals tied to user and business metrics — not story-points or velocity vanity numbers.'
      },
      {
        title: 'Truly cross-functional',
        description:
          'No silos: product, design and engineering plan, build and ship as a single team.'
      },
      {
        title: 'Plugs into your team',
        description:
          'We use your tools, your rituals, and integrate with your in-house engineers.'
      }
    ],
    stack: ['Figma', 'React Native', 'Next.js', 'GraphQL', 'Mixpanel', 'Linear'],
    useCases: [
      'New product launches',
      'Existing product redesigns',
      'Mobile app development',
      'Platform consolidation projects'
    ]
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security',
    short: 'Protect your business with proactive, modern security.',
    description:
      'Our security practice helps you assess risk, harden systems and respond to incidents. From cloud security reviews to penetration testing and compliance, we keep your business and customers safe.',
    icon: Shield,
    color: 'from-brand-700 to-canvas',
    features: [
      'Penetration testing and vulnerability assessments',
      'Cloud security audits (AWS, Azure, GCP)',
      'Application security and secure SDLC',
      'ISO 27001, SOC 2 and Cyber Essentials readiness',
      'Incident response and managed detection'
    ],
    benefits: [
      {
        title: 'Reduce risk',
        description:
          'Find and fix vulnerabilities before attackers do, with clear remediation priorities.'
      },
      {
        title: 'Win bigger deals',
        description:
          'Security certifications and posture become a sales asset, not a blocker.'
      },
      {
        title: 'Multi-jurisdiction compliance',
        description:
          'Aligned with UK GDPR & ICO, EU GDPR, US frameworks (SOC 2, HIPAA-ready) and Middle East PDPL.'
      }
    ],
    stack: ['Burp Suite', 'Nessus', 'OWASP ZAP', 'CrowdStrike', 'Wazuh', 'Vanta'],
    useCases: [
      'Pre-launch security reviews',
      'SaaS SOC 2 / ISO 27001 prep',
      'Cloud configuration audits',
      'Phishing simulations and training'
    ]
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    short: 'Data-driven marketing that turns visitors into customers.',
    description:
      'We help technology and B2B brands grow through SEO, paid acquisition, content and conversion-rate optimisation — measured by pipeline and revenue, not just clicks.',
    icon: TrendingUp,
    color: 'from-brand-500 to-brand-700',
    features: [
      'SEO strategy, technical SEO and content',
      'Paid acquisition (Google, LinkedIn, Meta)',
      'Conversion rate optimisation and A/B testing',
      'Lifecycle email and marketing automation',
      'Analytics, attribution and reporting'
    ],
    benefits: [
      {
        title: 'Tied to revenue',
        description:
          'We optimise for qualified pipeline and customers — not vanity metrics.'
      },
      {
        title: 'Tech + creative under one roof',
        description:
          'Engineers, marketers and designers working together means faster experiments.'
      },
      {
        title: 'Transparent reporting',
        description:
          'Live dashboards show exactly where your spend is working, in plain English.'
      }
    ],
    stack: ['GA4', 'HubSpot', 'GTM', 'Ahrefs', 'Webflow', 'Mixpanel'],
    useCases: [
      'B2B SaaS demand generation',
      'Technology brand launches',
      'Marketplace user acquisition',
      'Account-based marketing campaigns'
    ]
  },
  {
    slug: 'staff-augmentation',
    title: 'Staff Augmentation',
    short: 'Scale your team with vetted engineers and designers — fast.',
    description:
      'Add senior engineers, designers, DevOps and QA specialists to your team within weeks. We provide nearshore and offshore talent that integrates seamlessly with your processes and culture.',
    icon: Users,
    color: 'from-brand-400 to-canvas',
    features: [
      'Senior engineers, designers, QA and DevOps',
      'Dedicated or fractional engagements',
      'Time-zone aligned with UK, EU, US East and GCC hours',
      'Rigorous technical and culture screening',
      'Easy ramp-up and replacement guarantees'
    ],
    benefits: [
      {
        title: 'Hire in weeks, not months',
        description:
          'Skip the recruiter cycle — our bench is pre-vetted and ready to start.'
      },
      {
        title: 'Lower total cost',
        description:
          'Up to 40% lower than direct hires in the UK, US or GCC — with no overhead or admin burden.'
      },
      {
        title: 'Flexible by design',
        description:
          'Scale up or down each month as your roadmap and budget evolve.'
      }
    ],
    stack: ['JavaScript', 'TypeScript', 'Python', '.NET', 'Java', 'iOS / Android'],
    useCases: [
      'Filling skill gaps on existing teams',
      'Launching new initiatives quickly',
      'Scaling delivery without long-term commitments',
      'Covering peak workloads and product launches'
    ]
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    short: 'Modern infrastructure that ships safely and scales smoothly.',
    description:
      'We design, migrate and run resilient cloud platforms on AWS, Azure and GCP. Infrastructure-as-code, automated pipelines, observability and FinOps — built for teams that ship every day.',
    icon: Cloud,
    color: 'from-brand-600 to-brand-500',
    features: [
      'Cloud migrations and re-architecture',
      'Kubernetes, containers and serverless',
      'Infrastructure-as-code (Terraform, Pulumi)',
      'CI/CD, GitOps and progressive delivery',
      'Observability, SRE and cost optimisation'
    ],
    benefits: [
      {
        title: 'Ship every day, safely',
        description:
          'Automated pipelines and progressive delivery cut deployment risk to near-zero.'
      },
      {
        title: 'Lower cloud bills',
        description:
          'Our FinOps audits typically reduce monthly cloud spend by 20–35%.'
      },
      {
        title: 'Sleep at night',
        description:
          'Strong observability, SLOs and incident playbooks mean fewer fires and faster recovery.'
      }
    ],
    stack: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Datadog'],
    useCases: [
      'Lift-and-shift cloud migrations',
      'Kubernetes platform builds',
      'DevOps and CI/CD transformations',
      'SRE and reliability programmes'
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
