import React from "react";

const OfferRibbon = () => {
  return (
    <div className="w-full bg-slate-900 text-white text-center text-sm py-2.5 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 relative z-50 border-b border-white/10">
      <span className="inline-flex items-center gap-2 font-medium tracking-tight">
        <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
          New
        </span>
        <span className="text-slate-200">
          Accepting new projects for <strong className="text-white">Q1 2026</strong>
        </span>
      </span>
      <a
        href="#contact"
        className="text-blue-400 hover:text-blue-300 font-semibold transition-colors flex items-center gap-1 group"
      >
        Get a quote <span className="group-hover:translate-x-0.5 transition-transform">→</span>
      </a>
    </div>
  );
};

export default OfferRibbon;
