import { Quote } from 'lucide-react';
import type { Testimonial } from '@/lib/testimonials';

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="card relative">
      <Quote className="mb-4 h-6 w-6 text-brand-500" />
      <p className="text-base leading-relaxed text-foreground/90">
        “{t.quote}”
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} text-sm font-semibold text-white`}
        >
          {t.initial}
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-foreground">
            {t.name}
          </p>
          <p className="text-xs text-muted">
            {t.role} · {t.company}
          </p>
        </div>
      </div>
    </div>
  );
}
