"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";

type Language = "de" | "en";

const TRANSLATE_COOKIE = "googtrans";
const subscribeToLanguage = () => () => undefined;

function currentLanguage(): Language {
  return document.cookie.includes(`${TRANSLATE_COOKIE}=/de/en`) ? "en" : "de";
}

function setTranslationCookie(language: Language) {
  if (language === "en") {
    document.cookie = `${TRANSLATE_COOKIE}=/de/en; path=/; SameSite=Lax`;
    return;
  }

  document.cookie = `${TRANSLATE_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
}

/**
 * Loads Google Translate once for the whole document. Mounted in the root
 * layout so every route can be translated, including pages without a footer.
 */
export function TranslateScripts() {
  return (
    <>
      <Script id="google-translate-init" strategy="afterInteractive">
        {`function googleTranslateElementInit() {
          new google.translate.TranslateElement({
            pageLanguage: 'de',
            includedLanguages: 'en',
            autoDisplay: false
          }, 'google-translate-element');
        }`}
      </Script>
      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <div id="google-translate-element" aria-hidden="true" />
    </>
  );
}

/** The DE/EN control itself: lives in the footer. */
export function LanguageToggle() {
  const language = useSyncExternalStore(subscribeToLanguage, currentLanguage, () => "de");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setTranslationCookie(language === "de" ? "en" : "de");
    window.location.reload();
  };

  return (
    <button
      className="language-toggle"
      type="button"
      onClick={toggleLanguage}
      aria-label={language === "de" ? "Switch website language to English" : "Website auf Deutsch umstellen"}
    >
      <span className="language-toggle-code" aria-hidden="true">{language === "de" ? "EN" : "DE"}</span>
      <span>{language === "de" ? "English" : "Deutsch"}</span>
    </button>
  );
}
