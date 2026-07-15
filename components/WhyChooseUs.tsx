"use client";

import React, { useRef } from 'react';
import { Leaf, Heart, Star, MapPin, CreditCard, Droplets } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { webflowReveal } from './variants';

const whyChooseItems = [
  { title: 'Professionally Trained Reflexology Therapists', icon: <Leaf className="w-6 h-6" />, img: '/foot-pulse/os_4.png' },
  { title: 'Premium Wellness Experience', icon: <Star className="w-6 h-6" />, img: '/foot-pulse/os_1.jpg' },
  { title: 'Exclusive Couples Therapy Suite', icon: <Heart className="w-6 h-6" />, img: '/foot-pulse/os_3.png' },
  { title: 'Private VIP Therapy Suite', icon: <Star className="w-6 h-6" />, img: '/foot-pulse/vip.png' },
  { title: 'Clean, Hygienic & Comfortable Environment', icon: <Droplets className="w-6 h-6" />, img: '/foot-pulse/os_2.png' },
  { title: 'Convenient Locations in Mylapore & T. Nagar', icon: <MapPin className="w-6 h-6" />, img: '/foot-pulse/os_4.png' },
  { title: 'Easy Online Booking & Digital Payments', icon: <CreditCard className="w-6 h-6" />, img: '/foot-pulse/os_1.jpg' }
];

export default function WhyChooseUs() {
  // Horizontal Scroll Setup
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
      {/* Why Choose Us Section - Mobile Static Layout */}
      <section id="why-us-mobile" className="relative md:hidden bg-white py-24 px-6 overflow-hidden">
        <div className="mb-12 shrink-0 flex justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-cormorant flex flex-col items-center text-darkGreen-950 text-center">
            <span className="overflow-hidden inline-block align-bottom pb-3 -mb-3">
              <motion.span variants={webflowReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="inline-block origin-bottom-left">Why Choose</motion.span>
            </span>
            <span className="overflow-hidden inline-block align-bottom pb-3 -mb-3">
              <motion.span variants={webflowReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="inline-block origin-bottom-left text-gold-600">FOOT PULSE?</motion.span>
            </span>
          </h2>
        </div>
        
        <div className="flex flex-col gap-8 items-center">
          {whyChooseItems.map((item, i) => (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} key={i} className="w-full max-w-sm h-[400px] relative rounded-[2rem] overflow-hidden group shadow-xl border border-gold-200/50">
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-darkGreen-950/20"></div>
              
              {/* Hover Flower */}
              <img
                src="/foot-pulse/feature-flower.png"
                alt="Flower"
                className="absolute bottom-0 right-0 w-24 h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none drop-shadow-lg"
              />

              <div className="absolute bottom-4 left-4 right-4 p-5 flex flex-col gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-[1.5rem] z-20">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/90 flex items-center justify-center text-darkGreen-950 shadow-lg shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white font-montserrat leading-snug drop-shadow-md">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section - Desktop Horizontal Scroll */}
      <section ref={targetRef} id="why-us-desktop" className="relative hidden md:block h-[400vh] bg-white">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden z-20">
          <div className="w-full relative z-10 px-6 md:px-24">
            <div className="mb-12 shrink-0 flex justify-center">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight font-cormorant flex flex-col items-center text-darkGreen-950 text-center">
                <span className="overflow-hidden inline-block align-bottom pb-3 -mb-3">
                  <motion.span variants={webflowReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="inline-block origin-bottom-left">Why Choose</motion.span>
                </span>
                <span className="overflow-hidden inline-block align-bottom pb-3 -mb-3">
                  <motion.span variants={webflowReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="inline-block origin-bottom-left text-gold-600">FOOT PULSE?</motion.span>
                </span>
              </h2>
            </div>

            <motion.div style={{ x }} className="flex gap-8 w-[max-content]">
              {whyChooseItems.map((item, i) => (
                <div key={i} className="w-[300px] md:w-[450px] h-[450px] md:h-[500px] relative rounded-[2rem] overflow-hidden group shadow-xl border border-gold-200/50 flex-shrink-0">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkGreen-950/95 via-darkGreen-950/40 to-transparent"></div>

                  {/* Hover Flower */}
                  <img
                    src="/foot-pulse/feature-flower.png"
                    alt="Flower"
                    className="absolute bottom-0 right-0 w-32 md:w-40 h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none drop-shadow-lg"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-4 z-20">
                    <div className="w-14 h-14 rounded-2xl bg-gold-500/90 backdrop-blur-md flex items-center justify-center text-darkGreen-950 shadow-lg">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white font-montserrat leading-snug">{item.title}</h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
