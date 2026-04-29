"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { formatShortDate } from "@/lib/format";

type Item = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  readingTime: number;
};

export function PostsList({
  posts,
  allTags,
}: {
  posts: Item[];
  allTags: string[];
}) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (activeTag && p.tag.toLowerCase() !== activeTag) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q)
      );
    });
  }, [posts, query, activeTag]);

  return (
    <>
      <div className="border-y border-rule py-5 mb-10 grid gap-4 md:grid-cols-[1fr_auto] items-center">
        <div className="relative">
          <span
            aria-hidden
            className="absolute left-0 top-1/2 -translate-y-1/2 text-ink-faint"
          >
            ⌕
          </span>
          <input
            type="search"
            placeholder="Search posts…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="field pl-7 text-base"
            aria-label="Search posts"
          />
        </div>
        {allTags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-faint mr-1">
              Filter:
            </span>
            <button
              onClick={() => setActiveTag(null)}
              className={`pill cursor-pointer ${
                !activeTag ? "pill-published" : ""
              }`}
            >
              All
            </button>
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`pill cursor-pointer ${
                  activeTag === t ? "pill-published" : ""
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="py-24 text-center text-ink-faint">
          <div className="font-display text-2xl mb-2 text-ink-soft">
            No posts match.
          </div>
          <button
            onClick={() => {
              setQuery("");
              setActiveTag(null);
            }}
            className="btn-ghost text-sm underline text-sienna"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <ol className="divide-y divide-rule border-t border-rule">
          {filtered.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/posts/${p.slug}`}
                className="row-link block py-7 group"
              >
                <article className="grid grid-cols-12 gap-4 items-baseline">
                  <div className="col-span-12 md:col-span-2 font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">
                    <time dateTime={p.date}>{formatShortDate(p.date)}</time>
                    <div className="mt-1 text-ink-faint/80">
                      {p.readingTime} min read
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <h3 className="font-display text-2xl md:text-[1.85rem] leading-[1.15] tracking-[-0.012em] text-ink group-hover:text-sienna transition-colors">
                      {p.title}
                    </h3>
                    {p.excerpt && (
                      <p className="mt-2 text-ink-soft text-[1rem] leading-snug max-w-[42rem]">
                        {p.excerpt}
                      </p>
                    )}
                    <div className="mt-3 flex items-center gap-3">
                      {p.tag && (
                        <span className="pill">{p.tag.toLowerCase()}</span>
                      )}
                      <span className="text-sienna text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        Read article →
                      </span>
                    </div>
                  </div>
                  <div
                    className="hidden md:block col-span-2 text-right font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-faint"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
