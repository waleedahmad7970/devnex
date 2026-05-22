import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Compass,
  Hammer,
  Rocket,
  LineChart,
  Banknote,
  Building2,
  HeartPulse,
  ShoppingBag,
  Truck,
  GraduationCap,
  Cpu,
  Network
} from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import { services } from '@/lib/services';
import { generalFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore DevNex services: custom software, AI solutions, chatbots, AI automation, SaaS, product engineering, cyber security, digital marketing, staff augmentation and cloud/DevOps — delivered across the UK, Europe, US and Middle East.'
};

const process = [
  {
    icon: Compass,
    step: '01',
    title: 'Discovery',
    duration: '1–2 weeks',
    text: 'We deep-dive into goals, users and constraints. You leave with a clear delivery plan: milestones, budget, risks, success metrics.'
  },
  {
    icon: Hammer,
    step: '02',
    title: 'Build',
    duration: '2-week sprints',
    text: 'A cross-functional pod owns delivery end-to-end. Weekly demos, live dashboards, sprint reviews. No black boxes.'
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Launch',
    duration: 'Go-live + 2 weeks',
    text: 'We harden, ship and hand over. Runbooks, SLAs, observability and a clear ownership map — so your team can run it confidently.'
  },
  {
    icon: LineChart,
    step: '04',
    title: 'Iterate',
    duration: 'Ongoing',
    text: 'We stay close: monthly reviews against your KPIs, prioritised roadmap, and a retained pod ready to scale up or down.'
  }
];

const industries = [
  { icon: Banknote, name: 'Financial services' },
  { icon: HeartPulse, name: 'Healthcare & life sciences' },
  { icon: ShoppingBag, name: 'Retail & e-commerce' },
  { icon: Truck, name: 'Logistics & supply chain' },
  { icon: Building2, name: 'Real estate & property' },
  { icon: GraduationCap, name: 'Education & EdTech' },
  { icon: Cpu, name: 'Technology & SaaS' },
  { icon: Network, name: 'Public sector' }
];

const engagementModels = [
  {
    title: 'Fixed-price project',
    desc: 'Clear scope, milestones and price. Best when requirements are well-defined.',
    fit: 'MVPs · Replatforms · Migrations'
  },
  {
    title: 'Dedicated product pod',
    desc: 'A cross-functional team embedded with yours, billed monthly. Best for ongoing builds.',
    fit: 'Product engineering · SaaS · AI'
  },
  {
    title: 'Staff augmentation',
    desc: 'Senior engineers, designers, DevOps and QA, billed per person. Slot into your team.',
    fit: 'Scaling teams · Skill gaps · Peaks'
  },
  {
    title: 'Outcome-based',
    desc: 'Commercials tied to agreed KPIs (e.g. revenue, latency, retention). For mature partnerships.',
    fit: 'Growth · Optimisation · Re-platforming'
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-20 sm:pt-28">
        <AnimatedBackground />
        <div className="container-wide relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip mb-6 reveal">Services</span>
            <h1 className="reveal reveal-delay-1 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Specialist practices,{' '}
              <span className="gradient-text">one accountable team</span>
            </h1>
            <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted">
              Whether you need a single team to ship a product or a partner to
              cover your full technology stack, DevNex has the senior talent
              and proven processes to deliver — across the UK, Europe, the US
              and the Middle East.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Book a discovery call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#services-grid" className="btn-secondary">
                Browse services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services-grid" className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Practices"
            title="Nine specialisms, working as one"
            highlight="working as one"
            description="Each practice is led by senior specialists who have shipped at scale. They work together — not in silos — so you get joined-up delivery."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard
                key={s.slug}
                service={s}
                className="reveal"
                style={{ animationDelay: `${0.05 * i}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="How we work"
            title="A predictable path from idea to impact"
            highlight="idea to impact"
            description="A simple four-step delivery model that keeps surprises out and progress in. Same model whether we’re building software or running a security review."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div
                key={p.step}
                className="card card-hover reveal relative"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-brand-600">
                    {p.step}
                  </span>
                  <p.icon className="h-5 w-5 text-muted" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                  {p.duration}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Engagement models"
            title="Pick the shape that fits the work"
            highlight="fits the work"
            description="We adapt commercial models to your stage and risk appetite — fixed-price for clear scope, dedicated pods for ongoing builds, augmentation for capacity, or outcomes when you’re ready to share upside."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((m, i) => (
              <div
                key={m.title}
                className="card card-hover reveal"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                <h3 className="font-display text-base font-semibold text-foreground">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {m.desc}
                </p>
                <p className="mt-4 text-xs uppercase tracking-wider text-brand-600">
                  {m.fit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INLINE CTA */}
      <section className="section">
        <div className="container-wide">
          <div className="card glow-border relative overflow-hidden p-8 sm:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/15 blur-3xl animate-float-slow" />
            <div className="relative grid items-center gap-6 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  Not sure which service fits your problem?
                </h3>
                <p className="mt-3 text-muted">
                  Drop us a sentence. A senior team member will reply with a
                  recommendation within one working day — no pitch, no
                  pressure.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:justify-end">
                <Link href="/contact" className="btn-primary">
                  Get a recommendation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Industries"
            title="Sectors we know well"
            highlight="we know"
            description="Our teams have shipped software in regulated, customer-facing and operationally complex sectors. We bring the patterns that work — and avoid the ones that don’t."
          />
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className="reveal flex flex-col items-center gap-3 bg-surface px-4 py-8 text-center transition-colors hover:bg-surface-2"
                style={{ animationDelay: `${0.04 * i}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <ind.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <p className="text-sm font-medium text-foreground">
                  {ind.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="FAQ"
            title="The questions we hear most"
            highlight="hear most"
            description="A quick answer to the questions that come up before most engagements."
          />
          <div className="mt-12">
            <FAQ items={generalFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Tell us about your project"
        description="Send us a sentence about what you’re trying to do — we’ll come back with a clear next step within one working day."
      />
    </>
  );
}
