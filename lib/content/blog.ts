import "server-only";

import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

import type { Post, PostCategory, PostMeta } from "@/lib/content/post";

/**
 * Blog içerik katmanı.
 *
 * İçerikler `content/blog/*.md` dosyalarından okunur. Tüm sayfalar yalnızca
 * `BlogRepository` arayüzüne bağımlıdır; ileride Sanity / Contentful / Supabase
 * gibi bir CMS'e geçilmek istendiğinde yalnızca bu dosyada yeni bir repository
 * implementasyonu yazmak ve `blog` export'unu değiştirmek yeterlidir.
 */

export type { Post, PostMeta, PostCategory } from "@/lib/content/post";
export { formatPostDate } from "@/lib/content/post";

export interface BlogRepository {
  getAllPosts(): Promise<PostMeta[]>;
  getPostBySlug(slug: string): Promise<Post | null>;
  getRelatedPosts(slug: string, limit?: number): Promise<PostMeta[]>;
  getCategories(): Promise<{ name: PostCategory; count: number }[]>;
}

const POSTS_DIR = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 180;

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function toPost(fileName: string, raw: string): Post {
  const { data, content } = matter(raw);
  const slug = fileName.replace(/\.mdx?$/, "");

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? "1970-01-01"),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    category: (data.category ?? "Ebeveynlik") as PostCategory,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: Number(data.readingTime) || estimateReadingTime(content),
    cover: data.cover ? String(data.cover) : undefined,
    coverAlt: data.coverAlt ? String(data.coverAlt) : undefined,
    draft: Boolean(data.draft),
    content,
  };
}

/** Build sırasında dosyaların tekrar tekrar okunmasını engelleyen basit önbellek. */
let cache: Post[] | null = null;

async function readAll(): Promise<Post[]> {
  if (cache && process.env.NODE_ENV === "production") return cache;

  let files: string[] = [];
  try {
    files = await fs.readdir(POSTS_DIR);
  } catch {
    return [];
  }

  const posts = await Promise.all(
    files
      .filter((f) => /\.mdx?$/.test(f))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(POSTS_DIR, file), "utf8");
        return toPost(file, raw);
      })
  );

  const published = posts
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  cache = published;
  return published;
}

function toMeta({ content: _content, ...meta }: Post): PostMeta {
  return meta;
}

export const fileSystemBlogRepository: BlogRepository = {
  async getAllPosts() {
    return (await readAll()).map(toMeta);
  },

  async getPostBySlug(slug) {
    return (await readAll()).find((p) => p.slug === slug) ?? null;
  },

  async getRelatedPosts(slug, limit = 3) {
    const all = await readAll();
    const current = all.find((p) => p.slug === slug);
    if (!current) return all.slice(0, limit).map(toMeta);

    const scored = all
      .filter((p) => p.slug !== slug)
      .map((p) => {
        const sharedTags = p.tags.filter((t) => current.tags.includes(t)).length;
        const sameCategory = p.category === current.category ? 2 : 0;
        return { post: p, score: sharedTags + sameCategory };
      })
      .sort((a, b) => b.score - a.score || (a.post.date < b.post.date ? 1 : -1));

    return scored.slice(0, limit).map((s) => toMeta(s.post));
  },

  async getCategories() {
    const all = await readAll();
    const counts = new Map<PostCategory, number>();
    for (const post of all) {
      counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
    }
    return [...counts.entries()]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  },
};

/** Aktif içerik kaynağı. CMS'e geçişte yalnızca bu satır değişir. */
export const blog: BlogRepository = fileSystemBlogRepository;
