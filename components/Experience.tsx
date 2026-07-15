"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, webflowReveal, textRevealOpacity } from './variants';

export default function Experience() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden" style={{ backgroundImage: 'url(/foot-pulse/service-bg-1.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      {/* shape2 bottom-left */}
      <img src="/foot-pulse/shape2.jpg" alt="" className="absolute bottom-0 left-0 w-48 md:w-64 lg:w-80 opacity-20 pointer-events-none mix-blend-multiply" />
      {/* shape2 top-right */}
      <img src="/foot-pulse/shape2.jpg" alt="" className="absolute top-0 right-0 w-48 md:w-64 lg:w-80 opacity-20 pointer-events-none mix-blend-multiply rotate-180" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-cormorant flex flex-col items-center text-darkGreen-950">
            <span className="overflow-hidden inline-block align-bottom pb-2 -mb-2">
              <motion.span variants={webflowReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="inline-block origin-bottom-left">Experience Wellness</motion.span>
            </span>
            <span className="overflow-hidden inline-block align-bottom pb-2 -mb-2 text-gold-600">
              <motion.span variants={webflowReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="inline-block origin-bottom-left">Together</motion.span>
            </span>
          </h2>
          <motion.p variants={textRevealOpacity} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-lg md:text-xl text-black leading-relaxed font-montserrat">
            Share the gift of relaxation with someone special in our elegant Couples Therapy Suite, or enjoy complete privacy and personalized comfort in our Premium Therapy Suite. Whether you're visiting alone, with a partner, or with family, every guest receives attentive care in a peaceful and welcoming setting.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row gap-6 w-full"
        >
          {[
            { title: 'Personalized Comfort', img: '/foot-pulse/os_2.png' },
            { title: 'Couples Therapy Suite', img: '/foot-pulse/os_3.png' },
            { title: 'Premium VIP Suite', img: '/foot-pulse/vip.png' }
          ].map((card, i) => (
            <motion.div variants={textRevealOpacity} key={i} className="group relative w-full lg:w-auto h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex-none lg:flex-1 lg:hover:flex-[1.8] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:z-50 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] border border-gold-200">
              <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-darkGreen-950/90 via-darkGreen-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Hover Flower */}
              <img
                src="/foot-pulse/feature-flower.png"
                alt="Flower"
                className="absolute bottom-0 right-0 w-28 md:w-36 h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none drop-shadow-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h3 className="text-3xl font-semibold text-gold-50 mb-3 font-montserrat">{card.title}</h3>
                <div className="w-12 h-12 rounded-full bg-gold-500/90 backdrop-blur-md flex items-center justify-center text-darkGreen-950 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
