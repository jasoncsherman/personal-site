# Personal Site — Build Plan

## Context

Jason is starting his personal website — a portfolio-adjacent project that doubles as a job-search asset. Unlike his data-driven apps (Running Dashboard, Job Leads Tracker), this is a **content-first "living archive"**: a quiet personal signal board showing what he's learning, noticing, making, reading, and thinking about. The vision is captured in detail in his existing design brief (`personal-site-design-brief.md`), written with Codex from a prior conversation, inspired *in philosophy, not appearance* by Conor Luddy's site (https://www.conor.fyi/).

Today's session refined that brief in three ways: (1) added a **Bookshelf** section, (2) folded in a subtle **resume** link, and (3) chose **Astro** over the brief's tentative Astro-vs-Next.js framing. This plan turns the brief + today's decisions into an executable build.

**Definition of done (V1):** A deployed, accessible, fast Astro site with the full section shell in place, one chosen visual direction applied, a small amount of real/placeholder content, and a documented plain-language workflow for Jason to add content himself.

## Decisions locked this session

| Decision | Choice | Why |
|---|---|---|
| Framework | **Astro** | Right tool for a content-first static site; low learning cost (fundamentals transfer); minimal maintenance; "right tool for the job" is a strong portfolio signal alongside his Next.js apps. |
| Content model | **Local Markdown/MDX** with front matter | No database/API keys to break; same Markdown Jason writes in Obsidian; portable, version-controlled. |
| Hosting | **Vercel**, free `*.vercel.app` URL for V1 | His established deploy path; custom domain deferred — no rush. |
| Theme / look | **Decide from the style tile** | Build 3 coded visual directions, pick when seen side by side. |
| Sections | **All** sections shelled in V1 (incl. new Bookshelf) | Jason wants the full structure present even where content comes later. |

## Information architecture

From the brief, plus the new Bookshelf section:

- **Home** — personal billboard + index: name, positioning statement, current focus, selected recent writing/photos/projects/AI-log/reading, restrained invitation to connect.
- **Writing** — notes, essays, reflections, field notes.
- **Photos** — personal albums (Places, Walks, Travel, Light, etc.), each conveying *why* it matters.
- **AI Log** — chronological/thematic record of building his AI skill set; reflective, not technical docs.
- **Bookshelf** *(new)* — books Read / Currently reading / TBR / Abandoned, with a short "why it mattered" note per book.
- **Projects** — personal systems and experiments (incl. this site); status-tagged.
- **Now** — lightweight, frequently-updated snapshot of present attention.
- **About / Collaborate** — concise background, how he works, contact, and a subtle downloadable **resume** link (kept understated to honor the brief's anti-resume tone).

## Content schema (Markdown front matter)

One file per item, grouped in content collections. Representative schemas:

**Bookshelf** (`src/content/bookshelf/*.md`):
```
title, author, status (read|reading|tbr|abandoned),
finished (date, optional), rating (1–5, optional), cover (image, optional)
→ body = "why it mattered" note
```

**Writing** (`src/content/writing/*.md`): `title, type, topic, published, updated, readingTime, status`
**AI Log** (`src/content/ai-log/*.md`): `date, tool, mode (learning|workflow|reflection|experiment), confidence, status, keyLesson`
**Projects** (`src/content/projects/*.md`): `kind, status (forming|exploring|active|paused|shipped|revisiting), started, motivation, currentQuestion, nextStep`
**Photos** (`src/content/photos/*.md`): `place, dateOrSeason, mood, theme, whyItMatters` + associated image folder
**Now / About**: single Markdown pages.

Use Astro **content collections** with a typed schema (Zod) per collection so front matter is validated — adding a book with a typo'd status fails loudly instead of breaking the page.

## Edits to the design brief (do at execution, then file into project)

The brief can only be edited once we exit plan mode. Planned edits:
1. **Add a Bookshelf section** to: Information Architecture, Homepage narrative (selected reading), Metadata System (book schema above), Core Components (book/shelf-item, shelf-status label), Content Strategy initial-archive list (add "2–3 books"), Navigation.
2. **Add resume note** under About/Collaborate: a subtle downloadable PDF link, deliberately understated.
3. **Resolve the stack question**: update Technical Direction to record **Astro chosen** (and why), so the brief reflects the actual decision.
4. **File the brief** into the new project folder: move `personal-site-design-brief.md` → `~/Documents/obsidian-vault/personal-site/personal-site-design-brief.md`.

## Build phases

### Phase 0 — Project setup
- Confirm git identity (`git config --global user.email` / `user.name`); set to the noreply address + "Jason Sherman" if unset.
- Scaffold Astro project at `~/Documents/obsidian-vault/personal-site/` (Astro + TypeScript, MDX integration, image optimization).
- Create project **CLAUDE.md** and **PLAN.md** (copy this plan in), per the running-dashboard templates.
- Apply the brief edits above; move the brief into the folder.
- Update `Dev Reference/PROJECTS.md`: Personal Website → **In Progress**, stack = Astro.
- Initialize git; first commit (after `git status` review, with Jason's OK).

### Phase 1 — Style tile (review gate)
- Build one real, browser-viewable `/style-tile` page presenting **three visual directions** from the brief: *Quiet dark archive*, *Warm editorial notebook*, *Minimal photo-forward index*.
- Each shows palette swatches, typography roles, navigation treatment, and sample components (book entry, writing item, project card, metadata row, contact block).
- **Stop and let Jason pick** before building full pages (per brief's First Command). Theme (dark/light) gets decided here.

### Phase 2 — Prototype pages
After Jason selects a direction, build the section shell using shared components:
- Layout + compact navigation + footer + skip-link.
- Home, Writing index, Photos index, AI Log index, **Bookshelf index** (grouped by shelf status), Projects index, Now, About/Collaborate.
- One representative detail page (e.g. a writing entry) to prove the article template.
- Core reusable components per brief (nav, section heading, index item, metadata row/table, status label, entry cards, contact block).
- Accessibility baked in: semantic HTML, heading order, visible focus, alt text, `prefers-reduced-motion`.

### Phase 3 — Content + deploy
- Seed a small honest archive (per brief: ~1 of each page, 2 writing, 2 photo albums, 2 AI-log, 1–2 projects, **2–3 books**); clearly-marked placeholders where copy is missing. No fabricated bio/achievements.
- Write a plain-language **"How to add content" doc** (add a book / note / project / album, step by step).
- Deploy to Vercel (free URL); update CLAUDE.md + PROJECTS.md with the live URL and repo.

## Documentation plan (per established patterns)

New stack ⇒ document as we go:
- **GLOSSARY.md** — add "Astro", "content collection", "front matter", "style tile", "static site generation".
- **LEARNINGS.md** — Astro vs Next.js trade-off (why Astro here); content-collections pattern.
- **DAILY-LOG.md** — entry at end of session (dated by work date, newest on top).
- **PROJECTS.md** — status + stack + live URL.
- **COMMANDS.md / MY-TOOLS.md** — any new Astro CLI commands / tools installed.
- **INDEX.md** — if any new reference doc is added.
- Project **CLAUDE.md** carries the per-phase doc-update reminders forward across sessions.

## Verification

- `npm run dev` → all section routes load with no console/type errors; content-collection schemas validate.
- Style tile renders all three directions in the browser for side-by-side comparison (Phase 1 gate).
- Keyboard-only pass: skip-link works, focus visible, nav operable; check color contrast; reduced-motion respected.
- Lighthouse (or equivalent) on Home: confirm fast + accessible before deploy.
- Post-deploy: visit the Vercel URL, confirm every section loads and nav works live.
- Jason follows the "How to add content" doc to add one new book unaided — proves the maintenance workflow.

## Deferred (not in V1)

- Custom domain (attach later).
- Importing books/photos from external services (Goodreads/StoryGraph, etc.) — API keys/maintenance; revisit in V2 once the site proves it earns upkeep.
- CMS, auth, database, analytics, comments, newsletter (per brief).

## Future section / feature ideas (backlog)

Captured 2026-06-15. Not committed for any phase yet — parking lot for ideas to flesh out and prioritize later. Each note records what it is, where the data would come from, feasibility, and open questions.

### 1. Running section
- **What it is:** A section surfacing Jason's running — could be a lightweight "recently ran" feed, summary stats (weekly/monthly mileage, pace trends), or a few highlighted routes/races with a short "why it mattered" note in the same reflective voice as the rest of the site.
- **Data source:** Strava. There's already a connected Strava integration available in this workspace (athlete profile, activity list, per-activity stats/streams, gear, zones), and Jason has a separate "Running Dashboard" app — so the data plumbing is a known quantity.
- **Feasibility:** Medium. The tension is the site's content-first, no-database, no-API-keys principle (see Decisions + Deferred). Two honest options: **(a) static snapshot** — periodically pull from Strava and commit a small Markdown/JSON file of recent runs (stays true to the static, no-secrets model; manual or scripted refresh); **(b) live fetch** — call Strava at build time or runtime, which reintroduces an API token + maintenance, the exact thing V1 deliberately avoided. Lean (a) for V1-style purity.
- **Open questions:** How much is enough — a single "Now"-style line ("running ~20mi/week, training for X") vs a full stats section? Does this overlap with the Running Dashboard app (link out to it instead of rebuilding)? How fresh does it need to be — does a monthly committed snapshot feel honest, or stale?

### 2. Travel section
- **What it is:** A place section for trips — could be a map, a list of places with dates and a short reflection each, or photo-led entries. Note the brief already imagines Photos albums like "Places / Travel," so this may be a **facet of Photos rather than a standalone section** — worth deciding which.
- **Data source:** Manual, Markdown-first (consistent with the rest of the site). Optionally a coordinates field per entry if a map is wanted.
- **Feasibility:** Easy as a content collection (new `travel` collection or a `theme: travel` tag on Photos). A map adds scope: a static styled map image is cheap; an interactive map (Leaflet/MapLibre) is more JS + a tile source to maintain — counter to the lean-static ethos. Could start mapless and add one later.
- **Open questions:** Standalone section, or a Travel view/tag inside Photos? Map or no map for V1? Organize by trip, by place, or chronologically? Privacy — comfortable publishing locations/dates, and any to keep vague?

### Open IA question: "field note" means two things
- **The problem:** "Field note" is currently doing two unrelated jobs. It's (a) the name of a whole section — **Field Notes**, which is the renamed AI/learning log (schema: `tool`, `mode`, `confidence`, `keyLesson`; a dated record of the learning *process*) — and also (b) one of the `type` values in the **Writing** collection's enum (`Note | Essay | Reflection | Field note`). One Writing entry, `tools-that-earn-their-keep.md`, is tagged `type: "Field note"`, so it reads as the same thing as the Field Notes section but lives under Writing.
- **Intended distinction:** Writing = outward-facing thinking (essays/notes/reflections about ideas and tools); Field Notes = inward-facing process (dated log of learning/building, especially the AI work). The collision blurs that line.
- **Options to resolve (deferred — explained 2026-06-15, no change made yet):** (a) reserve "Field Notes" for the learning log only — drop "Field note" from the Writing `type` enum and retag that one entry as `Note`/`Reflection`; or (b) keep "field note" as a Writing type and rename the log section to something distinct (e.g. "Learning Log", "Workshop", "Lab").
- **Status:** Parked. Nothing broken; the one seam entry just reads ambiguously until a direction is picked.

### 3. GitHub contribution heatmap
- **What it is:** The familiar calendar-grid "contribution graph" (the green squares) embedded on the site — likely on Home or About — as a quiet signal of consistent building.
- **Data source:** GitHub. The public contribution data for `jasoncsherman` can be rendered without auth via a few routes: a third-party SVG/image service (zero-maintenance, but an external dependency + their styling), or a build-time fetch of the contributions and self-render to match the site's palette (more control, fits the design system, slightly more code).
- **Feasibility:** Easy–medium. Static SVG embed is trivial. Self-rendered-to-match-theme is the nicer-looking, on-brand option and still modest. Either avoids a runtime secret (public data).
- **Open questions:** Where does it live — Home, About, or a Projects header? Match the chosen site palette (recommended) or accept an off-the-shelf green grid? Refresh cadence — build-time only (updates on each deploy) good enough, or does it need to feel live? Does a code-activity graph fit the site's anti-resume, "living archive" tone, or read too much like a dev portfolio (the one thing the brief steers away from)?
