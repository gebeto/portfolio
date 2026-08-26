import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  options: {
    // String references keep the config serializable for Turbopack.
    remarkPlugins: [["remark-frontmatter"], ["remark-gfm"]],
    rehypePlugins: [
      [
        "rehype-pretty-code",
        {
          // Dual themes emit `--shiki-light` / `--shiki-dark` CSS vars; CSS
          // picks the active one so it tracks the site's theme toggle.
          theme: { light: "github-light", dark: "github-dark" },
          // Let our own CSS own the block background.
          keepBackground: false,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
