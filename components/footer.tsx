import { FaWhatsapp, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { buildWhatsAppLink } from "@/lib/utils";
import Image from "next/image";

const socials = [
  {
    icon: <FaWhatsapp className="h-5 w-5" />,
    href: buildWhatsAppLink(
      "Hi Nerdytics, I'd like to chat about a project."
    ),
    label: "WhatsApp",
  },
  {
    icon: <FaInstagram className="h-5 w-5" />,
    href: "https://www.instagram.com/nerdytics_",
    label: "Instagram",
  },
  {
    icon: <PiTelegramLogo className="h-5 w-5" />,
    href: "https://t.me/nerdytics",
    label: "Telegram",
  },
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why-us", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
];

function MyFooter() {
  return (
    <footer className="w-full bg-slate-950 text-white">
      {/* CTA band */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-20">
        <div className="grid md:grid-cols-2 gap-10 items-end">
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Nerdytics logo"
                width={38}
                height={38}
                className="rounded-full w-9 h-9"
              />
              <span className="text-xl font-bold tracking-tight">
                Nerdytics
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight max-w-md leading-tight">
              Ready to automate{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                your growth?
              </span>
            </h3>
            <p className="text-slate-400 max-w-md">
              Let&#39;s turn your manual processes into automated revenue
              engines.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <a
              href={buildWhatsAppLink(
                "Hi Nerdytics, I'd like to book a free discovery call."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-slate-950 bg-white rounded-full hover:bg-blue-50 transition-colors"
            >
              Book Discovery Call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border border-white/15 rounded-full hover:bg-white/10 hover:border-white/25 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between">
          {/* Socials */}
          <ul className="flex items-center gap-3 list-none">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={s.label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/10 transition-colors"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>

          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 list-none">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-sm text-slate-500 text-center md:text-right order-last md:order-none">
            © {new Date().getFullYear()} Nerdytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { MyFooter };
