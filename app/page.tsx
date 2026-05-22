import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Rocket,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import StatGrid from '@/components/StatGrid';
import LogoCloud from '@/components/LogoCloud';
import FAQ from '@/components/FAQ';
import { services } from '@/lib/services';
import { testimonials } from '@/lib/testimonials';
import { generalFaqs } from '@/lib/faqs';
import { site } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-20 pb-10 sm:pt-28 sm:pb-16">
        <AnimatedBackground variant="rich" />
        <div className="container-wide relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="chip mb-6 reveal">
              <span className="live-dot" />
              UK · EU · US · Middle East · Delivery you can rely on
            </span>
            <h1 className="reveal reveal-delay-1 text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              We build the software{' '}
              <span className="gradient-text">behind ambitious businesses</span>
            </h1>
            <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              DevNex is a UK-headquartered technology partner working with
              teams across the United Kingdom, Europe, the United States and
              the Middle East — covering custom software, AI, cloud, cyber
              security and growth.
            </p>
            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Start your project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore services
              </Link>
            </div>

            <div className="reveal reveal-delay-4 mt-12">
              <StatGrid
                stats={[
                  { value: '120+', label: 'Projects delivered' },
                  { value: '40+', label: 'Engineers & designers' },
                  { value: '9', label: 'Specialist practices' },
                  { value: '4.9/5', label: 'Client satisfaction' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOGO CLOUD */}
      <section className="relative py-10 sm:py-20">
        <div className="container-wide">
          <LogoCloud />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What we do"
            title="One partner. Every layer of your stack."
            highlight="Every layer"
            description="From the first whiteboard sketch to scaling a production platform, our specialist practices work together so you don’t have to coordinate five different vendors."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard
                key={s.slug}
                service={s}
                variant="minimal"
                className="reveal"
                style={{ animationDelay: `${0.05 * i}s` }}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary">
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container-wide">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Why DevNex"
                title="Senior teams. Honest delivery. Long-term partnership."
                highlight="Honest delivery"
                description="We are not a body-shop. Every engagement is led by senior engineers who have shipped software at scale — and who care deeply about your outcomes."
              />
              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: Rocket,
                    title: 'Outcome-driven, not ticket-driven',
                    text: 'We agree on the metrics that matter — pipeline, conversion, uptime — and report against them every sprint.'
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Security & compliance built in',
                    text: 'Cyber Essentials Plus, ISO 27001-aligned, UK GDPR-ready by default. Your data is treated like our own.'
                  },
                  {
                    icon: Cpu,
                    title: 'Modern stack, pragmatic choices',
                    text: 'We pick boring, proven tech where it helps you ship — and bleeding edge only when it earns its keep.'
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-muted">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-brand-500/25 via-brand-300/15 to-transparent blur-2xl animate-pulse-slow" />
              <div className="card glow-border space-y-5">
                <div className="flex items-center justify-between">
                  <span className="chip">Engagement model</span>
                  <span className="text-xs text-muted">v1.0</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  How we work with you
                </h3>
                <ol className="space-y-4">
                  {[
                    {
                      step: '01',
                      title: 'Discovery (1–2 weeks)',
                      text: 'We deep-dive into your goals, users and constraints — and produce a clear delivery plan with milestones, budget and risks.'
                    },
                    {
                      step: '02',
                      title: 'Build (in 2-week sprints)',
                      text: 'Cross-functional pod owns delivery end-to-end. Weekly demos. Live dashboards. No black boxes.'
                    },
                    {
                      step: '03',
                      title: 'Launch & iterate',
                      text: 'We don’t disappear after go-live. SLAs, observability, and a roadmap that compounds value over time.'
                    }
                  ].map((s) => (
                    <li key={s.step} className="flex gap-4">
                      <span className="font-mono text-sm text-brand-600">
                        {s.step}
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">
                          {s.title}
                        </p>
                        <p className="mt-1 text-sm text-muted">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="border-t border-border pt-5">
                  {[
                    'Fixed-price, time-and-materials or outcome-based engagements',
                    'UK-hours coverage, nearshore and offshore teams',
                    'Optional managed support & SLAs after launch'
                  ].map((line) => (
                    <p
                      key={line}
                      className="mt-2 flex items-start gap-2 text-sm text-muted"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Clients"
            title="Trusted by teams who ship for a living"
            highlight="teams who ship"
            description="From scale-ups to listed enterprises, our clients come back because we deliver — and they refer us because we make them look good."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t, i) => (
              <div
                key={t.name}
                className="reveal"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Global reach"
            title="Local presence, global delivery"
            highlight="global delivery"
            description="DevNex is UK-headquartered with delivery aligned to the regions our clients operate in — so you get the right people, in the right time zone, every day."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {site.regions.map((r, i) => (
              <div
                key={r.label}
                className="card card-hover reveal text-center"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                <p className="font-mono text-xs uppercase tracking-wider text-brand-600">
                  {r.timezone}
                </p>
                <p className="mt-3 font-display text-lg font-semibold text-foreground">
                  {r.label}
                </p>
                <p className="mt-1 text-sm text-muted">{r.city}</p>
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
            title="Questions teams ask before working with us"
            highlight="working with us"
            description="If you don’t see your question here, send it to us — a real person on our team will reply within one working day."
          />
          <div className="mt-12">
            <FAQ items={generalFaqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
