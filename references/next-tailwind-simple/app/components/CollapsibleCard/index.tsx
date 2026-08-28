"use client";

import React from "react";
import { ProjectMetadata } from "app/utils";
import "./styles.css";

export const CollapsibleCard: React.FC<{
  slug: string;
  project: ProjectMetadata;
}> = ({ slug, project }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const imageSrc = `/content/${slug}/images/${project.image}`;

  return (
    <div
      className={`bg-gray-950 border border-gray-900 w-full max-w-full flex flex-col col-span-6 rounded-xl overflow-hidden group parent-appear-transition ${open ? "open" : "close"}`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex">
        <div className="p-3 flex items-start">
          <img
            width="48"
            height="48"
            style={{ maxHeight: 36, width: "auto" }}
            src={imageSrc}
          />
        </div>
        <div className="bg-gray-950 px-4 flex flex-col justify-center leading-normal p-2">
          <div>
            <div className="text-gray-200 font-bold text-xl transition duration-350 translate-y-2 group-hover:translate-y-0">
              {project.title}
            </div>
            <p className="text-gray-300 text-base text-xs opacity-0 transition duration-350 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 rotate-z-3 group-hover:rotate-z-0">
              {project.description}
            </p>
          </div>
        </div>
      </div>
      <div className="parent-appear-transition-child">
        <div className="overflow-hidden">
          <p className="mt-2 p-2">{project.description}</p>
          <a
            href={project.link}
            className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20"
          >
            Link
          </a>

          <p className="flex justify-end">
            <img src={imageSrc} height="100" className="h-100" />
          </p>
        </div>
      </div>
    </div>
  );
};
