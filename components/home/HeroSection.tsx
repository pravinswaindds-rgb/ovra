"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import SwarmCursor from "./SwarmCursor";

interface SlideData {
  id: string;
  title: React.ReactNode;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

const slides: SlideData[] = [
  {
    id: "slide-1",
    title: (
      <>
        Complete Network Solutions for a <br className="hidden sm:inline" />
        Secure &amp; Connected Future
      </>
    ),
    subtitle:
      "Orva Networks Pvt Ltd is a leading provider of advanced Network Infrastructure and Management Consulting services.",
    ctaText: "Get Started",
    ctaHref: "#contact",
  },
  {
    id: "slide-2",
    title: (
      <>
        Smart Network Infrastructure for a <br className="hidden sm:inline" />
        Smarter World
      </>
    ),
    subtitle: "Future-Ready Networks Built for Speed, Security & Scalability",
    ctaText: "Get Started",
    ctaHref: "#contact",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay timer every 7 seconds, pauses when user hovers
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // Keyboard left/right navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const current = slides[activeSlide];

  return (
    <section
      className="relative bg-[#060D1A] min-h-[540px] md:min-h-[620px] lg:min-h-[680px] flex items-center justify-center overflow-hidden text-white select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-roledescription="carousel"
      aria-label="Hero Highlights"
    >
      {/* Background Graphic: Clean Ambient Radial Glows & Vignette */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Ambient radial glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-radial from-[#0052CC]/15 via-[#00C875]/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#00D2FF]/10 to-transparent rounded-full blur-2xl" />

        {/* Subtle dark gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-transparent to-[#060D1A]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D1A] via-transparent to-[#060D1A] pointer-events-none" />
      </div>

      {/* React Bits Swarm Cursor Interactive Layer */}
      <SwarmCursor
        className="w-full h-full min-h-[540px] md:min-h-[620px] lg:min-h-[680px] flex items-center justify-center relative z-10"
        color="#00C875"
        accentColor="#00D2FF"
        count={900}
        size={5.6}
        shape="dot"
        spread={250}
        speed={1}
        swirl={0.8}
        tail={0.65}
        trail={0.85}
        depth={0.85}
        wander={0.8}
        targets="a, button, [data-swarm-target]"
        idle="roam"
        clickEffect="burst"
        hideCursor={false}
      >
        {/* Navigation Arrow: Previous (Left) - Clean Arrow Only */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 p-2 text-[#00C875] hover:text-[#00E585] transition-all duration-200 cursor-pointer focus:outline-none group opacity-85 hover:opacity-100"
          aria-label="Previous Slide"
        >
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Navigation Arrow: Next (Right) - Clean Arrow Only */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 p-2 text-[#00C875] hover:text-[#00E585] transition-all duration-200 cursor-pointer focus:outline-none group opacity-85 hover:opacity-100"
          aria-label="Next Slide"
        >
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Main Slide Content: Centered & Focused on Slide Text */}
        <div className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10 py-16 md:py-24 text-center">
          <div
            key={current.id}
            className="flex flex-col items-center justify-center animate-in fade-in duration-300"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${activeSlide + 1} of ${slides.length}`}
          >
            {/* Main Headline: Two balanced lines with refined scale */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-white tracking-tight leading-[1.18] max-w-4xl mx-auto drop-shadow-md">
              {current.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl sm:max-w-3xl mx-auto font-normal leading-relaxed">
              {current.subtitle}
            </p>

            {/* Single Focused "Get Started" CTA with Website Theme Color */}
            <div className="mt-8 sm:mt-10 flex items-center justify-center">
              <Link
                href={current.ctaHref}
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#00C875] hover:bg-[#00E585] text-[#070C14] font-bold text-base sm:text-lg shadow-[0_0_25px_rgba(0,200,117,0.4)] hover:shadow-[0_0_35px_rgba(0,200,117,0.65)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{current.ctaText}</span>
                <svg
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Pagination Indicator Pills */}
          <div className="flex items-center justify-center gap-2.5 mt-10 sm:mt-12">
            {slides.map((s, index) => {
              const isActive = activeSlide === index;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C875] ${isActive
                    ? "w-8 h-2.5 bg-[#00C875] shadow-[0_0_12px_rgba(0,200,117,0.7)]"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={isActive}
                />
              );
            })}
          </div>
        </div>
      </SwarmCursor>
    </section>
  );
}
