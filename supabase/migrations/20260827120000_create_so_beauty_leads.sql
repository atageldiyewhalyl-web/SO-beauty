create table if not exists public.so_beauty_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text not null,
  contact_preference text not null,
  treatment text not null,
  message text not null,
  consent_contact boolean not null default false,
  consent_contact_at timestamptz,
  consent_contact_text text,
  consent_form_version text,
  page_url text,
  submitted_user_agent text,
  submitted_ip_hash text,
  status text not null default 'new',
  email_sent_at timestamptz,
  email_error text
);

alter table public.so_beauty_leads enable row level security;

create index if not exists so_beauty_leads_created_at_idx
  on public.so_beauty_leads (created_at desc);

create index if not exists so_beauty_leads_email_idx
  on public.so_beauty_leads (email);
