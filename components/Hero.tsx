"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, webflowReveal, textRevealOpacity } from './variants';

const heroBanners = [
  "/foot-pulse/banner_1.png",
  "/foot-pulse/banner_2.png",
  "/foot-pulse/banner_3.png"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full p-4 md:p-6 pb-0 flex flex-col items-center justify-center z-30">
      <motion.div
        className="absolute inset-x-4 md:inset-x-6 top-4 md:top-6 bottom-0 rounded-t-[2.5rem] overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            src={heroBanners[currentSlide]}
            alt="Hero Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-2">
          {heroBanners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === i ? 'bg-gold-500 w-8' : 'bg-white/50 hover:bg-gold-400'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>

      <div className="relative z-20 max-w-4xl mx-auto w-full text-center flex flex-col items-center mt-16 md:mt-24">
        <motion.div
          initial="hidden" animate="visible" variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-gold-500/30 text-gold-500 mb-8 shadow-sm">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold tracking-widest uppercase font-montserrat">Premium Foot Reflexology</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.1] mb-8 font-cormorant flex flex-col items-center">
            <span className="overflow-hidden inline-block align-bottom pb-4 -mb-4">
              <motion.span variants={webflowReveal} className="inline-block origin-bottom-left">Feel the Pulse of</motion.span>
            </span>
            <span className="overflow-hidden inline-block align-bottom pb-4 -mb-4">
              <motion.span variants={webflowReveal} className="inline-block origin-bottom-left text-gold-400">Healing & Relaxation</motion.span>
            </span>
          </h1>

          <motion.p variants={textRevealOpacity} className="text-lg md:text-xl leading-relaxed text-zinc-100 max-w-2xl mb-10 font-medium font-montserrat">
            “South India’s trusted reflexology hub, with fast growing branches and a reputed destination for deeply healing wellness and relaxation.”
          </motion.p>

          <motion.div variants={textRevealOpacity} className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="bg-gold-500 text-darkGreen-950 px-8 py-4 rounded-full font-semibold hover:bg-gold-400 transition-colors shadow-lg flex items-center gap-2 group font-montserrat">
              Start Your Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
