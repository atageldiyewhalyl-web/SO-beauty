import Link from "next/link";
import { ArrowUpRight } from "./ArrowUpRight";
import { LanguageToggle } from "./LanguageToggle";
import { treatments, whatsappUrl } from "../treatments";

export function SoFooter() {
  return (
    <footer className="so-footer" data-booking-footer>

      <div className="so-footer-grid">
        <div className="so-footer-brand">
          <div className="so-footer-mark">
            <span className="so-mark" role="img" aria-label="S&O" />
            <small>Beauty Salon</small>
          </div>
          <p>
            Laser &amp; Hautpflege in Mannheim. Wir nehmen uns Zeit für eine persönliche Beratung und
            wählen gemeinsam die Behandlung, die zu Ihnen passt.
          </p>
          <a className="so-btn so-btn-rose so-btn-sm" data-btn="1" href={whatsappUrl} target="_blank" rel="noreferrer">
            Termin über WhatsApp
            <ArrowUpRight size={12} />
          </a>
        </div>

        <div className="so-footer-col">
          <h4>Behandlungen</h4>
          <nav aria-label="Behandlungen im Footer">
            {treatments.map((treatment) => (
              <Link href={treatment.href} key={treatment.slug}>{treatment.name}</Link>
            ))}
          </nav>
        </div>

        <div className="so-footer-col">
          <h4>Entdecken</h4>
          <div>
            <Link href="/preise">Preise</Link>
            <Link href="/#technologie">Technologie</Link>
            <Link href="/#ablauf">Ablauf</Link>
            <Link href="/ratgeber">Ratgeber</Link>
            <Link href="/#kontakt">Kontakt</Link>
          </div>
        </div>

        <div className="so-footer-col">
          <h4>Rechtliches</h4>
          <div>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
          <address>
            S&amp;O Beauty Salon<br />
            Q1, 7, 68161 Mannheim<br />
            <a href="tel:+4915565855752">+49 15565 855752</a><br />
            <a href="mailto:info@beautyso.de">info@beautyso.de</a>
          </address>
        </div>
      </div>

      <div className="so-footer-bottom">
        <span>© {new Date().getFullYear()} S&amp;O Beauty Salon, Mannheim. Alle Rechte vorbehalten.</span>
        {/* nüll.com — punycode host so the umlaut domain resolves everywhere */}
        <a
          className="so-footer-credit"
          href="https://xn--nll-hoa.com"
          target="_blank"
          rel="noreferrer"
        >
          Site made by <strong>nüll</strong>
        </a>
        <LanguageToggle />
      </div>
    </footer>
  );
}
