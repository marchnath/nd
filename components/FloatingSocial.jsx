"use client";
import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { buildWhatsAppLink } from "@/lib/utils";

export const FloatingSocial = () => {
  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end gap-3">
      {/* Attention Label */}
      <div className="hidden sm:flex px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-slate-700 shadow-lg border border-slate-200/60 select-none origin-bottom-right">
        We are online 👋
      </div>

      {/* Icons Container */}
      <div className="flex flex-col gap-2.5">
        <a
          href={buildWhatsAppLink(
            "Hi Nerdytics, can we chat? I have a quick question."
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-11 h-11 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/25 hover:scale-110 transition-transform duration-300 sm:w-12 sm:h-12"
        >
          <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
        
        <a
          href="https://instagram.com/nerdytics_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Instagram"
          className="hidden sm:flex w-11 h-11 sm:w-12 sm:h-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg shadow-pink-500/25 hover:scale-110 transition-transform duration-300"
        >
          <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
      </div>
    </div>
  );
};

export default FloatingSocial;
