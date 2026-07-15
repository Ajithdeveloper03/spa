'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';

const heroSlides = [
  '/foot-pulse/banner 1.png',
  '/foot-pulse/banner 2.png',
  '/foot-pulse/banner 3.png',
];

const animatedWords = ["Recharge", "Restore"];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[500px] flex items-center justify-start overflow-hidden bg-[#001d18] pb-12 sm:pb-16">
      {/* Background Image Slider */}
      {heroSlides.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={src}
            alt="Foot Reflexology"
            fill
            className="object-cover object-center"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      </div>
      ))}

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-12 mx-auto text-left flex flex-col justify-end h-full">
        <div className="w-full max-w-3xl animate-fade-up pb-4">
          <h1 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl text-cream font-bold leading-[1.15] mb-5 drop-shadow-lg">
            Relax&nbsp;<span className="text-gold-500">•</span>&nbsp;Recharge
            <br className="sm:hidden" />
            &nbsp;<span className="text-gold-500 sm:inline">•</span>&nbsp;Restore
          </h1>
          <p className="font-montserrat text-gold-400 text-xl sm:text-2xl md:text-4xl mb-8 font-bold drop-shadow-md leading-snug">
            Luxury Foot Reflexology
            <br />With Exclusive VIP Suites
          </p>

          {/* Horizontal divider above bullets */}
          <div className="w-full h-px bg-cream/20 mb-6" />

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
              <span className="font-montserrat text-cream text-lg font-medium">Relieve Stress</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
              <span className="font-montserrat text-cream text-lg font-medium">Improve Sleep</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
              <span className="font-montserrat text-cream text-base font-medium">Restore Energy</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => handleScroll('#contact')}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gold-600 hover:bg-gold-500 text-white font-montserrat text-sm font-medium uppercase transition-all duration-300 shadow-xl hover:-translate-y-1 rounded-sm"
            >
              Book Appointment
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-cream/30 hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-400 text-cream font-montserrat text-sm font-medium uppercase transition-all duration-300 rounded-sm hover:-translate-y-1"
            >
              WhatsApp Us
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide ? 'w-8 h-2 bg-gold-500' : 'w-2 h-2 bg-cream/30 hover:bg-cream/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
