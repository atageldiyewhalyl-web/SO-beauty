"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "./ArrowUpRight";
import { treatments } from "../treatments";

type SoHeaderProps = {
  whatsappUrl: string;
};

const navigation = [
  { href: "/preise", label: "Preise" },
  { href: "/#technologie", label: "Technologie" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SoHeader({ whatsappUrl }: SoHeaderProps) {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      burgerRef.current?.focus();
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="so-header">
        <Link className="so-header-logo" href="/" aria-label="S&O Beauty Salon Startseite">
          <span className="so-mark" role="img" aria-label="S&O" />
          <small>Beauty Salon</small>
        </Link>

        <nav className="so-nav" aria-label="Hauptnavigation">
          <div className="so-nav-trigger">
            <Link href="/#behandlungen">Dienstleistungen</Link>
            <div className="so-nav-menu">
              {treatments.map((treatment) => (
                <Link href={treatment.href} key={treatment.slug}>
                  {treatment.name}
                  <ArrowUpRight size={11} />
                </Link>
              ))}
            </div>
          </div>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="so-header-actions">
          <a
            className="so-btn so-btn-rose so-header-cta"
            data-btn="1"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Termin über WhatsApp
            <ArrowUpRight size={12} />
          </a>
          <button
            ref={burgerRef}
            className="so-burger"
            type="button"
            aria-expanded={open}
            aria-controls="so-mobile-menu"
            aria-label="Menü öffnen"
            onClick={() => setOpen(true)}
          >
            <i aria-hidden="true"><span /><span /></i>
          </button>
        </div>
      </header>

      {open ? (
        <div className="so-mobile-menu" id="so-mobile-menu">
          <div className="so-mobile-top">
            <span className="so-mark" role="img" aria-label="S&O" />
            <button className="so-mobile-close" type="button" onClick={close} aria-label="Menü schließen">
              ✕
            </button>
          </div>
          <nav aria-label="Mobile Navigation">
            <Link href="/#behandlungen" onClick={close} style={{ animationDelay: "0.05s" }}>Behandlungen</Link>
            <div className="so-mobile-sub">
              {treatments.map((treatment) => (
                <Link href={treatment.href} key={treatment.slug} onClick={close}>{treatment.name}</Link>
              ))}
            </div>
            {navigation.map((item, index) => (
              <Link
                href={item.href}
                key={item.href}
                onClick={close}
                style={{ animationDelay: `${0.12 + index * 0.07}s` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            className="so-btn so-btn-paper"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={close}
            style={{ animationDelay: "0.4s" }}
          >
            Termin über WhatsApp
            <ArrowUpRight />
          </a>
        </div>
      ) : null}
    </>
  );
}
