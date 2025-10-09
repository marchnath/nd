"use client";
import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { buildWhatsAppLink } from "@/lib/utils";

const CTA = () => {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100 p-10 md:p-16">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_70%)]" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Let’s Map Your Build
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Free discovery. No pressure. We’ll identify quick wins, suggest a
              lean scope & give you a clear path forward.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              <input
                required
                placeholder="Name"
                className="rounded-md border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="rounded-md border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="tel"
                placeholder="Phone Number (optional)"
                className="sm:col-span-2 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                required
                placeholder="What do you want to build or improve?"
                className="sm:col-span-2 min-h-[120px] rounded-md border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-black text-white text-sm font-semibold px-6 py-3 hover:bg-gray-900 transition-colors">
                Send Message →
              </button>
              <p className="sm:col-span-2 text-[11px] text-gray-500 flex items-center gap-3">
                We reply within 15 minutes. No spam ever.
                <span className="flex items-center gap-2">
                  <a
                    href={buildWhatsAppLink(
                      "Hi Nerdytics, I’m interested in a quick discovery chat."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-black text-white hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
                  >
                    <FaWhatsapp className="h-4 w-4" />
                  </a>
                  <a
                    href="https://instagram.com/yourHandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-black text-white hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
                  >
                    <FaInstagram className="h-4 w-4" />
                  </a>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
