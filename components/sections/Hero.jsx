"use client";
import React from "react";
import { clientContactSchema, zodToErrors } from "@/lib/schemas/contact";
// SocialGroup removed; floating global component now handles social links.

const stats = [
  { label: "90% projects < 2 weeks" },
  { label: "Automation-first builds" },
  { label: "Transparent pricing" },
  { label: "Full ownership" },
];

const Hero = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState({
    loading: false,
    success: false,
    serverError: "",
  });

  const validate = () => {
    const parsed = clientContactSchema.safeParse(form);
    if (!parsed.success) {
      setErrors(zodToErrors(parsed.error));
      return false;
    }
    setErrors({});
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, serverError: "" });
    if (!validate()) {
      setStatus((s) => ({ ...s, loading: false }));
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "hero" }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        const errMsg = json?.error || "Failed to send. Try again.";
        setStatus({ loading: false, success: false, serverError: errMsg });
        return;
      }
      setStatus({ loading: false, success: true, serverError: "" });
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        serverError: "Network error. Please retry.",
      });
    }
  };

  return (
    <section className="relative overflow-hidden" id="top">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_60%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-14 sm:pb-16 md:pt-16 md:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
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
            <ul className="mt-8 md:mt-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-3 max-w-xl">
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
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      className={`w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black ${
                        errors.name ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      type="email"
                      placeholder="Email"
                      className={`w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black ${
                        errors.email ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Phone Number (optional)"
                    className={`w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black ${
                      errors.phone ? "border-red-400" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="What do you want to build or automate?"
                    className={`w-full min-h-[110px] rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black ${
                      errors.message ? "border-red-400" : "border-gray-300"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  disabled={status.loading}
                  className="w-full inline-flex items-center justify-center rounded-full sm:rounded-md bg-black text-white text-sm font-semibold px-5 py-3 hover:bg-gray-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.loading ? "Sending…" : "Send Message →"}
                </button>
                {status.serverError && (
                  <p className="text-sm text-red-600 text-center">
                    {status.serverError}
                  </p>
                )}
                {status.success && (
                  <p className="text-sm text-green-600 text-center">
                    Thanks! We received your message.
                  </p>
                )}
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
