import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import CTASection from '@/components/CTASection';
import { services, getServiceBySlug } from '@/lib/services';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-20 sm:pt-28">
        <AnimatedBackground />
        <div className="container-wide relative z-10">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/services"
              className="btn-ghost mb-6 inline-flex reveal"
            >
              ← All services
            </Link>
            <div className="reveal reveal-delay-1 flex flex-wrap items-center gap-4">
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg shadow-brand-500/30 transition-transform hover:scale-105`}
              >
                <Icon className="h-7 w-7 text-white" />
              </div>
              <span className="chip">Service</span>
            </div>
            <h1 className="reveal reveal-delay-2 mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="reveal reveal-delay-3 mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              {service.description}
            </p>
            <div className="reveal reveal-delay-4 mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book a discovery call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                See related services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES + STACK */}
      <section className="section">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <span className="eyebrow">What’s included</span>
              <h2 className="section-heading">Capabilities</h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-3 rounded-xl border border-border bg-surface p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" />
                    <span className="text-sm text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">Stack</span>
              <h2 className="section-heading">Tools we love</h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <span className="eyebrow">Common use cases</span>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {service.useCases.map((u) => (
                    <li key={u} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Outcomes</span>
            <h2 className="section-heading text-balance">
              Why teams choose us for{' '}
              <span className="gradient-text">
                {service.title.toLowerCase()}
              </span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.benefits.map((b, i) => (
              <div
                key={b.title}
                className="card card-hover relative overflow-hidden"
              >
                <span className="font-mono text-xs text-brand-600">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Related</span>
              <h2 className="section-heading">Explore more</h2>
            </div>
            <Link
              href="/services"
              className="btn-ghost hidden sm:inline-flex"
            >
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="card card-hover group flex items-start gap-4"
                >
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${s.color}`}
                  >
                    <SIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted">{s.short}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={`Let's talk ${service.title.toLowerCase()}`}
        description="Tell us what you’re trying to achieve — we’ll come back with a tailored plan within one working day."
      />
    </>
  );
}
