import React from "react";
import { Footprints } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative bg-[#fcfaf7] pt-10 pb-16 lg:pt-12 lg:pb-20 overflow-hidden">
      {/* Decorative background footprint */}
      <div className="absolute right-0 lg:-right-20 top-1/2 -translate-y-1/2 text-[#c9a84c] opacity-[0.06] z-0 pointer-events-none transform -rotate-12">
        <Footprints className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]" strokeWidth={0.7} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Image */}
          <div className="relative rounded shadow-md overflow-hidden h-[300px] sm:h-[400px] lg:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ABOUT US.png"
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
            
            <button className="bg-black hover:bg-[#0d370e] text-white px-8 py-3.5 text-xs font-bold tracking-wider uppercase transition-colors rounded-sm">
              KNOW MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
