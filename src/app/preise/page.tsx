import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../components/ArrowUpRight";
import { MobileBookingAction } from "../components/MobileBookingAction";
import { Reveal } from "../components/Reveal";
import { SoFooter } from "../components/SoFooter";
import { SoHeader } from "../components/SoHeader";
import { fullPriceSections } from "../pricing";
import { whatsappUrl } from "../treatments";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Aktuelle Preisliste für Laser-Haarentfernung, Gesichtsbehandlungen, Pakete und Aktionen bei S&O Beauty Salon Mannheim.",
  alternates: { canonical: "/preise" },
};

export default function PricesPage() {
  return (
    <>
      <Reveal />
      <SoHeader whatsappUrl={whatsappUrl} />
      <main className="price-page">
        <section className="price-hero rose-shell">
          <p>Preisliste · S&amp;O Beauty Salon Mannheim</p>
          <h1>Dienstleistungen &amp; Preise.</h1>
          <div>
            <p>
              Hier finden Sie die vollständige Übersicht der aktuellen Preise.
              Die passende Behandlung, mögliche Kombinationen und Termine stimmen wir
              persönlich mit Ihnen ab.
            </p>
            <Link href="/#kontakt">
              Anfrage stellen <ArrowUpRight />
            </Link>
          </div>
        </section>

        <section className="price-list rose-shell" aria-label="Vollständige Preisliste">
          {fullPriceSections.map((section) => (
            <article className="price-table-card" id={section.slug} key={section.slug}>
              <div className="price-table-head">
                <h2>{section.title}</h2>
                <span>{section.columns[1]}</span>
              </div>
              <dl>
                {section.items.map(([name, price]) => (
                  <div key={`${section.slug}-${name}`}>
                    <dt>{name}</dt>
                    <dd>{price}</dd>
                  </div>
                ))}
              </dl>
              {section.note ? <p>{section.note}</p> : null}
            </article>
          ))}
        </section>

        <section className="price-page-close">
          <div className="rose-shell">
            <p>Unsicher, was passt?</p>
            <h2>Schreiben Sie uns direkt.</h2>
            <Link className="rose-button rose-button-paper" href="/#kontakt">
              Anfrageformular öffnen <ArrowUpRight />
            </Link>
          </div>
        </section>
      </main>
      <SoFooter />
      <MobileBookingAction whatsappUrl={whatsappUrl} />
    </>
  );
}
