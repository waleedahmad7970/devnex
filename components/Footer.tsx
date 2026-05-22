import Link from 'next/link';
import { Linkedin, Twitter, Github, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { site } from '@/lib/site';
import { services } from '@/lib/services';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-canvas text-white/85">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" />
      <div className="container-wide relative py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo variant="dark" />
            <p className="mt-4 max-w-sm text-sm text-white/65">
              {site.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-300" />
                <span>
                  {site.address.line1}, {site.address.line2},{' '}
                  {site.address.city} {site.address.postcode},{' '}
                  {site.address.country}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-300" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-300" />
                <span>{site.phone}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/65 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              More
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/65 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-white/65 transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/65 transition-colors hover:text-white"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/65 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/65 transition-colors hover:text-white"
                >
                  All services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/55">
            © {year} {site.name} Ltd. Registered in England & Wales. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/15 p-2 text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={site.social.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="rounded-full border border-white/15 p-2 text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/15 p-2 text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
