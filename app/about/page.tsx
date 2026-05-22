import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Target,
  Heart,
  Sparkles,
  Globe2,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import StatGrid from '@/components/StatGrid';

export const metadata: Metadata = {
  title: 'About',
  description:
    'DevNex is a UK-headquartered technology company building software, AI and cloud platforms for teams across the UK, Europe, the US and the Middle East.'
};

const values = [
  {
    icon: Target,
    title: 'Outcomes over outputs',
    text: 'We measure ourselves on the business results we help create, not on hours, story points or lines of code.'
  },
  {
    icon: Heart,
    title: 'Long-term partnerships',
    text: 'Most of our clients have worked with us for years. We invest in relationships, not transactions.'
  },
  {
    icon: Sparkles,
    title: 'Craft & curiosity',
    text: 'We hire people who care about how software is built — and who keep learning long after the project ships.'
  },
  {
    icon: Globe2,
    title: 'Truly global delivery',
    text: 'UK-headquartered, with delivery teams aligned to UK, EU, US and Middle East hours. We bring the right people to the right problem.'
  }
];

const team = [
  {
    name: 'Aisha Patel',
    role: 'Co-founder & CEO',
    bio: 'Former engineering director at two scale-ups. Cares about turning ambitious visions into ship-able plans.',
    initial: 'AP',
    accent: 'from-brand-600 to-brand-400'
  },
  {
    name: 'Tomasz Wójcik',
    role: 'Co-founder & CTO',
    bio: '20+ years building distributed systems. Loves boring, dependable architectures and observability.',
    initial: 'TW',
    accent: 'from-canvas to-brand-500'
  },
  {
    name: 'Maya Bennett',
    role: 'Head of AI',
    bio: 'Leads our AI practice. Previously built ML platforms at two UK fintechs and one global retailer.',
    initial: 'MB',
    accent: 'from-brand-500 to-brand-300'
  },
  {
    name: 'Daniel Okonkwo',
    role: 'Head of Security',
    bio: 'OSCP-certified offensive security lead. Has run pen-test programmes for FTSE-listed companies.',
    initial: 'DO',
    accent: 'from-brand-700 to-canvas'
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-20 sm:pt-28">
        <AnimatedBackground />
        <div className="container-wide relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip mb-6 reveal">About DevNex</span>
            <h1 className="reveal reveal-delay-1 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              We help ambitious teams{' '}
              <span className="gradient-text">turn ideas into impact</span>
            </h1>
            <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted">
              DevNex was founded in London in 2019 by engineers who were tired
              of seeing brilliant ideas die in slow, opaque vendor projects.
              Today we are a 40-strong team delivering for startups, scale-ups
              and global brands across the UK, Europe, the US and the Middle
              East.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Start a conversation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore services
              </Link>
            </div>
          </div>

          <div className="mt-16">
            <StatGrid
              stats={[
                { value: '4', label: 'Regions served' },
                { value: '40+', label: 'People' },
                { value: '120+', label: 'Projects delivered' },
                { value: '24', label: 'Countries shipped to' }
              ]}
            />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Our mission</span>
            <h2 className="section-heading text-balance">
              Make great software{' '}
              <span className="gradient-text">accessible to every team</span>
            </h2>
            <p className="mt-6 text-base text-muted sm:text-lg">
              We believe that the best technology partnerships feel like an
              extension of your team — not a vendor relationship. DevNex exists
              to bring senior engineering, AI and security talent to companies
              that need it, without the overhead and politics of traditional
              consultancies.
            </p>
            <p className="mt-4 text-base text-muted sm:text-lg">
              We do that by hiring carefully, training continuously, and
              keeping every engagement small enough that a real human knows
              your name, your stack, and your goals.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-brand-500/25 via-brand-300/15 to-transparent blur-2xl animate-pulse-slow" />
            <div className="card glow-border">
              <span className="chip">
                <Award className="h-3.5 w-3.5 text-brand-600" />
                Certifications & memberships
              </span>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  'Cyber Essentials Plus certified (UK)',
                  'ISO 27001 aligned',
                  'GDPR, UK DPA, CCPA & UAE PDPL ready',
                  'AWS Select Tier Services Partner',
                  'Microsoft Solutions Partner — Digital & App Innovation',
                  'Member, techUK · BSA EuroCloud'
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-border bg-surface-2 p-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-400" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Values"
            title="What we hire, fire and reward for"
            highlight="hire, fire"
            description="These aren’t slogans on a wall — they show up in how we run projects, give feedback and grow the team."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="card card-hover reveal"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INLINE CTA */}
      <section className="section">
        <div className="container-wide">
          <div className="card glow-border relative overflow-hidden p-8 sm:p-10">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-brand-500/15 blur-3xl animate-float-slow" />
            <div className="relative grid items-center gap-6 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  Like the way we think? Let’s talk.
                </h3>
                <p className="mt-3 text-muted">
                  Tell us what you’re building. We’ll come back with a senior
                  point of view, fast.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:justify-end">
                <Link href="/contact" className="btn-primary">
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Leadership"
            title="The team behind DevNex"
            description="A senior leadership team that has shipped, scaled and secured software at some of the UK’s best-known companies."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <div
                key={m.name}
                className="card card-hover reveal text-center"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${m.accent} text-xl font-bold text-white shadow-lg shadow-brand-500/20`}
                >
                  {m.initial}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{m.name}</h3>
                <p className="text-xs uppercase tracking-wider text-brand-600">
                  {m.role}
                </p>
                <p className="mt-3 text-sm text-muted">{m.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-surface p-8 sm:p-10">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Want to join the team?
                  </h3>
                  <p className="text-sm text-muted">
                    We hire engineers, designers and security specialists
                    across the UK, EU, US and Middle East — and remote where
                    time-zones align.
                  </p>
                </div>
              </div>
              <a href="mailto:careers@devnex.co.uk" className="btn-primary">
                See open roles
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s build something together"
        description="Curious how we can help? Tell us about your team and your goals, and we’ll suggest a starting point."
      />
    </>
  );
}
