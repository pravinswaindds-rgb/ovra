import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Orva Networks - Enterprise Network Solutions",
  description:
    "Orva Networks Pvt Ltd is a leading provider of advanced network infrastructure, cybersecurity, and IT management consulting services, headquartered in Bangalore.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* 1. Hero Banner with Dark Infoblox Theme & Breadcrumb */}
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
            ABOUT ORVA NETWORKS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            About Us
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
            <span className="text-[#00C875] font-semibold">About Us</span>
          </nav>
        </div>
      </section>

      {/* 2. Section 1: About Us (Lock Image on Left, Story on Right) */}
      <section className="py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Visual: Golden Padlock on Circuit Board */}
            <div className="relative group">
              <div
                className="absolute -inset-2 bg-gradient-to-r from-[#00C875]/20 to-[#00D2FF]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative h-[360px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl">
                <Image
                  src="/images/about-gold-lock.jpg"
                  alt="Orva Networks Secure Infrastructure Lock"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>

            {/* Content Column */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                About Us
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  Orva Networks Pvt Ltd is a trusted provider of advanced network infrastructure and IT management consulting services. We specialize in delivering comprehensive, future-ready solutions that help organizations stay connected, secure, and scalable.
                </p>
                <p>
                  Our core expertise spans network design, cybersecurity, data storage, network optimization, and IT infrastructure management – enabling enterprises to achieve operational efficiency and digital transformation.
                </p>
                <p>
                  With a focus on reliability and innovation, Orva empowers businesses to build resilient systems that support growth and adaptability in an ever-evolving technology landscape.
                </p>
              </div>

              {/* Value Badges */}
              <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="text-2xl font-black text-[#00875A] mb-1">2008</div>
                  <div className="text-xs text-slate-600 font-medium">Incorporated in Bangalore</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="text-2xl font-black text-[#00875A] mb-1">24/7/365</div>
                  <div className="text-xs text-slate-600 font-medium">Mission-Critical Support</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-[#00875A] mb-1">99.99%</div>
                  <div className="text-xs text-slate-600 font-medium">Uptime Guarantee</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Section 2: Core Services (Text on Left, Handshake Image on Right) */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Content Column */}
            <div className="order-2 lg:order-1">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
                TEST BED TO DEPLOYMENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                Orva Networks Pvt Ltd’s Core Services
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  At Orva Networks, we believe in co-creating success with our clients from the earliest stage. Starting at the <strong className="text-slate-900 font-semibold">Test Bed phase</strong>, our experts engage closely with your team to understand your challenges, infrastructure, and objectives.
                </p>
                <p>
                  We design scalable, cost-efficient solutions that align technology with strategy, ensuring your systems evolve smoothly as your business grows.
                </p>
                <p>
                  Our approach ensures seamless integration, strategic planning, and technically sound solutions tailored to meet both immediate and long-term goals – empowering sustainable digital growth.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-[#00C875]" />
                  Strategic Network Audits
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-[#00C875]" />
                  Zero-Disruption Migration
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-[#00C875]" />
                  Custom Deploy Mesh
                </span>
              </div>
            </div>

            {/* Visual: Handshake in Boardroom */}
            <div className="order-1 lg:order-2 relative group">
              <div
                className="absolute -inset-2 bg-gradient-to-r from-[#00D2FF]/20 to-[#00C875]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative h-[360px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl">
                <Image
                  src="/images/about/section2-handshake.jpg"
                  alt="Co-Creating Success at Test Bed Phase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Section 3: Orva Operations (Operations Team on Left, Text on Right) */}
      <section className="py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Visual: Operations / Engineering Center */}
            <div className="relative group">
              <div
                className="absolute -inset-2 bg-gradient-to-r from-[#00C875]/20 to-[#00D2FF]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative h-[360px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl">
                <Image
                  src="/images/about/section3-operations.jpg"
                  alt="Orva Unified IT Operations and 24/7 Service Desk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Content Column */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
                UNIFIED IT MANAGEMENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                Orva Operations
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  Orva provides complete IT service management through a unified operations model – ensuring reliability, performance, and support from a single point of contact.
                </p>
                <p>
                  Our <strong className="text-slate-900 font-semibold">24/7 Service Desk</strong> enables efficient incident reporting and request handling, while proactive monitoring ensures all servers and devices remain healthy and secure.
                </p>
                <p>
                  We standardize and manage workstations, laptops, and servers to maintain productivity across your enterprise, while our dedicated application support team ensures smooth updates and uninterrupted operations – keeping your business running efficiently at all times.
                </p>
              </div>

              {/* Operations Highlights */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#00C875]/10 text-[#00875A] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">24/7 Incident Escalation &amp; Resolution</h4>
                    <p className="text-xs text-slate-600">Guaranteed SLAs for critical network and server infrastructure.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#00C875]/10 text-[#00875A] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Unified Fleet &amp; Workstation Governance</h4>
                    <p className="text-xs text-slate-600">Standardized patch management, OS deployment, and compliance.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Section 4: Technical Expertise & Innovation (Text on Left, AI Shield Image on Right) */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Content Column */}
            <div className="order-2 lg:order-1">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
                CUTTING-EDGE INNOVATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                Technical Expertise &amp; Innovation
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  At Orva Networks Pvt Ltd, we deliver smart, secure, and scalable IT infrastructure solutions that combine deep technical knowledge with cutting-edge AI and IoT innovation.
                </p>
                <p>
                  Our expertise spans network design, cybersecurity, data management, and system optimization – ensuring every layer of your IT environment performs at its best.
                </p>
                <p>
                  We help enterprises modernize their technology stack, enhance resilience, and achieve seamless integration across platforms – enabling faster innovation, improved visibility, and long-term operational excellence.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00C875] text-[#070C14] font-bold text-base hover:bg-[#00E585] transition-all shadow-sm"
                >
                  <span>Explore All 23 Solutions</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-base transition-colors"
                >
                  <span>Contact Our Engineers</span>
                </Link>
              </div>
            </div>

            {/* Visual: Cyber Shield / Digital Network Mesh */}
            <div className="order-1 lg:order-2 relative group">
              <div
                className="absolute -inset-2 bg-gradient-to-r from-[#00C875]/20 to-[#00D2FF]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative h-[360px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl">
                <Image
                  src="/images/about/section4-innovation.jpg"
                  alt="Cutting Edge AI and Cybersecurity Innovation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Corporate Governance & Bangalore HQ Details */}
      <section className="py-16 bg-[#070D18] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-[#00E599] uppercase block mb-1">Corporate Identity Number</span>
              <p className="text-lg font-bold text-white font-mono">U72200KA2008PTC048753</p>
              <p className="text-xs text-slate-400 mt-1">Registered with RoC-Bangalore</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-[#00E599] uppercase block mb-1">Registered Office</span>
              <p className="text-sm font-medium text-white leading-relaxed">
                #69, Maruthi Layout, 7th Cross, Basaveshwaranagar, Bengaluru – 560079
              </p>
              <p className="text-xs text-slate-400 mt-1">Karnataka, India</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-[#00E599] uppercase block mb-1">Direct Engineering Desk</span>
              <p className="text-lg font-bold text-white font-mono">080-41161040</p>
              <p className="text-xs text-slate-400 mt-1">info@orvanetworks.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
