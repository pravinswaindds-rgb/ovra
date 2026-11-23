# Orva Networks Component Architecture & Engineering Specification

**Project:** Orva Networks Website Redesign  
**Framework:** Next.js 16.4.6 (App Router), React 19.3.0, Tailwind CSS 4.3.3  
**Design Reference Inspiration:** Infoblox Enterprise UX  
**Version:** 1.0  

---

## 1. Architectural Principles

1. **Server-First by Default (React Server Components):**  
   All marketing pages, catalog content, and layouts render on the server as static or cached Server Components (`RSC`). Client components (`"use client"`) are isolated to interactive boundaries: mega-menu dropdowns, mobile navigation drawers, interactive solution tabs, metric counters, and validated forms.
2. **Native Web Standards & Minimal JS Footprint:**  
   In compliance with Google Modern Web Guidance, external utility libraries are discarded in favor of native CSS Subgrid, CSS Scroll Snap, CSS Anchor/Popover states, and native HTML5 constraint validation.
3. **Type-Safe End-to-End:**  
   Every component prop, data model (Services, Industries, Case Studies), and form input is strictly typed with TypeScript 5 and validated with Zod.

---

## 2. Component Hierarchy & Module Map

```
app/
├── layout.tsx                           # Global Root Layout (RSC)
│   ├── components/navigation/Header     # Sticky Header (Client - scroll & menu state)
│   │   ├── components/navigation/MegaMenu # Multi-Column Dropdown (Client)
│   │   └── components/navigation/MobileNav# Slide-Out Drawer (Client)
│   ├── {page.tsx}                       # Individual Page Route View (RSC)
│   └── components/navigation/Footer     # Multi-Tier Global Footer (RSC + Client Form)
│       └── components/forms/NewsletterForm # Newsletter Subscription Action (Client)
```

---

## 3. Component Inventory by Category

### 3.1 Global & Layout Components (`components/navigation/`, `components/layout/`)

| Component Name | Client/Server | Purpose & Implementation Details |
| :--- | :---: | :--- |
| `Header` | Client | Sticky navigation with dynamic background blur on scroll. Handles keyboard focus navigation and mobile trigger. |
| `MegaMenu` | Client | Multi-column flyout for the "Solutions" category. Uses native discrete transitions (`@starting-style`), keyboard arrow navigation, and click-outside dismissal. |
| `MobileNav` | Client | Accessible slide-over drawer for viewports `< 1024px`. Locks background scroll when open and supports `Escape` dismissal. |
| `Footer` | Server | Deep 5-column directory, corporate registration details, defense credentials, and utility links. |
| `PageContainer` | Server | Layout container enforcing `max-width: 1280px` and responsive horizontal padding via CSS logical properties. |
| `SectionWrapper` | Server | Semantic `<section>` wrapper handling alternating Obsidian/White canvas background themes and vertical spacing. |

### 3.2 Reusable Atomic UI Components (`components/ui/`)

| Component Name | Client/Server | Variations & Props |
| :--- | :---: | :--- |
| `Button` | Server/Client | `variant`: `"primary"` (Electric Blue), `"secondary"` (Ghost Steel), `"subtle"` (Navy Hollow), `"link"`. Handles optional arrow icon animation. |
| `Badge` | Server | `variant`: `"cyan"`, `"blue"`, `"emerald"`, `"steel"`. Pill tag for category tags, SLA status, and technology domains. |
| `Card` | Server | `variant`: `"dark-glass"`, `"light-elevated"`, `"flat-bordered"`. Core container with hairline borders and optional subgrid row alignments. |
| `StatsCard` | Server | Clean enterprise metric card displaying verified statistics, SLA guarantees, and corporate milestones. |
| `Accordion` | Client | Native `<details>`/`<summary>` wrapper or accessible collapsible row for FAQ and compliance matrices. |
| `Marquee` | Client | Continuous moving client logo band (ISRO, BEL, BHEL, Cisco). Includes a visible pause/resume button conforming to WCAG 2.2.2. |

### 3.3 Interactive Pattern & Section Components (`components/home/`, `components/solutions/`)

| Component Name | Client/Server | Key Features |
| :--- | :---: | :--- |
| `HeroSection` | Server | High-impact dark canvas headline, lead text, dual CTA buttons, and responsive graphic container with `fetchpriority="high"`. |
| `ProblemSolutionBento`| Server | 3-column bento grid contrasting traditional IT fragmentation with Orva’s unified architecture. |
| `SolutionsTabMatrix` | Client | Interactive tabbed panel switching between Enterprise Networking, Cybersecurity, Campus Wireless, and Industrial IT without page reloads. |
| `CaseStudyCard` | Server | Structured card displaying enterprise client name, challenge, deployed architecture, and measurable outcome metric. |
| `IndustryGrid` | Server | Visual card grid mapping industry verticals to regulatory compliance tags (ISO, HIPAA, PCI-DSS). |
| `TrustProofBar` | Client | Client logo presentation with defense and aerospace highlight badges. |
| `CtaBanner` | Server | Full-bleed conversion block with high-contrast copy and direct links to consultation booking. |

### 3.4 Form & Action Components (`components/forms/`, `app/actions/`)

| Component Name | Client/Server | Details & State Management |
| :--- | :---: | :--- |
| `ContactForm` | Client | Consultation inquiry form with fields: Name, Email, Phone, Company, Interest, Scope. Uses React 19 `useActionState` and Server Actions. Errors synchronized with `:user-invalid`. |
| `NewsletterForm` | Client | Minimal email capture input with inline pending states and toast confirmation feedback. |
| `contact.ts` | Server Action | Validates payload using Zod, enforces rate limiting, and dispatches email/webhook to CRM. |
| `newsletter.ts` | Server Action | Validates email address and synchronizes to newsletter database table. |

---

## 4. Design-to-Code Mapping: Modern CSS & Tailwind Integration

### Subgrid Implementation for Service Cards
```tsx
// Using CSS Grid with Subgrid for perfect card alignment
export function ServiceCardGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [grid-auto-rows:auto]">
      {services.map((service) => (
        <article 
          key={service.slug} 
          className="grid grid-rows-[subgrid] row-span-3 rounded-xl p-6 border border-white/10 bg-navy-surface/60 backdrop-blur-md"
        >
          <header className="flex items-center gap-3">
            <span className="text-brand-cyan text-sm font-mono uppercase">{service.category}</span>
          </header>
          <div className="py-2">
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
            <p className="text-slate-400 mt-2 text-sm leading-relaxed">{service.summary}</p>
          </div>
          <footer className="pt-4 border-t border-white/5 flex items-center justify-between">
            <a href={`/solutions/${service.slug}`} className="text-brand-cyan text-sm font-semibold hover:underline">
              Explore Architecture ->
            </a>
          </footer>
        </article>
      ))}
    </div>
  );
}
```

---

## 5. Performance & Data Flow Architecture

```
[User Browser]
      │
      ▼
[Next.js 16 Edge / Node Server]
      ├──> Static Page Generation (SSG) for 10 core pages (Instant TTFB)
      ├──> RSC Streaming with Suspense for dynamic sections
      └──> Server Actions (`contact.ts`, `newsletter.ts`) handling POST mutations
            │
            ▼
      [Email / CRM Notification Dispatch & Database Store]
```

* **Zero Hydration Bloat:** Marketing pages load with zero blocking JS for text/layout.
* **Instant Responsive Navigation:** Next.js client-side prefetching on link hover ensures sub-100ms page transitions between all 10 pages.
