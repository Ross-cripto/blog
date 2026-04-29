import Link from "next/link";
import type { Post } from "@/lib/posts";

export function PostNav({
  prev,
  next,
}: {
  prev: Post | null;
  next: Post | null;
}) {
  if (!prev && !next) return null;
  return (
    <nav
      className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4"
      aria-label="More posts"
    >
      {prev ? (
        <Link
          href={`/posts/${prev.slug}`}
          className="block border border-rule p-6 hover:border-sienna transition-colors group"
        >
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-faint mb-2">
            ← Older post
          </div>
          <div className="font-display text-xl leading-tight tracking-[-0.01em] text-ink group-hover:text-sienna">
            {prev.title}
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/posts/${next.slug}`}
          className="block border border-rule p-6 hover:border-sienna transition-colors group md:text-right"
        >
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-faint mb-2">
            Newer post →
          </div>
          <div className="font-display text-xl leading-tight tracking-[-0.01em] text-ink group-hover:text-sienna">
            {next.title}
          </div>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
