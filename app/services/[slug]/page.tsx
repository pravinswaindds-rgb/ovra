import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getServiceDetail,
  sidebarServicesList,
  detailedServices,
  allServiceSlugs,
  type ServiceDetailItem,
} from "@/data/services-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const formatTitle = (slug: string) =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Generate static params for all known services
export async function generateStaticParams() {
  const slugs = new Set<string>();

  // Add all services from known slugs list
  allServiceSlugs.forEach((s) => slugs.add(s));

  // Add all detailed services & aliases
  Object.values(detailedServices).forEach((item) => {
    slugs.add(item.slug);
    if (item.aliases) {
      item.aliases.forEach((a) => slugs.add(a));
    }
  });

  // Add sidebar items
  sidebarServicesList.forEach((s) => {
    slugs.add(s.slug);
  });

  return Array.from(slugs).map((slug) => ({ slug }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  const title = detail?.title || formatTitle(slug);
  const desc =
    detail?.metaDescription ||
    `Enterprise ${title} solutions and network infrastructure from Orva Networks.`;

  return {
    title: `${title} | Orva Networks`,
    description: desc,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // 1. Check if it's one of the detailed services from user screenshots
  let service: ServiceDetailItem | null = getServiceDetail(slug);

  // 2. Fallback to known services list if it's another card
  if (!service) {
    if (allServiceSlugs.includes(slug) || sidebarServicesList.some((s) => s.slug === slug)) {
      const title = formatTitle(slug);
      service = {
        id: slug,
        slug: slug,
        title: title,
        category: "Networking",
        tagline: `Enterprise-grade ${title} engineered for reliability, security, and scalability.`,
        mainHeadline: `Advanced ${title} for Modern Enterprises`,
        paragraphs: [
          `At Orva Networks, we provide tailored ${title} designed to keep your infrastructure resilient, secure, and ready for future growth. Starting at the Test Bed phase, our engineers work alongside your IT team to optimize configurations and guarantee seamless integration with zero operational disruption.`,
          `Our solutions are built to ensure maximum uptime, data integrity, and scalability, giving you full control over your digital environment. Whether your business runs on-premise, in the cloud, or through a hybrid model, Orva ensures your infrastructure performs at peak efficiency.`,
        ],
        secondaryHeadline: "Enterprise-Grade Reliability & Performance",
        secondaryParagraphs: [
          "Our certified network engineers and 24/7 Service Desk ensure your deployments maintain maximum uptime, proactive fault monitoring, and industry-standard compliance.",
        ],
        conclusion: `Empower your enterprise with Orva's ${title} – scalable, dependable, and future-ready.`,
        metaDescription: `Enterprise ${title} from Orva Networks.`,
      };
    } else {
      notFound();
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* 1. Hero Header Banner with Infoblox Theme & Breadcrumbs */}
      <section className="bg-gradient-to-b from-[#050A12] via-[#070D18] to-[#0B1526] py-16 lg:py-20 text-white relative overflow-hidden border-b border-white/10">
        {/* Ambient Glows */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#00C875]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 right-10 w-80 h-80 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#00E599] uppercase block mb-3">
                {service.category} SOLUTION
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                {service.title}
              </h1>

              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                <Link href="/" className="hover:text-[#00C875] transition-colors flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#00C875]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Home</span>
                </Link>
                <span className="text-slate-600">/</span>
                <Link href="/services" className="hover:text-[#00C875] transition-colors">
                  Services
                </Link>
                <span className="text-slate-600">/</span>
                <span className="text-[#00C875] font-semibold">{service.title}</span>
              </nav>
            </div>

            {/* Quick Action Button in Header */}
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00C875] text-[#070C14] font-bold text-sm sm:text-base hover:bg-[#00E585] transition-all shadow-[0_0_20px_rgba(0,200,117,0.3)]"
              >
                <span>Request Consultation</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Sidebar Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* Left Column: Full Content from user screenshot (70% width) */}
            <main className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
                
                {/* Main Headline */}
                {service.mainHeadline && (
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
                    {service.mainHeadline}
                  </h2>
                )}

                {/* Paragraphs */}
                <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
                  {service.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Key Highlights Section (if applicable, e.g. Cloud Dashboard & DNS Filtering) */}
                {service.highlights && service.highlights.length > 0 && (
                  <div className="my-10 p-6 sm:p-8 rounded-2xl bg-emerald-50/50 border border-[#00C875]/25">
                    <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00C875]" />
                      <span>{service.highlightsHeading || "Key Highlights:"}</span>
                    </h3>
                    <ul className="space-y-3.5">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-base text-slate-700">
                          <span className="w-5 h-5 rounded-full bg-[#00C875]/20 text-[#00875A] flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Secondary Headline (e.g. Server Solutions) */}
                {service.secondaryHeadline && (
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-10 mb-6">
                    {service.secondaryHeadline}
                  </h3>
                )}

                {/* Secondary Paragraphs */}
                {service.secondaryParagraphs && service.secondaryParagraphs.length > 0 && (
                  <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed mt-4">
                    {service.secondaryParagraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                )}

                {/* Conclusion Callout Box */}
                {service.conclusion && (
                  <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-[#070D18] text-white border-l-4 border-[#00C875] shadow-lg">
                    <p className="text-base sm:text-lg font-semibold text-emerald-400">
                      {service.conclusion}
                    </p>
                  </div>
                )}

                {/* Bottom Direct CTA Box */}
                <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#00875A] font-bold block mb-1">
                      Ready to Deploy?
                    </span>
                    <h4 className="text-lg font-bold text-slate-900">
                      Get a Custom Architecture Proposal
                    </h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      href="/contact"
                      className="px-6 py-3 rounded-full bg-[#00C875] text-[#070C14] font-bold text-sm hover:bg-[#00E585] transition-all shadow-sm"
                    >
                      Book Free Demo
                    </Link>
                    <a
                      href="tel:08041161040"
                      className="px-5 py-3 rounded-full bg-slate-100 text-slate-800 font-semibold text-sm hover:bg-slate-200 transition-colors"
                    >
                      080-41161040
                    </a>
                  </div>
                </div>

              </div>
            </main>

            {/* Right Column: Categories Sidebar (30% width, matching user screenshots) */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Categories Navigation Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm sticky top-28">
                
                {/* Header in Theme Style */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-[#00C875]" />
                    <span>Categories</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">
                    Directory
                  </span>
                </div>

                {/* Sidebar Service Links */}
                <div className="space-y-2">
                  {sidebarServicesList.map((item) => {
                    const isActive =
                      service.slug === item.slug ||
                      service.id === item.slug ||
                      service.aliases?.includes(item.slug);

                    return (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className={`block w-full text-left px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-[#00C875] text-[#070C14] shadow-md shadow-[#00C875]/20 font-bold scale-[1.02]"
                            : "bg-slate-50 text-slate-700 hover:bg-emerald-50/60 hover:text-[#00875A] border border-slate-200/70"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          <span className={`text-xs ${isActive ? "text-[#070C14]" : "text-slate-400"}`}>
                            {isActive ? "●" : "→"}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Quick Consultation Callout Box in Sidebar */}
                <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-[#070D18] to-[#0A182F] text-white border border-white/10">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00E599] block mb-2">
                    TECHNICAL DESK
                  </span>
                  <h4 className="text-base font-bold text-white mb-2 leading-snug">
                    Need Custom Mesh Architecture?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Speak directly with our senior Bangalore network engineers.
                  </p>
                  <a
                    href="tel:08041161040"
                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-xl bg-[#00C875] text-[#070C14] font-bold text-xs hover:bg-[#00E585] transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call 080-41161040</span>
                  </a>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}
