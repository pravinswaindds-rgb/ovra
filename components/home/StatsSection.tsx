"use client";

import React from "react";
import Link from "next/link";

const stats = [
  {
    value: "200+",
    label: "CLIENTS",
    subtext: "Enterprise and public-sector organizations trust Orva Networks for mission-critical connectivity.",
  },
  {
    value: "50+",
    label: "QUALIFIED EXPERTS",
    subtext: "Certified network architects, cybersecurity specialists, and systems engineers.",
  },
  {
    value: "10+",
    label: "COUNTRIES SERVED",
    subtext: "Global footprint delivering multi-site enterprise and industrial network deployments.",
  },
  {
    value: "90,000+",
    label: "PROJECTS COMPLETE",
    subtext: "Successful network, server, storage, wireless, and cybersecurity implementations since 2008.",
  },
];

export function StatsSection() {
  return (
    <section className="bg-[#070D18] py-20 lg:py-24 text-white border-b border-white/10 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00C875]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Heading from screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00E599] block mb-2">
            PROVEN TRACK RECORD &amp; EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Skilled Professionals at Your Service
          </h2>
          <p className="text-base text-slate-400 mt-3">
            Decades of combined engineering excellence delivering deterministic performance and rock-solid uptime.
          </p>
        </div>

        {/* 4 Statistics from screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white/[0.03] p-8 rounded-2xl border border-white/10 hover:border-[#00C875] hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between text-center group"
            >
              <div>
                {/* Circular Badge Icon styling */}
                <div className="w-16 h-16 rounded-full bg-[#00C875]/15 border border-[#00C875]/30 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,200,117,0.2)]">
                  <span className="text-xl">🏆</span>
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight text-white mb-2 group-hover:text-[#00E599] transition-colors">
                  {item.value}
                </div>

                <h3 className="text-sm font-bold font-mono tracking-wider text-[#00C875] uppercase mb-3">
                  {item.label}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-slate-400">
                Verified Record
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <Link
            href="/deployments"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00E599] hover:underline uppercase tracking-wider font-mono"
          >
            <span>Explore Case Studies &amp; Global Deployments</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
