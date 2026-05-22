import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CTASection({
  title = 'Have a project in mind?',
  description = 'Tell us about your goals and we’ll come back within one working day with a proposal.',
  primaryHref = '/contact',
  primaryLabel = 'Book a free consultation',
  secondaryHref = '/services',
  secondaryLabel = 'Explore services'
}: Props) {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl bg-canvas p-10 sm:p-14 text-white">
          <div className="absolute inset-0 grid-bg-dark opacity-40" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl animate-float-slower" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-base text-white/75 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={primaryHref} className="btn-primary">
                {primaryLabel} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={secondaryHref} className="btn-canvas">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
