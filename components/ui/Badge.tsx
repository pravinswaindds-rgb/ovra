import React from "react";

interface BadgeProps {
  variant?: "cyan" | "blue" | "emerald" | "steel";
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

export function Badge({
  variant = "cyan",
  children,
  className = "",
  dot = false,
}: BadgeProps) {
  const variantStyles = {
    cyan: "bg-[#00D2FF]/10 text-[#00D2FF] border-[#00D2FF]/30",
    blue: "bg-[#0284C7]/15 text-sky-300 border-[#0284C7]/40",
    emerald: "bg-[#10B981]/15 text-emerald-400 border-[#10B981]/30",
    steel: "bg-slate-800/60 text-slate-300 border-slate-700/60",
  }[variant];

  const dotColors = {
    cyan: "bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]",
    blue: "bg-[#0284C7]",
    emerald: "bg-[#10B981] shadow-[0_0_8px_#10B981]",
    steel: "bg-slate-400",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase border ${variantStyles} ${className}`.trim()}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColors} animate-pulse`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

