"use client";

import React from "react";
import Link from "next/link";

const diamonds = [
  {
    highlight: "85%",
    title: "Reduction in MTTR",
    desc: "Deterministic telemetry isolates link anomalies and fiber cuts within seconds.",
    border: "border-[#00875A]",
  },
  {
    highlight: "70%",
    title: "Automated Device Quarantine",
    desc: "Dynamic 802.1X profiling blocks unauthorized shadow devices before they touch the core.",
    border: "border-slate-300",
  },
  {
    highlight: "ISO 27001",
    title: "Certified Information Security",
    desc: "Strict compliance standards for mission-critical defense and enterprise facilities.",
    border: "border-[#00875A]",
  },
  {
    highlight: "Defense-Grade",
    title: "Air-Gapped Operational Purity",
    desc: "Engineered to satisfy stringent Indian defense, aerospace, and PSU mandates.",
    border: "border-slate-300",
  },
];

export function ProvenValueSection() {
  return (
    <section className="bg-white py-20 lg:py-28 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* Subtle Diamond Grid Background SVG */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern id="diamondGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,0 60,30 30,60 0,30" fill="none" stroke="#000000" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diamondGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Infoblox Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
            PROVEN ENTERPRISE IMPACT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Proven Orva value
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            See how enterprise leaders and government agencies rely on Orva Networks to engineer, scale, and secure their most vital operations.
          </p>
        </div>

        {/* Diamond Wireframe Layout (Infoblox Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diamonds.map((item) => (
            <div
              key={item.title}
              className={`bg-white p-8 rounded-2xl border-2 ${item.border} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6">
                  <div className="w-4 h-4 rotate-45 border-2 border-[#00875A]" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-2 group-hover:text-[#00875A] transition-colors">
                  {item.highlight}
                </div>

                <h3 className="text-base font-bold text-slate-800 mb-3">{item.title}</h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-400">
                Verified Benchmark
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Case Studies Link */}
        <div className="mt-12 text-center">
          <Link
            href="/deployments"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00875A] hover:text-[#006C44] group"
          >
            <span>Explore Enterprise Case Studies &amp; Deployments</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
