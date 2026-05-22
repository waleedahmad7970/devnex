# DevNex Website

A modern, dark-themed marketing website for **DevNex** — a UK-based IT company offering custom software, AI, chatbots, AI automation, SaaS development, product engineering, cyber security, digital marketing, staff augmentation and cloud/DevOps services.

Built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**.

## Pages

- `/` — Home (hero, services, why us, testimonials, CTA)
- `/services` — Services overview
- `/services/[slug]` — Detail page for each of the 9 services (statically generated)
- `/about` — Company story, mission, values, leadership
- `/blog` — Insights / blog listing
- `/blog/[slug]` — Individual blog posts
- `/contact` — Contact info + form

All services and blog posts live in `lib/services.ts` and `lib/posts.ts` — edit these to customise content.

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → open http://localhost:3000

# 3. Production build
npm run build
npm start
```

Requires **Node.js 18.17+** (Next.js 14 requirement).

## Project structure

```
.
├── app/                      # Next.js App Router pages
│   ├── about/
│   ├── blog/
│   │   └── [slug]/
│   ├── contact/
│   ├── services/
│   │   └── [slug]/
│   ├── favicon.svg
│   ├── globals.css           # Design tokens + Tailwind layers
│   ├── layout.tsx            # Root layout (Navbar + Footer + metadata)
│   ├── not-found.tsx
│   └── page.tsx              # Home
├── components/               # Reusable UI components
│   ├── AnimatedBackground.tsx
│   ├── ContactForm.tsx       # Client component (form state)
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── LogoCloud.tsx
│   ├── Logo.tsx
│   ├── Navbar.tsx            # Client component (mobile menu / scroll state)
│   ├── SectionHeading.tsx
│   ├── ServiceCard.tsx
│   ├── StatGrid.tsx
│   └── TestimonialCard.tsx
├── lib/                      # Data + site config
│   ├── posts.ts              # Blog posts
│   ├── services.ts           # 9 services with copy, features, stack
│   ├── site.ts               # Site name, contact details, nav links
│   └── testimonials.ts       # Client testimonials
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Customising

- **Brand colours / typography:** `tailwind.config.ts` and `app/globals.css`.
- **Company name, contact, address:** `lib/site.ts`.
- **Services (titles, copy, features, stack, benefits):** `lib/services.ts`.
- **Testimonials:** `lib/testimonials.ts`.
- **Blog posts:** `lib/posts.ts`.
- **Logo:** `components/Logo.tsx` and `app/favicon.svg`.

## Contact form

The form in `components/ContactForm.tsx` currently shows a success state without sending. Wire it up to your backend, transactional email service (Resend, Postmark, SendGrid) or form provider (Formspree, HubSpot) by replacing the simulated `await` in `onSubmit`.

## Deployment

Deploys cleanly to **Vercel**, **Netlify**, **AWS Amplify**, **Render**, or any platform that supports Node.js. For Vercel:

```bash
vercel
```

## Licence

Proprietary © DevNex Ltd.
