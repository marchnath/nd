import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// WhatsApp helpers
export const WHATSAPP_NUMBER = "2349011551837"; // business number in international format without +

export function buildWhatsAppLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  const text = encodeURIComponent(message);
  return `${base}?text=${text}`;
}
