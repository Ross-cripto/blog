import type { Post } from "@/lib/posts";
import { formatLongDate } from "@/lib/format";

export function PostHeader({ post }: { post: Post }) {
  const long = formatLongDate(post.date);
  return (
    <header className="mb-12 rise">
      <div className="flex items-center gap-3 text-sm font-mono text-ink-faint">
        {post.tag && <span className="pill">{post.tag.toLowerCase()}</span>}
        <time dateTime={post.date}>{long}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime} min read</span>
      </div>
      <h1
        className="mt-6 font-display text-[2.4rem] md:text-[3.6rem] leading-[1] tracking-[-0.025em] font-light text-ink"
        style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
      >
        {post.title}
      </h1>
      {post.excerpt && (
        <p className="mt-5 text-xl md:text-[1.35rem] leading-[1.45] text-ink-soft font-display-italic">
          {post.excerpt}
        </p>
      )}
    </header>
  );
}
