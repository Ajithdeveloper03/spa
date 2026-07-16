"use client";

import styles from "./HomeSection.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HomeSection() {
  const contentRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section} id="journey">
      <div className={styles.inner} ref={contentRef}>
        <div className={styles.content}>
          <h2 className={styles.title}>Your Journey to Wellness Starts Here</h2>
          <div className={styles.divider} />
          <p className={styles.desc}>
            Step into FOOT PULSE Wellness & Reflexology and discover a place where professional care, comfort, and relaxation come together. Let us help you feel lighter, calmer, and revitalized—one step at a time.
          </p>
          <p className={styles.subdesc}>
            Book your appointment today and experience the healing touch of FOOT PULSE.
          </p>
          <a href="#contact" className={styles.btn}>BOOK APPOINTMENT</a>
        </div>
      </div>
    </section>
  );
}
