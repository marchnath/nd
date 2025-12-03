import React from "react";
import { buildWhatsAppLink } from "@/lib/utils";
import { FaGlobeAmericas, FaCogs, FaRobot, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: <FaGlobeAmericas className="h-6 w-6" />,
    title: "Modern Websites",
    price: "$800",
    desc: "Crafted to convert with SEO, speed + clear calls to action.",
    bullets: [
      "Custom design",
      "Fast & responsive",
      "Lead capture ready",
      "SEO foundations",
    ],
  },
  {
    icon: <FaCogs className="h-6 w-6" />,
    title: "Apps & Custom Software",
    price: "$1500",
    desc: "MVPs, internal tools & product builds delivered fast.",
    bullets: [
      "Rapid iterations",
      "Scalable architecture",
      "API integrations",
      "Ownership + handoff",
    ],
  },
  {
    icon: <FaRobot className="h-6 w-6" />,
    title: "Business Automation",
    price: "$800",
    desc: "Eliminate manual workflows & reclaim productive hours.",
    bullets: [
      "Process mapping",
      "No/low-code + custom",
      "CRM & ops automations",
      "Reporting & alerts",
    ],
  },
  {
    icon: <FaChartLine className="h-6 w-6" />,
    title: "Social Growth Automation",
    price: "$500",
    desc: "Systems to schedule, engage & grow consistently.",
    bullets: [
      "Content automation",
      "Inbox workflows",
      "Engagement loops",
      "Growth analytics",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 sm:py-24 bg-slate-50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            <span className="accent-word-bg">
              <span>Services</span>
            </span>{" "}
            & Pricing
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Structured for clarity. Flat starting points. Tailored proposals
            after a quick discovery call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass-card p-6 rounded-2xl flex flex-col hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <span className="text-sm font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {s.price}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {s.desc}
              </p>
              
              <ul className="space-y-3 text-sm text-slate-700 mb-8 flex-1">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span className="font-medium">{b}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={buildWhatsAppLink(
                  `Hi Nerdytics, I want to start the ${s.title} package. Can we chat?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center w-full text-sm font-bold bg-slate-900 text-white px-4 py-3 rounded-xl hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                Start This
              </a>
            </div>
          ))}
        </div>

        {/* Comparison / What you get */}
        <div className="mt-16 md:mt-24 rounded-3xl border border-white/60 bg-white/40 backdrop-blur-md p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-8">
            What You Get
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="font-bold text-slate-900">Speed</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Lean process + focused scope. Most builds wrap inside 1–2 weeks.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="font-bold text-slate-900">Strategy</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We align on outcomes, not fluff. Every feature has a revenue or
                efficiency reason.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="font-bold text-slate-900">Automation-first</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Remove recurring manual effort early to free time and compound
                gains.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-bold text-slate-900">Ownership</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                You keep source, stack access & documentation—no lock-in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
