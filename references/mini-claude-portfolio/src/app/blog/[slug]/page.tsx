import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { getAllPosts, getPostSlugs, formatDate } from "@/lib/content";

import "../../post.css";

export function generateStaticParams() {
    return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getAllPosts().find((p) => p.slug === slug);
    if (!post) return { title: "Post not found" };
    return {
        title: `${post.title} — Yaroslav Nychkalo`,
        description: post.excerpt,
    };
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const posts = getAllPosts();
    const postIndex = posts.findIndex((p) => p.slug === slug);
    if (postIndex === -1) notFound();

    const post = posts[postIndex];
    const prevPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;
    const nextPost = postIndex > 0 ? posts[postIndex - 1] : null;

    const { default: Body } = await import(
        `@/content/blog/${slug}/index.mdx`
    );

    return (
        <div className="page">
            <TopBar />

            <header className="post-header">
                <div className="kicker-row" style={{ marginTop: 0 }}>
                    <span>{formatDate(post.date)}</span>
                    <span className="sep">&middot;</span>
                    <span>{post.read} min read</span>
                    <span className="sep">&middot;</span>
                    <span>
                        {post.tags[0]
                            ? post.tags[0].charAt(0).toUpperCase() +
                              post.tags[0].slice(1)
                            : ""}
                    </span>
                </div>
                <h1>{post.title}</h1>
                <p className="lede">{post.excerpt}</p>
            </header>

            <article className="post-body">
                <Body />
                <div className="post-tags-foot">
                    {post.tags.map((t) => (
                        <span key={t}>#{t}</span>
                    ))}
                </div>
            </article>

            <nav className="post-nav">
                {prevPost ? (
                    <Link href={`/blog/${prevPost.slug}`}>
                        <span className="label">&larr; Previous</span>
                        <span className="title">{prevPost.title}</span>
                    </Link>
                ) : (
                    <a className="disabled">
                        <span className="label">&larr; Previous</span>
                        <span className="title">
                            You&rsquo;re at the newest post
                        </span>
                    </a>
                )}
                {nextPost ? (
                    <Link href={`/blog/${nextPost.slug}`} className="next">
                        <span className="label">Next &rarr;</span>
                        <span className="title">{nextPost.title}</span>
                    </Link>
                ) : (
                    <a className="disabled next">
                        <span className="label">Next &rarr;</span>
                        <span className="title">
                            You&rsquo;re at the oldest post
                        </span>
                    </a>
                )}
            </nav>

            <Footer variant="post" />
        </div>
    );
}
