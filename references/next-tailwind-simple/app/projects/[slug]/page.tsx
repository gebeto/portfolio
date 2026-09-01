import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts, getProjects, baseUrl } from "app/utils";

export async function generateStaticParams() {
  let projects = getProjects();

  return projects;
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">) {
  const params = await props.params;
  let project = getProjects().find((project) => project.slug === params.slug);
  if (!project) {
    return;
  }

  let { title, date: publishedTime, description, image } = project.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/projects/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// export default async function Project(props: {
//   params: Promise<{ slug: string }>;
// }) {
export default async function Project(props: PageProps<"/projects/[slug]">) {
  const params = await props.params;
  let project = getProjects().find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: project.metadata.title,
            datePublished: project.metadata.date,
            dateModified: project.metadata.date,
            description: project.metadata.description,
            image: project.metadata.image
              ? `${baseUrl}${project.metadata.image}`
              : `/og?title=${encodeURIComponent(project.metadata.title)}`,
            url: `${baseUrl}/projects/${project.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {project.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(project.metadata.date)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={project.content} />
      </article>
    </section>
  );
}
