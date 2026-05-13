# DevOps Plan v3 — chiliztv.com (Cloudflare Stream edition)

> v3 supersedes v2. Le changement majeur : **abandon de MediaMTX self-host**
> au profit de **Cloudflare Stream** managé. Disparition du VPS streaming,
> du Caddy reverse proxy, des webhooks MediaMTX, du DNS `ingest.chiliztv.com`,
> du backup recordings → R2, du monitoring VPS. Le modèle de coût passe de
> "infra fixe par VPS" à "usage-based par minute de stream stockée/livrée".
>
> Toute la stack devient managée : Vercel (front) + Render (back) + Supabase
> (DB) + Cloudflare Stream (RTMP/HLS) + Cloudflare DNS. Zéro serveur à patcher.

---

## TL;DR — ce qui change vs v2

| Sujet | v2 (MediaMTX VPS) | v3 (Cloudflare Stream) |
|---|---|---|
| Ingest RTMP | VPS Hetzner/OVH, MediaMTX docker | Endpoint Cloudflare `rtmps://live.cloudflare.com:443/live/` |
| Playback HLS | `ingest.chiliztv.com/hls/*` via Caddy | CF Stream CDN, `https://customer-<id>.cloudflarestream.com/<uid>/manifest/video.m3u8` ou iframe embed |
| Browser ingest | WHIP custom via MediaMTX | WHIP natif Cloudflare (`/<uid>/webRTC/publish`) |
| Webhooks state | `POST /mediamtx/{auth,connect,disconnect}` | `POST /cloudflare-stream/webhook` (signé HMAC) |
| Recordings | Volume docker + rclone → R2 nightly | Built-in CF Stream, accessible via API |
| Backup recordings | $1/mo R2 + script cron | Inclus |
| TLS sur HLS | Caddy + Let's Encrypt sur VPS | CF gère, certificat managé |
| DNS | `ingest.chiliztv.com` CNAME VPS | À supprimer (ou CNAME custom domain CF Stream optionnel) |
| Monitoring VPS | Netdata Cloud, UFW logs, ssh tail | CF Stream dashboard + analytics API |
| Coût Phase 0 | $5 VPS + $1 R2 = $6/mo fixe | ~$8/mo usage (2h/jour x 5 streamers x 10 viewers) |
| Coût Phase 2 (1k-10k) | $14 VPS LB + $5 R2 = $19/mo | ~$300-1000/mo usage |
| Failure modes | VPS down, disk plein, cert expiré | API CF down (rare), quota dépassé |
| Code à supprimer | `infra/mediamtx/`, `mediamtx-webhook.controller.ts`, `mediamtx-webhook.routes.ts`, `mediamtx-path.ts`, `MEDIAMTX_PUBLISH_SECRET` env | — |
| Code à créer | — | `IStreamingProvider` port, `CloudflareStreamProvider` adapter, `cloudflare-stream-webhook.controller.ts`, migration schema streams |

---

## Phase 0 — Beta (état actuel + migration Cloudflare Stream)

### 0.1 Acquis (à conserver)
- ✅ Front : Vercel Hobby, auto-deploy `main`
- ✅ Back : Render Starter Web Service, auto-deploy `main`
- ✅ DB : Supabase Free
- ✅ DNS Cloudflare : `app.chiliztv.com` → Vercel, `api.chiliztv.com` → Render
- ✅ Waitlist re-architecturée (`apps/frontend/app/waitlist` + `apps/backend/src/application/waitlist`)

### 0.2 Migration MediaMTX → Cloudflare Stream (Lot 0.M, P0 immédiat)

#### 0.M.1 Inscription Cloudflare Stream
1. Activer Cloudflare Stream sur le compte Cloudflare existant (DNS y vit déjà).
2. Pricing : $5/mo de base inclut 1000 min stockées + $1/1000 min delivered au-delà
   de la base. À 10 testeurs, le coût réel ~$8/mo.
3. Générer un API Token avec scope `Stream:Edit` — copié dans Render env :
   `CLOUDFLARE_STREAM_API_TOKEN`.
4. Récupérer `CLOUDFLARE_ACCOUNT_ID`, ajouter en env.
5. Configurer Webhook URL Cloudflare Stream → `https://api.chiliztv.com/cloudflare-stream/webhook`,
   secret HMAC dédié `CLOUDFLARE_STREAM_WEBHOOK_SECRET`.

#### 0.M.2 Refactor backend — port + adapter

Nouveau port `packages/domain/src/streams/ports/IStreamingProvider.ts` :
```ts
export interface LiveInput {
  readonly uid: string;
  readonly streamKey: string;
  readonly rtmpsUrl: string;
  readonly playbackHlsUrl: string;
  readonly playbackDashUrl?: string;
  readonly webRtcPlayUrl?: string;
}

export interface IStreamingProvider {
  createLiveInput(opts: { name: string; meta?: Record<string, string> }): Promise<LiveInput>;
  deleteLiveInput(uid: string): Promise<void>;
  getLiveInput(uid: string): Promise<LiveInput | null>;
  signPlaybackUrl?(uid: string, ttlSec: number): Promise<string>; // optionnel Phase 2
}
```

Implémentation `apps/backend/src/infrastructure/streaming/CloudflareStreamProvider.ts` :
- `POST /accounts/{account_id}/stream/live_inputs` avec `meta: { name, matchId, streamerWallet }`.
- `DELETE /accounts/{account_id}/stream/live_inputs/{uid}` au cleanup.
- `GET .../live_inputs/{uid}` pour read.
- Utiliser `node:fetch` natif (pas besoin d'axios).

Bind tsyringe dans `composition-root.ts` : `TOKENS.IStreamingProvider` →
`CloudflareStreamProvider` en prod, `InMemoryStreamingProvider` (mock) en
test/dev.

#### 0.M.3 Migration schema Supabase

Nouvelle migration `apps/backend/src/infrastructure/database/migrations/0NN_streams_cloudflare.sql` :
```sql
alter table streams
  add column cloudflare_live_input_uid text,
  add column cloudflare_playback_hls_url text,
  add column cloudflare_playback_dash_url text;

create unique index streams_cloudflare_uid_idx
  on streams(cloudflare_live_input_uid)
  where cloudflare_live_input_uid is not null;
```

Garder `stream_key` (clé applicative interne) et `source_type` (`'obs'|'browser'`)
pour la rétro-compatibilité front. Le `stream_key` côté CF est stocké dans
`cloudflare_live_input_uid` (Cloudflare le génère, on ne le choisit pas).

#### 0.M.4 Webhook controller

`apps/backend/src/presentation/http/controllers/cloudflare-stream-webhook.controller.ts` :
- Endpoint unique `POST /cloudflare-stream/webhook`.
- Vérifier la signature HMAC : header `webhook-signature` contient
  `time=<unix>,sig1=<hmac-sha256>` — recalculer via
  `crypto.createHmac('sha256', secret).update(timestamp + '.' + rawBody).digest('hex')`.
- Rejeter si signature invalide ou timestamp > 5 min.
- Parser le body : `eventType: 'live_input.connected' | 'live_input.disconnected' | 'live_input.recording.ready' | ...`
- Dispatch vers `StreamLifecycleService.startStreamByLiveInput(uid)` ou
  `endStreamByLiveInput(uid)` (signature mise à jour pour lookup par
  `cloudflare_live_input_uid` au lieu de `stream_key`).

#### 0.M.5 Use cases mis à jour

- `StartStreamUseCase` (ou équivalent à la création d'un stream) appelle
  `IStreamingProvider.createLiveInput({ name, meta: { matchId, wallet } })`
  et persiste `cloudflare_live_input_uid` + `rtmpsUrl` + `streamKey` (le
  `streamKey` retourné par CF, à passer au streamer pour OBS) + `playback*`
  URLs.
- `EndStreamUseCase` appelle `deleteLiveInput(uid)` pour libérer les
  ressources CF (optionnel — on peut aussi laisser CF expirer après TTL).

#### 0.M.6 Front

- `StartStreamSheet` (cards OBS / Browser) :
  - **Carte OBS** (recommandée, badge "Recommended") affiche
    `Server: rtmps://live.cloudflare.com:443/live/`
    `Stream Key: {streamKey}` (copy button).
  - **Carte Browser** (Quick test) ouvre WHIP vers
    `https://customer-<id>.cloudflarestream.com/{uid}/webRTC/publish`.
- `LiveDetailsPage` / `LiveHero` : player consomme `cloudflare_playback_hls_url`
  via `hls.js` (déjà installé) ou iframe embed CF Stream
  (`https://customer-<id>.cloudflarestream.com/<uid>/iframe`).
- Recommandation : iframe embed pour rapidité + analytics CF natifs ;
  custom player hls.js si on veut overlay le chat sticky par-dessus
  (le design actuel le préfère).

#### 0.M.7 Suppressions à orchestrer en fin de migration

Après validation que CF Stream est stable en prod :
- `rm -rf infra/mediamtx/`
- Supprimer `apps/backend/src/presentation/http/controllers/mediamtx-webhook.controller.ts`
- Supprimer `apps/backend/src/presentation/http/routes/mediamtx-webhook.routes.ts`
- Supprimer `apps/backend/src/infrastructure/streaming/utils/mediamtx-path.ts`
  (si la logique de path naming n'est plus utilisée — CF gère ses propres UIDs)
- Supprimer env vars `MEDIAMTX_PUBLISH_SECRET` de `environment.ts` + Render +
  `.env.example`
- Supprimer la sous-tâche "filter `findActiveByMatchIds` par `source_type='browser'`
  pour le stale cleanup" du plan stream lifecycle hardening (CF gère ses
  disconnect events de façon fiable).
- Supprimer le DNS `ingest.chiliztv.com` (ou repurpose vers CF Stream custom
  domain — optionnel cf. 0.M.9).

#### 0.M.8 Effort estimé

Total ~2.5 jours dev :
- 0.M.1 setup CF Stream + tokens : 1h
- 0.M.2 port + adapter `CloudflareStreamProvider` : 4h
- 0.M.3 migration schema + repo update : 2h
- 0.M.4 webhook controller HMAC + parsing : 3h
- 0.M.5 use cases : 2h
- 0.M.6 front (StartStreamSheet + player) : 4h
- 0.M.7 cleanup + suppression code mort : 1h
- Tests E2E manuel OBS + browser : 2h
- Rollback plan + feature flag `STREAMING_PROVIDER=cloudflare|mediamtx` (optionnel
  pour migration safe) : 2h

#### 0.M.9 Custom domain CF Stream (optionnel)

CF Stream supporte un domaine custom au lieu de `customer-<id>.cloudflarestream.com`.
Avantage : URLs propres `stream.chiliztv.com/<uid>/manifest/video.m3u8`.
Inconvénient : config supplémentaire, pas requis pour beta. À garder pour
Phase 1 si on veut le branding.

### 0.3 Autres gaps Phase 0 (inchangé vs v2)

| # | Item | Pourquoi | Effort |
|---|---|---|---|
| 0.A | Backup Supabase quotidien (`pg_dump` → R2) | Free tier n'a pas de PITR | 2h |
| 0.B | Pino → Render log drain → BetterStack Free | Rétention logs | 1h |
| 0.C | **Sentry** front + back (Free 5k errors/mo) | Crashes invisibles aujourd'hui | 3h |
| 0.D | `/healthz` + BetterStack Uptime Free | Détection cold start Render | 1h |
| 0.E | Doppler ou env files chiffrés (rotation secrets) | Drift entre Vercel/Render/.env | 4h |
| 0.F | `docs/runbook-rollback.md` | Pas de doc d'incident | 2h |

---

## Phase 1 — Production MVP (semaines +2 à +6)

### 1.1 Sécurité — non négociable avant mainnet

#### 1.1.1 `ADMIN_PRIVATE_KEY` → AWS KMS sign-only (P0 absolu)

Inchangé vs v2. Status actuel vérifié : la clé admin est en clair dans Render
env vars et utilisée par 7 fichiers backend (`grep -rln ADMIN_PRIVATE_KEY
apps/backend/src` → `NetworkConfigService`, `environment`, 3 adapters, 1
indexer, 1 CLI). Compromise = vol fonds LP + résolution malveillante de tous
les matches.

Migration via port `ISigner` :
1. Interface `ISigner` dans `packages/domain/src/shared/ports/ISigner.ts` —
   méthodes `sign(hash)`, `getAddress()`.
2. `KmsSigner` (`@aws-sdk/client-kms`, ECDSA secp256k1 via KMS Asymmetric).
3. `LocalSigner` (wrap `privateKeyToAccount` viem) pour dev/test.
4. Refactor `ViemBlockchainService` — l'`account` viem accepte un `signTransaction`
   custom qui délègue au `ISigner` injecté.
5. Bind tsyringe `TOKENS.ISigner` selon `NODE_ENV`.
6. Drop `ADMIN_PRIVATE_KEY` Render env → remplacer par `AWS_KMS_KEY_ID` +
   IAM role.

Coût : ~$1/mo KMS pour 10k signatures/mois.

#### 1.1.2 Audit smart contracts (bloquant mainnet only)
Code4rena solo ($8-10k, 1-2 semaines) sur FootballMatch + LiquidityPool +
ChilizSwapRouter + StreamWallet. Pas bloquant pour le beta testnet, mais
gate vers mainnet (Phase 3).

#### 1.1.3 Rate limiting back
- `express-rate-limit` sur `/auth/*`, `/bets`, `/streams/*` (20 req/min/IP).
- Whitelist `/healthz` (uptime monitor).
- Whitelist `/cloudflare-stream/webhook` par signature HMAC (vérifiée en amont
  du rate limiter via middleware d'ordre).

### 1.2 CI/CD — GitHub Actions

Nouveau dossier `.github/workflows/` (absent aujourd'hui).

#### 1.2.1 `ci.yml` — sur chaque PR
```yaml
on: pull_request
jobs:
  lint-typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with: { version: 10.28.1 }
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm turbo run lint type-check
  test:
    needs: lint-typecheck
    runs-on: ubuntu-latest
    steps:
      - run: pnpm turbo run test --filter=@chiliztv/domain --filter=@chiliztv/shared --filter=backend
  test-contracts:
    runs-on: ubuntu-latest
    steps:
      - uses: foundry-rs/foundry-toolchain@v1
      - working-directory: apps/smart-contracts/chiliz-tv
        run: forge test -vvv
  build:
    needs: [lint-typecheck, test]
    runs-on: ubuntu-latest
    steps:
      - run: pnpm turbo run build
```

#### 1.2.2 `integration.yml` — sur `main` + nightly (cron)
Dépend du plan testing matches L4 (Anvil + Supabase local).
- Service Docker Anvil (`ghcr.io/foundry-rs/foundry:latest`).
- Supabase via `supabase` CLI (`supabase start` dans le job).
- `pnpm test:integration`, timeout 20 min.

#### 1.2.3 `deploy-contracts.yml` — `workflow_dispatch`
Input `network: testnet | mainnet`. Step deploy Foundry signé via KMS (dépend
de 1.1.1). Commit auto qui update `deployments/<network>.json` + push `main`
via PAT → déclenche auto-deploy Vercel + Render avec les nouvelles adresses.

### 1.3 Déploiement — auto-deploy + safeguards

#### 1.3.1 Vercel front
- Branch protection `main` + required check `ci.yml`.
- Env vars front : `NEXT_PUBLIC_DYNAMIC_ENV_ID`, `NEXT_PUBLIC_BACKEND_URL`,
  `NEXT_PUBLIC_CLOUDFLARE_STREAM_CUSTOMER_ID` (si custom player hls.js).
  Pas de secret backend dans Vercel.

#### 1.3.2 Render back — split en 2 services
- `chiliztv-api` — Web Service Starter, expose Express, healthcheck `/healthz`.
- `chiliztv-indexer` — Background Worker Starter, lance le node process
  indexers (`BettingMatchFactoryIndexer` + `BettingMatchEventIndexer` +
  `StreamWalletIndexer` + Pyth price feed) sans port. **Critique** :
  aujourd'hui les indexers tournent dans le même process que le web → un
  crash du web tue l'indexation, un timeout HTTP lent bloque les blocks
  ingérés.
- `preDeploy` script :
  ```
  pnpm db:migrate && pnpm contracts:sync
  ```
- Healthcheck Render configuré sur `/healthz`.

#### 1.3.3 Cloudflare Stream — pas de déploiement
Plus de Ansible, plus de SSH, plus de Caddyfile à patcher, plus d'UFW à
configurer. Tout est CRUD via l'API Cloudflare en runtime depuis le backend.

À monitorer côté CF :
- Quota CF Stream (alerte à 80% du forfait via webhook usage).
- Erreurs `4xx`/`5xx` retournées par l'API CF Stream (logs Pino côté back).
- Latence des `createLiveInput` calls (Sentry transaction).

### 1.4 Observabilité

| Layer | Outil | Coût | Pourquoi |
|---|---|---|---|
| Frontend errors | Sentry Free | $0 | Crashes Next.js + sourcemaps |
| Backend errors | Sentry Free | $0 | Exceptions Pino → Sentry transport |
| Logs structurés | BetterStack Free | $0-10 | 1 GB/mois free |
| Uptime | BetterStack Uptime Free | $0 | 10 monitors |
| Metrics back | Render Metrics | $0 | CPU, memory, RPS |
| RPC quotas Chiliz | Pino metrics → Grafana Cloud Free | $0 | 10k metrics, 14j |
| Indexer lag | Custom Prometheus exporter | $0 | `block_head_lag`, `last_indexed_block`, `errors_per_block` |
| **CF Stream usage** | CF Analytics API → Grafana | $0 | Minutes stored / delivered / live count |
| **CF Stream health** | Webhook receipt rate | $0 | Si webhooks stop, on perd les transitions live→ended |

**Alertes critiques** :
- Indexer lag > 50 blocks (ChilizSpicy block time 3s → 2.5 min de retard)
- `/healthz` down > 2 min
- Sentry > 10 errors/min
- CF Stream API errors > 5/min (perte de capacité à créer/end des streams)
- CF Stream webhooks silence > 10 min alors que `streams.status='live'` existe
- Supabase free > 80% (500 MB DB, 1 GB egress)

### 1.5 Backups
- Supabase : `pg_dump` quotidien → R2 (Backblaze ou Cloudflare R2). $1/mo
  pour 30j de rétention. Cron via GitHub Actions scheduled workflow.
- **Recordings** : inclus dans CF Stream, accessibles via API. Pas de backup
  manuel à orchestrer.
- Smart contracts : snapshot des `deployments/*.json` versionné git.

---

## Phase 2 — Scale (mois +2 à +6)

### 2.1 DB
- Supabase Free → Pro ($25/mo) : PITR 7j, daily backups managed, 8 GB DB.
- Read replica si besoin.

### 2.2 Compute back
- Render web : Starter $7 → Standard $25 (2 GB RAM).
- Render indexer worker : Starter $7 → Standard $25 si lag persistant.
- Redis (Upstash Free ou Render Redis $10) pour :
  - Cache API-Football (60s pré-match, 10 min metadata)
  - Rate limiting distribué
  - BullMQ pour jobs async (close markets, deploy contracts, resolve)

### 2.3 Compute front
- Vercel Hobby → Pro $20/mo si > 100 GB bandwidth/mois.

### 2.4 Streaming — Cloudflare Stream auto-scale
**Plus rien à provisionner.** CF Stream scale automatiquement, le CDN sert
en edge globalement, pas de LB à monter, pas de VPS à dupliquer.

Le coût scale avec l'usage :
- 1k users x 30 min de viewing/jour x 30 jours = 900k min delivered = **$900/mo**
- Plus minutes stored : ~10k min = $10/mo

Si le coût explose au-delà de l'acceptable (~$2k/mo), considérer Mux
($0.05/min de viewer) ou self-host (revenir sur un cluster MediaMTX/SRS LB
sur 2-3 VPS, ~$50-100/mo mais beaucoup d'ops). **Reco** : rester sur CF
Stream tant qu'on est < $1000/mo car le gain ops > coût marginal.

### 2.5 RPC Chiliz
- Public RPC `https://spicy-rpc.chiliz.com` throttle ~50 req/s.
- Migration vers RPC dédié (Ankr, Tatum, ou self-host) en Phase 2 :
  ~$50-100/mo.

---

## Phase 3 — Production grade (mainnet)

### 3.1 Sécurité renforcée
- Audit smart contracts terminé + remediation merged.
- KMS multi-region replication.
- Multisig sur fonctions admin (close, resolve, upgrade UUPS) — Gnosis Safe
  threshold 2/3 sur Chiliz mainnet.
- Pause guardian role distinct de l'admin.
- Bug bounty Immunefi (budget 1% TVL min).

### 3.2 SRE
- SLO : 99.5% uptime back, 99.9% front (Vercel l'offre).
- Runbooks `docs/runbooks/` : DB down, indexer lag, RPC outage, **CF Stream
  outage** (rare mais possible), stuck transaction, compromised admin key.
- On-call rotation si > 1 dev backend.
- Postmortem template + culture blameless.

### 3.3 Compliance
- KYC/AML wrapper (Sumsub ou Persona) si juridiction.
- Geo-blocking US + sanctioned countries via Cloudflare WAF.
- Logs immuables (Datadog Audit ou self-hosted SIEM).

---

## Mapping coûts par phase (mis à jour Cloudflare Stream)

| Item | Phase 0 (beta) | Phase 1 (MVP, 100-500) | Phase 2 (1k-10k) | Phase 3 (mainnet) |
|---|---|---|---|---|
| Vercel | $0 (Hobby) | $0-20 | $20 (Pro) | $20-150 (Team) |
| Render web | $7 | $7 | $25 (Standard) | $85 (Pro) |
| Render indexer worker | — | $7 | $7-25 | $25 |
| Render Redis | — | — | $10 | $30 |
| Supabase | $0 (Free) | $0 (Free) | $25 (Pro) | $599 (Team) |
| **Cloudflare Stream** | $5-10 (usage) | $20-80 (usage) | $300-1000 (usage) | $1000-3000 (usage) |
| AWS KMS | — | $1 | $1 | $1-5 |
| Sentry | $0 | $0 | $26 (Team) | $80 (Business) |
| BetterStack | $0 | $10 | $25 | $90 |
| Backup R2 | $1 | $2 | $5 | $20 |
| API-Football | $19 (Basic) | $19 | $49 (Pro) | $129 (Ultra) |
| RPC dédié | $0 | $0 | $50 (Ankr) | $200 (Ankr Pro) |
| Domaine | $1 | $1 | $1 | $1 |
| Cloudflare DNS | $0 | $0 | $20 (Pro) | $200 (Business) |
| **Total /mo** | **~$33-43** | **~$67-147** | **~$564-1264** | **~$2460-4460** |

Comparaison vs v2 (MediaMTX self-host) :
- Phase 0 : ~$33 v2 / ~$33-43 v3 — quasi identique (CF Stream remplace VPS $5 + R2 $1)
- Phase 2 : ~$251 v2 / ~$564-1264 v3 — **+$300-1000/mo** dû à l'usage CF Stream
- Phase 3 : ~$1410 v2 / ~$2460-4460 v3 — **+$1000-3000/mo**

**Trade-off explicite** : on paie en cash le coût ops économisé. À Phase 3
mainnet avec un haut volume de viewing, il faudra re-évaluer un retour
self-host (cluster SRS ou Ant Media) si les marges l'exigent. À court terme
(Phases 0-2), le gain ops domine largement le surcoût.

---

## Dépendances avec les plans en flight

```
                  ┌─────────────────────────────┐
                  │ Plan testing matches L1-L4  │
                  │ (IClock port + fixtures)    │
                  └──────────────┬──────────────┘
                                 │ IClock disponible
                                 ▼
        ┌────────────────────────────────────────┐
        │ Plan no-live-betting (4 couches)        │
        └──────────────┬─────────────────────────┘
                       │ BettablePolicy en place
                       ▼
        ┌────────────────────────────────────────┐
        │ Plan bet-label fix (selectionToBetLabel)│
        └──────────────┬─────────────────────────┘
                       │ market_events.line enrichi
                       ▼
        ┌────────────────────────────────────────┐
        │ Plan contracts integration full         │
        └──────────────┬─────────────────────────┘
                       │
                       ▼
  ┌──────────────────────────────────────────────────┐
  │ Plan stream lifecycle hardening                  │
  │ (peut être absorbé par migration CF Stream 0.M)  │
  └──────────────┬───────────────────────────────────┘
                 │
                 ▼
  ┌──────────────────────────────────────────────────┐
  │ DevOps Phase 0.M — Migration MediaMTX → CF Stream│ ← NOUVEAU
  └──────────────┬───────────────────────────────────┘
                 │
                 ▼
  ┌──────────────────────────────────────────────────┐
  │ DevOps Phase 1 — KMS + CI/CD + Sentry + Render   │
  │ split web/worker                                  │
  └──────────────┬───────────────────────────────────┘
                 │
                 ▼
  ┌──────────────────────────────────────────────────┐
  │ Audit smart contracts → Phase 3 mainnet          │
  └──────────────────────────────────────────────────┘
```

**Note importante** : le plan stream lifecycle hardening (B1/B2/B3) peut être
**partiellement absorbé** par la migration CF Stream :
- B1 (filter `findActiveByMatchIds` strict `live`) reste valide.
- B2 (sendBeacon + pagehide cleanup) reste valide côté browser WHIP.
- B3 (cleanup orphaned `created` + ENDED quotidien) **simplifié** car CF
  Stream émet des webhooks fiables `live_input.disconnected` — plus besoin
  du `StaleStreamCleanupJob` cron toutes les 3 min.

---

## Risques majeurs (review v3)

| # | Risque | Sévérité | Mitigation |
|---|---|---|---|
| R1 | `ADMIN_PRIVATE_KEY` toujours en clair Render env | **Critique** | Phase 1.1.1 KMS — bloquant mainnet |
| R2 | Indexers et web dans le même process Render | **Élevé** | Phase 1.3.2 split 2 services |
| R3 | Supabase Free pas de PITR + pas de backups managés | Élevé | Phase 0.A backup quotidien → Phase 2.1 Pro |
| R4 | RPC public ChilizSpicy throttle 50 req/s | Moyen (beta) → Élevé (scale) | Phase 2.5 Ankr dédié |
| R5 | **CF Stream coût qui scale en usage** | Moyen | Suivre coûts Phase 2, fallback self-host Phase 3 si nécessaire |
| R6 | Pas de CI/CD | Élevé | Phase 1.2 `ci.yml` GitHub Actions |
| R7 | Sentry absent | Élevé | Phase 0.C install immédiat |
| R8 | Pas de rollback documenté | Moyen | Phase 0.F runbook |
| R9 | Migrations Supabase manuelles | Moyen | Phase 1.3.2 preDeploy Render |
| R10 | Pas de monitoring indexer lag | Élevé | Phase 1.4 Grafana Cloud metrics |
| R11 | **CF Stream API outage** (vendor lock) | Faible (CF SLA 99.99%) | Phase 3 runbook + feature flag `STREAMING_PROVIDER` pour fallback rapide |
| R12 | **CF Stream webhook miss** = streams.status désync | Moyen | Heartbeat de réconciliation toutes les 5 min : appel `GET /live_inputs/{uid}` pour les streams marqués `live` mais sans event récent |

---

## Action items immédiats (cette semaine)

1. **Activer Cloudflare Stream** + récupérer API token + account ID (15 min)
2. **Migration MediaMTX → CF Stream** lot 0.M (~2.5 jours) — bloquant pour
   suite du beta si on veut le faire avant d'élargir
3. **Installer Sentry** front + back (3h) — `0.C`
4. **Endpoint `/healthz`** + BetterStack Uptime monitor (1h) — `0.D`
5. **Backup Supabase nightly** (script + GitHub Actions scheduled) (2h) — `0.A`
6. **Runbook rollback** `docs/runbook-rollback.md` (2h) — `0.F`
7. **GitHub Actions `ci.yml`** lint + type-check + test minimal (4h) — `1.2.1`
8. **Branch protection `main`** + required checks (15 min) — `1.3.1`

Total : ~3.5 jours (migration CF Stream incluse) pour fermer les gaps Phase
0 + démarrer Phase 1.

---

## Décisions ouvertes à confirmer

1. **Player front** : iframe embed CF Stream (rapide, analytics natifs) vs
   custom player hls.js (overlay chat custom, branding total). Reco : commencer
   iframe pour beta, custom player si le design final l'exige.
2. **Custom domain CF Stream** : `stream.chiliztv.com` CNAME vers CF Stream
   ou laisser `customer-<id>.cloudflarestream.com` pour beta. Reco : laisser
   default beta, custom domain Phase 1 quand le branding compte.
3. **Audit smart contracts** : Code4rena solo (~$8-10k) vs OZ Defender (~$12k+)
   vs ToB (~$15k+). Reco : Code4rena solo + Cantina secondary.
4. **KMS** : AWS KMS ($1/mo + per-sig) vs Fireblocks (~$1k/mo) vs Lit Protocol.
   Reco : AWS KMS Phase 1, Fireblocks Phase 3 si volume.
5. **Migration safe** : feature flag `STREAMING_PROVIDER=cloudflare|mediamtx`
   pour rollback rapide pendant la transition ? Effort ~2h, peace of mind
   non négligeable. Reco : oui, garder pendant 2 semaines puis supprimer
   le code MediaMTX.
6. **Recordings VOD** : CF Stream conserve les recordings par défaut. Choisir
   TTL — 30j pour beta, 7j prod (économise stockage), ou indéfini pour preuves
   LP/litiges. Reco : 30j par défaut, configurable par stream via `meta.retention`.

Dernière mise à jour : 2026-05-12.
