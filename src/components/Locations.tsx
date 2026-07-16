"use client";

import styles from "./Locations.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const branches = [
  {
    name: "Mylapore Branch",
    address: "No. 2 & 3, Bishop Wallers Avenue East, C.I.T. Colony, Mylapore, Chennai – 600004",
    landmark: "(Opposite Hotel Savera & Near Tamil Koodam Mess)",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    alt: "Foot Pulse Mylapore Spa Branch",
  },
  {
    name: "T. Nagar Branch",
    address: "No. 147, 2nd Floor, Sucans Sivagami Square, G.N. Chetty Road, T. Nagar, Chennai – 600017",
    landmark: "(Opposite Virudhunagar Hotel & Near Saravana Stores)",
    img: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?w=800&q=80",
    alt: "Foot Pulse T. Nagar Spa Branch",
  }
];

export default function Locations() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>(150);

  return (
    <section className={styles.section} id="locations">
      <div className={styles.header} ref={headerRef}>
        <div className="section-title-box">VISIT US</div>
      </div>

      <div className={styles.grid} ref={gridRef}>
        {branches.map((branch, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardImg}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={branch.img} alt={branch.alt} loading="lazy" />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.branchName}>{branch.name}</h3>
              <p className={styles.address}>{branch.address}</p>
              <p className={styles.landmark}>{branch.landmark}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.name + " " + branch.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                VIEW ON GOOGLE MAPS
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
