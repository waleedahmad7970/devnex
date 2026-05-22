import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '@/lib/services';

type Props = {
  service: Service;
  variant?: 'default' | 'minimal';
  className?: string;
  style?: React.CSSProperties;
};

export default function ServiceCard({
  service,
  variant = 'default',
  className = '',
  style
}: Props) {
  const Icon = service.icon;

  if (variant === 'minimal') {
    return (
      <Link
        href={`/services/${service.slug}`}
        style={style}
        className={`card card-hover group relative block ${className}`}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="font-display text-base font-semibold text-foreground">
            {service.title}
          </h3>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {service.short}
        </p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition-colors group-hover:text-brand-700">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        />
      </Link>
    );
  }

  return (
    <Link
      href={`/services/${service.slug}`}
      style={style}
      className={`card card-hover group relative block ${className}`}
    >
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg shadow-brand-500/15 transition-transform group-hover:scale-105`}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.short}</p>
      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition-colors group-hover:text-brand-700">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand-500/10 blur-2xl" />
    </Link>
  );
}
