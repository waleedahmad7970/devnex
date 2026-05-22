'use client';

import { useState, useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';
import type { FAQ as FAQType } from '@/lib/faqs';

function FAQItem({
  item,
  open,
  onToggle
}: {
  item: FAQType;
  open: boolean;
  onToggle: () => void;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!innerRef.current) return;
    setHeight(innerRef.current.scrollHeight);
  }, [item.answer]);

  return (
    <div
      className={`group rounded-2xl border bg-surface transition-all duration-300 ${
        open
          ? 'border-brand-500/40 shadow-lg shadow-brand-500/10'
          : 'border-border hover:border-brand-500/30'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-semibold text-foreground sm:text-lg">
          {item.question}
        </span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? 'rotate-45 border-brand-500 bg-brand-500 text-white'
              : 'border-border text-muted group-hover:border-brand-500/60 group-hover:text-brand-600'
          }`}
        >
          <Plus className="h-4 w-4" strokeWidth={2} />
        </span>
      </button>
      <div
        style={{ height: open ? height : 0 }}
        className="overflow-hidden transition-[height] duration-300 ease-out"
      >
        <div ref={innerRef} className="px-6 pb-6 text-sm leading-relaxed text-muted sm:text-base">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ items }: { items: FAQType[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, i) => (
        <FAQItem
          key={item.question}
          item={item}
          open={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}
