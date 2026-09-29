# S&O Beauty Salon — Visibility Map

- **date**: 2026-09-02 (first pass — lightweight, built from repo docs, not live SERP)
- **next full refresh due**: 2026-09-16 (run the research-playbook with live SERP + DataForSEO/GSC if connected)

## What S&O offers (source of truth: treatments.tsx, WEBSITE-COPY.md, PRODUCT.md)

Treatments (each has a `/behandlungen/<slug>` page): laser-haarentfernung
(Soprano ICE Platinum, NiSV), aquafacial, microneedling, wimpernlifting,
professionelle-hautpflege. Location: Q1, 7, 68161 Mannheim (Quadrate).
Mon–Fri 10:00–18:00. Conversion = WhatsApp (+49 15565 855752). No visible
price list (client decision). Domain beautyso.de.

Blog already live: `src/app/ratgeber/articles.ts` — 5 posts:
laser-haarentfernung-vorbereitung, laser-haarentfernung-wie-viele-sitzungen,
laser-haarentfernung-kosten-mannheim, microneedling-nachsorge,
aquafacial-oder-microneedling.

## Competitors (from docs/SEO-LAUNCH-PLAN.md, not re-verified)

MIS Beauty (misbeauty.de), JS Cosmetics (js-cosmetics.de), Beauty & Laserroom
Mannheim (beautyroom-mannheim.de), Brow Bar & Sun (browbarsun.de). Most lead
with exact local keyword + visible prices + founder story + Google reviews.

## Priority search themes (from SEO-LAUNCH-PLAN)

Commercial: kosmetikstudio mannheim, laser haarentfernung mannheim, dauerhafte
haarentfernung mannheim, aquafacial mannheim, microneedling mannheim,
wimpernlifting mannheim. Location modifiers: Mannheim Innenstadt / Quadrate /
Q1.

## Content gaps (as of 2026-09-02)

- **Laser** is well covered (3 posts). Do not add more laser posts without a
  genuinely new angle.
- **Wimpernlifting**: zero ratgeber content, named commercial priority →
  covered 2026-09-02 (wimpernlifting-mannheim).
- **AquaFacial**: only the comparison post — no standalone "AquaFacial
  Mannheim: Ablauf / für welche Haut" guide. Open.
- **Professionelle Hautpflege**: no ratgeber content. Open.
- **Kosmetikstudio Mannheim** (salon-level head term) — homepage targets it;
  a "was macht ein gutes Kosmetikstudio aus / worauf achten" trust post could
  support it. Open.
- **Reviews / E-E-A-T**: PRODUCT.md flags no verified testimonials, owner
  portrait, or practitioner credential in the repo. Content must not invent
  these; a real owner/team page is the higher-leverage fix (SEO-LAUNCH-PLAN
  phase two).

## Notes / constraints

Off_limits per registry: no prices/ranges, no medical promises, no fabricated
reviews or credentials, NiSV only in laser/IPL content, Soprano device only
for laser. Same-address risk at Q1, 7 (another salon) — keep identity distinct.
