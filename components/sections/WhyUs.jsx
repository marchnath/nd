import React from "react";

const pillars = [
  {
    title: "Execution Speed",
    text: "Focused sprints + pre-optimized patterns mean you see usable progress within days—not weeks.",
  },
  {
    title: "Outcome Driven",
    text: "Every decision is tied to revenue enablement, efficiency or retention. No aesthetic bloat.",
  },
  {
    title: "Automation Mindset",
    text: "We remove recurring manual input early—stacking compound leverage into your ops & marketing.",
  },
  {
    title: "Transparent Pricing",
    text: "Flat starting tiers + scoped expansions. You always know the financial path ahead.",
  },
  {
    title: "Communication Rhythm",
    text: "Async updates + milestone reviews keep you in the loop without meeting fatigue.",
  },
  {
    title: "Ownership & Handoff",
    text: "Documentation + source + environment access. Use us again—but never depend on us.",
  },
];

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 md:mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why{" "}
            <span className="accent-word-bg">
              <span>Work</span>
            </span>{" "}
            With Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A hybrid between a lean product team and an automation studio. We
            build what actually moves numbers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2 tracking-tight">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
