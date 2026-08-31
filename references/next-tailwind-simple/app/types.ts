export type BlogPostMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export type ProjectMetadata = {
  title: string;
  publishedAt: string;
  link: string;
  description?: string;
  image?: string;
  cardType: "small" | "wide";
  layoutSpan: string;
};

export type MDXMetadata = BlogPostMetadata | ProjectMetadata;
export type MDXResource<T extends MDXMetadata> = {
  metadata: T;
  slug: string;
  content: string;
};
