# Admin design — extraction (Claude Design, "PredCast Admin — Match Day Dashboard")

Source boards: Main (admin 1440, alerts on), Wide 1920, Compact 1280, Moderator, Finance,
Loading, Empty, Error, Foundations, Components. Reference renders (official dc-runtime):
`renders/*.png`. Sources: `project/` (Claude Design format; the runtime is not committed).
Captures of the admin before the redesign (1440, local Spicy): `before/*.png`.

## Details only visible with the official runtime
- KPI tiles: delta line "▲ 18.4% vs prev 24h" (colour by tone), not just the caption.
- Live now header: "N MATCHES · N STREAMS · N VIEWERS" + stale-feed chip; each live card shows
  streams · viewers for that match and market chips "1X2 · OPEN / O/U 2.5 · CLOSED / BTTS · RESOLVED".
- Upcoming events: sub-line "LEAGUE · 0x7c1d…a65c" (or PENDING); status badges PUBLISHED / HIDDEN /
  DEPLOYING 2/3 / SETUP FAILED.
- Operations: right column "#id / hh:mm · actor".
- System health jobs table: LAST RUN = "✓ OK hh:mm:ss · 0.4s" or "✕ FAIL …"; upstream cards carry a
  state badge (✕ DOWN, ▲ 86% BUDGET).
- Moderation: each report has a sub-line "TARGET TYPE · target · match"; bans show expiry + "by actor".
- Loading: header keeps env/chain chips, health pill hidden; one skeleton per card.

## Tokens (Foundations → `app/globals.css` `@theme`)
- Colours: page #0A0A0A · card #111111 · card-2 #141414 · elevated #1A1A1A · line-subtle #1E1E1E ·
  line #2A2A2A · line-hover #3A3A3A · accent #E8001D · accent-hover #FF1737 · accent-dark #B0001A ·
  accent-text #FF4757 (small red text only, AA) · positive #2DD4A4 · warning #F5C518 · fg #FFF ·
  fg-body white/0.65 · fg-meta white/0.5 (was 0.45 → AA fix).
- Fonts: display Barlow Condensed 700–800 upper · mono JetBrains Mono · sans **Lexend** (new).
- Radii: badge 4 · control 6 · nav 8 · card 12. Shadows: popover 0 8 24 /.5, modal 0 24 64 /.7.
- Animations: live (pc-pulse 1.6s), shimmer (1.4s); both off under reduced motion.
- Base: tabular-nums everywhere; `:focus-visible` outline 2px accent offset 2px.
- Type scale: display-xl 44, display-num 48, kpi 38, score 30, section 26, num-s 22, card-title mono 11
  +0.18em, eyebrow 11 +0.2em accent-text, nav 12 +0.14em, label 10 +0.16em, button 10/11 +0.14em,
  badge 9 +0.12em, data mono 11–12, body-strong Lexend 500 14, body 14, small 12–13.
- Spacing 4px base; control heights xs 24 · sm 28 · md 32 · lg 40; rows 36/48/56; card header 44;
  top bar 56; sidebar 224, nav item 36.

## Components (Components board)
StatTile (default/bad delta/live/loading/error) · Card + CardHeader (title, count, meta, action) +
grid table rows (normal/hover/critical/focus) · Badges (status, severity S1–S5, live/market, on-chain,
role/env) · Buttons primary/ghost/danger × sm/md/lg + two-step confirm (countdown 5s) · Filter chips,
tabs, search (`/` shortcut), pager · Modal destructive confirm · Alert banners critical/warning/info ·
Empty state, skeleton row, toasts, sparkline (72×28), nav item (active/hover/badge/soon).

## Dashboard layout (top → bottom, admin order)
Header (eyebrow OVERVIEW, MATCH DAY, date · auto-refresh 15s · updated hh:mm:ss; chips env, chain,
health pill, refresh) → Needs action now (alerts grid, mute warnings 1h) → KPI row (6 tiles) →
Live now (match cards: status/minute, league, teams+score, pool, bets, market chips, close markets,
live page, chat, feed freshness) → Upcoming events (table) | Suggested to deploy (fan-token teams) →
Operations | Deploy wallet → System health (upstreams + jobs) | Moderation (reports by severity +
active bans) → Activity (audit log).

## Role variants
- admin/super_admin: everything; KPIs live, events, volume, fees, bettors, open reports.
- moderator: KPIs live, streams, reports, bans; order alerts, kpis, health, live, events (no money,
  no action column), activity (moderation only); no ops/wallet/suggestions; nav without Markets.
- finance: KPIs live, events, volume, fees, bettors, avg pool; events with money, live, activity
  (no moderation rows); no health row, no moderation; nav without Moderation/Players.
- Jobs nav entry: admin only (badge when a job fails).

## States
Loading: skeleton per card. Empty: per-card empty copy + CTA (browse suggestions). Error: per-card
"Couldn't load …" with request id, Retry, Show cached; other cards unaffected.
