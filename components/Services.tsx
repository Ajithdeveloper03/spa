"use client";

import { useRef, useEffect } from "react";
import { Moon, Crown, Flower2, Flower, Brain, Flame, Droplets } from "lucide-react";

const services = [
  {
    title: "Professionally Trained Reflexology Therapists",
    icon: Flower,
    img: "./OS%201.jpg",
  },
  {
    title: "Premium Wellness Experience",
    icon: Brain,
    img: "./OS%202.png",
  },
  {
    title: "Exclusive Couples Therapy Suite",
    icon: Moon,
    img: "./OS%203.png",
  },
  {
    title: "Private VIP Therapy Suite",
    icon: Crown,
    img: "./OS%204.png",
  },
  {
    title: "Clean, Hygienic & Comfortable Environment",
    icon: Flower2,
    img: "./OS%205.png",
  },
  {
    title: "Convenient Locations in Mylapore & T. Nagar",
    icon: Flame,
    img: "./OS%201.jpg",
  },
  {
    title: "Easy Online Booking & Digital Payments",
    icon: Droplets,
    img: "./OS%202.png",
  },
];

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current || !sliderRef.current || !sliderRef.current.parentElement) return;
      const { top, height } = targetRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const scrollableDistance = height - viewportHeight;
      
      let progress = 0;
      if (top > 0) {
        progress = 0;
      } else if (top < -scrollableDistance) {
        progress = 1;
      } else {
        progress = Math.abs(top) / scrollableDistance;
      }

      const maxTranslate = sliderRef.current.scrollWidth - sliderRef.current.parentElement.clientWidth;
      
      if (maxTranslate > 0) {
        sliderRef.current.style.transform = `translateX(-${progress * maxTranslate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation after mount
    setTimeout(handleScroll, 50);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#fcfaf7]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto w-full pl-6 lg:pl-10">
          
          {/* Heading */}
          <div className="text-center mb-10 max-w-4xl mx-auto pr-6 lg:pr-10 pt-12 lg:pt-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] leading-normal py-2 mb-2">
              Why Choose <span className="text-[#c9a84c]">Foot Pulse?</span>
            </h2>
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden w-full pb-8">
            <div 
              ref={sliderRef}
              className="flex gap-6 w-max will-change-transform pr-6 lg:pr-10"
            >
              {services.map((s, i) => (
                <div
                  key={i}
                  className="relative rounded-3xl overflow-hidden flex flex-col group shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] h-[320px] sm:h-[380px]"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.img}
                      alt={s.title.replace("\n", " ")}
                      draggable={false}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 pointer-events-none"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>

                  {/* Number Watermark */}
                  <div className="absolute top-10 right-6 text-white/20 font-bold text-7xl font-serif pointer-events-none transition-all duration-500 group-hover:-translate-y-2 group-hover:text-white/30">
                    0{i + 1}
                  </div>

                  {/* Content */}
                  <div className="relative mt-auto p-6 lg:p-8 flex flex-col">
                    {/* Accent Line */}
                    <div className="w-10 h-1 bg-[#c9a84c] rounded-full mb-6"></div>
                    
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl border border-[#c9a84c]/30 bg-[#c9a84c]/10 flex items-center justify-center shrink-0 backdrop-blur-md">
                        <s.icon
                          className="text-[#c9a84c]"
                          size={24}
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-white text-base sm:text-lg font-bold leading-tight">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicator */}
          <div className="pr-6 lg:pr-10 flex justify-end">
            <span className="text-gray-400 text-[11px] tracking-widest font-bold uppercase flex items-center gap-2">
              KEEP SCROLLING &rarr;
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
