"use client";

import { useState } from "react";
import styles from "./Locations.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tabs = ["bangkok", "chiangmai", "pattaya", "phuket"] as const;
type Tab = (typeof tabs)[number];

const tabLabels: Record<Tab, string> = {
  bangkok: "BANGKOK",
  chiangmai: "CHIANG MAI",
  pattaya: "PATTAYA",
  phuket: "PHUKET",
};

const locationData: Record<
  Tab,
  { title: string; desc: string; hours: string; img: string; alt: string }[]
> = {
  bangkok: [
    {
      title: "Sukhumvit 31",
      desc: "Bangkok's secret luxury hideaway nestled in the heart of Sukhumvit. Surrounded by lush greenery and a serene atmosphere that will soothe your soul.",
      hours: "10:00 ~ Midnight",
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
      alt: "Sukhumvit 31 Spa",
    },
    {
      title: "Urban Oasis Spa",
      desc: "An exceptional spa experience in Thonglor, one of the city's hippest neighborhoods. Discover urban serenity in our luxurious sanctuary.",
      hours: "10:00 ~ Midnight",
      img: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?w=800&q=80",
      alt: "Urban Oasis Spa",
    },
    {
      title: "GAAYA by Serene Oasis",
      desc: "Escape the demands of everyday life and surrender to the tranquility. Step into our haven of pure relaxation and holistic wellness.",
      hours: "10:00 ~ 22:00",
      img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
      alt: "GAAYA Spa",
    },
  ],
  chiangmai: [
    {
      title: "Nimman Oasis Spa",
      desc: "Set in the cultural heart of Chiang Mai, our Nimman location offers a tranquil escape surrounded by art, culture, and natural beauty.",
      hours: "10:00 ~ 22:00",
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
      alt: "Nimman Chiang Mai Spa",
    },
    {
      title: "Old City Sanctuary",
      desc: "Within the ancient walls of Chiang Mai, discover a spa steeped in traditional Lanna healing wisdom and natural herbal remedies.",
      hours: "09:00 ~ 21:00",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      alt: "Old City Sanctuary",
    },
  ],
  pattaya: [
    {
      title: "Beachside Oasis",
      desc: "Where the ocean breeze meets the finest spa treatments. Our Pattaya location delivers an unmatched seaside wellness retreat.",
      hours: "10:00 ~ Midnight",
      img: "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=800&q=80",
      alt: "Pattaya Beachside Spa",
    },
  ],
  phuket: [
    {
      title: "Patong Oasis Spa",
      desc: "Our tropical island paradise retreat. Let the island spirit carry your stresses away as expert therapists restore your inner balance.",
      hours: "10:00 ~ 22:00",
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      alt: "Phuket Spa",
    },
  ],
};

function LocationCard({
  title,
  desc,
  hours,
  img,
  alt,
  delay = 0,
}: {
  title: string;
  desc: string;
  hours: string;
  img: string;
  alt: string;
  delay?: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>(delay);
  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.cardImg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={alt} loading="lazy" />
        <div className={styles.cardHours}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>OPENING HOURS</span>
          <span className={styles.hoursTime}>{hours}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
      </div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href="#" className="discover-link">DISCOVER MORE</a>
      </div>
    </div>
  );
}

export default function Locations() {
  const [activeTab, setActiveTab] = useState<Tab>("bangkok");
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section} id="locations">
      <div className={styles.header} ref={headerRef}>
        <div className="section-title-box">OUR LOCATIONS</div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tabBtn} ${activeTab === tab ? styles.tabActive : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tabLabels[tab]}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className={styles.grid}>
        {locationData[activeTab].map((loc, i) => (
          <LocationCard key={loc.title} {...loc} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}
