import type { MDXComponents } from "mdx/types";

/**
 * mdx-components.tsx — Next.js 15 MDX convention.
 * Maps default HTML elements to styled equivalents when MDX files are
 * rendered directly via `@next/mdx`. Our blog posts use the gray-matter +
 * markdownToHtml path (see src/lib/markdown.ts + src/lib/blog.ts), so this
 * is here primarily to satisfy the `@next/mdx` pageExtensions wiring and
 * to provide sensible defaults for any future MDX pages.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} />,
    h2: (props) => <h2 {...props} />,
    h3: (props) => <h3 {...props} />,
    p: (props) => <p {...props} />,
    ul: (props) => <ul {...props} />,
    ol: (props) => <ol {...props} />,
    li: (props) => <li {...props} />,
    a: (props) => <a {...props} />,
    strong: (props) => <strong {...props} />,
    em: (props) => <em {...props} />,
    ...components,
  };
}
