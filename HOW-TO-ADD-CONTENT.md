# How to Add Content

A plain-language guide to adding things to your site — books, writing, projects, field notes, photo albums. No coding required; it's all Markdown files, the same kind you write in Obsidian.

---

## The big idea (read this once)

- **Each piece of content is one Markdown file.** A book is a file. A blog post is a file. A project is a file.
- **Folders are sections.** Every file inside `src/content/writing/` shows up on the Writing page; everything in `src/content/bookshelf/` shows up on the Bookshelf; and so on.
- **The top of each file (between the `---` lines) is "front matter"** — labelled fields the site uses to sort and display the entry. The part below the second `---` is the content itself.
- **The filename becomes the web address.** `learning-in-public.md` in the writing folder becomes `yoursite.com/writing/learning-in-public/`. Use lowercase-words-with-dashes (called "kebab-case").

All content lives under this folder:
```
/Users/jasoncsherman/Documents/obsidian-vault/personal-site/src/content/
```

To **see your changes**, run `npm run dev` in the project folder and open the local link. To **publish**, commit and push (once deployment is set up).

---

## Where each type lives

| To add a… | Put a `.md` file in… | Shows up on |
|---|---|---|
| Blog post / note | `src/content/writing/` | `/writing` |
| Book | `src/content/bookshelf/` | `/bookshelf` |
| Project | `src/content/projects/` | `/projects` |
| Field note (AI/learning log) | `src/content/field-notes/` | `/field-notes` |
| Photo album | `src/content/photos/` | `/photos` |

> If you type a front-matter value that isn't allowed (for example a `status` that doesn't exist), the site will refuse to build and tell you exactly which file and field is wrong. That's a feature — it catches typos instead of silently breaking a page.

---

## ⭐ For the blog-writing agent (hand this over)

You can paste the block below directly to the other agent that's turning your daily-log entries into blog posts.

> **Where to save:** Each blog post is a separate Markdown file in
> `/Users/jasoncsherman/Documents/obsidian-vault/personal-site/src/content/writing/`
>
> **Filename:** kebab-case of the title, ending in `.md` — e.g. a post titled
> "Notes on learning in public" → `learning-in-public.md`. This becomes the URL
> `/writing/learning-in-public/`. Keep filenames unique.
>
> **Front matter** (between the `---` lines at the very top):
> - `title:` (required) — the post title, in quotes.
> - `type:` — one of `Note`, `Essay`, `Reflection`. Default `Note`. (Short
>   AI/learning entries are **field notes** — a separate section with its own
>   spec below, not a `type` here.)
> - `topic:` (optional) — a short subject tag, e.g. `"Learning"`, `"Systems"`.
> - `published:` (required) — the date the work/events happened (NOT the day it
>   was rewritten), format `YYYY-MM-DD`, e.g. `2026-06-12`.
> - `updated:` (optional) — `YYYY-MM-DD` if revised later.
> - `status:` — `published` or `draft`. Use `draft` for anything unfinished.
>   Default `published`.
> - `excerpt:` (optional) — a single-sentence summary, shown in the writing list.
>
> **Body:** the post content in Markdown below the closing `---`. Use `##` for
> section subheadings, blank lines between paragraphs, and `-` for bullet lists.
>
> **Rules:** Don't invent facts, opinions, or events — base each post only on the
> source daily-log content. Date each post by when the events happened. One post
> per file.

### Example writing file

`src/content/writing/learning-in-public.md`:
```markdown
---
title: "Notes on learning in public"
type: "Note"
topic: "Learning"
published: 2026-06-12
status: "draft"
excerpt: "What changes when you publish the unfinished thing — and why the discomfort is most of the point."
---

When you publish something half-formed, you trade the comfort of privacy for the
pressure of an audience. That pressure is the point.

## What I'm noticing

- The fear of being wrong in public shrinks the more you do it.
- Half-finished thoughts attract better feedback than polished ones.
```

---

## ⭐ For the field-notes agent (hand this over)

Field Notes are the AI/learning log. Each note renders in three parts, top to bottom: a **metadata line** (date · tool · mode · confidence), the **note body**, and a one-line **Lesson** at the end. Paste the block below to the agent that turns your learning moments into field notes.

> **Where to save:** Each field note is a separate Markdown file in
> `/Users/jasoncsherman/Documents/obsidian-vault/personal-site/src/content/field-notes/`
>
> **Filename:** kebab-case of the title, ending in `.md` — e.g. a note titled
> "Typed content with collections" → `content-collections.md`. This becomes the
> URL `/field-notes/content-collections/`. Keep filenames unique.
>
> **Front matter** (between the `---` lines at the very top):
> - `title:` (required) — the note title, in quotes.
> - `date:` (required) — the date the learning happened (NOT the day it was
>   written up), format `YYYY-MM-DD`. Notes sort newest first.
> - `tool:` (optional) — the tool/tech it's about, in quotes, e.g. `"Astro"`,
>   `"Claude Code"`. Shown in the metadata line.
> - `mode:` (optional) — one of `learning`, `workflow`, `reflection`,
>   `experiment`. Default `learning`. Pick the one that fits: `learning` =
>   grasping a new concept; `workflow` = a way of working; `reflection` = a
>   change in thinking/taste; `experiment` = tried something to see what happens.
> - `confidence:` (optional) — one of `low`, `growing`, `solid`. How sure you
>   are you've actually internalized it.
> - `keyLesson:` (optional but encouraged) — the ONE-LINE takeaway, in quotes.
>   This is the "Lesson" line at the bottom of the note. Keep it to a single
>   plain sentence — a portable rule of thumb, not a summary of the note.
> - `status:` — `published` or `draft`. Default `published`. Set generated/
>   unreviewed notes to `draft`; drafts are visible in `npm run dev` but hidden
>   from the live site until flipped to `published`.
>
> **Body:** the note itself in Markdown below the closing `---`. Keep it short
> and human — a paragraph or two, first-person, what you tried and what changed.
> This is a personal log, not documentation.
>
> **Rules:** Don't invent facts, tools, or events — base each note only on what
> actually happened. Date by when the learning happened. One note per file. The
> `keyLesson` must be a genuine takeaway from the body, not a restatement of the
> title.

> **Daily Log backfill workflow:** When converting entries from
> `/Users/jasoncsherman/Documents/obsidian-vault/Dev Reference/DAILY-LOG.md`,
> treat this field-note spec as the source of truth. Start with a small pilot
> before converting the whole archive; for the initial pilot, use the oldest five
> entries from the bottom of the daily log and work upward. Preserve technical
> and learning details, but omit or generalize private names, job-search details,
> emotional context that is too raw for the public site, credentials, secrets,
> and internal Obsidian links. Generated notes should default to `status: "draft"`
> until reviewed.
>
> **Conversion index:** Maintain a non-content index at the project root:
> `/Users/jasoncsherman/Documents/obsidian-vault/personal-site/FIELD-NOTES-CONVERSION-INDEX.md`.
> Track each source entry as it is converted so future agents can resume safely.
> Suggested columns: `Source date`, `Note date`, `Title`, `Filename`, `Tool`,
> `Mode`, `Confidence`, `Status`, `Key lesson`, `Notes`. Do not put the index
> inside `src/content/field-notes/`, because that folder is for public note files.

### Example field-note file

`src/content/field-notes/content-collections.md`:
```markdown
---
title: "Typed content with collections"
date: 2026-06-15
tool: "Astro content collections"
mode: "experiment"
confidence: "growing"
keyLesson: "Let the schema catch your typos."
---

Moved the bookshelf to typed Markdown files with a schema. A bad value (say, a
status that isn't in the allowed list) now fails the build loudly instead of
silently breaking a page — surprisingly reassuring.
```

This renders as:

```
2026·06·15 · Astro content collections · experiment · growing confidence

Typed content with collections
Moved the bookshelf to typed Markdown files with a schema. A bad value now
fails the build loudly instead of silently breaking a page…

Lesson  Let the schema catch your typos.
```

---

## Full front-matter reference (every collection)

### Writing — `src/content/writing/`
| Field | Required? | Values / format |
|---|---|---|
| `title` | ✅ | text in quotes |
| `type` | – | `Note` · `Essay` · `Reflection` (default `Note`) |
| `topic` | – | short text |
| `published` | ✅ | `YYYY-MM-DD` |
| `updated` | – | `YYYY-MM-DD` |
| `status` | – | `published` · `draft` (default `published`) |
| `excerpt` | – | one sentence |

### Bookshelf — `src/content/bookshelf/`
Most details (title, author, cover, year, page count) are pulled automatically from **Open Library** using the ISBN — you usually only write the ISBN, the status, and your note.
| Field | Required? | Values / format |
|---|---|---|
| `isbn` | ✅ (recommended) | the book's 13-digit ISBN in quotes, e.g. `"9780374159122"` |
| `status` | ✅ | `reading` · `tbr` · `read` · `abandoned` |
| `finished` | – | `YYYY-MM-DD` — used to sort the Read shelf |
| `started` | – | `YYYY-MM-DD` |
| `rating` | – | a number `1`–`5` |
| `title` | – | **override** the fetched title (e.g. if Open Library has a translated/odd one) |
| `author` | – | **override** the fetched author |

Body = your short "why it mattered" note (optional).

**Finding an ISBN:** look on the back cover near the barcode (the `978…`/`979…` number), or search the title on Google/Amazon/openlibrary.org and copy the ISBN-13. If a cover looks wrong or blank, try a different edition's ISBN, or set `title`/`author` manually.

### Projects — `src/content/projects/`
| Field | Required? | Values / format |
|---|---|---|
| `title` | ✅ | text |
| `status` | ✅ | `forming` · `exploring` · `active` · `paused` · `shipped` · `revisiting` |
| `kind` | – | short text, e.g. `"Personal system"` |
| `started` | – | `YYYY-MM-DD` |
| `motivation` | – | one line — why it exists |
| `currentQuestion` | – | one line — what you're figuring out |
| `nextStep` | – | one line |
| `order` | – | a number; lower numbers sort first (default 0) |

Body = a short description (optional).

### Field Notes — `src/content/field-notes/`
| Field | Required? | Values / format |
|---|---|---|
| `title` | ✅ | text |
| `date` | ✅ | `YYYY-MM-DD` (sorted newest first) |
| `tool` | – | e.g. `"Astro"`, `"Claude Code"` |
| `mode` | – | `learning` · `workflow` · `reflection` · `experiment` (default `learning`) |
| `confidence` | – | `low` · `growing` · `solid` |
| `keyLesson` | – | one-line takeaway (renders as the "Lesson" line) |
| `status` | – | `published` · `draft` (default `published`; drafts hidden from the live site) |

Body = the note itself.

### Photos — `src/content/photos/`
| Field | Required? | Values / format |
|---|---|---|
| `title` | ✅ | text |
| `place` | – | text |
| `dateOrSeason` | – | free text, e.g. `"Winter 2026"` |
| `mood` | – | text |
| `theme` | – | text, e.g. `"Light"`, `"Places"` |
| `whyItMatters` | – | one line |

> Real photo images aren't wired up yet — albums show a placeholder for now. We'll connect image files in a later pass.

---

## Previewing and publishing

1. **Preview:** in the project folder, run `npm run dev`, open the local link, and check your new entry. The site updates as you save.
2. **Publish:** commit the new file(s) to git and push. (Deployment will auto-publish once it's set up — see PLAN.md.)

That's it — add a file, see it appear, push it live.
