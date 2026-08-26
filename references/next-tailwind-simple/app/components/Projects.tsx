import Link from 'next/link'
import React from 'react';
import { getProjects, ProjectMetadata } from 'app/blog/utils'

const SmallCard: React.FC<{ project: ProjectMetadata }> = ({ project }) => {
  return (
    // <div className="max-w-sm border w-full rounded-xl overflow-hidden shadow-lg bg-white">
    //   <img className="w-full" src="https://picsum.photos/300/200" alt="aui" />
    //   <div className="px-3 py-2">
    //     <div className="font-bold text-gray-900 text-l mb-0">The Coldest Sunset</div>
    //     {/* <p className="text-gray-700 text-s">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    //     </p> */}
    //   </div>
    // </div>
    <div
      className="group border relative max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg w-full"
    >
      <img
        src="https://picsum.photos/seed/picsum/300/200"
        alt="Product"
        className="h-48 w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 p-6 opacity-0 group-hover:opacity-100">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-white">{project.summary}</p>
        {/* <div className="text-xl font-bold text-white">$29.99</div> */}
      </div>
    </div>
  );
}

const WideCard: React.FC<{ project: ProjectMetadata }> = ({ project }) => {
  return (
    // <div className="max-w-sm border w-full lg:max-w-full lg:flex col-span-2 rounded-xl overflow-hidden">
    //   <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden" style={{backgroundImage: 'url(https://picsum.photos/200/300)'}} title="Woman holding a mug">
    //   </div>
    //   <div className="bg-white p-4 flex flex-col justify-between leading-normal">
    //     <div className="mb-8">
    //       <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
    //       <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    //     </div>
    //   </div>
    // </div>
    <div
      className="group border relative max-w-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg col-span-2 w-full"
    >
      <img
        src="https://picsum.photos/seed/picsum/1600/1400"
        alt="Product"
        className="h-48 w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 p-6 opacity-0 group-hover:opacity-100">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-white">{project.summary}</p>
        {/* <div className="text-xl font-bold text-white">$29.99</div> */}
      </div>
    </div>
  );
}

export function Projects() {
  const allProjects = getProjects()

  return (
    <div className="grid grid-cols-2 gap-4">
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((projects) => (
          <React.Fragment key={projects.slug}>
          {projects.metadata.cardType === 'small' && <SmallCard key={projects.slug} project={projects.metadata} />}
          {projects.metadata.cardType === 'wide' && <WideCard key={projects.slug} project={projects.metadata} />}
          </React.Fragment>
        ))}
          {/* <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link> */}
    </div>
  )
}
