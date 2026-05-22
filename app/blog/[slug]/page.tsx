import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowUpRight, User } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import CTASection from '@/components/CTASection';
import { posts, getPostBySlug } from '@/lib/posts';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-20 sm:pt-28">
        <AnimatedBackground />
        <div className="container-wide relative z-10">
          <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="btn-ghost mb-6 inline-flex">
              ← Back to Insights
            </Link>
            <span className="rounded-full bg-brand-500/10 px-2.5 py-1 text-xs font-medium text-brand-700">
              {post.category}
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="section pt-12">
        <div className="container-narrow">
          <div className="prose prose-invert max-w-none">
            {post.content.map((para, i) => (
              <p
                key={i}
                className="mb-5 text-base leading-relaxed text-foreground/90 sm:text-lg"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-surface p-6">
            <p className="text-xs uppercase tracking-wider text-muted">
              Working on something similar?
            </p>
            <p className="mt-2 text-lg text-foreground">
              Talk to the team behind this article. We’ll come back within one
              working day.
            </p>
            <Link href="/contact" className="btn-primary mt-5">
              Get in touch
            </Link>
          </div>
        </div>
      </article>

      <section className="section">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-4">
            <h2 className="section-heading">Keep reading</h2>
            <Link href="/blog" className="btn-ghost hidden sm:inline-flex">
              All insights <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card card-hover group"
              >
                <span className="self-start rounded-full bg-brand-500/10 px-2.5 py-1 text-xs font-medium text-brand-700">
                  {p.category}
                </span>
                <h3 className="mt-4 font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
