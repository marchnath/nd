import React from "react";

// Simple static testimonial data; can be replaced with real submissions later.
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
      className="py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 md:mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Results &{" "}
            <span className="accent-word-bg">
              <span>Feedback</span>
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A sample of what partners say after shipping builds & automation
            with us.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name + t.role}
              className="relative flex flex-col p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                “{t.quote}”
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500 tracking-wide uppercase">
                  {t.role}
                </p>
              </div>
              <div className="absolute -top-3 left-4 h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-[10px] font-semibold">
                ★
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 md:mt-12 lg:mt-14 flex flex-col sm:flex-row items-center gap-4">
          <div className="text-sm text-gray-600">
            Want a deeper case breakdown?
          </div>
          <a
            href="https://wa.me/2349011551837"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm font-medium text-black underline underline-offset-4 decoration-dotted hover:opacity-80"
          >
            Request sample case →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
