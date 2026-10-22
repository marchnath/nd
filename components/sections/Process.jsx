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
    <section id="process" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            <span className="accent-word-bg">
              <span>Momentum</span>
            </span>{" "}
            built in
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Clarity early. Feedback loops mid-build. Clean handoff or ongoing
            support after launch.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 md:gap-6 lg:gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-blue-200 via-blue-300 to-blue-100" />

          {steps.map((step, i) => (
            <div key={step.id} className="relative group">
              {/* Number node */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-white border border-blue-100 shadow-sm flex items-center justify-center mb-6 group-hover:border-blue-300 group-hover:ring-4 group-hover:ring-blue-500/10 transition-all duration-300">
                <span className="text-sm font-bold text-blue-600">
                  {step.id}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
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
