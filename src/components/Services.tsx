"use client";

import { useState } from "react";
import styles from "./Services.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Footprints, Leaf, Heart, Sparkles, ShieldCheck, MapPin, CalendarCheck } from "lucide-react";

const tabsData = [
  {
    id: "therapists",
    Icon: Footprints,
    tabTitle: "THERAPISTS",
    title: "Professionally Trained Reflexology Therapists",
    desc: "Our reflexology therapists undergo rigorous professional training to master acupressure and body pressure mapping. They specialize in stimulating reflex zones on your feet to promote deep full-body healing and relieve chronic fatigue.",
    bullets: [
      "Rigorous certification in traditional Thai reflexology",
      "Expert understanding of pressure mapping and bodily relief",
      "Tailored pressure adjustments for individual guest comfort"
    ],
    img: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80",
    alt: "Reflexology Therapists at Foot Pulse",
  },
  {
    id: "wellness",
    Icon: Leaf,
    tabTitle: "WELLNESS",
    title: "Premium Wellness Experience",
    desc: "Immerse yourself in a luxurious sensory escape. From ambient acoustics to organic aromatherapy, every element of our wellness hub is designed to lower cortisol levels and nurture your mind, body, and spirit.",
    bullets: [
      "Calming organic herbal teas served pre- and post-therapy",
      "Premium grade, cold-pressed massage oils and organic scrubs",
      "Custom atmospheric lighting and soothing acoustics"
    ],
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    alt: "Premium wellness experience",
  },
  {
    id: "couples",
    Icon: Heart,
    tabTitle: "COUPLES SUITE",
    title: "Exclusive Couples Therapy Suite",
    desc: "Relax together in harmony. Our spacious couples suites offer the perfect setting to escape the stress of daily routines, allowing you to share a deeply restorative experience side-by-side with complete peace.",
    bullets: [
      "Elegant dual-table therapy setups with candlelit ambiance",
      "Personalized packages for anniversaries, birthdays, or weekend getaways",
      "Perfect blend of shared connection and quiet relaxation"
    ],
    img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
    alt: "Couples therapy suite",
  },
  {
    id: "vip",
    Icon: Sparkles,
    tabTitle: "VIP SUITE",
    title: "Private VIP Therapy Suite",
    desc: "Indulge in a higher standard of sanctuary. Our private VIP suites cater to individuals looking for total seclusion, custom room settings, and dedicated practitioner attention for uninterrupted peace.",
    bullets: [
      "Completely private, noise-insulated single suites",
      "Dedicated therapist assigned for the entire duration",
      "Customizable room temperature and aroma diffuser options"
    ],
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    alt: "Private VIP therapy suite",
  },
  {
    id: "hygiene",
    Icon: ShieldCheck,
    tabTitle: "HYGIENE",
    title: "Clean, Hygienic & Comfortable Environment",
    desc: "We maintain a clean sanctuary through medical-grade sanitization protocols. Every linen is replaced fresh, and all rooms are thoroughly sterilized after every single session to guarantee absolute safety and comfort.",
    bullets: [
      "Strict sanitization checklist completed after each guest",
      "Sanitized, ultra-soft linens and fresh treatment tools",
      "Air purification systems running continuously"
    ],
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    alt: "Hygienic spa environment",
  },
  {
    id: "locations",
    Icon: MapPin,
    tabTitle: "LOCATIONS",
    title: "Convenient Locations in Mylapore & T. Nagar",
    desc: "Situated in Chennai's prime centers, our branches are easily accessible, offering secure parking spaces and premium wellness services right in your neighborhood for stress-free visits.",
    bullets: [
      "Mylapore: Opposite Hotel Savera, CIT Colony",
      "T. Nagar: G.N. Chetty Road, Sivagami Square",
      "Convenient parking facilities and easy-to-find locations"
    ],
    img: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?w=800&q=80",
    alt: "Foot Pulse branches in Chennai",
  },
  {
    id: "booking",
    Icon: CalendarCheck,
    tabTitle: "EASY BOOKING",
    title: "Easy Online Booking & Digital Payments",
    desc: "Book your escape in seconds. Our reservation platform lets you choose your slot, select your therapist, and complete secure digital payments with instant confirmations, straight from your device.",
    bullets: [
      "Mobile-friendly booking system with live slot availability",
      "Secure digital payments, credit cards, and UPI accepted",
      "Instant SMS and Email booking confirmation"
    ],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    alt: "Online booking systems",
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("therapists");
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section} id="services">
      <div className={styles.header} ref={headerRef}>
        <div className="section-title-box">WHY CHOOSE FOOT PULSE?</div>
      </div>

      <div className={styles.container}>
        {/* Tab Buttons */}
        <div className={styles.tabsHeader}>
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.Icon className={styles.tabIcon} size={15} />
              {tab.tabTitle}
            </button>
          ))}
        </div>

        {/* Tab Content Panel */}
        <div className={styles.tabsContent}>
          {tabsData.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <div
                key={tab.id}
                className={`${styles.tabPane} ${isActive ? styles.activePane : ""}`}
              >
                {isActive && (
                  <div className={styles.tabShowcase}>
                    <h3 className={styles.tabHeading}>{tab.title}</h3>
                    <div className={styles.imageWrapper}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tab.img}
                        alt={tab.alt}
                        className={styles.tabImg}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
