"use client";

import { useEffect, useRef } from "react";

/**
 * useScrollReveal — attach to any element ref.
 * On mount, sets initial opacity/transform via inline styles.
 * When the element enters the viewport, animates it in.
 *
 * @param delay - stagger delay in ms
 * @param fromX - initial X offset (default 0)
 * @param fromY - initial Y offset (default 30)
 */
export function useScrollReveal<T extends HTMLElement>(
  delay = 0,
  fromX = 0,
  fromY = 30
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial hidden state
    el.style.opacity = "0";
    el.style.transform = `translateY(${fromY}px) translateX(${fromX}px)`;
    el.style.transition = `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) translateX(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, fromX, fromY]);

  return ref;
}
