"use client";

import React from "react";
import Link from "next/link";

const featuredServices = [
  {
    title: "DNS Filtering & Protection",
    desc: "Secure your network from malware, phishing, and unsafe websites with AI-powered DNS filtering. Control web access and enforce browsing policies.",
    href: "/solutions/cybersecurity",
    icon: (
      <svg className="w-8 h-8 text-[#00875A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Network Access Control",
    desc: "Authenticate, monitor, and manage every device on your network. Our NAC solutions enforce security policies and ensure only compliant endpoints connect.",
    href: "/solutions/cybersecurity",
    icon: (
      <svg className="w-8 h-8 text-[#00875A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004 11m0 0c0 1.026.07 2.03.205 3" />
      </svg>
    ),
  },
  {
    title: "OT Solutions",
    desc: "Orva bridges the gap between IT and industrial operations with secure, scalable OT solutions. We help industries monitor, control, and optimize critical systems with real-time insights and robust architecture.",
    href: "/solutions/industrial-utility-it",
    icon: (
      <svg className="w-8 h-8 text-[#00875A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const allOtherServices = [
  { name: "Networking Solutions", desc: "Structured cabling, switches & smart routers", href: "/solutions/enterprise-networking" },
  { name: "Server Solutions", desc: "On-premise & cloud-integrated virtualization", href: "/solutions/enterprise-networking" },
  { name: "Storage Solutions", desc: "SAN/NAS & automated disaster recovery", href: "/solutions/enterprise-networking" },
  { name: "Wireless Solutions", desc: "High-density Wi-Fi 6E/7 & campus roaming", href: "/solutions/wireless-smart-campus" },
  { name: "Telephony Solutions", desc: "Modern IP PBX & smart call routing", href: "/solutions/wireless-smart-campus" },
  { name: "Audio-Visual (AV)", desc: "Professional boardroom displays & audio", href: "/solutions/wireless-smart-campus" },
  { name: "Video Conferencing", desc: "Intelligent cameras & hybrid collaboration", href: "/solutions/wireless-smart-campus" },
  { name: "Cloud Dashboard", desc: "Centralized multi-site remote management", href: "/solutions/enterprise-networking" },
  { name: "IoT Network Design", desc: "Smart sensors, actuators & edge processing", href: "/solutions/industrial-utility-it" },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#F8FAFC] py-20 lg:py-28 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
            END-TO-END IT &amp; NETWORK CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Our Service
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From structured cabling to cloud integration, we provide end-to-end IT services tailored to your business.
          </p>
        </div>

        {/* 3 Featured Cards exactly from screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((svc) => (
            <div
              key={svc.title}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#00875A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {svc.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#00875A] transition-colors">
                  {svc.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {svc.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#00875A] hover:text-[#006C44] uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                >
                  <span>+ Read More</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Directory of Additional Services */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
            <h4 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">
              Complete Infrastructure Portfolio
            </h4>
            <Link href="/solutions" className="text-xs font-bold text-[#00875A] hover:underline">
              Explore All Solutions →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allOtherServices.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="p-3.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors flex items-center justify-between group"
              >
                <div>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-[#00875A] transition-colors">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500 line-clamp-1">{item.desc}</p>
                </div>
                <span className="text-[#00875A] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
