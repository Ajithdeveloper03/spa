"use client";

import styles from "./Welcome.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Welcome() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.welcome} id="about">
      <div
        className={styles.content}
        ref={ref}
      >
        <h2 className={styles.title}>Premium Foot Reflexology & Wellness Experience</h2>
        <div className={styles.divider} />
        <p className={styles.lead}>
          Welcome to FOOT PULSE Wellness & Reflexology, where relaxation meets professional care. Our expertly trained therapists combine the art of reflexology with a calm, luxurious environment to help you unwind, recharge, and restore balance.
        </p>
        <p className={styles.body}>
          Whether you're seeking relief from everyday stress, tired feet, muscle tension, or simply looking for a peaceful escape, FOOT PULSE offers a personalized wellness experience designed around your comfort and well-being.
        </p>
      </div>
    </section>
  );
}
