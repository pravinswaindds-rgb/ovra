"use client";

import React from "react";
import Link from "next/link";

const reasons = [
  {
    title: "Always-On Intelligence",
    text: "Our proactive 24/7 service desk and monitoring ensure your systems run smoothly. From incident handling to server health, we keep your enterprise connected and productive without interruption.",
    badge: "24/7 SERVICE DESK",
    border: "border-emerald-500/40",
    bg: "bg-emerald-50/50",
  },
  {
    title: "Future-Ready Security",
    text: "Protect your data and devices with next-generation security. We combine AI-powered DNS filtering, granular NAC, and endpoint management to defend against evolving cyber threats.",
    badge: "ZERO-TRUST NAC",
    border: "border-slate-200",
    bg: "bg-white",
  },
  {
    title: "Scalable Innovation",
    text: "From smart building IoT to hybrid cloud integrations, our solutions are engineered to scale. We help you embrace emerging technologies while maintaining operational stability and cost efficiency.",
    badge: "CLOUD & IOT MESH",
    border: "border-slate-200",
    bg: "bg-white",
  },
];

export function WhyPartnerSection() {
  return (
    <section className="bg-white py-20 lg:py-28 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Network Operations Center (NOC) Graphic */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-[#070D18] p-8 border border-slate-200 shadow-2xl overflow-hidden min-h-[420px] flex flex-col justify-between">
              
              {/* NOC Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00C875] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    ORVA BANGALORE NOC
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400">ONLINE 99.999%</span>
              </div>

              {/* NOC Wall Monitor SVG Grid */}
              <div className="my-6 space-y-3">
                <div className="h-24 rounded-xl bg-white/[0.04] border border-white/10 p-3 flex flex-col justify-between">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>CORE ROUTING &amp; SPINE TELEMETRY</span>
                    <span className="text-[#00E599]">DETERMINISTIC</span>
                  </div>
                  <div className="flex items-end gap-1 h-10 pt-2">
                    {[40, 65, 30, 85, 95, 45, 70, 90, 60, 80, 50, 75, 90, 85, 98, 92].map((val, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#00C875] to-[#00D2FF] rounded-t-sm"
                        style={{ height: `${val}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <p className="text-[10px] font-mono text-slate-400">DNS SHIELD QUERIES</p>
                    <p className="text-xl font-bold font-mono text-white mt-1">4.2M/sec</p>
                    <p className="text-[9px] text-[#00E599] font-mono">0.0ms Query Latency</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <p className="text-[10px] font-mono text-slate-400">NAC ENDPOINT HEALTH</p>
                    <p className="text-xl font-bold font-mono text-white mt-1">100% OK</p>
                    <p className="text-[9px] text-emerald-400 font-mono">Zero Rogue Devices</p>
                  </div>
                </div>
              </div>

              {/* NOC Footnote */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Direct Escalation: 080-41161040</span>
                <span className="text-[#00C875]">Tier-3 Support</span>
              </div>

            </div>
          </div>

          {/* Right Column: Exact 3 Reasons from screenshot */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
              PROVEN VALUE PROPOSITION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
              Why Partner with Orva Networks?
            </h2>

            <div className="space-y-5 w-full">
              {reasons.map((item) => (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl border ${item.border} ${item.bg} shadow-sm hover:shadow-md transition-all duration-200`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-[#006C44]">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00875A] hover:text-[#006C44] group"
              >
                <span>Learn More About Our Team &amp; Experience</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
