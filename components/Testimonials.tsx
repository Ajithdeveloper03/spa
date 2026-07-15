"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    text: "A truly amazing experience! The ambience, therapists and VIP suite are world-class.",
  },
  {
    name: "Arjun K.",
    text: "I felt completely relaxed and stress-free. Highly recommended for everyone.",
  },
  {
    name: "Meena R.",
    text: "One of the best reflexology centers in Chennai. Excellent service!",
  },
  {
    name: "Rohan D.",
    text: "The foot reflexology session was incredibly rejuvenating. Truly a premium sanctuary.",
  },
  {
    name: "Sneha M.",
    text: "Fantastic service! The VIP suite was so luxurious and the therapists were very professional.",
  },
];

const items = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= testimonials.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - testimonials.length);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + testimonials.length);
    }
  };

  return (
    <section className="bg-[#fcfaf7] border-t border-[#e8e4d9] pt-[10px] pb-16">
      <style dangerouslySetInnerHTML={{
        __html: `
        .slider-wrapper {
          --slide-width: 100%;
        }
        @media (min-width: 768px) {
          .slider-wrapper {
            --slide-width: 50%;
          }
        }
        @media (min-width: 1024px) {
          .slider-wrapper {
            --slide-width: 33.333333%;
          }
        }
      `}} />
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[#c9a84c] text-sm font-bold tracking-[0.15em] uppercase">
            WHAT OUR CLIENTS SAY
          </h2>
        </div>

        {/* Carousel */}
        <div className="slider-wrapper overflow-hidden relative px-2 sm:px-10">
          {/* Left Arrow */}
          <button 
            onClick={handlePrev} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-[#c9a84c] hover:bg-[#0d370e] hover:text-white transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${(currentIndex / items.length) * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {items.map((t, i) => (
              <div key={i} className="w-[var(--slide-width)] shrink-0 px-3 lg:px-4">
                <div className="bg-[#f5f1e8] p-8 lg:p-10 rounded-lg relative flex flex-col items-center shadow-sm h-full">
                  <div className="absolute top-5 left-5 text-[#c9a84c] font-serif text-5xl leading-none">
                    “
                  </div>
                  
                  <div className="flex gap-1 mb-5 mt-2">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={16}
                        className="fill-[#c9a84c] text-[#c9a84c]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-800 text-[13px] sm:text-sm leading-relaxed text-center mb-4 flex-grow">
                    &quot;{t.text}&quot;
                  </p>
                  <div className="text-gray-600 text-[13px] sm:text-sm font-semibold">
                    - {t.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-[#c9a84c] hover:bg-[#0d370e] hover:text-white transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
