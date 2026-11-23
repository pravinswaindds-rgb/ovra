"use client";

import React from "react";
import Link from "next/link";

const articles = [
  {
    title: "Edge vs. Cloud: Optimizing Latency & Bandwidth for Enterprise Workloads",
    category: "ARCHITECTURE & INFRASTRUCTURE",
    desc: "Understand when to compute at the campus edge and when to leverage centralized cloud resources for optimal performance and data compliance.",
    slug: "edge-vs-cloud",
    readTime: "5 min read",
  },
  {
    title: "Real-World IoT Use Cases: Transforming Smart Facilities & Industrial Floors",
    category: "IOT & SMART BUILDING",
    desc: "How enterprises are deploying sensor topologies, smart actuators, and dedicated OT subnets to automate building efficiency and monitor mission-critical systems.",
    slug: "real-world-iot-use-cases",
    readTime: "7 min read",
  },
  {
    title: "Future-Ready Networking: Architecting for High Density Wi-Fi 6E/7 & Zero-Trust",
    category: "CYBERSECURITY & NETWORKING",
    desc: "Key considerations when modernizing legacy switches and cabling to support multi-gigabit wireless, 802.1X NAC, and proactive DNS security.",
    slug: "future-ready-networking",
    readTime: "6 min read",
  },
];

export function BlogNewsSection() {
  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-28 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-16">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
              ENGINEERING INSIGHTS &amp; ADVISORIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Blog &amp; News
            </h2>
          </div>

          <Link
            href="/contact"
            className="text-xs font-bold text-[#00875A] hover:text-[#006C44] uppercase tracking-wider font-mono flex items-center gap-1 group"
          >
            <span>Subscribe to Engineering Bulletins</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* 3 Articles from screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.slug}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#00875A] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Header Thumbnail graphic */}
              <div className="h-44 bg-gradient-to-br from-[#070D18] to-[#162744] p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-center text-[10px] font-mono text-[#00E599]">
                  <span>{art.category}</span>
                  <span>{art.readTime}</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl">
                  📄
                </div>
              </div>

              {/* Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#00875A] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {art.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 text-[#006C44] hover:bg-[#00C875] hover:text-[#070C14] text-xs font-bold font-mono transition-colors"
                  >
                    <span>Read More →</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
