import { chromium } from "playwright";

const baseUrl = process.env.UI_BASE_URL ?? "http://localhost:3000";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const failures = [];
const results = [];

const viewports = [
  { name: "phone-320", width: 320, height: 800 },
  { name: "phone-360", width: 360, height: 800 },
  { name: "phone-390", width: 390, height: 844 },
  { name: "phone-430", width: 430, height: 932 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "desktop-1024", width: 1024, height: 900 },
  { name: "desktop-1440", width: 1440, height: 1000 },
];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

/** The loader is a first-paint curtain; dismiss it so assertions see the page. */
async function settle(page) {
  await page.evaluate(() => sessionStorage.setItem("so-loader-seen", "1"));
  await page.reload({ waitUntil: "networkidle" });
  await page.evaluate(() => {
    document.body.style.overflow = "";
    document.querySelectorAll("[data-rev]").forEach((el) => el.classList.add("so-on"));
  });
  await page.waitForTimeout(250);
}

for (const viewport of viewports) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
    reducedMotion: "no-preference",
  });
  const consoleErrors = [];
  page.on("console", (m) => { if (m.type() === "error") consoleErrors.push(m.text()); });
  page.on("pageerror", (e) => consoleErrors.push(e.message));

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await settle(page);

  const facts = await page.evaluate(() => {
    const text = document.body.innerText;
    const jsonLd = document.querySelector('script[type="application/ld+json"]');
    const salon = jsonLd ? JSON.parse(jsonLd.textContent || "{}") : null;
    const hours = salon?.openingHoursSpecification?.[0];
    const targets = [...document.querySelectorAll("a, button")]
      .filter((el) => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; })
      .map((el) => {
        const r = el.getBoundingClientRect();
        return {
          label: el.textContent?.trim().replace(/\s+/g, " ").slice(0, 60) || el.getAttribute("aria-label") || "unlabelled",
          width: Math.round(r.width),
          height: Math.round(r.height),
        };
      });

    return {
      title: document.title,
      h1: document.querySelector("h1")?.textContent?.trim().replace(/\s+/g, " ") ?? "",
      h1Count: document.querySelectorAll("h1").length,
      textLength: text.trim().length,
      overlay: Boolean(document.querySelector("[data-nextjs-dialog], #webpack-dev-server-client-overlay")),
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      whatsappLinks: document.querySelectorAll('a[href^="https://wa.me/"]').length,

      // Business rules that predate the redesign and still hold.
      hasHomePriceSection: Boolean(document.querySelector("#preise .so-price-card, .so-prices")),
      fullPriceLink: Boolean(document.querySelector('a[href="/preise"]')),
      hasHerrenPricing: /Herren|340 €|1\.799 €/.test(text),
      reviewCards: document.querySelectorAll(".so-review-card").length,
      reviewsHeadline: /Stimmen unserer Kundinnen & Kunden/.test(text),
      hasEmDash: text.includes("\u2014"),

      // V2 Pastel structure.
      heroImage: document.querySelector(".so-hero-media img")?.getAttribute("src") ?? "",
      valueCards: document.querySelectorAll(".so-value-card").length,
      valueLeadImage: Boolean(document.querySelector(".so-value-card .so-value-media")),
      valueIcons: document.querySelectorAll(".so-value-card svg").length,
      treatmentCards: document.querySelectorAll(".so-cards > .so-card").length,
      treatmentPosters: document.querySelectorAll(".so-card-media img").length,
      cardMediaFit: (() => {
        const i = document.querySelector(".so-card-media img");
        return i ? getComputedStyle(i).objectFit : null;
      })(),
      cutoutNoOverlap: (() => {
        const tile = document.querySelector('[data-media="cutout"]');
        if (!tile) return false;
        const copy = tile.querySelector("div");
        const img = tile.querySelector(".so-value-media");
        if (!copy) return false;
        if (!img || getComputedStyle(img).display === "none") return true;
        const a = copy.getBoundingClientRect();
        const b = img.getBoundingClientRect();
        // the two must not intersect, in either axis
        return a.right <= b.left + 1 || b.right <= a.left + 1 || a.bottom <= b.top + 1 || b.bottom <= a.top + 1;
      })(),
      treatmentColumns: (() => {
        const g = document.querySelector(".so-cards");
        return g ? getComputedStyle(g).gridTemplateColumns.split(" ").length : 0;
      })(),
      inviteConstrained: (() => {
        const i = document.querySelector(".so-card-invite");
        const shell = 1240;
        return i ? Math.round(i.getBoundingClientRect().width) <= shell + 1 : false;
      })(),
      inviteCard: document.querySelectorAll(".so-card-invite").length,
      inviteOutsideRail: !document.querySelector(".so-cards .so-card-invite"),
      bookingNoWrap: getComputedStyle(document.querySelector("[data-mobile-booking]")).whiteSpace,
      umlautsOnFallback: (() => {
        // The display face cannot draw them; make sure the stack still can.
        const probe = document.createElement("span");
        probe.textContent = "\u00e4\u00f6\u00fc\u00df";
        probe.style.cssText = "position:absolute;visibility:hidden;font-size:80px;font-family:" +
          getComputedStyle(document.querySelector("h1")).fontFamily;
        document.body.appendChild(probe);
        const w = probe.getBoundingClientRect().width;
        probe.remove();
        return w > 0;
      })(),
      steps: document.querySelectorAll(".so-step").length,
      desktopMenuLinks: document.querySelectorAll('.so-nav-menu a[href^="/behandlungen/"]').length,
      mobileMenuOpen: Boolean(document.querySelector(".so-mobile-menu")),
      footerInFlowToggle: Boolean(document.querySelector(".so-footer-bottom .language-toggle")),
      navFontSize: (() => {
        const el = document.querySelector(".so-nav > a");
        return el ? Number.parseFloat(getComputedStyle(el).fontSize) : null;
      })(),

      // Contact block: client-reported fixes.
      hoursText: /Mo–Sa · 09:00–20:00/.test(text),
      addressText: /Q1, 7, 68161 Mannheim/.test(text),
      mapLazy: document.querySelector(".so-contact-map iframe")?.getAttribute("loading") === "lazy",
      mapSrc: document.querySelector(".so-contact-map iframe")?.getAttribute("src") ?? "",
      mapPlate: Boolean(document.querySelector(".so-map-place")),
      jsonLdLat: salon?.geo?.latitude ?? null,
      jsonLdLng: salon?.geo?.longitude ?? null,
      jsonLdOpens: hours?.opens ?? null,
      jsonLdCloses: hours?.closes ?? null,
      jsonLdSaturday: Boolean(hours?.dayOfWeek?.includes("Saturday")),

      mobileBookingPresent: Boolean(document.querySelector("[data-mobile-booking]")),
      mobileBookingInitiallyVisible: document.querySelector("[data-mobile-booking]")?.getAttribute("data-visible") === "true",
      footerBodySize: (() => {
        const el = document.querySelector(".so-footer-brand > p");
        return el ? Number.parseFloat(getComputedStyle(el).fontSize) : null;
      })(),
      smallTargets: targets.filter((t) => t.width < 44 || t.height < 44),
    };
  });

  assert(facts.h1 === "Laser & Hautpflege in Mannheim.", `${viewport.name}: approved H1 is missing`);
  assert(facts.h1Count === 1, `${viewport.name}: expected exactly one H1, found ${facts.h1Count}`);
  assert(facts.textLength > 700, `${viewport.name}: page content is unexpectedly short`);
  assert(!facts.overlay, `${viewport.name}: framework error overlay is visible`);
  assert(facts.overflow <= 1, `${viewport.name}: page overflows horizontally by ${facts.overflow}px`);
  assert(facts.whatsappLinks >= 3, `${viewport.name}: expected repeated WhatsApp access points`);

  assert(!facts.hasHomePriceSection, `${viewport.name}: pricing should not render on the homepage`);
  assert(facts.fullPriceLink, `${viewport.name}: link to the full price page is missing`);
  assert(!facts.hasHerrenPricing, `${viewport.name}: Herren pricing should not render`);
  assert(facts.reviewCards === 3, `${viewport.name}: expected three Google review cards, found ${facts.reviewCards}`);
  assert(facts.reviewsHeadline, `${viewport.name}: reviews headline is missing`);
  assert(!facts.hasEmDash, `${viewport.name}: an em dash is still present in visible copy`);

  assert(facts.heroImage.includes("hero-banner"), `${viewport.name}: hero banner image is missing`);
  assert(facts.valueCards === 4, `${viewport.name}: expected four value cards, found ${facts.valueCards}`);
  assert(facts.valueIcons === 0, `${viewport.name}: value tiles should carry no icons`);
  assert(facts.valueLeadImage, `${viewport.name}: the lead value tile is missing its photograph`);
  assert(facts.treatmentCards === 5, `${viewport.name}: expected five treatment cards, found ${facts.treatmentCards}`);
  assert(facts.treatmentPosters === 5, `${viewport.name}: every treatment card needs a real poster still`);
  assert(facts.cardMediaFit === "cover", `${viewport.name}: treatment stills must crop, not stretch`);
  assert(facts.cutoutNoOverlap, `${viewport.name}: cutout tile copy overlaps its portrait`);
  assert(facts.treatmentColumns >= 1, `${viewport.name}: treatment grid has no columns`);
  assert(facts.inviteConstrained, `${viewport.name}: invite card must stay within the shell width`);
  assert(facts.inviteCard === 1, `${viewport.name}: the gradient invite card is missing`);
  assert(facts.inviteOutsideRail, `${viewport.name}: invite card must sit outside the scrollable rail`);
  assert(facts.umlautsOnFallback, `${viewport.name}: umlauts have no drawable font in the display stack`);
  if (viewport.width <= 640) {
    assert(facts.bookingNoWrap === "nowrap", `${viewport.name}: mobile booking bar must stay on one line`);
  }
  assert(facts.steps === 3, `${viewport.name}: expected three Ablauf steps`);
  assert(facts.desktopMenuLinks === 5, `${viewport.name}: treatment dropdown is incomplete`);
  assert(!facts.mobileMenuOpen, `${viewport.name}: mobile menu overlay renders while closed`);
  assert(facts.footerInFlowToggle, `${viewport.name}: language toggle is not in the footer`);

  assert(facts.hoursText, `${viewport.name}: opening hours must read Mo–Sa · 09:00–20:00`);
  assert(facts.addressText, `${viewport.name}: Q1, 7, 68161 Mannheim is not shown`);
  assert(facts.mapLazy, `${viewport.name}: Google Maps embed must stay lazy`);
  assert(facts.mapSrc.includes("49.488852") && facts.mapSrc.includes("8.4675212"),
    `${viewport.name}: map must be pinned by coordinate, got ${facts.mapSrc}`);
  assert(facts.mapPlate, `${viewport.name}: salon name plate over the map is missing`);
  assert(facts.jsonLdLat === 49.488852 && facts.jsonLdLng === 8.4675212, `${viewport.name}: JSON-LD geo is wrong`);
  assert(facts.jsonLdOpens === "09:00" && facts.jsonLdCloses === "20:00", `${viewport.name}: JSON-LD hours are wrong`);
  assert(facts.jsonLdSaturday, `${viewport.name}: JSON-LD is missing Saturday`);

  assert(facts.mobileBookingPresent, `${viewport.name}: conditional mobile booking action is missing`);
  assert(!facts.mobileBookingInitiallyVisible, `${viewport.name}: mobile booking action should be hidden in the hero`);

  if (viewport.width >= 1024) {
    assert(facts.navFontSize >= 14, `${viewport.name}: desktop navigation copy is below 14px`);
  }

  if (viewport.width <= 430) {
    const critical = facts.smallTargets.filter(({ label }) => !/Impressum|Datenschutz/.test(label));
    assert(critical.length === 0, `${viewport.name}: interactive targets below 44px: ${JSON.stringify(critical)}`);
    assert(facts.footerBodySize >= 14, `${viewport.name}: secondary footer copy is below 14px`);

    await page.locator("#technologie").scrollIntoViewIfNeeded();
    await page.waitForTimeout(450);
    assert(await page.locator("[data-mobile-booking]").getAttribute("data-visible") === "true",
      `${viewport.name}: mobile booking action did not appear after the hero`);

    for (const zone of ["#behandlungen", "#kontakt", "footer"]) {
      await page.locator(zone).scrollIntoViewIfNeeded();
      await page.waitForTimeout(250);
      assert(await page.locator("[data-mobile-booking]").getAttribute("data-visible") !== "true",
        `${viewport.name}: mobile booking action covers ${zone}`);
    }

    // Mobile menu opens, traps nothing, and closes again.
    await page.locator(".so-burger").click();
    await page.waitForTimeout(300);
    assert(await page.locator(".so-mobile-menu").count() === 1, `${viewport.name}: mobile menu did not open`);
    assert(await page.locator('.so-mobile-sub a[href^="/behandlungen/"]').count() === 5,
      `${viewport.name}: mobile treatment submenu is incomplete`);
    await page.locator(".so-mobile-close").click();
    await page.waitForTimeout(300);
    assert(await page.locator(".so-mobile-menu").count() === 0, `${viewport.name}: mobile menu did not close`);
  }

  assert(consoleErrors.length === 0, `${viewport.name}: console errors: ${consoleErrors.join(" | ")}`);
  results.push({ viewport: viewport.name, ...facts });
  await page.close();
}

// ---------------------------------------------------------------- treatments
for (const slug of ["laser-haarentfernung", "aquafacial", "microneedling", "wimpernlifting", "professionelle-hautpflege"]) {
  for (const viewport of [{ name: "mobile", width: 390, height: 844 }, { name: "desktop", width: 1280, height: 900 }]) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
    await page.goto(`${baseUrl}/behandlungen/${slug}`, { waitUntil: "networkidle" });
    await settle(page);
    const f = await page.evaluate(() => ({
      hasPriceSection: Boolean(document.querySelector(".service-pricing[data-service-pricing]")),
      priceRows: document.querySelectorAll(".service-price-card div:has(> dt)").length,
      fullPriceLink: Boolean(document.querySelector('.service-pricing a[href="/preise"]')),
      hasHerrenPricing: /Herren|340 €|1\.799 €/.test(document.body.innerText),
      hasEmDash: document.body.innerText.includes("\u2014"),
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      h1Count: document.querySelectorAll("h1").length,
      faqCount: document.querySelectorAll("[data-service-faq] details").length,
      faqSectionTransparent: getComputedStyle(document.querySelector(".service-faq-redesign")).backgroundColor === "rgba(0, 0, 0, 0)",
      answerCentred: getComputedStyle(document.querySelector(".service-answer")).textAlign === "center",
      hasPreparation: Boolean(document.querySelector("[data-service-preparation]")),
      hasSuitability: Boolean(document.querySelector("[data-service-suitability]")),
      relatedGuides: document.querySelectorAll('[data-related-guides] a[href^="/ratgeber"]').length,
      header: Boolean(document.querySelector(".so-header")),
      footer: Boolean(document.querySelector(".so-footer")),
    }));
    assert(f.hasPriceSection, `${slug} ${viewport.name}: related pricing section is missing`);
    assert(f.priceRows >= 1, `${slug} ${viewport.name}: pricing table has no rows`);
    assert(f.fullPriceLink, `${slug} ${viewport.name}: full price page link is missing`);
    if (slug === "laser-haarentfernung") {
      assert(f.hasHerrenPricing, `${slug} ${viewport.name}: Herren pricing is missing`);
    } else {
      assert(!f.hasHerrenPricing, `${slug} ${viewport.name}: Herren pricing should not render`);
    }
    assert(!f.hasEmDash, `${slug} ${viewport.name}: em dash in visible copy`);
    assert(f.overflow <= 1, `${slug} ${viewport.name}: overflows horizontally by ${f.overflow}px`);
    assert(f.h1Count === 1, `${slug} ${viewport.name}: expected one H1`);
    assert(f.faqCount >= 6, `${slug} ${viewport.name}: expected at least six FAQs`);
    assert(f.faqSectionTransparent, `${slug} ${viewport.name}: FAQ section paints a width-constrained slab`);
    assert(f.answerCentred, `${slug} ${viewport.name}: opening statement should be centred`);
    assert(f.hasPreparation && f.hasSuitability, `${slug} ${viewport.name}: care/suitability blocks missing`);
    assert(f.relatedGuides >= 1, `${slug} ${viewport.name}: related guides missing`);
    assert(f.header && f.footer, `${slug} ${viewport.name}: shared chrome missing`);
    await page.close();
  }
}

// ------------------------------------------------------------------ ratgeber
for (const path of ["/preise", "/ratgeber", "/ratgeber/laser-haarentfernung-vorbereitung", "/impressum", "/datenschutz"]) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const res = await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
  await settle(page);
  const f = await page.evaluate(() => ({
    hasHerrenPricing: /Herren|340 €|1\.799 €/.test(document.body.innerText),
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    h1Count: document.querySelectorAll("h1").length,
    hasEmDash: document.body.innerText.includes("\u2014"),
    displayFont: getComputedStyle(document.querySelector("h1")).fontFamily.toLowerCase(),
  }));
  assert(res?.status() === 200, `${path}: HTTP ${res?.status()}`);
  assert(f.overflow <= 1, `${path}: overflows horizontally by ${f.overflow}px`);
  assert(f.h1Count === 1, `${path}: expected one H1`);
  assert(!f.hasEmDash, `${path}: em dash in visible copy`);
  if (path === "/preise") {
    assert(f.hasHerrenPricing, `${path}: Herren pricing is missing`);
  } else {
    assert(!f.hasHerrenPricing, `${path}: Herren pricing should not render`);
  }
  assert(f.displayFont.includes("so display"), `${path}: H1 is not on the display face (${f.displayFont})`);
  await page.close();
}

// --------------------------------------------------------------- angebote
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await settle(page);
  const links = await page.evaluate(() => ({
    offerLinks: document.querySelectorAll('a[href^="/angebote"]').length,
  }));
  assert(links.offerLinks === 0, `home: offer pages should stay unlinked, found ${links.offerLinks}`);
  await page.close();
}

{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const sitemap = await page.goto(`${baseUrl}/sitemap.xml`, { waitUntil: "networkidle" });
  const text = await page.textContent("body");
  assert(sitemap?.status() === 200, `/sitemap.xml: HTTP ${sitemap?.status()}`);
  assert(!(text || "").includes("/angebote/"), "/sitemap.xml: offer pages should not be listed");
  await page.close();
}

for (const offer of [
  {
    path: "/angebote/laser",
    h1: "Dauerhafte Haarentfernung in Mannheim",
    required: ["Paketpreise", "Soprano ICE Platinum", "Nahezu schmerzfrei", "Ganzkörper Classic", "1.049 €"],
  },
  {
    path: "/angebote/beauty",
    h1: "Laser, Hautpflege & Wimpernlifting in Mannheim",
    required: ["Laser-Haarentfernung", "AquaFacial", "Microneedling", "Wimpernlifting", "Google Review"],
  },
]) {
  for (const viewport of [{ name: "mobile", width: 390, height: 844 }, { name: "desktop", width: 1280, height: 900 }]) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
    const res = await page.goto(`${baseUrl}${offer.path}`, { waitUntil: "networkidle" });
    await settle(page);
    const f = await page.evaluate(() => {
      const text = document.body.innerText;
      return {
        h1: document.querySelector("h1")?.textContent?.trim().replace(/\s+/g, " ") ?? "",
        h1Count: document.querySelectorAll("h1").length,
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        noindex: Boolean(document.querySelector('meta[name="robots"][content*="noindex" i]')),
        whatsapp: document.querySelectorAll('[data-offer-whatsapp], [data-offer-sticky-cta] a[href^="https://wa.me/"]').length,
        phone: document.querySelectorAll('[data-offer-call], [data-offer-sticky-cta] a[href^="tel:+4915565855752"]').length,
        sticky: Boolean(document.querySelector("[data-offer-sticky-cta]")),
        navLinks: document.querySelectorAll(".so-nav, .so-footer").length,
        logoOnlyHeader: Boolean(document.querySelector(".offer-logo")) && !document.querySelector(".so-header"),
        visibleText: text,
        visibleTextLower: text.toLowerCase(),
        hasEmDash: text.includes("\u2014"),
      };
    });
    assert(res?.status() === 200, `${offer.path} ${viewport.name}: HTTP ${res?.status()}`);
    assert(f.h1 === offer.h1, `${offer.path} ${viewport.name}: unexpected H1 "${f.h1}"`);
    assert(f.h1Count === 1, `${offer.path} ${viewport.name}: expected one H1`);
    assert(f.overflow <= 1, `${offer.path} ${viewport.name}: overflows horizontally by ${f.overflow}px`);
    assert(!f.noindex, `${offer.path} ${viewport.name}: page should be indexable`);
    assert(f.whatsapp >= 2, `${offer.path} ${viewport.name}: WhatsApp CTAs missing`);
    assert(f.phone >= 2, `${offer.path} ${viewport.name}: phone CTAs missing`);
    assert(f.sticky, `${offer.path} ${viewport.name}: sticky CTA missing`);
    assert(f.navLinks === 0, `${offer.path} ${viewport.name}: normal site chrome should not render`);
    assert(f.logoOnlyHeader, `${offer.path} ${viewport.name}: logo-only header missing`);
    assert(!f.hasEmDash, `${offer.path} ${viewport.name}: em dash in visible copy`);
    for (const phrase of offer.required) {
      assert(f.visibleTextLower.includes(phrase.toLowerCase()), `${offer.path} ${viewport.name}: missing "${phrase}"`);
    }
    await page.close();
  }
}

await browser.close();

if (failures.length) {
  console.error(`\n${failures.length} UI check(s) failed:\n`);
  failures.forEach((f) => console.error(" ✗ " + f));
  process.exit(1);
}
console.log(`✓ all UI checks passed across ${results.length} viewports + treatment, Ratgeber and legal routes`);
