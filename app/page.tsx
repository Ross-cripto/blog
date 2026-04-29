import { getAllPosts, getAllTags } from "@/lib/posts";
import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import { PostsList } from "@/components/PostsList";

export default function HomePage() {
  const all = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <Masthead />
      <main className="mx-auto max-w-[1180px] px-6 md:px-10 pt-10 md:pt-16">
        {all.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
              <div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-faint">
                  All posts
                </div>
                <h2 className="mt-1 font-display text-3xl md:text-4xl tracking-[-0.02em] text-ink">
                  {all.length} {all.length === 1 ? "post" : "posts"}
                </h2>
              </div>
              <p className="text-ink-faint text-sm max-w-md">
                Search by title or summary, or filter by topic. Click any title
                to read.
              </p>
            </div>

            <PostsList
              posts={all.map((p) => ({
                slug: p.slug,
                title: p.title,
                excerpt: p.excerpt,
                tag: p.tag,
                date: p.date,
                readingTime: p.readingTime,
              }))}
              allTags={tags}
            />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

function EmptyState() {
  return (
    <div className="border border-dashed border-rule py-24 px-6 text-center">
      <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-faint">
        Nothing published yet
      </div>
      <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-[-0.02em]">
        The blog is empty.
      </h2>
      <p className="mt-4 max-w-md mx-auto text-ink-soft">
        Add a Markdown file to <code>content/posts/</code> and it will appear
        here.
      </p>
    </div>
  );
}
