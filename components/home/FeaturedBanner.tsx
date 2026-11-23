"use client";

import React from "react";
import Link from "next/link";

export function FeaturedBanner() {
  return (
    <section className="bg-white py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Infoblox Emerald Gradient Banner Card */}
        <div className="bg-gradient-to-r from-[#006C44] via-[#008A56] to-[#00A86B] rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Ambient decorative circle */}
          <div 
            className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Left: Technical Architecture Guide Document Thumbnail */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="w-24 sm:w-28 aspect-[3/4] bg-[#070D18] rounded-xl border border-white/20 p-3 shadow-2xl flex flex-col justify-between transform -rotate-3 hover:rotate-0 transition-transform">
              <div className="space-y-1">
                <div className="w-4 h-4 rounded bg-[#00E599]" />
                <div className="h-1.5 w-12 bg-white/40 rounded" />
                <div className="h-1.5 w-8 bg-white/20 rounded" />
              </div>
              <div className="text-[7px] font-mono text-emerald-300">
                ORVA WHITE PAPER 2026
              </div>
            </div>

            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-200 block mb-1">
                ENGINEERING BLUEPRINT
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                What defines hybrid, resilient and secure?
              </h3>
            </div>
          </div>

          {/* Right: Subtitle & White Pill CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 z-10">
            <p className="text-sm text-emerald-50 max-w-md leading-relaxed hidden xl:block">
              Explore the technical benchmarks, air-gap topologies, and deterministic switching fabrics powering India&apos;s critical infrastructure.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-all shadow-lg shrink-0 group"
            >
              <span>Download Blueprint</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
