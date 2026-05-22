import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Clock, Building2 } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with DevNex. UK-based technology partner for custom software, AI, cloud, security and digital marketing.'
};

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-20 sm:pt-28">
        <AnimatedBackground />
        <div className="container-wide relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip mb-6 reveal">Contact</span>
            <h1 className="reveal reveal-delay-1 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let’s build{' '}
              <span className="gradient-text">something great</span>
            </h1>
            <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted">
              Whether you have a clear brief or just an idea on the back of a
              napkin, we’ll come back within one working day — UK, EU, US or
              Middle East hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-10">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="reveal lg:col-span-3">
              <ContactForm />
            </div>

            <aside className="reveal reveal-delay-2 space-y-5 lg:col-span-2">
              <div className="card">
                <h3 className="text-base font-semibold text-foreground">
                  Reach us directly
                </h3>
                <div className="mt-5 space-y-4 text-sm">
                  <Item icon={Mail} label="Email">
                    <a
                      href={`mailto:${site.email}`}
                      className="hover:text-foreground"
                    >
                      {site.email}
                    </a>
                  </Item>
                  <Item icon={Phone} label="Phone">
                    {site.phone}
                  </Item>
                  <Item icon={Clock} label="Hours">
                    Mon–Fri, 9:00 – 18:00 across GMT, CET, EST & GST
                  </Item>
                </div>
              </div>

              <div className="card">
                <h3 className="text-base font-semibold text-foreground">
                  Our London office
                </h3>
                <div className="mt-5 space-y-4 text-sm">
                  <Item icon={Building2} label="DevNex Ltd">
                    Registered in England & Wales
                  </Item>
                  <Item icon={MapPin} label="Address">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.city} {site.address.postcode}
                    <br />
                    {site.address.country}
                  </Item>
                </div>
              </div>

              <div className="card">
                <h3 className="text-base font-semibold text-foreground">
                  What happens next?
                </h3>
                <ol className="mt-5 space-y-3 text-sm text-muted">
                  {[
                    'We review your message within one working day.',
                    'A senior team member replies with relevant questions or a proposal.',
                    'We book a 30-minute discovery call — no obligation.'
                  ].map((s, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-mono text-brand-600">
                        0{i + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function Item({
  icon: Icon,
  label,
  children
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
        <p className="mt-0.5 text-foreground/90">{children}</p>
      </div>
    </div>
  );
}
