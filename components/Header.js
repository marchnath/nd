import React from "react";
import Image from "next/image";
const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <header className="w-full max-w-5xl glass-panel rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300 hover:shadow-lg">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <Image
            src="/logo.png"
            alt="Logo"
            width={38}
            height={38}
            className="rounded-full w-8 h-8 md:w-[38px] md:h-[38px]"
          />
          <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            Nerdytics
          </span>
        </a>

        {/* Nav (desktop) */}
        <nav className="hidden md:flex items-center space-x-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#services"
            className="inline-flex items-center h-10 px-5 text-sm font-medium text-white bg-black rounded-full hover:bg-blue-600 hover:scale-105 transition-all shadow-md hover:shadow-lg"
          >
            <span className="hidden sm:inline">Start Project</span>
            <span className="sm:hidden">Start</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
