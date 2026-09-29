import type { Metadata } from "next";
import { OfferLandingPage } from "../OfferLandingPage";

export const metadata: Metadata = {
  title: "Beauty-Angebote Mannheim",
  description:
    "S&O Beauty Salon Mannheim: Laser, AquaFacial, Microneedling, Wimpernlifting und Hautpflege mit Termin per WhatsApp.",
  alternates: { canonical: "/angebote/beauty" },
  openGraph: {
    type: "website",
    title: "Beauty-Angebote Mannheim | S&O Beauty Salon",
    description:
      "Laser, Hautpflege und Wimpernlifting in Mannheim: persönliche Beratung, echte Bewertungen und WhatsApp-Termin.",
    url: "/angebote/beauty",
  },
};

export default function BeautyOfferPage() {
  return <OfferLandingPage variant="beauty" />;
}
