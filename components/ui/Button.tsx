import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "subtle" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  arrow = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer select-none rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D2FF]";

  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs min-h-[36px]",
    md: "px-5 py-2.5 text-sm min-h-[44px]",
    lg: "px-6 py-3.5 text-base min-h-[50px]",
  }[size];

  const variantClasses = {
    primary:
      "bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-[0_2px_12px_rgba(2,132,199,0.3)] hover:shadow-[0_4px_20px_rgba(2,132,199,0.45)] border border-sky-400/30 active:scale-[0.98]",
    secondary:
      "bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 active:scale-[0.98]",
    subtle:
      "bg-[#162238] hover:bg-[#1E2D4A] text-sky-200 border border-sky-500/20 hover:border-sky-500/40",
    ghost:
      "bg-transparent hover:bg-white/5 text-slate-200 hover:text-white",
    link:
      "bg-transparent p-0 text-[#00D2FF] hover:text-sky-300 underline-offset-4 hover:underline min-h-0",
  }[variant];

  const arrowIcon = arrow && (
    <svg
      className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );

  const combinedClasses = `${baseClasses} ${variant !== "link" ? sizeClasses : ""} ${variantClasses} group ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
          {arrowIcon}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {arrowIcon}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {arrowIcon}
    </button>
  );
}

