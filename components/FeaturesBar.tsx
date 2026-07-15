import { HandHeart, ShieldCheck, Flower2, DoorOpen, Leaf } from "lucide-react";

const YogaIcon = ({ size, className, strokeWidth = 1 }: { size: number, className?: string, strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="6" r="2.5" />
    <path d="M6 17c0-2 2.5-3.5 4.5-4.5" />
    <path d="M18 17c0-2-2.5-3.5-4.5-4.5" />
    <path d="M12 9c-2 0-3 1.5-3 3" />
    <path d="M12 9c2 0 3 1.5 3 3" />
    <path d="M9 12l-2 3" />
    <path d="M15 12l2 3" />
    <path d="M12 9v5" />
    <path d="M12 14c-2 1-4.5 2-5.5 3" />
    <path d="M12 14c2 1 4.5 2 5.5 3" />
  </svg>
);

const features = [
  { icon: HandHeart, title: "EXPERT THERAPISTS", desc: "Professionally Trained Reflexology Therapists" },
  { icon: Flower2, title: "PREMIUM WELLNESS", desc: "Premium Wellness Experience" },
  { icon: HandHeart, title: "COUPLES SUITE", desc: "Exclusive Couples Therapy Suite" },
  { icon: DoorOpen, title: "VIP SUITE", desc: "Private VIP Therapy Suite" },
  { icon: ShieldCheck, title: "CLEAN & SAFE", desc: "Clean, Hygienic & Comfortable Environment" },
  { icon: Leaf, title: "CONVENIENT LOCATIONS", desc: "Convenient Locations in Mylapore & T. Nagar" },
  { icon: YogaIcon, title: "EASY BOOKING", desc: "Easy Online Booking & Digital Payments" },
];

export default function FeaturesBar() {
  return (
    <section className="bg-[#fcfaf7] border-y border-[#e8e4d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        <div className="flex flex-wrap justify-center gap-y-10 gap-x-4 lg:gap-x-0 lg:divide-x divide-[#e8e4d9]">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4 group cursor-default"
            >
              <div className="mb-4">
                <f.icon
                  size={42}
                  strokeWidth={1}
                  className="text-[#c9a84c] group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-black text-xs sm:text-[13px] font-bold mb-2 tracking-wide uppercase">{f.title}</h3>
              <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed max-w-[200px]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
