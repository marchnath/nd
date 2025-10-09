import { Hexagon } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { Footer } from "@/components/ui/footer";
import { buildWhatsAppLink } from "@/lib/utils";

// Using react-icons for social media brand icons

function MyFooter() {
  return (
    <div className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid md:grid-cols-3 gap-8 pb-10">
          <div className="space-y-3 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Build, automate & launch faster.
            </p>
            <p className="text-sm text-gray-600 max-w-md">
              Have an idea or an internal process slowing growth? We map it into
              a shippable plan in minutes.
            </p>
            <a
              href={buildWhatsAppLink(
                "Hi Nerdytics, I’d like to book a free discovery call."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-black hover:underline"
            >
              Book a free call →
            </a>
          </div>
        </div>
      </div>
      <Footer
        logo={<Hexagon className="h-10 w-10" />}
        brandName="Nerdytics"
        socialLinks={[
          {
            icon: <FaWhatsapp className="h-5 w-5" />,
            href: buildWhatsAppLink(
              "Hi Nerdytics, I’d like to chat about a project."
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
      />
    </div>
  );
}

export { MyFooter };
