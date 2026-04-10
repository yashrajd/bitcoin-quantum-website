# Bitcoin Quantum Hub — Agent Context

Auto-generated sections are between `<!-- AUTO-GENERATED -->` marker comments. Run `node scripts/update-agents-md.js` to refresh them.

## Project Overview

Bitcoin Quantum Hub is an educational website about quantum computing threats to Bitcoin and post-quantum cryptographic solutions. Vue 3 SPA with client-side routing, deployed to Vercel. GPL v3.0 license.

## Tech Stack

- **Framework:** Vue 3 (Composition API, `<script setup>`)
- **Build Tool:** Vite 7
- **Routing:** Vue Router 4 (HTML5 history mode, lazy-loaded routes)
- **Head Management:** @vueuse/head (SEO meta tags)
- **Styling:** CSS Variables theme system (dark default, light toggle) — no Tailwind, no CSS framework
- **State Management:** None (no Pinia/Vuex)
- **Deployment:** Vercel with SPA rewrite config (`vercel.json`)

## Development

```bash
npm install        # Install dependencies (Node 18+ required)
npm run dev        # Dev server at http://localhost:5173
npm run build      # Production build to dist/
npm run preview    # Preview build at localhost:4173+ (auto port detection)
./scripts/build-and-preview.sh  # Build + preview with readiness detection
```

Pre-build hooks (`predev`, `prebuild`) auto-run `scripts/generate-build-info.js` (writes `VITE_LAST_UPDATED` to `.env` from git) and `scripts/reminder-agents-md.js` (prints a reminder to regenerate AGENTS.md if routes or components changed).

## Architecture

- **SPA** with client-side routing; `vercel.json` has catch-all rewrite for direct URL access
- **Layout:** `App.vue` → `MainLayout.vue` → `SiteHeader` + `<router-view>` (with fade transitions) + `SiteFooter`
- **Routing:** All routes lazy-loaded via `() => import(...)`. Routes defined in `src/router/index.js` with `meta: { title, description }` for SEO. Nav guard updates `document.title` and meta description on route change.
- **Theme:** `useTheme()` composable in `src/composables/useTheme.js`. Dark by default. Toggles `data-theme="light"` on `<html>`. Persisted to localStorage under key `bitcoin-quantum-hub-theme`.
- **Logger:** `src/utils/logger.js`. Debug level in dev, warn+ in prod. Prefix: `[BitcoinQuantumHub]`.
- **Build info:** `scripts/generate-build-info.js` runs on predev/prebuild, writes `VITE_LAST_UPDATED` to `.env` from `git log master`.

## Directory Map

```
src/
├── App.vue              # Root component (imports MainLayout)
├── main.js              # App entry point
├── components/          # Reusable Vue components
├── composables/         # useTheme.js
├── content/             # Data files (media.js, news.js)
├── layouts/             # MainLayout.vue
├── pages/               # Route-level components (organized by section)
├── router/              # index.js — all routes + nav guards
├── styles/              # variables.css (theme system + global styles)
└── utils/               # logger.js

public/images/           # Static images
scripts/                 # generate-build-info.js, build-and-preview.sh, update-agents-md.js, reminder-agents-md.js
vercel.json              # SPA rewrite + security headers
index.html               # HTML shell with CSP meta tag
```

## Route → File Mapping

<!-- AUTO-GENERATED:routes START -->
| Route Path | Route Name | Component File |
|---|---|---|
| `/` | Home | `src/pages/Home.vue` |
| `/learn` | Learn | `src/pages/learn/Index.vue` |
| `/learn/quantum-computing-101` | QuantumComputing101 | `src/pages/learn/QuantumComputing101.vue` |
| `/learn/quantum-computing-101/history` | QuantumHistory | `src/pages/learn/QuantumHistory.vue` |
| `/learn/quantum-computing-101/glossary` | QuantumGlossary | `src/pages/learn/QuantumGlossary.vue` |
| `/learn/quantum-computing-101/recent-developments` | RecentDevelopments | `src/pages/learn/RecentDevelopments.vue` |
| `/learn/threat-to-bitcoin` | ThreatToBitcoin | `src/pages/learn/ThreatToBitcoin.vue` |
| `/learn/threat-to-bitcoin/bitcoin-cryptography` | BitcoinCryptography | `src/pages/learn/BitcoinCryptography.vue` |
| `/learn/threat-to-bitcoin/quantum-impact` | QuantumImpact | `src/pages/learn/QuantumImpact.vue` |
| `/learn/threat-to-bitcoin/address-vulnerability` | AddressVulnerability | `src/pages/learn/AddressVulnerability.vue` |
| `/learn/timeline` | Timeline | `src/pages/learn/Timeline.vue` |
| `/learn/timeline/expert-perspectives` | ExpertPerspectives | `src/pages/learn/ExpertPerspectives.vue` |
| `/learn/timeline/government-deadlines` | GovernmentDeadlines | `src/pages/learn/GovernmentDeadlines.vue` |
| `/solutions` | Solutions | `src/pages/solutions/Index.vue` |
| `/solutions/post-quantum-cryptography` | PostQuantumCryptography | `src/pages/solutions/PostQuantumCryptography.vue` |
| `/solutions/post-quantum-cryptography/hash-based` | HashBasedSignatures | `src/pages/solutions/HashBasedSignatures.vue` |
| `/solutions/post-quantum-cryptography/lattice-based` | LatticeBasedCryptography | `src/pages/solutions/LatticeBasedCryptography.vue` |
| `/solutions/post-quantum-cryptography/hybrid` | HybridModels | `src/pages/solutions/HybridModels.vue` |
| `/solutions/bitcoin-proposals` | BitcoinProposals | `src/pages/solutions/BitcoinProposals.vue` |
| `/solutions/bitcoin-proposals/bip-360` | BIP360Brief | `src/pages/solutions/BIP360Brief.vue` |
| `/solutions/bitcoin-proposals/bip-347` | BIP347 | `src/pages/solutions/BIP347.vue` |
| `/solutions/bitcoin-proposals/other` | OtherProposals | `src/pages/solutions/OtherProposals.vue` |
| `/solutions/migration` | Migration | `src/pages/solutions/Migration.vue` |
| `/solutions/migration/individuals` | MigrationForIndividuals | `src/pages/solutions/MigrationForIndividuals.vue` |
| `/solutions/migration/institutions` | MigrationForInstitutions | `src/pages/solutions/MigrationForInstitutions.vue` |
| `/bip-360` | BIP360Hub | `src/pages/bip360/Index.vue` |
| `/bip-360/overview` | BIP360Overview | `src/pages/bip360/Overview.vue` |
| `/bip-360/technical` | BIP360Technical | `src/pages/bip360/Technical.vue` |
| `/bip-360/status` | BIP360Status | `src/pages/bip360/Status.vue` |
| `/bip-360/user-guide` | BIP360UserGuide | `src/pages/bip360/UserGuide.vue` |
| `/bip-360/developers` | BIP360Developers | `src/pages/bip360/Developers.vue` |
| `/resources` | Resources | `src/pages/resources/Index.vue` |
| `/resources/faq` | FAQ | `src/pages/resources/FAQ.vue` |
| `/resources/reading-list` | ReadingList | `src/pages/resources/ReadingList.vue` |
| `/resources/reading-list/academic-and-government-publications` | AcademicAndGovernmentPublications | `src/pages/resources/AcademicAndGovernmentPublications.vue` |
| `/resources/reading-list/expert-opinion` | ExpertOpinion | `src/pages/resources/ExpertOpinion.vue` |
| `/resources/reading-list/technical` | TechnicalDocumentation | `src/pages/resources/TechnicalDocumentation.vue` |
| `/resources/external-links` | ExternalLinks | `src/pages/resources/ExternalLinks.vue` |
| `/resources/media` | Media | `src/pages/resources/Media.vue` |
| `/news` | News | `src/pages/news/Index.vue` |
| `/about/project` | AboutProject | `src/pages/about/Project.vue` |
| `/about/contact` | Contact | `src/pages/about/Contact.vue` |
| `/privacy` | Privacy | `src/pages/legal/Privacy.vue` |
| `/terms` | Terms | `src/pages/legal/Terms.vue` |
| `/:pathMatch(.*)*` | NotFound | `src/pages/NotFound.vue` |

<!-- AUTO-GENERATED:routes END -->

Note: `/about` redirects to `/about/project`.

## Components

<!-- AUTO-GENERATED:components START -->
| Component | File |
|---|---|
| Breadcrumbs | `src/components/Breadcrumbs.vue` |
| Callout | `src/components/Callout.vue` |
| ContentCard | `src/components/ContentCard.vue` |
| GitHubLink | `src/components/GitHubLink.vue` |
| MediaCard | `src/components/MediaCard.vue` |
| NavigationCard | `src/components/NavigationCard.vue` |
| PageContainer | `src/components/PageContainer.vue` |
| PathwayCard | `src/components/PathwayCard.vue` |
| SiteFooter | `src/components/SiteFooter.vue` |
| SiteHeader | `src/components/SiteHeader.vue` |
| ThemeToggle | `src/components/ThemeToggle.vue` |

<!-- AUTO-GENERATED:components END -->

## Content Authoring

### News Items (`src/content/news.js`)

- Export: `newsItems` const array
- Fields per item:
  - `date` — Display string, e.g. `'January 2026'`
  - `title` — News headline
  - `excerpt` — Brief summary
  - `link` — Router path (e.g. `'/news/nist-standards'`)
- Helpers: `getLatestNews(count?)` returns sorted items (newest first). `getAllNews()` returns all sorted.
- Items are sorted by date internally; display order in templates uses these helpers.

### Media Items (`src/content/media.js`)

- Export: `mediaItems` const array
- Fields per item:
  - `id` — Unique kebab-case identifier
  - `title` — Display title
  - `type` — `'video'` or `'audio'`
  - `url` — External link to the media
  - `thumbnail` — `null` for auto-generated YouTube thumbnails; provide URL string for other platforms; falls back to `/images/media-placeholder.svg`
  - `date` — ISO date string `'YYYY-MM-DD'`
  - `featured` — Boolean; featured items appear on homepage
  - `source` — Optional source name shown as badge
- YouTube thumbnail auto-generation: `MediaCard` component extracts video ID from URL and constructs `https://img.youtube.com/vi/{ID}/hqdefault.jpg`. Supported URL formats: `youtube.com/watch?v=`, `youtu.be/`, `youtube.com/embed/`.
- Helpers: `getFeaturedMedia(count?)` returns featured items (newest first), backfills with non-featured if needed. `getAllMedia()` returns all sorted newest first.

## Code Conventions

- JSDoc comments on all functions and classes; file-header block comments on components and modules — follow the style already present in the codebase
- Composition API with `<script setup>`
- All new routes must be lazy-loaded: `component: () => import('../pages/...')`
- All routes must include `meta: { title, description }`
- Relative imports only — `@` alias is NOT configured
- Scoped styles per component; global variables from `src/styles/variables.css`
- Semantic HTML + ARIA labels on interactive elements
- Theme toggling uses `useTheme()` composable; CSS variables toggle via `data-theme="light"` attribute on `<html>`
- CSS variable naming: `--category-variant` (e.g. `--bg-primary`, `--text-secondary`, `--accent-primary`)
- Font stack: system sans-serif for body, system monospace for code

## Git Commit Style

- Natural language imperative: "Add X", "Remove Y", "Update Z"
- No conventional commit prefixes (no `feat:`, `fix:`, etc.)
- Concise, one line, sentence case
- Optional body: blank line after subject, then bullet points describing the specific changes made

## Common Tasks

- **Add a page:** Create `.vue` file in `src/pages/<section>/`, add route in `src/router/index.js` with `meta: { title, description }`, rebuild route table in AGENTS.md via `node scripts/update-agents-md.js`
- **Add news:** Add object to `newsItems` array in `src/content/news.js`
- **Add media:** Add object to `mediaItems` array in `src/content/media.js`
- **Add a component:** Create `.vue` file in `src/components/`, import where needed, rebuild components table via `node scripts/update-agents-md.js`
- **Modify theme:** Edit CSS variables in `src/styles/variables.css`
- **Modify navigation:** Edit `navItems` in `src/components/SiteHeader.vue` AND `footerNav` in `src/components/SiteFooter.vue` — both must be updated to stay in sync
- **Change layout:** Edit `src/layouts/MainLayout.vue`

## Gotchas

- **Dual navigation source:** SiteHeader.vue (`navItems`) and SiteFooter.vue (`footerNav`) both define navigation links independently. Always update both.
- **SPA routing:** Direct URL access requires server-side rewrite. `vercel.json` handles this in production. In dev, Vite handles it automatically.
- **Theme always defaults to dark:** Even if system preference is light, `useTheme.js` defaults to dark (terminal aesthetic).
- **No `@` import alias:** Use relative paths like `../../components/PageContainer.vue`.
- **`@vueuse/head` for meta:** Use `useHead()` composable in page components for `<title>` and `<meta>` tags, NOT the router meta alone. Router meta is used by the global nav guard as a fallback.
- **CSP allows `img.youtube.com`:** Required for YouTube thumbnail auto-generation in MediaCard.
- **`.env` is gitignored:** `scripts/generate-build-info.js` writes `VITE_LAST_UPDATED` there. The file is regenerated on every dev/build run.
- **`/about` redirects** to `/about/project` via route config.