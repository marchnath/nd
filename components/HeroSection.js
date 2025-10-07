import React from "react";
import {
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="w-full bg-white min-h-[80vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left side - Social Icons (Desktop only) */}
          <div className="hidden lg:flex  items-center space-y-8">
            <div className="text-gray-400 text-sm transform -rotate-90 whitespace-nowrap">
              Contact us
            </div>
            <div className="flex justify-between flex-col space-y-6">
              <a
                href="#"
                className="p-4 rounded-full bg-black text-white hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="#"
                className="p-4 rounded-full bg-black text-white hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
              >
                <FaTelegram size={24} />
              </a>
              <a
                href="#"
                className="p-4 rounded-full bg-black text-white hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="#"
                className="p-4 rounded-full bg-black text-white hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/*  Main Content */}
          <div className="">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-none font-jakarta tracking-tight">
              Rule Your
              <br />
              Local Market
            </h1>
            <p className="text-xl md:text-2xl lg:text-2xl text-gray-500 mt-2 lg:mt-3 max-w-3xl mx-auto font-medium leading-tight">
              Our Systems Make Your
              <br />
              Business the Top Pick!
            </p>

            {/* Mobile Social Icons */}
            <div className="lg:hidden mt-10 flex justify-center space-x-6">
              <a
                href="#"
                className="p-4 rounded-full bg-black text-white hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="#"
                className="p-4 rounded-full bg-black text-white hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
              >
                <FaTelegram size={20} />
              </a>
              <a
                href="#"
                className="p-4 rounded-full bg-black text-white hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
              >
                <FaEnvelope size={20} />
              </a>
              <a
                href="#"
                className="p-4 rounded-full bg-black text-white hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* Service Categories */}
        <div className="mt-16 lg:mt-20">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 text-base lg:text-lg text-gray-600 font-medium">
            <span className=" underline hover:bg-gray-200 transition-colors duration-200">
              Rank Locally
            </span>
            <span className=" underline hover:bg-gray-200 transition-colors duration-200">
              High-Performance Sites
            </span>
            <span className="underline hover:bg-gray-200 transition-colors duration-200">
              Grow on Social
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
