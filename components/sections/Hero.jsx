"use client";
import React from "react";
// SocialGroup removed; floating global component now handles social links.

const stats = [
  { label: "90% projects < 2 weeks" },
  { label: "Automation-first builds" },
  { label: "Transparent pricing" },
  { label: "Full ownership" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden" id="top">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_60%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left copy */}
          <div className="lg:col-span-7 xl:col-span-7 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-black">
              Build,{" "}
              <span className="accent-word-bg">
                <span>Automate</span>
              </span>{" "}
              & Launch{" "}
              <span className="bg-gradient-to-r from-black to-neutral-500 bg-clip-text text-transparent">
                Faster
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              We turn ideas into revenue-ready websites, apps & automated
              systems—so you escape bottlenecks and scale with confidence.
            </p>
            {/* Stats: 2-column responsive grid with star bullets */}
            <ul className="mt-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-3 max-w-xl">
              {stats.map((s) => (
                <li
                  key={s.label}
                  className="group flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/70 backdrop-blur px-4 py-2 shadow-sm hover:shadow transition-colors hover:border-gray-300 hover:bg-white"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-100 text-amber-600 ring-1 ring-amber-300/40 group-hover:scale-110 transition-transform">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 fill-current"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span className="sr-only">Feature:</span>
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-medium tracking-wide text-gray-700 group-hover:text-black transition-colors">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact form panel */}
          <div className="lg:col-span-5 xl:col-span-5 w-full">
            <div className="relative rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm p-6 shadow-sm">
              <div className="absolute -top-4 left-6 px-2 py-0.5 text-[11px] font-semibold rounded bg-black text-white">
                Quick Contact
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="Name"
                    className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
                <textarea
                  required
                  placeholder="What do you want to build or automate?"
                  className="w-full min-h-[110px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="w-full inline-flex items-center justify-center rounded-md bg-black text-white text-sm font-semibold px-5 py-3 hover:bg-gray-900 transition-colors">
                  Send Message →
                </button>
                <p className="text-[11px] text-gray-500 text-center">
                  We reply within 15 minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
