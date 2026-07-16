"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80",
    alt: "Luxury spa facial treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&q=80",
    alt: "Serene spa atmosphere",
  },
  {
    src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=80",
    alt: "Premium spa wellness",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const INTERVAL = 6000;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    setProgress(0);
    const tick = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (INTERVAL / 100), 100));
    }, 100);
    return () => clearInterval(tick);
  }, [current]);

  const scrollToWelcome = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero} id="home">
      {/* Slides */}
      <div className={styles.slider}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === current ? styles.active : ""}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div className={styles.overlay} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.heroHeading}>
          Feel the Pulse of Healing & Relaxation
        </h1>
        <p className={styles.heroDesc}>
          South India's trusted reflexology hub, with fast-growing branches and a reputed destination for deeply healing wellness and relaxation.
        </p>

        <a href="#booking" className={styles.bookBtn}>
          BOOK NOW
        </a>

        {/* Progress bar */}
        <div className={styles.progressWrap}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => {
              setCurrent(i);
              setProgress(0);
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <a href="#welcome" className={styles.scrollCue} onClick={scrollToWelcome} aria-label="Scroll down">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
