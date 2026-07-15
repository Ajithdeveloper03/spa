"use client";

import React from 'react';

export default function Navbar() {
  return (
    <div className="absolute top-6 left-0 right-0 z-[100] flex justify-center px-6">
      <nav className="bg-white backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-6 py-2.5 flex items-center justify-between w-full max-w-4xl">
        <div className="w-1/4">
          <img src="/foot-pulse/logo.png" alt="FOOT PULSE" className="h-10 md:h-12 w-auto object-contain" />
        </div>
        <div className="hidden lg:flex items-center justify-center gap-4 text-[12px] font-semibold tracking-wider text-black flex-1 font-montserrat uppercase">
          <a href="#home" className="hover:text-gold-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-gold-600 transition-colors">About </a>
          <a href="#services" className="hover:text-gold-600 transition-colors">Services</a>
          <a href="#gallery" className="hover:text-gold-600 transition-colors">Gallery</a>
          <a href="#testimonials" className="hover:text-gold-600 transition-colors">Testimonials</a>
          <a href="#locations" className="hover:text-gold-600 transition-colors">Contact</a>
        </div>
        <div className="w-1/4 flex justify-end">
          <button className="bg-black text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-darkGreen-900 transition-colors shadow-md whitespace-nowrap font-montserrat">
            Book Now
          </button>
        </div>
      </nav>
    </div>
  );
}
