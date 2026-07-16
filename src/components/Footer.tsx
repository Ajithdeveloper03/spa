"use client";

import { useState } from "react";
import styles from "./Footer.module.css";

const footerLinks = {
  LOCATIONS: ["Chiang Mai", "Bangkok", "Pattaya", "Phuket"],
  "SPA PACKAGES": ["2 Hour Packages", "2½ Hour Packages", "3 Hour And More"],
  MASSAGES: ["Signature Treatments", "Traditional Massage", "Kids Treatments"],
  "SPA TREATMENT": [
    "Body Scrubs",
    "Body Wraps",
    "Facial Treatments",
    "Hydrotherapy",
    "Waxing",
  ],
  CORPORATE: [
    "Brand Profile",
    "Oasis Concept",
    "Blog",
    "News & Events",
    "Our People",
    "Work With Us",
    "FAQs",
    "Privacy & Policy",
    "Contact Us",
  ],
};

const socialLinks = [
  { label: "Line", icon: "L", color: "#06c755" },
  { label: "TripAdvisor", icon: "T", color: "#34e0a1" },
  { label: "Facebook", icon: "f", color: "#1877f2" },
  { label: "Instagram", icon: "IG", color: "#c13584" },
  { label: "WeChat", icon: "W", color: "#09b83e" },
  { label: "WhatsApp", icon: "W", color: "#25d366" },
  { label: "Telegram", icon: "✈", color: "#2ca5e0" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className={styles.footer} id="contact">
      {/* Links grid */}
      <div className={styles.grid}>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className={styles.col}>
            <h4 className={styles.colTitle}>{title}</h4>
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.footerLink}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        {/* Social */}
        <div className={styles.bottomBlock}>
          <span className={styles.blockLabel}>FOLLOW SERENE OASIS SPA</span>
          <div className={styles.socialIcons}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href="#"
                className={styles.socialIcon}
                style={{ background: s.color }}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className={styles.bottomBlock}>
          <span className={styles.blockLabel}>LET'S STAY IN TOUCH</span>
          <form className={styles.newsletter} onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              aria-label="Email for newsletter"
              className={styles.input}
            />
            <button type="submit" className={styles.submitBtn} aria-label="Subscribe">
              {submitted ? "✓" : "➤"}
            </button>
          </form>
        </div>

        {/* Payment */}
        <div className={styles.bottomBlock}>
          <span className={styles.blockLabel}>PAYMENT METHODS</span>
          <div className={styles.paymentIcons}>
            {["VISA", "MC", "AMEX", "JCB", "PayPal"].map((p) => (
              <span key={p} className={styles.payBadge}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>©2017–2025, SERENE OASIS SPA (THAILAND) All Rights Reserved.</p>
      </div>
    </footer>
  );
}
