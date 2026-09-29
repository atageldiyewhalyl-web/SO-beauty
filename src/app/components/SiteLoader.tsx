"use client";

import { useEffect, useState } from "react";

const SEEN_KEY = "so-loader-seen";

/**
 * First-visit curtain: the S&O mark fills with the rose gradient, then lifts.
 * Rendered with the document so it covers the first paint, then dismissed -
 * immediately for repeat visits in the same session or reduced-motion visitors,
 * otherwise once the fill completes. The page underneath is always fully
 * rendered behind it, and `<noscript>` hides it outright.
 */
export function SiteLoader() {
  const [state, setState] = useState<"running" | "leaving" | "done">("running");

  useEffect(() => {
    const isOfferPage = window.location.pathname.startsWith("/angebote/");
    const skip =
      isOfferPage ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      sessionStorage.getItem(SEEN_KEY) !== null;

    if (skip) {
      document.body.style.overflow = "";
      const frame = window.requestAnimationFrame(() => setState("done"));
      return () => window.cancelAnimationFrame(frame);
    }

    sessionStorage.setItem(SEEN_KEY, "1");
    document.body.style.overflow = "hidden";

    const lift = window.setTimeout(() => setState("leaving"), 1450);
    const clear = window.setTimeout(() => {
      setState("done");
      document.body.style.overflow = "";
    }, 2050);

    return () => {
      window.clearTimeout(lift);
      window.clearTimeout(clear);
      document.body.style.overflow = "";
    };
  }, []);

  if (state === "done") return null;

  return (
    <div className="so-loader" data-state={state} role="status" aria-label="Seite wird geladen">
      <div className="so-loader-inner">
        <span className="so-loader-mark">
          <span className="so-loader-fill" />
        </span>
        <span className="so-loader-word">Beauty Salon</span>
        <span className="so-loader-rule"><i /></span>
      </div>
    </div>
  );
}
