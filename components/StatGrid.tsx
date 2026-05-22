type Stat = {
  value: string;
  label: string;
};

export default function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-surface p-6 text-center transition-colors hover:bg-surface-2"
        >
          <p className="font-display text-3xl font-semibold tracking-tight gradient-text sm:text-4xl">
            {s.value}
          </p>
          <p className="mt-1 text-xs uppercase tracking-wider text-muted">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
