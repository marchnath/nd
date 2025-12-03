import React from "react";
import { Zap, Target, Cpu, Receipt, MessageSquare, Lock } from "lucide-react";

const pillars = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Execution Speed",
    text: "Focused sprints + pre-optimized patterns mean you see usable progress within days—not weeks.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Outcome Driven",
    text: "Every decision is tied to revenue enablement, efficiency or retention. No aesthetic bloat.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Automation Mindset",
    text: "We remove recurring manual input early—stacking compound leverage into your ops & marketing.",
  },
  {
    icon: <Receipt className="w-6 h-6" />,
    title: "Transparent Pricing",
    text: "Flat starting tiers + scoped expansions. You always know the financial path ahead.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Communication Rhythm",
    text: "Async updates + milestone reviews keep you in the loop without meeting fatigue.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Ownership & Handoff",
    text: "Documentation + source + environment access. Use us again—but never depend on us.",
  },
];

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Why{" "}
            <span className="accent-word-bg">
              <span>Work</span>
            </span>{" "}
            With Us
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            A hybrid between a lean product team and an automation studio. We
            build what actually moves numbers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
