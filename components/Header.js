import React from "react";
// Social icons moved to floating component; header now only shows pricing CTA.

const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <img src="/logo3.png" alt="Nerdytics Logo" className="h-10 w-10" />
            <span className="text-xl font-semibold tracking-tight">
              Nerdytics
            </span>
          </a>

          {/* Nav (desktop) */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* to services section */}
          <div className="flex items-center gap-3">
            <a
              href="#services"
              className="inline-flex items-center h-9 px-3 text-xs sm:h-11 sm:px-5 sm:text-sm font-medium border border-gray-300 rounded-full sm:rounded-md hover:bg-gray-50 transition-colors"
            >
              <span className="sm:hidden">Services & Pricing</span>
              <span className="hidden sm:inline">View Services & Pricing</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
