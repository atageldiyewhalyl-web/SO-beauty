import Image from "next/image";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { priceCategories } from "../pricing";
import { whatsappUrl } from "../treatments";
import {
  ComfortSection,
  FinalCta,
  OfferHeader,
  ReviewsSection,
  StickyCta,
  phoneDisplay,
  phoneHref,
} from "./offer-shared";

const beautyServiceCards = [

  {
    title: "Laser-Haarentfernung",
    text: "Moderne Soprano ICE Platinum Technologie für abgestimmte Zonen und Pakete.",
    image: "/media/services/tx-laser-v2.jpg",
    badge: "ab 20 €",
  },
  {
    title: "AquaFacial & LED",
    text: "Reinigung, Feuchtigkeit und Glow für ein frisch gepflegtes Hautgefühl.",
    image: "/media/services/tx-aquafacial-v2.jpg",
    badge: "ab 29 €",
  },
  {
    title: "Microneedling",
    text: "Kosmetische Behandlung für Hautstruktur mit persönlichem Hautcheck.",
    image: "/media/services/tx-microneedling-v2.jpg",
    badge: "ab 99 €",
  },
  {
    title: "Wimpernlifting",
    text: "Natürlich geschwungene Wimpern ohne Extensions, abgestimmt auf Ihren Look.",
    image: "/media/services/tx-wimpern.jpg",
    badge: "auf Anfrage",
  },
];

export function OfferLandingPage({ variant = "beauty" }: { variant?: "beauty" }) {
  void variant;
  return (
    <main className="offer-page" data-offer-page="beauty">
      <OfferHeader />

      <section className="offer-hero" data-offer-hero>
        <div className="offer-hero-media">
          <Image src="/media/planung-portrait.jpg" alt="Beratung im S&O Beauty Salon Mannheim" fill priority sizes="100vw" />
        </div>
        <div className="offer-hero-copy">
          <p className="offer-kicker">Meta Angebot · Beauty Salon</p>
          <h1>Laser, Hautpflege & Wimpernlifting in Mannheim</h1>
          <p>
            Ein weicher, gepflegter Beauty-Termin in Mannheim: Laser, AquaFacial, Microneedling, Wimpernlifting und
            Hautpflege mit persönlicher Empfehlung.
          </p>
          <div className="offer-actions">
            <a
              className="offer-button offer-button-primary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              data-offer-whatsapp
            >
              <WhatsAppIcon />
              Beratung per WhatsApp
            </a>
            <a className="offer-button offer-button-secondary" href={phoneHref} data-offer-call>
              <Phone size={17} />
              Anrufen
            </a>
          </div>
          <dl className="offer-hero-facts">
            <div><dt>Adresse</dt><dd>Q1, 7 Mannheim</dd></div>
            <div><dt>Kontakt</dt><dd>{phoneDisplay}</dd></div>
          </dl>
        </div>
      </section>

      <BeautyOfferContent />
      <ReviewsSection />
      <ComfortSection />
      <FinalCta
        heading="Bereit für Ihren Beauty-Termin?"
        text="Schreiben Sie kurz, welche Behandlung Sie interessiert. Wir melden uns persönlich zur Terminabstimmung."
        whatsappHref={whatsappUrl}
      />
      <StickyCta label="Beratung per WhatsApp" whatsappHref={whatsappUrl} />
    </main>
  );
}

function BeautyOfferContent() {
  return (
    <>
      <section className="offer-section offer-services" data-offer-services>
        <div className="offer-section-head">
          <p className="offer-kicker">Behandlungen</p>
          <h2>Wählen Sie, was zu Ihrem Alltag passt.</h2>
          <p>Laser, Glow, Hautstruktur oder Wimpern: Wir schauen gemeinsam, welche Behandlung sinnvoll ist und wie der Termin ruhig abläuft.</p>
        </div>
        <div className="offer-service-grid">
          {beautyServiceCards.map((service) => (
            <article className="offer-service-card" key={service.title}>
              <div>
                <Image src={service.image} alt={`${service.title} bei S&O Beauty Salon Mannheim`} fill sizes="(max-width: 820px) 50vw, 24vw" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span>{service.badge}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="offer-section offer-menu" data-offer-beauty-prices>
        <div className="offer-section-head">
          <p className="offer-kicker">Preise</p>
          <h2>Beliebte Einstiege und Pakete.</h2>
        </div>
        <div className="offer-price-stack">
          {priceCategories.map((category) => (
            <article className="offer-mini-price" key={category.slug}>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
              <strong>{category.startingPrice}</strong>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

