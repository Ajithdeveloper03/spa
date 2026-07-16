"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLeftLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#services", label: "SERVICES" },
  { href: "#vip-suites", label: "VIP SUITES" },
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
    setScrolled(window.scrollY > 50);
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

        {/* Center Logo - Foot Pulse Logo Image */}
        <div className={styles.logoWrap}>
          <Link href="/" className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/footref/logo.png" alt="FOOT PULSE" className={styles.logoImg} />
          </Link>
        </div>

        {/* Right nav group (links + actions) */}
        <div className={styles.navRightGroup}>
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
          </nav>

          {/* Right Actions (Book Now CTA & Hamburger) */}
          <div className={styles.navActions}>
            <a href="#contact" className={styles.bookCta}>
              BOOK NOW
            </a>

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
        </div>
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
