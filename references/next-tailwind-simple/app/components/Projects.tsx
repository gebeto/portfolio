import React from "react";
import { getProjects } from "app/utils";
import { ProjectsGrid } from "./ProjectsGrid";

export function Projects({ limit = 0 }: { limit: number }) {
  const _allProjects = getProjects();

  const limitedProjects = React.useMemo(() => {
    if (limit) {
      return _allProjects.slice(0, limit);
    }
    return _allProjects;
  }, [limit]);

  return <ProjectsGrid projects={limitedProjects} showViewMore={limit > 0} />;
}
