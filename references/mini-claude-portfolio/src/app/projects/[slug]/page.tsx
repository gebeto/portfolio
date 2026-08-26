import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { getAllProjects, getProjectSlugs } from "@/lib/content";

import "../../post.css";

export function generateStaticParams() {
    return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = getAllProjects().find((p) => p.slug === slug);
    if (!project) return { title: "Project not found" };
    return {
        title: `${project.name} — Yaroslav Nychkalo`,
        description: project.desc,
    };
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = getAllProjects().find((p) => p.slug === slug);
    if (!project) notFound();

    const { default: Body } = await import(
        `@/content/projects/${slug}/index.mdx`
    );

    return (
        <div className="page">
            <TopBar />

            <header className="post-header">
                <div className="kicker-row" style={{ marginTop: 0 }}>
                    <span>{project.year}</span>
                    <span className="sep">&middot;</span>
                    <span>{project.status}</span>
                </div>
                <h1>{project.name}</h1>
                <p className="lede">{project.desc}</p>
            </header>

            <article className="post-body">
                <Body />
                <div className="post-tags-foot">
                    {project.tags.map((t) => (
                        <span key={t}>#{t}</span>
                    ))}
                </div>
            </article>

            <nav className="post-nav">
                <Link href="/#projects">
                    <span className="label">&larr; Back</span>
                    <span className="title">All projects</span>
                </Link>
            </nav>

            <Footer variant="post" />
        </div>
    );
}
