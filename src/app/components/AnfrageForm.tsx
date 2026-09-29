"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "./ArrowUpRight";

const defaultLeadEndpoint =
  "https://srnynewvauzymnljqskj.supabase.co/functions/v1/so-anfrage";
const leadEndpoint = (
  process.env.NEXT_PUBLIC_LEAD_CAPTURE_ENDPOINT || defaultLeadEndpoint
).replace(/\/$/, "");

const treatmentOptions = [
  "Laser-Haarentfernung",
  "AquaFacial",
  "Professionelle Hautpflege",
  "Microneedling",
  "Wimpern & Augenbrauen",
  "Ich bin noch unsicher",
];

const consentText =
  "Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert und verarbeitet werden.";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  contactPreference: string;
  treatment: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  contactPreference: "WhatsApp",
  treatment: "",
  message: "",
  consent: false,
};

export function AnfrageForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const payload = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      contactPreference: form.contactPreference.trim(),
      treatment: form.treatment.trim(),
      message: form.message.trim(),
      consentContact: form.consent,
      consentContactText: consentText,
      pageUrl: typeof window === "undefined" ? "" : window.location.href,
    };

    try {
      const response = await fetch(leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result?.ok !== true) {
        throw new Error(
          typeof result?.error === "string" && result.error.trim()
            ? result.error
            : `Anfrage fehlgeschlagen (${response.status})`,
        );
      }
      setStatus("done");
      setForm(initialState);
    } catch (submitError) {
      console.error("Anfrage submission failed", submitError);
      setError(
        "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns über WhatsApp.",
      );
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <div className="so-form-done" role="status">
        <p className="so-panel-kicker">Anfrage gesendet</p>
        <h3>Vielen Dank für Ihre Anfrage.</h3>
        <p>
          Wir haben Ihre Nachricht erhalten und melden uns persönlich zur
          Terminabstimmung. Eine Bestätigung ist an Ihre E-Mail-Adresse unterwegs.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form className="so-anfrage-form" onSubmit={handleSubmit}>
      <div className="so-form-grid">
        <label className="so-form-field">
          <span>Vor- und Nachname</span>
          <input
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={form.fullName}
            onChange={(event) => update("fullName", event.target.value)}
          />
        </label>
        <label className="so-form-field">
          <span>E-Mail-Adresse</span>
          <input
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </label>
      </div>

      <div className="so-form-grid">
        <label className="so-form-field">
          <span>Telefonnummer</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </label>
        <label className="so-form-field">
          <span>Kontaktwunsch</span>
          <select
            name="contactPreference"
            required
            value={form.contactPreference}
            onChange={(event) => update("contactPreference", event.target.value)}
          >
            <option>WhatsApp</option>
            <option>Telefon</option>
            <option>E-Mail</option>
          </select>
        </label>
      </div>

      <label className="so-form-field">
        <span>Behandlung</span>
        <select
          name="treatment"
          required
          value={form.treatment}
          onChange={(event) => update("treatment", event.target.value)}
        >
          <option value="" disabled>
            Bitte wählen
          </option>
          {treatmentOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label className="so-form-field">
        <span>Ihre Nachricht</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Welche Behandlung interessiert Sie? Gibt es einen Wunschzeitraum oder Fragen?"
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </label>

      <label className="so-form-consent">
        <input
          name="consent"
          type="checkbox"
          required
          checked={form.consent}
          onChange={(event) => update("consent", event.target.checked)}
        />
        <span>
          Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage
          gespeichert und verarbeitet werden. Mehr dazu in der{" "}
          <a href="/datenschutz">Datenschutzerklärung</a>.
        </span>
      </label>

      {error ? (
        <p className="so-form-error" role="alert">
          {error}
        </p>
      ) : null}

      <button
        className="so-btn so-btn-rose so-form-submit"
        data-btn="1"
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Wird gesendet…" : "Anfrage senden"}
        <ArrowUpRight />
      </button>
      <p className="so-form-note">
        Wir melden uns persönlich zur Terminabstimmung. Ihre Daten werden nicht an
        Dritte weitergegeben.
      </p>
    </form>
  );
}
