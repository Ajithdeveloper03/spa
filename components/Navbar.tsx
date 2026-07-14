"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  "Home",
  "About Us",
  "Services",
  "VIP Suites",
  "Gallery",
  "Testimonials",
  "Contact",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[80px] relative z-10">
        {/* Logo */}
        <div className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/foot-pulse/logo.png"
            alt="Foot Pulse Reflexology"
            className="h-14 sm:h-18 lg:h-22 w-auto object-contain brightness-0 invert drop-shadow-md relative z-10"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 relative">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`text-sm font-semibold tracking-wide transition-colors relative z-10 text-cream hover:text-gold-400`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block border-2 border-gold-500 text-gold-400 px-5 py-2.5 text-xs font-bold tracking-widest hover:bg-gold-500 hover:text-[#004d40] transition-colors rounded-sm uppercase">
            BOOK APPOINTMENT
          </button>
          <button
            className="lg:hidden text-cream p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-darkGreen-950/95 backdrop-blur-md absolute top-full left-0 w-full ${
          mobileOpen ? "max-h-[400px] border-t border-gold-500/20" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-bold tracking-wider ${
                item === "HOME" ? "text-gold-400" : "text-cream/90"
              }`}
            >
              {item}
            </a>
          ))}
          <button className="mt-4 bg-gold-600 text-[#004d40] px-4 py-3 text-sm font-bold tracking-widest text-center rounded-sm">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </nav>
  );
}
