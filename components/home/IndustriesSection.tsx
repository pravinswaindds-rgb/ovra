"use client";

import React from "react";
import Link from "next/link";

const industries = [
  {
    title: "Manufacturing & Industrial Automation",
    badge: "RUGGEDIZED OT / SCADA",
    desc: "Industrial Ethernet and wireless coverage for automated factory floors, AGVs, robotics, and PLC control networks with sub-millisecond deterministic latency.",
    icon: "🏭",
  },
  {
    title: "Corporate / SMEs",
    badge: "HIGH-DENSITY CAMPUS",
    desc: "Enterprise LAN/WAN backbones, structured cabling, Wi-Fi 6E/7, and cloud-managed routing ensuring seamless employee productivity and zero downtime.",
    icon: "🏢",
  },
  {
    title: "Retail & Commercial Networks",
    badge: "PCI-DSS SECURE",
    desc: "High-security point-of-sale network isolation, secure guest Wi-Fi captive portals, and centralized multi-branch cloud dashboard management.",
    icon: "🛒",
  },
  {
    title: "Healthcare & Medical Equipment Systems",
    badge: "HIPAA / ISO 27799",
    desc: "Dedicated VLAN micro-segmentation for patient telemetry monitors, imaging suites, and EHR records with 100% wireless roaming continuity.",
    icon: "🏥",
  },
  {
    title: "Logistics & Smart Warehousing",
    badge: "HIGH-CEILING RF COVERAGE",
    desc: "Deep RF penetration through metal-rack warehouse aisles, supporting automated barcode scanners, autonomous forklifts, and inventory sensors.",
    icon: "📦",
  },
  {
    title: "Energy & Utilities",
    badge: "IEC 61850 SUBSTATION",
    desc: "Substation network hardening, power grid SCADA telemetry, and air-gapped critical infrastructure protection for public energy providers.",
    icon: "⚡",
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-20 lg:py-28 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
            VERTICAL ARCHITECTURES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From smart factories to aerospace commands, Orva delivers tailored, compliant network infrastructure engineered for unique operational demands.
          </p>
        </div>

        {/* 6 Visual Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#00875A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{ind.icon}</span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-[#006C44] border border-emerald-100">
                    {ind.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00875A] transition-colors">
                  {ind.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {ind.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00875A] hover:text-[#006C44] group-hover:translate-x-1 transition-transform"
                >
                  <span>View Vertical Specifications →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
