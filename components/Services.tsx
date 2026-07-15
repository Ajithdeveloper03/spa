"use client";

import { useRef, useEffect } from "react";
import { Moon, Crown, Flower2, Flower, Brain, Flame, Droplets, User, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Professionally Trained Therapists",
    desc: "Experience deep relaxation with our certified reflexology experts.",
    icon: Flower,
    img: "./OS%201.png",
  },
  {
    title: "Premium Wellness Experience",
    desc: "Immerse yourself in a calm, luxurious environment designed for your comfort.",
    icon: Brain,
    img: "./OS%202.png",
  },
  {
    title: "Exclusive Couples Therapy",
    desc: "Share the gift of relaxation with someone special in our private suites.",
    icon: Moon,
    img: "./OS%203.png",
  },
  {
    title: "Private VIP Therapy Suite",
    desc: "Enjoy complete privacy and personalized care in our premium VIP rooms.",
    icon: Crown,
    img: "./OS%204.png",
  },
  {
    title: "Clean & Hygienic Environment",
    desc: "We maintain the highest standards of cleanliness for a safe and peaceful escape.",
    icon: Flower2,
    img: "./OS%205.png",
  },
  {
    title: "Convenient Locations",
    desc: "Easily accessible branches located in the heart of Mylapore and T. Nagar.",
    icon: Flame,
    img: "./OS%201.png",
  },
  {
    title: "Easy Online Booking",
    desc: "Schedule your wellness session effortlessly with our digital booking system.",
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
      
      // Disable scroll animation on mobile/tablet
      if (window.innerWidth < 1024) {
        sliderRef.current.style.transform = 'none';
        return;
      }

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
    <section ref={targetRef} className="relative lg:h-[300vh] bg-[#fcfaf7]">
      <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center overflow-hidden py-12 lg:py-24">
        <div className="max-w-[1400px] mx-auto w-full pl-6 lg:pl-10">
          
          {/* Heading */}
          <div className="text-center mb-10 max-w-4xl mx-auto pr-6 lg:pr-10 pt-12 lg:pt-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] leading-normal py-2 mb-2">
              Why Choose <span className="text-[#c9a84c]">Foot Pulse?</span>
            </h2>
          </div>

          {/* Slider / Stack Container */}
          <div className="w-full pb-6 lg:pb-12">
            <div 
              ref={sliderRef}
              className="flex flex-col lg:flex-row gap-8 lg:gap-6 lg:w-max pr-6 lg:pr-10 pb-4 lg:will-change-transform"
            >
              {services.map((s, i) => (
                <div
                  key={i}
                  className="relative rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col group shrink-0 w-full sm:w-[400px] mx-auto lg:mx-0 lg:w-[360px] h-[400px] sm:h-[480px] overflow-hidden"
                >
                  {/* Background Image (Full Size) */}
                  <div className="absolute inset-0 w-full h-full bg-gray-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.img}
                      alt={s.title.replace("\n", " ")}
                      draggable={false}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 pointer-events-none"
                    />
                  </div>
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-0"></div>

                  {/* Top Right Box */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded flex items-center justify-center transition-colors duration-500 group-hover:bg-[#0d370e] z-10 shadow-lg">
                    <s.icon
                      className="text-[#c9a84c] group-hover:text-white transition-colors duration-500"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 flex flex-col p-6 sm:p-8 flex-grow h-full justify-end">
                    
                    {/* Bottom Row: Title & Number */}
                    <div className="mt-auto flex items-end justify-between w-full">
                      {/* Title */}
                      <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight mb-1 max-w-[80%] drop-shadow-md">
                        {s.title}
                      </h3>

                      {/* Large Outlined Number */}
                      <div 
                        className="text-4xl sm:text-6xl font-serif font-bold tracking-tighter"
                        style={{ 
                          WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        0{i + 1}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicator */}
          <div className="pr-6 lg:pr-10 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <span className="text-gray-400 text-[11px] tracking-widest font-bold uppercase flex items-center gap-2">
              <span className="lg:hidden">SCROLL DOWN TO EXPLORE &rarr;</span>
              <span className="hidden lg:inline">KEEP SCROLLING &rarr;</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
