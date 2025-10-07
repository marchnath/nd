import React from "react";
import { NewsletterSectionDemo } from "@/components/newsletter";

const About = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="text-sm text-gray-400 uppercase tracking-wider font-medium font-geist">
              ABOUT ME
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta leading-tight text-white">
              I Create Digital
              <br />
              Future.
            </h2>

            {/* Body Text */}
            <div className="space-y-6 text-gray-300 font-geist leading-relaxed max-w-lg">
              <p className="text-base md:text-lg">
                Nullo phasellus tumor sed semper scelerisque. Etiam ornare nec
                mauris leo evertitore facilisis vel. Integer ac molestie ris.
                Sed varius naeque porttis mauris ites dui poursuivre tornas,
                neoque rhileuila nisl.
              </p>

              <p className="text-base md:text-lg">
                Fusce pospere quil sem eius molietibr. Etiam ca cursus lacus a
                rutrum eliris sace autreur congue a quila euis tactuli
                tsentrique.
              </p>
            </div>

            {/* Website/Contact */}
            <div className="pt-6">
              <p className="text-gray-400 font-geist text-sm">helloihsan.com</p>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:ml-8">
            <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-xl">
              {/* Placeholder for professional portrait - replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 flex items-center justify-center relative">
                {/* Subtle overlay to simulate a professional photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                <div className="text-gray-600 text-center relative z-10">
                  <div className="text-6xl mb-4 filter grayscale">🧑‍�</div>
                  <p className="text-sm font-medium">Professional Portrait</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Replace with actual image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterSectionDemo />
    </section>
  );
};

export default About;
