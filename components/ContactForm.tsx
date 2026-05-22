'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { services } from '@/lib/services';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: services[0].slug,
    budget: '£10k – £50k',
    message: ''
  });

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    // Simulated submission — in production wire this to your backend or email service.
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className="card glow-border flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
          Thanks — we’ve got your message.
        </h3>
        <p className="mt-2 max-w-md text-sm text-muted">
          One of our team will reply within one working day. If it’s urgent,
          email{' '}
          <a
            href="mailto:hello@devnex.co.uk"
            className="text-brand-600 underline-offset-2 hover:underline"
          >
            hello@devnex.co.uk
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="card glow-border space-y-5"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name" required>
          <input
            id="name"
            required
            value={form.name}
            onChange={update('name')}
            className="input"
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </Field>
        <Field label="Work email" htmlFor="email" required>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            className="input"
            placeholder="jane@company.com"
            autoComplete="email"
          />
        </Field>
      </div>

      <Field label="Company" htmlFor="company">
        <input
          id="company"
          value={form.company}
          onChange={update('company')}
          className="input"
          placeholder="Company Ltd"
          autoComplete="organization"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Service of interest" htmlFor="service">
          <select
            id="service"
            value={form.service}
            onChange={update('service')}
            className="input"
          >
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="other">Other / not sure</option>
          </select>
        </Field>
        <Field label="Estimated budget" htmlFor="budget">
          <select
            id="budget"
            value={form.budget}
            onChange={update('budget')}
            className="input"
          >
            {[
              'Under £10k',
              '£10k – £50k',
              '£50k – £150k',
              '£150k+',
              'Not sure yet'
            ].map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell us about your project" htmlFor="message" required>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update('message')}
          className="input resize-y"
          placeholder="What are you trying to achieve? What does success look like?"
        />
      </Field>

      <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          We typically respond within one working day. Your details stay
          private — see our privacy policy.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send message <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          background: #ffffff;
          border: 1px solid #E4E8F1;
          color: #0A1B3D;
          border-radius: 0.625rem;
          padding: 0.7rem 0.85rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        :global(.input::placeholder) {
          color: #8A93A8;
        }
        :global(.input:hover) {
          border-color: #C9D1E0;
        }
        :global(.input:focus) {
          border-color: #1F6DFF;
          box-shadow: 0 0 0 3px rgba(31, 109, 255, 0.18);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-medium text-muted"
      >
        {label}
        {required && <span className="ml-0.5 text-brand-600">*</span>}
      </label>
      {children}
    </div>
  );
}
