"use client";

import React, { useActionState } from "react";
import { subscribeNewsletter, NewsletterState } from "@/app/actions/newsletter";

const initialState: NewsletterState = {};

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribeNewsletter, initialState);

  return (
    <div className="w-full">
      <form action={formAction} className="flex flex-col sm:flex-row gap-2.5" noValidate>
        <div className="relative flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Corporate Email Address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            placeholder="Enter corporate email"
            aria-describedby={state.error ? "newsletter-error" : undefined}
            className="w-full bg-white/[0.05] border border-white/15 rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:border-[#00C875] focus:outline-none transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="px-4 py-2.5 rounded-lg bg-[#00C875] hover:bg-[#00E585] text-[#070C14] font-bold text-xs transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-h-[40px] shadow-md"
        >
          {isPending ? (
            <span className="inline-flex items-center gap-1.5">
              <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Joining...</span>
            </span>
          ) : (
            <span>Subscribe</span>
          )}
        </button>
      </form>

      {state.success && (
        <p className="text-xs text-emerald-400 mt-2 font-medium" role="status">
          ✓ {state.message}
        </p>
      )}

      {state.error && (
        <p id="newsletter-error" className="text-xs text-rose-400 mt-2 font-medium" role="alert">
          ⚠ {state.error}
        </p>
      )}
    </div>
  );
}
