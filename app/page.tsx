"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Leaf, Heart, Star, MapPin, CheckCircle2, CreditCard, Droplets, Map, ArrowUp, Clock, Phone, MessageCircle, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const whyChooseItems = [
  { title: 'Professionally Trained Reflexology Therapists', icon: <Leaf className="w-6 h-6" />, img: '/foot-pulse/os_4.png' },
  { title: 'Premium Wellness Experience', icon: <Star className="w-6 h-6" />, img: '/foot-pulse/os_1.jpg' },
  { title: 'Exclusive Couples Therapy Suite', icon: <Heart className="w-6 h-6" />, img: '/foot-pulse/os_3.png' },
  { title: 'Private VIP Therapy Suite', icon: <Star className="w-6 h-6" />, img: '/foot-pulse/vip.png' },
  { title: 'Clean, Hygienic & Comfortable Environment', icon: <Droplets className="w-6 h-6" />, img: '/foot-pulse/os_2.png' },
  { title: 'Convenient Locations in Mylapore & T. Nagar', icon: <MapPin className="w-6 h-6" />, img: '/foot-pulse/os_4.png' },
  { title: 'Easy Online Booking & Digital Payments', icon: <CreditCard className="w-6 h-6" />, img: '/foot-pulse/os_1.jpg' }
];

const heroBanners = [
  "/foot-pulse/banner_1.png",
  "/foot-pulse/banner_2.png",
  "/foot-pulse/banner_3.png"
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// Exact Webflow Style Text Reveal Variant (Mask + Slide Up)
const webflowReveal = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }
  }
};

const textRevealOpacity = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any } }
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Horizontal Scroll Setup
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  // Calculate horizontal translation based on number of items
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 5000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-darkGreen-950 font-sans selection:bg-gold-500/30 selection:text-darkGreen-950 relative">

      {/* Floating Pill Navigation */}
      <div className="absolute top-6 left-0 right-0 z-[100] flex justify-center px-6">
        <nav className="bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-6 py-2.5 flex items-center justify-between w-full max-w-4xl border border-black/5">
          <div className="w-1/4">
            <img src="/foot-pulse/logo.png" alt="FOOT PULSE" className="h-10 md:h-12 w-auto object-contain" />
          </div>
          <div className="hidden lg:flex items-center justify-center gap-4 text-[12px] font-semibold tracking-wider text-black flex-1 font-montserrat uppercase">
            <a href="#home" className="hover:text-gold-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-gold-600 transition-colors">About </a>
            <a href="#services" className="hover:text-gold-600 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-gold-600 transition-colors">Gallery</a>
            <a href="#testimonials" className="hover:text-gold-600 transition-colors">Testimonials</a>
            <a href="#locations" className="hover:text-gold-600 transition-colors">Contact</a>
          </div>
          <div className="w-1/4 flex justify-end">
            <button className="bg-black text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-darkGreen-900 transition-colors shadow-md whitespace-nowrap font-montserrat">
              Book Now
            </button>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[700px] w-full p-4 md:p-6 pb-0 flex flex-col items-center justify-center z-30">
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

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-white tracking-tight leading-[1.1] mb-8 font-cormorant flex flex-col items-center">
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

            <motion.div variants={textRevealOpacity} className="flex flex-col sm:flex-row items-center gap-4">
              <button className="bg-gold-500 text-darkGreen-950 px-8 py-4 rounded-full font-semibold hover:bg-gold-400 transition-colors shadow-lg flex items-center gap-2 group font-montserrat">
                Start Your Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
        {/* <div className="absolute inset-0 bg-darkGreen-950/20 mix-blend-overlay"></div> */}
      </section>

      {/* Intro Section */}
      <section id="about" className="h-screen min-h-[700px] w-full px-6 relative z-40 flex flex-col justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-[#f9f6f1] z-0"></div>
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url(/foot-pulse/about-bg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        
        {/* Scrolling Hero Divider (Moved here for perfect Z-index overlap) */}
        <div className="absolute top-0 left-0 right-0 w-full z-10 pointer-events-none -translate-y-1/2 overflow-hidden">
          <motion.div 
            className="flex w-[200%] md:w-[150%]"
            animate={{ x: [0, -1000] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            <img src="/foot-pulse/hero-slider.png" className="w-1/2 h-auto object-cover opacity-90" alt="" />
            <img src="/foot-pulse/hero-slider.png" className="w-1/2 h-auto object-cover opacity-90" alt="" />
          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <motion.img
          src="/foot-pulse/section-bg-image.png"
          alt="Decorative Pattern"
          className="absolute bottom-0 left-0 w-72 md:w-[500px] lg:w-[600px] opacity-40 z-0 pointer-events-none"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 bg-white shadow-sm text-sm font-semibold font-montserrat text-darkGreen-950">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span> About Us
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight font-cormorant text-darkGreen-950 leading-[1.1]">
              <span className="overflow-hidden inline-block align-bottom pb-2 -mb-2">
                <motion.span variants={webflowReveal} className="inline-block origin-bottom-left">Premium Foot Reflexology</motion.span>
              </span>
              <br />
              <span className="overflow-hidden inline-block align-bottom pb-2 -mb-2">
                <motion.span variants={webflowReveal} className="inline-block origin-bottom-left">& Wellness Experience</motion.span>
              </span>
            </h2>

            <motion.p variants={textRevealOpacity} className="text-lg text-darkGreen-800/80 leading-relaxed font-montserrat">
              Welcome to FOOT PULSE Wellness & Reflexology, where relaxation meets professional care. Our expertly trained therapists combine the art of reflexology with a calm, luxurious environment to help you unwind, recharge, and restore balance. Whether you're seeking relief from everyday stress, tired feet, muscle tension, or simply looking for a peaceful escape, FOOT PULSE offers a personalized wellness experience designed around your comfort and well-being.
            </motion.p>

            <motion.div variants={fadeUp} className="pt-4">
              <button className="bg-[#59624f] text-white pl-2 pr-6 py-2 rounded-full font-semibold hover:bg-darkGreen-900 transition-colors shadow-lg flex items-center gap-4 group font-montserrat text-sm">
                <div className="w-10 h-10 bg-white text-[#59624f] rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
                More About Us
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Images Composition */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="relative h-[600px] lg:h-[700px] w-full mt-12 lg:mt-0"
          >
            {/* Top Right Large Image */}
            <motion.img
              variants={fadeUp}
              src="/foot-pulse/os_2.png"
              alt="Spa Treatment"
              className="absolute top-0 right-4 md:right-10 w-[65%] h-[60%] object-cover rounded-t-full rounded-b-3xl shadow-xl z-10"
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
                <div className="bg-[#59624f] text-white text-[10px] md:text-xs font-semibold py-3 px-2 md:px-4 rounded-xl text-center shadow-lg whitespace-nowrap font-montserrat">
                  Call At: +91 98765 43210
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section - Mobile Static Layout */}
      <section id="why-us-mobile" className="relative md:hidden bg-white py-24 px-6 overflow-hidden">
        <div className="mb-12 shrink-0 flex justify-center">
          <h2 className="text-4xl font-semibold tracking-tight font-cormorant flex flex-col items-center text-darkGreen-950 text-center">
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

          {/* Decorative Elements */}
          <motion.img
            src="/foot-pulse/why-choose.png"
            alt="Bamboo Decorative"
            className="absolute bottom-0 left-0 w-64 md:w-[400px] opacity-30 z-0 pointer-events-none mix-blend-multiply"
          />

          <div className="w-full relative z-10 px-6 md:px-24">
            <div className="mb-12 shrink-0 flex justify-center">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight font-cormorant flex flex-col items-center text-darkGreen-950 text-center">
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

      {/* Mid Banner */}
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
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 leading-tight font-cormorant flex flex-col items-center text-gold-500">
            <span className="overflow-hidden inline-block align-bottom pb-4 -mb-4">
              <motion.span variants={webflowReveal} className="inline-block origin-bottom-left">Wellness Begins</motion.span>
            </span>
            <span className="overflow-hidden inline-block align-bottom pb-4 -mb-4">
              <motion.span variants={webflowReveal} className="inline-block origin-bottom-left">with Your Feet</motion.span>
            </span>
          </h2>
          <motion.p variants={textRevealOpacity} className="text-xl text-gold-50/90 leading-relaxed mb-6 font-montserrat drop-shadow-md">
            Foot reflexology is more than just a relaxing treatment. By applying gentle pressure to specific reflex points, it helps promote deep relaxation, improve circulation, ease muscle tension, and support your body's natural sense of balance and well-being.
          </motion.p>
          <motion.p variants={textRevealOpacity} className="text-xl text-gold-50/90 leading-relaxed mb-6 font-montserrat drop-shadow-md">
            Every session is thoughtfully tailored to leave you feeling refreshed, renewed, and revitalized.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex justify-center">
            <button className="bg-gold-500 text-darkGreen-950 px-8 py-4 rounded-full font-semibold hover:bg-gold-400 transition-colors shadow-lg flex items-center gap-2 group font-montserrat">
              Discover Our Therapies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Cards Section */}
      <section id="services" className="py-24 px-6 relative" style={{ backgroundImage: 'url(/foot-pulse/service-bg.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-white/80"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 font-cormorant flex flex-col items-center text-darkGreen-950">
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
              <motion.div variants={textRevealOpacity} key={i} className="group relative h-[450px] lg:h-[500px] flex-1 lg:hover:flex-[1.8] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:z-50 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] border border-gold-200">
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

      {/* CTA Section (Blurred Gallery Style) */}
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 font-cormorant text-white leading-[1.1]">
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
              <button className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-gold-500 transition-colors shadow-lg font-montserrat text-sm tracking-wide">
                Book Appointment
              </button>
            </motion.div>
          </motion.div>
          
        </div>
      </section>


      {/* Top Info Bar */}
      <div className="bg-[#052b22] border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center py-6 px-6 gap-6">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 w-full lg:w-auto justify-between lg:justify-start">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-gold-500" strokeWidth={1.5} />
              <div>
                <p className="text-xs font-bold tracking-widest font-cormorant text-white mb-1">OPEN EVERYDAY</p>
                <p className="text-white/80 font-montserrat  text-sm">10:00 AM - 10:00 PM</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20"></div>
            
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-gold-500" strokeWidth={1.5} />
              <div>
                <p className="text-xs font-bold tracking-widest font-cormorant text-white mb-1">CALL US</p>
                <p className="text-white/80 font-montserrat  text-sm">+91 90030 10888</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20"></div>

            <div className="flex items-center gap-4">
              <MessageCircle className="w-8 h-8 text-gold-500" strokeWidth={1.5} />
              <div>
                <p className="text-xs font-bold tracking-widest font-cormorant text-white mb-1">WHATSAPP US</p>
                <p className="text-white/80 font-montserrat text-sm">+91 90030 10888</p>
              </div>
            </div>
          </div>

          <button className="bg-[#b37a4c] font-montserrat text-white px-8 py-3 rounded hover:bg-[#9c6a42] font-bold text-xs tracking-widest transition-colors flex items-center gap-2">
            BOOK APPOINTMENT NOW <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#043329] text-white py-16 px-6 font-montserrat">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-2 rounded-xl w-max shadow-lg mb-2">
              <img src="/foot-pulse/logo.png" alt="Foot Pulse Logo" className="w-40 md:w-48 h-14 object-contain" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed pr-4">
              Your ultimate destination for luxury foot reflexology. Step into a world of pure relaxation, wellness, and expert care.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-4 items-center text-white/80 text-sm">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <p>+91 90030 10888</p>
              </div>
              <div className="flex gap-4 items-center text-white/80 text-sm">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <p>info@footpulsewellness.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-[#043329] hover:border-gold-500 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-[#043329] hover:border-gold-500 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-[#043329] hover:border-gold-500 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-gold-500 font-bold mb-6 tracking-wide text-sm">QUICK LINKS</h3>
            <ul className="space-y-4 text-white/80 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">VIP Suites</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-gold-500 font-bold mb-6 tracking-wide text-sm">OUR SERVICES</h3>
            <ul className="space-y-4 text-white/80 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Luxury Foot Reflexology</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Stress Relief Therapy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Sleep Wellness Therapy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">VIP Private Suites</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Pressure Reflection Experience</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-gold-500 font-bold mb-6 tracking-wide text-sm">LOCATIONS</h3>
            <ul className="space-y-6 text-white/80 text-sm">
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white mb-1">Mylapore Branch</p>
                  <p className="leading-relaxed text-xs">No. 2 & 3, Bishop Wallers Avenue East, C.I.T. Colony, Mylapore, Chennai – 600004<br/>(Opposite Hotel Savera & Near Tamil Koodam Mess)</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white mb-1">T. Nagar Branch</p>
                  <p className="leading-relaxed text-xs">No. 147, 2nd Floor, Sucans Sivagami Square, G.N. Chetty Road, T. Nagar, Chennai – 600017<br/>(Opposite Virudhunagar Hotel & Near Saravana Stores)</p>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[100] p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] bg-darkGreen-950 text-gold-500 hover:bg-darkGreen-900 hover:text-gold-400 transition-all border border-gold-500/20 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
