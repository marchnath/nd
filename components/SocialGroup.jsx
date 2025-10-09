import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { buildWhatsAppLink } from "@/lib/utils";

/**
 * SocialGroup
 * A compact grouped container for social/action icons (WhatsApp + Instagram)
 * to create a cleaner visual rhythm beside CTA buttons.
 *
 * Props:
 *  - size: 'sm' | 'md' (controls height & padding)
 */
const sizeClasses = {
  sm: "h-10",
  md: "h-11",
};

export const SocialGroup = ({ size = "md" }) => {
  const h = sizeClasses[size] || sizeClasses.md;
  return (
    <div
      className={`inline-flex shrink-0 items-center rounded-md bg-black text-white ${h} px-1.5 shadow-sm focus-within:ring-2 focus-within:ring-black/40 focus-within:ring-offset-2`}
      aria-label="Social links"
    >
      <a
        href={buildWhatsAppLink("Hi Nerdytics!")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group relative inline-flex h-full items-center justify-center rounded-md px-2 hover:bg-white/10 focus:outline-none"
      >
        <FaWhatsapp className="h-5 w-5" />
        <span className="sr-only">Open WhatsApp chat</span>
      </a>
      <span className="mx-0.5 h-5 w-px bg-white/20" aria-hidden="true" />
      <a
        href="https://instagram.com/yourHandle"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="group relative inline-flex h-full items-center justify-center rounded-md px-2 hover:bg-white/10 focus:outline-none"
      >
        <FaInstagram className="h-5 w-5" />
        <span className="sr-only">Open Instagram profile</span>
      </a>
    </div>
  );
};

export default SocialGroup;
