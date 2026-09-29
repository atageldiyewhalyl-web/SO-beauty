import { createClient } from "https://esm.sh/@supabase/supabase-js@2.46.1";

type LeadPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  contactPreference?: string;
  treatment?: string;
  message?: string;
  consentContact?: boolean;
  consentContactText?: string;
  pageUrl?: string;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Hard-coded so shared Supabase project secrets from other sites cannot
// redirect S&O leads or spoof the sender.
const soFromEmail = '"S&O Beauty Salon" <anfrage@forms.xn--nll-hoa.com>';
const soLeadRecipients = ["halyl@xn--nll-hoa.com"];
const soConfirmationCopyRecipients = ["halyl@xn--nll-hoa.com"];
const soReplyToEmail = "info@beautyso.de";
const consentFormVersion = "so-anfrage-v1";
const defaultConsentText =
  "Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert und verarbeitet werden.";
const allowedContactPreferences = new Set(["WhatsApp", "Telefon", "E-Mail"]);

function cleanText(value: unknown, maxLength = 2000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validatePayload(payload: LeadPayload) {
  const requestedPreference = cleanText(payload.contactPreference, 40);
  const lead = {
    fullName: cleanText(payload.fullName, 150),
    email: cleanText(payload.email, 254).toLowerCase(),
    phone: cleanText(payload.phone, 80),
    contactPreference: allowedContactPreferences.has(requestedPreference)
      ? requestedPreference
      : "WhatsApp",
    treatment: cleanText(payload.treatment, 120),
    message: cleanText(payload.message, 4000),
    consentContact: payload.consentContact === true,
    consentContactText: cleanText(payload.consentContactText, 500) || defaultConsentText,
    pageUrl: cleanText(payload.pageUrl, 1000),
  };

  if (
    !lead.fullName ||
    !lead.email ||
    !lead.phone ||
    !lead.treatment ||
    !lead.message ||
    !lead.consentContact
  ) {
    throw new Error("Missing required lead fields.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    throw new Error("Invalid email address.");
  }

  return lead;
}

function renderTextEmail(lead: ReturnType<typeof validatePayload>) {
  return [
    "Neue Anfrage über das Kontaktformular",
    "",
    `Name: ${lead.fullName}`,
    `E-Mail: ${lead.email}`,
    `Telefon: ${lead.phone}`,
    `Kontaktwunsch: ${lead.contactPreference}`,
    `Behandlung: ${lead.treatment}`,
    `Seite: ${lead.pageUrl || "-"}`,
    "",
    "Nachricht:",
    lead.message,
  ].join("\n");
}

function renderHtmlEmail(lead: ReturnType<typeof validatePayload>) {
  const rows = [
    ["Name", lead.fullName],
    ["E-Mail", lead.email],
    ["Telefon", lead.phone],
    ["Kontaktwunsch", lead.contactPreference],
    ["Behandlung", lead.treatment],
    ["Seite", lead.pageUrl || "-"],
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#2d1a20;line-height:1.5">
      <h1 style="font-size:22px;margin:0 0 16px">Neue Anfrage über das Kontaktformular</h1>
      <table style="border-collapse:collapse;width:100%;max-width:640px">
        ${rows
          .map(
            ([label, value]) => `
            <tr>
              <td style="border:1px solid #efe0e5;padding:10px;font-weight:700;background:#fdf0ea;width:170px">${escapeHtml(label)}</td>
              <td style="border:1px solid #efe0e5;padding:10px">${escapeHtml(value)}</td>
            </tr>
          `,
          )
          .join("")}
      </table>
      <h2 style="font-size:16px;margin:22px 0 8px">Nachricht</h2>
      <p style="white-space:pre-wrap;background:#fdf0ea;border:1px solid #efe0e5;padding:14px">${escapeHtml(lead.message)}</p>
    </div>
  `;
}

function renderCustomerConfirmationText(lead: ReturnType<typeof validatePayload>) {
  return [
    `Hallo ${lead.fullName},`,
    "",
    "vielen Dank für Ihre Anfrage bei S&O Beauty Salon. Wir haben Ihre Nachricht erhalten und melden uns persönlich zur Terminabstimmung.",
    "",
    `Gewünschte Behandlung: ${lead.treatment}`,
    `Ihr Kontaktwunsch: ${lead.contactPreference}`,
    "",
    "Ihre Nachricht an uns:",
    lead.message,
    "",
    "Sie erreichen uns jederzeit unter +49 15565 855752 oder info@beautyso.de.",
    "Öffnungszeiten: Mo bis Sa, 09:00 bis 20:00 Uhr.",
    "",
    "Herzliche Grüße",
    "S&O Beauty Salon, Q1, 7, 68161 Mannheim",
  ].join("\n");
}

function renderCustomerConfirmationHtml(lead: ReturnType<typeof validatePayload>) {
  return `
    <div style="font-family:Arial,sans-serif;color:#2d1a20;line-height:1.6;font-size:16px;max-width:640px">
      <p>Hallo ${escapeHtml(lead.fullName)},</p>
      <p>
        vielen Dank für Ihre Anfrage bei S&amp;O Beauty Salon. Wir haben Ihre Nachricht
        erhalten und melden uns persönlich zur Terminabstimmung.
      </p>
      <table style="border-collapse:collapse;width:100%;max-width:520px;margin:18px 0">
        <tr>
          <td style="border:1px solid #efe0e5;padding:10px;font-weight:700;background:#fdf0ea;width:190px">Gewünschte Behandlung</td>
          <td style="border:1px solid #efe0e5;padding:10px">${escapeHtml(lead.treatment)}</td>
        </tr>
        <tr>
          <td style="border:1px solid #efe0e5;padding:10px;font-weight:700;background:#fdf0ea">Ihr Kontaktwunsch</td>
          <td style="border:1px solid #efe0e5;padding:10px">${escapeHtml(lead.contactPreference)}</td>
        </tr>
      </table>
      <p style="white-space:pre-wrap;background:#fdf0ea;border:1px solid #efe0e5;padding:14px">${escapeHtml(lead.message)}</p>
      <p>
        Sie erreichen uns jederzeit unter
        <a href="tel:+4915565855752" style="color:#8f3a4d;font-weight:700">+49 15565 855752</a>
        oder <a href="mailto:info@beautyso.de" style="color:#8f3a4d;font-weight:700">info@beautyso.de</a>.
        Öffnungszeiten: Mo bis Sa, 09:00 bis 20:00 Uhr.
      </p>
      <p>
        Herzliche Grüße<br>
        S&amp;O Beauty Salon<br>
        Q1, 7, 68161 Mannheim
      </p>
    </div>
  `;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "";
  return request.headers.get("x-real-ip")?.trim() || "";
}

async function hashIpAddress(ipAddress: string) {
  if (!ipAddress) return "";
  const salt = Deno.env.get("CONSENT_IP_HASH_SALT") || "";
  const encoded = new TextEncoder().encode(`${ipAddress}:${salt}`);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (error && typeof error === "object" && "message" in error) {
    const message = (error as { message?: unknown }).message;
    if (typeof message === "string" && message.trim()) return message;
  }
  if (typeof error === "string" && error.trim()) return error;
  return "Unknown error";
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return Response.json(
      { ok: false, error: "Method not allowed" },
      { status: 405, headers: corsHeaders },
    );
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!supabaseUrl || !serviceRoleKey || !resendApiKey) {
      throw new Error("Missing required server secrets.");
    }

    const payload = (await request.json()) as LeadPayload;
    const lead = validatePayload(payload);
    const consentTimestamp = new Date().toISOString();
    const submittedUserAgent = cleanText(request.headers.get("user-agent"), 500);
    const submittedIpHash = await hashIpAddress(getClientIp(request));

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

    const { data, error } = await supabase
      .from("so_beauty_leads")
      .insert({
        full_name: lead.fullName,
        email: lead.email,
        phone: lead.phone,
        contact_preference: lead.contactPreference,
        treatment: lead.treatment,
        message: lead.message,
        consent_contact: lead.consentContact,
        consent_contact_at: consentTimestamp,
        consent_contact_text: lead.consentContactText,
        consent_form_version: consentFormVersion,
        page_url: lead.pageUrl,
        submitted_user_agent: submittedUserAgent,
        submitted_ip_hash: submittedIpHash || null,
      })
      .select("id")
      .single();

    if (error) throw error;
    if (!data) {
      throw new Error("Lead insert did not return an id.");
    }

    const leadId = data.id as string;
    const from = soFromEmail;
    const to = Array.from(new Set(soLeadRecipients));

    if (!to.length) {
      throw new Error("No lead recipient configured.");
    }

    const subject = `Neue Anfrage: ${lead.treatment} - ${lead.fullName}`;
    const html = renderHtmlEmail(lead);
    const text = renderTextEmail(lead);
    const failedDeliveries: string[] = [];

    for (const recipient of to) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, to: recipient, subject, html, text, reply_to: lead.email }),
      });

      if (!emailResponse.ok) {
        const emailError = await emailResponse.text();
        failedDeliveries.push(`${recipient}: ${emailError.slice(0, 500)}`);
      }
    }

    const customerEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: lead.email,
        bcc: Array.from(new Set(soConfirmationCopyRecipients)),
        subject: "Ihre Anfrage bei S&O Beauty Salon",
        html: renderCustomerConfirmationHtml(lead),
        text: renderCustomerConfirmationText(lead),
        reply_to: soReplyToEmail,
      }),
    });

    if (!customerEmailResponse.ok) {
      const emailError = await customerEmailResponse.text();
      failedDeliveries.push(`${lead.email}: ${emailError.slice(0, 500)}`);
    }

    if (failedDeliveries.length) {
      await supabase
        .from("so_beauty_leads")
        .update({
          status: "email_failed",
          email_error: failedDeliveries.join("\n").slice(0, 1000),
        })
        .eq("id", leadId);

      return Response.json(
        { ok: false, error: "Email delivery failed" },
        { status: 502, headers: corsHeaders },
      );
    }

    await supabase
      .from("so_beauty_leads")
      .update({
        status: "email_sent",
        email_sent_at: new Date().toISOString(),
        email_error: null,
      })
      .eq("id", leadId);

    return Response.json({ ok: true }, { headers: corsHeaders });
  } catch (error) {
    const message = getErrorMessage(error);
    console.error("S&O Anfrage submission failed:", message);
    return Response.json({ ok: false, error: message }, { status: 400, headers: corsHeaders });
  }
});
