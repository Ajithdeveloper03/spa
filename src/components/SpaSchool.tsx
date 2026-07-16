"use client";

import styles from "./SpaSchool.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function SpaSchool() {
  const block1Ref = useScrollReveal<HTMLDivElement>();
  const block2Ref = useScrollReveal<HTMLDivElement>(150);

  return (
    <section className={styles.section} id="about-details">
      {/* Block 1: Wellness Begins with Your Feet */}
      <div className={styles.block} ref={block1Ref}>
        <div className={styles.imageCol}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80"
            alt="Foot Reflexology treatment"
            className={styles.img}
            loading="lazy"
          />
        </div>
        <div className={styles.textCol}>
          <h2 className={styles.title}>Wellness Begins with Your Feet</h2>
          <p className={styles.desc}>
            Foot reflexology is more than just a relaxing treatment. By applying gentle pressure to specific reflex points, it helps promote deep relaxation, improve circulation, ease muscle tension, and support your body's natural sense of balance and well-being.
          </p>
          <p className={styles.desc}>
            Every session is thoughtfully tailored to leave you feeling refreshed, renewed, and revitalized.
          </p>
        </div>
      </div>

      {/* Block 2: Experience Wellness Together - Unique Edge-to-Edge Full-Bleed Split design */}
      <div className={styles.experienceSplit} ref={block2Ref} id="vip-suites">
        <div className={styles.splitImageCol}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&q=80"
            alt="Couples spa experience"
            className={styles.splitImg}
            loading="lazy"
          />
        </div>
        <div className={styles.splitTextCol}>
          <h2 className={styles.splitTitle}>Experience Wellness Together</h2>
          <div className={styles.splitDivider} />
          <p className={styles.splitDesc}>
            Share the gift of relaxation with someone special in our elegant Couples Therapy Suite, or enjoy complete privacy and personalized comfort in our Premium Therapy Suite.
          </p>
          <p className={styles.splitDesc}>
            Whether you're visiting alone, with a partner, or with family, every guest receives attentive care in a peaceful and welcoming setting.
          </p>
        </div>
      </div>
    </section>
  );
}
