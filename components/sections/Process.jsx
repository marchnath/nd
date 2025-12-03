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
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            <span className="accent-word-bg">
              <span>Process</span>
            </span>{" "}
            Built For Momentum
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Clarity early. Feedback loops mid-build. Clean handoff or ongoing
            support after launch.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 -z-10" />

          {steps.map((step, i) => (
            <div
              key={step.id}
              className="relative group"
            >
              <div className="w-24 h-24 rounded-2xl bg-white border border-blue-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <span className="text-2xl font-bold text-blue-600 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
                  {step.id}
                </span>
              </div>
              
              <div className="glass-card p-6 rounded-2xl h-full hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
