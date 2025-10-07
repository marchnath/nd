import { Geist } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FloatingSocial from "@/components/FloatingSocial";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nerdytics – Build, Automate & Launch Faster",
  description:
    "We design, build and automate revenue-focused websites, apps & business systems so you can scale without bottlenecks. 90% of projects delivered in under 2 weeks.",
  openGraph: {
    title: "Nerdytics – Build, Automate & Launch Faster",
    description:
      "Websites, apps, custom software & automation delivered fast with clear pricing and full ownership.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nerdytics – Build, Automate & Launch Faster",
    description:
      "We turn ideas into profitable digital products & automated systems. Fast response in 15 minutes.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${jakarta.variable} antialiased bg-white font-geist selection:bg-black selection:text-white`}
      >
        {children}
        <FloatingSocial />
        {/* Simple organization schema for basic SEO enhancement */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nerdytics",
              url: "https://nerdytics.com",
              description:
                "We design, build and automate revenue-focused websites, apps & business systems.",
              sameAs: ["https://twitter.com", "https://github.com"],
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "USD",
                },
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
