import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const WORDS_PER_MINUTE = 220;

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tag: string;
  readingTime: number;
  content: string;
};

type Frontmatter = {
  title?: string;
  date?: string | Date;
  excerpt?: string;
  tag?: string;
  tags?: string;
  draft?: boolean;
  published?: boolean;
};

function readingTime(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function toIsoDate(d: string | Date | undefined, fallback: Date): string {
  if (!d) return fallback.toISOString();
  if (d instanceof Date) return d.toISOString();
  const parsed = new Date(d);
  return Number.isNaN(parsed.getTime())
    ? fallback.toISOString()
    : parsed.toISOString();
}

function isPublished(fm: Frontmatter): boolean {
  return fm.draft !== true && fm.published !== false;
}

function parsePost(filename: string): Post | null {
  const slug = filename.replace(/\.mdx?$/, "");
  const filePath = path.join(POSTS_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as Frontmatter;

  if (!isPublished(fm)) return null;

  const stat = fs.statSync(filePath);
  return {
    slug,
    title: fm.title?.trim() || slug,
    date: toIsoDate(fm.date, stat.mtime),
    excerpt: fm.excerpt?.trim() ?? "",
    tag: (fm.tag ?? fm.tags ?? "").toString().trim(),
    readingTime: readingTime(content),
    content,
  };
}

function loadAll(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map(parsePost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

let cache: Post[] | null = null;

export function getAllPosts(): Post[] {
  if (process.env.NODE_ENV === "production") {
    if (!cache) cache = loadAll();
    return cache;
  }
  return loadAll();
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}

export function getAdjacentPosts(slug: string): {
  prev: Post | null;
  next: Post | null;
} {
  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx < all.length - 1 ? all[idx + 1] : null,
    next: idx > 0 ? all[idx - 1] : null,
  };
}

export function getAllTags(): string[] {
  return Array.from(
    new Set(
      getAllPosts()
        .map((p) => p.tag.toLowerCase())
        .filter(Boolean),
    ),
  ).sort();
}
