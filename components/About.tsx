"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, webflowReveal, textRevealOpacity } from './variants';

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full px-6 py-32 lg:py-24 xl:py-16 relative z-40 flex flex-col justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[#f9f6f1] z-0"></div>
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url(/foot-pulse/about-bg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
      
      {/* Scrolling Hero Divider (Moved here for perfect Z-index overlap) */}
      <div className="absolute top-0 left-0 right-0 w-full z-10 pointer-events-none -translate-y-1/2 overflow-hidden">
        <motion.div 
          className="flex w-[200%]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          <img src="/foot-pulse/hero-slider.png" className="w-1/2 h-auto object-cover opacity-90 shrink-0" alt="" />
          <img src="/foot-pulse/hero-slider.png" className="w-1/2 h-auto object-cover opacity-90 shrink-0" alt="" />
        </motion.div>
      </div>

      {/* Top side gradient overlay to avoid straight line on top */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-48 -translate-y-full bg-gradient-to-t from-[#f9f6f1] via-transparent via-transparent to-transparent z-20 pointer-events-none"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          src="/foot-pulse/why-choose.png"
          alt="Decorative Pattern"
          className="absolute bottom-0 left-0 w-72 md:w-[400px] lg:w-[400px] opacity-80 mix-blend-multiply"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Bottom Right Decorative */}
        <img
          src="/foot-pulse/section-bg-image.png"
          alt=""
          className="absolute bottom-0 right-0 w-64 md:w-80 lg:w-96 opacity-80 mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="space-y-6 md:space-y-6"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 bg-white shadow-sm text-sm font-semibold font-montserrat text-darkGreen-950">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span> About Us
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-cormorant text-darkGreen-950 leading-[1.1]">
            <span className="overflow-hidden inline-block align-bottom pb-2 -mb-2">
              <motion.span variants={webflowReveal} className="inline-block origin-bottom-left">Premium Foot Reflexology</motion.span>
            </span>
            <br />
            <span className="overflow-hidden inline-block align-bottom pb-2 -mb-2">
              <motion.span variants={webflowReveal} className="inline-block origin-bottom-left">& Wellness Experience</motion.span>
            </span>
          </h2>

          <motion.p variants={textRevealOpacity} className="text-lg text-darkGreen-800/80 leading-relaxed font-montserrat font-medium text-justify">
            Welcome to FOOT PULSE Wellness & Reflexology, where relaxation meets professional care. Our expertly trained therapists combine the art of reflexology with a calm, luxurious environment to help you unwind, recharge, and restore balance. Whether you're seeking relief from everyday stress, tired feet, muscle tension, or simply looking for a peaceful escape, FOOT PULSE offers a personalized wellness experience designed around your comfort and well-being.
          </motion.p>

          <motion.div variants={fadeUp} className="pt-4">
            <button className="bg-gold-600 text-white pl-2 pr-6 py-2 rounded-full font-semibold hover:bg-gold-500 transition-colors shadow-lg flex items-center gap-4 group font-montserrat text-sm">
              <div className="w-10 h-10 bg-white text-gold-600 rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
              More About Us
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - Images Composition */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[500px] xl:h-[600px] w-full"
        >
          {/* Top Right Large Image */}
          <motion.img
            variants={fadeUp}
            src="/foot-pulse/os_2.png"
            alt="Spa Treatment"
            className="absolute top-0 right-4 md:right-10 lg:right-0 w-[65%] h-[60%] object-cover rounded-t-full rounded-b-3xl shadow-xl z-10"
          />

          {/* Bottom Left Arch Image */}
          <motion.img
            variants={fadeUp}
            src="/foot-pulse/os_4.png"
            alt="Relaxation"
            className="absolute bottom-0 left-0 w-[55%] h-[55%] object-cover rounded-t-full rounded-b-3xl shadow-xl z-20 border-8 border-[#f9f6f1]"
          />

          {/* Right Middle Image with Call Banner */}
          <motion.div
            variants={fadeUp}
            className="absolute top-1/2 right-0 translate-y-[-10%] w-[50%] bg-white p-2 rounded-2xl shadow-2xl z-30"
          >
            <img
              src="/foot-pulse/os_3.png"
              alt="Massage"
              className="w-full h-40 md:h-48 object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-2 md:px-4">
              <div className="bg-gold-600 text-white text-[10px] md:text-xs font-semibold py-3 px-2 md:px-4 rounded-xl text-center shadow-lg whitespace-nowrap font-montserrat">
                Call At: +91 90030 10888
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
