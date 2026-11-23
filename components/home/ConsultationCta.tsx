"use client";

import React from "react";
import Link from "next/link";

export function ConsultationCta() {
  return (
    <section className="bg-[#070D18] py-24 lg:py-32 text-white relative overflow-hidden border-t border-white/10">
      {/* Ambient radial glow */}
      <div 
        className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-gradient-to-r from-[#00C875]/15 to-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Giant "Let's talk" Headline (Infoblox Style) */}
          <div className="lg:col-span-5">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none">
              Let&apos;s talk
            </h2>
          </div>

          {/* Right Column: Supporting Description & Emerald Pill Button */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
              Connect with Orva Networks&apos; senior network architects and IT management consultants to audit, design, or modernize your enterprise infrastructure.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#00C875] text-[#070C14] font-bold text-base hover:bg-[#00E585] transition-all duration-200 shadow-[0_0_30px_rgba(0,200,117,0.3)] hover:shadow-[0_0_40px_rgba(0,200,117,0.5)] group"
              >
                <span>Schedule Consultation</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <a
                href="tel:08041161040"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-base border border-white/15 transition-colors"
              >
                <svg className="w-4 h-4 text-[#00C875]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call NOC: 080-41161040</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-400 font-mono space-y-1">
              <p>Corporate HQ: 69, Maruthi Layout, 7th Cross, Basaveshwaranagar, Bengaluru, Karnataka 560079</p>
              <p>Email: info@orvanetworks.com • 24/7 Service Desk &amp; Remote Network Monitoring</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
