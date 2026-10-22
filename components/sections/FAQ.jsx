"use client";
import React from "react";
import { buildWhatsAppLink } from "@/lib/utils";

const faqs = [
  {
    q: "How fast can we start?",
    a: "Usually within 24–72 hours after our discovery call and agreement on scope.",
  },
  {
    q: "What tech stack do you use?",
    a: "Primarily modern JavaScript/TypeScript (Next.js, Node), automation tools, and APIs. We choose pragmatically.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes—optional lightweight retainers for optimization, automation expansions or feature iterations.",
  },
  {
    q: "What if I only have an idea?",
    a: "We help refine it into a lean, testable version—then build the first iteration fast.",
  },
  {
    q: "Are prices fixed?",
    a: "Each tier is a starting point. After discovery we confirm scope and lock pricing before build.",
  },
  {
    q: "Do I own the code?",
    a: "Fully. You get repos, docs, infra access and can work with anyone else later if you wish.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Frequently asked
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Straight answers so you can move forward confidently.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              className="group glass-card rounded-2xl transition-all duration-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 md:px-8 md:py-6 select-none">
                <span className="font-semibold text-base md:text-lg text-slate-900 group-open:text-blue-600 transition-colors">
                  {item.q}
                </span>
                <span className="ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 group-open:bg-blue-50 group-open:text-blue-600 group-open:rotate-45 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0 md:px-8 md:pb-8 text-slate-600 leading-relaxed animate-fade-in-up">
                {item.a}
              </div>
            </details>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-500">
          Still have questions?{" "}
          <a
            href={buildWhatsAppLink("Hi Nerdytics, I have a quick question.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline"
          >
            Chat with us →
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
