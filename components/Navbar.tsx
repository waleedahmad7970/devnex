'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '@/lib/site';
import { services } from '@/lib/services';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            // Special-case: Services → hover mega menu
            if (link.href === '/services') {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={link.href}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active || servicesOpen
                        ? 'text-foreground'
                        : 'text-muted hover:text-foreground'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                      strokeWidth={2}
                    />
                  </Link>

                  {/* Dropdown panel */}
                  <div
                    className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${
                      servicesOpen
                        ? 'pointer-events-auto translate-y-0 opacity-100'
                        : 'pointer-events-none -translate-y-2 opacity-0'
                    }`}
                  >
                    <div className="w-[640px] rounded-2xl border border-border bg-surface p-4 shadow-2xl shadow-canvas/10">
                      <div className="mb-3 flex items-center justify-between px-2">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                          Our practices
                        </p>
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 transition-colors hover:text-brand-700"
                        >
                          See all <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {services.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-2"
                            >
                              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover/item:bg-brand-500 group-hover/item:text-white">
                                <Icon className="h-4 w-4" strokeWidth={1.75} />
                              </div>
                              <div className="min-w-0">
                                <p className="font-display text-sm font-semibold text-foreground">
                                  {s.title}
                                </p>
                                <p className="mt-0.5 truncate text-xs text-muted">
                                  {s.short}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                        {/* CTA tile to balance the 9-item grid */}
                        <Link
                          href="/contact"
                          className="group/item relative flex items-start gap-3 overflow-hidden rounded-xl bg-canvas p-3 text-white transition-colors hover:bg-canvas-2"
                        >
                          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-500/30 blur-2xl" />
                          <div className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-500 text-white">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                          <div className="relative">
                            <p className="font-display text-sm font-semibold">
                              Book a call
                            </p>
                            <p className="mt-0.5 text-xs text-white/70">
                              Not sure which fits? Talk to us.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'text-foreground'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn-primary">
            Book a call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="container-wide flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              if (link.href === '/services') {
                return (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-lg px-3 py-2.5 text-base font-medium text-muted hover:bg-surface-2 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                    <div className="ml-3 mt-1 grid gap-0.5 border-l border-border pl-3">
                      {services.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-2 hover:text-foreground"
                          >
                            <Icon className="h-4 w-4 text-brand-600" strokeWidth={1.75} />
                            {s.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-muted hover:bg-surface-2 hover:text-foreground"
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-primary mt-3">
              Book a call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
