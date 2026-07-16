"use client";

import styles from "./Footer.module.css";
import { Footprints, Leaf, Heart, Sparkles, ShieldCheck, CreditCard, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      {/* Links grid */}
      <div className={styles.grid}>
        {/* Column 1: Brand Info */}
        <div className={styles.colInfo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="FOOT PULSE Logo" className={styles.logoImg} />
          <p className={styles.brandDesc}>
            FOOT PULSE Wellness & Reflexology is South India’s trusted reflexology hub and premier destination for deeply healing wellness and relaxation. Combining the art of reflexology with a calm, luxurious environment, our expertly trained therapists provide personalized care to help you unwind, recharge, and restore balance.
          </p>
        </div>

        {/* Column 2: Services */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>SERVICES</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Footprints size={14} className={styles.icon} />
              <span className={styles.text}>Reflexology Therapists</span>
            </li>
            <li className={styles.listItem}>
              <Leaf size={14} className={styles.icon} />
              <span className={styles.text}>Premium Wellness</span>
            </li>
            <li className={styles.listItem}>
              <Heart size={14} className={styles.icon} />
              <span className={styles.text}>Couples Therapy Suite</span>
            </li>
            <li className={styles.listItem}>
              <Sparkles size={14} className={styles.icon} />
              <span className={styles.text}>Private VIP Suite</span>
            </li>
            <li className={styles.listItem}>
              <ShieldCheck size={14} className={styles.icon} />
              <span className={styles.text}>Hygienic Sanctuary</span>
            </li>
            <li className={styles.listItem}>
              <CreditCard size={14} className={styles.icon} />
              <span className={styles.text}>Digital Payments</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Locations */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>OUR BRANCHES</h4>
          <div className={styles.locationBlock}>
            <h5 className={styles.branchName}>Mylapore Branch</h5>
            <p className={styles.address}>
              No. 2 & 3, Bishop Wallers Avenue East, C.I.T. Colony, Mylapore, Chennai – 600004
              <span className={styles.landmark}> (Opposite Hotel Savera & Near Tamil Koodam Mess)</span>
            </p>
          </div>
          <div className={styles.locationBlock} style={{ marginTop: "1.5rem" }}>
            <h5 className={styles.branchName}>T. Nagar Branch</h5>
            <p className={styles.address}>
              No. 147, 2nd Floor, Sucans Sivagami Square, G.N. Chetty Road, T. Nagar, Chennai – 600017
              <span className={styles.landmark}> (Opposite Virudhunagar Hotel & Near Saravana Stores)</span>
            </p>
          </div>
        </div>

        {/* Column 4: Contact & Hours */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>GET IN TOUCH</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Phone size={14} className={styles.icon} />
              <span className={styles.text}>+91 98404 12345</span>
            </li>
            <li className={styles.listItem}>
              <Mail size={14} className={styles.icon} />
              <span className={styles.text}>info@footpulse.com</span>
            </li>
            <li className={styles.listItem}>
              <Clock size={14} className={styles.icon} />
              <span className={styles.text}>10:00 AM - 9:00 PM (Daily)</span>
            </li>
          </ul>

          {/* Social Row */}
          <div className={styles.socialRow}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://wa.me/919840412345" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.848.502 3.578 1.378 5.084L2 22l5.09-1.332a9.965 9.965 0 0 0 4.914 1.336c5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2zm0 18.008c-1.636 0-3.176-.432-4.516-1.188l-.324-.184-3 .784.796-2.924-.204-.328a8.004 8.004 0 0 1-1.256-4.16c0-4.412 3.592-8.004 8.004-8.004 4.412 0 8.004 3.592 8.004 8.004.004 4.416-3.588 8.008-8.004 8.008zm4.416-5.836c-.244-.124-1.448-.716-1.672-.8-.224-.08-.388-.124-.552.124-.164.248-.636.804-.78 1-.144.196-.288.224-.532.1-.244-.124-1.032-.38-1.968-1.216-.728-.648-1.22-1.452-1.364-1.7-.144-.244-.016-.376.108-.5.112-.112.244-.288.368-.432.12-.144.164-.244.244-.408.08-.168.04-.312-.02-.436-.06-.124-.552-1.332-.756-1.824-.2-.48-.4-.412-.552-.42h-.472c-.164 0-.432.06-.656.3-.224.244-.856.836-.856 2.04 0 1.204.876 2.368.996 2.532.12.164 1.724 2.632 4.176 3.692.584.252 1.04.404 1.396.516.588.188 1.124.16 1.548.096.472-.072 1.448-.592 1.652-1.164.204-.572.204-1.064.144-1.164-.06-.1-.22-.164-.464-.288z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
