import fs from "node:fs";
import path from "node:path";

export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  /** Raw markdown body (frontmatter stripped). */
  content: string;
}

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

// Minimal YAML-frontmatter reader (no external deps). Parses the leading
// `---` block of each markdown/MDX file in src/content/posts.
function parseFrontmatter(raw: string): Record<string, string> {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return {};
  const out: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    value = value.replace(/^["']|["']$/g, "");
    if (key) out[key] = value;
  }
  return out;
}

export function getAllPosts(): Post[] {
  let files: string[] = [];
  try {
    files = fs
      .readdirSync(POSTS_DIR)
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  } catch {
    return [];
  }

  const posts: Post[] = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    let raw = "";
    try {
      raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    } catch {
      /* ignore unreadable file */
    }
    return buildPost(slug, raw);
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

// Strip the leading `---` frontmatter block and return the markdown body.
function stripFrontmatter(raw: string): string {
  const match = raw.match(/^---\s*\n[\s\S]*?\n---\s*\n?([\s\S]*)$/);
  return (match ? match[1] : raw).trim();
}

// Build a complete Post from a slug and the raw file contents.
function buildPost(slug: string, raw: string): Post {
  const fm = parseFrontmatter(raw);
  return {
    slug,
    title: fm.title ?? slug,
    description: fm.description ?? fm.excerpt ?? "",
    category: fm.category ?? "Insurance",
    readTime: fm.readTime ?? fm.readingTime ?? "4 min read",
    date: fm.date ?? "",
    author: fm.author ?? "Lumberjack Insurance",
    image: fm.image ?? fm.hero ?? "",
    content: stripFrontmatter(raw),
  };
}

export function getPostBySlug(slug: string): Post | null {
  for (const ext of [".mdx", ".md"]) {
    try {
      const raw = fs.readFileSync(path.join(POSTS_DIR, slug + ext), "utf8");
      return buildPost(slug, raw);
    } catch {
      continue; // try the next extension
    }
  }
  return null;
}
