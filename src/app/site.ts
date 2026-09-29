const FALLBACK_SITE_URL = "https://beautyso.de";

/**
 * Canonical site origin.
 *
 * `??` is deliberately not used here. Vercel (and most CI) expose a project
 * variable that exists but has no value as an EMPTY STRING rather than
 * undefined, so `process.env.X ?? fallback` yields "" and `new URL("")` throws
 * ERR_INVALID_URL while Next collects page data, failing the whole build.
 * A malformed value is treated the same way as a missing one.
 */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return FALLBACK_SITE_URL;

  try {
    return new URL(raw).toString().replace(/\/$/, "");
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const siteUrl = resolveSiteUrl();
