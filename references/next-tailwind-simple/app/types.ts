export type ThoughtsMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export type ProjectMetadata = {
  title: string;
  date: string;
  description?: string;
  link: string;
  image?: string;
  cardType: "small" | "wide";
  layoutSpan: string;
};

export type MDXMetadata = ThoughtsMetadata | ProjectMetadata;
export type MDXResource<T extends MDXMetadata> = {
  metadata: T;
  slug: string;
  content: string;
};
