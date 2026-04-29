---
title: "Writing in Markdown, Pushing to Git"
date: "2026-04-26"
tag: "fragment"
excerpt: "Why this blog has no admin, no database, and no login — and why that's the point."
---

I removed the database from this blog today.

For a week the site ran on SQLite with a small CMS I had built — a real editor, autosave, drafts, the whole thing. It worked. I deleted it anyway.

The reason is unromantic. I want this repository to be public, and I want anyone reading it to be able to clone it, run `npm install`, and have something they can read in five minutes. A database adds a file you cannot show. A login adds a secret you cannot ship. The CMS, however nice, was a wall between the writing and anyone curious enough to look.

So now the rule is plain: a post is a `.md` file in `content/posts/`. The filename is the URL. Three lines of frontmatter, then the writing. To publish, push to git.

```markdown
---
title: "A new post"
date: "2026-04-28"
tag: "essay"
excerpt: "One sentence."
---

The body, in Markdown.
```

That is the whole interface.

I miss the autosave a little. I do not miss the rest.
