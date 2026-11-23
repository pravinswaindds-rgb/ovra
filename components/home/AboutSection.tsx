"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28 text-slate-900 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Security Lock Image from orvanetworks.com */}
          <div className="lg:col-span-5 h-full flex items-center">
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] xl:h-[500px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl group bg-[#070D18]">
              <Image
                src="/images/about-gold-lock.jpg"
                alt="Orva Networks Enterprise Security & Infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center rounded-3xl transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Exact Copy from orvanetworks.com */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
              ABOUT ORVA NETWORKS PVT LTD
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              About Us
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              <p>
                At Orva Networks, we believe in co-creating success with our clients from the earliest stage. Starting at the <strong className="text-slate-900 font-semibold">Test Bed phase</strong>, our experts engage closely with your team to understand your challenges, infrastructure, and objectives.
              </p>
              <p>
                We design scalable, cost-efficient solutions that align technology with strategy, ensuring your systems evolve smoothly as your business grows.
              </p>
              <p>
                Our approach ensures seamless integration, strategic planning, and technically sound solutions tailored to meet both immediate and long-term goals — empowering sustainable digital growth.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00C875] text-[#070C14] font-bold text-sm hover:bg-[#00E585] transition-all duration-200 shadow-md group"
            >
              <span>Read More</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
