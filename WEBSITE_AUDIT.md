# Comprehensive Website Audit & Redesign Architecture Report

**Project:** Orva Networks Website Redesign  
**Current Live Website:** [https://www.orvanetworks.com](https://www.orvanetworks.com)  
**Design Reference:** [https://www.infoblox.com](https://www.infoblox.com)  
**Audit Date:** November 2026  
**Status:** Audit & Architecture Phase (Read-Only Analysis)

---

## 1. Executive Summary

Orva Networks Private Limited (founded December 31, 2008, in Bangalore, India) provides mission-critical enterprise network infrastructure, cybersecurity (DNS filtering, Network Access Control), IoT network design, and cloud/edge integration. Its enterprise client roster includes premier Indian defense, aerospace, and industrial heavyweights such as **ISRO, BEL, BHEL, BEML, and Cisco**.

However, the existing public website runs on a legacy PHP/CodeIgniter monolithic CMS using an off-the-shelf theme template. It suffers from critical technical and visual shortcomings:
- Broken dynamic counters displaying `00+` and `0+` across production.
- Heavy reliance on jQuery, MetisMenu, and Bootstrap 5/4 styles.
- Generic styling that fails to communicate high-tier enterprise defense and cybersecurity authority.
- The web server (LiteSpeed) aggressively throttles concurrent requests with `HTTP 503` rate limits.

The target redesign workspace has already been initialized with **Next.js 16.4.6, React 19.3.0, and Tailwind CSS 4.3.3**. This audit analyzes the legacy implementation, extracts all business assets and content, reviews the design patterns of **Infoblox**, and defines the architecture and strategy to transform Orva Networks into a tier-1 enterprise network and cybersecurity web experience.

---

## 2. Technical Architecture & Stack Audit

### 2.1 Current Live Website (Production: `orvanetworks.com`)

| Layer | Technology / Implementation | Observations & Risks |
| :--- | :--- | :--- |
| **Server / Host** | LiteSpeed Web Server | Enforces strict per-IP rate-limiting/anti-DDoS; simultaneous requests result in `HTTP 503 Service Unavailable` or SSL handshake drops. |
| **Backend Runtime** | PHP 7.4.33 | End-of-life PHP version (security risk, performance bottleneck). |
| **Backend Framework** | CodeIgniter (PHP) | Identified by session cookie `ci_session` and CSRF protection token `csrf_ec_token`. Monolithic MVC with database-backed page routing. |
| **Styling & CSS** | Bootstrap CSS, FontAwesome 5, MetisMenu CSS, Swiper CSS, Magnific Popup, Odometer CSS, `style.css?v=72` | Legacy CSS bundle based on a commercial theme (`rts-*` theme namespace). Excessive unused CSS and specificity conflicts. |
| **Client Scripts** | jQuery 3.x, jQuery Validate, GSAP (`split-text`, `scroll-trigger`, `smooth-scroll`), Swiper.js, Odometer.js, `contact.form.js`, `main.js?v=5` | Heavy script payload (>1.5MB uncompressed JS) with multiple competing animation libraries and DOM manipulation scripts. |
| **Content Delivery** | Local assets served under `/assets/uploads/` | No modern image formats (WebP/AVIF) served by default; no adaptive responsive image sizes. |

### 2.2 Target Redesign Workspace (`c:\Users\DDS\Desktop\client\orva`)

| Layer | Configuration | Notes |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16.4.6 (App Router)** | Modern React Server Components (RSC) architecture. Note: Next.js 16 enforces strict conventions (async request headers/cookies, updated routing). |
| **Core Libraries** | **React 19.3.0**, **React-DOM 19.3.0** | Concurrent rendering, native actions, and enhanced asset loading. |
| **Styling Engine** | **Tailwind CSS 4.3.3** (`@tailwindcss/turbopack`) | High-performance CSS-first engine using native `@import "tailwindcss";` without legacy `tailwind.config.js`. |
| **Build System** | Turbopack | Sub-second compilation and incremental builds. |
| **Type System** | TypeScript 5.x | Strict type-safety across props and routes. |
| **Fonts** | `next/font/google` (`Geist`, `Geist_Mono`) | Zero-layout-shift font optimization. |

---

## 3. Existing Website Pages, Navigation & Content

### 3.1 Sitemap & Route Inventory

The current website consists of **43+ indexed endpoints** organized into five core categories:

#### A. Core & Corporate Pages
- `/` (Home)
- `/page/about-us` (About Us)
- `/company` (Company Overview / History)
- `/careers` (Careers & Job Openings)
- `/contact-us` (Contact Information & Inquiry Form)

#### B. Enterprise Network & Infrastructure Services (`/services/...`)
- `/services` (Services Hub)
- `/services/networking-solutions` (Enterprise LAN/WAN, Core Routing & Switching)
- `/services/server-solutions` (Server Virtualization, Hyperconverged & On-Prem Infrastructure)
- `/services/storage-solutions` (Enterprise SAN/NAS, Data Backup & Disaster Recovery)
- `/services/wireless-solutions` (High-Density Wi-Fi 6/6E, Campus Wireless, Mesh)
- `/services/telephony-solutions` (IP Telephony, SIP Trunking, PBX & Unified Communications)
- `/services/av-solutions` (Commercial Audio-Visual & Boardroom Integration)
- `/services/video-conferencing` (Hybrid Workspace & HD Video Collaboration)

#### C. Cybersecurity, IoT & Automation Services (`/services/...`)
- `/services/security-solution` (Next-Gen Firewalls, Threat Management)
- `/services/dns-filtering-protection` (AI-Driven DNS Security & Threat Mitigation)
- `/services/network-access-control` (NAC, Zero Trust Policy Enforcement, Device Profiling)
- `/services/cloud-dashboard-remote-management` (Single-Pane Cloud Monitoring & Orchestration)
- `/services/cloud-edge-computing` (Edge Gateway Processing & Distributed Architecture)
- `/services/iot-network-design` (Industrial IoT Networking, Sensor Topology)
- `/services/smart-device-integration` (Facility & Smart Building Sensor Integration)
- `/services/ot-solutions` (Operational Technology, SCADA/PLC Network Segmentation)
- `/services/ai-solutions` (AI-Assisted Network Telemetry & Automation)
- `/services/ai-automation` (Automated Provisioning & Self-Healing Workflows)
- `/services/ai-driven-data-insights` (Traffic Predictive Analytics)
- `/services/analytics-reporting` (Compliance, SLA & Performance Reporting)
- `/services/custom-industry-solutions` (Tailored Architecture for Regulated Verticals)
- `/services/end-to-end-security` (Perimeter to Endpoint Defense Matrix)

#### D. Industry Vertical Solutions (`/industries/...`)
- `/industries` (Verticals Hub)
- `/industries/corporate-smes` (Office Infrastructure & Branch Networking)
- `/industries/retail` (PCI-DSS Compliant Retail Store Networks & Guest Wi-Fi)
- `/industries/healthcare-medical-equipment-systems` (IoMT, HIPAA-Ready Hospital Network Isolation)
- `/industries/manufacturing-industrial-automation` (Ruggedized Factory Floor & Industrial Ethernet)
- `/industries/logistics-smart-warehousing` (High-Ceiling Warehouse RF Coverage & Asset Tracking)
- `/industries/energy-utilities` (Critical Infrastructure & Substation Telemetry)
- `/industries/smart-infrastructure-buildings` (BMS Integration & Building Automation)

#### E. Thought Leadership & Blog (`/blog/...`)
- `/blog` (Resource Center)
- `/blog/ai-in-action`
- `/blog/edge-vs-cloud`
- `/blog/future-ready-networking`
- `/blog/how-secure-is-your-network`
- `/blog/real-world-iot-use-cases`

### 3.2 Navigation Structure Analysis
- **Top Utility Bar:** Direct contact links (`info@orvanetworks.com`, `080-41161040`), social icons.
- **Main Header:** Brand logo, primary menu (`Home`, `About Us`, `Services [Mega Dropdown]`, `Industries [Dropdown]`, `Company`, `Careers`, `Contact Us`), and a "Get in Touch" CTA button.
- **Mobile Menu:** Collapsible accordion driven by MetisMenu.
- **Footer:** 4-column layout (About summary, Quick Links, Service List, Newsletter subscription form, copyright bar).

---

## 4. Component Inventory & Asset Analysis

### 4.1 Existing Reusable Components
1. **Header / Navbar:** Sticky header with multi-level dropdowns and top utility contact bar.
2. **Hero Sliders:** Swiper.js multi-slide banners with animated headline overlays and primary CTAs.
3. **Service Cards:** Grid items with icon, service title, short synopsis, and "Read More" hover link.
4. **Why Choose Us / Value Proposition Bento:** 3-column cards (`Always-On Intelligence`, `Future-Ready Security`, `Scalable Innovation`).
5. **Metric Counter Badges:** 4-column counter section designed for animated statistics (e.g., Projects, Clients, Experts, Countries).
6. **Industry Showcase Carousel:** Visual cards highlighting verticals (Healthcare, Manufacturing, Retail, etc.).
7. **Client Logo Marquee:** Monochrome/greyscale partner logos.
8. **Testimonial Carousel:** Client endorsement quotes with author name and avatar.
9. **Recent News / Blog Card Grid:** 3-column card grid with thumbnail, publication date, title, and link.
10. **Quick Quote / Inquiry Box:** Floating card or section containing the quick contact form.
11. **Footer & Newsletter Widget:** Comprehensive footer with newsletter form and social links.

### 4.2 Assets Inventory
- **Brand Identity:**
  - Logo: `https://www.orvanetworks.com/assets/uploads/Logo/1746429332_orva1.png`
  - Favicon: `https://www.orvanetworks.com/assets/uploads/Favicon/1746429332_orva1.png`
- **Partner & Client Trust Proof:**
  - `ISRO` (Indian Space Research Organisation)
  - `BHEL` (Bharat Heavy Electricals Limited)
  - `BEL` (Bharat Electronics Limited)
  - `BEML` (Bharat Earth Movers Limited)
  - `Cisco`
  - `CSC` (Computer Sciences Corporation)
- **Imagery & Icons:**
  - Stored under `/assets/uploads/Services/Image/` (e.g., `server.png`, `database.png`, `cyber-security.png`, `antenna.png`, `DNS-Filtering-Protection.png`, `Network-Access-Control.png`).
  - Icons are predominantly standard 64x64 flat raster PNGs rather than crisp resolution-independent SVGs.
- **Typography:**
  - Default Bootstrap system font stack loaded locally with FontAwesome icons.

---

## 5. API Integrations, Forms, CMS & Backend Dependencies

### 5.1 Forms & Data Handling

| Form Name | Location | Method & Action | Input Payload | Existing Backend Handler |
| :--- | :--- | :--- | :--- | :--- |
| **Contact / Inquiry Form** | `/`, `/contact-us` | `POST /contact-us` (or `POST /`) | `Name`, `Phone`, `Email`, `Message`, `csrf_ec_token` | CodeIgniter controller processing email dispatch via PHP `mail()` or SMTP. Form uses jQuery Validate (`contact.form.js`). |
| **Newsletter Form** | Global Footer | `POST /Home/SendNewsLatter` | `EmailN`, `FromUrl`, `csrf_ec_token` | CodeIgniter `Home::SendNewsLatter` saving email to MySQL database and redirecting back. |
| **Quick Quote Request** | Bottom of Homepage | `POST /` | `Name`, `Phone`, `Email`, `Message` | Processed identically to the contact form. |

### 5.2 CMS & Backend Dependencies
- **CodeIgniter Database Tables:** The current setup relies on a MySQL/MariaDB database holding content for services, blogs, partners, and inquiries (`/assets/uploads/...` timestamps indicate auto-generated CMS uploads).
- **No External Headless API:** There is currently no REST or GraphQL API exposed for external consumption; pages are server-rendered via PHP views.

---

## 6. SEO, Performance & Tracking Audit

### 6.1 SEO Deficiencies
- **Missing / Generic Meta Descriptions:** Most subpages repeat generic titles like `"Orva - services"`, `"Orva - Industries"`, or have empty descriptions.
- **Missing Social Graph Tags:** No `og:title`, `og:description`, `og:image`, `twitter:card` tags are present. Sharing links on LinkedIn, Slack, or X produces empty previews.
- **Missing Structured Data (JSON-LD):** Zero `Organization`, `LocalBusiness`, `Service`, or `BreadcrumbList` schema markup.
- **Heading Hierarchy Violations:** The homepage renders four to six identical `<h1>` elements inside hidden Swiper slides, which degrades search engine crawler parsing.

### 6.2 Tracking & Analytics
- **Analytics Absence:** No active Google Analytics 4 (GA4), Google Tag Manager (GTM), or tracking pixels are currently loaded.
- **Zero Event Tracking:** Form submissions and phone clicks (`tel:080-41161040`) are untracked.

---

## 7. Technical Issues & Outdated UI Patterns

1. **Broken Production Metrics ("00+" Bug):**
   - The metric counters across the homepage display `00+` and `0+` (e.g., `00+ Successful Projects`, `0+ Clients`). The Odometer.js / jQuery-Appear script fails to trigger, creating a catastrophic loss of credibility for an enterprise infrastructure firm.
2. **Generic Bootstrap Template Aesthetic:**
   - The UI uses generic rounded borders, unoptimized stock photography, and template styling (`rts-*`) that does not convey the high-tech, mission-critical engineering standard demanded by defense and enterprise clients.
3. **Severe Concurrency / Rate-Limiting:**
   - The LiteSpeed web server throttles incoming connections aggressively, dropping legitimate traffic during traffic surges or multi-tab browsing.
4. **Lack of Interactivity & Technical Depth:**
   - Solutions are presented as static text blocks with basic bullet points. There are no architecture diagrams, interactive comparison tabs, or product feature breakdowns.
5. **No Dark Mode / Modern High-Contrast Palette:**
   - Modern enterprise infrastructure leaders (e.g., Infoblox, Cloudflare, Cisco) utilize purposeful dark themes, precise hairline borders, and neon/cyan telemetry accents. The current Orva site is washed out with generic white/grey backgrounds.

---

## 8. Infoblox Design Reference Benchmark

A deep architectural study of **[Infoblox](https://www.infoblox.com)** reveals the key design principles that define modern enterprise networking and cybersecurity web design:

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  INFOBLOX DESIGN SYSTEM DNA                                                      │
├────────────────────────────────┬─────────────────────────────────────────────────┤
│  Primary Backgrounds           │  Deep Obsidian (#101820), Warm Off-White (#F0EFE9)│
│  Accent / Border Styling       │  Hairline borders (rgb(217 225 226 / 16%)), Steel│
│  Typography Personality        │  Bold Grotesque / Alliance No.2, tight tracking  │
│  Core Architectural Geometry   │  Geometric faceted diamond accents, clean grids  │
│  Navigation Hierarchy          │  Multi-tier enterprise mega-menu with pill badges│
│  Trust Architecture            │  Integrated customer quotes with metric counters │
└────────────────────────────────┴─────────────────────────────────────────────────┘
```

### 8.1 Header & Mega-Menu Navigation
- **Utility Layer:** Language switcher, developer portal, partner portal, and sign-in links.
- **Primary Bar:** High-contrast logo, categorized drop-downs (**Platform**, **Products**, **Solutions**, **Threat Intel**, **Resources**), and prominent "Contact Sales" / "Get a Demo" CTAs.
- **Mega-Menu Panels:** 3-to-4 column flyouts that group offerings by *Product Suite* (e.g., Universal DDI, Threat Defense) and *Operational Goals* (Optimize Networking, Preemptively Secure, Accelerate Cloud), complete with featured resource cards and category badges.

### 8.2 Hero Layouts & Typography
- **High-Impact Headline Framing:** Direct, outcome-driven value propositions (e.g., *"Uniting Networking, Security and Cloud"*).
- **Visual Staging:** High-fidelity 3D/abstract network topologies, interactive telemetry visuals, or dark canvas animations paired with crisp typography.
- **Dual CTA Strategy:** High-contrast primary button (`Request Demo` / `Talk to an Expert`) paired with a hollow/ghost secondary button (`Explore the Platform` / `Read Whitepaper`).

### 8.3 Enterprise Solution Sections
- **Problem-to-Solution Framing:** Instead of just listing features, sections begin with enterprise pain points (e.g., *"Disconnected tools. Distributed environments. Rising risks."*) before introducing the architectural solution.
- **Interactive Solution Switchers:** Tabbed interfaces allowing IT buyers to toggle between use cases (Hybrid Cloud, Zero Trust, Branch Offices).

### 8.4 Product Cards & Content Grids
- **Bento & Modular Grid Layout:** Cards featuring hairline steel-gray borders (`rgba(217, 225, 226, 0.16)`), dark obsidian surfaces, subtle hover glow, and pill category tags.
- **Visual Hierarchy:** Distinct category label -> Punchy product title -> 2-sentence capability statement -> Direct arrow link.

### 8.5 Customer Testimonials & Statistics
- **Verified Enterprise Proof:** Prominently featured quotes from CISOs and Network Directors highlighting quantifiable ROI (e.g., hours saved, threats blocked).
- **Metric Highlights:** Large bold numbers with concise explanatory text.

### 8.6 CTA Sections & Footer
- **Bottom-of-Funnel Conversion Blocks:** High-contrast conversion banners with direct contact routing.
- **Enterprise Multi-Column Footer:** Deep site map organized into Platform, Solutions, Company, Legal, Compliance, and Social Channels.

---

## 9. Features & Functionality to Preserve (Must-Keep Matrix)

The redesign must strictly preserve and elevate all existing business-critical functionality:

| # | Feature / Functionality | Existing Implementation | Redesign Requirement (Next.js 16) |
| :-: | :--- | :--- | :--- |
| **1** | **Direct Lead Capture (Contact Form)** | PHP POST form with Name, Phone, Email, Message | Type-safe React Server Action with client-side validation (Zod + React Hook Form), spam protection (Turnstile/reCAPTCHA), and automated CRM/email delivery. |
| **2** | **Newsletter Subscription** | `POST /Home/SendNewsLatter` | Inline Server Action with instant toast feedback and database/ESP synchronization. |
| **3** | **Complete Services Catalog (20+ areas)** | Individual PHP pages under `/services/*` | Modern Next.js dynamic routing (`/services/[slug]`) backed by structured content, with breadcrumbs and related solutions. |
| **4** | **Industry Solutions (7 Verticals)** | Static pages under `/industries/*` | Deep industry landing pages (`/industries/[slug]`) addressing compliance (HIPAA, PCI-DSS, ISO, OT/SCADA). |
| **5** | **Government & Enterprise Trust Badges** | Client logo carousel (ISRO, BEL, BHEL, BEML, Cisco) | High-resolution SVG/vector trust marquee with defense/government case highlights. |
| **6** | **Resource & Blog Center** | 5 existing articles under `/blog/*` | MDX or Headless CMS-driven blog engine with clean reading layouts, syntax highlighting, and SEO metadata. |
| **7** | **Direct Telephony & Email Channels** | `080-41161040` & `info@orvanetworks.com` | Sticky click-to-call / click-to-email links in top bar, mobile drawer, and footer. |
| **8** | **Bangalore Head Office Identity** | Registered corporate info (Est. 2008) | Official address, interactive map integration, and corporate registration details in footer/contact page. |
| **9** | **Careers Portal** | `/careers` listing | Structured career page with open positions and direct resume submission capability. |

---

## 10. Recommended Redesign Architecture (Next.js 16 + React 19 + Tailwind v4)

### 10.1 Project Directory Structure

```
c:\Users\DDS\Desktop\client\orva\
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                     # Homepage (Infoblox-inspired layout)
│   │   ├── about/page.tsx               # About Us & Company history
│   │   ├── services/
│   │   │   ├── page.tsx                 # Services overview catalog
│   │   │   └── [slug]/page.tsx          # Dynamic service page (DNS, NAC, Server, etc.)
│   │   ├── industries/
│   │   │   ├── page.tsx                 # Industries overview hub
│   │   │   └── [slug]/page.tsx          # Dynamic industry vertical page
│   │   ├── blog/
│   │   │   ├── page.tsx                 # Blog & Insights listing
│   │   │   └── [slug]/page.tsx          # Blog article template
│   │   ├── careers/page.tsx             # Careers listing & application form
│   │   └── contact/page.tsx             # Contact & Consultation booking page
│   ├── actions/
│   │   ├── contact.ts                   # Server action for lead capture
│   │   └── newsletter.ts                # Server action for newsletter subscribe
│   ├── layout.tsx                       # Root layout (Fonts, Meta, Header, Footer)
│   ├── globals.css                      # Tailwind v4 theme definitions
│   └── sitemap.ts                       # Automated dynamic XML sitemap
├── components/
│   ├── navigation/
│   │   ├── Header.tsx                   # Sticky enterprise header
│   │   ├── MegaMenu.tsx                 # Multi-column dropdown inspired by Infoblox
│   │   ├── MobileNav.tsx                # Smooth slide-out mobile drawer
│   │   └── Footer.tsx                   # Enterprise multi-tier footer
│   ├── home/
│   │   ├── HeroSection.tsx              # High-contrast hero with dynamic graphics
│   │   ├── TrustMarquee.tsx             # ISRO, BEL, BHEL, Cisco logos
│   │   ├── ValuePillars.tsx             # Bento-grid value proposition cards
│   │   ├── SolutionsMatrix.tsx          # Tabbed solution switcher (DDI, Security, Cloud)
│   │   ├── StatsSection.tsx             # Fixed, working animated counters
│   │   ├── TestimonialSlider.tsx        # High-impact quote showcase
│   │   └── CtaBanner.tsx                # Bottom conversion drawer
│   ├── ui/
│   │   ├── Button.tsx                   # Primary, Hollow, Subtle button variants
│   │   ├── Card.tsx                     # Hairline border card containers
│   │   ├── Badge.tsx                    # Category & complexity pill tags
│   │   └── Counter.tsx                  # Reliable React 19 client counter
│   └── forms/
│       ├── ContactForm.tsx              # Validated lead submission form
│       └── NewsletterForm.tsx           # Footer subscription input
├── lib/
│   ├── data/
│   │   ├── services.ts                  # Structured catalog of all 20+ services
│   │   ├── industries.ts                # Structured vertical content
│   │   └── partners.ts                  # Client logos & metadata
│   ├── validations/
│   │   └── contact.ts                   # Zod validation schemas
│   └── utils.ts                         # Class merging & formatting helpers
```

### 10.2 Design Tokens & Theme Specification (Infoblox Inspiration)

Using Tailwind CSS v4 CSS variables:

```css
@theme {
  --color-brand-obsidian: #101820;       /* Main dark background */
  --color-brand-surface: #17222d;        /* Card & component surface */
  --color-brand-surface-hover: #1f2d3d;  /* Interactive hover surface */
  --color-brand-offwhite: #f0efe9;       /* Secondary background / light text */
  --color-brand-steel: #d9e1e2;          /* Hairline border accents */
  --color-brand-cyan: #00d2ff;           /* Telemetry & network accent */
  --color-brand-emerald: #00e599;        /* Security & uptime accent */
  
  --font-display: var(--font-geist-sans), system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), monospace;
}
```

---

## 11. Business Discovery & Clarification Questionnaire

To ensure the redesigned site accurately represents Orva Networks' business capabilities and brand identity, the following information should be clarified:

1. **Brand Identity & Vector Assets:**
   - Are high-resolution vector logos (SVG or AI format) available for Orva Networks and the client trust badges (ISRO, BEL, BHEL, BEML, Cisco)?
   - Does Orva have established corporate brand guidelines (specified hex codes, primary typefaces, iconography rules)?
2. **Dynamic Metrics Verification:**
   - What are the authentic statistics to replace the broken `00+` counters?
     - Number of successful enterprise deployments? (e.g., 500+?)
     - Number of certified network & security engineers? (e.g., 50+?)
     - Years of industry experience? (Founded 2008 = 16+ years)
     - Uptime SLA percentage? (e.g., 99.99%?)
3. **Primary Value Proposition & Positioning:**
   - Should Orva be positioned primarily as a **Turnkey System Integrator / Managed Service Provider (MSP)**, or as a **Specialized Cybersecurity & DNS/DDI Technology Partner** (closer to Infoblox)?
4. **Lead Routing & CRM Destination:**
   - Where should contact and consultation inquiries be sent? (e.g., direct email notifications to `info@orvanetworks.com`, or integration with a CRM like Zoho, HubSpot, or Salesforce)?
5. **Blog & Case Studies Strategy:**
   - Will the existing 5 blog articles be migrated, and will the team publish regular case studies or whitepapers going forward?
6. **Career Portal Applications:**
   - Should career applications be handled via an on-page file upload (PDF resume) or routed to an HR email (e.g., `careers@orvanetworks.com`)?

---

## 12. Google Modern Web Guidance: Implementation Directives

In accordance with Google's **Modern Web Guidance** standards (installed in `.agents/skills/modern-web-guidance/`), the Orva Networks redesign will apply strict modern web best practices, avoiding obsolete libraries and utilizing native browser platform capabilities.

### 12.1 CSS Layouts & Responsive Architecture (`css-layout`, `responsive-design`)
- **Layout Decision Hierarchy:**
  - **Flexbox (1D):** Navigation bars, utility headers, button clusters, and tag clouds.
  - **CSS Grid (2D):** Page layout skeletons, bento boxes, and solutions matrices.
  - **Subgrid (Widely Available Baseline 2023):** Used in multi-card grids (such as Service Cards and Solution Bento blocks) to ensure card headers, bodies, and action buttons align horizontally across sibling cards regardless of varying text lengths.
- **Logical Properties:** Replace legacy `margin-left`, `padding-right`, `left`, `right` with CSS logical properties (`margin-inline`, `padding-block`, `inset-inline-start`, etc.) to ensure bi-directional layout resilience.
- **Intrinsic Sizing & Ratios:** Use `aspect-ratio` to reserve layout boxes for media assets, preventing Cumulative Layout Shift (CLS). Use `minmax()` and `fit-content()` rather than rigid pixel widths.
- **Container Queries:** Apply `@container` to modular components (e.g., product cards, quote callouts) so they adapt their typography and internal layout based on their parent container's width rather than screen viewport media queries alone.

### 12.2 Compositor Motion & Animation Guidelines (`motion`)
- **GPU Compositor Threading:** Animate exclusively via `transform` (using individual properties like `translate`, `scale`) and `opacity`. Never animate layout-triggering properties (`width`, `height`, `top`, `margin`).
- **Native Discrete Transitions:** For top-layer flyouts (mega-menus, drawers, dialogs), use native `@starting-style` and `transition-behavior: allow-discrete` to animate enter/exit states without requiring third-party JS animation libraries.
- **Reduced Motion Conformance (WCAG 2.3.3):**
  - Opt into full motion using `@media (prefers-reduced-motion: no-preference)`.
  - When animations run under reduced motion, adjust parameters (e.g. increase duration or remove spatial displacement) using `@media (prefers-reduced-motion: reduce)`.
  - **Never** globally apply `animation-duration: 0.01ms;`.
- **Pause/Stop/Hide Controls (WCAG 2.2.2):** Continuous moving elements (such as client logo marquees or automated tickers) lasting more than 5 seconds must include an accessible pause/resume control.

### 12.3 Accessibility Architecture (`accessibility`)
- **Semantic Landmarks:** Structure all views with `<header>`, `<nav aria-label="Primary">`, `<main>`, and `<footer aria-label="Site">`. Exactly one `<main>` landmark per page.
- **Touch Target Sizing:** Ensure all interactive elements meet the minimum 44x44 CSS pixel target size (WCAG 2.5.5 / 2.5.8).
- **Visible, Unclipped Focus Rings:** Focus indicators must remain visible and unobstructed; never use `outline: none` without providing a high-contrast replacement, and ensure parent containers do not clip focus rings with `overflow: hidden` or `clip-path`.
- **WCAG 2.1 AA Contrast Ratios:** All text against the dark obsidian (`#101820`) or light off-white (`#F0EFE9`) surfaces must meet a minimum contrast ratio of 4.5:1 for body copy and 3.0:1 for headings/icons.

### 12.4 Accessible Form Validation & Error Handling (`forms`, `accessible-error-announcement`)
- **Semantic Controls:** Wrap controls in `<form action="...">`, use distinct `<label for="...">` elements, and explicitly set `type="button"` on secondary non-submitting buttons.
- **Post-Interaction Error Synchronization:** Avoid premature error messages on untouched fields. Synchronize visual `:user-invalid` CSS states with programmatic `aria-invalid="true"` attributes so screen reader announcements trigger only after the user has interacted with the control.
- **Progressive Enhancement:** Forms will submit via Next.js React 19 Server Actions, working seamlessly even if client-side JavaScript has not yet completed hydration.

### 12.5 Core Web Vitals & Performance Optimization (`performance`)
- **Largest Contentful Paint (LCP):**
  - Declare the primary hero graphic in standard HTML via Next.js `<Image priority>` (`fetchpriority="high"`).
  - Never lazy-load above-the-fold media.
  - Preconnect to critical font and asset domains.
- **Interaction to Next Paint (INP):**
  - Eliminate the legacy 1.5MB+ jQuery, MetisMenu, and Swiper.js bundle.
  - Keep client-side interactions under 50ms; yield to main thread where necessary using `scheduler.yield()` with a fallback.
- **Cumulative Layout Shift (CLS):**
  - Explicit `width` and `height` dimensions on all images and vectors.
  - Self-hosted zero-layout-shift fonts via `next/font/google` with fallback size adjust.
- **Below-The-Fold Rendering:** Apply `content-visibility: auto` paired with `contain-intrinsic-size` on long vertical sections (such as the 20-service directory) to avoid unnecessary rendering calculations until near the viewport.

### 12.6 Legacy vs. Modern Web Platform Migration Matrix

| Capability | Legacy Implementation (Live Site) | Modern Web Replacement | Benefit / Standard |
| :--- | :--- | :--- | :--- |
| **Carousel / Sliders** | Swiper.js + jQuery (~140KB JS) | CSS Scroll Snap + native scroll buttons | Compositor-driven, zero JS runtime overhead, full touch gestures. |
| **Mega-Menu / Flyouts** | MetisMenu + jQuery hover events | CSS Anchor Positioning / React Popover state + `@starting-style` | Native focus trapping, dismiss on outside click / Esc, smooth entry/exit. |
| **Animations** | GSAP, Split-Text, Smooth-Scroll plugins | CSS Transitions + Web Animations API (WAAPI) | Compositor thread acceleration, reduced motion respect, lightweight. |
| **Counters / Metrics** | Odometer.js + jQuery Appear (Broken) | Lightweight React 19 IntersectionObserver hook | 100% reliable, zero layout shift, accessibility live announcement. |
| **Form Validation** | jQuery Validate (`contact.form.js`) | Native HTML5 constraint validation + Zod Server Actions | Type-safe end-to-end, works without client JS, accessible errors. |
| **Icons & Logos** | Mixed raster PNGs & FontAwesome CSS | Inline SVGs & Next.js optimized SVG vectors | Resolution-independent, crisp on Retina displays, instant paint. |

---

*Document generated as the foundational analysis for the Orva Networks website modernization.*
