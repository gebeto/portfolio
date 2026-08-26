import Link from "next/link";
import { PostList, PostListItem } from "./PostList";
import { getAllPosts, formatDate } from "@/lib/content";

export function BlogSection() {
  const items: PostListItem[] = getAllPosts()
    .slice(0, 3)
    .map((post) => ({
      title: post.title,
      href: `/blog/${post.slug}`,
      internal: true,
      excerpt: post.excerpt,
      date: formatDate(post.date),
    }));

  return (
    <section id="blog">
      <div className="sec-head">
        <span className="sec-title">Blog</span>
        <Link href="/blog" className="sec-num">All posts &rarr;</Link>
      </div>
      <PostList items={items} />
    </section>
  );
}
