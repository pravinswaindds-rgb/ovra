"use client";

import React, { useState } from "react";

const challengesData = [
  {
    id: "siloed",
    tabTitle: "Siloed Visibility & Campus Blind Spots",
    title: "Fragmented Campus, Branch & Data Center Networks",
    description:
      "When enterprise campuses, branch locations, and private data centers run on disparate hardware vendors and isolated management consoles, network teams operate blind. Configuration drift, unmonitored subnets, and opaque traffic flows degrade application performance and delay fault resolution.",
    impact: "Up to 4.2 hours average MTTR for network outages without unified cross-domain observability.",
    highlightNodes: ["hq", "branch"],
  },
  {
    id: "downtime",
    tabTitle: "Operational Downtime & Latency Spikes",
    title: "Fragile Point Tools & Unscheduled Network Downtime",
    description:
      "Legacy multi-hop switches and unmanaged failover routes create single points of failure. High-density video streaming, ERP transactions, and SCADA control commands suffer from packet drops, buffer overruns, and unexpected link collapses during traffic surges.",
    impact: "Unplanned downtime costs enterprises upwards of \$5,600 per minute in mission-critical facilities.",
    highlightNodes: ["cloud", "datacenter"],
  },
  {
    id: "threats",
    tabTitle: "Unsegmented OT & Rising Cyber Risks",
    title: "Shadow Endpoints, Rogue IoT & Lateral Attack Spread",
    description:
      "Smart building sensors, unmanaged mobile devices, and industrial OT controllers connect to flat LANs without 802.1X authentication. A single compromised IoT camera or medical device allows ransomware to move laterally into core financial and operational systems.",
    impact: "68% of enterprise breaches originate from unprofiled, unsegmented perimeter endpoints.",
    highlightNodes: ["iot", "threat"],
  },
];

export function ChallengesBento() {
  const [activeTab, setActiveTab] = useState(0);
  const current = challengesData[activeTab];

  return (
    <section className="bg-white py-20 lg:py-28 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Headline 1:1 with Infoblox */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-widest block mb-3">
            SEE, EMBRACE AND SECURE THE FUTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Disconnected teams. Distracted environments.{" "}
            <span className="text-[#FF5A36]">Rising risks.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            As IT and OT environments expand across multi-campus facilities, high-density clouds, and industrial sites, complexity multiplies. Siloed teams and fragmented point tools leave visibility gaps that invite downtime and cyber vulnerabilities.
          </p>
        </div>

        {/* Central Interactive Network Disconnection Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-5xl mx-auto mb-12">
          
          {/* Top Visual Diagram Canvas */}
          <div className="bg-gradient-to-b from-slate-50 to-white p-6 sm:p-10 border-b border-slate-200">
            <div className="relative aspect-[16/7] w-full flex items-center justify-center">
              
              <svg viewBox="0 0 800 320" className="w-full h-full max-h-[300px]">
                {/* Connection lines */}
                <line x1="150" y1="160" x2="300" y2="100" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="300" y1="100" x2="500" y2="100" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="500" y1="100" x2="650" y2="160" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="300" y1="100" x2="400" y2="220" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="500" y1="100" x2="400" y2="220" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />

                {/* Broken / Risk Line Animation based on active tab */}
                {activeTab === 0 && (
                  <line x1="150" y1="160" x2="300" y2="100" stroke="#FF5A36" strokeWidth="3" className="animate-pulse" />
                )}
                {activeTab === 1 && (
                  <line x1="300" y1="100" x2="500" y2="100" stroke="#FF5A36" strokeWidth="3" className="animate-pulse" />
                )}
                {activeTab === 2 && (
                  <line x1="500" y1="100" x2="650" y2="160" stroke="#FF5A36" strokeWidth="3" className="animate-pulse" />
                )}

                {/* Node 1: Remote Campus */}
                <g transform="translate(150, 160)">
                  <circle r="36" fill={activeTab === 0 ? "#FF5A36" : "#0F172A"} className="transition-colors duration-300 shadow-md" />
                  <text y="4" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">BRANCH</text>
                  <text y="16" fill="#94A3B8" fontSize="8" textAnchor="middle">SILO</text>
                </g>

                {/* Node 2: Core Data Center */}
                <g transform="translate(300, 100)">
                  <circle r="40" fill={activeTab === 1 ? "#FF5A36" : "#00875A"} className="transition-colors duration-300 shadow-md" />
                  <text y="4" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">DATA CENTER</text>
                  <text y="17" fill="#E2E8F0" fontSize="8" textAnchor="middle">CORE SPINE</text>
                </g>

                {/* Node 3: Hybrid Cloud */}
                <g transform="translate(500, 100)">
                  <circle r="40" fill={activeTab === 1 ? "#FF5A36" : "#0284C7"} className="transition-colors duration-300 shadow-md" />
                  <text y="4" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">HYBRID CLOUD</text>
                  <text y="17" fill="#E2E8F0" fontSize="8" textAnchor="middle">MULTI-TENANT</text>
                </g>

                {/* Node 4: Unmanaged IoT / Threat Zone */}
                <g transform="translate(650, 160)">
                  <circle r="36" fill={activeTab === 2 ? "#FF5A36" : "#64748B"} className="transition-colors duration-300 shadow-md" />
                  <text y="4" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">SHADOW IOT</text>
                  <text y="16" fill="#FCA5A5" fontSize="8" textAnchor="middle">RISK VECTOR</text>
                </g>

                {/* Node 5: Enterprise Headquarters */}
                <g transform="translate(400, 220)">
                  <circle r="44" fill="#070C14" stroke="#00C875" strokeWidth="3" className="shadow-lg" />
                  <text y="2" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">ORVA CORE</text>
                  <text y="16" fill="#00C875" fontSize="8" fontWeight="bold" textAnchor="middle">DETERMINISTIC</text>
                </g>
              </svg>

            </div>
          </div>

          {/* 3 Interactive Infoblox-style Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {challengesData.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`p-6 text-left transition-all duration-200 focus:outline-none ${
                    isActive
                      ? "bg-slate-50 border-t-4 border-t-[#00875A]"
                      : "bg-white hover:bg-slate-50/70 border-t-4 border-t-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? "bg-[#00875A]" : "bg-slate-300"
                      }`}
                    />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      Problem 0{index + 1}
                    </span>
                  </div>
                  <h3
                    className={`text-sm sm:text-base font-bold transition-colors ${
                      isActive ? "text-[#00875A]" : "text-slate-800"
                    }`}
                  >
                    {item.tabTitle}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Tab Detailed Explanation */}
          <div className="p-8 bg-slate-50 border-t border-slate-200">
            <h4 className="text-xl font-bold text-slate-900 mb-3">{current.title}</h4>
            <p className="text-slate-600 leading-relaxed text-sm mb-4">{current.description}</p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>{current.impact}</span>
            </div>
          </div>

        </div>

        {/* Infoblox Section Quote Banner */}
        <div className="max-w-4xl mx-auto text-center mt-12">
          <p className="text-base sm:text-lg font-medium text-slate-700 italic leading-relaxed">
            &ldquo;Only Orva Networks provides deterministic, carrier-grade visibility and hardware-hardened control across your entire hybrid, multi-campus environment—eliminating blind spots, optimizing operations, and securing critical assets.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
