"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function SolutionsMatrix() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "networking",
      name: "Enterprise Networking",
      tagline: "Core Switching, Routing & Hybrid Storage",
      badge: "DATA CENTER & WAN",
      badgeColor: "text-[#00D2FF] bg-[#00D2FF]/10 border-[#00D2FF]/30",
      description:
        "Orva constructs high-performance backbone topologies utilizing spine-leaf fabrics, multi-site SD-WAN, and high-IOPS storage architectures tailored for uninterrupted throughput.",
      specs: [
        { label: "Core Fabric Latency", value: "< 0.8ms" },
        { label: "Backbone Redundancy", value: "N+1 / 2N Spine-Leaf" },
        { label: "Data Center Storage", value: "SAN/NAS Hybrid All-Flash" },
        { label: "SLA Availability", value: "99.999% Guaranteed" },
      ],
      features: [
        "Spine-leaf switching eliminating east-west traffic bottlenecks",
        "Multi-gigabit structured copper & single-mode fiber infrastructure",
        "Automated WAN failover with multi-carrier BGP routing",
        "Disaster recovery data replication across distributed sites",
      ],
      href: "/solutions/enterprise-networking",
      cta: "Explore Enterprise Networking",
      telemetry: {
        title: "ROUTER_CORE_01 [UP]",
        ip: "10.240.0.1/16",
        traffic: "84.2 Gbps active",
        packetLoss: "0.0001%",
        status: "OPTIMAL",
      },
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity & NAC",
      tagline: "Preemptive DNS Threat Shield & Zero-Trust Access",
      badge: "ZERO-TRUST DEFENSE",
      badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
      description:
        "Block sophisticated cyberattacks before perimeters are breached. Our multi-layered security unifies AI-driven DNS protection, dynamic device profiling, and ISO 27001 compliance enforcement.",
      specs: [
        { label: "DNS Threat Response", value: "< 2ms Pre-resolution" },
        { label: "Device Profiling", value: "802.1X Dynamic NAC" },
        { label: "Compliance Alignment", value: "ISO 27001 / NIST" },
        { label: "Ransomware Block Rate", value: "100% Known Vectors" },
      ],
      features: [
        "AI-assisted DNS query inspection to stop malicious exfiltration",
        "Zero-Trust Network Access Control (NAC) profiling every endpoint",
        "Next-generation deep packet inspection firewalls",
        "Automated threat quarantine preventing lateral spread",
      ],
      href: "/solutions/cybersecurity",
      cta: "Explore Cybersecurity & NAC",
      telemetry: {
        title: "DNS_DEFENSE_GATEWAY [ACTIVE]",
        ip: "192.168.10.254",
        traffic: "12,450 QPS filtered",
        packetLoss: "0 threats permitted",
        status: "ARMED",
      },
    },
    {
      id: "wireless",
      name: "Wireless & Smart Campus",
      tagline: "High-Density Wi-Fi 6E, VoIP & Facility IoT",
      badge: "CAMPUS CONNECTIVITY",
      badgeColor: "text-sky-400 bg-sky-400/10 border-sky-400/30",
      description:
        "Deliver seamless wireless connectivity across large corporate and educational campuses, paired with enterprise IP telephony, unified video conferencing, and building automation sensors.",
      specs: [
        { label: "Wireless Standard", value: "Wi-Fi 6 / 6E Tri-Band" },
        { label: "Concurrent Density", value: "2,000+ Clients / AP" },
        { label: "Telephony Backbone", value: "SIP Trunking & CRM PBX" },
        { label: "Roaming Handshake", value: "< 15ms Seamless 802.11r" },
      ],
      features: [
        "Predictive 3D RF heat mapping eliminating wireless dead zones",
        "Segregated employee, guest, and IoT SSIDs with dynamic VLANs",
        "High-definition video conferencing and acoustic boardroom integration",
        "Smart facility sensor gateways for environmental monitoring",
      ],
      href: "/solutions/wireless-smart-campus",
      cta: "Explore Wireless & Smart Campus",
      telemetry: {
        title: "WIFI6_CONTROLLER_CAMPUS [SYNCED]",
        ip: "172.16.0.5",
        traffic: "1,840 connected clients",
        packetLoss: "-62 dBm mean RSSI",
        status: "HEALTHY",
      },
    },
    {
      id: "industrial",
      name: "Industrial & Utility IT",
      tagline: "Purdue Model SCADA, OT Defense & Edge Telemetry",
      badge: "CRITICAL INFRASTRUCTURE",
      badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
      description:
        "Protect factory floors, power substations, and utilities against operational disruption. We bridge the IT/OT divide with ruggedized industrial hardware and micro-segmented networks.",
      specs: [
        { label: "Operating Range", value: "-40°C to +75°C Industrial" },
        { label: "Network Model", value: "Purdue Reference Levels 0-3" },
        { label: "SCADA Protection", value: "Air-gap Firewall Zones" },
        { label: "Edge Telemetry", value: "Real-Time Modbus / DNP3" },
      ],
      features: [
        "Physical and logical IT/OT isolation preventing plant stoppage",
        "DIN-rail industrial Ethernet switches with electromagnetic shielding",
        "Substation telemetry acquisition for power grid management",
        "Edge gateways filtering operational telemetry before cloud dispatch",
      ],
      href: "/solutions/industrial-utility-it",
      cta: "Explore Industrial & Utility IT",
      telemetry: {
        title: "SCADA_ISOLATION_CELL [LOCKED]",
        ip: "10.50.1.100",
        traffic: "PLC telemetry synced",
        packetLoss: "OT Air-gap enforced",
        status: "SECURED",
      },
    },
  ];

  const current = tabs[activeTab];

  return (
    <section className="bg-[#0F172A] text-white py-20 lg:py-28 border-b border-white/10" aria-label="Solutions Matrix">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase block">
              Integrated Architectural Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Enterprise Networking &amp; Security Showcase
            </h2>
          </div>
          <Link
            href="/solutions"
            className="text-sm font-semibold text-[#00D2FF] hover:text-sky-300 inline-flex items-center gap-2"
          >
            <span>View All 10 Core Capabilities</span>
            <span>→</span>
          </Link>
        </div>

        {/* Tab Controls Bar */}
        <div
          role="tablist"
          aria-label="Solution Domains"
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-1.5 rounded-xl bg-[#0A0F17] border border-white/10 mb-10"
        >
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === idx}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(idx)}
              className={`py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-[#00D2FF] ${activeTab === idx
                ? "bg-[#0284C7] text-white shadow-lg"
                : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
            >
              <span className="block font-bold">{tab.name}</span>
              <span className="block text-[11px] font-normal opacity-80 truncate hidden sm:block">
                {tab.tagline.split(",")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Active Tab Panel */}
        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="rounded-2xl border border-white/15 bg-gradient-to-br from-[#162238]/90 via-[#0F172A] to-[#0A0F17] p-8 lg:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-medium border ${current.badgeColor}`}>
                {current.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {current.tagline}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {current.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {current.specs.map((spec) => (
                  <div key={spec.label} className="p-3 rounded-lg bg-[#0A0F17]/60 border border-white/10">
                    <span className="text-[11px] font-mono text-slate-400 block">{spec.label}</span>
                    <span className="text-sm font-mono font-bold text-[#00D2FF]">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Checklist */}
              <ul className="space-y-2 pt-2 text-sm text-slate-300">
                {current.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="text-[#00D2FF] font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Button href={current.href} variant="primary" size="lg" arrow>
                  {current.cta}
                </Button>
              </div>
            </div>

            {/* Right Telemetry Box */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-white/15 bg-[#070B12] p-6 font-mono text-xs shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 font-bold">{current.telemetry.status}</span>
                  </div>
                  <span className="text-slate-500">PORT: 443 / TLS 1.3</span>
                </div>

                <div className="space-y-2 text-slate-300">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-500">NODE:</span>
                    <span className="text-white">{current.telemetry.title}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-500">GATEWAY IP:</span>
                    <span className="text-sky-300">{current.telemetry.ip}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-500">METRICS:</span>
                    <span className="text-white">{current.telemetry.traffic}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">RESILIENCE:</span>
                    <span className="text-emerald-400 font-semibold">{current.telemetry.packetLoss}</span>
                  </div>
                </div>

                <div className="p-3 rounded bg-white/5 border border-white/5 text-[11px] text-slate-400 leading-relaxed">
                  Verified integration across Cisco enterprise routing, Fortinet security perimeters, and Linux kernel networking.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

