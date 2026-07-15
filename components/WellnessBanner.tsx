"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, webflowReveal, textRevealOpacity } from './variants';

export default function WellnessBanner() {
  return (
    <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
      {/* Decorative Shape */}
      <motion.img
        src="/foot-pulse/shape1.png"
        alt="Decorative Shape"
        className="absolute bottom-0 left-0 w-32 md:w-64 h-full opacity-50 z-10 pointer-events-none"
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/foot-pulse/about_us.png"
          alt="Dark Spa Background"
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight font-cormorant flex flex-col items-center text-gold-500">
          <span className="overflow-hidden inline-block align-bottom pb-4 -mb-4">
            <motion.span variants={webflowReveal} className="inline-block origin-bottom-left">Wellness Begins</motion.span>
          </span>
          <span className="overflow-hidden inline-block align-bottom pb-4 -mb-4">
            <motion.span variants={webflowReveal} className="inline-block origin-bottom-left">with Your Feet</motion.span>
          </span>
        </h2>
        <motion.p variants={textRevealOpacity} className="text-xl text-gold-50/90 leading-relaxed mb-6 font-montserrat drop-shadow-md">
          Foot reflexology is more than just a relaxing treatment. By applying gentle pressure to specific reflex points, it helps promote deep relaxation, improve circulation, ease muscle tension, and support your body's natural sense of balance and well-being. Every session is thoughtfully tailored to leave you feeling refreshed, renewed, and revitalized.
        </motion.p>
        <motion.p variants={textRevealOpacity} className="text-xl text-gold-50/90 leading-relaxed mb-6 font-montserrat drop-shadow-md">
         
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex justify-center">
          <button className="bg-gold-500 text-darkGreen-950 px-8 py-4 rounded-full font-semibold hover:bg-gold-400 transition-colors shadow-lg flex items-center gap-2 group font-montserrat">
            Discover Our Therapies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
