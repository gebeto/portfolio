import { PostList, PostListItem } from "./PostList";
import { getAllPosts, formatDate } from "@/lib/content";

const COUNT_WORDS = ["zero", "one", "two", "three", "four", "five", "six"];

export function WritingSection() {
  const essays = getAllPosts()
    .filter((post) => post.tags.includes("essay"))
    .slice(0, 4);

  const items: PostListItem[] = essays.map((post) => ({
    kicker: "Essay",
    title: post.title,
    href: `/blog/${post.slug}`,
    internal: true,
    excerpt: post.excerpt,
    date: formatDate(post.date),
  }));

  return (
    <section id="writing">
      <div className="sec-head">
        <span className="sec-title">Writing</span>
        <span className="sec-num">{COUNT_WORDS[items.length] ?? items.length} essays</span>
      </div>
      <PostList items={items} />
    </section>
  );
}
