'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function About() {
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
    <section id="about" ref={ref} className="w-full bg-cream py-10 lg:py-16 overflow-hidden relative border-t border-darkGreen-800/10">
      <div className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-12 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 reveal-left">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/foot-pulse/OS 2.png"
                alt="Foot Pulse Reflexology Reception"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 reveal-right z-10">
            <h4 className="font-montserrat text-gold-600 text-sm font-bold uppercase mb-6">
              ABOUT US
            </h4>
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#004d40] font-bold leading-[1.1] mb-5">
              Premium Wellness.<br />
              Personalized for You.
            </h2>
            
            <p className="font-montserrat text-black/80 text-lg font-normal leading-relaxed mb-6">
              <span className="font-bold text-black">FOOT PULSE REFLEXOLOGY</span> is a premium wellness destination dedicated to delivering world-class foot reflexology and relaxation therapies in a luxurious and peaceful environment.
            </p>
            
            <p className="font-montserrat text-black/80 text-lg font-normal leading-relaxed mb-10">
              Our mission is to help you escape the stress of everyday life and experience the healing power of touch, expert care and true relaxation.
            </p>

            <button
              onClick={() => { const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white font-montserrat text-sm font-bold uppercase rounded-sm transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              KNOW MORE ABOUT US
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
