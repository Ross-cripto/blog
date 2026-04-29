# Blog — Rosniel

Personal blog. Markdown files in git, no DB, no admin, no auth. To publish: add file, push.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript strict
- Tailwind v4 via `@tailwindcss/postcss` (no `tailwind.config`)
- `gray-matter` for frontmatter, `marked` for HTML
- Fonts via `next/font/google`: Fraunces (display), Newsreader (body), JetBrains Mono
- Path alias: `@/*` → repo root

## Layout

```text
app/
  layout.tsx         # fonts + ToastProvider
  page.tsx           # post index
  posts/[slug]/      # post page
  about/             # bio
  globals.css        # Tailwind v4 + custom CSS vars (ink, rule, etc.)
components/          # Masthead(+Client), Footer, PostsList, CopyLink, ReadingProgress, Toast
content/posts/       # source of truth — *.md / *.mdx
lib/posts.ts         # filesystem reader
```

## Posts

Frontmatter (gray-matter):

| Field     | Required | Notes |
| --------- | -------- | ----- |
| `title`   | yes      | falls back to slug |
| `date`    | no       | ISO; falls back to file mtime |
| `tag`     | no       | single word; `tags` accepted as alias |
| `excerpt` | no       | one-liner for index |
| `draft`   | no       | `true` hides post |
| `published` | no     | `false` also hides post |

Slug = filename without `.md`. Reading time = words / 220, min 1.

`getAllPosts()` cached in production, re-read every call in dev.

## Commands

```bash
npm run dev     # next dev (turbopack)
npm run build   # next build
npm start       # next start
```

No test runner, no linter configured. No CI.

## Conventions

- Server components by default. Client components live in `components/*Client.tsx` or use `"use client"` explicitly (see `MastheadClient`, `Toast`).
- Style via Tailwind utility classes + CSS vars from `globals.css` (`text-ink`, `text-ink-faint`, `border-rule`, `font-display`, `font-mono`). Match editorial minimalist aesthetic — restrained type, generous whitespace, mono small-caps for labels.
- Dates always ISO strings out of `lib/posts.ts`.
- Don't introduce a database, CMS, auth, or external state. Static-friendly is the design constraint.
- Don't add deps without a clear reason — current set is intentionally small.

## Gotchas

- `lib/posts.ts:67-74` re-reads each file inside the filter to recheck draft/published. Inefficient but harmless; if touching, fold draft check into the initial map.
- `next.config.ts` is empty — any plugin/redirect/image config needs adding here.
- Tailwind v4 uses CSS-first config; no JS config file. Theme tokens live in `app/globals.css`.

## Out of scope

No tests yet. No analytics. No comments. No RSS (could be added — see `content/posts/` + `lib/posts.ts`). Don't build these unless asked.
