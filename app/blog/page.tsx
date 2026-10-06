import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { AppointmentCta } from "@/components/sections/AppointmentSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { blog } from "@/lib/content/blog";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Çocuk gelişimi, ergenlik, ebeveynlik ve aile ilişkileri üzerine uygulanabilir öneriler içeren yazılar.",
  path: "/blog",
});

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    blog.getAllPosts(),
    blog.getCategories(),
  ]);

  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "Blog",
            "@id": absoluteUrl("/blog"),
            name: `${siteConfig.name} Blog`,
            description:
              "Çocuk, ergen ve aile psikolojisi üzerine ebeveynler için yazılar.",
            inLanguage: "tr-TR",
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: absoluteUrl(`/blog/${post.slug}`),
              datePublished: post.date,
            })),
          },
          breadcrumbSchema([{ name: "Blog", path: "/blog" }])
        )}
      />

      <PageHero
        eyebrow="Blog"
        title="Ebeveynler ve aileler için yazılar"
        description="Danışmanlık odasında en sık konuştuğumuz konuları; bilimsel dayanağı olan, evde uygulanabilir önerilerle birlikte yazıyorum."
        breadcrumbs={[{ name: "Blog", href: "/blog" }]}
      />

      <Section tone="white">
        <BlogGrid posts={posts} categories={categories} />
      </Section>

      <AppointmentCta />
    </>
  );
}
