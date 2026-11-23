"use client";

import React from "react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-[#070D18] pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden text-white border-b border-white/5">
      {/* Background ambient radial glow */}
      <div 
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#00C875]/15 via-[#00D2FF]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div 
        className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-[#00875A]/10 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Exact Headline from orvanetworks.com */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00E599] px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              ORVA NETWORKS PVT LTD • EST. 2008 BANGALORE
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[66px] font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
              Smart Network Infrastructure for a{" "}
              <span className="bg-gradient-to-r from-[#00E599] via-[#00C875] to-[#00D2FF] bg-clip-text text-transparent">
                Smarter World
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-emerald-400 font-semibold mb-4">
              Future-Ready Networks Built for Speed, Security &amp; Scalability
            </p>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Orva Networks Private Limited is a trusted provider of advanced network infrastructure, cybersecurity, and IT management consulting services. We specialize in delivering comprehensive, future-ready solutions that keep organizations connected, secure, and scalable.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#00C875] text-[#070C14] font-bold text-base hover:bg-[#00E585] transition-all duration-200 shadow-[0_0_35px_rgba(0,200,117,0.35)] hover:shadow-[0_0_45px_rgba(0,200,117,0.5)] group"
              >
                <span>Get Started</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-base border border-white/15 hover:border-white/30 transition-all duration-200"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Bottom Proof Metric Badges */}
            <div className="mt-12 pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00C875]" />
                <span className="text-slate-200">200+ Enterprise Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
                <span className="text-slate-200">50+ Qualified Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFAE00]" />
                <span className="text-slate-200">90,000+ Projects Complete</span>
              </div>
            </div>
          </div>

          {/* Right Column: Isometric Glowing Diamond Prism Visual (Infoblox Style) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              
              {/* Outer Glowing Diamond Frame */}
              <div className="absolute inset-4 rounded-[40px] rotate-45 border-2 border-[#00C875]/40 bg-gradient-to-br from-[#00C875]/10 via-[#00D2FF]/5 to-transparent backdrop-blur-sm shadow-[0_0_50px_rgba(0,200,117,0.2)] animate-pulse" />
              
              {/* Inner Diamond Border with Cyan Highlight */}
              <div className="absolute inset-10 rounded-[30px] rotate-45 border border-[#00D2FF]/50 bg-[#070D18]/80 pointer-events-none" />

              {/* 3D Isometric Network Topology Graphic */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8">
                
                <svg viewBox="0 0 400 320" className="w-full h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
                  {/* Isometric Ground Planes */}
                  <polygon points="200,60 340,140 200,220 60,140" fill="#0C1726" stroke="#00C875" strokeWidth="1.5" strokeOpacity="0.4" />
                  <polygon points="200,120 300,180 200,240 100,180" fill="#112238" stroke="#00D2FF" strokeWidth="1.2" strokeOpacity="0.6" />

                  {/* Interconnecting Circuit Lines with Pulses */}
                  <line x1="200" y1="90" x2="150" y2="150" stroke="#00E599" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                  <line x1="200" y1="90" x2="250" y2="150" stroke="#00E599" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                  <line x1="150" y1="150" x2="200" y2="210" stroke="#00D2FF" strokeWidth="2" />
                  <line x1="250" y1="150" x2="200" y2="210" stroke="#00D2FF" strokeWidth="2" />

                  {/* Core Switch Node (Top Center) */}
                  <g transform="translate(170, 60)">
                    <rect width="60" height="28" rx="6" fill="#00C875" className="shadow-lg" />
                    <text x="30" y="17" fill="#070C14" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">CORE SPINE</text>
                    <circle cx="12" cy="14" r="3" fill="#FFFFFF" />
                    <circle cx="48" cy="14" r="3" fill="#FFFFFF" />
                  </g>

                  {/* Zero-Trust Shield Node (Left) */}
                  <g transform="translate(100, 135)">
                    <rect width="70" height="28" rx="6" fill="#00D2FF" />
                    <text x="35" y="17" fill="#070C14" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ZERO-TRUST</text>
                  </g>

                  {/* Campus Cloud Fabric (Right) */}
                  <g transform="translate(230, 135)">
                    <rect width="70" height="28" rx="6" fill="#00E599" />
                    <text x="35" y="17" fill="#070C14" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">CAMPUS OT</text>
                  </g>

                  {/* Distributed Data Center Gateway (Bottom) */}
                  <g transform="translate(165, 195)">
                    <rect width="70" height="28" rx="6" fill="#0F1F35" stroke="#00E599" strokeWidth="1.5" />
                    <text x="35" y="17" fill="#00E599" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">GATEWAY</text>
                  </g>
                </svg>

                {/* Live Real-time Status Card overlay */}
                <div className="absolute -bottom-2 bg-[#050A12]/95 border border-[#00C875]/40 rounded-xl px-4 py-2.5 backdrop-blur-md shadow-2xl flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00C875] animate-ping" />
                  <div className="text-left font-mono">
                    <p className="text-[11px] text-white font-bold">24/7 BANGALORE NOC: ACTIVE</p>
                    <p className="text-[10px] text-slate-400">080-41161040 • Proactive Telemetry</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
