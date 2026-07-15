"use client";

import { useState, useEffect } from "react";
import { Calendar, MessageCircle, Shield, Moon, Zap } from "lucide-react";

const images = [
  "./banner%201.png",
  "./banner%202.png",
  "./banner%203.png",
];

const animatedWords = ["Recharge", "Restore"];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per slide

    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % animatedWords.length);
    }, 3000); // 3 seconds per word

    return () => {
      clearInterval(timer);
      clearInterval(wordTimer);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[580px] flex items-center overflow-hidden bg-[#fcfaf7]">
      {/* Background image slider */}
      <div className="absolute inset-0 w-full h-full bg-[#1a1a1a]">
        {images.map((src, index) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={src}
            src={src}
            alt={`Hero banner ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* White overlay on left side only */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[50%] bg-gradient-to-r from-[#fcfaf7] via-[#fcfaf7]/90 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-24 pt-32 sm:pt-44">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-serif text-[#1a1a1a] leading-tight mb-4 flex flex-col items-start">
            Feel the Pulse of
            <span className="text-[#0d370e] mt-2">Healing & Relaxation</span>
          </h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            South India's trusted reflexology hub, with fast-growing branches and a reputed destination for deeply healing wellness and relaxation.
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#c9a84c] leading-snug mb-8">
            Premium Foot Reflexology & Wellness Experience
          </h2>

          <hr className="border-gray-200 mb-8 max-w-[32rem]" />

          {/* Badges */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 mb-10">
            <div className="flex items-center gap-2 text-gray-800 text-sm sm:text-base font-medium">
              <Shield size={18} className="text-[#c9a84c]" />
              <span>Relieve Stress</span>
            </div>
            <span className="hidden sm:inline text-gray-300">•</span>
            <div className="flex items-center gap-2 text-gray-800 text-sm sm:text-base font-medium">
              <Moon size={18} className="text-[#c9a84c]" />
              <span>Improve Sleep</span>
            </div>
            <span className="hidden sm:inline text-gray-300">•</span>
            <div className="flex items-center gap-2 text-gray-800 text-sm sm:text-base font-medium">
              <Zap size={18} className="text-[#c9a84c]" />
              <span>Restore Energy</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#0d370e] hover:text-white text-black font-semibold px-6 py-3.5 rounded text-sm tracking-wider transition-colors w-full sm:w-auto">
              <span>BOOK APPOINTMENT</span>
              <Calendar size={18} />
            </button>
            <button className="flex items-center justify-center gap-2 border border-[#c9a84c] hover:bg-[#0d370e] hover:border-[#0d370e] hover:text-white text-gray-900 font-semibold px-6 py-3.5 rounded text-sm tracking-wider transition-colors w-full sm:w-auto">
              <span>WHATSAPP US</span>
              <MessageCircle size={18} className="text-[#c9a84c]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
