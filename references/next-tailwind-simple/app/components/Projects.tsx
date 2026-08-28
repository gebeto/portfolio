import Link from "next/link";
import React from "react";
import { getProjects, ProjectMetadata } from "app/utils";
import { Project, ViewMore } from "./ProjectCard";

export function Projects({ limit = 0 }: { limit: number }) {
  const _allProjects = getProjects();

  const limitedProjects = React.useMemo(() => {
    if (limit) {
      return _allProjects.slice(0, limit);
    }
    return _allProjects;
  }, [limit]);

  return (
    <div className="grid grid-cols-6 gap-4 -mx-20">
      {limitedProjects
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
      {limit > 0 && <ViewMore />}
    </div>
  );
}
