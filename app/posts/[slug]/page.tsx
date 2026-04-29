import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getAdjacentPosts } from "@/lib/posts";
import { renderMarkdown } from "@/lib/markdown";
import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import { BackLink } from "@/components/ui/BackLink";
import { ReadingProgress } from "@/components/ReadingProgress";
import { PostHeader } from "@/components/post/PostHeader";
import { PostBody } from "@/components/post/PostBody";
import { PostFooter } from "@/components/post/PostFooter";
import { PostNav } from "@/components/post/PostNav";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found" };
  return {
    title: `${post.title} — Rosniel`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);
  const html = await renderMarkdown(post.content);

  return (
    <>
      <ReadingProgress />
      <Masthead compact />
      <main className="mx-auto max-w-[760px] px-6 md:px-10 pt-10 md:pt-16">
        <BackLink />
        <article className="mt-8">
          <PostHeader post={post} />
          <PostBody html={html} />
          <PostFooter post={post} />
        </article>
        <PostNav prev={prev} next={next} />
      </main>
      <Footer />
    </>
  );
}
