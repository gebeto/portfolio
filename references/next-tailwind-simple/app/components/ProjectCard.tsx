"use client";

import React from "react";
import { ProjectMetadata } from "app/utils";
import { CollapsibleCard } from "./CollapsibleCard";

const spanClass = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
};

const SmallCard: React.FC<{ slug: string; project: ProjectMetadata }> = ({
  slug,
  project,
}) => {
  return (
    <a
      href={project.link}
      className={`group relative bg-white/[0.04] border border-white/[0.08] max-w-sm overflow-hidden rounded-lg shadow-md transition-shadow duration-200 hover:shadow-lg w-full ${spanClass[project.layoutSpan || 2]}`}
    >
      <img
        // src="https://picsum.photos/seed/picsum/300/200"
        src={`/content/${slug}/images/${project.image}`}
        alt="Product"
        className="h-48 w-full object-contain object-right-bottom"
      />
      <div className="absolute inset-0 bg-black/[0.6] p-6 transition duration-350 opacity-0 group-hover:opacity-100">
        <h3 className="text-lg font-semibold text-white transition duration-350 -translate-y-1 group-hover:translate-y-0 -rotate-z-5 group-hover:rotate-z-0">
          {project.title}
        </h3>
        <p className="text-white text-sm transition duration-350 translate-y-2 group-hover:translate-y-0 rotate-z-5 group-hover:rotate-z-0">
          {project.description}
        </p>
        {/* <div className="text-xl font-bold text-white">$29.99</div> */}
      </div>
    </a>
  );
};

// TODO: add more card styles
// TODO: add layout property into projects

const WideCard: React.FC<{ slug: string; project: ProjectMetadata }> = ({
  slug,
  project,
}) => {
  const imageSrc = `/content/${slug}/images/${project.image}`;

  return (
    <a
      href={project.link}
      className={`group bg-white/[0.04] border border-white/[0.08] relative max-w-full overflow-hidden rounded-lg shadow-md transition-shadow duration-200 hover:shadow-lg  w-full ${spanClass[project.layoutSpan || 4]}`}
    >
      <img
        src={imageSrc}
        alt="Product"
        className="h-48 w-full object-contain object-right-bottom"
      />
      <div className="absolute inset-0 p-6 bg-transparent transition duration-350 group-hover:bg-black/[0.3]">
        <h3 className="text-lg font-semibold text-white transition duration-350 -translate-y-1 group-hover:translate-y-0">
          {project.title}
        </h3>
        <div className="text-gray-300 text-sm max-w-1/2 transition duration-350 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 rotate-z-4 group-hover:rotate-z-0">
          {project.description}
        </div>
      </div>
    </a>
  );
};

const WideCardIcon: React.FC<{ slug: string; project: ProjectMetadata }> = ({
  slug,
  project,
}) => {
  const imageSrc = `/content/${slug}/images/${project.image}`;
  return (
    <a
      href={project.link}
      className={`bg-white/[0.04] border border-white/[0.08] w-full max-w-full flex ${spanClass[project.layoutSpan || 2]} rounded-xl overflow-hidden group`}
    >
      <div className="p-3 flex items-center">
        <img width="48" height="48" src={imageSrc} />
      </div>
      <div className="px-4 flex flex-col justify-center leading-normal p-2">
        <div>
          <div className="text-gray-200 font-bold text-xl transition duration-350 translate-y-4 group-hover:translate-y-0">
            {project.title}
          </div>
          <p className="text-gray-300 text-base text-xs opacity-0 transition duration-350 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 rotate-z-3 group-hover:rotate-z-0">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );
};

const cardsMap = {
  small: SmallCard,
  wide: WideCard,
  wide_icon: WideCardIcon,
};

export const ViewMore = () => (
  <div className="flex flex-col items-center justify-center text-center py-4 col-span-2">
    <div className="text-lg font-bold text-gray-50">Want to see more?</div>
    <div className="text-gray-200">Explore more of my work</div>
    <a
      className="mt-3 bg-gray-800 hover:bg-gray-700 text-gray-100 py-1 px-6 rounded-md"
      href="/projects"
    >
      View all
    </a>
  </div>
);

export function Project(props: { slug: string; project: ProjectMetadata }) {
  const collapsibleCard = false;

  if (collapsibleCard) {
    return <CollapsibleCard {...props} />;
  }

  const ProjectCard = cardsMap[props.project.cardType];

  if (ProjectCard) {
    return <ProjectCard {...props} />;
  }

  return <span>Unknown</span>;
}
