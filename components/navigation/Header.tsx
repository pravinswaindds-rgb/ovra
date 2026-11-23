"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Top Utility Bar with Contact Info & Social Icons (from live orvanetworks.com) */}
      <div className="bg-[#050A12] border-b border-white/10 text-[12px] text-slate-300 py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left Contact Details */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="mailto:info@orvanetworks.com"
              className="hover:text-[#00C875] transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-[#00C875]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@orvanetworks.com</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="tel:08041161040"
              className="hover:text-[#00C875] transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-[#00C875]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>080-41161040</span>
            </a>
          </div>

          {/* Right Social Media Channels (exact icons from orvanetworks.com header) */}
          <div className="hidden sm:flex items-center gap-3.5 text-slate-400">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#00C875] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#00C875] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-[#00C875] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="hover:text-[#00C875] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#00C875] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar with Exact Navbar List from Screenshot */}
      <nav
        className={`w-full bg-[#070C14]/95 backdrop-blur-md border-b border-white/10 transition-all duration-200 ${
          isScrolled ? "py-3 shadow-xl shadow-black/50" : "py-4"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#00C875] rounded-lg p-1"
            aria-label="Orva Networks Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00C875] to-[#00875A] p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(0,200,117,0.3)]">
              <div className="w-full h-full bg-[#070C14] rounded-[6px] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#00C875]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none group-hover:text-emerald-400 transition-colors">
                ORVA <span className="text-[#00C875] font-light">NETWORKS</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono text-slate-400 mt-1">
                Enterprise Infrastructure
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links: EXACT LIST FROM USER'S SCREENSHOT */}
          {/* List: Home | About Us | Services | Industries | Company | Careers | Contact Us */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* 1. Home */}
            <Link
              href="/"
              className="px-3.5 py-2 text-sm font-semibold text-[#00C875] hover:text-[#00E585] rounded-md transition-colors"
            >
              Home
            </Link>

            {/* 2. About Us */}
            <Link
              href="/#about"
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-md transition-colors hover:bg-white/5"
            >
              About Us
            </Link>

            {/* 3. Services (with MegaMenu dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-md transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#00C875]"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-[#00C875]" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <MegaMenu
                isOpen={servicesOpen}
                onClose={() => setServicesOpen(false)}
              />
            </div>

            {/* 4. Industries */}
            <Link
              href="/#industries"
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-md transition-colors hover:bg-white/5"
            >
              Industries
            </Link>

            {/* 5. Company */}
            <Link
              href="/#about"
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-md transition-colors hover:bg-white/5"
            >
              Company
            </Link>

            {/* 6. Careers */}
            <Link
              href="/#contact"
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-md transition-colors hover:bg-white/5"
            >
              Careers
            </Link>

            {/* 7. Contact Us */}
            <Link
              href="/#contact"
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-md transition-colors hover:bg-white/5"
            >
              Contact Us
            </Link>
          </div>

          {/* Action Button: Exact "Get in Touch" Button from Screenshot */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold bg-[#00C875] text-[#070C14] hover:bg-[#00E585] transition-all duration-200 shadow-[0_0_20px_rgba(0,200,117,0.3)] hover:shadow-[0_0_25px_rgba(0,200,117,0.5)] group"
            >
              <span>Get in Touch</span>
              <svg
                className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#00C875]"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
