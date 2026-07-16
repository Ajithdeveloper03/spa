"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    label: "👣 Professionally Trained Reflexology Therapists",
    img: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80",
    alt: "Reflexology Therapists",
    id: "service-1",
    delay: 0,
  },
  {
    label: "🌿 Premium Wellness Experience",
    img: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=800&q=80",
    alt: "Premium Wellness",
    id: "service-2",
    delay: 100,
  },
  {
    label: "❤️ Exclusive Couples Therapy Suite",
    img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
    alt: "Couples Therapy",
    id: "service-3",
    delay: 200,
  },
  {
    label: "⭐ Private VIP Therapy Suite",
    img: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80",
    alt: "VIP Therapy",
    id: "service-4",
    delay: 300,
  },
  {
    label: "🧼 Clean, Hygienic & Comfortable Environment",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    alt: "Clean Environment",
    id: "service-5",
    delay: 400,
  },
  {
    label: "📍 Convenient Locations in Mylapore & T. Nagar",
    img: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80",
    alt: "Locations",
    id: "service-6",
    delay: 500,
  },
  {
    label: "💳 Easy Online Booking & Digital Payments",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    alt: "Online Booking",
    id: "service-7",
    delay: 600,
  },
];

function ServiceCard({ label, img, alt, id }: (typeof services)[0]) {
  // Keeping the same card styling and layout without the intersection observer fade-in
  // because intersection observer behaves unpredictably inside a sticky horizontal scrolling container.
  return (
    <div className={styles.card} id={id}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={alt} loading="lazy" />
      <div className={styles.cardOverlay}>
        <a href="#" className={styles.cardLabel}>{label}</a>
      </div>
    </div>
  );
}

export default function Services() {
  const scrollWrapperRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = scrollWrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;

      // Only apply horizontal scroll on desktop widths
      if (window.innerWidth <= 900) {
        setTranslateX(0);
        return;
      }

      const rect = wrapper.getBoundingClientRect();
      const wrapperTop = rect.top;
      
      // Calculate scroll progress relative to the viewport
      // Starts scrolling when the top of the wrapper hits the top of the screen (wrapperTop <= 0)
      if (wrapperTop <= 0) {
        const scrolledPx = -wrapperTop;
        const maxScrollableDist = wrapper.scrollHeight - window.innerHeight;
        
        let progress = scrolledPx / maxScrollableDist;
        progress = Math.max(0, Math.min(progress, 1)); // clamp between 0 and 1

        const maxTranslate = track.scrollWidth - window.innerWidth + 64; // 64px for padding/margin buffer
        setTranslateX(-(progress * maxTranslate));
      } else {
        setTranslateX(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll(); // initial layout

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className={styles.scrollWrapper} ref={scrollWrapperRef} id="services">
      <div className={styles.stickyContainer}>
        <div className={styles.header}>
          <div className="section-title-box">Why Choose FOOT PULSE?</div>
        </div>

        <div 
          className={styles.horizontalTrack} 
          ref={trackRef}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {services.map((s) => (
            <div key={s.id} className={styles.cardWrapper}>
              <ServiceCard {...s} />
            </div>
          ))}

          {/* Center emblem at the end or embedded? We can put it as the last item in the track */}
          <div className={styles.emblemWrapper}>
            <div className={styles.emblem}>
              <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <g fill="currentColor" transform="translate(40,40)">
                  <ellipse rx="4" ry="14" transform="rotate(0)" />
                  <ellipse rx="4" ry="14" transform="rotate(45)" />
                  <ellipse rx="4" ry="14" transform="rotate(90)" />
                  <ellipse rx="4" ry="14" transform="rotate(135)" />
                </g>
                <circle cx="40" cy="40" r="5" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
