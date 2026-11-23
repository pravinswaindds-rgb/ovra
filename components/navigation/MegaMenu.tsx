"use client";

import React from "react";
import Link from "next/link";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceCategories = [
  {
    category: "Network Infrastructure",
    href: "/solutions/enterprise-networking",
    tag: "L2/L3 & DATA FABRICS",
    services: [
      { name: "Networking Solutions", desc: "Structured cabling, core switches, smart routers & optimization" },
      { name: "Server Solutions", desc: "High-density compute, on-prem virtualization & cloud setups" },
      { name: "Storage Solutions", desc: "Enterprise SAN/NAS, disaster recovery & automated backup" },
      { name: "Cloud Dashboard & Remote NOC", desc: "Unified single-pane monitoring across multi-site facilities" },
    ],
  },
  {
    category: "Cybersecurity & Access",
    href: "/solutions/cybersecurity",
    tag: "ZERO TRUST DEFENSE",
    services: [
      { name: "Network Access Control (NAC)", desc: "Dynamic device profiling, 802.1X policy enforcement" },
      { name: "DNS Filtering & Protection", desc: "AI-driven DNS protection blocking malware and phishing" },
      { name: "Next-Gen Firewall Security", desc: "Deep packet inspection, perimeter defense & micro-segmentation" },
      { name: "Air-Gapped Enclaves", desc: "Defense-grade isolation for aerospace and public sector networks" },
    ],
  },
  {
    category: "Campus & Collaboration",
    href: "/solutions/wireless-smart-campus",
    tag: "WI-FI 6E & UNIFIED COMM",
    services: [
      { name: "Enterprise Wireless Solutions", desc: "High-density Wi-Fi 6E/7, seamless roaming & RF optimization" },
      { name: "IoT Network Design", desc: "Smart sensor topologies, actuator integration & edge gateways" },
      { name: "Modern IP Telephony", desc: "Smart call routing, voicemail & enterprise CRM integration" },
      { name: "Commercial AV & Video Conferencing", desc: "Intelligent HD boardrooms, sound systems & collaboration" },
    ],
  },
  {
    category: "Industrial & Automation",
    href: "/solutions/industrial-utility-it",
    tag: "OT SCADA & AIOPS",
    services: [
      { name: "Industrial OT Solutions", desc: "IEC 61850 substation hardening, SCADA & PLC network control" },
      { name: "Cloud & Edge Computing", desc: "Real-time edge telemetry with centralized cloud governance" },
      { name: "AI-Powered Automation", desc: "Predictive analytics, automated fault isolation & self-healing" },
      { name: "Custom Industry Architectures", desc: "Tailored infrastructure for energy, utilities & manufacturing" },
    ],
  },
];

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 w-[1050px] bg-[#070C14] border border-white/10 rounded-2xl shadow-2xl shadow-black/90 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#00C875]">Orva Networks Service Directory</span>
          <h3 className="text-base font-bold text-white">Full-Lifecycle Enterprise Infrastructure &amp; Consulting</h3>
        </div>
        <Link
          href="/solutions"
          onClick={onClose}
          className="text-xs font-semibold text-emerald-400 hover:text-white flex items-center gap-1 group"
        >
          <span>View Master Solutions Overview</span>
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {serviceCategories.map((group) => (
          <div key={group.category} className="space-y-3">
            <Link
              href={group.href}
              onClick={onClose}
              className="block group"
            >
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#00C875] uppercase block">
                {group.tag}
              </span>
              <h4 className="text-sm font-bold text-white group-hover:text-[#00C875] transition-colors flex items-center gap-1">
                <span>{group.category}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
              </h4>
            </Link>

            <ul className="space-y-2 pt-1 border-t border-white/5">
              {group.services.map((svc) => (
                <li key={svc.name}>
                  <Link
                    href={group.href}
                    onClick={onClose}
                    className="block p-2 rounded-lg hover:bg-white/5 transition-colors group/item"
                  >
                    <p className="text-xs font-semibold text-slate-200 group-hover/item:text-[#00C875] transition-colors leading-snug">
                      {svc.name}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-tight mt-0.5 line-clamp-1">
                      {svc.desc}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Featured Architecture Briefing Footer */}
      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
        <span>Headquarters: 69, Maruthi Layout, 7th Cross, Basaveshwaranagar, Bengaluru</span>
        <Link
          href="/contact"
          onClick={onClose}
          className="font-bold text-white hover:text-[#00C875] flex items-center gap-1"
        >
          <span>Speak with Senior Engineering Lead (080-41161040)</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
