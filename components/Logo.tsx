import Link from 'next/link';

export default function Logo({
  className = '',
  variant = 'light'
}: {
  className?: string;
  variant?: 'light' | 'dark';
}) {
  const textColor =
    variant === 'dark' ? 'text-white' : 'text-foreground';
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="DevNex home"
    >
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-canvas shadow-lg shadow-brand-500/15 transition-transform group-hover:scale-105">
        <span className="font-display text-sm font-bold text-white">D</span>
        <span className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-brand-500/45 via-brand-400/15 to-transparent" />
      </span>
      <span
        className={`font-display text-lg font-bold tracking-tight ${textColor}`}
      >
        Dev<span className="text-brand-500">Nex</span>
      </span>
    </Link>
  );
}
