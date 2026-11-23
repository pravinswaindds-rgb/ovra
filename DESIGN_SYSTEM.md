# Orva Networks Design System

**Project:** Orva Networks Website Redesign  
**Design Reference Inspiration:** Infoblox Enterprise UX  
**Version:** 1.0  
**Status:** Architecture & Design Specification  

---

## 1. Brand Philosophy & Design Language

Orva Networks requires a commanding, high-reliability enterprise aesthetic that reflects its tier-1 client base (**ISRO, BEL, BHEL, BEML, Cisco**) and mission-critical network/cybersecurity domain.

Inspired by **Infoblox**, the visual language blends:
- **Architectural Dualism:** High-contrast alternation between **Deep Navy/Obsidian canvas** (conveying security, network operations centers, intelligence) and **Crisp Pure White / Off-White surfaces** (conveying editorial clarity, readability, and modern enterprise software).
- **Precision Blue Spectrum:** Vibrant cyber-blue and electric cyan telemetry accents that symbolize real-time packet flow, active defense, and high-speed data transmission.
- **Hairline Geometry:** Hairline borders (`1px solid rgba(255, 255, 255, 0.1)` on dark, `1px solid rgba(16, 24, 32, 0.08)` on light) instead of heavy dropped shadows.
- **Intentional Typography:** High-impact, geometric headlines with generous scale and tight letter-spacing paired with hyper-readable body text.

---

## 2. Color System & Design Tokens

The color palette is built using CSS Custom Properties and Tailwind CSS v4 `@theme` tokens.

### 2.1 Primary & Dark Canvas Palette (Navy / Obsidian)
```css
:root {
  /* Deep Navy & Obsidian Canvas */
  --color-canvas-obsidian: #0A0F17;    /* Pure dark base / Hero backgrounds */
  --color-canvas-navy:     #0F172A;    /* Primary deep navy section background */
  --color-canvas-surface:  #162238;    /* Dark card background / container surface */
  --color-canvas-elevated: #1E2D4A;    /* Interactive card hover / elevated layer */
  --color-border-dark:     rgba(255, 255, 255, 0.12); /* Hairline card borders */
  --color-border-dark-subtle: rgba(255, 255, 255, 0.06);
}
```

### 2.2 Light Editorial Canvas Palette
```css
:root {
  /* Crisp Light Canvas */
  --color-canvas-white:    #FFFFFF;    /* Pure white primary section */
  --color-canvas-offwhite: #F8FAFC;    /* Subtle off-white neutral slate */
  --color-canvas-cream:    #F1F5F9;    /* Card and bento background in light mode */
  --color-border-light:    rgba(15, 23, 42, 0.08); /* Precision light hairline */
  --color-border-light-hover: rgba(15, 23, 42, 0.18);
}
```

### 2.3 Brand Blues & High-Tech Telemetry Accents
```css
:root {
  /* Electric Blue & Cyan Accents */
  --color-brand-blue:      #0284C7;    /* Core Orva Navy-Blue (Primary action) */
  --color-brand-blue-hover:#0369A1;    /* Primary button hover */
  --color-brand-cyan:      #00D2FF;    /* Telemetry, glowing pills, active routes */
  --color-brand-indigo:    #4F46E5;    /* Secondary accent / network routing visuals */
  --color-brand-emerald:   #10B981;    /* Uptime, active security, positive metrics */
  --color-brand-amber:     #F59E0B;    /* Alerts, telemetry monitoring */
}
```

### 2.4 Text & Typography Colors
```css
:root {
  /* Dark Canvas Text */
  --text-dark-primary:     #F8FAFC;    /* 95% opacity white */
  --text-dark-secondary:   #94A3B8;    /* Slate-400 for secondary copy */
  --text-dark-muted:       #64748B;    /* Slate-500 for captions & badges */

  /* Light Canvas Text */
  --text-light-primary:    #0F172A;    /* Slate-900 (High contrast heading) */
  --text-light-secondary:  #475569;    /* Slate-600 (Editorial body) */
  --text-light-muted:      #94A3B8;    /* Slate-400 (Metadata) */
}
```

### 2.5 Tailwind CSS v4 Theme Integration
```css
@theme {
  --color-navy-base: #0A0F17;
  --color-navy-primary: #0F172A;
  --color-navy-surface: #162238;
  --color-navy-elevated: #1E2D4A;
  --color-brand-blue: #0284C7;
  --color-brand-cyan: #00D2FF;
  
  --font-display: var(--font-geist-sans), "Inter", system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), monospace;
}
```

---

## 3. Typography System

The typography creates a sense of scale, engineering precision, and confidence.

### 3.1 Typeface Selection
* **Display & Body:** `Geist Sans` (from `next/font/google`), with fallbacks to `Inter`, system-ui.
  * Crisp geometric letterforms, open apertures for technical legibility, exceptional numeral rendering for enterprise metrics.
* **Code & Telemetry:** `Geist Mono` for IP addresses, CIDR notation, telemetry badges, and security logs.

### 3.2 Type Scale & Hierarchy

| Role | Font Size (Desktop) | Line Height | Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display (H1)** | 3.75rem – 4.5rem (60–72px) | 1.08 | 700 Bold | -0.035em | Main hero statements on primary landing pages |
| **Section Heading (H2)** | 2.5rem – 3.0rem (40–48px) | 1.15 | 700 Bold | -0.025em | Major category & solution section headers |
| **Feature Heading (H3)** | 1.5rem – 1.75rem (24–28px) | 1.25 | 600 SemiBold | -0.015em | Bento-grid cards, product titles |
| **Subheading / Lead** | 1.25rem – 1.375rem (20–22px)| 1.6 | 400 Regular | -0.01em | Hero introductory paragraphs |
| **Body Large** | 1.125rem (18px) | 1.65 | 400 Regular | 0.0em | Primary solution descriptive copy |
| **Body Base** | 1.0rem (16px) | 1.6 | 400 Regular | 0.0em | Standard card body, table text |
| **Caption / Mono** | 0.8125rem – 0.875rem (13–14px)| 1.4 | 500 Medium | +0.02em | Category pill tags, stats, metadata |

---

## 4. Spacing, Layout & Grid Architecture

### 4.1 Spacing Scale
We employ an 8-point harmonic spacing scale with CSS logical properties:
- `space-1`: 4px (`0.25rem`)
- `space-2`: 8px (`0.5rem`)
- `space-3`: 12px (`0.75rem`)
- `space-4`: 16px (`1.0rem`)
- `space-6`: 24px (`1.5rem`)
- `space-8`: 32px (`2.0rem`)
- `space-12`: 48px (`3.0rem`)
- `space-16`: 64px (`4.0rem`)
- `space-24`: 96px (`6.0rem`)
- `space-32`: 128px (`8.0rem`)

### 4.2 Containers & Breakpoints
- **Container Max Width:** `1280px` (`80rem`) with `padding-inline: clamp(1rem, 5vw, 2.5rem)`.
- **Wide Container:** `1440px` for top navigation and full-bleed trust marquees.
- **Breakpoints:**
  - `sm`: `640px` (Mobile landscape)
  - `md`: `768px` (Tablets / Mobile drawer collapse)
  - `lg`: `1024px` (Desktop / Mega-menu display)
  - `xl`: `1280px` (Wide desktop)
  - `2xl`: `1536px` (Ultra-wide displays)

### 4.3 Modern CSS Layout Hierarchy
- **Flexbox:** 1D layouts (Navbar, badge lists, button groups). Includes `flex-wrap: balance` for pill tags.
- **CSS Grid:** 2D bento grids, 3-column service cards, 4-column metric stats.
- **Subgrid:** Applied to card rows so card headers, body text, and button footers align seamlessly across unequal content lengths.

---

## 5. Component Specifications

### 5.1 Buttons & Interactive Controls

#### Primary Button ("Electric Blue")
* **Appearance:** Solid blue (`#0284C7`), text white (`#FFFFFF`), font weight 600, border radius `8px`, subtle top inner-bevel highlight.
* **Hover:** Deepens to `#0369A1`, subtle upward translation (`translateY(-1px)`), glow shadow (`box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35)`).
* **Focus:** Visible `2px` focus ring with `2px` offset (`outline: 2px solid #00D2FF; outline-offset: 2px;`).
* **Minimum Dimensions:** Min-height `44px`, min-width `44px` for touch targets.

#### Secondary Button ("Ghost Steel" / "Navy Hollow")
* **On Dark Canvas:** Transparent background with `1px` border `rgba(255, 255, 255, 0.2)`, text `#F8FAFC`. Hover: `rgba(255, 255, 255, 0.08)` background, border `rgba(255, 255, 255, 0.4)`.
* **On Light Canvas:** Transparent background with `1px` border `rgba(15, 23, 42, 0.2)`, text `#0F172A`. Hover: `rgba(15, 23, 42, 0.04)` background.

#### Text Link / Arrow CTA
* Inline text with an animated chevron arrow (`->`), moving `3px` to the right on container hover.

### 5.2 Cards & Bento Surfaces

#### Enterprise Dark Card
* **Background:** `rgba(22, 34, 56, 0.7)` with backdrop filter blur (`backdrop-filter: blur(12px)`).
* **Border:** `1px solid rgba(255, 255, 255, 0.1)`.
* **Corner Radius:** `12px` (`rounded-xl`).
* **Hover State:** Border transitions to `rgba(0, 210, 255, 0.4)`, subtle lift (`translateY(-2px)`).

#### Light Editorial Card
* **Background:** `#FFFFFF` or `#F8FAFC`.
* **Border:** `1px solid rgba(15, 23, 42, 0.08)`.
* **Shadow:** Ambient soft diffusion `0 4px 20px rgba(15, 23, 42, 0.04)`.
* **Hover State:** Border transitions to `rgba(2, 132, 199, 0.3)`, shadow deepens slightly.

### 5.3 Category & Complexity Badges (Pills)
* **Dark Surface Badge:** Background `rgba(0, 210, 255, 0.1)`, text `#00D2FF`, border `1px solid rgba(0, 210, 255, 0.25)`, border radius `9999px` (full pill), uppercase tracking `+0.05em`, font size `12px`.
* **Light Surface Badge:** Background `rgba(2, 132, 199, 0.08)`, text `#0284C7`, border `1px solid rgba(2, 132, 199, 0.2)`.

---

## 6. Navigation & Footer Architecture

### 6.1 Enterprise Header
- **Height:** `72px` (`4.5rem`).
- **Position:** Fixed / sticky at top with z-index `50`.
- **Background:** Starts transparent over dark hero, smoothly transitions to `rgba(10, 15, 23, 0.92)` with `backdrop-filter: blur(16px)` and a subtle `1px` bottom border upon scrolling.
- **Elements:**
  1. **Brand Logo:** Orva Networks SVG logomark + wordmark.
  2. **Primary Navigation Links:**
     - Solutions *(Triggers Mega-Menu)*
     - Enterprise Networking
     - Cybersecurity
     - Wireless & Smart Campus
     - Industrial & Utility IT
     - Global Deployments
     - Industries
     - About Us
  3. **Action CTA:** High-contrast "Contact Expert" or "Request Consultation" button.
  4. **Mobile Hamburger Button:** Accessible `<button>` (`aria-expanded`, min 44x44px).

### 6.2 Solutions Mega-Menu Architecture (Infoblox-Inspired)
- Hover/click disclosure on "Solutions" reveals a 4-column panel:
  - **Column 1 (Core Architectures):** Enterprise Networking, Next-Gen Switching & Routing, Cloud-Managed WAN.
  - **Column 2 (Zero Trust & Security):** DNS Defense & Threat Shield, Network Access Control (NAC), OT/SCADA Isolation.
  - **Column 3 (Wireless & Facility):** Wi-Fi 6E Campus Infrastructure, High-Density Mesh, Smart Sensor IoT.
  - **Column 4 (Featured Case Highlight):** Highlighting defense/aerospace infrastructure validation with direct link to case studies.

### 6.3 Enterprise Multi-Column Footer
- **Background:** Deepest Obsidian `#0A0F17`.
- **Top Bar:** Quick contact row (`info@orvanetworks.com`, `080-41161040`, Bangalore HQ) and newsletter capture form.
- **5-Column Link Matrix:**
  1. **Company:** About Us, Leadership, Certifications, Defense & Enterprise Clients, Careers, Contact Us.
  2. **Solutions:** Enterprise Networking, Cybersecurity, Wireless & Smart Campus, Industrial & Utility IT.
  3. **Industry Verticals:** Aerospace & Defense, Energy & Utilities, Healthcare, Manufacturing, Smart Warehousing.
  4. **Deployments & Case Studies:** Defense Installations, Smart Campus rollouts, Global Edge architecture.
  5. **Legal & Compliance:** Privacy Policy, Terms of Service, ISO 27001 Certification, Security Compliance.
- **Bottom Bar:** Copyright, Bangalore registration notation (Est. 2008), Social channels (LinkedIn, X).

---

## 7. Motion & Animation Directives

Aligned strictly with Google's Modern Web Guidance (`motion`):
- **Compositor Exclusivity:** All animations use `transform: translate3d(...)`, `scale()`, and `opacity`. No layout recalculations.
- **Discrete Entry/Exit:** Menus and modal backdrops utilize `@starting-style` and `transition-behavior: allow-discrete` for fluid, non-blocking native mounting.
- **Accessible Motion:**
  - Standard duration: `150ms – 250ms` with `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo).
  - Continuous marquees (Client logos) include an accessible pause button (`WCAG 2.2.2`).
  - Strict compliance with `@media (prefers-reduced-motion: reduce)`: movement is eliminated; only instantaneous opacity fades are preserved.
