"use client";

import React from "react";
import Link from "next/link";

export function MidCtaBanner() {
  return (
    <section className="bg-gradient-to-r from-[#070D18] via-[#0F1E36] to-[#070D18] py-20 text-white relative overflow-hidden border-y border-white/10">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#00C875]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00E599] uppercase block mb-3">
              CO-CREATING SUCCESS WITH OUR CLIENTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Let&apos;s discuss about how we can help make your business better
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Working together to build smarter, scalable, and secure networks.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#00C875] text-[#070C14] font-bold text-base hover:bg-[#00E585] transition-all duration-200 shadow-[0_0_30px_rgba(0,200,117,0.3)] hover:shadow-[0_0_40px_rgba(0,200,117,0.5)] group"
            >
              <span>Let&apos;s Work Together</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            <a
              href="tel:08041161040"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-base border border-white/15 transition-colors"
            >
              <span>080-41161040</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
