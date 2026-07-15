import { Lock, Star, User } from "lucide-react";

export default function VIPSuites() {
  return (
    <section className="bg-[#fcfaf7] pt-[20px] pb-[10px]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row bg-[#fcfaf7]">
          {/* Image */}
          <div className="lg:w-[35%] w-full h-[300px] lg:h-auto relative overflow-hidden rounded-r-[8rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="./vip.png"
              alt="VIP Suite"
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
          </div>

          {/* Content */}
          <div className="lg:w-[65%] w-full flex items-center p-4">
            <div className="flex flex-col xl:flex-row w-full gap-6 lg:gap-10 items-start xl:items-center justify-between px-4">
              {/* Text block */}
              <div className="flex-1 max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif text-[#1a1a1a] mb-6 leading-tight">
                  Wellness Begins with Your Feet
                </h2>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                  Foot reflexology is more than just a relaxing treatment. By applying gentle pressure to specific reflex points, it helps promote deep relaxation, improve circulation, ease muscle tension, and support your body's natural sense of balance and well-being. Every session is thoughtfully tailored to leave you feeling refreshed, renewed, and revitalized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
