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
              src="./ABOUT%20US.png"
              alt="Luxury Spa Foot Reflexology"
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
          </div>

          {/* Text Content */}
          <div className="pr-4 lg:pr-12 flex flex-col justify-center items-start">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif text-[#1a1a1a] mb-6 leading-tight">
              About Us
            </h2>
            <div className="text-gray-700 text-sm md:text-[16px] leading-relaxed mb-8 max-w-xl font-medium text-[#1a1a1a]">
              Welcome to FOOT PULSE Wellness & Reflexology, where relaxation meets professional care. Our expertly trained therapists combine the art of reflexology with a calm, luxurious environment to help you unwind, recharge, and restore balance. Whether you're seeking relief from everyday stress, tired feet, muscle tension, or simply looking for a peaceful escape, FOOT PULSE offers a personalized wellness experience designed around your comfort and well-being.
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
