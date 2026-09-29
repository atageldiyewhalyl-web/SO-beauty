export type PriceSection = {
  title: string;
  slug: string;
  columns: [string, string];
  items: [string, string][];
  note?: string;
};

export const priceCategories = [
  {
    title: "Gesichtsbehandlungen",
    slug: "gesichtsbehandlungen",
    pricePageSlug: "gesichtsbehandlungen",
    startingPrice: "ab 29 €",
    text: "LED, Aqua Peel, Aqua Glow, Microneedling und Kombinationen für ein gepflegtes Hautbild.",
    items: [
      ["LED Express", "29 €"],
      ["Aqua Peel Basic", "89 €"],
      ["Microneedling Gesicht", "99 €"],
    ],
  },
  {
    title: "Laser",
    slug: "laser",
    pricePageSlug: "laser-damen",
    startingPrice: "ab 20 €",
    text: "Dauerhafte Haarentfernung für einzelne Zonen oder größere Bereiche.",
    items: [
      ["Oberlippe", "20 €"],
      ["Achseln", "40 €"],
      ["Beine komplett", "100 €"],
    ],
  },
  {
    title: "Lashlifting",
    slug: "lashlifting",
    pricePageSlug: "lashlifting",
    startingPrice: "auf Anfrage",
    text: "Natürlich geschwungene Wimpern mit persönlicher Abstimmung vor dem Termin.",
    items: [
      ["Wimpernlifting", "auf Anfrage"],
      ["Augenpartie", "persönlich abgestimmt"],
      ["Termin", "per WhatsApp"],
    ],
  },
  {
    title: "Paketpreise",
    slug: "paketpreise",
    pricePageSlug: "laser-kombinationen",
    startingPrice: "ab 95 €",
    text: "Beliebte Kombinationen und 6er-Pakete für abgestimmte Behandlungspläne.",
    items: [
      ["Achseln + Intim + Bikini", "95 €"],
      ["Ganzkörper Classic", "180 €"],
      ["6er-Pakete", "ab 849 €"],
    ],
  },
];

export const promotionItems = [
  ["Neukundenrabatt", "10 %"],
  ["Studenten & Auszubildende", "10 %"],
];

/**
 * Aktion on /angebote/laser: Ganzkörper Komplett at a reduced price. The regular
 * price list keeps its own rows; this is the campaign offer the landing page sells.
 */
export const laserOffer = {
  name: "Ganzkörper Komplett",
  price: 180,
  wasPrice: 210,
  zones: [
    "Beine komplett",
    "Achseln",
    "Arme komplett",
    "Intimbereich",
    "Bikinizone",
    "Bauch",
    "Rücken",
    "Brust",
    "Dekolleté",
  ],
} as const;

/** The three combinations shown on the laser landing page. */
export const popularCombinations: [string, string][] = [
  ["Achseln + Intim + Bikini", "95 €"],
  ["Beine komplett + Achseln", "120 €"],
  ["Beine komplett + Achseln + Intim + Bikini", "160 €"],
];

/** Entry-level single zones shown on the laser landing page. */
export const laserStarterZones: [string, string][] = [
  ["Oberlippe", "20 €"],
  ["Achseln", "40 €"],
  ["Bikini", "40 €"],
  ["Beine komplett", "100 €"],
];

const laserDamen: PriceSection = {
  title: "Dauerhafte Haarentfernung - Damen",
  slug: "laser-damen",
  columns: ["Behandlungszone", "Preis"],
  items: [
    ["Oberlippe", "20 €"],
    ["Kinn", "20 €"],
    ["Gesicht komplett", "45 €"],
    ["Hals / Nacken", "28 €"],
    ["Achseln", "40 €"],
    ["Arme komplett", "70 €"],
    ["Bauch", "50 €"],
    ["Rücken", "65 €"],
    ["Bikini", "40 €"],
    ["Intim + Bikini", "65 €"],
    ["Gesäß", "55 €"],
    ["Unterschenkel", "55 €"],
    ["Beine komplett", "100 €"],
  ],
};

const laserCombinations: PriceSection = {
  title: "Beliebte Kombinationen",
  slug: "laser-kombinationen",
  columns: ["Paket", "Preis"],
  items: [
    ["Achseln + Intim + Bikini", "95 €"],
    ["Beine komplett + Achseln", "120 €"],
    ["Beine komplett + Achseln + Intim + Bikini", "160 €"],
  ],
};

const bodyPackages: PriceSection = {
  title: "Ganzkörper-Pakete",
  slug: "ganzkoerper-pakete",
  columns: ["Paket", "Preis"],
  items: [
    ["Ganzkörper Classic", "180 €"],
    ["Ganzkörper Komplett", "210 €"],
  ],
  note: "Classic: Beine, Achseln, Arme, Intim und Bikini. Komplett: Beine, Achseln, Arme, Intim, Bikini, Bauch, Rücken, Brust und Dekolleté. Aktion: Ganzkörper Komplett aktuell 180 € statt 210 €.",
};

const laserSixPacks: PriceSection = {
  title: "6er-Pakete Damen",
  slug: "6er-pakete-damen",
  columns: ["6er-Paket", "Paketpreis"],
  items: [
    ["Ganzkörper Classic", "1.049 €"],
    ["Ganzkörper Komplett", "1.249 €"],
    ["Beine + Achseln + Intim/Bikini", "849 €"],
  ],
};

const laserHerren: PriceSection = {
  title: "Dauerhafte Haarentfernung - Herren",
  slug: "laser-herren",
  columns: ["Behandlungszone", "Preis"],
  items: [
    ["Oberlippe", "29 €"],
    ["Kinn", "39 €"],
    ["Wangen", "39 €"],
    ["Bartkontur", "45 €"],
    ["Hals", "49 €"],
    ["Nacken", "49 €"],
    ["Gesicht komplett", "79 €"],
    ["Gesicht + Hals", "99 €"],
    ["Achseln", "59 €"],
    ["Schultern", "69 €"],
    ["Brust", "89 €"],
    ["Bauch", "79 €"],
    ["Brust + Bauch", "139 €"],
    ["Rücken komplett", "129 €"],
    ["Rücken + Schultern", "169 €"],
    ["Oberarme", "69 €"],
    ["Unterarme", "69 €"],
    ["Arme komplett", "109 €"],
    ["Hände + Finger", "39 €"],
    ["Intimbereich", "99 €"],
    ["Gesäß komplett", "99 €"],
    ["Pofalte", "49 €"],
    ["Oberschenkel", "109 €"],
    ["Unterschenkel", "99 €"],
    ["Beine komplett", "169 €"],
    ["Füße + Zehen", "39 €"],
    ["Brust + Rücken + Hals + Gesicht + Achseln", "210 €"],
    ["Ganzkörper Herren - Aktion", "340 €"],
  ],
  note: "Diese Herren-Aktionspreise gelten nur vorübergehend.",
};

const laserSixPacksHerren: PriceSection = {
  title: "Paketpreise Herren",
  slug: "6er-pakete-herren",
  columns: ["Paket", "Preis"],
  items: [
    ["Ganzkörper", "1.799 €"],
    ["Brust + Bauch + Rücken", "1.099 €"],
  ],
  note: "Diese Herren-Paketpreise gelten nur vorübergehend.",
};

const facialTreatments: PriceSection = {
  title: "Gesichtsbehandlungen",
  slug: "gesichtsbehandlungen",
  columns: ["Behandlung", "Preis"],
  items: [
    ["LED Express", "29 €"],
    ["LED Skin Glow", "45 €"],
    ["LED Hydrogel Deluxe", "59 €"],
    ["Aqua Peel Basic", "89 €"],
    ["Aqua Glow + LED", "109 €"],
    ["Aqua Deluxe", "119 €"],
    ["Microneedling Gesicht", "99 €"],
    ["Microneedling Gesicht + Hals", "129 €"],
    ["Aqua Peel + Microneedling", "159 €"],
    ["LED Upgrade", "+19 €"],
  ],
  note: "Kombi-Vorteil: Aqua Peel Basic + Microneedling einzeln 188 €, als Kombination 159 €.",
};

const aquaFacialPrices: PriceSection = {
  title: "AquaFacial & LED",
  slug: "aquafacial-preise",
  columns: ["Behandlung", "Preis"],
  items: [
    ["LED Express", "29 €"],
    ["LED Skin Glow", "45 €"],
    ["LED Hydrogel Deluxe", "59 €"],
    ["Aqua Peel Basic", "89 €"],
    ["Aqua Glow + LED", "109 €"],
    ["Aqua Deluxe", "119 €"],
    ["LED Upgrade", "+19 €"],
  ],
};

const microneedlingPrices: PriceSection = {
  title: "Microneedling",
  slug: "microneedling-preise",
  columns: ["Behandlung", "Preis"],
  items: [
    ["Microneedling Gesicht", "99 €"],
    ["Microneedling Gesicht + Hals", "129 €"],
    ["Aqua Peel + Microneedling", "159 €"],
    ["LED Upgrade", "+19 €"],
  ],
  note: "Kombi-Vorteil: Aqua Peel Basic + Microneedling einzeln 188 €, als Kombination 159 €.",
};

const lashliftingPrices: PriceSection = {
  title: "Lashlifting",
  slug: "lashlifting",
  columns: ["Behandlung", "Preis"],
  items: [["Wimpernlifting", "auf Anfrage"]],
};

const promotions: PriceSection = {
  title: "Angebote & Vorteile",
  slug: "aktionen",
  columns: ["Vorteil", "Rabatt"],
  items: [
    ["Neukundenrabatt", "10 %"],
    ["Studenten & Auszubildende", "10 %"],
    ["Bring a Friend", "10 € p. P."],
  ],
};

export const servicePricingSections: Record<string, PriceSection[]> = {
  "laser-haarentfernung": [laserDamen, laserCombinations, bodyPackages, laserSixPacks, laserHerren, laserSixPacksHerren],
  aquafacial: [aquaFacialPrices],
  microneedling: [microneedlingPrices],
  wimpernlifting: [lashliftingPrices],
  "professionelle-hautpflege": [aquaFacialPrices, microneedlingPrices],
};

export const fullPriceSections: PriceSection[] = [
  laserDamen,
  laserCombinations,
  bodyPackages,
  laserSixPacks,
  laserHerren,
  laserSixPacksHerren,
  facialTreatments,
  promotions,
];
