"use client";

import React from "react";
import Link from "next/link";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-[#050A12] border-t border-white/10 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1-4: Corporate Identity & Real Verified Bangalore Address */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C875] to-[#00875A] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#050A12] rounded-[6px] flex items-center justify-center">
                  <span className="text-[#00C875] font-bold text-xs">O</span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                ORVA <span className="text-[#00C875] font-light">NETWORKS</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Orva Networks Pvt Ltd is a trusted provider of advanced network infrastructure, cybersecurity, and IT management consulting services. We specialize in delivering comprehensive, future-ready solutions that help organizations stay connected, secure, and scalable.
            </p>

            <div className="text-xs font-mono text-slate-400 space-y-1.5 pt-2">
              <p className="text-slate-300 font-semibold">Registered Corporate Office:</p>
              <p className="text-slate-400 leading-normal">
                69, Maruthi Layout, 7th Cross, Basaveshwaranagar, Bengaluru, Karnataka 560079
              </p>
              <p>CIN: U72200KA2008PTC048753 (Est. Dec 31, 2008)</p>
              <p>Direct NOC: <a href="tel:08041161040" className="text-white hover:text-[#00C875] font-bold">080-41161040</a></p>
              <p>Inquiries: <a href="mailto:info@orvanetworks.com" className="text-white hover:text-[#00C875]">info@orvanetworks.com</a></p>
            </div>
          </div>

          {/* Col 5-6: Real Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Infrastructure Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solutions/enterprise-networking" className="hover:text-[#00C875] transition-colors">
                  Networking Solutions &amp; Structured Cabling
                </Link>
              </li>
              <li>
                <Link href="/solutions/enterprise-networking" className="hover:text-[#00C875] transition-colors">
                  Server Virtualization &amp; On-Prem Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions/enterprise-networking" className="hover:text-[#00C875] transition-colors">
                  Enterprise Storage &amp; Disaster Recovery
                </Link>
              </li>
              <li>
                <Link href="/solutions/cybersecurity" className="hover:text-[#00C875] transition-colors">
                  Network Access Control (NAC) &amp; Device Profiling
                </Link>
              </li>
              <li>
                <Link href="/solutions/cybersecurity" className="hover:text-[#00C875] transition-colors">
                  AI-Powered DNS Filtering &amp; Protection
                </Link>
              </li>
              <li>
                <Link href="/solutions/wireless-smart-campus" className="hover:text-[#00C875] transition-colors">
                  Enterprise Wireless &amp; Campus Wi-Fi 6E/7
                </Link>
              </li>
              <li>
                <Link href="/solutions/industrial-utility-it" className="hover:text-[#00C875] transition-colors">
                  Industrial OT Solutions &amp; SCADA Hardening
                </Link>
              </li>
              <li>
                <Link href="/solutions/wireless-smart-campus" className="hover:text-[#00C875] transition-colors">
                  IoT Network Design &amp; Smart Device Integration
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-[#00C875] hover:underline font-semibold block pt-1">
                  View All Services Directory →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 7-8: Industries & Operational Verticals */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Industries Served
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/industries" className="hover:text-[#00C875] transition-colors">
                  Aerospace &amp; Defense (ISRO, BEL)
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#00C875] transition-colors">
                  Energy &amp; Utilities (BHEL)
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#00C875] transition-colors">
                  Heavy Engineering &amp; Rail (BEML)
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#00C875] transition-colors">
                  Healthcare &amp; Hospital IoMT
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#00C875] transition-colors">
                  Manufacturing &amp; Logistics OT
                </Link>
              </li>
              <li>
                <Link href="/deployments" className="hover:text-[#00C875] transition-colors">
                  Global Enterprise Deployments
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00C875] transition-colors">
                  About Orva Networks
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-[#00C875] transition-colors">
                  Company &amp; Leadership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00C875] transition-colors">
                  Contact &amp; 24/7 Support Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 9-12: Newsletter Subscription Form */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Architecture Advisories
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe for our latest engineering updates, DNS security bulletins, and enterprise infrastructure insights. No spam.
            </p>
            <NewsletterForm />
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Orva Networks Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#00C875] font-mono">ISO 27001 Certified Architecture</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
