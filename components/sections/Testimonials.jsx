import React from "react";
import { buildWhatsAppLink } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "They scoped, built and launched our internal dashboard in under 10 days. It removed 6+ hours a week of manual updating.",
    name: "Elena R.",
    role: "Operations Lead",
  },
  {
    quote:
      "Our landing site redesign paid for itself in the first month. Conversions almost doubled after launch.",
    name: "Marcus T.",
    role: "Founder, SaaS",
  },
  {
    quote:
      "They automated our proposal + follow‑up process. We now respond 4x faster and close more deals.",
    name: "Danielle P.",
    role: "Agency Owner",
  },
  {
    quote:
      "Clear, fast, reliable. We shipped an MVP that actually got users — without scope creep.",
    name: "Victor H.",
    role: "Product Initiator",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Results &{" "}
            <span className="accent-word-bg">
              <span>Feedback</span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            A sample of what partners say after shipping builds & automation
            with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name + t.role}
              className={`glass-card p-6 rounded-2xl flex flex-col hover:-translate-y-1 transition-transform duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-xs font-bold">
                  ★
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed flex-1 mb-6 font-medium">
                “{t.quote}”
              </p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500 tracking-wide uppercase mt-0.5">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-300">
          <div className="text-sm text-slate-600 font-medium">
            Want a deeper case breakdown?
          </div>
          <a
            href={buildWhatsAppLink(
              "Hi Nerdytics, could you share a detailed sample case study?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
          >
            Request sample case 
            <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
