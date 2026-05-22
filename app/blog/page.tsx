import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import CTASection from '@/components/CTASection';
import { posts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Articles, guides and case studies from the DevNex team on software engineering, AI, cloud, security and growth.'
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="relative isolate overflow-hidden pt-20 sm:pt-28">
        <AnimatedBackground />
        <div className="container-wide relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip mb-6 reveal">Insights</span>
            <h1 className="reveal reveal-delay-1 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Notes from the{' '}
              <span className="gradient-text">DevNex team</span>
            </h1>
            <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted">
              Hard-won lessons on shipping software, scaling AI, securing
              systems and growing technology businesses — from teams shipping
              across the UK, EU, US and Middle East.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Talk to our team <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                See our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <Link
            href={`/blog/${featured.slug}`}
            className="card card-hover group block"
          >
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="relative h-56 overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 via-brand-600 to-canvas lg:h-72">
                <div className="absolute inset-0 grid-bg-dark opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
                    Featured · {featured.category}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                  <span className="rounded-full bg-brand-500/10 px-2.5 py-1 font-medium text-brand-700">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-muted">{featured.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 transition-colors group-hover:text-brand-500">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </Link>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card card-hover group reveal flex flex-col"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                <span className="self-start rounded-full bg-brand-500/10 px-2.5 py-1 text-xs font-medium text-brand-700">
                  {p.category}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(p.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {p.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to talk strategy?"
        description="Many of these articles started as conversations with clients. We’d love to have one with you."
      />
    </>
  );
}
