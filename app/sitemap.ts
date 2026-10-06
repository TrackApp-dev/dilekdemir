import type { MetadataRoute } from "next";

import { blog } from "@/lib/content/blog";
import { services } from "@/lib/content/services";
import { absoluteUrl } from "@/lib/seo";

/** Statik dışa aktarmada derleme anında bir kez üretilir. */
export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/hakkimda"), lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/hizmetler"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/randevu"), lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/sss"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/iletisim"), lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/kvkk"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/gizlilik-politikasi"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/cerez-politikasi"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/hizmetler/${service.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const posts = await blog.getAllPosts();
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt ?? post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...postRoutes];
}
