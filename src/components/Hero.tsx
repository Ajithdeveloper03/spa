"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.error("Autoplay was prevented:", err);
      });
    }
  }, []);

  return (
    <section className={styles.hero} id="home">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/footref/hero.mp4"
        loop
        muted
        playsInline
        preload="auto"
        className={styles.videoBg}
      />

      {/* Dark Overlay for readability */}
      <div className={styles.overlay} />

      {/* Content wrapper */}
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heroHeading}>
            Feel the Pulse of Healing & Relaxation
          </h1>
          <p className={styles.heroDesc}>
            “South India’s trusted reflexology hub, with fast growing branches and a reputed destination for deeply healing wellness and relaxation.”
          </p>
        </div>

        <div className={styles.btnWrapper}>
          <a href="#contact" className={styles.bookBtn}>
            BOOK NOW
          </a>
        </div>
      </div>
    </section>
  );
}
