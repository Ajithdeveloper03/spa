"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, webflowReveal, textRevealOpacity } from './variants';

export default function CTA() {
  return (
    <section className="relative py-32 px-6 bg-[#0a0a0a] min-h-[60vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center relative z-10">
        
        {/* Left Column - Blurred Image Gallery */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="relative flex gap-4 overflow-hidden"
        >
          {/* Dark/Blur edge gradients */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>
          
          <img src="/foot-pulse/os_1.jpg" className="w-1/3 h-72 md:h-96 object-cover rounded-[2rem] opacity-70 transition-transform duration-700 hover:scale-105" alt="Gallery 1" />
          <img src="/foot-pulse/os_2.png" className="w-1/3 h-72 md:h-96 object-cover rounded-[2rem] scale-[1.12] z-10 shadow-2xl shadow-gold-500/10 transition-transform duration-700 hover:scale-[1.18]" alt="Gallery 2" />
          <img src="/foot-pulse/os_4.png" className="w-1/3 h-72 md:h-96 object-cover rounded-[2rem] opacity-70 transition-transform duration-700 hover:scale-105" alt="Gallery 3" />
        </motion.div>

        {/* Right Column - Content */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="flex flex-col items-start lg:pl-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-cormorant text-white leading-[1.1]">
            <span className="overflow-hidden inline-block align-bottom pb-2 -mb-2">
              <motion.span variants={webflowReveal} className="inline-block origin-bottom-left">Your Journey to</motion.span>
            </span>
            <br/>
            <span className="overflow-hidden inline-block align-bottom pb-2 -mb-2">
              <motion.span variants={webflowReveal} className="inline-block origin-bottom-left text-gold-500">Wellness Starts Here</motion.span>
            </span>
          </h2>
          <motion.p variants={textRevealOpacity} className="text-lg md:text-xl text-white/80 mb-6 leading-relaxed font-montserrat max-w-xl">
            Step into FOOT PULSE Wellness & Reflexology and discover a place where professional care, comfort, and relaxation come together. Let us help you feel lighter, calmer, and revitalized—one step at a time.
          </motion.p>
          <motion.p variants={textRevealOpacity} className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-montserrat max-w-xl">
            Book your appointment today and experience the healing touch of FOOT PULSE.
          </motion.p>
          <motion.div variants={fadeUp}>
            <button className="bg-[#043329] text-gold-500 px-10 py-4 rounded-full font-semibold hover:bg-[#03241d] transition-colors shadow-lg font-montserrat text-sm tracking-wide border border-gold-500/30">
              Book Appointment
            </button>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
