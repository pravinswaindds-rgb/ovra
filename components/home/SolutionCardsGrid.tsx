"use client";

import React from "react";
import Link from "next/link";

const solutions = [
  {
    title: "Networking Solutions, Routing & Structured Cabling",
    category: "ENTERPRISE NETWORKING",
    description:
      "Robust networking solutions including structured cabling, switches, smart routers, and network optimization tools to ensure high stability, sub-millisecond latency, and deterministic scalability.",
    href: "/solutions/enterprise-networking",
    linkText: "Explore Networking Solutions →",
    tag: "L2/L3 Spine & Leaf",
    icon: (
      <svg className="w-8 h-8 text-[#00875A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" strokeDasharray="3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v5l3 3" />
        <circle cx="12" cy="12" r="3" fill="#00875A" />
      </svg>
    ),
  },
  {
    title: "AI-Powered DNS Filtering & Network Access Control",
    category: "CYBERSECURITY & ZERO TRUST",
    description:
      "Authenticate, monitor, and manage every endpoint. Our NAC and AI-powered DNS filtering solutions enforce granular access policies, block malware, and ensure only compliant devices connect.",
    href: "/solutions/cybersecurity",
    linkText: "Explore Cybersecurity & NAC →",
    tag: "802.1X & DNS Shield",
    icon: (
      <svg className="w-8 h-8 text-[#00875A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "High-Density Wireless Solutions & Campus Connectivity",
    category: "WIRELESS & SMART CAMPUS",
    description:
      "Seamless, enterprise-grade wireless connectivity across offices, campuses, and remote sites. Tri-band Wi-Fi 6E/7, RF interference mitigation, and seamless zero-packet-drop roaming.",
    href: "/solutions/wireless-smart-campus",
    linkText: "Explore Campus Wireless →",
    tag: "Wi-Fi 6E/7 & IoT Mesh",
    icon: (
      <svg className="w-8 h-8 text-[#00875A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    title: "Industrial OT Solutions, SCADA Hardening & Edge IT",
    category: "INDUSTRIAL & UTILITY IT",
    description:
      "Bridging the gap between IT and industrial operations with secure, scalable OT solutions. We help industries monitor, control, and optimize critical substation systems with real-time insights.",
    href: "/solutions/industrial-utility-it",
    linkText: "Explore Industrial & OT Solutions →",
    tag: "IEC 61850 & Air-Gap",
    icon: (
      <svg className="w-8 h-8 text-[#00875A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export function SolutionCardsGrid() {
  return (
    <section className="bg-white py-20 lg:py-28 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Infoblox Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
            CORE SERVICES CATALOG
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Future-ready networking and cybersecurity solutions that modernize and protect your business
          </h2>
          <p className="text-base text-slate-600 mt-4 max-w-2xl mx-auto">
            From test bed phase consultation to full-scale multi-campus deployment, Orva Networks designs, deploys, and manages mission-critical infrastructure.
          </p>
        </div>

        {/* 4 Clean Minimalist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item) => (
            <div
              key={item.category}
              className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#00875A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Circular Wireframe Icon with subtle green tint */}
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#00875A] uppercase">
                    {item.category}
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#00875A] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00875A] hover:text-[#006C44] group-hover:translate-x-1 transition-all"
                >
                  <span>{item.linkText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
