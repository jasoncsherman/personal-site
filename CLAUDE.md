# Personal Site — Project Instructions

## What this project is
Jason's personal website — a content-first "living archive" / personal signal board, not a conventional developer portfolio. Shows what he's learning, noticing, making, reading, and thinking about. Built to grow gradually and to give visitors (friends, collaborators, potential employers) a quick, honest sense of who Jason is. Inspired *in philosophy, not appearance* by Conor Luddy's site (https://www.conor.fyi/). Full vision lives in `personal-site-design-brief.md`; architecture and phases in `PLAN.md`.

## Stack
- **Astro** + TypeScript (static site generation)
- **@astrojs/mdx** — Markdown/MDX content
- **Astro content collections** (Zod-typed front matter) — no database
- Local Markdown files for all content (books, writing, projects, AI log, photos)
- Hosted on **Vercel**, auto-deploys from GitHub

> Note: Astro is a deliberate departure from Jason's usual Next.js stack — chosen because this is a content-first static site where Astro is the right-sized tool (simpler, faster, less to maintain). See `LEARNINGS.md` (Astro vs Next.js).

## Key locations
- Live URL: **https://www.jasoncsherman.com** (custom domain via Namecheap — `www` primary, apex redirects; SSL auto-issued by Vercel). Vercel URL also works: personal-site-ten-weld-11.vercel.app
- GitHub: https://github.com/jasoncsherman/personal-site (public)
- Vercel: project `personal-site`, auto-deploys from GitHub `main` on every push. **No env vars / secrets** (Open Library is keyless) — nothing to sync.
- Project plan: `PLAN.md` (in this folder)
- Design brief: `personal-site-design-brief.md` (in this folder)
- **How to add content: `HOW-TO-ADD-CONTENT.md`** (front-matter reference + a copy-paste spec for the blog-writing agent)
- Font decisions: `FONTS.md`
- Content collections: `src/content/` (one folder per section); schemas in `src/content.config.ts`
- Dev reference docs: ~/Documents/obsidian-vault/Dev Reference/

## Information architecture (sections)
Home · Writing · Photos · **Field Notes** (the AI/learning log — renamed from "AI Log", 2026-06-15) · **Bookshelf** · Projects · Now · About/Collaborate

## After completing any build phase — always do these without being asked
1. **DAILY-LOG.md** — Add an entry for the session (newest at top, TL;DR + detail sections), dated by when the work happened
2. **NEXT-STEPS.md** — Update with what was completed and what's next
3. **PROJECTS.md** — Update status and any new notes
4. **LEARNINGS.md** — Add any new concepts introduced in this phase
5. **GLOSSARY.md** — Add any new terms or acronyms
6. **COMMANDS.md** — Add any new commands used
7. **MY-TOOLS.md** — Add any new tools or packages introduced
8. **Commit and confirm** — Remind Jason to commit before ending the session (never commit/push without asking)

### Phase-specific doc triggers
| Phase | Key things to capture |
|---|---|
| Phase 0 (Setup) | Astro scaffold, MDX integration, content-collection concept, style-tile concept |
| Phase 1 (Style tile) | Design tokens (palette/type), the three visual directions, the chosen direction |
| Phase 2 (Prototype pages) | Astro layouts/components, content collections + Zod schemas, accessibility patterns |
| Phase 3 (Content + deploy) | Vercel deploy for Astro, the "How to add content" workflow doc |

## Watch out for
- **Git author email** — commits must be authored with `43613986+jasoncsherman@users.noreply.github.com` (verified configured 2026-06-15). Wrong email breaks Vercel deploys.
- **npm audit noise** — the esbuild/Vite dev-server advisories flagged at scaffold are dev-only and low-risk; do **not** run `npm audit fix --force` (it would downgrade Astro to v2). Wait for upstream bumps. See `LEARNINGS.md`.
- **Content schema is validated** — adding a content file with a bad front-matter value (e.g. a `status` that isn't in the allowed list) will fail the build loudly. That's intended; fix the front matter.
- **No fabricated content** — never invent biographical claims, achievements, locations, or history. Use clearly-marked placeholders where Jason hasn't supplied copy.
- **Don't imitate Conor's site** — influence at the level of philosophy only, not layout/palette/type/icons.

## Do not wait to be asked
Update docs as part of completing each phase — not after Jason reminds you.
