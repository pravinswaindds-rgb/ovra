"use client";

import React, { useState } from "react";

export function QuoteAndMapSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-28 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Request a free quote Form (exact from screenshot) */}
          <div className="lg:col-span-5 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
                FAST ENGAGEMENT DESK
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Request a free quote
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Tell us about your campus, facility, or data center network requirements. Our engineering team responds within 24 hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#00C875] text-[#070C14] flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Quote Request Received!</h3>
                  <p className="text-xs text-slate-600">
                    An Orva Networks senior infrastructure architect will connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-name" className="sr-only">Your Name</label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C875]"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-phone" className="sr-only">Phone No.</label>
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        placeholder="Phone No."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C875]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quote-email" className="sr-only">Email Address</label>
                    <input
                      id="quote-email"
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C875]"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-message" className="sr-only">Your Text Message...</label>
                    <textarea
                      id="quote-message"
                      rows={4}
                      required
                      placeholder="Your Text Message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C875] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#00C875] hover:bg-[#00E585] text-[#070C14] font-bold text-sm tracking-wide transition-all shadow-md cursor-pointer"
                  >
                    Submit Quote Request →
                  </button>
                </form>
              )}
            </div>

            <div className="pt-6 border-t border-slate-200 mt-6 text-xs text-slate-500 font-mono">
              Direct Phone: <a href="tel:08041161040" className="text-slate-800 font-bold hover:underline">080-41161040</a> • info@orvanetworks.com
            </div>
          </div>

          {/* Right Column: Bangalore Head Office Location & Map (exact from screenshot) */}
          <div className="lg:col-span-7 bg-[#070D18] rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 text-white relative">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#00E599] uppercase">
                    REGISTERED CORPORATE HEADQUARTERS
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Orva Networks Private Limited
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Est. Dec 31, 2008
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono mb-6">
                <p className="flex items-start gap-2">
                  <span className="text-[#00E599]">📍</span>
                  <span>69, Maruthi Layout, 7th Cross, Basaveshwaranagar, Bengaluru, Karnataka 560079</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#00E599]">📞</span>
                  <span>Direct NOC: 080-41161040</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#00E599]">✉</span>
                  <span>info@orvanetworks.com</span>
                </p>
              </div>
            </div>

            {/* Simulated Interactive Map Viewport with Pin */}
            <div className="w-full h-64 rounded-2xl bg-slate-900 border border-white/15 overflow-hidden relative flex items-center justify-center shadow-inner">
              <iframe
                title="Orva Networks Bangalore Corporate Headquarters"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8963283289053!2d77.53480087596043!3d12.978479214731872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ddbc7d3597d%3A0x6bbfad99cbfdfd35!2sBasaveshwar%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 contrast-125"
              />
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-slate-400 font-mono mt-4">
              <span>CIN: U72200KA2008PTC048753</span>
              <span className="text-[#00E599]">24/7 Operations Desk</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
