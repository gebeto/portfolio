import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export { formatDate } from "./format";

const CONTENT_DIR = path.join(process.cwd(), "src", "content");

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  read: number;
  tags: string[];
}

export interface Project {
  slug: string;
  year: string;
  name: string;
  desc: string;
  tags: string[];
  status: string;
}

export interface Repo {
  slug: string;
  name: string;
  desc: string;
  lang: string;
  stars: number;
  forks: number;
}

export interface TagCount {
  tag: string;
  label: string;
  count: number;
}

// Language dot colors for repo cards — presentation config, not content.
export const LANGS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1c40f",
  Go: "#00ADD8",
  Rust: "#b05b3b",
  Python: "#4a7db0",
  Shell: "#89b382",
};

// Read every `<slug>/index.mdx` frontmatter block under a collection folder.
function readCollection(type: string): { slug: string; data: Record<string, unknown> }[] {
  const dir = path.join(CONTENT_DIR, type);
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory())
    .map((e) => {
      const file = path.join(dir, e.name, "index.mdx");
      const { data } = matter(fs.readFileSync(file, "utf8"));
      return { slug: e.name, data };
    });
}

export function getAllPosts(): Post[] {
  return readCollection("blog")
    .map(({ slug, data }) => ({
      slug,
      title: String(data.title ?? ""),
      excerpt: String(data.excerpt ?? ""),
      date: String(data.date ?? ""),
      read: Number(data.read ?? 0),
      tags: (data.tags as string[]) ?? [],
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getAllProjects(): Project[] {
  return readCollection("projects")
    .map(({ slug, data }) => ({
      project: {
        slug,
        year: String(data.year ?? ""),
        name: String(data.name ?? ""),
        desc: String(data.desc ?? ""),
        tags: (data.tags as string[]) ?? [],
        status: String(data.status ?? ""),
      } satisfies Project,
      order: Number(data.order ?? 0),
    }))
    .sort((a, b) => a.order - b.order)
    .map((e) => e.project);
}

export function getProject(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug);
}

// Derive the project tag filter (with counts) from frontmatter.
export function getProjectTags(): TagCount[] {
  const projects = getAllProjects();
  const counts = new Map<string, number>();
  for (const p of projects) {
    for (const tag of p.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  const tags = [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tag, count]) => ({
      tag,
      label: tag.charAt(0).toUpperCase() + tag.slice(1),
      count,
    }));
  return [{ tag: "all", label: "All", count: projects.length }, ...tags];
}

export function getAllRepos(): Repo[] {
  return readCollection("repos")
    .map(({ slug, data }) => ({
      repo: {
        slug,
        name: String(data.name ?? ""),
        desc: String(data.desc ?? ""),
        lang: String(data.lang ?? ""),
        stars: Number(data.stars ?? 0),
        forks: Number(data.forks ?? 0),
      } satisfies Repo,
      order: Number(data.order ?? 0),
    }))
    .sort((a, b) => a.order - b.order)
    .map((e) => e.repo);
}
