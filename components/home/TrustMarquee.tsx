"use client";

import React from "react";

// Track 1: Public Sector, Defense & Strategic Infrastructure Partners
const row1 = [
  { name: "ISRO", category: "Space & Aerospace Command", badge: "AEROSPACE" },
  { name: "BEL", category: "Bharat Electronics Ltd", badge: "DEFENSE" },
  { name: "BHEL", category: "Bharat Heavy Electricals", badge: "ENERGY" },
  { name: "BEML", category: "Heavy Rail & Mining", badge: "ENGINEERING" },
  { name: "CISCO", category: "Strategic Network Partner", badge: "NETWORKING" },
  { name: "CSC", category: "Common Services Centers", badge: "GOVERNANCE" },
  { name: "HAL", category: "Hindustan Aeronautics Ltd", badge: "AEROSPACE" },
  { name: "L&T", category: "Larsen & Toubro", badge: "INFRASTRUCTURE" },
  { name: "TATA", category: "Enterprise Communications", badge: "ENTERPRISE" },
  { name: "HCLTech", category: "Global Technology Services", badge: "ENTERPRISE" },
  { name: "HONEYWELL", category: "Industrial Automation", badge: "AUTOMATION" },
  { name: "SIEMENS", category: "Smart Infrastructure", badge: "ENERGY" },
];

// Track 2: Enterprise Technology, Cybersecurity & Critical Utility Ecosystem
const row2 = [
  { name: "SCHNEIDER", category: "EcoStruxure Data Centers", badge: "POWER & IT" },
  { name: "ABB", category: "Substation Automation", badge: "UTILITIES" },
  { name: "FORTINET", category: "Security Fabric Partner", badge: "CYBERSECURITY" },
  { name: "ARUBA", category: "Enterprise Campus Wi-Fi", badge: "WIRELESS" },
  { name: "PALO ALTO", category: "Next-Gen Firewall Security", badge: "CYBERSECURITY" },
  { name: "BOSCH", category: "Building Security & IoT", badge: "SMART CAMPUS" },
  { name: "INFOSYS", category: "Enterprise Campus Networks", badge: "ENTERPRISE" },
  { name: "WIPRO", category: "Digital Infrastructure", badge: "ENTERPRISE" },
  { name: "RAILTEL", category: "Telecom & Rail Optical", badge: "TELECOM" },
  { name: "NTPC", category: "Power Generation Grid", badge: "ENERGY" },
  { name: "NHAI", category: "Highway Toll & Fiber IT", badge: "PUBLIC IT" },
  { name: "IOCL", category: "Refinery SCADA Networks", badge: "PETROCHEM" },
];

export function TrustMarquee() {
  return (
    <section className="bg-white py-12 border-y border-slate-200 overflow-hidden relative select-none">
      {/* Bulletproof CSS Animations directly embedded & hoisted by React 19 */}
      <style>{`
        @keyframes orvaScrollLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes orvaScrollRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .orva-marquee-row-1 {
          display: flex;
          width: max-content;
          animation: orvaScrollLeft 32s linear infinite;
          will-change: transform;
        }
        .orva-marquee-row-2 {
          display: flex;
          width: max-content;
          animation: orvaScrollRight 36s linear infinite;
          will-change: transform;
        }
        .orva-marquee-row-1:hover,
        .orva-marquee-row-2:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Eyebrow & Title Banner (Clean Infoblox Style without pause button) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center sm:text-left">
        <span className="text-[11px] font-bold font-mono tracking-widest uppercase text-[#00875A] block mb-1">
          VERIFIED INFRASTRUCTURE PROVENANCE
        </span>
        <p className="text-sm sm:text-base font-semibold text-slate-700">
          Trusted by 200+ Aerospace, Defense &amp; Enterprise Organizations Worldwide
        </p>
      </div>

      {/* Edge Gradient Mask Overlays (Infoblox smooth fade on left/right) */}
      <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />

      {/* Marquee Row 1 (Scrolling Left) */}
      <div className="relative w-full overflow-hidden mb-4">
        <div className="orva-marquee-row-1 flex items-center gap-4">
          {/* Duplicate set for seamless continuous loop */}
          {[...row1, ...row1].map((client, index) => (
            <div
              key={`row1-${client.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#00875A] hover:bg-white hover:shadow-md transition-all duration-200 whitespace-nowrap group shrink-0"
            >
              <span className="text-lg sm:text-xl font-extrabold tracking-wider text-slate-800 group-hover:text-[#00875A] transition-colors font-sans">
                {client.name}
              </span>
              <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700 group-hover:bg-emerald-100 group-hover:text-[#006C44] transition-colors">
                {client.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Scrolling Right - Dual Row Infoblox Style) */}
      <div className="relative w-full overflow-hidden">
        <div className="orva-marquee-row-2 flex items-center gap-4">
          {/* Duplicate set for seamless continuous loop */}
          {[...row2, ...row2].map((client, index) => (
            <div
              key={`row2-${client.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#00875A] hover:bg-white hover:shadow-md transition-all duration-200 whitespace-nowrap group shrink-0"
            >
              <span className="text-lg sm:text-xl font-extrabold tracking-wider text-slate-800 group-hover:text-[#00875A] transition-colors font-sans">
                {client.name}
              </span>
              <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700 group-hover:bg-emerald-100 group-hover:text-[#006C44] transition-colors">
                {client.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtext Footnote */}
      <p className="text-[11px] text-center text-slate-400 mt-6 font-mono px-4">
        Strict non-disclosure &amp; defense confidentiality maintained for air-gapped facility architectures.
      </p>

    </section>
  );
}
