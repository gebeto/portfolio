import type { Metadata } from "next";
import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { BlogSearch } from "@/components/BlogSearch";
import { getAllPosts } from "@/lib/content";

import './styles.css'

export const metadata: Metadata = {
  title: "Blog \u2014 Yaroslav Nychkalo",
  description: "Short notes and longer essays on shipping software quietly.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="page">
      <TopBar />

      <Link href="/" className="back-link">&larr; Back to portfolio</Link>

      <header className="page-title">
        <h1>Blog</h1>
        <p className="sub">
          Short notes and longer essays on shipping software quietly &mdash; infrastructure, product engineering, and the occasional detour into books and process.
        </p>
      </header>

      <BlogSearch posts={posts} />

      <Footer variant="blog" />
    </div>
  );
}
