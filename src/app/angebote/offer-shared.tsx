import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { ArrowUpRight } from "../components/ArrowUpRight";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { mapsUrl } from "../treatments";

export const phoneDisplay = "+49 15565 855752";
export const phoneHref = "tel:+4915565855752";
export const openingHours = "Mo–Sa · 09:00–20:00";

/**
 * Prefilled WhatsApp texts per placement, so the salon can see which part of the
 * page someone answered. Every CTA must stay a plain <a> — the GTM link-click
 * trigger is what records the conversion (see docs/LANDING-BRIEF-LASER.md §9).
 */
const waBase = "https://wa.me/4915565855752?text=";
export const waLinks = {
  freeTest: `${waBase}Hallo%20S%26O%2C%20ich%20m%C3%B6chte%20den%20kostenlosen%20Lasertest%20vereinbaren.`,
  package: `${waBase}Hallo%20S%26O%2C%20ich%20interessiere%20mich%20f%C3%BCr%20das%20Ganzk%C3%B6rper-Paket%20f%C3%BCr%20180%20%E2%82%AC.`,
  question: `${waBase}Hallo%20S%26O%2C%20ich%20habe%20eine%20Frage%20zur%20Laser-Haarentfernung.`,
  appointment: `${waBase}Hallo%20S%26O%2C%20ich%20m%C3%B6chte%20einen%20Lasertermin%20anfragen.`,
};

/** Real Google reviews. Never add one that isn't. */
export const reviews = [
  {
    name: "Açelya Akdeniz",
    meta: "Google Review",
    initial: "A",
    text: "Ich bin mit der Laser-Haarentfernung sehr zufrieden. Sie ist super nett, freundlich und man fühlt sich sofort wohl. Die Geräte sind sehr modern und die Behandlung wird professionell durchgeführt.",
  },
  {
    name: "Berry",
    meta: "Google Review",
    initial: "B",
    text: "Hab einige Studios jetzt ausprobiert und sie ist wirklich die beste!! Sie macht so gründlich und lässt keine Ecke aus. Das Gerät ist top und man sieht sehr sehr schnell Ergebnisse.",
  },
  {
    name: "EU IAFI",
    meta: "Google Review",
    initial: "E",
    text: "Ich war wirklich sehr zufrieden. Der Service war super und alle waren total freundlich und aufmerksam. Auch das Preis-Leistungs-Verhältnis passt auf jeden Fall.",
  },
];

export function ReviewsSection({ title = "Was Kundinnen über S&O sagen." }: { title?: string }) {
  return (
    <section className="offer-section offer-reviews" data-offer-reviews>
      <div className="offer-section-head">
        <p className="offer-kicker">Bewertungen</p>
        <h2>{title}</h2>
      </div>
      <div className="offer-review-stack">
        {reviews.map((review) => (
          <article className="offer-review-card" key={review.name}>
            <div>
              <span>{review.initial}</span>
              <div>
                <h3>{review.name}</h3>
                <p>{review.meta}</p>
              </div>
            </div>
            <div className="offer-stars" aria-label="5 von 5 Sternen">★★★★★</div>
            <p>{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ComfortSection() {
  return (
    <section className="offer-section offer-comfort" data-offer-comfort>
      <div>
        <p className="offer-kicker">Nahezu schmerzfrei*</p>
        <h2>Soprano ICE Platinum mit kontinuierlicher Kühlung.</h2>
        <p>
          Eines der modernsten Geräte für dauerhafte Haarentfernung: ein Premium-Diodenlaser mit drei Wellenlängen und
          durchgehender Kühlung des Handstücks. Der Hersteller beschreibt die Technologie als virtually painless. Wir
          sagen bewusst: Das persönliche Empfinden kann variieren, die Kühlung macht die Behandlung aber deutlich
          angenehmer.
        </p>
        <ul>
          <li>3 Wellenlängen in einem Applikator</li>
          <li>SHR In-Motion Technik mit kontinuierlicher Kühlung</li>
          <li>Für unterschiedliche Haut- und Haartypen geeignet</li>
        </ul>
      </div>
      <figure>
        <Image
          src="/media/soprano-ice-platinum.png"
          alt="Soprano ICE Platinum Lasergerät"
          width={676}
          height={1017}
          loading="eager"
          sizes="(max-width: 820px) 82vw, 34vw"
        />
      </figure>
    </section>
  );
}

export function FinalCta({
  heading,
  text,
  whatsappHref = waLinks.appointment,
}: {
  heading: string;
  text: string;
  whatsappHref?: string;
}) {
  return (
    <section className="offer-final" data-offer-final>
      <p className="offer-kicker">S&O Beauty Salon · Q1 Mannheim</p>
      <h2>{heading}</h2>
      <p>{text}</p>
      <div className="offer-actions">
        <a
          className="offer-button offer-button-primary"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          data-offer-whatsapp
        >
          <WhatsAppIcon />
          WhatsApp öffnen
        </a>
        <a className="offer-button offer-button-secondary" href={phoneHref} data-offer-call>
          <Phone size={17} />
          {phoneDisplay}
        </a>
      </div>
      <dl className="offer-final-facts">
        <div>
          <dt>Adresse</dt>
          <dd>Q1, 7 · 68161 Mannheim</dd>
        </div>
        <div>
          <dt>Öffnungszeiten</dt>
          <dd>{openingHours}</dd>
        </div>
      </dl>
      <a className="offer-map-link" href={mapsUrl} target="_blank" rel="noreferrer">
        <MapPin size={16} />
        Route nach Q1, 7 Mannheim
        <ArrowUpRight />
      </a>
      <nav aria-label="Rechtliches">
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </nav>
    </section>
  );
}

export function StickyCta({
  label = "Lasertermin per WhatsApp",
  whatsappHref = waLinks.appointment,
}: {
  label?: string;
  whatsappHref?: string;
}) {
  return (
    <div className="offer-sticky-cta" data-offer-sticky-cta>
      <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label={label} data-offer-whatsapp>
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
      <a href={phoneHref} aria-label={`S&O Beauty Salon unter ${phoneDisplay} anrufen`} data-offer-call>
        <Phone size={18} />
        <span>Anrufen</span>
      </a>
    </div>
  );
}

export function OfferHeader() {
  return (
    <header className="offer-top" aria-label="S&O Beauty Salon">
      <Link className="offer-logo" href="/" aria-label="S&O Beauty Salon Startseite">
        <span className="so-mark" role="img" aria-label="S&O" />
        <small>Beauty Salon</small>
      </Link>
    </header>
  );
}
