import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative bg-white pt-20 pb-4 overflow-hidden">
      {/* Background Dots Pattern */}
      <div 
        className="absolute right-0 bottom-0 w-[400px] h-[400px] z-0 pointer-events-none opacity-40" 
        style={{ 
          backgroundImage: 'radial-gradient(#0d370e 2.5px, transparent 2.5px)', 
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to top left, black, transparent)'
        }}
      ></div>



      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: Images & Graphics */}
          <div className="relative w-full max-w-[450px] mx-auto aspect-square sm:aspect-auto sm:h-[600px] lg:h-[650px] transform sm:scale-[0.85] lg:scale-[0.8] origin-center lg:origin-right mb-12 sm:mb-0">
            {/* Top-Right Abstract Shape (Dark Blue + Orange curve) */}
            <div className="absolute -top-8 sm:-top-12 right-[10%] w-16 h-16 sm:w-24 sm:h-24 z-0 transform rotate-[15deg]">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-90">
                <path d="M 100 0 C 100 50, 50 100, 0 100 L 0 50 C 30 50, 50 30, 50 0 Z" fill="#0d370e" />
                <path d="M 100 50 C 100 100, 50 100, 50 100 C 80 100, 100 80, 100 50 Z" fill="#c9a84c" />
              </svg>
            </div>

            {/* Left Abstract S-Shape */}
            <div className="absolute -left-2 sm:-left-12 top-[15%] w-16 h-24 sm:w-24 sm:h-40 z-0">
              <svg viewBox="0 0 100 160" fill="none" className="w-full h-full">
                <path d="M 80 0 C 120 40, 60 70, 60 100 C 60 120, 80 130, 100 125 L 90 155 C 40 170, 0 130, 10 90 C 20 40, 80 50, 80 0 Z" fill="#c9a84c" />
                <path d="M 10 90 C 0 120, 30 150, 70 120 C 80 110, 70 100, 60 105 C 30 120, 15 95, 20 85 Z" fill="#0d370e" />
              </svg>
            </div>

            {/* Main Image Container */}
            <div 
              className="absolute left-4 sm:left-12 top-0 w-[80%] sm:w-[75%] h-[80%] z-10 bg-gray-200"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 40%, 85% 55%, 100% 70%, 100% 100%, 0 100%)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="./ABOUT%20US.png" alt="Main Spa Wellness" className="w-full h-full object-cover" />
              
              {/* Decorative gray triangle overlay at top right */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#e5e7eb] opacity-80" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
              {/* Decorative orange triangle overlay at bottom right */}
              <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#c9a84c]" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
            </div>

            {/* Chevron Overlays */}
            <div className="absolute right-[8%] sm:right-[12%] top-[40%] w-14 h-12 sm:w-20 sm:h-16 z-20">
              <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
                <path d="M 50 0 L 100 45 L 80 65 L 50 35 L 20 65 L 0 45 Z" fill="#c9a84c" />
                <path d="M 50 25 L 90 60 L 70 75 L 50 55 L 30 75 L 10 60 Z" fill="#0d370e" />
              </svg>
            </div>

            {/* Floating Secondary Image (Bubble effect) */}
            <div className="absolute right-0 bottom-0 sm:bottom-4 w-[60%] sm:w-[55%] aspect-square bg-white p-2 sm:p-4 shadow-2xl z-30">
              <div className="w-full h-full relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="./ABOUT%20US.png" alt="Detail Wellness" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start z-10">
            
            {/* Subheading */}
            <div className="flex items-center text-[#c9a84c] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-3 stroke-[2.5]" />
              ABOUT US
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#1a1a1a] mb-8 leading-[1.15] tracking-tight">
              Welcome to Foot Pulse<br />
              Wellness & Reflexology
            </h2>
            
            {/* Paragraph (Exact provided content) */}
            <div className="text-[#555555] text-[15px] sm:text-base leading-[1.8] mb-10 max-w-xl">
              Welcome to FOOT PULSE Wellness & Reflexology, where relaxation meets professional care. Our expertly trained therapists combine the art of reflexology with a calm, luxurious environment to help you unwind, recharge, and restore balance. Whether you're seeking relief from everyday stress, tired feet, muscle tension, or simply looking for a peaceful escape, FOOT PULSE offers a personalized wellness experience designed around your comfort and well-being.
            </div>
            
            {/* CTA Button */}
            <button className="group flex items-center bg-[#0d370e] hover:bg-[#165a18] text-white pl-6 pr-2 py-2 text-[13px] font-bold tracking-widest uppercase transition-colors rounded-sm mt-2">
              KNOW MORE ABOUT US
              <span className="ml-5 bg-white text-[#c9a84c] p-2 flex items-center justify-center transform transition-transform group-hover:translate-x-1">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
