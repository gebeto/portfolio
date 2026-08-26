"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import type { Post } from "@/lib/content";
import { formatDate } from "@/lib/format";

import "./styles.css";

export function BlogSearch({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const filtered = posts.filter((post) => {
    if (!q) return true;
    const hay = `${post.title} ${post.excerpt} ${post.tags.join(" ")}`.toLowerCase();
    return hay.includes(q);
  });

  return (
    <>
      <div className="blog-tools">
        <div className="blog-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            placeholder="Search posts\u2026"
            aria-label="Search posts"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="blog-count">
          {filtered.length === posts.length
            ? `${posts.length} posts`
            : `${filtered.length} of ${posts.length}`}
        </div>
      </div>

      <div className="blog-list">
        {filtered.map((post, i) => {
          const year = post.date.slice(0, 4);
          const prevYear = i > 0 ? filtered[i - 1].date.slice(0, 4) : null;
          const showYear = year !== prevYear;
          return (
            <Fragment key={post.slug}>
              {showYear && <div className="year-head">{year}</div>}
              <article className="post">
                <h2 className="post-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <div className="post-meta">{formatDate(post.date)}</div>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-foot">
                  <div className="post-tags">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className={q && t.toLowerCase().includes(q) ? "match" : undefined}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span className="post-read">&middot; {post.read} min read</span>
                </div>
              </article>
            </Fragment>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="no-results">No posts match that search.</div>
      )}
    </>
  );
}
