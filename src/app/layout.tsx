import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { BeautyCursor } from "./components/BeautyCursor";
import { TranslateScripts } from "./components/LanguageToggle";
import { ScrollState } from "./components/ScrollState";
import { SiteLoader } from "./components/SiteLoader";
import "./globals.css";
import "./landing.css";
import "./service.css";
import "./ratgeber/ratgeber.css";
import { siteUrl } from "./site";

// Giveland (the headline face) is declared by hand in landing.css with a
// unicode-range: its a-umlaut/o-umlaut/u-umlaut glyphs are undotted and it has
// no sharp-s or dashes, so those codepoints fall through to Pregio instead.
// Sub-headings, chips, numerals, and Giveland's glyph fallback.
const pregio = localFont({
  src: [
    { path: "./fonts/GCPregio-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/GCPregio-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/GCPregio-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/GCPregio-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-so-heading-src",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-so-sans",
  display: "swap",
});

const gtmId = "GTM-KZ9QXMK2";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kosmetikstudio Mannheim | S&O Beauty Salon",
    template: "%s | S&O Beauty Salon Mannheim",
  },
  description:
    "S&O Beauty Salon in den Mannheimer Quadraten: Laser-Haarentfernung, AquaFacial, Microneedling, Wimpernlifting und individuelle Hautpflege. Termin bequem per WhatsApp anfragen.",
  keywords: [
    "Kosmetikstudio Mannheim",
    "Beauty Salon Mannheim",
    "Laser Haarentfernung Mannheim",
    "Aquafacial Mannheim",
    "Microneedling Mannheim",
    "Wimpernlifting Mannheim",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "S&O Beauty Salon",
    title: "S&O Beauty Salon | Kosmetikstudio Mannheim",
    description:
      "Individuelle Beauty-Behandlungen und moderne Laser-Technologie im Herzen von Mannheim.",
  },
  twitter: {
    card: "summary_large_image",
    title: "S&O Beauty Salon | Mannheim",
    description:
      "Laser-Haarentfernung, AquaFacial, Microneedling, Wimpernlifting und Hautpflege in Mannheim.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${pregio.variable}`}>
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
      </Script>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
          <style>{`[data-rev]{opacity:1!important;transform:none!important}.so-loader{display:none!important}`}</style>
        </noscript>
        {children}
        <TranslateScripts />
        <ScrollState />
        <BeautyCursor />
        <SiteLoader />
      </body>
    </html>
  );
}
