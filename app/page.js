import React from "react";
import Header from "../components/Header";
import { MyFooter } from "@/components/footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import OfferRibbon from "@/components/sections/OfferRibbon";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* <OfferRibbon /> */}
      <Header />
      <Hero />
      <Testimonials />
      <Services />
      <Process />
      <WhyUs />

      <FAQ />
      {/* <CTA /> */}
      <MyFooter />
    </div>
  );
}
