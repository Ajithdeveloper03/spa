'use client';

import { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: 'A truly amazing experience! The ambience, therapists and VIP suite are world-class. The best reflexology center I have ever visited.',
    name: 'Priya S.',
    rating: 5,
  },
  {
    quote: 'I felt completely relaxed and stress-free. Highly recommended for everyone looking for peace. The environment is incredibly soothing.',
    name: 'Arjun K.',
    rating: 5,
  },
  {
    quote: 'One of the best reflexology centers in Chennai. Excellent service and very hygienic! Will definitely come back.',
    name: 'Meena R.',
    rating: 5,
  },
  {
    quote: 'The VIP suite experience is unparalleled. The therapists are highly trained and know exactly what they are doing.',
    name: 'Rohan D.',
    rating: 5,
  },
  {
    quote: 'Perfect way to unwind after a long week. The foot reflexology therapy worked wonders on my tired feet.',
    name: 'Sarah J.',
    rating: 5,
  }
];

const items = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="w-full bg-cream py-10 lg:py-14 overflow-hidden border-t border-darkGreen-800/10 border-b relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #B8860B 0%, transparent 50%), radial-gradient(circle at 80% 50%, #004d40 0%, transparent 50%)' }}></div>

      <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-12 mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h4 className="font-montserrat text-gold-600 text-sm font-bold uppercase mb-4 tracking-widest">
            TESTIMONIALS
          </h4>
          <h2 className="font-cormorant text-3xl md:text-5xl text-[#004d40] font-bold mb-6">
            What Our Clients Say
          </h2>
          <div className="w-16 h-px bg-gold-600/50 mx-auto" />
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto reveal delay-100">

          {/* Slider */}
          <div className="relative overflow-hidden h-[420px] sm:h-[380px] md:h-[360px]">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out flex items-center justify-center ${idx === currentSlide ? 'opacity-100 translate-x-0 z-10' :
                  idx < currentSlide ? 'opacity-0 -translate-x-full z-0' : 'opacity-0 translate-x-full z-0'
                  }`}
              >
                <div className="bg-white rounded-2xl p-10 md:p-14 text-center relative flex flex-col items-center border border-gold-600/20 shadow-xl max-w-3xl mx-auto w-full">
                  <div className="absolute -top-6 bg-cream border border-gold-600/20 rounded-full p-4 shadow-md">
                    <Quote className="w-8 h-8 text-gold-600 fill-gold-600/20" />
                  </div>

                  <div className="flex gap-1 mb-6 mt-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-gold-500 text-xl">★</span>
                    ))}
                  </div>

                  <p className="font-montserrat text-black/80 text-lg md:text-xl font-normal leading-relaxed mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="w-12 h-px bg-gold-600/30 mb-6 mt-auto" />

                  <p className="font-montserrat text-base text-black font-bold uppercase tracking-wider">
                    – {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gold-600/50 flex items-center justify-center text-gold-600 hover:bg-gold-600 hover:text-white transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${idx === currentSlide ? 'w-10 h-2 bg-gold-600' : 'w-2 h-2 bg-gold-600/30 hover:bg-gold-600/60'
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gold-600/50 flex items-center justify-center text-gold-600 hover:bg-gold-600 hover:text-white transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
