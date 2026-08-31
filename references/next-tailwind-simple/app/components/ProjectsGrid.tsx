"use client";

import { MDXResource, ProjectMetadata } from "app/types";
import { Project, ViewMore } from "./ProjectCard";
import { useIsMobile } from "./utils";

export function ProjectsGrid({
  projects,
  showViewMore,
}: {
  projects: MDXResource<ProjectMetadata>[];
  showViewMore: boolean;
}) {
  const isMobile = useIsMobile();

  const responsiveClassName = isMobile ? "" : "-mx-20";

  return (
    <div className={`grid grid-cols-6 gap-4 ${responsiveClassName}`}>
      {projects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((projects) => (
          <Project
            key={projects.slug}
            slug={projects.slug}
            project={projects.metadata}
          />
        ))}
      {showViewMore && <ViewMore />}
    </div>
  );
}
