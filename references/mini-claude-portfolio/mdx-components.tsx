import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

// Pull-quote used inside post bodies (styled by `.post-body .pull`).
function Pull({ children }: { children: React.ReactNode }) {
  return <div className="pull">{children}</div>;
}

// Colocated images: import the file at the top of the .mdx and render it here.
// `unoptimized` is required because the site is a static export (`output: export`).
function Img({ alt = "", ...props }: ImageProps) {
  return <Image alt={alt} {...props} unoptimized />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Pull,
    Img,
  };
}
