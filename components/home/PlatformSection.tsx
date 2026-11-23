"use client";

import React, { useState } from "react";
import Link from "next/link";

const platformLayers = [
  {
    id: "telemetry",
    title: "Intelligent Observability & Automated Orchestration",
    color: "#00E599",
    tag: "TELEMETRY & AIOPS LAYER",
    desc: "Real-time flow inspection, automated anomaly detection, and cross-domain policy synchronization across multi-campus sites.",
  },
  {
    id: "security",
    title: "Hardware-Enforced Zero-Trust & Dynamic NAC",
    color: "#00D2FF",
    tag: "DEFENSE & MICRO-SEGMENTATION",
    desc: "802.1X dynamic profiling, automated VLAN isolation, and strict protocol filtering preventing lateral cyber spread.",
  },
  {
    id: "fabric",
    title: "Carrier-Grade Core Switching & Routing Fabrics",
    color: "#FFAE00",
    tag: "DETERMINISTIC NETWORK BACKBONE",
    desc: "Non-blocking multi-terabit spine-and-leaf architecture with sub-millisecond failover and dual-redundant hardware.",
  },
];

const capabilities = [
  { label: "Enterprise-grade", detail: "99.999% SLA Uptime" },
  { label: "Extensible & Open", detail: "Multi-vendor Interoperability" },
  { label: "High Performance", detail: "Deterministic Sub-ms Latency" },
  { label: "Actionable Intelligence", detail: "Real-time Packet Telemetry" },
  { label: "Air-Gap Ready", detail: "Defense & OT Compliance" },
];

export function PlatformSection() {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <section id="platform" className="bg-[#070D18] py-24 lg:py-32 text-white relative overflow-hidden border-b border-white/10">
      {/* Background Glow Accents */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#00C875]/10 via-[#00D2FF]/10 to-[#FFAE00]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00E599] block mb-3">
            UNIFIED ENTERPRISE ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Run as one on the Orva Architecture
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Eliminate fragmented vendor silos. Orva unifies core switching, zero-trust cybersecurity, and intelligent campus telemetry into a single, deterministically reliable network foundation.
          </p>
        </div>

        {/* 3D Isometric Layered Prism Centerpiece (Infoblox Style) */}
        <div className="max-w-4xl mx-auto relative mb-16">
          <div className="bg-[#0A1220]/80 rounded-3xl border border-white/10 p-8 sm:p-12 backdrop-blur-md shadow-2xl flex flex-col lg:flex-row items-center gap-10">
            
            {/* Visual 3D Layered Isometric Cube Graphics */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <svg viewBox="0 0 360 300" className="w-full max-w-[320px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
                
                {/* Layer 3: Top (Telemetry - Green) */}
                <g 
                  className="cursor-pointer transition-transform hover:-translate-y-2"
                  onClick={() => setActiveLayer(0)}
                >
                  <polygon points="180,30 280,85 180,140 80,85" fill="#00E599" fillOpacity="0.85" stroke="#FFFFFF" strokeWidth="1.5" />
                  <polygon points="80,85 180,140 180,165 80,110" fill="#00875A" />
                  <polygon points="280,85 180,140 180,165 280,110" fill="#006C44" />
                  <text x="180" y="90" fill="#070C14" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">OBSERVABILITY &amp; AIOPS</text>
                </g>

                {/* Layer 2: Middle (Security - Cyan) */}
                <g 
                  className="cursor-pointer transition-transform hover:-translate-y-1"
                  onClick={() => setActiveLayer(1)}
                  transform="translate(0, 60)"
                >
                  <polygon points="180,45 280,100 180,155 80,100" fill="#00D2FF" fillOpacity="0.8" stroke="#FFFFFF" strokeWidth="1.5" />
                  <polygon points="80,100 180,155 180,180 80,125" fill="#0284C7" />
                  <polygon points="280,100 180,155 180,180 280,125" fill="#0369A1" />
                  <text x="180" y="105" fill="#070C14" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ZERO-TRUST NAC SHIELD</text>
                </g>

                {/* Layer 1: Base (Network Backbone - Amber) */}
                <g 
                  className="cursor-pointer transition-transform hover:translate-y-1"
                  onClick={() => setActiveLayer(2)}
                  transform="translate(0, 120)"
                >
                  <polygon points="180,60 280,115 180,170 80,115" fill="#FFAE00" fillOpacity="0.85" stroke="#FFFFFF" strokeWidth="1.5" />
                  <polygon points="80,115 180,170 180,195 80,140" fill="#D97706" />
                  <polygon points="280,115 180,170 180,195 280,140" fill="#B45309" />
                  <text x="180" y="120" fill="#070C14" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">CARRIER CORE FABRIC</text>
                </g>
              </svg>
            </div>

            {/* Right Side: Interactive Layer Callouts */}
            <div className="w-full lg:w-1/2 space-y-4">
              {platformLayers.map((layer, index) => {
                const isActive = activeLayer === index;
                return (
                  <div
                    key={layer.id}
                    onClick={() => setActiveLayer(index)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      isActive
                        ? "bg-white/[0.08] border-white/30 shadow-lg"
                        : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: layer.color }}
                      />
                      <span
                        className="text-[11px] font-mono font-bold tracking-wider"
                        style={{ color: layer.color }}
                      >
                        {layer.tag}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{layer.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{layer.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* 5 Circular Capability Checkmark Badges (Infoblox Style) */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-slate-400 mb-8 uppercase tracking-widest font-mono">
            Expand what you can do, not what you have to manage
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {capabilities.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00C875] transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-[#00C875]/20 flex items-center justify-center mb-2.5">
                  <svg className="w-4 h-4 text-[#00E599]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-white mb-1">{item.label}</span>
                <span className="text-[10px] text-slate-400">{item.detail}</span>
              </div>
            ))}
          </div>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-all shadow-lg group"
          >
            <span>Explore the Architecture</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
