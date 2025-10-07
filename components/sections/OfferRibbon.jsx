import React from "react";

const OfferRibbon = () => {
  // Hard-coded deadline (could later be dynamic)
  const deadline = "Oct 5";
  return (
    <div className="w-full bg-gradient-to-r from-black via-neutral-800 to-black text-white text-center text-sm py-2 px-4 flex flex-col sm:flex-row items-center justify-center gap-2">
      <span className="inline-flex items-center gap-1 font-medium tracking-tight">
        <span className="px-2 py-0.5 rounded-full bg-white text-black text-[11px] font-semibold uppercase">
          Limited
        </span>
        <span>
          Launch Offer: <strong>30% off</strong> when you start before{" "}
          {deadline}
        </span>
      </span>
      <a
        href="#contact"
        className="underline decoration-dotted underline-offset-4 hover:opacity-90"
      >
        Book your free call →
      </a>
    </div>
  );
};

export default OfferRibbon;
