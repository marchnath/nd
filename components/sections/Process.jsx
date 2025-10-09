import React from "react";

const steps = [
  {
    id: "01",
    title: "Discovery Call",
    text: "We map goals, constraints & success metrics in a short focused session.",
  },
  {
    id: "02",
    title: "Design & Architecture",
    text: "Lightweight wireframes + system outline so we move fast with clarity.",
  },
  {
    id: "03",
    title: "Build & Automate",
    text: "Iterative delivery in small chunks. You see progress and give feedback.",
  },
  {
    id: "04",
    title: "Launch & Optimize",
    text: "Deploy, measure, refine. Optional ongoing optimization & support.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-14 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="accent-word-bg">
              <span>Process</span>
            </span>{" "}
            Built For Momentum
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Clarity early. Feedback loops mid-build. Clean handoff or ongoing
            support after launch.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative p-6 rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <span className="absolute -top-3 left-4 text-[11px] font-semibold bg-amber-100 text-amber-600 px-2 py-1 rounded">
                {step.id}
              </span>
              <h3 className="font-semibold tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
