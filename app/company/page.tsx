import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company | Orva Networks - Delivering Smart & Secure Enterprise IT",
  description:
    "Learn about Orva Networks' purpose, executive leadership, and journey from 2008 to 2026 delivering advanced IT networks, AI, IoT, cybersecurity, and automation.",
};

interface MilestoneItem {
  year: string;
  title: string;
  headline: string;
  description: string;
  badge: string;
}

const milestones: MilestoneItem[] = [
  {
    year: "2008",
    title: "Foundation & Resilient Networking",
    headline: "The Beginning of Enterprise Infrastructure",
    description:
      "Orva began in 2008 in Bangalore with a clear vision: to make technology smarter, more secure, and easier for businesses. We focused on high-performance structured cabling and core network fabrics.",
    badge: "INCEPTION",
  },
  {
    year: "2014",
    title: "Storage & Datacenter Expansion",
    headline: "Scaling High-Availability Infrastructure",
    description:
      "Expanded into enterprise SAN/NAS storage, on-premise server virtualization, and disaster recovery solutions, helping clients achieve 99.99% operational continuity.",
    badge: "EXPANSION",
  },
  {
    year: "2018",
    title: "Unified Wireless & Campus Telephony",
    headline: "Modernizing Enterprise Communication",
    description:
      "Deployed high-density Wi-Fi networks and IP telephony across multi-branch campuses, integrating commercial AV and video conferencing systems for frictionless collaboration.",
    badge: "CONNECTIVITY",
  },
  {
    year: "2022",
    title: "Cloud NOC & Industrial OT Security",
    headline: "Bespoke OT/IT Convergence",
    description:
      "Launched centralized cloud dashboards and remote management solutions while engineering specialized OT cybersecurity for utilities, smart cities, and manufacturing plants.",
    badge: "CLOUD & OT",
  },
  {
    year: "2026",
    title: "AI-Powered Automation & Zero-Trust",
    headline: "Pioneering Autonomous Enterprise Networks",
    description:
      "Empowering enterprises with predictive AI analytics, automated DNS threat mitigation, and granular Zero-Trust Network Access (ZTNA) — keeping businesses future-ready.",
    badge: "INNOVATION TODAY",
  },
];

const coreValues = [
  {
    title: "Innovation",
    tagline: "Forward-Thinking Architectures",
    description:
      "We embrace cutting-edge AI, IoT, and cloud technologies to engineer proactive systems that evolve ahead of tomorrow's cybersecurity and bandwidth challenges.",
    icon: (
      <svg className="w-6 h-6 text-[#00875A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Integrity & Reliability",
    tagline: "Uncompromised Operational Trust",
    description:
      "From rigorous pre-deployment configurations in our Test Bed phase to 24/7 Service Desk monitoring, we deliver dependable solutions backed by stringent enterprise SLAs.",
    icon: (
      <svg className="w-6 h-6 text-[#00875A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Customer Co-Creation",
    tagline: "Tailored to Your Strategic Goals",
    description:
      "We don't offer generic out-of-the-box packages. We partner deeply with internal IT teams to design bespoke architectures matching exact business workflows.",
    icon: (
      <svg className="w-6 h-6 text-[#00875A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* 1. Hero Header Banner with Dark Infoblox Enterprise Theme & Breadcrumbs */}
      <section className="bg-gradient-to-b from-[#050A12] via-[#070D18] to-[#0B1526] py-20 lg:py-24 text-white relative overflow-hidden border-b border-white/10">
        {/* Radial Ambient Glows */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00C875]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 right-10 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00E599] uppercase block mb-3">
            ABOUT ORVA NETWORKS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Company
          </h1>

          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-sm text-slate-400 font-medium"
          >
            <Link
              href="/"
              className="hover:text-[#00C875] transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 text-[#00C875]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-[#00C875] font-semibold">Company</span>
          </nav>
        </div>
      </section>

      {/* 2. Section: Our Purpose (Exact text & visual layout from user screenshot) */}
      <section className="py-20 lg:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block">
                MISSION & VISION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Our Purpose
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  At Orva, our purpose is to deliver smart, secure, and connected technology solutions that empower businesses.
                </p>
                <p>
                  We help organizations build reliable IT infrastructure, integrate IoT and smart devices, leverage AI for
                  smarter decisions, and automate operations. Our goal is simple: to make your business more efficient,
                  future-ready, and fully protected.
                </p>
              </div>

              {/* 3 Value Metrics */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#00875A] block font-mono">15+</span>
                  <span className="text-xs text-slate-500 font-medium">Years Experience</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#00875A] block font-mono">99.99%</span>
                  <span className="text-xs text-slate-500 font-medium">Uptime Guarantee</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#00875A] block font-mono">24/7</span>
                  <span className="text-xs text-slate-500 font-medium">Service Desk</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Glowing Cyber Padlock & Data Sphere */}
            <div className="lg:col-span-5 relative group">
              <div
                className="absolute -inset-2 bg-gradient-to-r from-[#00C875]/25 to-[#00D2FF]/25 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative h-[320px] sm:h-[380px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-xl">
                <Image
                  src="/images/company/purpose-lock.jpg"
                  alt="Orva Networks Secure Infrastructure Purpose"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Section: Leadership (Exact Featured Card from user screenshot) */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#070C14] via-[#0A1628] to-[#050A12] border border-[#00C875]/30 p-8 sm:p-12 lg:p-14 text-white shadow-2xl">
            {/* Ambient Lighting */}
            <div
              className="absolute -top-24 right-0 w-[450px] h-[300px] bg-[#00C875]/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 left-0 w-[450px] h-[300px] bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              
              {/* Media: Leadership Team around Futuristic Table */}
              <div className="lg:col-span-5 relative group">
                <div className="relative h-[280px] sm:h-[340px] rounded-2xl overflow-hidden border border-white/20 bg-slate-900 shadow-xl">
                  <Image
                    src="/images/company/leadership-team.jpg"
                    alt="Orva Networks Executive Leadership Team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00C875] block">
                  EXECUTIVE STEWARDSHIP
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Leadership
                </h3>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                  Orva's leadership team brings deep expertise across IT, networking, AI, IoT, and automation.
                </p>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  We are dedicated to building smart, secure, and reliable technology solutions that drive business growth
                  and keep our clients ahead of the curve. Guided by innovation, integrity, and a strong focus on customer
                  success, our leaders ensure Orva remains a trusted partner in an evolving digital world.
                </p>
                
                <div className="pt-2 flex items-center gap-6 text-sm text-slate-300 font-mono">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00C875]" />
                    Client-First Innovation
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
                    Enterprise Governance
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Our Journey From Vision to Reality – and Beyond (Timeline Milestones) */}
      <section className="py-20 lg:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
              ESTABLISHED 2008 – 2026
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              Our Journey From Vision to Reality — and Beyond
            </h2>
            <div className="space-y-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                Orva began in 2008 with a clear vision: to make technology smarter, more secure, and easier for businesses.
              </p>
              <p>
                From building resilient IT networks to delivering advanced solutions in AI, IoT, cybersecurity, and
                automation, we have grown by solving real-world challenges with innovation and trust.
              </p>
              <p className="font-semibold text-[#00875A]">
                Today, Orva empowers businesses to stay connected, protected, and future-ready. And our journey is only just beginning.
              </p>
            </div>
          </div>

          {/* Timeline Milestones Grid */}
          <div className="relative">
            {/* Center Vertical Connecting Line for Desktop */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#00C875] via-slate-300 to-[#00875A]" />

            <div className="space-y-10 sm:space-y-12">
              {milestones.map((milestone, idx) => {
                const isEven = idx % 2 === 1;

                return (
                  <div
                    key={milestone.year}
                    className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                  >
                    {/* Node on Center Line */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#00C875] shadow-md items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-[#00875A]" />
                    </div>

                    {/* Left or Right Card */}
                    <div
                      className={`${
                        isEven ? "lg:col-start-2 lg:pl-10" : "lg:col-start-1 lg:pr-10 lg:text-right"
                      }`}
                    >
                      <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-[#00C875] hover:shadow-md transition-all duration-300 group">
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            isEven ? "justify-start" : "lg:justify-end"
                          }`}
                        >
                          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#00C875]/15 text-[#00875A] border border-[#00C875]/25">
                            {milestone.badge}
                          </span>
                          <span className="text-2xl font-black font-mono text-slate-900 group-hover:text-[#00875A] transition-colors">
                            {milestone.year}
                          </span>
                        </div>

                        <h4 className="text-xl font-bold text-slate-900 mb-1 leading-snug">
                          {milestone.title}
                        </h4>
                        <p className="text-sm font-semibold text-[#00875A] mb-3">
                          {milestone.headline}
                        </p>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Section: Core Pillars (3 Cards at bottom from image) */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
              FOUNDATIONAL PILLARS
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Values That Drive Every Orva Solution
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:border-[#00C875] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#00C875]/10 border border-[#00C875]/25 flex items-center justify-center mb-6 group-hover:bg-[#00C875] group-hover:text-slate-950 transition-colors">
                    {val.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#00875A] transition-colors mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs font-mono font-semibold text-[#00875A] mb-4 uppercase tracking-wider">
                    {val.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-mono font-semibold text-slate-500 group-hover:text-[#00875A] transition-colors">
                  <span>ORVA STANDARD</span>
                  <span className="ml-auto">✓ VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bangalore HQ Governance & Call-to-Action */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#070C14] border border-white/10 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00C875]">
                HEADQUARTERED IN BANGALORE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to modernise your enterprise infrastructure?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                Speak directly with Orva Networks engineering leadership to assess your network, security, and cloud scalability.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/#contact"
                className="px-6 py-3.5 rounded-xl bg-[#00C875] hover:bg-[#00E585] text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-[#00C875]/25 transition-all"
              >
                Contact Leadership
              </Link>
              <a
                href="tel:08041161040"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm sm:text-base transition-all"
              >
                080-41161040
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
