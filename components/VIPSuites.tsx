import React from "react";

export default function VIPSuites() {
  return (
    <section className="relative bg-gradient-to-br from-[#c1aa57] to-[#b09643] py-0 overflow-hidden w-full">
      
      {/* Decorative Leaf SVG (Top Left) */}
      <div className="absolute top-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] opacity-[0.15] pointer-events-none transform -translate-x-20 -translate-y-20">
        <svg viewBox="0 0 200 200" fill="none" stroke="#000" strokeWidth="0.75" className="w-full h-full">
          {/* Stem */}
          <path d="M -20 150 Q 80 120 250 30" />
          {/* Leaves Top */}
          <path d="M 10 140 Q 60 70 180 0" />
          <path d="M 40 130 Q 100 60 220 10" />
          <path d="M 80 115 Q 140 50 250 20" />
          {/* Leaves Bottom */}
          <path d="M 20 138 Q 80 180 180 200" />
          <path d="M 60 125 Q 130 180 220 180" />
          <path d="M 110 108 Q 180 160 260 150" />
        </svg>
      </div>

      {/* Decorative Dots/Confetti (Bottom Left) */}
      <div className="absolute bottom-10 left-10 w-48 h-48 opacity-[0.25] pointer-events-none">
        <svg viewBox="0 0 100 100" fill="#000" className="w-full h-full">
          <circle cx="20" cy="20" r="1.5" />
          <circle cx="45" cy="15" r="2.5" />
          <circle cx="80" cy="30" r="1.2" />
          <rect x="30" y="40" width="8" height="2.5" transform="rotate(45 34 41)" />
          <rect x="65" y="50" width="6" height="2" transform="rotate(-30 68 51)" />
          <rect x="15" y="75" width="10" height="3" transform="rotate(20 20 76)" />
          <circle cx="40" cy="85" r="2" />
          <circle cx="75" cy="80" r="1.5" />
          <rect x="85" y="55" width="7" height="2" transform="rotate(-60 88 56)" />
          <rect x="10" y="45" width="5" height="2" transform="rotate(70 12 46)" />
        </svg>
      </div>

      {/* Faint center circle */}
      <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-[1px] border-white/20 rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start pt-10 relative z-20">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-white mb-8 leading-[1.15] uppercase tracking-wide drop-shadow-md">
            Wellness Begins<br />with Your Feet
          </h2>
          <p className="text-white text-lg md:text-[17px] leading-[1.8] font-medium max-w-[540px] drop-shadow-sm opacity-95">
            Foot reflexology is more than just a relaxing treatment. By applying gentle pressure to specific reflex points, it helps promote deep relaxation, improve circulation, ease muscle tension, and support your body's natural sense of balance and well-being. Every session is thoughtfully tailored to leave you feeling refreshed, renewed, and revitalized.
          </p>
        </div>

        {/* Right Images (Overlapping Polaroids) */}
        <div className="w-full lg:w-1/2 relative aspect-square sm:aspect-auto sm:h-[500px] flex items-center justify-center mt-10 lg:mt-0 transform lg:scale-[0.8] z-20">
          
          {/* Top/Back Polaroid */}
          <div className="absolute top-0 lg:-top-4 left-0 lg:left-4 w-[70%] sm:w-[65%] aspect-[4/3] bg-white p-2 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transform -rotate-3 transition-all duration-700 hover:-translate-y-3 hover:-rotate-1 z-10 group">
            <div className="w-full h-full relative overflow-hidden bg-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="./vip.png" alt="Relaxation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Bottom/Front Polaroid */}
          <div className="absolute bottom-0 lg:-bottom-4 right-0 lg:right-4 w-[70%] sm:w-[65%] aspect-[4/3] bg-white p-2 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transform rotate-6 transition-all duration-700 hover:-translate-y-3 hover:rotate-3 z-20 group">
            <div className="w-full h-full relative overflow-hidden bg-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="./ABOUT%20US.png" alt="Spa Treatment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            {/* Small vertical text on bottom edge of polaroid */}
            <div className="absolute bottom-2 right-4 text-gray-300 text-[9px] tracking-[0.25em] transform -rotate-90 origin-right font-bold pointer-events-none">
              FOOT PULSE
            </div>
          </div>

          {/* Decorative Flower Graphic */}
          <div className="absolute top-[25%] lg:top-[30%] -right-4 lg:-right-8 w-40 h-40 lg:w-56 lg:h-56 z-30 opacity-95 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] transform rotate-12 transition-transform duration-[1.5s] hover:rotate-[35deg] hover:scale-110 pointer-events-none">
             <svg viewBox="0 0 200 200" className="w-full h-full">
               {/* Flower Petals Layer 1 */}
               <path d="M100 100 C 60 20, 140 20, 100 100" fill="#f4e0bc" />
               <path d="M100 100 C 180 60, 180 140, 100 100" fill="#e8d0a5" />
               <path d="M100 100 C 140 180, 60 180, 100 100" fill="#f4e0bc" />
               <path d="M100 100 C 20 140, 20 60, 100 100" fill="#e8d0a5" />
               
               {/* Flower Petals Layer 2 (Angled) */}
               <path d="M100 100 C 40 40, 100 0, 100 100" fill="#faeed7" />
               <path d="M100 100 C 160 40, 200 100, 100 100" fill="#faeed7" />
               <path d="M100 100 C 160 160, 100 200, 100 100" fill="#faeed7" />
               <path d="M100 100 C 40 160, 0 100, 100 100" fill="#faeed7" />
               
               {/* Center details */}
               <circle cx="100" cy="100" r="10" fill="#cca367" />
               <circle cx="95" cy="95" r="3" fill="#fff" opacity="0.8" />
             </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
