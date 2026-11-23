"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#070C14] border-l border-white/10 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C875] to-[#00875A] flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-[#070C14] rounded-[5px] flex items-center justify-center">
                  <span className="text-[#00C875] font-bold text-xs">O</span>
                </div>
              </div>
              <span className="font-bold text-white text-base">ORVA NETWORKS</span>
            </div>
            <button
              type="button"
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C875]"
              onClick={onClose}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Exact Navbar List: Home | About Us | Services | Industries | Company | Careers | Contact Us */}
          <nav className="mt-6 flex flex-col space-y-1">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={onClose}
              className="px-4 py-3 rounded-xl text-base font-medium text-[#00C875] hover:bg-white/5 transition-colors"
            >
              Home
            </Link>

            {/* 2. About Us */}
            <Link
              href="/#about"
              onClick={onClose}
              className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/5 hover:text-[#00C875] transition-colors"
            >
              About Us
            </Link>

            {/* 3. Services (collapsible) */}
            <div className="py-1">
              <button
                type="button"
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/5 hover:text-[#00C875] transition-colors"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    servicesExpanded ? "rotate-180 text-[#00C875]" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesExpanded && (
                <div className="mt-1 space-y-1 pl-4 border-l border-white/10 ml-4 animate-in fade-in duration-150">
                  <Link
                    href="/#services"
                    onClick={onClose}
                    className="block px-3 py-2 text-xs text-slate-300 hover:text-[#00C875] rounded-lg"
                  >
                    DNS Filtering &amp; Protection
                  </Link>
                  <Link
                    href="/#services"
                    onClick={onClose}
                    className="block px-3 py-2 text-xs text-slate-300 hover:text-[#00C875] rounded-lg"
                  >
                    Network Access Control (NAC)
                  </Link>
                  <Link
                    href="/#services"
                    onClick={onClose}
                    className="block px-3 py-2 text-xs text-slate-300 hover:text-[#00C875] rounded-lg"
                  >
                    Networking &amp; Structured Cabling
                  </Link>
                  <Link
                    href="/#services"
                    onClick={onClose}
                    className="block px-3 py-2 text-xs text-slate-300 hover:text-[#00C875] rounded-lg"
                  >
                    Server &amp; Storage Solutions
                  </Link>
                  <Link
                    href="/#services"
                    onClick={onClose}
                    className="block px-3 py-2 text-xs text-slate-300 hover:text-[#00C875] rounded-lg"
                  >
                    Industrial OT Solutions
                  </Link>
                  <Link
                    href="/#services"
                    onClick={onClose}
                    className="block px-3 py-2 text-xs text-[#00C875] font-semibold"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Industries */}
            <Link
              href="/#industries"
              onClick={onClose}
              className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/5 hover:text-[#00C875] transition-colors"
            >
              Industries
            </Link>

            {/* 5. Company */}
            <Link
              href="/#about"
              onClick={onClose}
              className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/5 hover:text-[#00C875] transition-colors"
            >
              Company
            </Link>

            {/* 6. Careers */}
            <Link
              href="/#contact"
              onClick={onClose}
              className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/5 hover:text-[#00C875] transition-colors"
            >
              Careers
            </Link>

            {/* 7. Contact Us */}
            <Link
              href="/#contact"
              onClick={onClose}
              className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/5 hover:text-[#00C875] transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Action Button: Get in Touch */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <Link
            href="/#contact"
            onClick={onClose}
            className="w-full flex items-center justify-center px-5 py-3 rounded-full text-sm font-bold bg-[#00C875] text-[#070C14] hover:bg-[#00E585] transition-colors shadow-lg"
          >
            Get in Touch →
          </Link>

          <div className="text-center text-xs text-slate-400 space-y-1">
            <p>Direct NOC: <a href="tel:08041161040" className="text-white hover:underline">080-41161040</a></p>
            <p>info@orvanetworks.com</p>
            <p>Bangalore, Karnataka, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}
