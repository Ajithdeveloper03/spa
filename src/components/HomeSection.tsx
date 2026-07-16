"use client";

import styles from "./HomeSection.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HomeSection() {
  const imgRef = useScrollReveal<HTMLDivElement>();
  const textRef = useScrollReveal<HTMLDivElement>(150);

  return (
    <section className={styles.section} id="membership">
      <div className={styles.inner}>
        <div className={styles.imgCol} ref={imgRef}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&q=80"
            alt="Spa at home natural products"
            loading="lazy"
            className={styles.productImg}
          />
        </div>
        <div className={styles.textCol} ref={textRef}>
          <h2 className={styles.title}>Experience Serene Oasis At Home</h2>
          <a href="#" className={styles.btn}>Discover More</a>
        </div>
      </div>

      <div className={styles.kinBar}>
        <h3 className={styles.kinName}>KIN NATURAL</h3>
        <p className={styles.kinTagline}>A TOUCH OF NATURE IN EVERY DROP</p>
      </div>
    </section>
  );
}
