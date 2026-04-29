import type { Post } from "@/lib/posts";
import { CopyLink } from "@/components/CopyLink";
import { formatLongDate } from "@/lib/format";

export function PostFooter({ post }: { post: Post }) {
  const long = formatLongDate(post.date);
  return (
    <div className="mt-20 pt-10 border-t border-rule flex items-center justify-between gap-4 flex-wrap">
      <div className="text-ink-soft">
        <div className="font-display-italic text-2xl text-sienna">
          — Rosniel
        </div>
        <div className="mt-1 text-sm">
          Published <time dateTime={post.date}>{long}</time>
        </div>
      </div>
      <CopyLink slug={post.slug} />
    </div>
  );
}
