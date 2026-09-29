"use client";

import { useEffect } from "react";

/**
 * Drives the scroll-reveal choreography for every `[data-rev]` element on the
 * page: elements rise 26px into place once
 * they cross into view, and are shown immediately when motion is reduced.
 */
export function Reveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-rev]:not(.so-on)");
    if (!elements.length) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      elements.forEach((element) => element.classList.add("so-on"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("so-on");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
