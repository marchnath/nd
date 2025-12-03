import { Hexagon } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { Footer } from "@/components/ui/footer";
import { buildWhatsAppLink } from "@/lib/utils";
import Image from "next/image";

function MyFooter() {
  return (
    <div className="w-full bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
                 <Image
            src="/logo.png"
            alt="Logo"
            width={38}
            height={38}
            className="rounded-full w-8 h-8 md:w-[38px] md:h-[38px]"
          />
              <span className="text-2xl font-bold tracking-tight">Nerdytics</span>
            </div>
            <h3 className="text-3xl font-bold max-w-md leading-tight">
              Ready to automate your growth?
            </h3>
            <p className="text-slate-400 max-w-md text-lg">
              Let&#39;s turn your manual processes into automated revenue engines.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <a
              href={buildWhatsAppLink(
                "Hi Nerdytics, I&#39;d like to book a free discovery call."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-full hover:bg-blue-50 transition-colors"
            >
              Book Discovery Call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-slate-700 rounded-full hover:bg-slate-800 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>

        <Footer
          logo={<div className="hidden" />} // Hidden because we have a custom logo section above
          brandName=""
          socialLinks={[
            {
              icon: <FaWhatsapp className="h-5 w-5" />,
              href: buildWhatsAppLink(
                "Hi Nerdytics, I&#39;d like to chat about a project."
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
          ]}
          mainLinks={[
            { href: "#services", label: "Services" },
            { href: "#process", label: "Process" },
            { href: "#why-us", label: "Why Us" },
            { href: "#faq", label: "FAQ" },
          ]}
          legalLinks={[
            { href: "/privacy", label: "Privacy" },
            { href: "/terms", label: "Terms" },
          ]}
          copyright={{
            text: `© ${new Date().getFullYear()} Nerdytics.`,
            license: "All rights reserved",
          }}
          className="border-t-0 pt-0" // Remove default top border and padding from inner footer
        />
      </div>
    </div>
  );
}

export { MyFooter };
