# Supabase — S&O Anfrage form

The homepage Anfrage form (`src/app/components/AnfrageForm.tsx`) POSTs the lead
as JSON to the `so-anfrage` Edge Function. The function:

1. validates the payload,
2. inserts a row into `public.so_beauty_leads` (service-role, RLS stays closed),
3. emails the lead to `halyl@nüll.com` via Resend,
4. emails a confirmation to the customer,
5. writes back `status` / `email_sent_at` / `email_error`.

This project shares the Supabase instance `srnynewvauzymnljqskj` with the other
nüll sites. Sender (`anfrage@forms.nüll.com`) and recipient are hard-coded in the
function so shared project secrets can't reroute S&O leads.

## One-time setup

```bash
supabase login
supabase link --project-ref srnynewvauzymnljqskj

# apply the migration (creates so_beauty_leads)
supabase db push

# function secrets (service role key from the Supabase dashboard → API settings)
supabase secrets set \
  SUPABASE_URL=https://srnynewvauzymnljqskj.supabase.co \
  SUPABASE_SERVICE_ROLE_KEY=... \
  RESEND_API_KEY=... \
  CONSENT_IP_HASH_SALT=$(openssl rand -hex 16)

supabase functions deploy so-anfrage --no-verify-jwt
```

(`--no-verify-jwt` matches `verify_jwt = false` in `config.toml` — the form
posts without a Supabase auth header.)

`CONSENT_IP_HASH_SALT` is optional — without it the IP hash column is left null.
If the shared project already has `RESEND_API_KEY` / `SUPABASE_SERVICE_ROLE_KEY`
set (from the other sites), you only need to deploy the function and push the
migration.

## Frontend env

Set in Vercel (Production + Preview):

```
NEXT_PUBLIC_LEAD_CAPTURE_ENDPOINT=https://srnynewvauzymnljqskj.supabase.co/functions/v1/so-anfrage
```

The component falls back to that exact URL if the variable is missing, so the
form also works without it.

## Local test

```bash
curl -sX POST https://srnynewvauzymnljqskj.supabase.co/functions/v1/so-anfrage \
  -H 'Content-Type: application/json' \
  -d '{"fullName":"Test Kundin","email":"you@example.com","phone":"+49 170 0000000","contactPreference":"WhatsApp","treatment":"Laser-Haarentfernung","message":"Testanfrage","consentContact":true}'
```

Expect `{"ok":true}` and a row in `so_beauty_leads` with `status = 'email_sent'`.
