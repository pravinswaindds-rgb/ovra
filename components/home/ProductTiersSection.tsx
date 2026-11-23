"use client";

import React from "react";
import Link from "next/link";

const products = [
  {
    tier: "SERVER & STORAGE SOLUTIONS",
    tagline: "Enterprise Virtualization & Disaster Recovery",
    description: "Reliable, scalable, and high-performance server and storage infrastructure tailored to your business needs. From on-premise deployments to hybrid setups, Orva ensures optimal workload performance, data security, and seamless disaster recovery.",
    capabilities: [
      "On-Premise & Hybrid Cloud Server Deployments",
      "High-Performance SAN/NAS Storage Architectures",
      "Automated Data Backup & Disaster Recovery Replication",
      "Workstation & Server Lifecycle Management",
    ],
    href: "/solutions/enterprise-networking",
  },
  {
    tier: "CYBERSECURITY & DNS DEFENSE",
    tagline: "Network Access Control & AI DNS Filtering",
    description: "Advanced network and endpoint security solutions including firewall protection, proactive threat detection, access control, and DNS-level defense to safeguard your digital infrastructure and enforce compliance.",
    capabilities: [
      "Device Authentication & Dynamic Policy Enforcement",
      "AI-Powered DNS Filtering Blocking Phishing & Malware",
      "Perimeter to Endpoint Micro-Segmentation",
      "Air-Gapped Isolation for Defense & Aerospace Facilities",
    ],
    href: "/solutions/cybersecurity",
  },
  {
    tier: "CLOUD & IOT SMART PLATFORM",
    tagline: "Single-Pane Cloud NOC & IoT Integration",
    description: "Monitor and manage your entire IT and OT environment remotely via a unified cloud dashboard. We design secure, scalable IoT networks, integrate smart appliances and sensors, and leverage AI for predictive fault detection.",
    capabilities: [
      "Single-Pane Cloud Dashboard for Multi-Location Businesses",
      "Industrial IoT Sensor & Actuator Integration",
      "Real-Time Telemetry & Predictive Analytics",
      "24/7 Service Desk & Incident Management Support",
    ],
    href: "/solutions/industrial-utility-it",
  },
];

export function ProductTiersSection() {
  return (
    <section className="bg-[#F4F6F8] py-20 lg:py-28 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Infoblox Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-3">
            TECHNICAL EXPERTISE &amp; INNOVATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Real-time threat protection. Resilient network performance.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Starting at the Test Bed phase, Orva Networks engages closely with your engineering teams to understand your challenges, architecture, and long-term operational objectives.
          </p>
        </div>

        {/* 3 White Product Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.tier}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#00875A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Green Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-[#006C44] text-[10px] font-mono font-bold tracking-wider mb-4">
                  {item.tier}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.tagline}</h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Capabilities list with green checks */}
                <ul className="space-y-2.5 mb-8">
                  {item.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-xs text-slate-700">
                      <svg className="w-4 h-4 text-[#00875A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00875A] hover:text-[#006C44] group"
                >
                  <span>Explore Engineering Specifications</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
