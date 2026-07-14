"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  "HOME",
  "ABOUT US",
  "SERVICES",
  "VIP SUITES",
  "GALLERY",
  "TESTIMONIALS",
  "CONTACT",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Seamless header overlay with flawless mask-image fade */}
      <div
        className={`absolute top-0 left-0 w-full h-[150px] bg-white -z-10 pointer-events-none transition-opacity duration-300 ${
          isScrolled ? "opacity-0" : "opacity-95"
        }`}
        style={{
          maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 100%)"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[70px] relative z-10">
        {/* Logo */}
        <div className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Foot Pulse Reflexology"
            className="h-14 w-auto object-contain relative z-10"
            style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8))" }}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 relative">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`text-xs font-semibold tracking-wider transition-colors relative z-10 ${
                item === "HOME"
                  ? "text-[#0d370e] border-b-2 border-[#0d370e] pb-0.5"
                  : "text-gray-800 hover:text-[#0d370e]"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block border border-[#c9a84c] text-[#c9a84c] px-4 py-2 text-xs font-semibold tracking-widest hover:bg-[#0d370e] hover:border-[#0d370e] hover:text-white transition-colors bg-white/50 backdrop-blur-sm rounded">
            BOOK APPOINTMENT
          </button>
          <button
            className="lg:hidden text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1a1008] border-t border-[#c9a84c]/20 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-semibold tracking-wider ${
                item === "HOME" ? "text-[#c9a84c]" : "text-white/80"
              }`}
            >
              {item}
            </a>
          ))}
          <button className="mt-2 border border-[#c9a84c] text-[#c9a84c] px-4 py-2 text-xs font-semibold tracking-widest text-center">
            BOOK APPOINTMENT
          </button>
        </div>
      )}
    </nav>
  );
}
