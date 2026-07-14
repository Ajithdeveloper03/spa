import React from "react";

const FootPrintGraphic = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 400" className={className} fill="currentColor">
    {/* Stylized foot sole */}
    <path d="M 60 70 C 40 70 30 85 30 100 C 30 110 35 115 45 120 C 60 125 60 135 50 145 C 30 160 15 180 15 210 C 15 260 35 320 60 360 C 80 390 120 400 150 370 C 180 340 190 280 170 210 C 150 150 110 140 100 110 C 95 90 110 70 100 50 C 90 30 70 70 60 70 Z" />
    
    {/* Swirl cutout at the heel */}
    <path d="M 105 345 C 80 345 75 315 105 315 C 120 315 120 335 105 335 C 95 335 95 325 105 325 C 112 325 112 330 105 330" fill="#fcfaf7" />
    
    {/* Toes */}
    <circle cx="45" cy="45" r="16" />
    <circle cx="90" cy="25" r="20" />
    <circle cx="140" cy="40" r="17" />
    <circle cx="175" cy="75" r="14" />
    <circle cx="195" cy="120" r="11" />
  </svg>
);

export default function AboutUs() {
  return (
    <section className="relative bg-[#fcfaf7] pt-10 pb-16 lg:pt-12 lg:pb-20 overflow-hidden">
      {/* Decorative background footprint */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 text-[#eee8db] opacity-70 z-0 pointer-events-none">
        <FootPrintGraphic className="w-[300px] h-[600px] sm:w-[450px] sm:h-[900px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Image */}
          <div className="relative rounded shadow-md overflow-hidden h-[300px] sm:h-[400px] lg:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=900"
              alt="Luxury Spa Foot Reflexology"
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
          </div>

          {/* Text Content */}
          <div className="pr-4 lg:pr-12 flex flex-col justify-center">
            <h3 className="text-[#c9a84c] text-sm font-bold tracking-wider mb-4 uppercase">
              ABOUT US
            </h3>
            <h2 className="text-4xl md:text-[2.75rem] font-serif text-[#1a1a1a] leading-tight mb-8">
              Premium Wellness.
              <br />
              Personalized for You.
            </h2>
            <div className="text-gray-700 text-sm md:text-[15px] leading-relaxed space-y-6 mb-8 max-w-lg">
              <p>
                FOOT PULSE REFLEXOLOGY is a premium wellness destination dedicated
                to delivering world-class foot reflexology and relaxation therapies in a
                luxurious and peaceful environment.
              </p>
              <p>
                Our mission is to help you escape the stress of everyday life and
                experience the healing power of touch, expert care and true relaxation.
              </p>
            </div>
            
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3.5 text-xs font-bold tracking-wider uppercase transition-colors rounded-sm">
              KNOW MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
