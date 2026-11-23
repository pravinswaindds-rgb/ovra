"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface StatItem {
  numericValue: number;
  suffix: string;
  label: string;
  subtext: string;
}

const stats: StatItem[] = [
  {
    numericValue: 200,
    suffix: "+",
    label: "CLIENTS",
    subtext: "Enterprise and public-sector organizations trust Orva Networks for mission-critical connectivity.",
  },
  {
    numericValue: 50,
    suffix: "+",
    label: "QUALIFIED EXPERTS",
    subtext: "Certified network architects, cybersecurity specialists, and systems engineers.",
  },
  {
    numericValue: 10,
    suffix: "+",
    label: "COUNTRIES SERVED",
    subtext: "Global footprint delivering multi-site enterprise and industrial network deployments.",
  },
  {
    numericValue: 90000,
    suffix: "+",
    label: "PROJECTS COMPLETE",
    subtext: "Successful network, server, storage, wireless, and cybersecurity implementations since 2008.",
  },
];

function AnimatedCounter({
  target,
  suffix = "",
  hasStarted,
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  hasStarted: boolean;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic curve: fast start, smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [hasStarted, target, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // Trigger once on scroll into view
        }
      },
      {
        threshold: 0.2, // Starts when 20% of section is visible
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#070D18] py-20 lg:py-24 text-white border-b border-white/10 relative overflow-hidden"
    >
      {/* Subtle ambient light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00C875]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Heading from screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00E599] block mb-2">
            PROVEN TRACK RECORD &amp; EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Skilled Professionals at Your Service
          </h2>
          <p className="text-base text-slate-400 mt-3">
            Decades of combined engineering excellence delivering deterministic performance and rock-solid uptime.
          </p>
        </div>

        {/* 4 Statistics Cards without Trophy Icon, with Scroll Count-Up Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white/[0.03] p-8 sm:p-9 rounded-2xl border border-white/10 hover:border-[#00C875] hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between text-center group hover:-translate-y-1"
            >
              <div>
                {/* Dynamic animated count-up number */}
                <div className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold font-mono tracking-tight text-white mb-3 group-hover:text-[#00E599] transition-colors leading-tight">
                  <AnimatedCounter
                    target={item.numericValue}
                    suffix={item.suffix}
                    hasStarted={hasStarted}
                  />
                </div>

                <h3 className="text-sm font-bold font-mono tracking-wider text-[#00C875] uppercase mb-3">
                  {item.label}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C875]" />
                <span>Verified Record</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00E599] hover:underline uppercase tracking-wider font-mono"
          >
            <span>Explore Case Studies &amp; Global Deployments</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
