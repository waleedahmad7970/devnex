const logos = [
  'Northbridge',
  'Latimer',
  'Helio Health',
  'Verdant Cloud',
  'Quintilus',
  'Strata',
  'Aetherium',
  'Brightline'
];

export default function LogoCloud() {
  // Duplicate the list once so the marquee loop is seamless
  const track = [...logos, ...logos];

  return (
    <div className="relative">
      <p className="text-center text-xs uppercase tracking-widest text-muted">
        Trusted by teams across the UK, Europe, the US and the Middle East
      </p>

      <div className="marquee-wrap mt-6 overflow-hidden mask-fade-x">
        <div className="marquee-track gap-12 py-4">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex-shrink-0 font-display text-lg font-semibold tracking-tight text-muted transition-colors hover:text-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
