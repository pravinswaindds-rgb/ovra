"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Does Orva Networks offer ongoing support after implementation?",
    a: "Yes. We provide 24/7 technical support, proactive monitoring, and maintenance services from our Bangalore Network Operations Center (NOC) to ensure your enterprise infrastructure remains healthy, updated, and continuously available.",
  },
  {
    q: "What industries does Orva Networks serve?",
    a: "We cater to high-reliability sectors including Aerospace & Defense (ISRO, BEL), Heavy Energy & Utilities (BHEL), Rail & Heavy Engineering (BEML), Healthcare IoMT, and Industrial Smart Manufacturing — offering customized, compliant network architectures.",
  },
  {
    q: "Can Orva Networks integrate with my existing IT infrastructure?",
    a: "Absolutely. Starting at the Test Bed phase, our engineering team audits your existing hardware, switches, and server deployments to ensure seamless integration, zero downtime migration, and maximum ROI on legacy capital investments.",
  },
  {
    q: "What services does Orva Networks Pvt Ltd provide?",
    a: "Orva Networks delivers end-to-end IT infrastructure: enterprise core routing & switching, server virtualization, SAN/NAS storage, AI-powered DNS filtering, 802.1X Network Access Control (NAC), high-density Wi-Fi 6E/7, and industrial OT/SCADA hardening.",
  },
  {
    q: "How does Orva approach cybersecurity and threat protection?",
    a: "Our multi-layered defense architecture integrates hardware-enforced 802.1X port profiling, proactive DNS-level malware blocking, micro-segmentation, and strict air-gapped isolation for defense and sensitive public sector environments.",
  },
  {
    q: "Where is Orva Networks headquartered and how do we engage?",
    a: "Orva Networks Private Limited (incorporated Dec 31, 2008) is headquartered at 69, Maruthi Layout, 7th Cross, Basaveshwaranagar, Bengaluru, Karnataka 560079. You can reach our engineering desk directly at 080-41161040 or schedule an infrastructure consultation.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 lg:py-28 text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Explore How Orva Can Secure &amp; Scale Your Business
          </h2>
          <p className="text-sm text-slate-600 mt-3">
            Clear insights into our engineering engagement, deployment methodologies, and 24/7 support lifecycle.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-slate-300 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#00C875] rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#00875A] text-white" : "text-slate-600"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-xs text-slate-600">
            Have a custom network sizing inquiry or require an on-site RF campus survey?{" "}
            <Link href="/contact" className="font-bold text-[#00875A] hover:underline">
              Contact our Bangalore NOC at 080-41161040 →
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
