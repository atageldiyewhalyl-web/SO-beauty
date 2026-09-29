import Image from "next/image";
import Link from "next/link";
import { AnfrageForm } from "./components/AnfrageForm";
import { ArrowUpRight } from "./components/ArrowUpRight";
import { MobileBookingAction } from "./components/MobileBookingAction";
import { Reveal } from "./components/Reveal";
import { SoFooter } from "./components/SoFooter";
import { SoHeader } from "./components/SoHeader";
import { TreatmentCard } from "./components/TreatmentCard";
import { mapsUrl, salonGeo, treatments, whatsappUrl } from "./treatments";
import { siteUrl } from "./site";

const promises = [
  {
    image: "/media/planung-portrait.jpg",
    title: "Persönliche Beratung",
    text: "Ziel, Haut und Wünsche werden zuerst besprochen, erst dann eine Behandlung empfohlen.",
  },
  {
    image: "/media/nachpflege-portrait.png",
    fit: "cutout" as const,
    title: "Qualifizierte Behandlung",
    text: "NiSV-Fachkunde und moderne Soprano-Technologie für einen ruhigen, professionellen Ablauf.",
  },
  {
    image: "/media/beratung-legs.jpg",
    title: "Individuelle Planung",
    text: "Abgestimmt auf Hauttyp, Haarstruktur und Behandlungsbereich. Kein Standardprogramm.",
  },
  {
    image: "/media/nachpflege-profile.jpg",
    align: "top" as const,
    title: "Ruhige Nachpflege",
    text: "Klare Hinweise zu Pflege, Sonnenschutz und dem sinnvollen Abstand bis zum nächsten Termin.",
  },
];

const journey = [
  {
    step: "Schritt 01",
    cta: { label: "Jetzt schreiben", href: "whatsapp" as const },
    title: "Kurze WhatsApp-Anfrage",
    text: "Schreiben Sie, welcher Bereich oder welche Behandlung Sie interessiert, formlos und unverbindlich.",
  },
  {
    step: "Schritt 02",
    cta: { label: "Behandlungen ansehen", href: "#behandlungen" },
    title: "Beratung & Hautcheck",
    text: "Hauttyp, Ziel und mögliche Hinweise werden persönlich besprochen, vor der ersten Anwendung.",
  },
  {
    step: "Schritt 03",
    cta: { label: "Zum Ratgeber", href: "/ratgeber" },
    title: "Behandlung & Plan",
    text: "Die Behandlung wird ruhig durchgeführt; danach stimmen wir Nachpflege und den weiteren Plan ab.",
  },
];

const reviews = [
  {
    name: "Açelya Akdeniz",
    meta: "vor 3 Wochen",
    initial: "A",
    text: "Ich bin mit der Laser-Haarentfernung sehr zufrieden. Sie ist super nett, freundlich und man fühlt sich sofort wohl. Die Geräte sind sehr modern und die Behandlung wird professionell durchgeführt. Ich kann sie absolut weiterempfehlen!",
  },
  {
    name: "Berry",
    meta: "vor 1 Woche",
    initial: "B",
    text: "Hab einige Studios jetzt ausprobiert und sie ist wirklich die beste!! Sie macht so gründlich und lässt keine Ecke aus. Das Gerät ist top und man sieht sehr sehr schnell Ergebnisse. Preise sind auch sehr fair. Hab sie einigen Freundinnen empfohlen und alle sind begeistert.",
  },
  {
    name: "EU IAFI",
    meta: "vor 3 Wochen",
    initial: "E",
    text: "Ich war wirklich sehr zufrieden. Der Service war super und alle waren total freundlich und aufmerksam. Auch das Preis-Leistungs-Verhältnis passt auf jeden Fall. Man fühlt sich direkt wohl und gut aufgehoben. Ich komme gerne wieder.",
  },
];

const salonJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${siteUrl}/#salon`,
  name: "S&O Beauty Salon",
  url: siteUrl,
  telephone: "+49 15565 855752",
  email: "info@beautyso.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Q1, 7",
    postalCode: "68161",
    addressLocality: "Mannheim",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: salonGeo.latitude,
    longitude: salonGeo.longitude,
  },
  hasMap: mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  areaServed: ["Mannheim", "Ludwigshafen am Rhein", "Rhein-Neckar"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Beauty-Behandlungen",
    itemListElement: treatments.map((treatment) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: treatment.name,
        url: `${siteUrl}${treatment.href}`,
      },
    })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(salonJsonLd).replace(/</g, "\\u003c") }}
      />

      <Reveal />
      <SoHeader whatsappUrl={whatsappUrl} />

      <main>
        {/* ---------------------------------------------------------- hero */}
        <section className="so-hero" id="start" data-booking-hero>
          <div className="so-hero-frame">
          <div className="so-hero-media" aria-hidden="true">
            <Image
              src="/media/hero-banner.jpg"
              alt=""
              fill
              preload
              fetchPriority="high"
              sizes="100vw"
            />
          </div>
          <div className="so-hero-scrim" aria-hidden="true" />

          <div className="so-hero-inner">
            <div className="so-hero-copy">
              <h1 className="so-h1" data-rev="1">
                Laser &amp; Hautpflege in Mannheim.
              </h1>
              <p className="so-hero-tagline" data-rev="1" style={{ transitionDelay: "0.08s" }}>
                Glatte Haut. Gepflegtes Hautbild. Persönlich für Sie.
              </p>
              <p className="so-hero-lead" data-rev="1" style={{ transitionDelay: "0.12s" }}>
                Wir nehmen uns Zeit für eine persönliche Beratung und wählen gemeinsam die Behandlung,
                die zu Ihnen passt.
              </p>
              <div className="so-hero-actions" data-rev="1" style={{ transitionDelay: "0.2s" }}>
                <a className="so-btn so-btn-rose" data-btn="1" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Termin über WhatsApp
                  <ArrowUpRight />
                </a>
                <Link className="so-btn so-btn-quiet" href="#behandlungen">Behandlungen ansehen</Link>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* --------------------------------------------------- value props */}
        <section className="so-section so-value" id="beratung">
          <div className="so-shell">
            <div className="so-value-head">
              <p className="so-eyebrow" data-rev="1">Persönliche Beratung</p>
              <h2 className="so-h2" data-rev="1" style={{ transitionDelay: "0.1s" }}>
                Ein Termin, der mit Zuhören beginnt.
              </h2>
              <p className="so-lead" data-rev="1" style={{ transitionDelay: "0.2s" }}>
                Persönliche Beratung bedeutet für uns: Wir schauen zuerst auf Ihr Ziel, Ihre Haut und
                das, was sich für Sie richtig anfühlt. Danach empfehlen wir den passenden nächsten Schritt.
              </p>
            </div>

            <div className="so-grid">
              {promises.map((promise, index) => (
                <div
                  className="so-value-card"
                  data-rev="1"
                  data-lift="1"
                  data-media={"fit" in promise ? promise.fit : promise.image ? "photo" : undefined}
                  data-align={"align" in promise ? promise.align : undefined}
                  key={promise.title}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  {promise.image && "fit" in promise ? (
                    <Image
                      className="so-value-media"
                      src={promise.image}
                      alt=""
                      width={1100}
                      height={925}
                      sizes="(max-width: 900px) 50vw, 30vw"
                    />
                  ) : null}
                  {promise.image && !("fit" in promise) ? (
                    <>
                      <Image
                        className="so-value-media"
                        src={promise.image}
                        alt=""
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                      />
                      <span className="so-value-scrim" aria-hidden="true" />
                    </>
                  ) : null}
                  <div>
                    <h3>{promise.title}</h3>
                    <p>{promise.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- treatments */}
        <section className="so-section so-treatments" id="behandlungen" data-booking-suppress>
          <div className="so-shell">
            <div className="so-section-head">
              <div>
                <p className="so-eyebrow" data-rev="1">Behandlungen</p>
                <h2 className="so-h2" data-rev="1" style={{ transitionDelay: "0.1s" }}>
                  Wählen Sie, was Sie interessiert.
                </h2>
                <p className="so-lead" data-rev="1" style={{ transitionDelay: "0.2s" }}>
                  Einblicke in ausgewählte Anwendungen. Alle Details finden Sie auf der jeweiligen
                  Behandlungsseite.
                </p>
              </div>
              <a
                className="so-btn so-btn-rose so-btn-md"
                data-btn="1"
                data-rev="1"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Termin anfragen
                <ArrowUpRight size={12} />
              </a>
            </div>

            <div className="so-treatment-rail">
              <div className="so-cards">
                {treatments.map((treatment) => (
                  <TreatmentCard
                    key={treatment.slug}
                    name={treatment.name}
                    href={treatment.href}
                    description={treatment.shortDescription}
                    poster={treatment.cardImage}
                    tint={treatment.cardTint}
                    label={treatment.video.label}
                    objectPosition={treatment.video.objectPosition}
                  />
                ))}
              </div>

              <div className="so-card-invite" data-rev="1">
                <h3>Noch nicht sicher, was passt?</h3>
                <p>
                  Schreiben Sie uns kurz, was Sie sich wünschen. Wir klären gemeinsam, welche Behandlung
                  sinnvoll ist und wie der Termin abläuft.
                </p>
                <a
                  className="so-btn so-btn-paper so-btn-sm"
                  data-btn="1"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Kurz schreiben
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- reviews */}
        <section className="so-section so-reviews" id="bewertungen">
          <div className="so-shell">
            <div className="so-section-head">
              <div>
                <p className="so-eyebrow" data-rev="1">Google Bewertungen</p>
                <h2 className="so-h2" data-rev="1" style={{ transitionDelay: "0.1s" }}>
                  Stimmen unserer Kundinnen &amp; Kunden.
                </h2>
                <p className="so-lead" data-rev="1" style={{ transitionDelay: "0.2s" }}>
                  Erste Rückmeldungen aus Google: persönlich, ehrlich und nah an dem,
                  was Kundinnen und Kunden im Studio erleben.
                </p>
              </div>
            </div>

            <div className="so-review-grid">
              {reviews.map((review, index) => (
                <article
                  className="so-review-card"
                  data-rev="1"
                  key={review.name}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="so-review-top">
                    <span className="so-review-avatar" aria-hidden="true">{review.initial}</span>
                    <div>
                      <h3>{review.name}</h3>
                      <p>{review.meta}</p>
                    </div>
                  </div>
                  <div className="so-review-stars" aria-label="5 von 5 Sternen">
                    <span aria-hidden="true">★★★★★</span>
                    <small>Google Review</small>
                  </div>
                  <p className="so-review-text">{review.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- technology */}
        <section className="so-section so-tech" id="technologie">
          <div className="so-shell so-split">
            <figure className="so-tech-stage" data-rev="1" data-card="1" style={{ margin: 0 }}>
              <Image
                src="/media/soprano-ice-platinum.png"
                alt="Soprano ICE Platinum Lasersystem"
                width={676}
                height={1017}
                data-zoom="1"
                sizes="(max-width: 820px) 84vw, 44vw"
              />
            </figure>

            <div>
              <p className="so-eyebrow" data-rev="1">Soprano ICE Platinum</p>
              <h2 className="so-h2" data-rev="1" style={{ transitionDelay: "0.1s" }}>
                Kontrollierte Wärme. Kontinuierliche Kühlung.
              </h2>
              <p className="so-lead" data-rev="1" style={{ transitionDelay: "0.2s" }}>
                Der Applikator wird gleichmäßig über die Haut geführt. Die integrierte Kühlung unterstützt
                ein möglichst angenehmes Behandlungsgefühl. Das persönliche Empfinden kann variieren.
              </p>
              <div className="so-tech-features" data-rev="1" style={{ transitionDelay: "0.28s" }}>
                <span>3 Wellenlängen</span>
                <span>SHR In-Motion</span>
                <span>ICE Kühlung</span>
              </div>
              <div className="so-proof" data-rev="1" style={{ transitionDelay: "0.32s" }}>
                <strong>NiSV</strong>
                <span>
                  Fachkundig durchgeführt und individuell auf Haut, Haarstruktur und
                  Behandlungsbereich eingestellt.
                </span>
              </div>
              <Link
                className="so-btn so-btn-rose"
                data-btn="1"
                data-rev="1"
                href="/behandlungen/laser-haarentfernung"
                style={{ transitionDelay: "0.36s" }}
              >
                Laser-Haarentfernung ansehen
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- steps */}
        <section className="so-section so-steps" id="ablauf" data-booking-suppress>
          <div className="so-shell">
            <div className="so-steps-head">
              <p className="so-eyebrow" data-rev="1">Ablauf</p>
              <h2 className="so-h2" data-rev="1" style={{ transitionDelay: "0.1s" }}>
                Von der Nachricht bis zur Nachpflege.
              </h2>
            </div>

            <div className="so-steps-grid">
              {journey.map((item, index) => (
                <div
                  className="so-step"
                  data-rev="1"
                  data-lift="1"
                  key={item.step}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <b>{item.step}</b>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.cta.href === "whatsapp" ? (
                    <a className="so-btn so-btn-rose so-btn-sm" href={whatsappUrl} target="_blank" rel="noreferrer">
                      {item.cta.label}
                    </a>
                  ) : (
                    <Link className="so-btn so-btn-rose so-btn-sm" href={item.cta.href}>
                      {item.cta.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------- contact */}
        <section className="so-section so-contact" id="kontakt" data-booking-suppress>

          <div className="so-shell so-split so-contact-inner">
            <div>
              <p className="so-eyebrow so-eyebrow-light" data-rev="1">Kontakt</p>
              <h2 className="so-h2" data-rev="1" style={{ transitionDelay: "0.1s" }}>
                Ihr Termin beginnt in Q1.
              </h2>
              <p className="so-contact-lead" data-rev="1" style={{ transitionDelay: "0.2s" }}>
                Senden Sie uns Ihre Anfrage mit Namen, Telefonnummer und Wunschbehandlung.
                Wir melden uns persönlich zur Terminabstimmung.
              </p>
              <dl className="so-contact-facts" data-rev="1" style={{ transitionDelay: "0.26s" }}>
                <div>
                  <dt>Adresse</dt>
                  <dd>Q1, 7, 68161 Mannheim</dd>
                </div>
                <div>
                  <dt>Öffnungszeiten</dt>
                  <dd>Mo–Sa · 09:00–20:00</dd>
                </div>
                <div>
                  <dt>Telefon &amp; WhatsApp</dt>
                  <dd>
                    <a href="tel:+4915565855752">+49 15565 855752</a>
                  </dd>
                </div>
              </dl>
              <div className="so-contact-actions" data-rev="1" style={{ transitionDelay: "0.2s" }}>
                <a className="so-btn so-btn-paper" data-btn="1" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Termin über WhatsApp
                  <ArrowUpRight />
                </a>
                <span>S&amp;O Beauty Salon · Q1 · Mannheim</span>
              </div>
            </div>

            <div className="so-contact-panel" data-rev="1" style={{ transitionDelay: "0.15s" }}>
              <div>
                <p className="so-panel-kicker">Anfrage</p>
                <h3>Was dürfen wir für Sie planen?</h3>
              </div>
              <AnfrageForm />
            </div>
          </div>

          <div className="so-shell">
            <div className="so-contact-map" data-rev="1" style={{ transitionDelay: "0.15s" }}>
              <iframe
                src={`https://www.google.com/maps?q=${salonGeo.latitude},${salonGeo.longitude}&z=17&hl=de&output=embed`}
                title="Google Maps Karte von S&O Beauty Salon, Q1, 7 in Mannheim"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <span className="so-map-place" aria-hidden="true">
                <strong>S&amp;O Beauty Salon</strong>
                <small>Q1, 7, 68161 Mannheim</small>
              </span>
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                Route in Google Maps
                <ArrowUpRight size={11} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SoFooter />
      <MobileBookingAction whatsappUrl={whatsappUrl} />
    </>
  );
}
