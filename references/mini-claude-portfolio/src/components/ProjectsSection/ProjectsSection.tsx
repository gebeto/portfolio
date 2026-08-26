"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project, TagCount } from "@/lib/content";

import "./ProjectsSection.css";

const QUIET_STATUSES = ["Paused", "Archived", "Maintained"];

export function ProjectsSection({
  projects,
  tags,
}: {
  projects: Project[];
  tags: TagCount[];
}) {
  const [filter, setFilter] = useState("all");

  return (
    <section id="projects">
      <div className="sec-head">
        <span className="sec-title">Selected projects</span>
        <span className="sec-num">{projects.length}</span>
      </div>

      <div className="filters">
        {tags.map((t) => (
          <button
            key={t.tag}
            className={`filter-btn${filter === t.tag ? " active" : ""}`}
            onClick={() => setFilter(t.tag)}
          >
            {t.label} <span className="n">{t.count}</span>
          </button>
        ))}
      </div>

      <div className="projects-list">
        {projects.map((p) => {
          const show = filter === "all" || p.tags.includes(filter);
          const statusClass = QUIET_STATUSES.includes(p.status)
            ? "status-pill quiet"
            : "status-pill";
          return (
            <div key={p.slug} className={`proj${show ? "" : " hidden"}`}>
              <div className="top-row">
                <div className="year mono">{p.year}</div>
                <span className={statusClass}>{p.status}</span>
              </div>
              <Link href={`/projects/${p.slug}`} className="name">
                {p.name}
                <span className="arrow">&rarr;</span>
              </Link>
              <div className="desc">{p.desc}</div>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>#{t}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
