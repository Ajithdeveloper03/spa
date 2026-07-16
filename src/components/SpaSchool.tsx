"use client";

import { useRef, useState } from "react";
import styles from "./SpaSchool.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const schoolSlides = [
  {
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    alt: "Spa School Training",
  },
  {
    src: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80",
    alt: "Spa School Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80",
    alt: "Spa Training Session",
  },
  {
    src: "https://images.unsplash.com/photo-1510090191560-2ee0a61c3e01?w=800&q=80",
    alt: "Wellness Training",
  },
];

export default function SpaSchool() {
  const [index, setIndex] = useState(0);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const descRef = useScrollReveal<HTMLParagraphElement>(150);
  const sliderWrapRef = useScrollReveal<HTMLDivElement>(250);

  const maxIndex = schoolSlides.length - 3;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className={styles.section}>
      <div className={styles.header} ref={headerRef}>
        <div className="section-title-box">SERENE OASIS SPA SCHOOL</div>
      </div>
      <p className={styles.desc} ref={descRef}>
        Master the ancient art of Thai wellness and healing — join our
        internationally certified training programs.
      </p>

      <div className={styles.sliderWrap} ref={sliderWrapRef}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(calc(-${index} * (33.333% + 0.34rem)))` }}
        >
          {schoolSlides.map((slide, i) => (
            <div key={i} className={styles.slide}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.src} alt={slide.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <button
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={next}
          disabled={index >= maxIndex}
          aria-label="Next"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
