"use client";
import React from "react";

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
    <section id="faq" className="py-14 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Straight answers so you can move forward confidently.
          </p>
        </div>
        <div className="divide-y divide-gray-200 border rounded-xl border-gray-200 bg-white overflow-hidden">
          {faqs.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5">
                <span className="font-medium text-sm md:text-base text-gray-900 group-open:text-black">
                  {item.q}
                </span>
                <span className="ml-4 text-amber-400 group-open:rotate-45 transition-transform select-none">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 pt-0 text-sm md:text-base text-gray-600 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
