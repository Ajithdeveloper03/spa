import { Lock, Star, User } from "lucide-react";

export default function VIPSuites() {
  return (
    <section className="bg-[#fcfaf7] pt-[20px] pb-[10px]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row bg-[#fcfaf7]">
          {/* Image */}
          <div className="lg:w-[35%] w-full h-[300px] lg:h-auto relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/3998014/pexels-photo-3998014.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="VIP Suite"
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
          </div>

          {/* Content */}
          <div className="lg:w-[65%] w-full flex items-center p-4">
            <div className="flex flex-col xl:flex-row w-full gap-6 lg:gap-10 items-start xl:items-center justify-between px-4">
              {/* Text block */}
              <div className="flex-1">
                <div className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase mb-3">
                  EXCLUSIVE EXPERIENCE
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] mb-4">
                  Exclusive VIP Wellness Suites
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Step into a world of privacy, comfort and luxury. Our VIP suites
                  are thoughtfully designed to give you a peaceful and
                  uninterrupted relaxation experience.
                </p>
                <button className="bg-[#c9a84c] hover:bg-[#b8943d] text-black px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors">
                  EXPLORE VIP SUITES
                </button>
              </div>

              {/* Icons block */}
              <div className="flex items-start shrink-0 xl:border-l border-[#e8e4d9] xl:pl-8 mt-10 xl:mt-0">
                <div className="flex flex-col items-center pr-6 xl:pr-8 border-r border-[#e8e4d9]">
                  <Lock className="text-[#c9a84c] mb-3" size={28} strokeWidth={1.25} />
                  <span className="text-xs text-center text-gray-800">
                    Complete
                    <br />
                    Privacy
                  </span>
                </div>
                <div className="flex flex-col items-center px-6 xl:px-8 border-r border-[#e8e4d9]">
                  <Star className="text-[#c9a84c] mb-3" size={28} strokeWidth={1.25} />
                  <span className="text-xs text-center text-gray-800">
                    Premium
                    <br />
                    Ambience
                  </span>
                </div>
                <div className="flex flex-col items-center pl-6 xl:pl-8">
                  <User className="text-[#c9a84c] mb-3" size={28} strokeWidth={1.25} />
                  <span className="text-xs text-center text-gray-800">
                    Personalized
                    <br />
                    Care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
