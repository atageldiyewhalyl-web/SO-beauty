import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { ArrowUpRight } from "../components/ArrowUpRight";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { laserOffer, laserStarterZones, popularCombinations } from "../pricing";
import {
  FinalCta,
  OfferHeader,
  ReviewsSection,
  StickyCta,
  openingHours,
  phoneDisplay,
  phoneHref,
  waLinks,
} from "./offer-shared";

const steps = [
  {
    step: "1",
    title: "Kurz schreiben",
    text: "Eine Nachricht auf WhatsApp genügt.",
    image: "/media/laser/step-1-schreiben.jpg",
    alt: "Frau schreibt auf dem Sofa eine Nachricht auf dem Smartphone",
  },
  {
    step: "2",
    title: "Kostenlos testen",
    text: "Eine kleine Zone, etwa 10 Minuten.",
    image: "/media/laser/step-2-testen.jpg",
    alt: "Laser-Handstück wird bei einer Behandlung über den Unterarm geführt",
  },
  {
    step: "3",
    title: "Erst dann entscheiden",
    text: `Gefällt es Ihnen: ${laserOffer.price} €. Wenn nicht, gehen Sie ohne Kosten.`,
    image: "/media/laser/step-3-entscheiden.jpg",
    alt: "Glatte Beine auf hellem Leinen vor rosafarbener Wand",
  },
];

/** Short and centred: three facts, the device, nothing to read twice. */
function LaserDeviceSection() {
  return (
    <section className="offer-section offer-comfort offer-device" data-offer-comfort>
      <div>
        <p className="offer-kicker">Nahezu schmerzfrei*</p>
        <h2>Soprano ICE Platinum</h2>
        <p>Premium-Diodenlaser, der während der Behandlung kühlt.</p>
        <ul>
          <li>3 Wellenlängen in einem Applikator</li>
          <li>Kühlung während der Behandlung</li>
          <li>Für unterschiedliche Haut- und Haartypen</li>
        </ul>
      </div>
      <figure>
        <Image
          src="/media/soprano-ice-platinum.png"
          alt="Soprano ICE Platinum Lasergerät"
          width={676}
          height={1017}
          loading="lazy"
          sizes="(max-width: 820px) 62vw, 30vw"
        />
      </figure>
    </section>
  );
}

export function LaserOfferPage() {
  return (
    <main className="offer-page" data-offer-page="laser">
      <OfferHeader />

      <section className="so-hero offer-home-hero" data-offer-hero>
        <div className="so-hero-frame">
          <div className="so-hero-media" aria-hidden="true">
            <Image src="/media/beratung-legs.jpg" alt="" fill preload fetchPriority="high" sizes="100vw" />
          </div>
          <div className="so-hero-scrim" aria-hidden="true" />

          <div className="so-hero-inner">
            <div className="so-hero-copy">
              <p className="offer-kicker">Aktion · Laser-Haarentfernung Mannheim</p>
              <h1 className="so-h1">Ganzkörper-Laser in Mannheim</h1>
              <p className="offer-price-line">
                <strong>{laserOffer.price} €</strong>
                <s aria-label={`bisher ${laserOffer.wasPrice} Euro`}>statt {laserOffer.wasPrice} €</s>
                <span>{laserOffer.name} · alle {laserOffer.zones.length} Zonen</span>
              </p>
              <p className="offer-hero-claim">Vorher kostenlos testen — erst danach entscheiden.</p>
              <p className="so-hero-lead">
                Testen Sie den Soprano ICE Platinum unverbindlich an einer kleinen Zone. Erst wenn es sich für Sie gut
                anfühlt, buchen Sie das Paket. Mitten in Mannheim, Q1.
              </p>
              <div className="so-hero-actions">
                <a
                  className="so-btn so-btn-rose"
                  href={waLinks.freeTest}
                  target="_blank"
                  rel="noreferrer"
                  data-offer-whatsapp
                >
                  Kostenlos testen — WhatsApp
                  <ArrowUpRight />
                </a>
                <a className="so-btn so-btn-quiet offer-home-call" href={phoneHref} data-offer-call>
                  <Phone size={17} />
                  Anrufen
                </a>
              </div>
              <dl className="offer-home-facts">
                <div>
                  <dt>Adresse</dt>
                  <dd>Q1, 7 Mannheim</dd>
                </div>
                <div>
                  <dt>Öffnungszeiten</dt>
                  <dd>{openingHours}</dd>
                </div>
                <div>
                  <dt>Kontakt</dt>
                  <dd>{phoneDisplay}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-section offer-steps" data-offer-steps>
        <div className="offer-section-head">
          <p className="offer-kicker">Ohne Risiko</p>
          <h2>Erst ausprobieren, dann buchen.</h2>
          <p>Nichts im Voraus bezahlen, keine Verpflichtung.</p>
        </div>
        <ol className="offer-step-list">
          {steps.map((item) => (
            <li key={item.step}>
              <div className="offer-step-media">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 100vw, 30vw" />
                <span aria-hidden="true">{item.step}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
        <a
          className="offer-button offer-button-primary"
          href={waLinks.freeTest}
          target="_blank"
          rel="noreferrer"
          data-offer-whatsapp
        >
          <WhatsAppIcon />
          Kostenlosen Test vereinbaren
        </a>
      </section>

      <LaserDeviceSection />

      <section className="offer-section offer-package" data-offer-package>
        <div className="offer-section-head">
          <p className="offer-kicker">Das Paket</p>
          <h2>Was im {laserOffer.name} enthalten ist.</h2>
          <p>Alle Zonen in einer Behandlung — ohne Zusatzkosten pro Bereich.</p>
        </div>
        <div className="offer-package-card">
          <ul>
            {laserOffer.zones.map((zone) => (
              <li key={zone}>{zone}</li>
            ))}
          </ul>
          <div className="offer-package-price">
            <p className="offer-price-line">
              <strong>{laserOffer.price} €</strong>
              <s aria-label={`bisher ${laserOffer.wasPrice} Euro`}>statt {laserOffer.wasPrice} €</s>
            </p>
            <p>pro Behandlung, Ganzkörper Komplett</p>
            <a
              className="offer-button offer-button-primary"
              href={waLinks.package}
              target="_blank"
              rel="noreferrer"
              data-offer-whatsapp
            >
              <WhatsAppIcon />
              Paket anfragen
            </a>
            <a className="offer-button offer-button-secondary" href={phoneHref} data-offer-call>
              <Phone size={17} />
              Anrufen
            </a>
          </div>
        </div>
      </section>

      <section className="offer-section offer-prices" data-offer-packages>
        <div className="offer-section-head">
          <p className="offer-kicker">Preise</p>
          <h2>Lieber nur einzelne Zonen?</h2>
          <p>Die beliebtesten Kombinationen und Einstiegszonen auf einen Blick.</p>
        </div>
        <div className="offer-price-stack">
          <article className="offer-price-card">
            <div className="offer-price-head">
              <h3>Beliebte Kombinationen</h3>
              <span>Preis</span>
            </div>
            <dl>
              {popularCombinations.map(([name, price]) => (
                <div key={name}>
                  <dt>{name}</dt>
                  <dd>{price}</dd>
                </div>
              ))}
            </dl>
          </article>
          <article className="offer-price-card">
            <div className="offer-price-head">
              <h3>Einzelne Zonen</h3>
              <span>Preis</span>
            </div>
            <dl>
              {laserStarterZones.map(([name, price]) => (
                <div key={name}>
                  <dt>{name}</dt>
                  <dd>{price}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
        <p className="offer-price-note">
          Alle weiteren Zonen und 6er-Pakete finden Sie in der <Link href="/preise">Preisliste</Link>. Unsicher,
          was zu Ihnen passt?{" "}
          <a href={waLinks.question} target="_blank" rel="noreferrer" data-offer-whatsapp>
            Fragen Sie kurz per WhatsApp
          </a>
          .
        </p>
      </section>

      <ReviewsSection />

      <FinalCta
        heading="Termin für den kostenlosen Test?"
        text="Schreiben Sie uns kurz, welche Zone Sie testen möchten. Wir melden uns persönlich zur Terminabstimmung."
        whatsappHref={waLinks.freeTest}
      />

      <p className="offer-footnote">
        * Der Hersteller beschreibt die Technologie als „virtually painless“. Das persönliche Empfinden kann
        unterschiedlich sein.
      </p>

      <StickyCta label="Kostenlosen Lasertest per WhatsApp anfragen" whatsappHref={waLinks.freeTest} />
    </main>
  );
}
