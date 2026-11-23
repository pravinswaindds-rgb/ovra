import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Secure | Orva Networks - Vertical Network Infrastructure",
  description:
    "From smart cities to healthcare, Orva delivers intelligent DNS and NAC security for diverse environments with zero-trust device control and seamless network performance.",
};

interface IndustryItem {
  id: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const industriesList: IndustryItem[] = [
  // 1. Corporate / SMEs
  {
    id: "corporate-sme",
    category: "ENTERPRISE SECURITY",
    title: "Corporate / SMEs",
    description:
      "All-in-One Security for Growing Enterprises: Enforce employee access policies, detect threats in real time, and enable secure remote work — all from one lightweight box.",
    features: [
      "Zero-Trust Network Access (ZTNA) for modern hybrid & remote workforces",
      "Real-time DNS malware blocking & automatic threat isolation",
      "Centralized cloud dashboard deployment with zero on-site complexity",
    ],
    imageSrc: "/images/industries/corporate-sme.jpg",
    imageAlt: "Corporate and SME Enterprise Network Security",
    href: "/services/security-solution",
  },

  // 2. Retail
  {
    id: "retail",
    category: "COMMERCE & POINT-OF-SALE",
    title: "Retail",
    description:
      "PCI-Compliant Protection for POS and Customer Data: Safeguard digital payments, CRM systems, and customer data with advanced filtering, segmentation, and threat prevention.",
    features: [
      "Dynamic VLAN micro-segmentation isolating POS terminals from public guest Wi-Fi",
      "Automated rogue device quarantine across distributed store branches",
      "Full PCI-DSS compliance auditing and proactive cardholder data protection",
    ],
    imageSrc: "/images/industries/retail.jpg",
    imageAlt: "Retail Point-of-Sale and Customer Data Defense",
    href: "/services/dns-filtering-protection",
  },

  // 3. Energy & Utilities
  {
    id: "energy-utilities",
    category: "CRITICAL INFRASTRUCTURE",
    title: "Energy & Utilities",
    description:
      "Critical Infrastructure Requires Critical Security: Protect grid operations, control systems (SCADA), and energy data infrastructure. Orva ensures secure OT/IT network segmentation and zero-trust device access.",
    features: [
      "Strict IEC 62443 and NERC-CIP compliant sub-network zoning",
      "Deep packet inspection for SCADA, Modbus, and industrial telemetry protocols",
      "Redundant high-availability architecture guaranteeing 99.999% uptime",
    ],
    imageSrc: "/images/industries/energy-utilities.jpg",
    imageAlt: "Energy and Power Utilities Critical Infrastructure",
    href: "/solutions/industrial-utility-it",
  },

  // 4. Logistics & Smart Warehousing
  {
    id: "logistics-warehousing",
    category: "SUPPLY CHAIN & FLEET",
    title: "Logistics & Smart Warehousing",
    description:
      "Always-On Connectivity for Moving Assets: Manage and monitor a vast fleet of connected assets — from forklifts and IoT sensors to fleet trackers — all under one secure network policy framework.",
    features: [
      "High-density Wi-Fi 6E/7 seamless roaming across multi-acre distribution centers",
      "Automated MAC & cryptographic profiling for AGVs, handheld scanners, and RFID tags",
      "Edge-to-cloud telemetry encryption preventing unauthorized freight tracking",
    ],
    imageSrc: "/images/industries/logistics-warehousing.jpg",
    imageAlt: "Logistics and Smart Warehousing Connected Fleet",
    href: "/services/wireless-solutions",
  },

  // 5. Smart Infrastructure & Buildings
  {
    id: "smart-infrastructure",
    category: "SMART SPACES & BMS",
    title: "Smart Infrastructure & Buildings",
    description:
      "Smarter Buildings Need Smarter Security: From access control to HVAC automation, modern infrastructure demands a secure foundation. Orva protects IoT/OT endpoints in BMS, access control, and IP surveillance.",
    features: [
      "Air-gapped separation between corporate networks and Building Management Systems (BMS)",
      "Automated identity authorization for IP surveillance, smart lighting, and elevators",
      "Continuous behavioral anomaly detection stopping physical sensor spoofing",
    ],
    imageSrc: "/images/industries/smart-infrastructure.jpg",
    imageAlt: "Smart Infrastructure and Modern Building Automation",
    href: "/services/networking-solutions",
  },

  // 6. Healthcare & Medical Equipment Systems
  {
    id: "healthcare",
    category: "HEALTHCARE & IOMT",
    title: "Healthcare & Medical Equipment Systems",
    description:
      "Protect critical IoMT and secure Electronic Health Records (EHR): Medical imaging systems, and IoMT (Internet of Medical Things) using Orva's endpoint and network security platform.",
    features: [
      "HIPAA and ISO 27799 compliant patient telemetry and PACS imaging protection",
      "Zero-disruption isolation for infusion pumps, heart monitors, and bedside tablets",
      "24/7 proactive intrusion prevention guarding hospital databases against ransomware",
    ],
    imageSrc: "/images/industries/healthcare.jpg",
    imageAlt: "Healthcare Medical Equipment and IoMT Systems Defense",
    href: "/services/security-solution",
  },

  // 7. Manufacturing & Industrial Automation
  {
    id: "manufacturing",
    category: "INDUSTRY 4.0 & OT",
    title: "Manufacturing & Industrial Automation",
    description:
      "Secure PLCs, Sensors & Production Networks: Keep your OT systems like PLCs, HMIs, and SCADA systems secure from internal and external threats with granular NAC and policy enforcement.",
    features: [
      "Granular 802.1X Network Access Control (NAC) tailored for industrial machines",
      "Micro-segmented shop-floor zones preventing lateral threat propagation",
      "Predictive telemetry diagnostics with zero production line stoppage",
    ],
    imageSrc: "/images/industries/manufacturing.jpg",
    imageAlt: "Manufacturing and Industrial Automation Plant Defense",
    href: "/services/server-solutions",
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* 1. Hero Header Banner with Dark Infoblox Enterprise Theme & Breadcrumbs */}
      <section className="bg-gradient-to-b from-[#050A12] via-[#070D18] to-[#0B1526] py-20 lg:py-24 text-white relative overflow-hidden border-b border-white/10">
        {/* Radial Ambient Glows */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00C875]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 right-10 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00E599] uppercase block mb-3">
            VERTICAL ARCHITECTURES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Industries
          </h1>

          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-sm text-slate-400 font-medium"
          >
            <Link
              href="/"
              className="hover:text-[#00C875] transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 text-[#00C875]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-[#00C875] font-semibold">Industries</span>
          </nav>
        </div>
      </section>

      {/* 2. Main Section Header */}
      <section className="pt-16 pb-8 sm:pt-20 sm:pb-12 border-b border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
            PROVEN VERTICAL SECURITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Industries We Secure
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            From smart cities to healthcare, Orva delivers intelligent DNS and NAC security for diverse environments.
            Our solutions ensure device authentication, policy enforcement, and seamless network control — keeping
            your business secure, compliant, and connected.
          </p>
        </div>
      </section>

      {/* 3. Alternating Industry Sections */}
      <section className="py-16 sm:py-20 lg:py-24 space-y-16 sm:space-y-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {industriesList.map((industry, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={industry.id}
                id={industry.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Visual / Image Column */}
                <div className={`relative group ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div
                    className="absolute -inset-2 bg-gradient-to-r from-[#00C875]/20 to-[#00D2FF]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-90 transition duration-500 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="relative h-[280px] sm:h-[350px] lg:h-[380px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-lg">
                    <Image
                      src={industry.imageSrc}
                      alt={industry.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge on Image */}
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md border border-white/20 text-[#00C875] text-xs font-mono font-bold px-3 py-1.5 rounded-lg shadow-sm">
                      {industry.category}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`${isEven ? "lg:order-2" : "lg:order-1"} space-y-6`}>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
                      {industry.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                      {industry.title}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* High-Impact Feature Highlights */}
                  <ul className="space-y-2.5 pt-2">
                    {industry.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-[#00C875]/15 text-[#00875A] flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <div className="pt-4">
                    <Link
                      href={industry.href}
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm sm:text-base shadow-md hover:bg-[#00875A] hover:shadow-lg transition-all duration-200 group/btn"
                    >
                      <span>Explore Solution</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Bottom Appliance Banner (Exact from user screenshot) */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#070C14] via-[#0A1628] to-[#050A12] border border-[#00C875]/30 p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
            {/* Ambient Lighting */}
            <div
              className="absolute -top-24 right-0 w-[500px] h-[300px] bg-[#00C875]/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 left-0 w-[500px] h-[300px] bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Left Graphic: Network Appliance & Node Interconnect Topology */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col items-center justify-center text-center shadow-inner">
                  {/* Glowing Center Hub */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#00C875] to-[#00D2FF] p-0.5 shadow-lg shadow-[#00C875]/30 mb-4 animate-pulse">
                    <div className="w-full h-full bg-[#070C14] rounded-2xl flex items-center justify-center">
                      <svg className="w-10 h-10 text-[#00C875]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm font-bold font-mono text-white tracking-wide">
                    ORVA SECURITY APPLIANCE
                  </span>
                  <span className="text-xs text-[#00C875] font-mono mt-1">
                    Plug-and-Play Zero-Trust Core
                  </span>
                  <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#00C875] animate-ping" />
                    <span>Telemetry Active Across Verticals</span>
                  </div>
                </div>
              </div>

              {/* Right Content & Actions */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00C875] block">
                  DEPLOYMENT AGILITY
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Your Industry. Our Expertise. One Appliance.
                </h3>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Orva is built for plug-and-play deployment across industries — from smart cities to legacy IT
                  environments. Let's secure your operations, together.
                </p>

                {/* 3 CTA Buttons from Screenshot */}
                <div className="pt-4 flex flex-wrap gap-3.5 sm:gap-4">
                  <Link
                    href="/#contact"
                    className="px-6 py-3.5 rounded-xl bg-[#00C875] hover:bg-[#00E585] text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-[#00C875]/25 transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    Schedule Industry Demo
                  </Link>

                  <a
                    href="mailto:info@orvanetworks.com?subject=Request%20Sector%20Brochure"
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm sm:text-base transition-all duration-200"
                  >
                    Download Sector Brochure
                  </a>

                  <Link
                    href="/services"
                    className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-slate-700 font-semibold text-sm sm:text-base transition-all duration-200"
                  >
                    Compare Features by Vertical →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
