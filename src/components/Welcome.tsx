"use client";

import styles from "./Welcome.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Welcome() {
  const textRef = useScrollReveal<HTMLDivElement>();
  const imagesRef = useScrollReveal<HTMLDivElement>(150);

  return (
    <section className={styles.welcome} id="about">
      <div className={styles.container}>
        <div className={styles.content} ref={textRef}>
          <h2 className={styles.title}>Premium Foot Reflexology & Wellness Experience</h2>
          <div className={styles.divider} />
          <p className={styles.lead}>
            Welcome to FOOT PULSE Wellness & Reflexology, where relaxation meets professional care. Our expertly trained therapists combine the art of reflexology with a calm, luxurious environment to help you unwind, recharge, and restore balance.
          </p>
          <p className={styles.bodyText}>
            Whether you're seeking relief from everyday stress, tired feet, muscle tension, or simply looking for a peaceful escape, FOOT PULSE offers a personalized wellness experience designed around your comfort and well-being.
          </p>
        </div>

        <div className={styles.imagesGrid} ref={imagesRef}>
          <div className={styles.mainImageWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80"
              alt="Foot spa reflexology"
              className={styles.welcomeImg1}
            />
          </div>
          <div className={styles.subImageWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400&q=80"
              alt="Massage therapy"
              className={styles.welcomeImg2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
