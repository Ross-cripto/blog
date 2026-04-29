# Rosniel — Blog

A small personal blog built end-to-end in **Next.js 16** (App Router).
Posts are plain Markdown files in this repository — no database, no admin
panel, no login. To publish, you add a file and push to git.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Markdown** content with **gray-matter** frontmatter
- **marked** for rendering
- **Tailwind v4** + custom CSS for the editorial look
- Type set in **Fraunces**, **Newsreader**, **JetBrains Mono** (via `next/font`)

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing a post

1. Create a new file in `content/posts/` — for example `my-new-post.md`.
2. Add the frontmatter and your content:

   ```markdown
   ---
   title: "My New Post"
   date: "2026-04-28"
   tag: "essay"
   excerpt: "One sentence shown in the post list."
   ---

   Your post body, in Markdown.
   ```

3. Save. The post appears at `/posts/my-new-post`.

### Frontmatter fields

| Field      | Required | Notes                                                   |
| ---------- | -------- | ------------------------------------------------------- |
| `title`    | yes      | Heading shown on the post page                          |
| `date`     | no       | ISO date; falls back to file mtime                      |
| `tag`      | no       | One word — used for grouping and the filter chips       |
| `excerpt`  | no       | One-sentence summary for the post list                  |
| `draft`    | no       | `true` to hide the post from the index and routing      |

The slug is the filename without `.md`.

## Project structure

```
app/
  page.tsx              # post index
  posts/[slug]/page.tsx # individual post
  about/page.tsx        # bio
components/             # Masthead, Footer, PostsList, etc.
content/
  posts/                # ← all posts live here
lib/
  posts.ts              # filesystem reader
```

## Deploy

The blog is fully static-friendly. Run:

```bash
npm run build
npm start
```

Or deploy to any host that runs Next.js (Vercel, Netlify, your own box).
The only files needed at runtime are this repository — there's no external
state to provision.

## License

Words © Rosniel. Code is open for study; pull requests welcome.