"use client";

import React from "react";
import Link from "next/link";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: "Security" | "Networking" | "Cloud & AI" | "IoT & OT" | "Collaboration";
  href: string;
  icon: React.ReactNode;
}

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="h-full min-h-[330px] sm:min-h-[350px] bg-white rounded-2xl p-8 sm:p-9 border border-slate-200/90 shadow-sm hover:border-[#00C875] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 select-none">
      <div>
        {/* Top Header: Icon on Left with Website Theme Color (#00C875 / #00875A), Title on Right */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#00C875]/10 border border-[#00C875]/25 text-[#00875A] group-hover:bg-[#00C875] group-hover:border-[#00C875] group-hover:text-slate-950 flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs">
            {service.icon}
          </div>
          <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 group-hover:text-[#00875A] transition-colors leading-snug">
            {service.title}
          </h3>
        </div>

        {/* Description with comfortable line height */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-4 min-h-[5.5rem]">
          {service.description}
        </p>
      </div>

      {/* Action: Explore More with Website Theme-Colored Circular Arrow Button */}
      <div className="pt-6 border-t border-slate-100 flex items-center">
        <Link
          href={service.href}
          className="inline-flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-800 group-hover:text-[#00875A] transition-colors group/btn"
          draggable={false}
        >
          <span className="w-8 h-8 rounded-full bg-emerald-50 text-[#00875A] border border-[#00C875]/25 group-hover:bg-[#00C875] group-hover:text-slate-950 flex items-center justify-center transition-all duration-200 shadow-xs group-hover/btn:scale-110">
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span>Explore More</span>
        </Link>
      </div>
    </div>
  );
}
