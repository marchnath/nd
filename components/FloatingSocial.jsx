"use client";
import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { buildWhatsAppLink } from "@/lib/utils";

export const FloatingSocial = () => {
  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end gap-3">
      {/* Attention Label */}
      <div className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-xs font-bold text-slate-800 shadow-lg border border-white/50 animate-bounce select-none origin-bottom-right">
        We are online 👋
      </div>
      
      {/* Icons Container */}
      <div className="flex flex-col gap-3">
        <a
          href={buildWhatsAppLink(
            "Hi Nerdytics, can we chat? I have a quick question."
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-300"
        >
          <FaWhatsapp className="h-6 w-6" />
        </a>
        
        <a
          href="https://instagram.com/nerdytics_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Instagram"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg shadow-pink-500/30 hover:scale-110 transition-transform duration-300"
        >
          <FaInstagram className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default FloatingSocial;
