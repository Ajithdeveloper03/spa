"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLeftLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT US" },
  { href: "#services", label: "SERVICES" },
  { href: "#vip", label: "VIP SUITES" },
];

const navRightLinks = [
  { href: "#gallery", label: "GALLERY" },
  { href: "#testimonials", label: "TESTIMONIALS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
    }
    setActiveLink(id);
    setMobileOpen(false);
  };

  const allLinks = [...navLeftLinks, ...navRightLinks];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Left nav */}
        <nav className={styles.navLeft}>
          {navLeftLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                activeLink === link.href.replace("#", "") ? styles.active : ""
              }`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Logo */}
        <div className={styles.logoWrap}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="FOOT PULSE Logo" className={styles.logoImg} />
          </Link>
        </div>

        {/* Right nav */}
        <nav className={styles.navRight}>
          {navRightLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                activeLink === link.href.replace("#", "") ? styles.active : ""
              }`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <div className={styles.navIcons}>
            <button className={styles.iconBtn} aria-label="Shopping Bag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
            <button className={styles.iconBtn} aria-label="Language">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ""}`}>
        {allLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
