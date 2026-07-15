'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Lock, Sparkles, User } from 'lucide-react';

export default function VIPSuites() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
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

  return (
    <section id="vip" ref={ref} className="w-full bg-gold-100 py-10 lg:py-16 overflow-hidden relative border-t border-darkGreen-800/10">
      <div className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-12 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* Left: Image */}
          <div className="w-full lg:w-1/2 reveal-left">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/OS 4.png"
                alt="VIP Wellness Suite"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 reveal-right z-10">
            <h4 className="font-montserrat text-gold-600 text-sm font-bold uppercase mb-6">
              EXCLUSIVE EXPERIENCE
            </h4>
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#004d40] font-bold leading-[1.1] mb-5">
              Exclusive VIP Wellness Suites
            </h2>

            <p className="font-montserrat text-black/80 text-lg font-normal leading-relaxed mb-8 max-w-lg">
              Step into a world of privacy, comfort and luxury. Our VIP suites are thoughtfully designed to give you a peaceful and uninterrupted relaxation experience.
            </p>
            <div className="grid grid-cols-3 gap-4 pb-6">
              <div className="flex flex-col items-center text-center gap-3">
                <Lock className="w-8 h-8 text-gold-600 mb-2" strokeWidth={2.5} />
                <span className="font-montserrat text-sm font-medium text-black uppercase">Complete Privacy</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <Sparkles className="w-8 h-8 text-gold-600 mb-2" strokeWidth={2.5} />
                <span className="font-montserrat text-sm font-medium text-black uppercase">Premium Ambience</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <User className="w-8 h-8 text-gold-600 mb-2" strokeWidth={2.5} />
                <span className="font-montserrat text-sm font-medium text-black uppercase">Personalized Care</span>
              </div>
            </div>
            <button
              onClick={() => { const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white font-montserrat text-sm font-medium uppercase rounded-sm transition-all duration-300 shadow-lg hover:-translate-y-1 mt-6"
            >
              EXPLORE VIP SUITES
            </button>


          </div>

        </div>
      </div>
    </section>
  );
}
