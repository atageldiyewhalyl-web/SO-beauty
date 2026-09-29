import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link href="/">← Zurück zur Startseite</Link>
        <p className="eyebrow">Rechtliche Angaben</p>
        <h1>Impressum</h1>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          S&O Beauty<br />
          Huriye Keten<br />
          Q1, 7<br />
          68161 Mannheim<br />
          Deutschland
        </p>
        <h2>Rechtsform</h2>
        <p>Einzelunternehmen</p>
        <h2>Kontakt</h2>
        <p>
          Telefon: +49 15565 855752<br />
          E-Mail: info@beautyso.de
        </p>
      </div>
    </main>
  );
}
