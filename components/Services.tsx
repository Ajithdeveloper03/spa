import { Moon, Crown, Flower2, Flower, Brain } from "lucide-react";

const services = [
  {
    title: "LUXURY FOOT\nREFLEXOLOGY",
    desc: "Stimulates pressure points to improve circulation and promote overall wellness.",
    icon: Flower,
    img: "/OS 1.jpg",
  },
  {
    title: "STRESS RELIEF\nTHERAPY",
    desc: "Reduces stress, relieves tension and brings deep relaxation.",
    icon: Brain,
    img: "/OS 2.png",
  },
  {
    title: "SLEEP WELLNESS\nTHERAPY",
    desc: "Calms the mind, relaxes the body and supports better sleep naturally.",
    icon: Moon,
    img: "/OS 3.png",
  },
  {
    title: "VIP PRIVATE\nSUITES",
    desc: "Exclusive private suites designed for privacy, comfort and luxury.",
    icon: Crown,
    img: "/OS 4.png",
  },
  {
    title: "PREMIUM RELAXATION\nEXPERIENCE",
    desc: "A perfect blend of ambience, expert touch and luxury wellness care.",
    icon: Flower2,
    img: "/OS 5.png",
  },
];

export default function Services() {
  return (
    <section className="bg-[#0d0905] py-10 lg:py-12">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="text-[#c9a84c] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-serif text-white leading-tight">
            Wellness Therapies for Mind & Body
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-[#120e0a] border border-[#2a251d] rounded-xl overflow-hidden flex flex-col group transition-all duration-300 hover:border-[#0d370e]/50"
            >
              <div className="relative h-44 sm:h-40 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={s.title.replace("\n", " ")}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start gap-3 mb-4">
                  <s.icon
                    className="text-[#c9a84c] shrink-0 mt-0.5"
                    size={22}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-[#c9a84c] text-xs sm:text-[11px] lg:text-[12px] font-bold tracking-wider leading-snug whitespace-pre-line uppercase">
                    {s.title}
                  </h3>
                </div>
                <p className="text-[#9ea3a8] text-sm sm:text-[12px] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-transparent border border-[#c9a84c] text-[#c9a84c] hover:bg-[#0d370e] hover:border-[#0d370e] hover:text-white px-8 py-3.5 text-xs font-bold tracking-widest transition-colors rounded-sm uppercase">
            VIEW ALL SERVICES
          </button>
        </div>
      </div>
    </section>
  );
}
