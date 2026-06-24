import fs from "node:fs";
import path from "node:path";

export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
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
    let fm: Record<string, string> = {};
    try {
      fm = parseFrontmatter(fs.readFileSync(path.join(POSTS_DIR, file), "utf8"));
    } catch {
      /* ignore unreadable file */
    }
    return {
      slug,
      title: fm.title ?? slug,
      description: fm.description ?? fm.excerpt ?? "",
      category: fm.category ?? "Insurance",
      readTime: fm.readTime ?? fm.readingTime ?? "4 min read",
      date: fm.date ?? "",
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
