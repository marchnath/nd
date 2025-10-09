"use client";
import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { buildWhatsAppLink } from "@/lib/utils";

export const FloatingSocial = () => {
  return (
    <div className="fixed z-50 bottom-5 right-5 flex flex-col items-end gap-2">
      {/* Attention Label */}
      <div className="px-3 py-1 rounded-full bg-white text-[11px] font-medium text-gray-800 shadow border border-gray-200 animate-pulse select-none">
        We are here — message us
      </div>
      {/* Icons Container */}
      <div className="group inline-flex items-center rounded-full bg-blue-600 text-white shadow-lg ring-1 ring-black/40 overflow-hidden">
        <a
          href={buildWhatsAppLink(
            "Hi Nerdytics, can we chat? I have a quick question."
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="p-3 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <FaWhatsapp className="h-5 w-5" />
        </a>
        <div className="h-6 w-px bg-white/15" aria-hidden="true" />
        <a
          href="https://instagram.com/nerdytics_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Instagram"
          className="p-3 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <FaInstagram className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default FloatingSocial;
