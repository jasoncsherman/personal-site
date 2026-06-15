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
