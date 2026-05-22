import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden">
      <AnimatedBackground />
      <div className="container-wide relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal font-mono text-sm uppercase tracking-widest text-brand-600">
            404
          </p>
          <h1 className="reveal reveal-delay-1 mt-4 text-balance text-4xl font-bold sm:text-5xl">
            Looks like that page took a wrong turn
          </h1>
          <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-lg text-muted">
            The link may have moved, or maybe it never existed. Let’s get you
            back somewhere useful.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">
              Back to home <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-secondary">
              See services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
