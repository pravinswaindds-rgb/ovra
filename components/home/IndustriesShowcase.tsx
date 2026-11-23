import React from "react";
import Link from "next/link";

export function IndustriesShowcase() {
  const industries = [
    {
      title: "Aerospace & Defense",
      tag: "AIR-GAPPED NETWORKS",
      description:
        "High-security campus LANs with strict physical and logical access controls, hardware root-of-trust, and encrypted communications.",
      compliance: "Defense Grade / ISO 27001",
      icon: "🛡️",
    },
    {
      title: "Energy & Utilities",
      tag: "SUBSTATION TELEMETRY",
      description:
        "Purdue model network isolation protecting grid SCADA and real-time remote terminal unit (RTU) data acquisition from malware injection.",
      compliance: "Critical Infrastructure / IEC 62443",
      icon: "⚡",
    },
    {
      title: "Healthcare & Hospitals",
      tag: "IoMT CLINICAL ISOLATION",
      description:
        "Dedicated segmentation for telemetry monitors, imaging suites, and patient EHR records with 100% wireless roaming continuity.",
      compliance: "HIPAA / ISO 27799 Compliant",
      icon: "🏥",
    },
    {
      title: "Manufacturing & Warehousing",
      tag: "RUGGEDIZED OT / AGV",
      description:
        "High-ceiling RF coverage through metal-rack warehouse aisles, supporting automated guided vehicles (AGVs) and assembly line PLCs.",
      compliance: "Industrial Ethernet / Zero Latency",
      icon: "🏭",
    },
  ];

  return (
    <section className="bg-[#0F172A] text-white py-20 lg:py-28 border-b border-white/10" aria-label="Industries We Serve">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase block">
              Vertical Industry Applications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Architected for High-Stakes Environments
            </h2>
          </div>
          <Link
            href="/industries"
            className="text-sm font-semibold text-[#00D2FF] hover:text-sky-300 inline-flex items-center gap-2"
          >
            <span>Explore All Industry Vertical Blueprints</span>
            <span>→</span>
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="p-6 rounded-2xl bg-[#162238]/70 border border-white/10 hover:border-[#00D2FF]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{ind.icon}</span>
                  <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-400/10 border border-emerald-400/20">
                    {ind.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00D2FF] transition-colors mb-2">
                  {ind.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {ind.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400">
                <span>Standard: </span>
                <span className="text-sky-300">{ind.compliance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

