"use client";

import React from "react";
import Link from "next/link";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ServiceLink {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
}

interface ServiceColumn {
  title: string;
  tag: string;
  services: ServiceLink[];
}

const menuColumns: ServiceColumn[] = [
  // Column 1: SOLUTIONS
  {
    title: "SOLUTIONS",
    tag: "CORE INFRASTRUCTURE",
    services: [
      {
        title: "Server solutions",
        desc: "We provide reliable, scalable, and secure server...",
        href: "/services/server-solutions",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        ),
      },
      {
        title: "Storage Solutions",
        desc: "Reliable, scalable, and high-performance storage...",
        href: "/services/storage-solutions",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        ),
      },
      {
        title: "Security Solution",
        desc: "Advanced network and endpoint security...",
        href: "/services/security-solution",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        ),
      },
      {
        title: "Wireless Solutions",
        desc: "Seamless, enterprise-grade wireless connectivit...",
        href: "/services/wireless-solutions",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        ),
      },
      {
        title: "Telephony Solutions",
        desc: "Modern IP-based telephony systems that improve...",
        href: "/services/telephony-solutions",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        ),
      },
      {
        title: "Networking Solutions",
        desc: "Robust networking solutions including structured...",
        href: "/services/networking-solutions",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        ),
      },
      {
        title: "Audio-Visual (AV)",
        desc: "Professional AV setups for conference rooms...",
        href: "/services/audio-visual-av",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        ),
      },
      {
        title: "Video conferencing",
        desc: "High-definition collaboration and boardroom setups...",
        href: "/services/video-conferencing",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
      },
    ],
  },

  // Column 2: IOT SOLUTIONS
  {
    title: "IOT SOLUTIONS",
    tag: "SMART CONNECTIVITY",
    services: [
      {
        title: "IoT Network Design",
        desc: "We design secure, scalable, and high-...",
        href: "/services/iot-network-design",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        title: "Smart Device Integration",
        desc: "Orva integrates a wide range of IoT-enabled...",
        href: "/services/smart-device-integration",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        title: "AI-Driven Data Insights",
        desc: "We use AI and machine learning to convert raw...",
        href: "/services/ai-data-insights",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        title: "End-to-End Security",
        desc: "Security is baked into every layer of our IoT...",
        href: "/services/end-to-end-security",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
      },
      {
        title: "Cloud & Edge Computing",
        desc: "Real-time edge telemetry with centralized...",
        href: "/services/cloud-edge-computing",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        ),
      },
      {
        title: "Custom Industry Solutions",
        desc: "Tailored infrastructure for energy, utilities...",
        href: "/services/custom-industry-solutions",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
      },
      {
        title: "DNS Filtering & Protection",
        desc: "Secure your network from malware, phishing...",
        href: "/services/dns-filtering-protection",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
        ),
      },
      {
        title: "Network Access Control (NAC)",
        desc: "Dynamic device profiling, 802.1X policy enforcement...",
        href: "/services/network-access-control",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        ),
      },
    ],
  },

  // Column 3: AI & OT SOLUTIONS
  {
    title: "AI & OT SOLUTIONS",
    tag: "INTELLIGENT AUTOMATION",
    services: [
      {
        title: "AI Solutions",
        desc: "Harness the power of artificial intelligence with...",
        href: "/services/ai-solutions",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
        ),
      },
      {
        title: "Our AI Capabilities Include",
        desc: "Predictive analytics & fault detection, Real-time...",
        href: "/services/ai-capabilities",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        title: "OT Solutions",
        desc: "Orva bridges the gap between IT and industrial...",
        href: "/services/ot-solutions",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
      },
      {
        title: "Industries We Serve",
        desc: "From smart cities to healthcare, Orva delivers...",
        href: "/services/industries-serve",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        title: "AI & Automation",
        desc: "Transform enterprise operations with intelligent automation...",
        href: "/services/ai-automation",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        ),
      },
      {
        title: "Analytics & Reporting",
        desc: "Track performance, monitor usage, and identify trends...",
        href: "/services/analytics-reporting",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
      },
      {
        title: "Cloud Dashboard & Remote Management",
        desc: "Monitor and manage your entire IT environment remotely...",
        href: "/services/cloud-dashboard-remote-management",
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
      },
    ],
  },
];

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 w-[1140px] max-w-[96vw] bg-[#070C14]/98 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/95 p-6 sm:p-7 z-50 animate-in fade-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto"
      onMouseEnter={() => { }}
      onMouseLeave={onClose}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#00C875] font-semibold">
            ORVA NETWORKS SERVICES DIRECTORY
          </span>
          <h3 className="text-base font-bold text-white leading-tight">
            Comprehensive Enterprise Infrastructure, IoT &amp; AI Solutions
          </h3>
        </div>
        <Link
          href="/services"
          onClick={onClose}
          className="text-xs font-semibold text-emerald-400 hover:text-white flex items-center gap-1.5 group transition-colors px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
        >
          <span>View All Solutions Grid</span>
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
      </div>

      {/* 3 Columns Grid (SOLUTIONS | IOT SOLUTIONS | AI & OT SOLUTIONS) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {menuColumns.map((col) => (
          <div key={col.title} className="space-y-2">
            {/* Column Header */}
            <div className="pb-2.5 mb-2 border-b border-[#00C875]/30">
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#00C875] uppercase block mb-0.5">
                {col.tag}
              </span>
              <h4 className="text-sm font-extrabold text-white tracking-wide">
                {col.title}
              </h4>
            </div>

            {/* Services List with Icons */}
            <div className="space-y-1">
              {col.services.map((svc) => (
                <Link
                  key={svc.title}
                  href={svc.href}
                  onClick={onClose}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-all duration-150 group border border-transparent hover:border-white/5"
                >
                  {/* Icon badge */}
                  <div className="w-8 h-8 rounded-lg bg-[#00C875]/10 border border-[#00C875]/20 text-[#00E585] group-hover:bg-[#00C875] group-hover:text-slate-950 flex items-center justify-center shrink-0 transition-colors shadow-xs">
                    {svc.icon}
                  </div>

                  {/* Title and Short Description */}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-slate-100 group-hover:text-[#00C875] transition-colors leading-snug truncate">
                      {svc.title}
                    </p>
                    <p className="text-[11px] text-slate-400 group-hover:text-slate-300 leading-tight truncate mt-0.5">
                      {svc.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Footer Callout */}
      <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
        <span>Headquarters: 69, Maruthi Layout, 7th Cross, Basaveshwaranagar, Bengaluru</span>
        <a
          href="tel:08041161040"
          className="font-bold text-white hover:text-[#00C875] flex items-center gap-1.5 transition-colors"
        >
          <svg className="w-3.5 h-3.5 text-[#00C875]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Direct Engineering Desk: 080-41161040</span>
        </a>
      </div>
    </div>
  );
}
