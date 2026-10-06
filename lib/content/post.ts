/**
 * İstemci ve sunucu tarafında ortak kullanılan blog tipleri ve yardımcıları.
 * (Dosya sistemine erişen repository katmanı için bkz. `lib/content/blog.ts`.)
 */

export type PostCategory =
  | "Çocuk"
  | "Ergen"
  | "Ebeveynlik"
  | "Aile"
  | "Okul"
  | "Sınav Kaygısı";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO 8601 (YYYY-MM-DD) */
  date: string;
  updatedAt?: string;
  category: PostCategory;
  tags: string[];
  /** Dakika cinsinden tahmini okuma süresi */
  readingTime: number;
  cover?: string;
  coverAlt?: string;
  draft?: boolean;
};

export type Post = PostMeta & {
  /** Ham markdown içeriği */
  content: string;
};

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
