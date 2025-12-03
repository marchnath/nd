import {
  GlobeIcon,
  MagnifyingGlassIcon,
  SpeakerLoudIcon,
  TargetIcon,
  ColorWheelIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";

const features = [
  {
    Icon: GlobeIcon,
    name: "Website Design & Development",
    description: (
      <ul className="space-y-1">
        <li>• Custom high-converting websites optimized for local intent</li>
        <li>• Mobile-first design</li>
        <li>• Fast-loading with clear calls to action</li>
        <li>• Lead capture optimization</li>
      </ul>
    ),
    href: "/contact",
    cta: "Get Started",
    background: (
      <div className="absolute inset-0">
        <Image
          src="https://images.ctfassets.net/scrf7o05zai3/4deKvBiis9RuxWEcNSLIzJ/fe881791a86c112f9472d36582c2232c/FAQpages.jpg"
          alt="Web development illustration"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/90"></div>
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: MagnifyingGlassIcon,
    name: "Local SEO",
    description: (
      <ul className="space-y-1">
        <li>• Google Business Profile optimization</li>
        <li>• Keyword research</li>
        <li>• Local directory listings</li>
        <li>• Reputation management to boost local visibility</li>
      </ul>
    ),
    href: "/contact",
    cta: "Learn More",
    background: (
      <div className="absolute inset-0">
        <Image
          src="https://imageio.forbes.com/specials-images/imageserve/6697c3d1b6ae36a1aaeeb334/Internet-search-bar-in-browser-with-magnifier-on-computer-monitor-screen-/960x0.jpg?format=jpg&width=960"
          alt="Search bar with magnifier"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/90"></div>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: SpeakerLoudIcon,
    name: "Social Media Growth",
    description: (
      <ul className="space-y-1">
        <li>• Profile optimization</li>
        <li>• Organic content creation</li>
        <li>• Local engagement strategy</li>
        <li>• Targeted paid ads for maximum local visibility</li>
      </ul>
    ),
    href: "/contact",
    cta: "Grow Now",
    background: (
      <div className="absolute inset-0">
        <Image
          src="https://techstory.in/wp-content/uploads/2020/10/how-to-get-instagram-followers-00-5eb415a7843bd-760x400-1.jpg"
          alt="Social media growth illustration"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/90"></div>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: TargetIcon,
    name: "Lead Capture & Conversion",
    description: (
      <ul className="space-y-1">
        <li>• Landing pages</li>
        <li>• Lead magnets</li>
        <li>• Forms and chat widgets</li>
        <li>• Calendar integrations to maximize conversions</li>
      </ul>
    ),
    href: "/contact",
    cta: "Convert More",
    background: (
      <div className="absolute inset-0">
        <Image
          src="https://www.leadfuze.com/wp-content/uploads/2020/12/building-a-good-relationship-with-client.jpg"
          alt="Lead capture and client relationship illustration"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/90"></div>
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: ColorWheelIcon,
    name: "Branding & Visual Identity",
    description: (
      <ul className="space-y-1">
        <li>• Logo design</li>
        <li>• Social media templates</li>
        <li>• Consistent visuals across web and social platforms</li>
        <li>• Build brand recognition</li>
      </ul>
    ),
    href: "/contact",
    cta: "Brand Better",
    background: (
      <div className="absolute inset-0">
        <Image
          src="https://designbeep.com/wp-content/uploads/2014/03/6.Visual-Identity-and-Branding-Series-CIN.jpg"
          alt="Visual identity and branding illustration"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/90"></div>
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

function ServicesSection() {
  return (
    <section className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help local service businesses
            dominate their market and attract more customers.
          </p>
        </div>

        {/* Services Grid */}
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

export { ServicesSection };
