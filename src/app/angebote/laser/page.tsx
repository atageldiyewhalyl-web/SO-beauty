import type { Metadata } from "next";
import Script from "next/script";
import { LaserOfferPage } from "../LaserOfferPage";
import { laserOffer } from "../../pricing";
import { siteUrl } from "../../site";

const title = `Ganzkörper-Laser ${laserOffer.price} € statt ${laserOffer.wasPrice} € — kostenlos testen`;
const description = `Dauerhafte Haarentfernung in Mannheim: Ganzkörper Komplett für ${laserOffer.price} € statt ${laserOffer.wasPrice} €. Soprano ICE Platinum vorher kostenlos testen, Termin per WhatsApp oder Anruf.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/angebote/laser" },
  openGraph: {
    type: "website",
    title: `${title} | S&O Beauty Salon Mannheim`,
    description,
    url: "/angebote/laser",
  },
};

// Reflects the real campaign offer. No priceValidUntil until an end date is fixed.
const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: `${laserOffer.name} — Laser-Haarentfernung`,
  description: `Dauerhafte Haarentfernung Ganzkörper Komplett bei S&O Beauty Salon Mannheim. Kostenloser Test an einer kleinen Zone vor der Buchung.`,
  price: laserOffer.price,
  priceCurrency: "EUR",
  availability: "https://schema.org/InStock",
  url: `${siteUrl}/angebote/laser`,
  itemOffered: {
    "@type": "Service",
    name: "Laser-Haarentfernung",
    provider: { "@type": "BeautySalon", name: "S&O Beauty Salon", url: siteUrl },
  },
};

export default function LaserOfferRoute() {
  return (
    <>
      <Script id="laser-offer-schema" type="application/ld+json">
        {JSON.stringify(offerSchema)}
      </Script>
      <LaserOfferPage />
    </>
  );
}
