# Capital Corridor V3.1 — Technical Production Audit

## 1. Current Architecture
- **Framework & Runtime**: React 18.3+ with TypeScript, bundled via Vite 6.4.3.
- **Routing**: `react-router-dom` v7 with client-side SPA routing (`BrowserRouter`).
- **Styling & System**: Vanilla CSS with Tailwind CSS v3 design tokens (`#050B14`, `#070E1C`, `#C5A059`, `#F8F6F0`).
- **Animation & Icons**: Motion (Framer Motion v12) for restrained transitions; Lucide React for institutional icons.
- **SEO & Meta**: `react-helmet-async` managing canonical URLs, Open Graph, and Twitter metadata.

---

## 2. Application Routes
- `/` — Home (Modular 11-section editorial landing page)
- `/about` — About Us & Firm Heritage
- `/why-us` — Strategic Differentiation & Value Proposition
- `/services` — Complete 15 Core Advisory Practice Areas & Detailed Breakdown
- `/capital-markets` — ECM, SME IPO & Investment Banking
- `/challenging-cases` — Complex Situation & NPA/OTS Resolution Advisory
- `/our-team` — Leadership Profiles & Direct Contacts
- `/our-process` — Four-Phase Advisory Execution Process
- `/contact` — Contact Details & Pre-filled Email Consultation Form
- `/legal-disclaimer` — Legal Advisory Disclaimer & Regulatory Notice
- `*` — Wildcard 404 Error Fallback Page (`NotFound.tsx`)

---

## 3. Component Hierarchy
```
src/
├── App.tsx                    (Router, HelmetProvider, Layout)
├── components/
│   ├── Layout.tsx             (Header, Footer, ScrollToTop)
│   ├── Header.tsx             (Sticky backdrop blur navigation, responsive drawer)
│   ├── Footer.tsx             (Sitemap, contact info, regulatory disclaimer)
│   ├── SEO.tsx                (Helmet meta manager, canonicals, OpenGraph)
│   └── home/
│       ├── HeroV3.tsx
│       ├── CredibilityTicker.tsx
│       ├── Manifesto.tsx
│       ├── ServicesAdvisory.tsx
│       ├── JourneyWorkflow.tsx
│       ├── WhyCapitalCorridor.tsx
│       ├── ChallengingCases.tsx
│       ├── EditorialBand.tsx
│       ├── LeadershipShowcase.tsx
│       ├── InstitutionalNetwork.tsx
│       └── FinalCTAV3.tsx
└── pages/
    ├── Home.tsx
    ├── AboutUs.tsx
    ├── WhyUs.tsx
    ├── Services.tsx
    ├── CapitalMarkets.tsx
    ├── ChallengingCases.tsx
    ├── OurTeam.tsx
    ├── OurProcess.tsx
    ├── ContactUs.tsx
    ├── LegalDisclaimer.tsx
    └── NotFound.tsx
```

---

## 4. Content & Data Sources
- **Leadership Data**: Single source of truth in `src/pages/OurTeam.tsx` & `src/components/home/LeadershipShowcase.tsx`.
- **Services Data**: Primary catalog defined in `src/pages/Services.tsx` & homepage index in `src/components/home/ServicesAdvisory.tsx`.
- **Contact Data**: Phone (`+91 99822 22210`, `+91 80031 57877`), Email (`rahull@capitalcorridor.in`, `daksh@capitalcorridor.in`, `contact@capitalcorridor.in`), Address (S.G. Tower, Vaishali Nagar, Ajmer, Rajasthan).

---

## 5. External Dependencies
- `react`, `react-dom` (v18.3.1)
- `react-router-dom` (v7.1.5)
- `motion` (v12.4.7)
- `lucide-react` (v0.475.0)
- `react-helmet-async` (v2.0.5)
- `clsx`, `tailwind-merge` (v2.6.0)

---

## 6. Contact & Conversion Mechanisms
- **Phone**: Direct `tel:` links on all phone numbers across header, home, leadership showcase, contact page, and footer.
- **Email**: Direct `mailto:` links with verified email addresses (`rahull@capitalcorridor.in`, `contact@capitalcorridor.in`).
- **WhatsApp**: Direct `wa.me/918003157877` and `wa.me/919982222210` chat links with pre-formatted inquiry text.
- **Consultation Form**: Client-side form generating pre-filled `mailto:` email drafts without third-party storage risks.

---

## 7. SEO Implementation
- Standardized `<title>` and `<meta name="description">` tags on every page.
- Canonical links pointing to `https://www.capitalcorridor.in/`.
- Open Graph (`og:title`, `og:description`, `og:url`, `og:type`) & Twitter card metadata.
- Valid `public/robots.txt` and `public/sitemap.xml` listing all 10 site routes.

---

## 8. Accessibility Implementation
- Native HTML5 semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Valid heading hierarchy (`<h1>` per page, followed by `<h2>` and `<h3>`).
- Minimum touch target sizing (>= 44px) for all buttons and interactive links.
- High color contrast meeting WCAG AA requirements (White/Champagne on Deep Navy `#050B14`, Charcoal `#070E1C` on Warm Cream `#F8F6F0`).

---

## 9. Performance & Build Status
- **TypeScript Check**: `npx tsc --noEmit` — 0 errors.
- **Production Build**: `npm run build` — 5.37 seconds (2024 modules transformed).
- **Bundle Optimization**: Single vendor bundle under 250 KB compressed; lazy image loading on below-the-fold components.

---

## 10. Security & Privacy Assurance
- **Secrets Audit**: 0 hardcoded API keys, tokens, or environment passwords in client code.
- **Privacy Assurance**: Contact form operates statelessly via `mailto:` triggers; no user data saved on server or local storage.
- **Output Hygiene**: 0 `console.log`, `debugger`, or leftover debug statements.

---

## 11. Content & Factual Classification Summary
- All core business positioning verified against project data.
- Operational details (phone, email, HQ address, 25+ bank syndication channels) verified.
- Client confirmation flagged for exact volume totals prior to public press releases.

---

## 12. Deployment Readiness
- **Production Host**: Configured for static SPA hosting (Vercel, Netlify, Cloudflare Pages, AWS S3/CloudFront).
- **Client Routing Support**: SPA rewrite rule required (`/* -> /index.html`).
