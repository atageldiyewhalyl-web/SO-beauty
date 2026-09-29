"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = 'a, button, summary, input, select, textarea, [role="button"], [tabindex]:not([tabindex="-1"])';

/**
 * Salon cursor: a rose serum droplet with a blush halo that eases in behind it.
 * Desktop pointers only: touch, coarse pointers and reduced-motion visitors keep
 * the platform cursor untouched.
 */
export function BeautyCursor() {
  const dropRef = useRef<HTMLDivElement | null>(null);
  const haloRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    const drop = dropRef.current;
    const halo = haloRef.current;
    if (!drop || !halo) return;

    const root = document.documentElement;
    root.dataset.soCursor = "on";

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let haloX = pointerX;
    let haloY = pointerY;
    let frame = 0;

    const render = () => {
      haloX += (pointerX - haloX) * 0.16;
      haloY += (pointerY - haloY) * 0.16;
      drop.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      halo.style.transform = `translate3d(${haloX}px, ${haloY}px, 0)`;
      frame = window.requestAnimationFrame(render);
    };
    frame = window.requestAnimationFrame(render);

    const onMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      root.dataset.soCursorVisible = "true";
      const target = event.target as Element | null;
      const hot = Boolean(target?.closest?.(INTERACTIVE));
      root.dataset.soCursorHot = hot ? "true" : "false";
    };
    const onLeave = () => { root.dataset.soCursorVisible = "false"; };
    const onDown = () => { root.dataset.soCursorDown = "true"; };
    const onUp = () => { root.dataset.soCursorDown = "false"; };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      delete root.dataset.soCursor;
      delete root.dataset.soCursorVisible;
      delete root.dataset.soCursorHot;
      delete root.dataset.soCursorDown;
    };
  }, []);

  return (
    <div className="so-cursor" aria-hidden="true">
      <div className="so-cursor-halo" ref={haloRef} />
      <div className="so-cursor-drop" ref={dropRef} />
    </div>
  );
}
