type Props = {
  variant?: 'default' | 'rich';
};

export default function AnimatedBackground({ variant = 'default' }: Props) {
  if (variant === 'rich') {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Slowly rotating aurora cone */}
        <div className="hero-aurora" />

        {/* Slowly waving aurora band */}
        <div className="hero-wave" />

        {/* Soft dot grid */}
        <div className="absolute inset-0 grid-bg opacity-60" />

        {/* Drifting glow orbs — bumped opacities so they read clearly on cream */}
        <div className="glow-orb left-[10%] top-[-12%] h-[560px] w-[560px] bg-brand-500/35 animate-drift" />
        <div
          className="glow-orb right-[-8%] top-[8%] h-[480px] w-[480px] bg-brand-400/32 animate-drift"
          style={{ animationDelay: '5s' }}
        />
        <div
          className="glow-orb left-[-8%] top-[55%] h-[420px] w-[420px] bg-brand-600/22 animate-drift"
          style={{ animationDelay: '9s' }}
        />
        <div
          className="glow-orb left-[55%] top-[30%] h-[360px] w-[360px] bg-brand-300/28 animate-drift"
          style={{ animationDelay: '13s' }}
        />

        {/* Animated SVG mesh lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1F6DFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#1F6DFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1F6DFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M -100 220 C 250 120, 500 380, 800 240 S 1300 200, 1400 320"
            stroke="url(#line-grad)"
            strokeWidth="1.25"
            className="hero-line hero-line-1"
          />
          <path
            d="M -100 420 C 200 360, 600 540, 900 420 S 1300 360, 1400 480"
            stroke="url(#line-grad)"
            strokeWidth="1.25"
            className="hero-line hero-line-2"
          />
          <path
            d="M -100 620 C 300 540, 700 700, 1000 600 S 1300 540, 1400 640"
            stroke="url(#line-grad)"
            strokeWidth="1.25"
            className="hero-line hero-line-3"
          />
        </svg>

        {/* Floating particle dots */}
        <div className="hero-particle" style={{ left: '12%', top: '18%' }} />
        <div
          className="hero-particle"
          style={{ left: '28%', top: '42%', animationDelay: '1.2s', animationDuration: '11s' }}
        />
        <div
          className="hero-particle"
          style={{ left: '46%', top: '24%', animationDelay: '2.4s', animationDuration: '9s' }}
        />
        <div
          className="hero-particle"
          style={{ left: '62%', top: '52%', animationDelay: '3.6s', animationDuration: '13s' }}
        />
        <div
          className="hero-particle"
          style={{ left: '78%', top: '30%', animationDelay: '4.8s', animationDuration: '10s' }}
        />
        <div
          className="hero-particle"
          style={{ left: '88%', top: '60%', animationDelay: '6s', animationDuration: '12s' }}
        />
        <div
          className="hero-particle"
          style={{ left: '18%', top: '70%', animationDelay: '1.8s', animationDuration: '14s' }}
        />
        <div
          className="hero-particle"
          style={{ left: '38%', top: '80%', animationDelay: '3s', animationDuration: '11s' }}
        />

        {/* Fade to background at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="glow-orb left-[15%] top-[-12%] h-[480px] w-[480px] bg-brand-500/25 animate-drift" />
      <div
        className="glow-orb right-[-5%] top-[18%] h-[420px] w-[420px] bg-brand-400/22 animate-drift"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="glow-orb left-[-5%] top-[60%] h-[360px] w-[360px] bg-brand-600/18 animate-drift"
        style={{ animationDelay: '8s' }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
