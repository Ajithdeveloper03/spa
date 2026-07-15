'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'PREMIUM\nRELAXATION',
    description: 'A perfect blend of ambience, expert touch and luxury wellness care.',
    image: '/OS 1.jpg',
    icon: '❀'
  },
  {
    title: 'STRESS RELIEF\nREFLEXOLOGY',
    description: 'Deep pressure therapy to release stress and rejuvenate body energy.',
    image: '/OS 2.png',
    icon: '✦'
  },
  {
    title: 'DEEP TISSUE\nRESTORATION',
    description: 'Focuses on realigning deep layers of muscles and connective tissue.',
    image: '/OS 3.png',
    icon: '❂'
  },
  {
    title: 'VIP SUITES\nEXPERIENCE',
    description: 'Exclusive private suites with customized spa wellness treatments.',
    image: '/OS 4.png',
    icon: '❀'
  },
  {
    title: 'PREMIUM\nRELAXATION',
    description: 'A perfect blend of ambience, expert touch and luxury wellness care.',
    image: '/OS 1.jpg',
    icon: '❀'
  }
];

export default function Services() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="w-full bg-darkGreen-900 py-10 lg:py-16 overflow-hidden border-t border-darkGreen-800">
      <div className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-12 mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <h4 className="font-montserrat text-gold-500 text-sm font-bold uppercase mb-4">
            OUR SERVICES
          </h4>
          <h2 className="font-cormorant text-3xl md:text-5xl text-cream font-bold">
            Wellness Therapies for Mind & Body
          </h2>
          <div className="w-24 h-px bg-gold-500/50 mx-auto mt-6" />
        </div>

        {/* Services Grid (Horizontal scrollable on mobile, grid on desktop) */}
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 gap-4 sm:gap-6 snap-x snap-mandatory hide-scrollbar">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="flex-none w-[calc(100vw-3rem)] sm:w-[280px] lg:w-auto snap-center snap-always reveal delay-100 group cursor-pointer"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-darkGreen-800">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-[#004d40]/50 group-hover:bg-[#004d40]/20 transition-colors duration-500" /> */}
              </div>
              
              <div className="text-center px-2">
                <div className="text-gold-500 text-3xl mb-4">{service.icon}</div>
                <h3 className="font-cormorant text-lg sm:text-xl font-bold text-cream uppercase line-clamp-2 mb-2 group-hover:text-gold-400 transition-colors whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="font-montserrat text-base font-normal text-cream/70 leading-relaxed group-hover:text-cream/90 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10 reveal delay-500">
          <button className="px-8 py-4 border-2 border-gold-500/50 text-gold-400 font-montserrat text-sm font-bold uppercase rounded-sm transition-all duration-300 hover:bg-gold-500/10 hover:border-gold-500">
            VIEW ALL SERVICES
          </button>
        </div>

      </div>
    </section>
  );
}
