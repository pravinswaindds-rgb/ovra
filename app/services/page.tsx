"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { allServices } from "@/components/home/ServicesSection";
import type { ServiceItem } from "@/components/home/ServiceCard";

const categories = [
  "All",
  "Security",
  "Networking",
  "Cloud & AI",
  "IoT & OT",
  "Collaboration",
] as const;

type Category = (typeof categories)[number];

const faqs = [
  {
    num: "01",
    q: "Does Orva Networks offer ongoing support after implementation?",
    a: "Yes. We provide 24/7 technical support, proactive monitoring, and maintenance services to ensure your IT infrastructure runs smoothly, securely, and efficiently.",
  },
  {
    num: "02",
    q: "What industries does Orva Networks serve?",
    a: "We serve a wide range of industries including Aerospace & Defense (ISRO, BEL, BHEL, BEML), Smart Manufacturing, Corporate & SMEs, Healthcare IoMT, Logistics, and Smart Cities & Government.",
  },
  {
    num: "03",
    q: "Can Orva Networks integrate with my existing IT infrastructure?",
    a: "Yes. Starting at the Test Bed phase, our experts engage closely with your team to ensure seamless integration with your existing network switches, legacy servers, and multi-cloud environments with zero downtime.",
  },
  {
    num: "04",
    q: "What services does Orva Networks Pvt Ltd provide?",
    a: "Orva Networks delivers complete network solutions including enterprise core routing & switching, server virtualization, SAN/NAS storage, AI-powered DNS filtering, 802.1X Network Access Control (NAC), wireless campus networks, and industrial OT/SCADA systems.",
  },
  {
    num: "05",
    q: "How can Orva Networks help my business grow?",
    a: "By eliminating unexpected network downtime, fortifying enterprise cybersecurity, reducing IT operational overhead, and deploying modular network architectures that scale dynamically with your business.",
  },
  {
    num: "06",
    q: "Does Orva Networks provide cybersecurity solutions?",
    a: "Yes. We deliver defense-in-depth security covering next-generation firewalls, DNS-level threat neutralization, endpoint protection, zero-trust network access control, and 24/7 security monitoring.",
  },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Filter services by category
  const filteredServices = useMemo(() => {
    if (selectedCategory === "All") return allServices;
    return allServices.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* 1. Hero Banner with Infoblox Dark Aesthetic & Breadcrumb */}
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
            ENTERPRISE INFRASTRUCTURE &amp; CYBERSECURITY
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Solutions
          </h1>

          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-sm text-slate-400 font-medium mb-8"
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
            <span className="text-[#00C875] font-semibold">Solutions</span>
          </nav>

          {/* Intro Description from Screenshot */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
            Orva delivers powerful, enterprise-level security solutions tailored for Indian small and medium businesses. Our integrated DNS filtering and Network Access Control (NAC) platform gives you complete visibility, control and protection over your network — all in one plug-and-play device. Protect your network, enforce access policies, and stop threats — before they reach your business.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Pills */}
      <section className="pt-12 pb-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? allServices.length
                  : allServices.filter((s) => s.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#00C875] text-[#070C14] shadow-md shadow-[#00C875]/20 scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                      isActive ? "bg-black/15 text-slate-950 font-bold" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. The 23 Services Grid (Exact layout from user screenshot) */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:border-[#00C875] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 text-center"
              >
                <div>
                  {/* Centered Circular Icon Badge in Website Theme Color */}
                  <div className="w-16 h-16 rounded-full bg-[#00C875]/10 border border-[#00C875]/25 text-[#00875A] group-hover:bg-[#00C875] group-hover:border-[#00C875] group-hover:text-slate-950 flex items-center justify-center transition-all duration-300 mx-auto mb-5 shadow-xs">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00875A] transition-colors leading-snug mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Explore Button */}
                <div className="pt-4 border-t border-slate-100 flex justify-center">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-[#00875A] transition-colors group/btn"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-50 text-[#00875A] border border-[#00C875]/25 group-hover:bg-[#00C875] group-hover:text-slate-950 flex items-center justify-center transition-all group-hover/btn:scale-110">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span>Explore More</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Banner: "Explore How Orva Can Secure Your Business" (Exact banner from screenshot) */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#070D18] via-[#0A182F] to-[#070D18] border border-white/10 p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div
              className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00C875]/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Device Mockup Graphic */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-48 sm:w-56 h-80 rounded-[36px] bg-gradient-to-b from-slate-800 to-slate-950 p-3 shadow-2xl border border-white/20 relative">
                  <div className="w-full h-full rounded-[28px] bg-gradient-to-br from-[#0B1526] to-[#050A12] border border-white/10 flex flex-col items-center justify-center p-6 relative overflow-hidden">
                    {/* Glowing WiFi Shield Icon */}
                    <div className="w-20 h-20 rounded-full bg-[#00C875]/20 border border-[#00C875]/40 flex items-center justify-center text-[#00E585] mb-4 shadow-[0_0_25px_rgba(0,200,117,0.3)]">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#00E599] tracking-wider uppercase text-center">
                      Plug &amp; Play Security
                    </span>
                    <span className="text-[11px] text-slate-400 text-center mt-1">
                      DNS + NAC Mesh
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content & 3 CTA Buttons */}
              <div className="lg:col-span-8 text-center lg:text-left">
                <span className="text-xs font-mono font-bold tracking-widest text-[#00E599] uppercase block mb-3">
                  INTEGRATED DEFENSE PLATFORM
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight mb-4">
                  Explore How Orva Can Secure Your Business
                </h2>
                <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-2xl">
                  Our team will help you understand how Orva fits into your existing network and custom deploy mesh based on your needs.
                </p>

                {/* 3 Buttons from screenshot */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/contact"
                    className="px-7 py-3.5 rounded-full bg-[#00C875] text-[#070C14] font-bold text-sm sm:text-base hover:bg-[#00E585] transition-all shadow-[0_0_20px_rgba(0,200,117,0.3)]"
                  >
                    Book a Free Demo
                  </Link>

                  <a
                    href="mailto:info@orvanetworks.com?subject=Sector%20Brochure%20Request"
                    className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 transition-colors"
                  >
                    Download Sector Brochure
                  </a>

                  <a
                    href="tel:08041161040"
                    className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-[#00C875]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Talk to an Engineer</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions (Exact 6 FAQ items from screenshot) */}
      <section className="py-16 lg:py-24 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
              KNOWLEDGE BASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.num}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-slate-300 transition-colors overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#00C875] rounded-2xl cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {faq.num}. {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#00875A] text-white" : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
