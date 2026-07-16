import styles from "./Partners.module.css";

const partners = ["KIN", "TAP", "Wellness Co.", "Nature Lab"];

export default function Partners() {
  return (
    <section className={styles.section}>
      <div className={styles.track}>
        {partners.map((p) => (
          <div key={p} className={styles.logo}>
            {p}
          </div>
        ))}
      </div>
    </section>
  );
}
