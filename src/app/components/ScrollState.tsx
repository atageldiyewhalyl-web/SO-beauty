"use client";

import { useEffect } from "react";

/**
 * Flags the document once the page has scrolled past the hero's opening frame.
 * Drives the inset hero expanding to full bleed and the header picking up its
 * background, both of which are pure CSS transitions on [data-scrolled].
 */
export function ScrollState() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const apply = () => {
      frame = 0;
      root.dataset.scrolled = window.scrollY > 24 ? "true" : "false";
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      if (frame) window.cancelAnimationFrame(frame);
      delete root.dataset.scrolled;
    };
  }, []);

  return null;
}
