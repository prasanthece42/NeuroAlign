create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'landing_page',
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

-- Inserts are handled by the Next.js API route using the service role key.
-- Do not expose the service role key in browser/client code.
