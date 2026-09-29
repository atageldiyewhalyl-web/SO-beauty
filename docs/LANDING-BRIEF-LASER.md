# Build brief — Laser landing page (`/angebote/laser`)

This brief records the approved requirements for the page. The open items at the
bottom are the only things still undecided.

## 1. What this page is for

Paid Meta traffic (mostly mobile, mostly women 20–45 in and around Mannheim) lands
here from a laser hair-removal ad. One job: **get them to open WhatsApp or call.**
Nothing else on the page matters. No form, no booking tool, no newsletter.

The page they land on today (`/angebote/laser`, live) is a well-built offer page
but it is not a conversion page: the offer is invisible, six price tables compete
for attention, and the reason to act now doesn't exist. Rebuild it around the offer.

## 2. The offer — say it exactly like this

- **Ganzkörper Komplett: 180 € statt 210 €.** This is the hero of the page.
  Komplett = Beine, Achseln, Arme, Intim, Bikini, Bauch, Rücken, Brust, Dekolleté.
- **Der Test ist kostenlos.** A free test patch on one small zone (about 10 minutes,
  by appointment) so they feel the device on their own skin. **Only if they like it
  do they commit to the 180 €.** This is the strongest thing on the page — it removes
  the risk. It belongs in the hero, not further down.
- The free test is the *first* call to action; the 180 € package is the second.

Do not present 180 € and 210 € as two packages (that is how the current price list
reads — Classic 180 €, Komplett 210 €). On this page, 210 € is the crossed-out old
price of Komplett. Classic does not appear.

## 3. Non-negotiable rules

These override any instinct to write more persuasive copy:

- **No invented proof.** No testimonials, ratings, counts, years in business,
  certificates or before/after results that aren't already in this repo. The three
  Google reviews in `OfferLandingPage.tsx` are real — use those, verbatim.
- **No "best in Germany".** An absolute superiority claim is Spitzenstellungswerbung
  under UWG and invites an Abmahnung. Write strength as fact instead:
  "Premium-Diodenlaser Soprano ICE Platinum", "3 Wellenlängen in einem Applikator",
  "SHR In-Motion mit kontinuierlicher Kühlung", "eines der modernsten Geräte".
- **Not "schmerzfrei" as a promise.** Keep the discipline the current page already
  has: "nahezu schmerzfrei", the manufacturer's wording attributed to the
  manufacturer, and the honest line that personal sensation varies. Keep the
  asterisk and its footnote.
- **No medical or outcome promises.** No "dauerhaft haarfrei", no session counts as
  a guarantee, no skin-condition claims. "Dauerhafte Haarentfernung" as the service
  name is fine — it's the established German term for the treatment.
- Device is **Soprano ICE Platinum** only. Never name another device.
- German throughout, formal **Sie**, no English marketing words.

## 4. Where it lives and what to reuse

- Route: `src/app/angebote/laser/page.tsx` → renders `OfferLandingPage` with
  `variant="laser"`. Keep the route and the metadata export.
- The laser and beauty variants currently share `src/app/angebote/OfferLandingPage.tsx`.
  This rebuild changes the laser page heavily — **split it**: a dedicated
  `LaserOfferPage` component, leaving `/angebote/beauty` untouched and working.
- Styles: `src/app/angebote/angebote.css` and the tokens in `DESIGN.md`
  (rose-wine `#713746`, rose-accent `#c98f91`, rose-bone `#f5f0ea`, Schibsted Grotesk).
  **Do not introduce a new visual language, font or palette.** This must look like the
  rest of beautyso.de.
- Reuse: `WhatsAppIcon`, `ArrowUpRight`, `StickyCta`, `whatsappUrl`/`mapsUrl` from
  `src/app/treatments.tsx`, price data from `src/app/pricing.ts`.
- Follow the documentation bundled with the installed Next.js version before
  using or changing framework APIs.

## 5. Page structure

In this order. Mobile is the real design; desktop is the adaptation.

1. **Hero — the offer, above the fold.**
   Headline names the offer, not the salon. Something like
   "Ganzkörper-Laser für 180 € statt 210 €" with "Vorher kostenlos testen" directly
   under it. One sentence of context (Soprano ICE Platinum, Q1 Mannheim). Two
   buttons: *Kostenlos testen (WhatsApp)* primary, *Anrufen* secondary. The old price
   is `<s>210 €</s>` next to the 180 €, not in a badge nobody reads.
   Everything a visitor needs to act must be visible without scrolling on a 390 px
   viewport: offer, free test, both buttons.
2. **Why it's risk-free — the free test in three steps.**
   Schreiben → kostenlos testen → erst dann entscheiden. Three short blocks, no icons
   inventing meaning. Ends with the same WhatsApp CTA.
3. **The device.** Rewrite the existing Komfort section: Soprano ICE Platinum, the
   three wavelengths, the continuous cooling, "nahezu schmerzfrei*" with the footnote.
   Keep the existing device photo (`/media/soprano-ice-platinum.png`).
4. **What's in the 180 € package.** The nine zones of Komplett as a plain list, and
   the price line 180 € / statt 210 €. One CTA under it.
5. **Preise kurz.** See §7 — a short list, not six tables, with a link to `/preise`
   for the full list.
6. **Bewertungen.** The three real Google reviews (§8), with the Google source label.
7. **Anfahrt & Kontakt.** Q1, 7 Mannheim, map link, phone, opening hours, final CTA pair.
8. **Sticky bar (mobile).** WhatsApp + Anrufen, always visible. Already exists —
   keep it, make sure it never covers the last section's buttons.

Cut from the current page: the "Ablauf" section with the tall portrait image, the
Herren tables, the 6er-Paket tables, and the beauty service cards. They dilute a
single-offer page. The full price list stays available at `/preise`.

## 6. Call-to-action spec

Phone: `+49 15565 855752` → `tel:+4915565855752`.

Each CTA carries its own prefilled WhatsApp text, so the salon knows what the person
wants before they reply:

| Placement | Message | href |
|---|---|---|
| Hero (primary) | Hallo S&O, ich möchte den kostenlosen Lasertest vereinbaren. | `https://wa.me/4915565855752?text=Hallo%20S%26O%2C%20ich%20m%C3%B6chte%20den%20kostenlosen%20Lasertest%20vereinbaren.` |
| Package section | Hallo S&O, ich interessiere mich für das Ganzkörper-Paket für 180 €. | `https://wa.me/4915565855752?text=Hallo%20S%26O%2C%20ich%20interessiere%20mich%20f%C3%BCr%20das%20Ganzk%C3%B6rper-Paket%20f%C3%BCr%20180%20%E2%82%AC.` |
| Price section | Hallo S&O, ich habe eine Frage zur Laser-Haarentfernung. | `https://wa.me/4915565855752?text=Hallo%20S%26O%2C%20ich%20habe%20eine%20Frage%20zur%20Laser-Haarentfernung.` |
| Sticky bar / final | Hallo S&O, ich möchte einen Lasertermin anfragen. | `https://wa.me/4915565855752?text=Hallo%20S%26O%2C%20ich%20m%C3%B6chte%20einen%20Lasertermin%20anfragen.` |

Rules: CTAs must stay plain anchors so the GTM click triggers keep firing (see §9);
`target="_blank" rel="noreferrer"` on WhatsApp links; tap targets at least
44 × 44 px with 8 px between them; the phone number is a real `tel:` link everywhere
it appears as text; keep the existing `data-offer-whatsapp`, `data-offer-call`,
`data-offer-sticky-cta` hooks on every CTA, including new ones. Say once, near the
CTAs, when people can expect an answer (see open item 3).

## 7. Prices to show

Only these, in this order — taken from `pricing.ts`, unchanged:

- **Ganzkörper Komplett — 180 € statt 210 €** (the offer, visually dominant)
- Beliebte Kombinationen: Achseln + Intim + Bikini 95 € · Beine komplett + Achseln
  120 € · Beine komplett + Achseln + Intim + Bikini 160 €
- Einzelzonen als Einstieg: Oberlippe 20 € · Achseln 40 € · Bikini 40 € ·
  Beine komplett 100 €
- One line: "Alle Zonen, Herren-Preise und 6er-Pakete finden Sie in der
  [Preisliste](/preise)."

If the source of truth for the 180/210 offer has to change in `pricing.ts`, change it
there — don't hardcode prices in the component while the same numbers live in the
price data.

## 8. Reviews

Use the three already in the repo, exactly as written, with name and "Google Review":
Açelya Akdeniz, Berry, EU IAFI. Keep the five-star row only because these are real
five-star reviews. Do not add an aggregate rating or review count unless the
project owner supplies the real numbers from the Google profile — and if so, mark it up as
`AggregateRating` only then.

## 9. Tracking — already live, do not break it

The site is tracked through Google Tag Manager (`gtmId` in `src/app/layout.tsx`,
container `GTM-KZ9QXMK2`). Verified live on `/angebote/laser`:

- **GA4** `G-KNQP4C42TD`
- **Meta Pixel** `3819379801538425`, firing `PageView` on load and the custom event
  `WebsiteContactClick` on contact clicks
- GTM triggers: link clicks matching `wa.me | api.whatsapp.com | web.whatsapp.com`,
  link clicks starting with `tel:`, and at least one tag scoped to the page path
  `/angebote/laser`

What that means for this rebuild:

- **Every CTA stays a real anchor** — `<a href="https://wa.me/...">` and
  `<a href="tel:+4915565855752">`. Do not convert them to buttons with an
  `onClick` handler, `window.open`, or anything that calls `preventDefault()`.
  GTM's Link Click trigger is what fires the conversion; a button kills it silently.
- **Keep the route `/angebote/laser`.** A tag is scoped to that exact path, so a new
  URL (e.g. `/angebote/laser-180`) would stop tracking without any visible error.
- Keep the `data-offer-whatsapp`, `data-offer-call` and `data-offer-sticky-cta`
  attributes on every CTA, new ones included.
- After deploy, confirm in Meta Events Manager (Test Events) and GA4 DebugView that a
  WhatsApp click and a phone click both still register.

One improvement to raise with the project owner before implementing: `WebsiteContactClick`
is a *custom* event. Meta optimises best against the standard `Contact` (or `Lead`)
event. Either map a Custom Conversion onto `WebsiteContactClick` or switch the tag to
the standard event — worth doing before spending more on this campaign.

## 10. Metadata and structured data

- Keep `title`/`description`/`canonical`/OG in `page.tsx`, rewritten around the offer
  ("Ganzkörper-Laser 180 € statt 210 € — kostenlos testen | S&O Beauty Salon Mannheim").
- Add `Offer` JSON-LD reflecting the real thing: price 180, priceCurrency EUR,
  `priceValidUntil` (see open item 1), availability, and the salon as seller. Do not
  invent a validity date.
- The `LocalBusiness` data on the site already exists — reuse it, don't duplicate a
  second conflicting node on this page.

## 11. Performance and mobile

- Hero image is the LCP element: `priority`, correct `sizes`, modern format, no
  layout shift. The page must be usable on a 390 px viewport with no horizontal scroll.
- Price rows must not overflow; long zone names wrap rather than clipping.
- Respect `prefers-reduced-motion`; no scroll-triggered reveals that hide content
  before it animates in — the page must read fully at rest.
- Test at 390 px, 768 px and 1440 px before saying it's done.

## 12. Done means

- [ ] Offer (180 € statt 210 €) and the free test are both visible without scrolling at 390 px.
- [ ] Every CTA opens WhatsApp with the right prefilled text, or dials the number.
- [ ] Only the prices from §7 appear; `/preise` link present; `/angebote/beauty` still works.
- [ ] Only the three real reviews; no invented proof anywhere.
- [ ] No "bestes Gerät Deutschlands", no unqualified "schmerzfrei", no outcome promises.
- [ ] Palette, type and components match `DESIGN.md` and the rest of the site.
- [ ] `npm run build` and `npm run lint` pass; no console errors on the page.
- [ ] Screenshots at 390 px and 1440 px attached to the handover.

## 13. Open items for the project owner

1. **Aktionszeitraum** — until when does 180 € run? Needed for honest urgency and for
   `priceValidUntil`. Without a date, no countdown and no "nur kurze Zeit".
2. **Free test conditions** — first-time customers only? One zone per person? Which
   zones are eligible? State it in one line so nobody arrives expecting a full session.
3. **Response time and hours** — what should the page promise ("Antwort meist
   innerhalb einer Stunde", opening hours)? Don't promise anything he can't hold.
4. **Meta event naming** — switch `WebsiteContactClick` to the standard `Contact`
   event, or map a Custom Conversion onto it? (See §9.)
5. Does the Herren "Ganzkörper Aktion 340 €" belong on this page, or stay on `/preise`?
   (Brief currently says: stay.)
