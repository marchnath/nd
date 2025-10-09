import React from "react";
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
      className="py-14 sm:py-16 md:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="accent-word-bg">
              <span>Services</span>
            </span>{" "}
            & Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Structured for clarity. Flat starting points. Tailored proposals
            after a quick discovery call.
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-xl border border-gray-200 bg-white p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {s.icon}
                  <span className="font-semibold text-sm tracking-tight">
                    {s.title}
                  </span>
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded bg-amber-100 text-amber-700">
                  {s.price}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {s.desc}
              </p>
              <ul className="space-y-1 text-sm text-gray-700 mb-6">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-amber-400">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/2347068241848?text=Hi%20Nerdytics%2C%20I%20want%20to%20start%20the%20%5Bservice%5D%20package.%20Can%20we%20chat%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center w-full text-sm font-medium bg-black text-white px-3 py-2 rounded-full sm:px-4 sm:py-2.5 sm:rounded-md hover:bg-gray-900 transition-colors"
              >
                Start This
              </a>
              <div className="absolute inset-0 rounded-xl pointer-events-none border border-transparent group-hover:border-black/50 transition-colors" />
            </div>
          ))}
        </div>

        {/* Comparison / What you get */}
        <div className="mt-12 md:mt-16 lg:mt-20 rounded-2xl border border-gray-200 p-6 md:p-8 bg-gradient-to-br from-white to-gray-50">
          <h3 className="text-xl font-semibold tracking-tight mb-6">
            What You Get
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="font-semibold mb-2">Speed</p>
              <p className="text-gray-600">
                Lean process + focused scope. Most builds wrap inside 1–2 weeks.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">Strategy</p>
              <p className="text-gray-600">
                We align on outcomes, not fluff. Every feature has a revenue or
                efficiency reason.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">Automation-first</p>
              <p className="text-gray-600">
                Remove recurring manual effort early to free time and compound
                gains.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">Ownership</p>
              <p className="text-gray-600">
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
