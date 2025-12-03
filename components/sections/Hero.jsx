"use client";
import React from "react";
import { clientContactSchema, zodToErrors } from "@/lib/schemas/contact";

const stats = [
  { label: "Full ownership" },
  { label: "Transparent pricing" },
  { label: "90% projects < 2 weeks" },
  { label: "Work You’ll Love — Guaranteed" },
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
    <section className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-12" id="top">
      {/* Premium Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-transparent opacity-70" />
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-3xl animate-float" />
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-100/40 blur-3xl animate-float delay-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left copy */}
          <div className="lg:col-span-7 xl:col-span-7 max-w-3xl pt-8 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 animate-fade-in-up delay-100">
              Build,{" "}
              <span className="accent-word-bg">
                <span>Automate</span>
              </span>{" "}
              & Launch{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Faster
              </span>
            </h1>
            
            <p className="mt-8 text-xl text-slate-600 leading-relaxed font-medium max-w-2xl animate-fade-in-up delay-200">
              We turn ideas into revenue-ready websites, apps & automated
              systems—so you escape bottlenecks and scale with confidence.
            </p>
            
            {/* Stats */}
            <ul className="mt-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 max-w-xl animate-fade-in-up delay-300">
              {stats.map((s) => (
                <li
                  key={s.label}
                  className="group flex items-center gap-3 rounded-xl border border-white/60 bg-white/40 backdrop-blur-sm px-4 py-3 shadow-sm hover:shadow-md transition-all hover:bg-white/60"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact form panel */}
          <div className="lg:col-span-5 xl:col-span-5 w-full animate-fade-in-up delay-300">
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-transparent rounded-bl-full -mr-8 -mt-8 pointer-events-none" />
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">Get a Free Quote</h3>
                <p className="text-sm text-slate-500 mt-1">Tell us about your project. We reply fast.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      className={`w-full rounded-xl border bg-white/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${
                        errors.name ? "border-red-400" : "border-slate-200"
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
                      className={`w-full rounded-xl border bg-white/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${
                        errors.email ? "border-red-400" : "border-slate-200"
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
                    className={`w-full rounded-xl border bg-white/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${
                      errors.phone ? "border-red-400" : "border-slate-200"
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
                    placeholder="What do you want to build?"
                    className={`w-full min-h-[120px] rounded-xl border bg-white/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none ${
                      errors.message ? "border-red-400" : "border-slate-200"
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
                  className="w-full inline-flex items-center justify-center rounded-xl bg-black text-white text-sm font-semibold px-6 py-4 hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-slate-900/20"
                >
                  {status.loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Get Started →"
                  )}
                </button>
                {status.serverError && (
                  <p className="text-sm text-red-600 text-center bg-red-50 py-2 rounded-lg">
                    {status.serverError}
                  </p>
                )}
                {status.success && (
                  <p className="text-sm text-green-600 text-center bg-green-50 py-2 rounded-lg">
                    Thanks! We received your message.
                  </p>
                )}
                <p className="text-[11px] text-slate-400 text-center">
                  100% privacy. No spam.
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
