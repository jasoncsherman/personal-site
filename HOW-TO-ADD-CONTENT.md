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
> - `type:` — one of `Note`, `Essay`, `Reflection`, `Field note`. Default `Note`.
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

## Full front-matter reference (every collection)

### Writing — `src/content/writing/`
| Field | Required? | Values / format |
|---|---|---|
| `title` | ✅ | text in quotes |
| `type` | – | `Note` · `Essay` · `Reflection` · `Field note` (default `Note`) |
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
| `keyLesson` | – | one-line takeaway |

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
